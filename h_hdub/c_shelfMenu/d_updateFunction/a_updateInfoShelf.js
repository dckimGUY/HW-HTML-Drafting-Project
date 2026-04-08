// 1. GLOBAL STATE & SELECTORS (Cached once to stop DOM thrashing)
let layerIsDirty = false;

// Event listeners to flag when the HTML actually needs to be backed up
window.addEventListener('mouseup', () => { layerIsDirty = true; });
window.addEventListener('keyup', () => { layerIsDirty = true; });

const infoFields = {
    useAllLayers: document.getElementById("useAllLayers"),
    headerText:   document.getElementById("headerText"),
    footerText:   document.getElementById("footerText"),
    accumCount:   document.getElementById("accumulatorCount"),
    filename:     document.getElementById("coin77671"),
    partY:        document.getElementById("partY"),
    partX:        document.getElementById("partX"),
    partW:        document.getElementById("partW"),
    partH:        document.getElementById("partH"),
    partNom:      document.getElementById("partNom"),
    partText:     document.getElementById("partText"),
    classList:    document.getElementById("classListEntry"),
    filter: {
        b: document.getElementById("filterBrightness"),
        c: document.getElementById("filterContrast"),
        i: document.getElementById("filterIntensity"),
        g: document.getElementById("filterGrayscale"),
        a: document.getElementById("filterAntique"),
        inv: document.getElementById("filterInvert"),
        o: document.getElementById("filterOpacity"),
        bl: document.getElementById("filterBlur")
    }
};

function updateInfoShelf() {
    // 2. LAYER SYNC (The "Heavy" part - now only runs when dirty)
    if (layerIsDirty) {
        topLayer[topLayer.a_currentLayer].b_content.innerHTML = utilityLayer0.innerHTML;
        layerIsDirty = false;
    }

    // 3. UI VISUALS (Use All Layers toggle)
    const ualStyle = infoFields.useAllLayers.style;
    if (useAllLayers) {
        ualStyle.outline = "2px dashed lime";
        ualStyle.backgroundColor = "rgba(255,0,0,0.35)";
    } else {
        ualStyle.outline = "";
        ualStyle.backgroundColor = "transparent";
    }

    // 4. COIN FOCUS LOGIC
    if (coinFocus != null) {
        const style = coinFocus.style;
        const innerPart = coinFocus.lastElementChild?.firstElementChild;

        // Filter parsing (Fast replacement for the loop)
        if (style.filter && style.filter !== "none") {
            let filt = style.filter.replace(/[^ 0-9.]/g, "").split(" ");
            const f = infoFields.filter;
            f.b.value   = filt[0] || 0;
            f.c.value   = filt[1] || 0;
            f.i.value   = filt[2] || 0;
            f.g.value   = filt[3] || 0;
            f.a.value   = filt[4] || 0;
            f.inv.value = filt[5] || 0;
            f.o.value   = filt[6] || 0;
            f.bl.value  = filt[7] || 0;
        }

        // Class List and Tooltips
        infoFields.classList.value = innerPart?.classList.toString() || "";
        if (ui.buttonLink.ref.value === "") {
            ui.buttonTooltip.ref.value = "GOTO >> " + coinFocus.id;
        }

        // Part Code Attributes
        if (innerPart) {
            const clickable = (innerPart.firstElementChild?.tagName === "BUTTON") ? innerPart.firstElementChild : innerPart;
            ui.partCode.ref.firstElementChild.value = clickable.getAttribute("onclick") || "";
            ui.partCode.ref.firstElementChild.nextElementSibling.value = innerPart.getAttribute("onmouseover") || "";
            ui.partCode.ref.lastElementChild.value = innerPart.getAttribute("onmouseout") || "";

            // Part Text and Images
            if (innerPart.firstElementChild?.tagName === "IMG") {
                ui.partText.ref.firstElementChild.nextElementSibling.value = innerPart.firstElementChild.src;
            }
            ui.partText.ref.lastElementChild.value = innerPart.innerHTML;
        }

        // Notes Data
        ui.partText.ref.firstElementChild.value = coinFocus.dataset.notes || "";
        
        // Coordinates and IDs
        if (curFocus === 0) {
            infoFields.partY.value = parseInt(style.top) || 0;
            infoFields.partX.value = parseInt(style.left) || 0;
            infoFields.partW.value = parseInt(style.width) || 0;
            infoFields.partH.value = parseInt(style.height) || 0;
            infoFields.partNom.value = coinFocus.id || "";
            infoFields.partText.value = coinFocus.dataset.notes || "";
        }
    } else if (curFocus === 1 && typeof Cur !== 'undefined') {
        infoFields.partY.value = parseInt(Cur.style.top);
        infoFields.partX.value = parseInt(Cur.style.left);
        infoFields.partW.value = 64;
        infoFields.partH.value = 64;
        infoFields.partNom.value = "specialCursor";
        infoFields.partText.value = `What does that special cursor even do?`;
    }

    // 5. GLOBAL UI UPDATES
    updateState();

    // Save Factor Outlines
    [200, 300, 500, 800, 1000, 1200, 1500, 1800].forEach(num => {
        ui[`save${num}`].ref.style.outline = "";
    });
    const factorMap = { "1": "200", "(100/500)": "500", "(100/768)": "800", "(100/1000)": "1000", "(100/1280)": "1200", "(100/1536)": "1500", "(100/2000)": "1800" };
    const targetKey = `save${factorMap[lastFactor] || "300"}`;
    ui[targetKey].ref.style.outline = "4px dotted lime";

    // Textarea / Input syncing
    infoFields.headerText.value = fileHeader;
    infoFields.footerText.value = fileFooter;
    infoFields.filename.value   = filename;
    ui.snapGridIncrement.ref.value = T;

    const currentLayerData = topLayer[topLayer.a_currentLayer];
    ui.levelNotes.ref.value  = currentLayerData.h_notes;
    ui.pageDescription.ref.value = currentLayerData.d_description;
    ui.projectName.ref.value = topLayer.aa_project_name;

    // Accumulator and Validation
    infoFields.accumCount.innerText = topLayer.programStateAccumulator?.length || "0";
    ui.partText.ref.style.outline = "";
    try { JSON.parse(ui.partText.ref.value); } catch { ui.partText.ref.style.outline = "2px dashed red"; }

    highlightLayer();
}
