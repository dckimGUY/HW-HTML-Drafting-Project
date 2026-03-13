function overflowMain(keyInfo) {

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

       if (coinFocus.lastElementChild.style.overflow=="hidden") {
coinFocus.lastElementChild.style.overflow="auto";
} else if (coinFocus.lastElementChild.style.overflow=="auto") {
coinFocus.lastElementChild.style.overflow="visible";
} else {
coinFocus.lastElementChild.style.overflow="hidden";
}

} else if ( shift) {

       if (coinFocus.lastElementChild.style.overflow=="hidden") {
for (let j = 0; j < setData.length; j++) {
setData[j].lastElementChild.style.overflow="auto";
}


} else if (coinFocus.lastElementChild.style.overflow=="auto") {

for (let j = 0; j < setData.length; j++) {
setData[j].lastElementChild.style.overflow="visible";
}

} else {

for (let j = 0; j < setData.length; j++) {
setData[j].lastElementChild.style.overflow="hidden";
}

}



}

}

}
