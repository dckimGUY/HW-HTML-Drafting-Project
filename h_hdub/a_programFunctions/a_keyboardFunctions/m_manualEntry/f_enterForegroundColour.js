const colourPicker = document.createElement("input");
colourPicker.type = "color";
colourPicker.style.display = "none";
document.body.appendChild(colourPicker);
colourPicker.onchange = function () { coinFocus.lastElementChild.firstElementChild.nextElementSibling.style.color = colourPicker.value; }

function enterForegroundColour(keyInfo) {
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




result = prompt("enter new font colour (tp for transparent): ", coinFocus.lastElementChild.firstElementChild.nextElementSibling.style.color);
if (result!=null) {
if (result=="tp"||result=="transparent") {

coinFocus.lastElementChild.firstElementChild.nextElementSibling.style.color = "transparent";
if (shift) { for (let j = 0; j < groupAction.length; j++) {
groupAction[j].lastElementChild.firstElementChild.nextElementSibling.style.color = "transparent";
} }

} else {

coinFocus.lastElementChild.firstElementChild.nextElementSibling.style.color = result.toLowerCase();
if (shift) { for (let j = 0; j < groupAction.length; j++) {
groupAction[j].lastElementChild.firstElementChild.nextElementSibling.style.color = result.toLowerCase();
} }

}
} else {
colourPicker.click();
}
}

}
