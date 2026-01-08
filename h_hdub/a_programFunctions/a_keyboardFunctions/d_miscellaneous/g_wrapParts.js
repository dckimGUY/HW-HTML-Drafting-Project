function wrapParts() {
if (coinFocus!=null) {

let originalScrollX = window.scrollX;
let originalScrollY = window.scrollY;

const furthest = findFurthestExtent();
const least    = findLeastExtent()   ;

if (coinTrip.sel0.length>1) {
const newCoin0 = insertNewCoin([null,78,78,false,false,false]);
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
}
