let outlineStyle = 0;

function gridToOutline(keyInfo) {

const
e      = keyInfo[0],
kC     = keyInfo[1],
cC     = keyInfo[2],
shift  = keyInfo[3],
ctrl   = keyInfo[4],
alt    = keyInfo[5];

if (coinFocus!=null&&(lastKey=="o"||lastKey=="O")) {

let groupAction;
       if (coinFocus.dataset.coinTrip==Ts0) {
groupAction = coinTrip.sel0;
} else if (coinFocus.dataset.coinTrip==Ts1) {
groupAction = coinTrip.sel1;
} else if (coinFocus.dataset.coinTrip==Ts2) {
groupAction = coinTrip.sel2;
}

       if (outlineStyle==0) {
coinFocus.lastElementChild.style.outline =`${T/(2*outlineDivisor)}px solid  ${outlineColour}`; outlineStyle=1;
outlineTunedSize = T/(2*outlineDivisor);
outlineTunedStyle = 0;

if (shift) { for (let j = 0; j < groupAction.length; j++) {
groupAction[j].lastElementChild.style.outline =`${T/(2*outlineDivisor)}px solid  ${outlineColour}`; outlineStyle=1;
outlineTunedSize = T/(2*outlineDivisor);
outlineTunedStyle = 0;
} }

} else if (outlineStyle==1) {
coinFocus.lastElementChild.style.outline =`${T/(2*outlineDivisor)}px dashed ${outlineColour}`; outlineStyle=2;
outlineTunedSize = T/(2*outlineDivisor);
outlineTunedStyle = 1;

if (shift) { for (let j = 0; j < groupAction.length; j++) {
groupAction[j].lastElementChild.style.outline =`${T/(2*outlineDivisor)}px dashed  ${outlineColour}`; outlineStyle=2;
outlineTunedSize = T/(2*outlineDivisor);
outlineTunedStyle = 1;
} }

} else if (outlineStyle==2) {
coinFocus.lastElementChild.style.outline =`${T/(2*outlineDivisor)}px dotted ${outlineColour}`; outlineStyle=8;
outlineTunedSize = T/(2*outlineDivisor);
outlineTunedStyle = 2;

if (shift) { for (let j = 0; j < groupAction.length; j++) {
groupAction[j].lastElementChild.style.outline =`${T/(2*outlineDivisor)}px dotted  ${outlineColour}`; outlineStyle=8;
outlineTunedSize = T/(2*outlineDivisor);
outlineTunedStyle = 2;
} }

/*
} else if (outlineStyle==3) { coinFocus.lastElementChild.style.outline =`${T/(2*outlineDivisor)}px ridge  ${outlineColour}`; outlineStyle=4;
} else if (outlineStyle==4) { coinFocus.lastElementChild.style.outline =`${T/(2*outlineDivisor)}px groove ${outlineColour}`; outlineStyle=5;
} else if (outlineStyle==5) { coinFocus.lastElementChild.style.outline =`${T/(2*outlineDivisor)}px double ${outlineColour}`; outlineStyle=6;
} else if (outlineStyle==6) { coinFocus.lastElementChild.style.outline =`${T/(2*outlineDivisor)}px inset  ${outlineColour}`; outlineStyle=7;
} else if (outlineStyle==7) { coinFocus.lastElementChild.style.outline =`${T/(2*outlineDivisor)}px outset ${outlineColour}`; outlineStyle=8;
*/
} else if (outlineStyle==8) {
coinFocus.lastElementChild.style.outline =``;                                                  outlineStyle=0;
outlineTunedSize = 0;
outlineTunedStyle = 8;

if (shift) { for (let j = 0; j < groupAction.length; j++) {
groupAction[j].lastElementChild.style.outline =``;                                             outlineStyle=0;
outlineTunedSize = 0;
outlineTunedStyle = 8;
} }

}
}
}
