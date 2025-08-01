function setCoinTrip(e,cycle) {
if (e.target != Cur&&coinFocus!=null) {
let trip = Ts2;
if (coinFocus1 != null) {trip = coinFocus1.dataset.coinTrip;}
if (cycle) {
       if (coinFocus.dataset.coinTrip==Ts0) {trip=Ts1;
} else if (coinFocus.dataset.coinTrip==Ts1) {trip=Ts2;
} else if (coinFocus.dataset.coinTrip==Ts2) {trip=Ts0;
}
}
let   swap0 = new Array(),      swap1 = new Array(),      swap2 = new Array();
for (let j = 0; j < coinTrip.sel0.length; j++) { if (coinFocus != coinTrip.sel0[j]) { swap0[swap0.length] = coinTrip.sel0[j]; } }
for (let j = 0; j < coinTrip.sel1.length; j++) { if (coinFocus != coinTrip.sel1[j]) { swap1[swap1.length] = coinTrip.sel1[j]; } }
for (let j = 0; j < coinTrip.sel2.length; j++) { if (coinFocus != coinTrip.sel2[j]) { swap2[swap2.length] = coinTrip.sel2[j]; } }
coinTrip.sel0 = swap0; coinTrip.sel1 = swap1; coinTrip.sel2 = swap2;
       if (trip==Ts1) {
coinTrip.sel1[coinTrip.sel1.length] = coinFocus; 
coinFocus.dataset.coinTrip      = Tm1; 
coinFocus.firstElementChild.style.fontFamily      = Es1;
coinFocus.firstElementChild.style.color           = Fs1;
coinFocus.firstElementChild.style.textAlign       = Gs2;
coinFocus.firstElementChild.style.backgroundColor = Bs1; 
coinFocus.firstElementChild.style.opacity         = Os1;
//coinFocus.style.outlineColor                      = Cs1;
} else if (trip==Ts0) {
coinTrip.sel0[coinTrip.sel0.length] = coinFocus; 
coinFocus.dataset.coinTrip      = Tm0; 
coinFocus.firstElementChild.style.fontFamily      = Es0;
coinFocus.firstElementChild.style.color           = Fs0;
coinFocus.firstElementChild.style.textAlign       = Gs2;
coinFocus.firstElementChild.style.backgroundColor = Bs0; 
coinFocus.firstElementChild.style.opacity         = Os0;
//coinFocus.style.outlineColor                      = Cs0;
} else if (trip==Ts2) {
coinTrip.sel2[coinTrip.sel2.length] = coinFocus; 
coinFocus.dataset.coinTrip      = Tm2; 
coinFocus.firstElementChild.style.fontFamily      = Es2;
coinFocus.firstElementChild.style.color           = Fs2;
coinFocus.firstElementChild.style.textAlign       = Gs2;
coinFocus.firstElementChild.style.backgroundColor = Bs2; 
coinFocus.firstElementChild.style.opacity         = Os2;
//coinFocus.style.outlineColor                      = Cs2;
}
}


}
