function wrapBlue() {

let originalScrollX = window.scrollX;
let originalScrollY = window.scrollY;

const furthest = findFurthestExtent();
const least    = findLeastExtent()   ;

if (coinTrip.sel2.length>1) {
const newCoin2 = insertNewCoin([null,78,78,false,false,false]);
newCoin2.dataset.coinTrip=Ts2;
readCoins();
spaceViewOn();
removePointerEventsNone();
for (let j = 0; j < coinTrip.sel2.length; j++) {
if (coinTrip.sel2[j]!=newCoin2) {
newCoin2.div.appendChild(coinTrip.sel2[j]);
}
newCoin2.style.left     =    least[2][1] + "px";
newCoin2.dataset.left   =    least[2][1] + "px";
newCoin2.style.top      =    least[2][0] + "px";
newCoin2.dataset.top    =    least[2][0] + "px";
newCoin2.style.width    = furthest[2][1] - least[2][1] + "px";
newCoin2.dataset.width  = furthest[2][1] - least[2][1] + "px";
newCoin2.style.height   = furthest[2][0] - least[2][0] + "px";
newCoin2.dataset.height = furthest[2][0] - least[2][0] + "px";
newCoin2.dataset.wrapper = "true";
}
for (let j = 0; j < newCoin2.div.children.length; j++) {
newCoin2.div.children[j].style.left   = parseInt(newCoin2.div.children[j].style.left) - least[2][1] + "px";
newCoin2.div.children[j].dataset.left = parseInt(newCoin2.div.children[j].style.left) - least[2][1] + "px";
newCoin2.div.children[j].style.top    = parseInt(newCoin2.div.children[j].style.top ) - least[2][0] + "px";
newCoin2.div.children[j].dataset.top  = parseInt(newCoin2.div.children[j].style.top ) - least[2][0] + "px";
}
}

recoverColouration();
readCoins();
restorePointerEventsNone();
spaceViewOff();

window.scrollTo(originalScrollX,originalScrollY);

Z();

}
