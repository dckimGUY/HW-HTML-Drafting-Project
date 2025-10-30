function enterImageAltText(keyInfo) {
const
e      = keyInfo[0],
kC     = keyInfo[1],
cC     = keyInfo[2],
shift  = keyInfo[3],
ctrl   = keyInfo[4],
alt    = keyInfo[5];

let result = null;

if (coinFocus!=null) {

let groupAction;

       if (coinFocus.dataset.coinTrip==Ts0) {
groupAction = coinTrip.sel0;
} else if (coinFocus.dataset.coinTrip==Ts1) {
groupAction = coinTrip.sel1;
} else if (coinFocus.dataset.coinTrip==Ts2) {
groupAction = coinTrip.sel2;
}

result = prompt("enter alternative text for your image: ", coinFocus.lastElementChild.lastElementChild.alt);

if (result!=null) {
coinFocus.lastElementChild.lastElementChild.alt = result;
if (shift) { for (let j = 0; j < groupAction.length; j++) {
groupAction[j].lastElementChild.lastElementChild.alt = result;
}
}

}
}
}