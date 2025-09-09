let mode1 = {};
mode1.mousemove  = function(mouseInfo) {
const event=mouseInfo[0], ctrl=mouseInfo[1], shift=mouseInfo[2], alt=mouseInfo[3];
let gridFactor = T;

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




if ((ctrl&&shift&&mode!=8)||(mousedown.target==null&&mousedown.hold==true&&mousedown.button==0)) { dot(); } else { rdots(); }
const gridSpotLeft  = (event.pageX%T)>(T/2) ? Math.ceil(event.pageX/T)*T-(O/2) : Math.floor(event.pageX/T)*T-(O/2);
const gridSpotTop   = (event.pageY%T)>(T/2) ? Math.ceil(event.pageY/T)*T-(O/2) : Math.floor(event.pageY/T)*T-(O/2);
if (!mousedown.hold) { P.style.left = gridSpotLeft + "px"; P.style.top = gridSpotTop + "px"; }

Q.style.left = gridSpotLeft + "px"; Q.style.top = P.style.top       ;
R.style.left = P.style.left       ; R.style.top = gridSpotTop + "px";
S.style.left = gridSpotLeft + "px"; S.style.top = gridSpotTop + "px";



if (mousedown.target!=null) {


       if (!alt&&ctrl&&!shift&&mode!=8) {
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

} else if (!alt&&!ctrl&&!shift&&mousedown.button==0) {








       if (mousedown.targetRegion==7) {
if (parseInt(mousedown.target.dataset.height)-Ymove>=edgeQ*2) {
if (parseInt(mousedown.target.dataset.top)+Ymove>=0) {
mousedown.target.style.top = parseInt(mousedown.target.dataset.top) + Ymove + "px";
mousedown.target.style.height = parseInt(mousedown.target.dataset.height) - Ymove + "px";
} else {
mousedown.target.style.top = 0;
mousedown.target.style.height = parseInt(mousedown.target.dataset.height) + parseInt(mousedown.target.dataset.top) + "px";
}
}
if (parseInt(mousedown.target.dataset.width)-Xmove>=edgeQ*2) {
if (parseInt(mousedown.target.dataset.left)+Xmove>=0) {
mousedown.target.style.left = parseInt(mousedown.target.dataset.left) + Xmove + "px";
mousedown.target.style.width = parseInt(mousedown.target.dataset.width) - Xmove + "px";
} else {
mousedown.target.style.left = 0;
mousedown.target.style.width = parseInt(mousedown.target.dataset.width) + parseInt(mousedown.target.dataset.left) + "px";
}
}
} else if (mousedown.targetRegion==8) {


if (parseInt(mousedown.target.dataset.height)-Ymove>=edgeQ*2) {
if (parseInt(mousedown.target.dataset.top)+Ymove>=0) {
mousedown.target.style.top = parseInt(mousedown.target.dataset.top) + Ymove + "px";
mousedown.target.style.height = parseInt(mousedown.target.dataset.height) - Ymove + "px";
} else {
mousedown.target.style.top = 0;
mousedown.target.style.height = parseInt(mousedown.target.dataset.height) + parseInt(mousedown.target.dataset.top) + "px";
}
}


} else if (mousedown.targetRegion==9) {
if (parseInt(mousedown.target.dataset.height)-Ymove>=edgeQ*2) {
if (parseInt(mousedown.target.dataset.top)+Ymove>=0) {
mousedown.target.style.top = parseInt(mousedown.target.dataset.top) + Ymove + "px";
mousedown.target.style.height = parseInt(mousedown.target.dataset.height) - Ymove + "px";
} else {
mousedown.target.style.top = 0;
mousedown.target.style.height = parseInt(mousedown.target.dataset.height) + parseInt(mousedown.target.dataset.top) + "px";
}
}
if (parseInt(mousedown.target.dataset.width)+Xmove>=T) {
mousedown.target.style.width = parseInt(mousedown.target.dataset.width) + Xmove + "px";
} else {
mousedown.target.style.width = T + "px";
}
if (parseInt(mousedown.target.style.width)<edgeQ*2) {
mousedown.target.style.width = edgeQ*2 + "px";
}
} else if (mousedown.targetRegion==4) {


if (parseInt(mousedown.target.dataset.width)-Xmove>=edgeQ*2) {
if (parseInt(mousedown.target.dataset.left)+Xmove>=0) {
mousedown.target.style.left = parseInt(mousedown.target.dataset.left) + Xmove + "px";
mousedown.target.style.width = parseInt(mousedown.target.dataset.width) - Xmove + "px";
} else {
mousedown.target.style.left = 0;
mousedown.target.style.width = parseInt(mousedown.target.dataset.width) + parseInt(mousedown.target.dataset.left) + "px";
}
}


} else if (mousedown.targetRegion==5) {
if (parseInt(mousedown.target.dataset.left)+Xmove>=0) { mousedown.target.style.left = parseInt(mousedown.target.dataset.left) + Xmove + "px"; } else { mousedown.target.style.left = 0; }
if (parseInt(mousedown.target.dataset.top)+ Ymove>=0) { mousedown.target.style.top  = parseInt(mousedown.target.dataset.top)  + Ymove + "px"; } else { mousedown.target.style.top  = 0; }
} else if (mousedown.targetRegion==6) {


if (parseInt(mousedown.target.dataset.width)+Xmove>=T) {
mousedown.target.style.width = parseInt(mousedown.target.dataset.width) + Xmove + "px";
} else {
mousedown.target.style.width = T + "px";
}
if (parseInt(mousedown.target.style.width)<edgeQ*2) {
mousedown.target.style.width = edgeQ*2 + "px";
}


} else if (mousedown.targetRegion==1) {
if (parseInt(mousedown.target.dataset.width)-Xmove>=edgeQ*2) {
if (parseInt(mousedown.target.dataset.left)+Xmove>=0) {
mousedown.target.style.left = parseInt(mousedown.target.dataset.left) + Xmove + "px";
mousedown.target.style.width = parseInt(mousedown.target.dataset.width) - Xmove + "px";
} else {
mousedown.target.style.left = 0;
mousedown.target.style.width = parseInt(mousedown.target.dataset.width) + parseInt(mousedown.target.dataset.left) + "px";
}
}
if (parseInt(mousedown.target.dataset.height)+Ymove>=T) {
mousedown.target.style.height = parseInt(mousedown.target.dataset.height) + Ymove + "px";
} else {
mousedown.target.style.height = T + "px";
}
if (parseInt(mousedown.target.style.height)<edgeQ*2) {
mousedown.target.style.height = edgeQ*2 + "px";
}
} else if (mousedown.targetRegion==2) {


if (parseInt(mousedown.target.dataset.height)+Ymove>=T) {
mousedown.target.style.height = parseInt(mousedown.target.dataset.height) + Ymove + "px";
} else {
mousedown.target.style.height = T + "px";
}
if (parseInt(mousedown.target.style.height)<edgeQ*2) {
mousedown.target.style.height = edgeQ*2 + "px";
}


} else if (mousedown.targetRegion==3) {


if (parseInt(mousedown.target.dataset.width)+Xmove>=T) {
mousedown.target.style.width = parseInt(mousedown.target.dataset.width) + Xmove + "px";
} else {
mousedown.target.style.width = T + "px";
}
if (parseInt(mousedown.target.style.width)<edgeQ*2) {
mousedown.target.style.width = edgeQ*2 + "px";
}





if (parseInt(mousedown.target.dataset.height)+Ymove>=T) {
mousedown.target.style.height = parseInt(mousedown.target.dataset.height) + Ymove + "px";
} else {
mousedown.target.style.height = T + "px";
}
if (parseInt(mousedown.target.style.height)<edgeQ*2) {
mousedown.target.style.height = edgeQ*2 + "px";
}











}

















} else if (!alt&&!ctrl&&shift&&mode!=8&&mousedown.button==0) {

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

const event=mouseInfo[0], ctrl=mouseInfo[1], shift=mouseInfo[2], alt=mouseInfo[3];

};











mode1.mouseup    = function(mouseInfo) {
const event=mouseInfo[0], ctrl=mouseInfo[1], shift=mouseInfo[2], alt=mouseInfo[3];

if (((!alt&&ctrl&&mousedown.shift&&shift&&mode!=8)||(mousedown.target==null))&&event.button==0) {
enterNewPartFromMouseInput(mouseInfo);
}

if (mousedown.target!=null) {
       if (!alt&&!shift) {
mousedown.target.dataset.left = mousedown.target.style.left;
mousedown.target.dataset.top  = mousedown.target.style.top ;

mousedown.target.dataset.width   = mousedown.target.style.width ;
mousedown.target.dataset.height  = mousedown.target.style.height;

} else if (!alt&&shift&&mode!=8) {
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
