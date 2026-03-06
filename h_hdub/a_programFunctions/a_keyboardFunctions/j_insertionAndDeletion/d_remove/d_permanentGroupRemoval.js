function permanentGroupRemoval() {
if (coinFocus != null) {
const group = coinFocus.dataset.coinTrip;


const textColour = window["coinColour" + coinFocus.dataset.coinTrip];
let fontWidth;
if (parseInt(coinFocus.style.width) < parseInt(coinFocus.style.height)) {
fontWidth = parseInt(coinFocus.style.width );} else {
fontWidth = parseInt(coinFocus.style.height);}
const coinCentre = [
parseInt(coinFocus.style.left) + parseInt(coinFocus.style.width ) / 2,
parseInt(coinFocus.style.top ) + parseInt(coinFocus.style.height) / 2
];
buzzWord(2,"delete",fontWidth,textColour,80,80,25,"center",coinCentre[0],coinCentre[1]);

for (let j = coinTrip["sel" + group].length - 1; j >= 0; j--) {
coinFocus = coinTrip["sel" + group][j];
permanentRemoval();
}
}
recoverCoinFocus();
}