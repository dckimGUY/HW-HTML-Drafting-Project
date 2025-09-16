function mouseGiveFocus(mouseInfo) {
const event=mouseInfo[0], ctrl=mouseInfo[1], shift=mouseInfo[2];
if (event.target.dataset.coinTrip==Ts0||event.target.dataset.coinTrip==Ts1||event.target.dataset.coinTrip==Ts2) {
if (coinFocus!=null) {
curFocus=0;
coinFocus.style.outline = fA;
coinFocus.style.outlineOffset = fAO;
       if (coinFocus.dataset.coinTrip==Ts0) { coinFocus.firstElementChild.style.color = Fs0; coinFocus.style.outlineColor = Cs0; coinFocus.firstElementChild.style.backgroundColor = Bs0; coinFocus.firstElementChild.style.opacity = Os0;
} else if (coinFocus.dataset.coinTrip==Ts1) { coinFocus.firstElementChild.style.color = Fs1; coinFocus.style.outlineColor = Cs1; coinFocus.firstElementChild.style.backgroundColor = Bs1; coinFocus.firstElementChild.style.opacity = Os1;
} else if (coinFocus.dataset.coinTrip==Ts2) { coinFocus.firstElementChild.style.color = Fs2; coinFocus.style.outlineColor = Cs2; coinFocus.firstElementChild.style.backgroundColor = Bs2; coinFocus.firstElementChild.style.opacity = Os2;
}

coinFocus1=coinFocus;
coinFocus = event.target;
coinFocus.style.outline = fB;
coinFocus.style.outlineOffset = fBO;

}
}
return (1);
}