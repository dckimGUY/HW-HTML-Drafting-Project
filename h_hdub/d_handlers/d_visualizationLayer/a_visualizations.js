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



var smallWidth  = 12;
var borderWidth =  4;


function redraw(element){

const zArray = Array.from(utilityLayer0.children);
const zStack = zArray.map(el => ({ id: el, z: parseInt(getComputedStyle(el).zIndex) || 0 })).sort((a, b) => a.z -b.z);
Vis.width=window.innerWidth;
Vis.height=window.innerHeight;

       if (mode==9) {
for (let j = 0; j < utilityLayer0.children.length; j++) { utilityLayer0.children[j].style.opacity="0.5"; }
} else if (mode!=9) {
for (let j = 0; j < utilityLayer0.children.length; j++) { utilityLayer0.children[j].style.opacity="1.0"; }
}


for (let j=0; j < zStack.length; j++) {

let Y=Vis.getContext("2d");

Y.lineWidth = edgeQ;

let l = parseInt(zStack[j].id.style.left) - window.scrollX;
let t = parseInt(zStack[j].id.style.top) - window.scrollY;
let w = parseInt(zStack[j].id.style.width) * parseFloat(zStack[j].id.dataset.scale);
let h = parseInt(zStack[j].id.style.height) * parseFloat(zStack[j].id.dataset.scale);


     if (zStack[j].id==coinFocus && mode!=8) { Y.fillStyle = "rgba(222,255, 28,1.0)"; }
else if (zStack[j].id.dataset.coinTrip==Ts0) { Y.fillStyle = "rgba(255,255,255,1.0)"; }
else if (zStack[j].id.dataset.coinTrip==Ts1) { Y.fillStyle = "rgba(255,  0,255,1.0)"; }
else if (zStack[j].id.dataset.coinTrip==Ts2) { Y.fillStyle = "rgba(  0,255,255,1.0)"; }

Y.fillRect(l,t,w,h);


     if (zStack[j].id.dataset.coinTrip==Ts0) { Y.strokeStyle = "rgba(255,255,255,1)"; Y.fillStyle = "rgba(255,255,255,0.5)"; }
else if (zStack[j].id.dataset.coinTrip==Ts1) { Y.strokeStyle = "rgba(255,  0,255,1)"; Y.fillStyle = "rgba(255,  0,255,0.5)"; }
else if (zStack[j].id.dataset.coinTrip==Ts2) { Y.strokeStyle = "rgba(  0,255,255,1)"; Y.fillStyle = "rgba(  0,255,255,0.5)"; }



let deduction = Y.lineWidth;




       if (mode==1) {
Y.clearRect(l + borderWidth,t + borderWidth,w -(borderWidth * 2),h -(borderWidth * 2));
Y.fillRect(l + borderWidth,t + borderWidth,w -(borderWidth * 2),h -(borderWidth * 2));
Y.clearRect(l + deduction + borderWidth,t + deduction + borderWidth,w -((deduction + borderWidth) * 2),h -((deduction + borderWidth) * 2));

} else if (mode==5) {
       if (eM==0) {
Y.clearRect(l + borderWidth,t + borderWidth,w -(borderWidth * 3),h -(borderWidth * 3));
Y.fillRect(l + borderWidth,t + borderWidth,w -(borderWidth * 3),h -(borderWidth * 3));
Y.clearRect(l + borderWidth,t + borderWidth,w -((deduction + borderWidth)),h -((deduction + borderWidth)));
} else if (eM==1) {
Y.clearRect(l + borderWidth * 2,t + borderWidth * 2,w -(borderWidth * 3),h -(borderWidth * 3));
Y.fillRect(l + borderWidth * 2,t + borderWidth * 2,w -(borderWidth * 3),h -(borderWidth * 3));
Y.clearRect(l + deduction,t + deduction,w -((deduction + borderWidth)),h -((deduction + borderWidth)));
}

} else if (mode==6) {
Y.clearRect(l + borderWidth,t + borderWidth,w -(borderWidth * 2),h -(borderWidth * 2));
Y.fillRect(l + borderWidth,t + borderWidth,w -(borderWidth * 2),h -(borderWidth * 2));
Y.clearRect(l + (deduction + borderWidth),t + borderWidth,w -((deduction + borderWidth) * 2),h -(borderWidth * 2));
Y.clearRect(l + borderWidth,t + (deduction + borderWidth),w -(borderWidth * 2),h -((deduction + borderWidth) * 2));

} else if (mode==8) {
Y.clearRect(l + borderWidth * 2,t + borderWidth * 2,w -(borderWidth * 4),h -(borderWidth * 4));
} else if (mode==9) {
Y.clearRect(l + borderWidth * 2,t + borderWidth * 2,w -(borderWidth * 4),h -(borderWidth * 4));
}

} /* END OF THE FOR LOOP */

};
