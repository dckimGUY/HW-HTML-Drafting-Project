var visualizationsLayer; visualizationsLayer = document.getElementById("visualizationsLayer");
/* Initialize the visualizations canvas element. */
const Vis = document.createElement("canvas");
{
    const s = `position:fixed;left:0;top:0;pointer-events:none; border:none;`;
    Vis.style = s;
    Vis.style.opacity = 1; 
    Vis.style.zIndex = 50;
}

visualizationsLayer.appendChild(Vis);

Vis.width = window.innerWidth;
Vis.height = window.innerHeight;

ui.coin56897.ref.value = visualOpacity;
Vis.style.opacity = visualOpacity;

var drawPartNames = "false";

if (localStorage.getItem("drawPartNames")) { drawPartNames = localStorage.getItem("drawPartNames"); };
if (localStorage.getItem("xrayVision")) { xrayVision = localStorage.getItem("xrayVision"); };

function redraw(element) {
    drawLiv();

    if (window.innerWidth > 3500) { Vis.width = 0; return 0; }
    if (window.innerHeight > 3500) { Vis.height = 0; return 0; }
    if (visualOpacity == 0) return;

    Vis.width = window.innerWidth;
    Vis.height = window.innerHeight;

    if (showVisualizations == "true") {
        const zArray = Array.from(utilityLayer0.children);
        const zStack = zArray.map(el => ({ id: el, z: parseInt(getComputedStyle(el).zIndex) || 0 })).sort((a, b) => a.z - b.z);
        let edgeThickness = edgeQ - thinOutline * 2;
        let Y = Vis.getContext("2d");

        for (let j = 0; j < zStack.length; j++) {
            const el = zStack[j].id;
            
            // 1. CACHE DOM VALUES (Prevents Layout Thrashing)
            const pL = parseInt(el.style.left) || 0;
            const pT = parseInt(el.style.top) || 0;
            const pW = parseInt(el.style.width) || 0;
            const pH = parseInt(el.style.height) || 0;

            const windowLeft = window.scrollX;
            const windowRight = window.scrollX + window.innerWidth;
            const windowTop = window.scrollY;
            const windowBottom = window.scrollY + window.innerHeight;

            // 2. CORRECT OVERLAP CHECK (AABB Collision)
            if (pL < windowRight && (pL + pW) > windowLeft && pT < windowBottom && (pT + pH) > windowTop) {

                let l, t, w, h;
                l = pL - windowLeft;
                t = pT - windowTop;
                w = pW;
                h = pH;

                function xray() {
                    if (j != 0) {
                        Y.setLineDash([8, 4]);
                        for (let k = j; k >= 0; k--) {
                            const xEl = zStack[k].id;
                            const xL = parseInt(xEl.style.left) || 0;
                            const xT = parseInt(xEl.style.top) || 0;
                            const xW = parseInt(xEl.style.width) || 0;
                            const xH = parseInt(xEl.style.height) || 0;

                            Y.lineWidth = xrayWidth;
                            if (xEl == coinFocus) {
                                if (curFocus == 0) {
                                    let xl = xL + xrayWidth / 2 + thinOutline - window.scrollX;
                                    let xt = xT + xrayWidth / 2 + thinOutline - window.scrollY;
                                    let xw = xW - xrayWidth - thinOutline * 2;
                                    let xh = xH - xrayWidth - thinOutline * 2;
                                    Y.strokeStyle = selectedColour;
                                    Y.strokeRect(xl, xt, xw, xh);
                                }
                            } else {
                                if (curFocus == 0) {
                                    let xl = xL + xrayWidth / 2 + thinOutline - window.scrollX;
                                    let xt = xT + xrayWidth / 2 + thinOutline - window.scrollY;
                                    let xw = xW - xrayWidth - thinOutline * 2;
                                    let xh = xH - xrayWidth - thinOutline * 2;
                                    if (xEl.dataset.coinTrip == Ts0) { Y.strokeStyle = coinColour0; }
                                    else if (xEl.dataset.coinTrip == Ts1) { Y.strokeStyle = coinColour1; }
                                    else if (xEl.dataset.coinTrip == Ts2) { Y.strokeStyle = coinColour2; }
                                    Y.strokeRect(xl, xt, xw, xh);
                                }
                            }
                        }
                        Y.setLineDash([0]);
                    }
                }

                // DRAWING CORE
                Y.fillStyle = lineColour;
                Y.clearRect(l, t, w, h);
                Y.fillRect(l, t, w, h);

                if (el.dataset.coinTrip == Ts0) { Y.fillStyle = coinColour0; }
                else if (el.dataset.coinTrip == Ts1) { Y.fillStyle = coinColour1; }
                else if (el.dataset.coinTrip == Ts2) { Y.fillStyle = coinColour2; }

                if (mode == 1 && (el == coinFocus || el == mousemoveTarget)) {
                    Y.fillRect(l + thinOutline, t + thinOutline, w - (thinOutline * 2), h - (thinOutline * 2));
                    Y.fillStyle = lineColour;
                    Y.fillRect(l + edgeThickness + thinOutline, t + edgeThickness + thinOutline, w - ((edgeThickness + thinOutline) * 2), h - ((edgeThickness + thinOutline) * 2));
                    Y.clearRect(l + edgeThickness + thinOutline * 2, t + edgeThickness + thinOutline * 2, w - ((edgeThickness + thinOutline * 2) * 2), h - ((edgeThickness + thinOutline * 2) * 2));
                } else if (mode == 5 && (el == coinFocus || el == mousemoveTarget)) {
                    Y.fillRect(l + thinOutline, t + thinOutline, w - (thinOutline * 2), h - (thinOutline * 2));
                    Y.fillStyle = lineColour;
                    if (eM == 0) {
                        Y.fillRect(l + thinOutline + borderWidth, t + thinOutline + borderWidth, w - ((edgeThickness + thinOutline * 2 + borderWidth)), h - ((edgeThickness + thinOutline * 2 + borderWidth)));
                        Y.clearRect(l + thinOutline * 2 + borderWidth, t + thinOutline * 2 + borderWidth, w - ((edgeThickness + thinOutline * 4 + borderWidth)), h - ((edgeThickness + thinOutline * 4 + borderWidth)));
                    } else if (eM == 1) {
                        Y.fillRect(l + edgeThickness + thinOutline, t + edgeThickness + thinOutline, w - ((edgeThickness + thinOutline * 2 + borderWidth)), h - ((edgeThickness + thinOutline * 2 + borderWidth)));
                        Y.clearRect(l + edgeThickness + thinOutline * 2, t + edgeThickness + thinOutline * 2, w - ((edgeThickness + thinOutline * 4 + borderWidth)), h - ((edgeThickness + thinOutline * 4 + borderWidth)));
                    }
                } else if (mode == 6 && (el == coinFocus || el == mousemoveTarget)) {
                    Y.fillRect(l + thinOutline, t + thinOutline, w - (thinOutline * 2), h - (thinOutline * 2));
                    Y.fillStyle = lineColour;
                    Y.fillRect(l + edgeThickness + thinOutline, t + borderWidth + thinOutline, w - ((edgeThickness + thinOutline) * 2), h - ((borderWidth + thinOutline) * 2));
                    Y.fillRect(l + borderWidth + thinOutline, t + edgeThickness + thinOutline, w - ((borderWidth + thinOutline) * 2), h - ((edgeThickness + thinOutline) * 2));
                    Y.clearRect(l + edgeThickness + thinOutline + thinOutline, t + borderWidth + thinOutline + thinOutline, w - ((edgeThickness + thinOutline) * 2) - (thinOutline * 2), h - ((borderWidth + thinOutline) * 2) - (thinOutline * 2));
                    Y.clearRect(l + borderWidth + thinOutline + thinOutline, t + edgeThickness + thinOutline + thinOutline, w - ((borderWidth + thinOutline) * 2) - (thinOutline * 2), h - ((edgeThickness + thinOutline) * 2) - (thinOutline * 2));
                } else if (mode == 8 || mode == 9 || !(el == coinFocus || el == mousemoveTarget)) {
                    if (mode == 8 || mode == 9) {
                        Y.fillRect(l + thinOutline, t + thinOutline, w - (thinOutline * 2), h - (thinOutline * 2));
                        Y.fillStyle = lineColour;
                        Y.fillRect(l + borderWidth * 2 + thinOutline, t + borderWidth * 2 + thinOutline, w - (thinOutline * 2) - (borderWidth * 4), h - (thinOutline * 2) - (borderWidth * 4));
                        Y.clearRect(l + borderWidth * 2 + thinOutline + thinOutline, t + borderWidth * 2 + thinOutline + thinOutline, w - (thinOutline * 2) - (borderWidth * 4) - (thinOutline * 2), h - (thinOutline * 2) - (borderWidth * 4) - (thinOutline * 2));
                    } else {
                        Y.fillRect(l + thinOutline, t + thinOutline, w - (thinOutline * 2), h - (thinOutline * 2));
                        Y.fillStyle = lineColour;
                        Y.fillRect(l + borderWidth + thinOutline, t + borderWidth + thinOutline, w - (thinOutline * 2) - (borderWidth * 2), h - (thinOutline * 2) - (borderWidth * 2));
                        Y.clearRect(l + borderWidth + thinOutline + thinOutline, t + borderWidth + thinOutline + thinOutline, w - (thinOutline * 2) - (borderWidth * 2) - (thinOutline * 2), h - (thinOutline * 2) - (borderWidth * 2) - (thinOutline * 2));
                    }
                }

                if (mode == 9) { Y.setLineDash([borderWidth * 2, borderWidth * 4]); }

                if (el == coinFocus && curFocus == 0) {
                    Y.lineWidth = borderWidth;
                    Y.strokeStyle = selectedColour;
                    Y.strokeRect(l + thinOutline + (borderWidth / 2), t + thinOutline + (borderWidth / 2), w - (thinOutline * 2 + borderWidth), h - (thinOutline * 2 + borderWidth));
                }

                if (xrayVision == "true") { xray(); }

                if (drawPartNames == "true") {
                    Y.strokeStyle = lineColour;
                    Y.lineWidth = 3;
                    if (el.dataset.coinTrip == Ts0) { Y.fillStyle = coinColour0; }
                    else if (el.dataset.coinTrip == Ts1) { Y.fillStyle = coinColour1; }
                    else if (el.dataset.coinTrip == Ts2) { Y.fillStyle = coinColour2; }
                    Y.font = "400 32px dckimPixelMono";
                    Y.textAlign = "start";
                    Y.textBaseline = "top";
                    Y.fillText(el.id, l + edgeThickness + borderWidth, t + edgeThickness + borderWidth);
                }
            } 
        } 
    } 
};
