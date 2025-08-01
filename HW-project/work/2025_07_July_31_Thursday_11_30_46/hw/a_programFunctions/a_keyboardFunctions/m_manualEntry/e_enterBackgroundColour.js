const backgroundColourPicker = document.createElement("input");
let usedShift = false;
backgroundColourPicker.type = "color";
backgroundColourPicker.style.display = "none";
document.body.appendChild(backgroundColourPicker);
backgroundColourPicker.onchange = function () {
coinFocus.lastElementChild.firstElementChild.nextElementSibling.style.backgroundColor = backgroundColourPicker.value;

}

function enterBackgroundColour(keyInfo) {
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


result = prompt("enter new background-colour (tp for transparent): ", coinFocus.lastElementChild.firstElementChild.nextElementSibling.style.backgroundColor);
if (result!=null) {
if (result=="tp"||result=="transparent") {

coinFocus.lastElementChild.firstElementChild.nextElementSibling.style.backgroundColor = "transparent";
if (shift) { for (let j = 0; j < groupAction.length; j++) {
groupAction[j].lastElementChild.firstElementChild.nextElementSibling.style.backgroundColor = "transparent";
} }

} else {

coinFocus.lastElementChild.firstElementChild.nextElementSibling.style.backgroundColor = result;
if (shift) { for (let j = 0; j < groupAction.length; j++) {
groupAction[j].lastElementChild.firstElementChild.nextElementSibling.style.backgroundColor = result;
} }

}
} else {
usedShift = true;
backgroundColourPicker.click();
}
}

}
