function gridToFontSize(keyInfo) {

const
e      = keyInfo[0],
kC     = keyInfo[1],
cC     = keyInfo[2],
shift  = keyInfo[3],
ctrl   = keyInfo[4],
alt    = keyInfo[5];

if (coinFocus!=null&&(lastKey=="f"||lastKey=="F")) {

let groupAction;
       if (coinFocus.dataset.coinTrip==Ts0) {
groupAction = coinTrip.sel0;
} else if (coinFocus.dataset.coinTrip==Ts1) {
groupAction = coinTrip.sel1;
} else if (coinFocus.dataset.coinTrip==Ts2) {
groupAction = coinTrip.sel2;
}

coinFocus.lastElementChild.firstElementChild.nextElementSibling.style.fontSize   = T + "px";
coinFocus.lastElementChild.firstElementChild.nextElementSibling.style.textShadow = `${T/textShadowDivisor}px ${T/textShadowDivisor}px ${T/textShadowDivisor}px ${textShadowColour}`;

if (shift) { for (let j = 0; j < groupAction.length; j++) {
groupAction[j].lastElementChild.firstElementChild.nextElementSibling.style.fontSize = T + "px";
groupAction[j].lastElementChild.firstElementChild.nextElementSibling.style.textShadow = `${T/textShadowDivisor}px ${T/textShadowDivisor}px ${T/textShadowDivisor}px ${textShadowColour}`;
} }

}
}
