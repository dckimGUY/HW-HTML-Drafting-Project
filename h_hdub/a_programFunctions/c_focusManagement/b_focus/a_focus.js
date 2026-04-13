function mouseGiveFocus(mouseInfo) {
const event=mouseInfo[0], ctrl=mouseInfo[1], shift=mouseInfo[2];
if (event.target.dataset.coinTrip==Ts0||event.target.dataset.coinTrip==Ts1||event.target.dataset.coinTrip==Ts2) {
if (coinFocus!=null) {
curFocus=0;
 if (coinFocus.dataset.coinTrip==Ts0) { coinFocus.firstElementChild.style.color = Fs0; coinFocus.style.outlineColor = Cs0; coinFocus.firstElementChild.style.backgroundColor = Bs0; coinFocus.firstElementChild.style.opacity = Os0;
} else if (coinFocus.dataset.coinTrip==Ts1) { coinFocus.firstElementChild.style.color = Fs1; coinFocus.style.outlineColor = Cs1; coinFocus.firstElementChild.style.backgroundColor = Bs1; coinFocus.firstElementChild.style.opacity = Os1;
} else if (coinFocus.dataset.coinTrip==Ts2) { coinFocus.firstElementChild.style.color = Fs2; coinFocus.style.outlineColor = Cs2; coinFocus.firstElementChild.style.backgroundColor = Bs2; coinFocus.firstElementChild.style.opacity = Os2;
}
coinFocus1=coinFocus;
coinFocus = event.target;
}
}
return (1);
}


function focusFlip() {
if (coinFocus!=null&&coinFocus1!=null&&mousedown.hold==false) {
setCoinTripColouration();
coinFocus2=coinFocus ;
coinFocus =coinFocus1;
coinFocus1=coinFocus2;
curFocus=0;
return (1);
} else {
return (0);
}
}


function focusPrevious(del) {
if (utilityLayer0.children.length > 0) {
if (curFocus  == 1) {
curFocus = 0;
}
if (coinFocus != null && coinFocus.previousElementSibling) {
if (!mouseIsDogged) {
setCoinTripColouration();
}
coinFocus1 = coinFocus;
coinFocus = coinFocus.previousElementSibling;
if (!del) {
coinFocus.scrollIntoView({behavior: 'auto', block: 'center', inline: 'center'});
}
return (1);
}
} else {
return (0);
}
}


function focusNext(del)     {
if (utilityLayer0.children.length>0) {
if (coinFocus!=null&&coinFocus.nextElementSibling) {
if (!mouseIsDogged) {
setCoinTripColouration();
}
coinFocus1=coinFocus;
coinFocus = coinFocus.nextElementSibling;
if (!del) {
coinFocus.scrollIntoView({behavior: 'auto', block: 'center', inline: 'center'});
}
return (1);
}
} else {
return (0);
}
}


function focusFirst()    {
if (coinFocus!=null&&utilityLayer0.firstElementChild) {
curFocus=0;
setCoinTripColouration();
coinFocus1=coinFocus;
coinFocus = utilityLayer0.firstElementChild;
return (1);
} else {
return (0);
}
}


function focusLast()     {
if (coinFocus!=null&&utilityLayer0.lastElementChild) {
curFocus=0;
setCoinTripColouration();
coinFocus1=coinFocus;
coinFocus = utilityLayer0.lastElementChild;
return (1);
} else {
return (0);
}
}


function focusNextColour() {

if (coinFocus!=null) {

       if (coinFocus.dataset.coinTrip==Ts0) {
       if (coinTrip.sel1.length>0) {
focusSet(coinTrip.sel1[0]);
} else if (coinTrip.sel2.length>0) {
focusSet(coinTrip.sel2[0]);
}

} else if (coinFocus.dataset.coinTrip==Ts1) {
       if (coinTrip.sel2.length>0) {
focusSet(coinTrip.sel2[0]);
} else if (coinTrip.sel0.length>0) {
focusSet(coinTrip.sel0[0]);
}

} else if (coinFocus.dataset.coinTrip==Ts2) {
       if (coinTrip.sel0.length>0) {
focusSet(coinTrip.sel0[0]);
} else if (coinTrip.sel1.length>0) {
focusSet(coinTrip.sel1[0]);
}

}

} else {

       if (coinTrip.sel0.length>0) {
focusSet(coinTrip.sel0[0]);
} else if (coinTrip.sel1.length>0) {
focusSet(coinTrip.sel1[0]);
} else if (coinTrip.sel1.length>0) {
focusSet(coinTrip.sel1[0]);
}

}

}


function focusSet(newFocus) {
if (coinFocus!=null&&newFocus&&scanForCoin(utilityLayer0,newFocus)==1) {
curFocus=0;

if (!mouseIsDogged) {
setCoinTripColouration();
}

coinFocus1=coinFocus;
coinFocus = newFocus;
readCoins();

if (!mouseIsDogged) {
recoverColouration();
}

return (1);
} else {
return (0);
}
}


function firstLastColour() {
if (coinFocus != null) {
if (
coinFocus != coinTrip["sel" + coinFocus.dataset.coinTrip][0]
) {
focusSet(coinTrip["sel" + coinFocus.dataset.coinTrip][0]);
} else {
focusSet(coinTrip["sel" + coinFocus.dataset.coinTrip][coinTrip["sel" + coinFocus.dataset.coinTrip].length - 1]);
}
}
}
