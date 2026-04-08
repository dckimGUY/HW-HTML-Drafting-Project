/* === GLOBAL DRAG & DROP HANDLER (RIDICULOUS FAST EDITION) === */

// Helper: Batched Positioner to stop "Layout Thrashing"
const finalizePart = (el, x, y, w, h, idPrefix) => {
    const s = el.style;
    const snapX = Math.floor(x / T) * T + "px";
    const snapY = Math.floor(y / T) * T + "px";
    
    s.left = snapX; s.top = snapY;
    if(w) s.width = w; if(h) s.height = h;

    el.dataset.left = snapX; el.dataset.top = snapY;
    if(w) el.dataset.width = w; if(h) el.dataset.height = h;

    el.id = el.id.replace("coin", idPrefix);
};

// Helper: Automated Canvas Slicing
const sliceAndDistribute = (img, count, sheets) => {
    const cutter = document.createElement("canvas");
    const sw = img.width / count;
    cutter.width = sw; cutter.height = img.height;
    const ctx = cutter.getContext("2d");
    
    sheets.forEach((name, i) => {
        ctx.clearRect(0, 0, sw, img.height);
        ctx.drawImage(img, -(sw * i), 0);
        sheetImages[name].img.src = cutter.toDataURL("image/png");
    });
};

// 1. Allow the Drag
document.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
});

// 2. Handle the Drop
document.addEventListener('drop', async (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0]; // Get the first file
    if (!file) return;


// SECTION A: COMPRESSED HDUB PROJECT LOADING (Optimized)
if (file.name.startsWith("HDUB_")) {
    try {
        const ds = new DecompressionStream('gzip');
        const jsonText = await new Response(file.stream().pipeThrough(ds)).text(); 

        topLayer = JSON.parse(jsonText, (key, value) => {
            if (typeof value === "string" && value.startsWith("<div")) {
                const temp = document.createElement("div");
                temp.innerHTML = value;
                return temp.firstElementChild;
            }
            return value;
        });

        const current = topLayer[topLayer.a_currentLayer];
        filename = current.filename;
        pageEchelon = (current.echelon || 1) * 100000000;
        
        document.getElementById("documentTitle").innerText = filename;
        ui.projectName.ref.value = topLayer.aa_project_name;
        utilityLayer0.innerHTML = current.b_content.innerHTML;
        
        coinFocus = document.getElementById(current.e_coinFocus);
        coinFocus1 = document.getElementById(current.f_coinFocus);
        
        restorePointerEventsNone();
        recoverColouration();

        // Restore UI Input Shelf values
        ui.idNames.forEach(name => {
            const cap = topLayer.capitals?.[name]; // Safety check
            if (cap) {
                ui[name].value = (cap.value && cap.value.outerHTML) ? cap.value.outerHTML : cap.value.toString();
                ui[name].title = cap.title.toString();
                ui[name].colour = cap.colour.toString();
            }
        });

        // Final UI Refresh sequence
        updateInfoShelf(); 
        redraw(); 
        readCoins(); 
        Z(); 
        drawAllCells();
        
        // Restore Theme and Scroll position
        if (topLayer.projectThemes) {
            userCustomTheme = topLayer.projectThemes;
            loadTheme("currentTheme");
        }
        if (topLayer.lastScroll) window.scrollTo(topLayer.lastScroll);
        
        return; // Success exit
    } catch (err) { 
        console.error("HDUB Load Fail", err); 
        return; 
    }
}


    // SECTION B: FILENAME-BASED HDUB TEMPLATES (_btn_ / _img_)
    if (file.name.includes("_HDUB_")) {
        const parts = file.name.split("_HDUB_");
        const suffix = parts[1];
        const match = suffix.match(/_(\d)(btn|img)_/); 
        
        if (match) {
            const count = parseInt(match[1]);
            const type = match[2];
            const syntax = suffix.split(match[0])[1].replace(".png", "");
            const factor = parseInt(suffix.split(match[0])[0]);

            const reader = new FileReader();
            reader.onload = evt => {
                const img = new Image();
                img.onload = () => {
                    sheetImages.star.img = img;
                    drawArray(cropObject(100, 180, makeObject(clean(syntax))));
                    ["base", "focus", "hover", "active", "focusHover", "focusActive"].forEach(clearImageSheet);

                    const originalLayer = topLayer.a_currentLayer;
                    makeTopLayer("importer");

                    const sheetMap = count === 2 ? ["base", "active"] : 
                                   count === 4 ? ["base", "focus", "hover", "active"] : 
                                   ["base", "focus", "hover", "active", "focusHover", "focusActive"];
                    sliceAndDistribute(img, count, sheetMap);

                    const px = window.scrollX, py = window.scrollY;
                    window.scrollTo(0,0);
                    ui.hdubEnter.ref.click();

                    setTimeout(() => {
                        ui.getButtons.ref.click();
                        pixelationScale(factor);
                        makeTopLayer(originalLayer);
                        
                        Array.from(topLayer.importer.b_content.children).forEach(child => {
                            const newX = (parseInt(child.style.left) || 0) + px;
                            const newY = (parseInt(child.style.top) || 0) + py;
                            finalizePart(child, newX, newY, null, null, "img");
                            utilityLayer0.appendChild(child);
                        });

                        window.scrollTo(px, py);
                        readCoins(); recoverCoinFocus();
                    }, type === "btn" ? count * 1000 : 2000);
                };
                img.src = evt.target.result;
            };
            reader.readAsDataURL(file);
            return;
        }
    }

    // SECTION C: STANDARD MEDIA HANDLER (Image/Audio/Video/Code)
    const reader = new FileReader();
    reader.onload = evt => {
        hauptModeOriginalState = hauptMode; hauptMode = 0;
        const content = evt.target.result;

        if (file.type.startsWith("image/")) {
            const img = new Image();
            img.onload = () => {
                insertNewCoin(["", 78, 78, true, false, false]);
                finalizePart(utilityLayer0.lastElementChild, e.pageX, e.pageY, img.naturalWidth + "px", img.naturalHeight + "px", "img");
                utilityLayer0.lastElementChild.lastElementChild.firstElementChild.appendChild(img);
                hauptMode = hauptModeOriginalState;
            };
            img.src = useBase64forImages ? content : `./${hdub_imagePath}${file.name}`;
        } 
        else if (file.type.startsWith("audio/") || file.type.startsWith("video/")) {
            const isAudio = file.type.startsWith("audio/");
            const media = isAudio ? new Audio() : document.createElement("video");
            
            insertNewCoin(["", 78, 78, true, false, false]);
            const coin = utilityLayer0.lastElementChild;
            
            media.src = (isAudio ? useBase64forAudio : useBase64forVideo) ? content : `./${isAudio ? 'b_audio' : 'c_video'}/${file.name}`;
            media.controls = true;
            media.style.cssText = "width:100%; height:100%; border:0; margin:0;";

            const dims = isAudio ? ["256px", "64px"] : ["256px", "256px"];
            finalizePart(coin, e.pageX, e.pageY, dims[0], dims[1], isAudio ? "audio" : "video");
            
            const target = coin.lastElementChild?.firstElementChild;
            if (target) { target.innerHTML = ""; target.appendChild(media); }
            hauptMode = hauptModeOriginalState;
        }
        else if (file.name.match(/\.(css|js|json)$/)) {
            const ext = file.name.split('.').pop();
            const lastPart = utilityLayer0.lastElementChild;
            if (lastPart) {
                if (ext === 'json') lastPart.dataset.json = JSON.stringify(JSON.parse(content));
                if (ext === 'js') lastPart.dataset.addScript = content;
                const input = lastPart.lastElementChild?.firstElementChild?.firstElementChild;
                if (input) { input.value = content; input.innerText = content; }
            }
        }
        /* === NEW PLACEHOLDER FOR .TXT FILES === */
        else if (file.name.endsWith('.txt')) {
            console.log("Text file detected: " + file.name);
            // Put your special text handling logic here
        }
    };
    reader.readAsDataURL(file);

    // Final Sync
    restorePointerEventsNone();
    recoverColouration();
    readCoins();
});
