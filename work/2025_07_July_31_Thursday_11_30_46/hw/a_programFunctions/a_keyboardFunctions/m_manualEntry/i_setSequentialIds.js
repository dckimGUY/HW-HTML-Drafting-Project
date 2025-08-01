function setSequentialIds() {

let idPrefix  = "";
let refPrefix = "";

let result = null;
if (coinFocus!=null) {
result = prompt("enter id prefix for sequence: ", coinFocus.id.slice(0, -3));
if (result!=null) {
idPrefix = result;
refPrefix = idPrefix.charAt(0).toUpperCase() + idPrefix.slice(1);
} else {
return (0);
}

       if (coinFocus.dataset.coinTrip==Ts0) {
for (let j = 0; j < coinTrip.sel0.length; j++) {
if (coinTrip.sel0[j].id==coinTrip.sel0[j].dataset.jsName) {
coinTrip.sel0[j].dataset.jsName = "ref" + refPrefix + (100 + j) + "";
}
coinTrip.sel0[j].id = idPrefix + (100 + j) + "";
coinTrip.sel0[j].firstElementChild.innerText = coinTrip.sel0[j].id;
}
} else if (coinFocus.dataset.coinTrip==Ts1) {
for (let j = 0; j < coinTrip.sel1.length; j++) {
if (coinTrip.sel1[j].id==coinTrip.sel1[j].dataset.jsName) {
coinTrip.sel1[j].dataset.jsName = "ref" + refPrefix + (100 + j) + "";
}
coinTrip.sel1[j].id = idPrefix + (100 + j) + "";
coinTrip.sel1[j].firstElementChild.innerText = coinTrip.sel1[j].id;
}
} else if (coinFocus.dataset.coinTrip==Ts2) {
for (let j = 0; j < coinTrip.sel2.length; j++) {
if (coinTrip.sel2[j].id==coinTrip.sel2[j].dataset.jsName) {
coinTrip.sel2[j].dataset.jsName = "ref" + refPrefix + (100 + j) + "";
}
coinTrip.sel2[j].id = idPrefix + (100 + j) + "";
coinTrip.sel2[j].firstElementChild.innerText = coinTrip.sel2[j].id;
}
}
}

}
