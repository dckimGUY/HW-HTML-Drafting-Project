function unwrapPartsAlways() {
if (coinFocus!=null) {

if (coinFocus.lastElementChild&&coinFocus.lastElementChild.firstElementChild) {
coinFocus.lastElementChild.firstElementChild = coinFocus.lastElementChild.firstElementChild;
if (coinFocus.lastElementChild.firstElementChild.children.length > 0 && coinFocus.lastElementChild.firstElementChild.firstElementChild.dataset && coinFocus.lastElementChild.firstElementChild.firstElementChild.dataset.coinTrip) {
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
