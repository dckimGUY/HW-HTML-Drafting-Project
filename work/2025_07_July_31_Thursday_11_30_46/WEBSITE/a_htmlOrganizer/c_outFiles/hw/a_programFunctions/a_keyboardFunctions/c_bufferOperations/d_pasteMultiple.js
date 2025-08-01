function pasteMultiple(keyInfo) {

if (multiplePasteBuffer.value&&multiplePasteBuffer.value.length > 0) {

for (j=0;j<multiplePasteBuffer.value.length;j++) {
utilityLayer0.appendChild(multiplePasteBuffer.value[j]);
}

recoverColouration();

if (multiplePasteBuffer.value&&multiplePasteBuffer.value.length > 1) {
coinFocus1= multiplePasteBuffer.value[multiplePasteBuffer.value.length - 2];
}

coinFocus = multiplePasteBuffer.value[multiplePasteBuffer.value.length - 1];
curFocus=0;

for (let j = 0; j < utilityLayer0.children.length; j++) {
utilityLayer0.children[j].style.outline = fA;
}

if (utilityLayer0.children.length>0) { coinFocus = utilityLayer0.lastElementChild; curFocus = 0; }

multiplePasteBuffer = [];

readCoins();
recoverColouration();
coinFocus.style.outline = fB;

} else {
}

}
