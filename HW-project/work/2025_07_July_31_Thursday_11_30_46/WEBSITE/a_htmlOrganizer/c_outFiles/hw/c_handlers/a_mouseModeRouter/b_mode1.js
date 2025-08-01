let mode1 = {};
mode1.mousemove  = function(mouseInfo) {
const event=mouseInfo[0], ctrl=mouseInfo[1], shift=mouseInfo[2];
let gridFactor = T;

//if (shift) { gridFactor = T/E; };


       if (mouseDeltaX  < 0) {
Xmove = -(Math.ceil(parseInt(mousedown.pageX)/T)*T - Math.ceil(parseInt(event.pageX)/T)*T);
} else if (mouseDeltaX >= 0) {
Xmove = Math.floor(parseInt(event.pageX)/T)*T - Math.floor(parseInt(mousedown.pageX)/T)*T;
}


       if (mouseDeltaY  < 0) {
Ymove = -(Math.ceil(parseInt(mousedown.pageY)/T)*T - Math.ceil(parseInt(event.pageY)/T)*T);
} else if (mouseDeltaY >= 0) {
Ymove = Math.floor(parseInt(event.pageY)/T)*T - Math.floor(parseInt(mousedown.pageY)/T)*T;
}




if (ctrl&&shift&&mode!=8) { dot(); } else { rdots(); }
const gridSpotLeft  = (event.pageX%T)>(T/2) ? Math.ceil(event.pageX/T)*T-(O/2) : Math.floor(event.pageX/T)*T-(O/2);
const gridSpotTop   = (event.pageY%T)>(T/2) ? Math.ceil(event.pageY/T)*T-(O/2) : Math.floor(event.pageY/T)*T-(O/2);
if (!mousedown.hold) { P.style.left = gridSpotLeft + "px"; P.style.top = gridSpotTop + "px"; }
Q.style.left = gridSpotLeft + "px"; Q.style.top = P.style.top       ;
R.style.left = P.style.left       ; R.style.top = gridSpotTop + "px";
S.style.left = gridSpotLeft + "px"; S.style.top = gridSpotTop + "px";




if (mousedown.target!=null) {



       if (ctrl&&!shift&&mode!=8) {
       if (mousedown.target.dataset.coinTrip==Ts0) {
for (j=0;j<coinTrip.sel0.length;j++) {
coinTrip.sel0[j].style.left = coinTrip.sel0[j].dataset.left;
coinTrip.sel0[j].style.top  = coinTrip.sel0[j].dataset.top ;
}
} else if (mousedown.target.dataset.coinTrip==Ts1) {
for (j=0;j<coinTrip.sel1.length;j++) {
coinTrip.sel1[j].style.left = coinTrip.sel1[j].dataset.left;
coinTrip.sel1[j].style.top  = coinTrip.sel1[j].dataset.top ;
}
} else if (mousedown.target.dataset.coinTrip==Ts2) {
for (j=0;j<coinTrip.sel2.length;j++) {
coinTrip.sel2[j].style.left = coinTrip.sel2[j].dataset.left;
coinTrip.sel2[j].style.top  = coinTrip.sel2[j].dataset.top ;
}
}

if (parseInt(mousedown.target.dataset.left)+Xmove>=0) { mousedown.target.style.left = parseInt(mousedown.target.dataset.left) + Xmove + "px"; } else { mousedown.target.style.left = 0; }
if (parseInt(mousedown.target.dataset.top)+ Ymove>=0) { mousedown.target.style.top  = parseInt(mousedown.target.dataset.top)  + Ymove + "px"; } else { mousedown.target.style.top  = 0; }

} else if (!ctrl&&!shift) {
if (parseInt(mousedown.target.dataset.left)+Xmove>=0) { mousedown.target.style.left = parseInt(mousedown.target.dataset.left) + Xmove + "px"; } else { mousedown.target.style.left = 0; }
if (parseInt(mousedown.target.dataset.top)+ Ymove>=0) { mousedown.target.style.top  = parseInt(mousedown.target.dataset.top)  + Ymove + "px"; } else { mousedown.target.style.top  = 0; }

} else if (!ctrl&&shift&&mode!=8) {
       if (mousedown.target.dataset.coinTrip==Ts0) {
for (j=0;j<coinTrip.sel0.length;j++) {
if (parseInt(mousedown.target.dataset.left)+Xmove>=0) { coinTrip.sel0[j].style.left = parseInt(coinTrip.sel0[j].dataset.left) + Xmove + "px"; }
if (parseInt(mousedown.target.dataset.top)+ Ymove>=0) { coinTrip.sel0[j].style.top  = parseInt(coinTrip.sel0[j].dataset.top ) + Ymove + "px"; }
}
} else if (mousedown.target.dataset.coinTrip==Ts1) {
for (j=0;j<coinTrip.sel1.length;j++) {
if (parseInt(mousedown.target.dataset.left)+Xmove>=0) { coinTrip.sel1[j].style.left = parseInt(coinTrip.sel1[j].dataset.left) + Xmove + "px"; }
if (parseInt(mousedown.target.dataset.top)+ Ymove>=0) { coinTrip.sel1[j].style.top  = parseInt(coinTrip.sel1[j].dataset.top ) + Ymove + "px"; }
}
} else if (mousedown.target.dataset.coinTrip==Ts2) {
for (j=0;j<coinTrip.sel2.length;j++) {
if (parseInt(mousedown.target.dataset.left)+Xmove>=0) { coinTrip.sel2[j].style.left = parseInt(coinTrip.sel2[j].dataset.left) + Xmove + "px"; }
if (parseInt(mousedown.target.dataset.top)+ Ymove>=0) { coinTrip.sel2[j].style.top  = parseInt(coinTrip.sel2[j].dataset.top ) + Ymove + "px"; }
}
}
}
}
};








mode1.mousedown  = function(mouseInfo) {

const event=mouseInfo[0], ctrl=mouseInfo[1], shift=mouseInfo[2];


/* This is for the insertion dots */
if (ctrl&&shift&&mode!=8) { dot(); } else { rdots(); }




};







mode1.mouseup    = function(mouseInfo) {
const event=mouseInfo[0], ctrl=mouseInfo[1], shift=mouseInfo[2];

/* This is for the insertion dots */
if (ctrl&&shift&&mode!=8) { dot(); } else { rdots(); }





if (ctrl&&mousedown.shift&&shift&&mode!=8) {
enterNewPartFromMouseInput(mouseInfo);
}








if (mousedown.target!=null) {
       if (!shift) {
mousedown.target.dataset.left = mousedown.target.style.left;
mousedown.target.dataset.top  = mousedown.target.style.top ;


} else if (shift&&mode!=8) {
       if (mousedown.target.dataset.coinTrip==Ts0) {
for (j=0;j<coinTrip.sel0.length;j++) {
coinTrip.sel0[j].dataset.left = coinTrip.sel0[j].style.left;
coinTrip.sel0[j].dataset.top  = coinTrip.sel0[j].style.top ;
}
} else if (mousedown.target.dataset.coinTrip==Ts1) {
for (j=0;j<coinTrip.sel1.length;j++) {
coinTrip.sel1[j].dataset.left = coinTrip.sel1[j].style.left;
coinTrip.sel1[j].dataset.top  = coinTrip.sel1[j].style.top ;
}
} else if (mousedown.target.dataset.coinTrip==Ts2) {
for (j=0;j<coinTrip.sel2.length;j++) {
coinTrip.sel2[j].dataset.left = coinTrip.sel2[j].style.left;
coinTrip.sel2[j].dataset.top  = coinTrip.sel2[j].style.top ;
}
}
}
}
};




mode1.mouseclick = function(mouseInfo) { };
mode1.dblclick   = function(mouseInfo) { };
