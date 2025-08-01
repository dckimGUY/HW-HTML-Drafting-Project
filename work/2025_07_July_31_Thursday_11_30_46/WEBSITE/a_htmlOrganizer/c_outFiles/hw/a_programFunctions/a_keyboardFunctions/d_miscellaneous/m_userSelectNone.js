function userSelectNone(keyInfo) {

const
e      = keyInfo[0],
kC     = keyInfo[1],
cC     = keyInfo[2],
shift  = keyInfo[3],
ctrl   = keyInfo[4],
alt    = keyInfo[5];

if (coinFocus!=null) {

let setData;
       if (coinFocus.dataset.coinTrip==Ts0) {
                   setData = coinTrip.sel0;
} else if (coinFocus.dataset.coinTrip==Ts1) {
                   setData = coinTrip.sel1;
} else if (coinFocus.dataset.coinTrip==Ts2) {
                   setData = coinTrip.sel2;
}

if (!shift) {
       if (coinFocus.style.userSelect=="none") {
coinFocus.style.userSelect="auto";
noteStyle("W<br><span style='font-size: 0.5em;'>user-select:</span><br><span style='color:lime;'>auto</span>",durationS);
} else {
coinFocus.style.userSelect="none";
noteStyle("W<br><span style='font-size: 0.5em;'>user-select:</span><br><span style='color:red;'>none</span>",durationS);
}

} else if ( shift) {

       if (coinFocus.style.userSelect=="none") {
for (let j = 0; j < setData.length; j++) {
setData[j].style.userSelect="auto";
}
noteStyle("<u>W</u><br><span style='font-size: 0.5em;'>user-select:</span><br><span style='color:lime;'>auto</span>",durationS,true);
} else {
for (let j = 0; j < setData.length; j++) {
setData[j].style.userSelect="none";
}
noteStyle("<u>W</u><br><span style='font-size: 0.5em;'>user-select:</span><br><span style='color:red;'>none</span>",durationS,true);
}



}
}
}
