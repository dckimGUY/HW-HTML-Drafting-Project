function pasteSingle(keyInfo) {
const
e      = keyInfo[0],
kC     = keyInfo[1],
cC     = keyInfo[2],
shift  = keyInfo[3],
ctrl   = keyInfo[4],
alt    = keyInfo[5];
if (singlePasteBuffer.value.length > 0) {



utilityLayer0.appendChild(singlePasteBuffer.value[singlePasteBuffer.value.length - 1]);

utilityLayer0.lastElementChild.style.zIndex = findZextrema().highestGlobalZ + internalStep;

for (j=0; j<utilityLayer0.children.length; j++) {
utilityLayer0.children[j].style.outline = fA;
}

coinFocus = singlePasteBuffer.value.pop();
curFocus = 0;
recoverColouration();
coinFocus.style.outline = fB;
readCoins();
}
}
