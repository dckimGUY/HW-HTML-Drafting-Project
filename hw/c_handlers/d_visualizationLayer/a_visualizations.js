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


var visuals = {};
visuals.minorWidth =  12;
visuals.xrayWidth  =   3;
visuals.edgeWidth  =   3;
visuals.edgeRuler  = 0.5;


function redraw(){

/* THIS GIVES US AN ARRAY WITH THE PARTS IN Z-INDEX ORDER */
const zArray = Array.from(utilityLayer0.children);
const zStack = zArray.map(el => ({ id: el, z: parseInt(getComputedStyle(el).zIndex) || 0 })).sort((a, b) => a.z -b.z);
Vis.width  = window.innerWidth ;
Vis.height = window.innerHeight;

for (let j=0; j < zStack.length; j++) {
Y = Vis.getContext("2d");



let minorWidth =  visuals.minorWidth;
let xrayWidth  =  visuals.xrayWidth;
let edgeWidth  =  visuals.edgeWidth;
let edgeRuler  =  visuals.edgeRuler;



if (mode==8) {
minorWidth *= 2;
xrayWidth *= 2;
edgeWidth *= 2;
}




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
	if (mode!=5) {
	Y.fillRect(l  ,t  , deduction, deduction);
	Y.fillRect(l+w,t+h,-deduction,-deduction);
	Y.fillRect(l+w,t  ,-deduction, deduction);
	Y.fillRect(l  ,t+h, deduction,-deduction);
	}
	if (mode==6) {
		for (let a = edgeRuler; a < 1; a += edgeRuler) {
		Y.fillRect(l  ,t + h * a - deduction/2 + edgeWidth/2, deduction, deduction - edgeWidth);
		Y.fillRect(l + w * a - deduction/2 + edgeWidth/2,t  , deduction - edgeWidth, deduction);
		Y.fillRect(l+w,t + h * a - deduction/2 + edgeWidth/2,-deduction, deduction - edgeWidth);
		Y.fillRect(l + w * a - deduction/2 + edgeWidth/2,t + h - deduction, deduction - edgeWidth, deduction);
		}
	}
	l = parseInt(coinFocus.style.left)   + deduction/2 - window.scrollX;
	t = parseInt(coinFocus.style.top)    + deduction/2 - window.scrollY;
	w = parseInt(coinFocus.style.width)  * parseFloat(coinFocus.dataset.scale) - deduction;
	h = parseInt(coinFocus.style.height) * parseFloat(coinFocus.dataset.scale) - deduction;
	Y.strokeRect(l,t,w,h);
	       if (mode == 5) {
		       if (eM == 0) {
			Y.fillRect(    l - deduction/2, t - deduction/2 + h,         w,     deduction);
			Y.fillRect(l - deduction/2 + w, t - deduction/2, deduction, h + deduction);
		} else if (eM == 1) {
			Y.fillRect(l - deduction/2, t - deduction/2, w + deduction, deduction);
			Y.fillRect(l - deduction/2, t + deduction/2,     deduction,         h);
		}
	}
} else if (mousedown.hold == false && zStack[j].id == mousemoveTarget) {
	/* THIS CLEARS THE AREA WHERE THE NEW RECTANGLE WILL BE DRAWN */
	let l = parseInt(zStack[j].id.style.left)   - window.scrollX;
	let t = parseInt(zStack[j].id.style.top)    - window.scrollY;
	let w = parseInt(zStack[j].id.style.width)  * parseFloat(zStack[j].id.dataset.scale);
	let h = parseInt(zStack[j].id.style.height) * parseFloat(zStack[j].id.dataset.scale);
	Y.clearRect(l,t,w,h);
	Y.lineWidth = edgeQ;
	let deduction = Y.lineWidth;
	if (mode!=5) {
		Y.fillRect(l  ,t  , deduction, deduction);
		Y.fillRect(l+w,t+h,-deduction,-deduction);
		Y.fillRect(l+w,t  ,-deduction, deduction);
		Y.fillRect(l  ,t+h, deduction,-deduction);
	}
	if (mode==6) {
		for (let a = edgeRuler; a < 1; a += edgeRuler) {
		Y.fillRect(l  ,t + h * a - deduction/2 + edgeWidth/2, deduction, deduction - edgeWidth);
		Y.fillRect(l + w * a - deduction/2 + edgeWidth/2,t  , deduction - edgeWidth, deduction);
		Y.fillRect(l+w,t + h * a - deduction/2 + edgeWidth/2,-deduction, deduction - edgeWidth);
		Y.fillRect(l + w * a - deduction/2 + edgeWidth/2,t + h - deduction, deduction - edgeWidth, deduction);
		}
	}
	l = parseInt(zStack[j].id.style.left)   + deduction/2 - window.scrollX;
	t = parseInt(zStack[j].id.style.top)    + deduction/2 - window.scrollY;
	w = parseInt(zStack[j].id.style.width)  * parseFloat(zStack[j].id.dataset.scale) - deduction;
	h = parseInt(zStack[j].id.style.height) * parseFloat(zStack[j].id.dataset.scale) - deduction;
	Y.strokeRect(l,t,w,h);
	       if (mode == 5) {
		       if (eM == 0) {
			Y.fillRect(    l - deduction/2, t - deduction/2 + h,         w,     deduction);
			Y.fillRect(l - deduction/2 + w, t - deduction/2, deduction, h + deduction);
		} else if (eM == 1) {
			Y.fillRect(l - deduction/2, t - deduction/2, w + deduction, deduction);
			Y.fillRect(l - deduction/2, t + deduction/2,     deduction,         h);
		}
	}
} else {
	/* THIS CLEARS THE AREA WHERE THE NEW RECTANGLE WILL BE DRAWN */
	let l = parseInt(zStack[j].id.style.left)   - window.scrollX;
	let t = parseInt(zStack[j].id.style.top)    - window.scrollY;
	let w = parseInt(zStack[j].id.style.width)  * parseFloat(zStack[j].id.dataset.scale);
	let h = parseInt(zStack[j].id.style.height) * parseFloat(zStack[j].id.dataset.scale);
	Y.clearRect(l,t,w,h);
	Y.lineWidth = minorWidth;
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



/**********************************************************/
/**********************************************************/
/**********************************************************/
/* I BELIEVE THAT THIS IS THE LOCATION FOR THE X-RAY CODE */
/**********************************************************/
/**********************************************************/
/**********************************************************/




if (j!=0 && xrayVision[0]==true) {

Y.setLineDash([8,4]);

for (k = j - 1; k >= 0; k--) {

if (zStack[k].id == coinFocus) {
Y.lineWidth = xrayWidth;
deduction = Y.lineWidth;
if (curFocus==0) {
l = parseInt(zStack[k].id.style.left) + deduction/2 - window.scrollX;
t = parseInt(zStack[k].id.style.top) + deduction/2 - window.scrollY;
w = parseInt(zStack[k].id.style.width) * parseFloat(zStack[k].id.dataset.scale) - deduction;
h = parseInt(zStack[k].id.style.height) * parseFloat(zStack[k].id.dataset.scale) - deduction;
Y.strokeStyle = "rgba(222,255, 28,0.5)";
Y.strokeRect(l,t,w,h);

/* VARIABLE RULER */
Y.fillStyle   = "rgba(222,255, 28,1)";
l = parseInt(zStack[k].id.style.left) - window.scrollX;
t = parseInt(zStack[k].id.style.top) - window.scrollY;
w = parseInt(zStack[k].id.style.width) * parseFloat(zStack[j].id.dataset.scale);
h = parseInt(zStack[k].id.style.height) * parseFloat(zStack[j].id.dataset.scale);

for (let a = edgeRuler; a < 1; a += edgeRuler) {
if ((mode==5&&eM!=0)||mode!=5) {
Y.fillRect(l + w * a - edgeWidth/2,t + edgeWidth,edgeWidth,edgeWidth * 2);
Y.fillRect(l + edgeWidth,t + h * a - edgeWidth/2,edgeWidth * 2,edgeWidth);
}
if ((mode==5&&eM!=1)||mode!=5) {
Y.fillRect(l + w * a - edgeWidth/2,t + h - (edgeWidth * 3),edgeWidth,edgeWidth * 2);
Y.fillRect(l + w - (edgeWidth * 3),t + h * a - edgeWidth/2,edgeWidth * 2,edgeWidth);
}
}

}

} else {
Y.lineWidth = xrayWidth;
deduction = Y.lineWidth;
if (curFocus==0) {
l = parseInt(zStack[k].id.style.left) + deduction/2 - window.scrollX;
t = parseInt(zStack[k].id.style.top) + deduction/2 - window.scrollY;
w = parseInt(zStack[k].id.style.width) * parseFloat(zStack[k].id.dataset.scale) - deduction;
h = parseInt(zStack[k].id.style.height) * parseFloat(zStack[k].id.dataset.scale) - deduction;
/* THIS DECIDES THE COLOUR USING THE THREE COLOUR SYSTEM */
       if (zStack[k].id.dataset.coinTrip==Ts0) {
Y.strokeStyle = "rgba(255,255,255,0.5)";
} else if (zStack[k].id.dataset.coinTrip==Ts1) {
Y.strokeStyle = "rgba(255,  0,255,0.5)";
} else if (zStack[k].id.dataset.coinTrip==Ts2) {
Y.strokeStyle = "rgba(  0,255,255,0.5)";
}
Y.strokeRect(l,t,w,h);
}
}

} /* k LOOP END */


Y.setLineDash([0]);

}





/* THIS GIVES THE INDICATION FOR WHICH PART IS THE "coinFocus" */
if (zStack[j].id == coinFocus) {
Y.lineWidth = edgeWidth;
deduction = Y.lineWidth;
if (curFocus==0) {
l = parseInt(zStack[j].id.style.left) + deduction/2 - window.scrollX;
t = parseInt(zStack[j].id.style.top) + deduction/2 - window.scrollY;
w = parseInt(zStack[j].id.style.width) * parseFloat(zStack[j].id.dataset.scale) - deduction;
h = parseInt(zStack[j].id.style.height) * parseFloat(zStack[j].id.dataset.scale) - deduction;
Y.strokeStyle = "rgba(222,255, 28,1)";
Y.fillStyle   = "rgba(222,255, 28,1)";
Y.strokeRect(l,t,w,h);
l = parseInt(zStack[j].id.style.left) - window.scrollX;
t = parseInt(zStack[j].id.style.top)  - window.scrollY;
w = parseInt(zStack[j].id.style.width)  * parseFloat(zStack[j].id.dataset.scale);
h = parseInt(zStack[j].id.style.height) * parseFloat(zStack[j].id.dataset.scale);

for (let a = edgeRuler; a < 1; a += edgeRuler) {
if ((mode==5&&eM!=0)||mode!=5) {
Y.fillRect(l + w * a - edgeWidth/2,t + edgeWidth,edgeWidth,edgeWidth * 2);
Y.fillRect(l + edgeWidth,t + h * a - edgeWidth/2,edgeWidth * 2,edgeWidth);
}
if ((mode==5&&eM!=1)||mode!=5) {
Y.fillRect(l + w * a - edgeWidth/2,t + h - (edgeWidth * 3),edgeWidth,edgeWidth * 2);
Y.fillRect(l + w - (edgeWidth * 3),t + h * a - edgeWidth/2,edgeWidth * 2,edgeWidth);
}
}

}
} else {
Y.lineWidth = edgeWidth;
deduction = Y.lineWidth;
if (curFocus==0) {
l = parseInt(zStack[j].id.style.left) + deduction/2 - window.scrollX;
t = parseInt(zStack[j].id.style.top) + deduction/2 - window.scrollY;
w = parseInt(zStack[j].id.style.width) * parseFloat(zStack[j].id.dataset.scale) - deduction;
h = parseInt(zStack[j].id.style.height) * parseFloat(zStack[j].id.dataset.scale) - deduction;
/* THIS DECIDES THE COLOUR USING THE THREE COLOUR SYSTEM */
       if (zStack[j].id.dataset.coinTrip==Ts0) {
Y.strokeStyle = "rgba(255,255,255,1)";
Y.fillStyle   = "rgba(255,255,255,1)";
} else if (zStack[j].id.dataset.coinTrip==Ts1) {
Y.strokeStyle = "rgba(255,  0,255,1)";
Y.fillStyle   = "rgba(255,  0,255,1)";
} else if (zStack[j].id.dataset.coinTrip==Ts2) {
Y.strokeStyle = "rgba(  0,255,255,1)";
Y.fillStyle   = "rgba(  0,255,255,1)";
}
Y.strokeRect(l,t,w,h);
l = parseInt(zStack[j].id.style.left) - window.scrollX;
t = parseInt(zStack[j].id.style.top) - window.scrollY;
w = parseInt(zStack[j].id.style.width) * parseFloat(zStack[j].id.dataset.scale);
h = parseInt(zStack[j].id.style.height) * parseFloat(zStack[j].id.dataset.scale);
for (let a = edgeRuler; a < 1; a += edgeRuler) {
Y.fillRect(l + w * a - edgeWidth/2,t + edgeWidth,edgeWidth,edgeWidth * 2);
Y.fillRect(l + edgeWidth,t + h * a - edgeWidth/2,edgeWidth * 2,edgeWidth);
Y.fillRect(l + w * a - edgeWidth/2,t + h - (edgeWidth * 3),edgeWidth,edgeWidth * 2);
Y.fillRect(l + w - (edgeWidth * 3),t + h * a - edgeWidth/2,edgeWidth * 2,edgeWidth);
}
}
}






} /* end of the main "for loop" */
};
