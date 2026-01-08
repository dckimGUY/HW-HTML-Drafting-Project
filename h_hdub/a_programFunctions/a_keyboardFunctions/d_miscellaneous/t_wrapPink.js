function wrapPink() {

let originalScrollX = window.scrollX;
let originalScrollY = window.scrollY;

const furthest = findFurthestExtent();
const least    = findLeastExtent()   ;

if (coinTrip.sel1.length>1) {
const newCoin1 = insertNewCoin([null,78,78,false,false,false]);
newCoin1.dataset.coinTrip=Ts1;
readCoins();
spaceViewOn();
removePointerEventsNone();
for (let j = 0; j < coinTrip.sel1.length; j++) {
if (coinTrip.sel1[j]!=newCoin1) {
newCoin1.div.appendChild(coinTrip.sel1[j]);
}
newCoin1.style.left     =    least[1][1] + "px";
newCoin1.dataset.left   =    least[1][1] + "px";
newCoin1.style.top      =    least[1][0] + "px";
newCoin1.dataset.top    =    least[1][0] + "px";
newCoin1.style.width    = furthest[1][1] - least[1][1] + "px";
newCoin1.dataset.width  = furthest[1][1] - least[1][1] + "px";
newCoin1.style.height   = furthest[1][0] - least[1][0] + "px";
newCoin1.dataset.height = furthest[1][0] - least[1][0] + "px";
newCoin1.dataset.wrapper = "true";
}
for (let j = 0; j < newCoin1.div.children.length; j++) {
newCoin1.div.children[j].style.left   = parseInt(newCoin1.div.children[j].style.left) - least[1][1] + "px";
newCoin1.div.children[j].dataset.left = parseInt(newCoin1.div.children[j].style.left) - least[1][1] + "px";
newCoin1.div.children[j].style.top    = parseInt(newCoin1.div.children[j].style.top ) - least[1][0] + "px";
newCoin1.div.children[j].dataset.top  = parseInt(newCoin1.div.children[j].style.top ) - least[1][0] + "px";
}
}

recoverColouration();
readCoins();
restorePointerEventsNone();
spaceViewOff();

window.scrollTo(originalScrollX,originalScrollY);

Z();

}
