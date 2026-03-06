function restoreSingle() {


if (singleRestoreBuffer.value.length > 0) {






utilityLayer0.appendChild(singleRestoreBuffer.value[singleRestoreBuffer.value.length - 1]);

utilityLayer0.lastElementChild.style.zIndex = findZextrema().highestGlobalZ + internalStep;

for (j=0; j<utilityLayer0.children.length; j++) {
utilityLayer0.children[j].style.outline = fA; utilityLayer0.children[j].style.outlineOffset = fAO;
}

coinFocus = singleRestoreBuffer.value.pop();
curFocus = 0;
recoverColouration();
coinFocus.style.outline = fB;
coinFocus.style.outlineOffset = fBO;
readCoins();

const textColour = window["coinColour" + coinFocus.dataset.coinTrip];
let fontWidth;
if (parseInt(coinFocus.style.width) < parseInt(coinFocus.style.height)) {
fontWidth = parseInt(coinFocus.style.width );} else {
fontWidth = parseInt(coinFocus.style.height);}
const coinCentre = [
parseInt(coinFocus.style.left) + parseInt(coinFocus.style.width ) / 2,
parseInt(coinFocus.style.top ) + parseInt(coinFocus.style.height) / 2
];
buzzWord(1,"u",fontWidth,textColour,80,80,25,"center",coinCentre[0],coinCentre[1]);


}
}
