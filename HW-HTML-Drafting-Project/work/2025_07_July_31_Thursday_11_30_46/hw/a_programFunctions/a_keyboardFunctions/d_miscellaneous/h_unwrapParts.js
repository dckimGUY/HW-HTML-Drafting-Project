function unwrapParts() {
if (coinFocus!=null) {
if (coinFocus.lastElementChild&&coinFocus.lastElementChild.firstElementChild&&coinFocus.lastElementChild.firstElementChild.nextElementSibling) {
coinFocus.div = coinFocus.lastElementChild.firstElementChild.nextElementSibling;
if (coinFocus.div.children.length > 1 && coinFocus.div.firstElementChild.dataset && coinFocus.div.firstElementChild.dataset.coinTrip) {
for (let j = 0; j < coinFocus.div.children.length; j++) {
coinFocus.div.children[j].style.left   = parseInt(coinFocus.div.children[j].style.left) + parseInt(coinFocus.style.left) + "px"; 
coinFocus.div.children[j].dataset.left = parseInt(coinFocus.div.children[j].style.left) + "px"; 
coinFocus.div.children[j].style.top    = parseInt(coinFocus.div.children[j].style.top ) + parseInt(coinFocus.style.top ) + "px"; 
coinFocus.div.children[j].dataset.top  = parseInt(coinFocus.div.children[j].style.top ) + "px"; 
}

if (coinFocus.div.lastElementChild.tagName=="SCRIPT") {
coinFocus.div.lastElementChild.remove();
}

coinFocus.remove();
utilityLayer0.innerHTML = utilityLayer0.innerHTML + coinFocus.div.innerHTML;
coinFocus = utilityLayer0.lastElementChild;
readCoins();
restorePointerEventsNone();
spaceViewOff();
Z();
recoverColouration();
coinFocus.style.outline = fB;
} } } }
