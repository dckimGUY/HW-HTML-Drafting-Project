function unwrapParts() {
if (coinFocus!=null) {

if (
coinFocus.lastElementChild &&
coinFocus.lastElementChild.firstElementChild
) {
coinFocus.lastElementChild.firstElementChild = coinFocus.lastElementChild.firstElementChild;
if (
coinFocus.lastElementChild.firstElementChild.children.length >= 1 && coinFocus.lastElementChild.firstElementChild.firstElementChild.dataset && coinFocus.lastElementChild.firstElementChild.firstElementChild.dataset.coinTrip
) {


const textColour = window["coinColour" + coinFocus.dataset.coinTrip];
let fontWidth;
if (parseInt(coinFocus.style.width) < parseInt(coinFocus.style.height)) {
fontWidth = parseInt(coinFocus.style.width );} else {
fontWidth = parseInt(coinFocus.style.height);}
const coinCentre = [
parseInt(coinFocus.style.left) + parseInt(coinFocus.style.width ) / 2,
parseInt(coinFocus.style.top ) + parseInt(coinFocus.style.height) / 2
];
buzzWord(2,"q",fontWidth,textColour,80,80,25,"center",coinCentre[0],coinCentre[1]);




for (let j = 0; j < coinFocus.lastElementChild.firstElementChild.children.length; j++) {
coinFocus.lastElementChild.firstElementChild.children[j].style.left   = parseInt(coinFocus.lastElementChild.firstElementChild.children[j].style.left) + parseInt(coinFocus.style.left) + "px"; 
coinFocus.lastElementChild.firstElementChild.children[j].dataset.left = parseInt(coinFocus.lastElementChild.firstElementChild.children[j].style.left) + "px"; 
coinFocus.lastElementChild.firstElementChild.children[j].style.top    = parseInt(coinFocus.lastElementChild.firstElementChild.children[j].style.top ) + parseInt(coinFocus.style.top ) + "px"; 
coinFocus.lastElementChild.firstElementChild.children[j].dataset.top  = parseInt(coinFocus.lastElementChild.firstElementChild.children[j].style.top ) + "px"; 
}

if (coinFocus.lastElementChild.firstElementChild.lastElementChild.tagName=="SCRIPT") {
coinFocus.lastElementChild.firstElementChild.lastElementChild.remove();
}

coinFocus.remove();
utilityLayer0.innerHTML = utilityLayer0.innerHTML + coinFocus.lastElementChild.firstElementChild.innerHTML;
coinFocus = utilityLayer0.lastElementChild;
readCoins();
restorePointerEventsNone();
spaceViewOff();
Z();
recoverColouration();
coinFocus.style.outline = fB;
coinFocus.style.outlineOffset = fBO;
} } } }
