function prepareSiteMap() {
    const wrapper = document.createElement("div");
    wrapper.id = "siteMapWrapper";
    const canvas = document.createElement("canvas");
    canvas.id = "siteMapCanvas";
    canvas.width = 47 * 12;
    canvas.height = 91 * 12;
    canvas.classList = "siteMapInners";
    wrapper.classList = "siteMap";
    wrapper.style.transformOrigin = "top left";
    wrapper.style.transform = "scale(0.334)";
    wrapper.appendChild(canvas);
    ui.folder62.ref.append(wrapper);
}
prepareSiteMap();

// Optimized zoom logic using a scale array to avoid the massive switch block
const sitemapScales = [null, null, "2.000", "1.335", "1.000", "0.800", "0.670", "0.573", "0.500", "0.445", "0.400", "0.365", "0.334"];

function zoomSiteMapOut() {
    const canvas = document.getElementById("siteMapCanvas");
    const wrapper = document.getElementById("siteMapWrapper");
    let ratio = Math.round(canvas.width / 47);
    if (ratio < 12) {
        ratio++;
        canvas.width = 47 * ratio;
        canvas.height = 91 * ratio;
        wrapper.style.transform = `scale(${sitemapScales[ratio]})`;
        localStorage.setItem("viewFinderCanvasWidth", canvas.width);
        localStorage.setItem("viewFinderCanvasHeight", canvas.height);
    }
}

function zoomSiteMapIn() {
    const canvas = document.getElementById("siteMapCanvas");
    const wrapper = document.getElementById("siteMapWrapper");
    let ratio = Math.round(canvas.width / 47);
    if (ratio > 2) {
        ratio--;
        canvas.width = 47 * ratio;
        canvas.height = 91 * ratio;
        wrapper.style.transform = `scale(${sitemapScales[ratio]})`;
        localStorage.setItem("viewFinderCanvasWidth", canvas.width);
        localStorage.setItem("viewFinderCanvasHeight", canvas.height);
    }
}

if (localStorage.getItem("viewFinderCanvasWidth") && localStorage.getItem("viewFinderCanvasHeight")) {
    const canvas = document.getElementById("siteMapCanvas");
    canvas.width = localStorage.getItem("viewFinderCanvasWidth");
    canvas.height = localStorage.getItem("viewFinderCanvasHeight");
    // Trigger one zoom cycle to sync the wrapper scale
    zoomSiteMapOut(); zoomSiteMapIn();
    drawSiteMap();
}

function drawSiteMap() {
    try {
        const downsize = 16;
        const canvas = document.getElementById("siteMapCanvas");
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        
        // Cache DOM lookups
        const bg = document.getElementById("coin46861").value;
        const gridColor = document.getElementById("coin32259").value + "33";
        const numberValue = parseFloat(document.getElementById("coin23538").value);
        const sX = window.scrollX;
        const sY = window.scrollY;
        const cW = canvas.width;
        const cH = canvas.height;

        // Background
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, cW, cH);

        // Grid Drawing (Optimized)
        if (numberValue > 0) {
            ctx.lineWidth = 2;
            ctx.strokeStyle = gridColor;
            ctx.beginPath();
            const step = numberValue / downsize;
            const startX = (-(sX % numberValue)) / downsize;
            const startY = (-(sY % numberValue)) / downsize;

            for (let x = startX; x <= cW; x += step) {
                ctx.moveTo(x, 0); ctx.lineTo(x, cH);
            }
            for (let y = startY; y <= cH; y += step) {
                ctx.moveTo(0, y); ctx.lineTo(cW, y);
            }
            ctx.stroke();
        }

        // Draw Utility Parts
        const children = utilityLayer0.children;
        ctx.lineWidth = 2;
        for (let j = 0; j < children.length; j++) {
            const el = children[j];
            const w = parseInt(el.style.width) / downsize;
            const h = parseInt(el.style.height) / downsize;
            const l = (parseInt(el.style.left) - sX) / downsize;
            const t = (parseInt(el.style.top) - sY) / downsize;

            // Simple Culling: only draw if within canvas area
            if (l + w > 0 && l < cW && t + h > 0 && t < cH) {
                const trip = el.dataset.coinTrip;
                ctx.strokeStyle = trip == "2" ? coinColour2 : (trip == "1" ? coinColour1 : coinColour0);
                ctx.strokeRect(l + 1, t + 1, w - 2, h - 2);
            }
        }

        // Current View Indicator
        ctx.fillStyle = "rgba(127,127,127,0.25)";
        ctx.fillRect(1, 1, (window.innerWidth / downsize) - 2, (window.innerHeight / downsize) - 2);

        // Buoy Points
        try {
            const buoyValues = Object.values(topLayer.buoyPoint);
            ctx.font = "400 24px dckimPixelMono";
            ctx.fillStyle = visualGridColour3;
            ctx.textBaseline = "top";
            for (let j = 0; j < buoyValues.length; j++) {
                const bx = Math.floor((buoyValues[j].location[0] - sX) / downsize);
                const by = Math.floor((buoyValues[j].location[1] - sY) / downsize);
                if (bx > -100 && bx < cW && by > -50 && by < cH) {
                    ctx.fillText(buoyValues[j].name, bx, by);
                }
            }
        } catch (e) {}
    } catch (e) {}
}

setTimeout(() => { drawSiteMap(); }, 500);
