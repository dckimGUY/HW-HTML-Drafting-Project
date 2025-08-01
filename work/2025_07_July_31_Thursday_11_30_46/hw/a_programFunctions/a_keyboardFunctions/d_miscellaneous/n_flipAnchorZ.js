function flipAnchorZ(keyInfo) {

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
       if (parseInt(coinFocus.firstElementChild.style.zIndex)==0) {
coinFocus.firstElementChild.style.zIndex="300";
noteStyle("Z<br><span style='font-size: 0.5em;'>anchor:</span><br><span style='color:lime;'>high</span>",durationS);
} else {
coinFocus.firstElementChild.style.zIndex="0";
noteStyle("Z<br><span style='font-size: 0.5em;'>anchor:</span><br><span style='color:red;'>low</span>",durationS);
}
} else if ( shift) {
       if (parseInt(coinFocus.firstElementChild.style.zIndex)==0) {
for (let j = 0; j < setData.length; j++) {
setData[j].firstElementChild.style.zIndex="300";
}
noteStyle("<u>Z</u><br><span style='font-size: 0.5em;'>anchor:</span><br><span style='color:lime;'>high</span>",durationS,true);
} else {
for (let j = 0; j < setData.length; j++) {
setData[j].firstElementChild.style.zIndex="0";
}
noteStyle("<u>Z</u><br><span style='font-size: 0.5em;'>anchor:</span><br><span style='color:red;'>low</span>",durationS,true);
}
}
}
}
