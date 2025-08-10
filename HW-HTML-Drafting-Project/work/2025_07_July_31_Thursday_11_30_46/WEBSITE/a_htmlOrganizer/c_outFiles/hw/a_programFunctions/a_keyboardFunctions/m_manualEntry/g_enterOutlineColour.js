const outlineColourPicker = document.createElement("input");
outlineColourPicker.type = "color";
outlineColourPicker.style.display = "none";
document.body.appendChild(outlineColourPicker);
outlineColourPicker.onchange = function () { outlineColour = outlineColourPicker.value; }

function enterOutlineColour(keyInfo) {
const
e      = keyInfo[0],
kC     = keyInfo[1],
cC     = keyInfo[2],
shift  = keyInfo[3],
ctrl   = keyInfo[4],
alt    = keyInfo[5];



let result = null;
if (coinFocus!=null) {
if (coinFocus.lastElementChild.style.outlineColor) {
result = prompt("enter new outline colour: ", coinFocus.lastElementChild.style.outlineColor);
} else {
result = prompt("enter new outline colour: ", "rgba(0,0,0,1)");
}
if (result!=null) {
coinFocus.lastElementChild.style.outlineColor = result;
outlineColour = result;
} else {
outlineColourPicker.click();
}
}

}
