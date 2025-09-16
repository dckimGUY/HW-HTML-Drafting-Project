function pasteSingle() {


if (singlePasteBuffer.value.length > 0) {



utilityLayer0.appendChild(singlePasteBuffer.value[singlePasteBuffer.value.length - 1]);

utilityLayer0.lastElementChild.style.zIndex = findZextrema().highestGlobalZ + internalStep;

for (j=0; j<utilityLayer0.children.length; j++) {
utilityLayer0.children[j].style.outline = fA; utilityLayer0.children[j].style.outlineOffset = fAO;
}

coinFocus = singlePasteBuffer.value.pop();
curFocus = 0;
recoverColouration();
coinFocus.style.outline = fB;
coinFocus.style.outlineOffset = fBO;
readCoins();
}
}
