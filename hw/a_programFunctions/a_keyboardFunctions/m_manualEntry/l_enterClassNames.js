function enterClassNames(keyInfo) {
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

result = prompt("enter class(es) for this part: ", coinFocus.class);

if (result!=null) {
coinFocus.className = result;
if (shift) { for (let j = 0; j < groupAction.length; j++) {
groupAction[j].className = result;
}
}

}
}
}