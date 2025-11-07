var visualizationsLayer; visualizationsLayer = document.getElementById("visualizationsLayer");
/* Initialize the visualizations canvas element. */
const Vis=document.createElement("canvas");
{
const s=`position:fixed;left:0;top:0;pointer-events:none; border:none;`;
Vis.style=s;
Vis.style.opacity=1; //formerly K
}

visualizationsLayer.appendChild(Vis);

Vis.width=window.innerWidth;
Vis.height=window.innerHeight;





function redraw(element){

Vis.width=window.innerWidth;
Vis.height=window.innerHeight;

if (showVisualizations=="true") {
const zArray = Array.from(utilityLayer0.children);
const zStack = zArray.map(el => ({ id: el, z: parseInt(getComputedStyle(el).zIndex) || 0 })).sort((a, b) => a.z -b.z);

let edgeThickness = edgeQ - thinOutline * 2;



for (let j=0; j < zStack.length; j++) {


let l, t, w, h;

function xray() {
if (j!=0) {
Y.setLineDash([8,4]);
for (k = j; k >= 0; k--) {
Y.lineWidth = xrayWidth;

if (zStack[k].id == coinFocus) {
if (curFocus==0) {
l = parseInt(zStack[k].id.style.left) + xrayWidth/2 + thinOutline - window.scrollX;
t = parseInt(zStack[k].id.style.top) + xrayWidth/2 + thinOutline - window.scrollY;
w = parseInt(zStack[k].id.style.width) * parseFloat(zStack[k].id.dataset.scale) - xrayWidth - thinOutline * 2;
h = parseInt(zStack[k].id.style.height) * parseFloat(zStack[k].id.dataset.scale) - xrayWidth - thinOutline * 2;
Y.strokeStyle = selectedColour;
Y.strokeRect(l,t,w,h);
Y.fillStyle   = selectedColour;
l = parseInt(zStack[k].id.style.left) - window.scrollX;
t = parseInt(zStack[k].id.style.top) - window.scrollY;
w = parseInt(zStack[k].id.style.width) * parseFloat(zStack[j].id.dataset.scale);
h = parseInt(zStack[k].id.style.height) * parseFloat(zStack[j].id.dataset.scale);
}
} else {
if (curFocus==0) {
l = parseInt(zStack[k].id.style.left) + xrayWidth/2 + thinOutline - window.scrollX;
t = parseInt(zStack[k].id.style.top) + xrayWidth/2 + thinOutline - window.scrollY;
w = parseInt(zStack[k].id.style.width) * parseFloat(zStack[k].id.dataset.scale) - xrayWidth - thinOutline * 2;
h = parseInt(zStack[k].id.style.height) * parseFloat(zStack[k].id.dataset.scale) - xrayWidth - thinOutline * 2;
       if (zStack[k].id.dataset.coinTrip==Ts0) {
Y.strokeStyle = greyColour;
} else if (zStack[k].id.dataset.coinTrip==Ts1) {
Y.strokeStyle = pinkColour;
} else if (zStack[k].id.dataset.coinTrip==Ts2) {
Y.strokeStyle = blueColour;
}
Y.strokeRect(l,t,w,h);
}
}
}
Y.setLineDash([0]);

}
} /* END OF FUNCTION CODE xray */










let Y=Vis.getContext("2d");
l = parseInt(zStack[j].id.style.left) - window.scrollX;
t = parseInt(zStack[j].id.style.top) - window.scrollY;
w = parseInt(zStack[j].id.style.width) * parseFloat(zStack[j].id.dataset.scale);
h = parseInt(zStack[j].id.style.height) * parseFloat(zStack[j].id.dataset.scale);
Y.fillStyle   = lineColour;
Y.clearRect(l,t,w,h);
Y.fillRect(l,t,w,h);
     if (zStack[j].id.dataset.coinTrip==Ts0) { Y.fillStyle = greyColour; }
else if (zStack[j].id.dataset.coinTrip==Ts1) { Y.fillStyle = pinkColour; }
else if (zStack[j].id.dataset.coinTrip==Ts2) { Y.fillStyle = blueColour; }
       if (mode==1&&(zStack[j].id==coinFocus||zStack[j].id==mousemoveTarget)) {
Y.fillRect(l + thinOutline,t + thinOutline,w -(thinOutline * 2),h -(thinOutline * 2));
Y.fillStyle   = lineColour;
Y.fillRect(l + edgeThickness + thinOutline,t + edgeThickness + thinOutline,w -((edgeThickness + thinOutline) * 2),h -((edgeThickness + thinOutline) * 2));
Y.clearRect(l + edgeThickness + thinOutline * 2,t + edgeThickness + thinOutline * 2,w -((edgeThickness + thinOutline * 2) * 2),h -((edgeThickness + thinOutline * 2) * 2));
} else if (mode==5&&(zStack[j].id==coinFocus||zStack[j].id==mousemoveTarget)) {
Y.fillRect(l + thinOutline,t + thinOutline,w -(thinOutline * 2),h -(thinOutline * 2));
Y.fillStyle   = lineColour;
       if (eM==0) {
Y.fillRect(l + thinOutline + borderWidth,t + thinOutline + borderWidth,w -((edgeThickness + thinOutline * 2 + borderWidth)),h -((edgeThickness + thinOutline * 2 + borderWidth)));
Y.clearRect(l + thinOutline * 2 + borderWidth,t + thinOutline * 2 + borderWidth,w -((edgeThickness + thinOutline * 4 + borderWidth)),h -((edgeThickness + thinOutline * 4 + borderWidth)));
} else if (eM==1) {
Y.fillRect(l + edgeThickness + thinOutline,t + edgeThickness + thinOutline,w -((edgeThickness + thinOutline * 2 + borderWidth)),h -((edgeThickness + thinOutline * 2 + borderWidth)));
Y.clearRect(l + edgeThickness + thinOutline * 2,t + edgeThickness + thinOutline * 2,w -((edgeThickness + thinOutline * 4 + borderWidth)),h -((edgeThickness + thinOutline * 4 + borderWidth)));
}

} else if (mode==6&&(zStack[j].id==coinFocus||zStack[j].id==mousemoveTarget)) {
Y.fillRect(l + thinOutline,t + thinOutline,w -(thinOutline * 2),h -(thinOutline * 2));
Y.fillStyle   = lineColour;
Y.fillRect(l + edgeThickness + thinOutline,        t + borderWidth + thinOutline,        w -((edgeThickness + thinOutline) * 2),         h -((borderWidth + thinOutline) * 2));
Y.fillRect(     l + borderWidth + thinOutline,   t + edgeThickness + thinOutline,              w -((borderWidth + thinOutline) * 2)   ,    h -((edgeThickness + thinOutline) * 2)    );
Y.clearRect(l + edgeThickness + thinOutline + thinOutline,        t + borderWidth + thinOutline + thinOutline,        w -((edgeThickness + thinOutline) * 2) - (thinOutline * 2),         h -((borderWidth + thinOutline) * 2) - (thinOutline * 2));
Y.clearRect(l + borderWidth + thinOutline + thinOutline, t + edgeThickness + thinOutline + thinOutline,      w -((borderWidth + thinOutline) * 2) - (thinOutline * 2)  ,   h -((edgeThickness + thinOutline) * 2) - (thinOutline * 2)      );

} else if (mode==8||mode==9||!(zStack[j].id==coinFocus||zStack[j].id==mousemoveTarget)) {

if (mode==8||mode==9) {


Y.fillRect(l + thinOutline,t + thinOutline,w -(thinOutline * 2),h -(thinOutline * 2));
Y.fillStyle   = lineColour;
Y.fillRect(l + borderWidth * 2 + thinOutline,t + borderWidth * 2 + thinOutline,w -(thinOutline * 2) - (borderWidth * 4),h -(thinOutline * 2) - (borderWidth * 4));
Y.clearRect(l + borderWidth * 2 + thinOutline + thinOutline,t + borderWidth * 2 + thinOutline + thinOutline,w -(thinOutline * 2) - (borderWidth * 4) - (thinOutline * 2),h -(thinOutline * 2) - (borderWidth * 4) - (thinOutline * 2));


} else {

Y.fillRect(l + thinOutline,t + thinOutline,w -(thinOutline * 2),h -(thinOutline * 2));
Y.fillStyle   = lineColour;
Y.fillRect(l + borderWidth + thinOutline,t + borderWidth + thinOutline,w -(thinOutline * 2) - (borderWidth * 2),h -(thinOutline * 2) - (borderWidth * 2));
Y.clearRect(l + borderWidth + thinOutline + thinOutline,t + borderWidth + thinOutline + thinOutline,w -(thinOutline * 2) - (borderWidth * 2) - (thinOutline * 2),h -(thinOutline * 2) - (borderWidth * 2) - (thinOutline * 2));



}
}


if (mode==9) {
Y.setLineDash([borderWidth * 2, borderWidth * 4]);
}

/* THIS GIVES THE SELECTED OUTLINE COLOUR */
if (zStack[j].id==coinFocus&&curFocus==0) {
Y.lineWidth = borderWidth;
Y.strokeStyle = selectedColour;
Y.strokeRect(l + thinOutline + (borderWidth/2),t + thinOutline + (borderWidth/2),w -(thinOutline * 2 + borderWidth),h -(thinOutline * 2 + borderWidth));
}

if (xrayVision=="true") {
xray();
}








} /* END OF THE FOR LOOP */

} /* END OF CONDITION showVisualizations */
};
