function makeItContentEditable(keyInfo) {

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

       if (coinFocus.lastElementChild.firstElementChild.nextElementSibling.contentEditable == "false") {
coinFocus.lastElementChild.firstElementChild.nextElementSibling.contentEditable = "true";
noteStyle("E<br><span style='font-size: 0.5em;'>content-editable:</span><br><span style='color:lime;'>true</span>",durationS);
} else if (coinFocus.lastElementChild.firstElementChild.nextElementSibling.contentEditable == "true") {
coinFocus.lastElementChild.firstElementChild.nextElementSibling.contentEditable = "false";
noteStyle("E<br><span style='font-size: 0.5em;'>content-editable:</span><br><span style='color:red;'>false</span>",durationS);
} else {
coinFocus.lastElementChild.firstElementChild.nextElementSibling.contentEditable = "true";
noteStyle("E<br><span style='font-size: 0.5em;'>content-editable:</span><br><span style='color:lime;'>true</span>",durationS);
}

} else if ( shift) {
       if (coinFocus.lastElementChild.firstElementChild.nextElementSibling.contentEditable == "false") {
for (let j = 0; j < setData.length; j++) {
setData[j].lastElementChild.firstElementChild.nextElementSibling.contentEditable = "true";
}
noteStyle("<u>E</u><br><span style='font-size: 0.5em;'>content-editable:</span><br><span style='color:lime;'>true</span>",durationS,true);

} else if (coinFocus.lastElementChild.firstElementChild.nextElementSibling.contentEditable == "true") {
for (let j = 0; j < setData.length; j++) {
setData[j].lastElementChild.firstElementChild.nextElementSibling.contentEditable = "false";
}
noteStyle("<u>E</u><br><span style='font-size: 0.5em;'>content-editable:</span><br><span style='color:red;'>false</span>",durationS,true);

} else {
for (let j = 0; j < setData.length; j++) {
setData[j].lastElementChild.firstElementChild.nextElementSibling.contentEditable = "true";
}
noteStyle("<u>E</u><br><span style='font-size: 0.5em;'>content-editable:</span><br><span style='color:lime;'>true</span>",durationS,true);

}
}
}
}
