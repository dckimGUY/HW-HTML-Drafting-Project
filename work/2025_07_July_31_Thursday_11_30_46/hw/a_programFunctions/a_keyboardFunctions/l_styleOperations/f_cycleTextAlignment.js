function cycleTextAlignment(keyInfo) {

const
e      = keyInfo[0],
kC     = keyInfo[1],
cC     = keyInfo[2],
shift  = keyInfo[3],
ctrl   = keyInfo[4],
alt    = keyInfo[5];

if (coinFocus!=null&&(lastKey=="a"||lastKey=="A")) {

let groupAction;
       if (coinFocus.dataset.coinTrip==Ts0) {
groupAction = coinTrip.sel0;
} else if (coinFocus.dataset.coinTrip==Ts1) {
groupAction = coinTrip.sel1;
} else if (coinFocus.dataset.coinTrip==Ts2) {
groupAction = coinTrip.sel2;
}

       if (coinFocus.lastElementChild.firstElementChild.nextElementSibling.style.textAlign=="left") {
           coinFocus.lastElementChild.firstElementChild.nextElementSibling.style.textAlign="center";
if (shift) { for (let j = 0; j < groupAction.length; j++) {
groupAction[j].lastElementChild.firstElementChild.nextElementSibling.style.textAlign = "center";
} }
} else if (coinFocus.lastElementChild.firstElementChild.nextElementSibling.style.textAlign=="center") {
           coinFocus.lastElementChild.firstElementChild.nextElementSibling.style.textAlign="right";
if (shift) { for (let j = 0; j < groupAction.length; j++) {
groupAction[j].lastElementChild.firstElementChild.nextElementSibling.style.textAlign = "right";
} }
} else if (coinFocus.lastElementChild.firstElementChild.nextElementSibling.style.textAlign=="right") {
           coinFocus.lastElementChild.firstElementChild.nextElementSibling.style.textAlign="justify";
if (shift) { for (let j = 0; j < groupAction.length; j++) {
groupAction[j].lastElementChild.firstElementChild.nextElementSibling.style.textAlign = "justify";
} }
} else if (coinFocus.lastElementChild.firstElementChild.nextElementSibling.style.textAlign=="justify") {
           coinFocus.lastElementChild.firstElementChild.nextElementSibling.style.textAlign="left";
if (shift) { for (let j = 0; j < groupAction.length; j++) {
groupAction[j].lastElementChild.firstElementChild.nextElementSibling.style.textAlign = "left";
} }
}
}
}
