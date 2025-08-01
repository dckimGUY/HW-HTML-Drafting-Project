let boxCorner = 0;

function gridToBoxShadow(keyInfo) {

const
e      = keyInfo[0],
kC     = keyInfo[1],
cC     = keyInfo[2],
shift  = keyInfo[3],
ctrl   = keyInfo[4],
alt    = keyInfo[5];

if (coinFocus!=null&&(lastKey=="u"||lastKey=="U")) {

let groupAction;
       if (coinFocus.dataset.coinTrip==Ts0) {
groupAction = coinTrip.sel0;
} else if (coinFocus.dataset.coinTrip==Ts1) {
groupAction = coinTrip.sel1;
} else if (coinFocus.dataset.coinTrip==Ts2) {
groupAction = coinTrip.sel2;
}

       if (boxCorner==0)                                                  {
coinFocus.lastElementChild.style.boxShadow= ` ${T/(2*boxShadowDivisor)}px  ${T/(2*boxShadowDivisor)}px ${T/boxShadowDivisor}px red`;
boxCorner=2;

if (shift) { for (let j = 0; j < groupAction.length; j++) {
groupAction[j].lastElementChild.style.boxShadow = ` ${T/(2*boxShadowDivisor)}px  ${T/(2*boxShadowDivisor)}px ${T/boxShadowDivisor}px red`;
} }

/*
} else if (boxCorner==1) {
coinFocus.lastElementChild.style.boxShadow =`-${T/(2*boxShadowDivisor)}px  ${T/(2*boxShadowDivisor)}px ${T/boxShadowDivisor}px red`;
boxCorner=2;
*/

} else if (boxCorner==2) {
coinFocus.lastElementChild.style.boxShadow =`-${T/(2*boxShadowDivisor)}px -${T/(2*boxShadowDivisor)}px ${T/boxShadowDivisor}px red`;
boxCorner=5;

if (shift) { for (let j = 0; j < groupAction.length; j++) {
groupAction[j].lastElementChild.style.boxShadow = `-${T/(2*boxShadowDivisor)}px -${T/(2*boxShadowDivisor)}px ${T/boxShadowDivisor}px red`;
} }

/*
} else if (boxCorner==3) {
coinFocus.lastElementChild.style.boxShadow =` ${T/(2*boxShadowDivisor)}px -${T/(2*boxShadowDivisor)}px ${T/boxShadowDivisor}px red`;
boxCorner=4;
} else if (boxCorner==4) {
coinFocus.lastElementChild.style.boxShadow =`       0px        0px ${T/boxShadowDivisor}px red`;
boxCorner=5;
*/

} else if (boxCorner==5) {
coinFocus.lastElementChild.style.boxShadow =``;
boxCorner=0;

if (shift) { for (let j = 0; j < groupAction.length; j++) {
groupAction[j].lastElementChild.style.boxShadow = ``;
} }

}

}
}
