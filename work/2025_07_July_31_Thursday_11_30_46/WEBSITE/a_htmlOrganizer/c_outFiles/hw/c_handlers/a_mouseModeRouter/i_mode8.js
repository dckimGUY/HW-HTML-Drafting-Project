let mode8 = {};


mode8.mousemove  = function(mouseInfo) {
const target=mouseInfo[0], ctrl=mouseInfo[1], shift=mouseInfo[2];
};


mode8.mousedown  = function(mouseInfo) {
const event=mouseInfo[0], ctrl=mouseInfo[1], shift=mouseInfo[2];
let newTrip = null;
       if ( ctrl&& shift) { newTrip = Ts0;
} else if (!ctrl&& shift) { newTrip = Ts1;
} else if ( ctrl&&!shift) { newTrip = Ts2;
}
if (newTrip!=null) {
if (event.target.dataset.coinTrip==Ts0||
    event.target.dataset.coinTrip==Ts1||
    event.target.dataset.coinTrip==Ts2) {

event.target.style.outline = fA;

if (event.target.dataset.coinTrip!=newTrip) {
    event.target.dataset.coinTrip= newTrip;
       if (event.target.dataset.coinTrip==Ts0) { event.target.firstElementChild.style.color = Fs0; event.target.style.outlineColor = Cs0; event.target.firstElementChild.style.backgroundColor = Bs0; event.target.firstElementChild.style.opacity = Os0;
} else if (event.target.dataset.coinTrip==Ts1) { event.target.firstElementChild.style.color = Fs1; event.target.style.outlineColor = Cs1; event.target.firstElementChild.style.backgroundColor = Bs1; event.target.firstElementChild.style.opacity = Os1;
} else if (event.target.dataset.coinTrip==Ts2) { event.target.firstElementChild.style.color = Fs2; event.target.style.outlineColor = Cs2; event.target.firstElementChild.style.backgroundColor = Bs2; event.target.firstElementChild.style.opacity = Os2;
}
readCoins();
recoverColouration();
if (coinFocus!=null) {
coinFocus.style.outline = fB;
}

}
}
}
};






mode8.mouseclick = function(mouseInfo) {
const event=mouseInfo[0], ctrl=mouseInfo[1], shift=mouseInfo[2];





};








mode8.mouseup    = function(mouseInfo) { };
mode8.dblclick   = function(mouseInfo) { };









mode8.mouseover  = function(mouseInfo) {
const event=mouseInfo[0], ctrl=mouseInfo[1], shift=mouseInfo[2];
if (mousedown.hold) {
let newTrip = null;
       if ( ctrl&& shift) { newTrip = Ts0;
} else if (!ctrl&& shift) { newTrip = Ts1;
} else if ( ctrl&&!shift) { newTrip = Ts2;
}
if (newTrip!=null) {
if (event.target.dataset.coinTrip==Ts0||
    event.target.dataset.coinTrip==Ts1||
    event.target.dataset.coinTrip==Ts2) {

event.target.style.outline = fA;

if (event.target.dataset.coinTrip!=newTrip) {
    event.target.dataset.coinTrip= newTrip;
       if (event.target.dataset.coinTrip==Ts0) { event.target.firstElementChild.style.color = Fs0; event.target.style.outlineColor = Cs0; event.target.firstElementChild.style.backgroundColor = Bs0; event.target.firstElementChild.style.opacity = Os0;
} else if (event.target.dataset.coinTrip==Ts1) { event.target.firstElementChild.style.color = Fs1; event.target.style.outlineColor = Cs1; event.target.firstElementChild.style.backgroundColor = Bs1; event.target.firstElementChild.style.opacity = Os1;
} else if (event.target.dataset.coinTrip==Ts2) { event.target.firstElementChild.style.color = Fs2; event.target.style.outlineColor = Cs2; event.target.firstElementChild.style.backgroundColor = Bs2; event.target.firstElementChild.style.opacity = Os2;
}
readCoins();
recoverColouration();
if (coinFocus!=null) {
coinFocus.style.outline = fB;
}

}
}
}
}
};
