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





function redraw(){

/* THIS GIVES US AN ARRAY WITH THE PARTS IN Z-INDEX ORDER */
const zArray = Array.from(utilityLayer0.children);
const zStack = zArray.map(el => ({ id: el, z: parseInt(getComputedStyle(el).zIndex) || 0 })).sort((a, b) => a.z -b.z);
Vis.width  = window.innerWidth ;
Vis.height = window.innerHeight;

for (let j=0; j < zStack.length; j++) {
Y = Vis.getContext("2d");


/* THIS DECIDES THE COLOUR USING THE THREE COLOUR SYSTEM */
       if (zStack[j].id.dataset.coinTrip==Ts0) {
Y.strokeStyle = "rgba(255,255,255,0.25)";
Y.fillStyle   = "rgba(255,255,255,0.5 )";
} else if (zStack[j].id.dataset.coinTrip==Ts1) {
Y.strokeStyle = "rgba(255,  0,255,0.25)";
Y.fillStyle   = "rgba(255,  0,255,0.5 )";
} else if (zStack[j].id.dataset.coinTrip==Ts2) {
Y.strokeStyle = "rgba(  0,255,255,0.25)";
Y.fillStyle   = "rgba(  0,255,255,0.5 )";
}


       if ((mousemoveTarget != null && mousedown.hold == true && zStack[j].id == coinFocus) || (mousemoveTarget == null && zStack[j].id == coinFocus) )  {
	/* THIS CLEARS THE AREA WHERE THE NEW RECTANGLE WILL BE DRAWN */
	let l = parseInt(coinFocus.style.left)   - window.scrollX;
	let t = parseInt(coinFocus.style.top)    - window.scrollY;
	let w = parseInt(coinFocus.style.width)  * parseFloat(coinFocus.dataset.scale);
	let h = parseInt(coinFocus.style.height) * parseFloat(coinFocus.dataset.scale);
	Y.clearRect(l,t,w,h);
	Y.lineWidth = edgeQ;
	let deduction = Y.lineWidth;
	Y.fillRect(l  ,t  , deduction, deduction);
	Y.fillRect(l+w,t+h,-deduction,-deduction);
	Y.fillRect(l+w,t  ,-deduction, deduction);
	Y.fillRect(l  ,t+h, deduction,-deduction);
	l = parseInt(coinFocus.style.left)   + deduction/2 - window.scrollX;
	t = parseInt(coinFocus.style.top)    + deduction/2 - window.scrollY;
	w = parseInt(coinFocus.style.width)  * parseFloat(coinFocus.dataset.scale) - deduction;
	h = parseInt(coinFocus.style.height) * parseFloat(coinFocus.dataset.scale) - deduction;
	Y.strokeRect(l,t,w,h);
} else if (mousedown.hold == false && zStack[j].id == mousemoveTarget) {
	/* THIS CLEARS THE AREA WHERE THE NEW RECTANGLE WILL BE DRAWN */
	let l = parseInt(zStack[j].id.style.left)   - window.scrollX;
	let t = parseInt(zStack[j].id.style.top)    - window.scrollY;
	let w = parseInt(zStack[j].id.style.width)  * parseFloat(zStack[j].id.dataset.scale);
	let h = parseInt(zStack[j].id.style.height) * parseFloat(zStack[j].id.dataset.scale);
	Y.clearRect(l,t,w,h);
	Y.lineWidth = edgeQ;
	let deduction = Y.lineWidth;
	Y.fillRect(l  ,t  , deduction, deduction);
	Y.fillRect(l+w,t+h,-deduction,-deduction);
	Y.fillRect(l+w,t  ,-deduction, deduction);
	Y.fillRect(l  ,t+h, deduction,-deduction);
	l = parseInt(zStack[j].id.style.left)   + deduction/2 - window.scrollX;
	t = parseInt(zStack[j].id.style.top)    + deduction/2 - window.scrollY;
	w = parseInt(zStack[j].id.style.width)  * parseFloat(zStack[j].id.dataset.scale) - deduction;
	h = parseInt(zStack[j].id.style.height) * parseFloat(zStack[j].id.dataset.scale) - deduction;
	Y.strokeRect(l,t,w,h);
} else {
	/* THIS CLEARS THE AREA WHERE THE NEW RECTANGLE WILL BE DRAWN */
	let l = parseInt(zStack[j].id.style.left)   - window.scrollX;
	let t = parseInt(zStack[j].id.style.top)    - window.scrollY;
	let w = parseInt(zStack[j].id.style.width)  * parseFloat(zStack[j].id.dataset.scale);
	let h = parseInt(zStack[j].id.style.height) * parseFloat(zStack[j].id.dataset.scale);
	Y.clearRect(l,t,w,h);
	Y.lineWidth = 12;
	let deduction = Y.lineWidth;
	Y.fillRect(l  ,t  , deduction, deduction);
	Y.fillRect(l+w,t+h,-deduction,-deduction);
	Y.fillRect(l+w,t  ,-deduction, deduction);
	Y.fillRect(l  ,t+h, deduction,-deduction);
	l = parseInt(zStack[j].id.style.left)   + deduction/2 - window.scrollX;
	t = parseInt(zStack[j].id.style.top)    + deduction/2 - window.scrollY;
	w = parseInt(zStack[j].id.style.width)  * parseFloat(zStack[j].id.dataset.scale) - deduction;
	h = parseInt(zStack[j].id.style.height) * parseFloat(zStack[j].id.dataset.scale) - deduction;
	Y.strokeRect(l,t,w,h);
}


/* THIS GIVES THE INDICATION FOR WHICH PART IS THE "coinFocus" */
if (zStack[j].id == coinFocus) {
Y.lineWidth = 4;
deduction = Y.lineWidth;
if (curFocus==0) {
l = parseInt(zStack[j].id.style.left) + deduction/2 - window.scrollX;
t = parseInt(zStack[j].id.style.top) + deduction/2 - window.scrollY;
w = parseInt(zStack[j].id.style.width) * parseFloat(zStack[j].id.dataset.scale) - deduction;
h = parseInt(zStack[j].id.style.height) * parseFloat(zStack[j].id.dataset.scale) - deduction;
Y.strokeStyle = "rgba(222,255, 28,0.5)";
Y.strokeRect(l,t,w,h);
}
}


}




};


