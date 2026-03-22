function isolateSingle() {

if (coinFocus == null || utilityLayer0.children.length == 0) {
groupPaste("0");
groupPaste("1");
groupPaste("2");
return;
}

if (multiplePasteBuffer.value != '' && coinFocus != null) {
const textColour = window["coinColour" + coinFocus.dataset.coinTrip];
let fontWidth;
if (parseInt(coinFocus.style.width) < parseInt(coinFocus.style.height)) {
fontWidth = parseInt(coinFocus.style.width );} else {
fontWidth = parseInt(coinFocus.style.height);}
const coinCentre = [
parseInt(coinFocus.style.left) + parseInt(coinFocus.style.width ) / 2,
parseInt(coinFocus.style.top ) + parseInt(coinFocus.style.height) / 2
];
buzzWord(2,"y",fontWidth,textColour,80,80,25,"center",coinCentre[0],coinCentre[1]);
deleteCoin(['',88,120]);
pasteMultiple();
pasteSingle();
return;
}

const textColour = window["coinColour" + coinFocus.dataset.coinTrip];
let fontWidth;
if (parseInt(coinFocus.style.width) < parseInt(coinFocus.style.height)) {
fontWidth = parseInt(coinFocus.style.width );} else {
fontWidth = parseInt(coinFocus.style.height);}
const coinCentre = [
parseInt(coinFocus.style.left) + parseInt(coinFocus.style.width ) / 2,
parseInt(coinFocus.style.top ) + parseInt(coinFocus.style.height) / 2
];
buzzWord(2,"y",fontWidth,textColour,80,80,25,"center",coinCentre[0],coinCentre[1]);
deleteCoin(['',88,120]);
deleteCoin(['',88,88]);
pasteSingle();
if(rev==1){focusLast()}else{focusFirst()};
}