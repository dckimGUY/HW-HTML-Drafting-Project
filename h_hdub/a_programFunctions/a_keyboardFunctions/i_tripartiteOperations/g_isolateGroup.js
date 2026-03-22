function isolateGroup() {

if (coinFocus == null || utilityLayer0.children.length == 0) {
groupPaste("0");
groupPaste("1");
groupPaste("2");
return;
}

if (coinFocus != null) {
const textColour = window["coinColour" + coinFocus.dataset.coinTrip];
let fontWidth;
if (parseInt(coinFocus.style.width) < parseInt(coinFocus.style.height)) {
fontWidth = parseInt(coinFocus.style.width );} else {
fontWidth = parseInt(coinFocus.style.height);}
const coinCentre = [
parseInt(coinFocus.style.left) + parseInt(coinFocus.style.width ) / 2,
parseInt(coinFocus.style.top ) + parseInt(coinFocus.style.height) / 2
];
buzzWord(2,"Y",fontWidth,textColour,80,80,25,"center",coinCentre[0],coinCentre[1]);
const group = coinFocus.dataset.coinTrip.toString();
deleteCoin(['',88,120]);
if (
sel0PasteBuffer.value&&sel0PasteBuffer.value.length > 0 ||
sel1PasteBuffer.value&&sel1PasteBuffer.value.length > 0 ||
sel2PasteBuffer.value&&sel2PasteBuffer.value.length > 0
) {
pasteMultiple();
groupPaste("0");
groupPaste("1");
groupPaste("2");
pasteSingle();
return;
}
groupDeletion("0");
groupDeletion("1");
groupDeletion("2");
groupPaste(group);
pasteSingle();
}
return;
}