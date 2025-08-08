function wrapGrey() {

let originalScrollX = window.scrollX;
let originalScrollY = window.scrollY;

const furthest = findFurthestExtent();
const least    = findLeastExtent()   ;

if (coinTrip.sel0.length>1) {
const newCoin0 = insertNewCoin([null,78,110,false,false,false]);
newCoin0.dataset.coinTrip=Ts0;
readCoins();
spaceViewOn();
removePointerEventsNone();
for (let j = 0; j < coinTrip.sel0.length; j++) {
if (coinTrip.sel0[j]!=newCoin0) {
newCoin0.div.appendChild(coinTrip.sel0[j]);
}
newCoin0.style.left     =    least[0][1] + "px";
newCoin0.dataset.left   =    least[0][1] + "px";
newCoin0.style.top      =    least[0][0] + "px";
newCoin0.dataset.top    =    least[0][0] + "px";
newCoin0.style.width    = furthest[0][1] - least[0][1] + "px";
newCoin0.dataset.width  = furthest[0][1] - least[0][1] + "px";
newCoin0.style.height   = furthest[0][0] - least[0][0] + "px";
newCoin0.dataset.height = furthest[0][0] - least[0][0] + "px";
newCoin0.dataset.wrapper = "true";
}
for (let j = 0; j < newCoin0.div.children.length; j++) {
newCoin0.div.children[j].style.left   = parseInt(newCoin0.div.children[j].style.left) - least[0][1] + "px";
newCoin0.div.children[j].dataset.left = parseInt(newCoin0.div.children[j].style.left) - least[0][1] + "px";
newCoin0.div.children[j].style.top    = parseInt(newCoin0.div.children[j].style.top ) - least[0][0] + "px";
newCoin0.div.children[j].dataset.top  = parseInt(newCoin0.div.children[j].style.top ) - least[0][0] + "px";
}
}

recoverColouration();
readCoins();
restorePointerEventsNone();
spaceViewOff();

window.scrollTo(originalScrollX,originalScrollY);

Z();

}
