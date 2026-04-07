function wrapParts() {
if (coinFocus != null && utilityLayer0.children.length>1) {

const group = coinFocus.dataset.coinTrip;

let originalScrollX = window.scrollX;
let originalScrollY = window.scrollY;

const newCoin = insertNewCoin([null,78,78,false,false,false]);

newCoin.remove();

const furthest = findFurthestExtent();
const least    = findLeastExtent()   ;
let   rank;
       if (group == Ts0) {
               rank = 0;
} else if (group == Ts1) {
               rank = 1;
} else if (group == Ts2) {
               rank = 2;
}


readCoins();
spaceViewOn();
removePointerEventsNone();

for (let j = 0; j < utilityLayer0.children.length; j++) {
newCoin.div.appendChild(utilityLayer0.children[j]);
}

utilityLayer0.appendChild(newCoin);

newCoin.anchor.style.zIndex = 0;
newCoin.style.left     =    least[rank][1] + "px";
newCoin.dataset.left   =    least[rank][1] + "px";
newCoin.style.top      =    least[rank][0] + "px";
newCoin.dataset.top    =    least[rank][0] + "px";
newCoin.style.width    = furthest[rank][1] - least[3][1] + "px";
newCoin.dataset.width  = furthest[rank][1] - least[3][1] + "px";
newCoin.style.height   = furthest[rank][0] - least[3][0] + "px";
newCoin.dataset.height = furthest[rank][0] - least[3][0] + "px";
newCoin.firstElementChild.style.pointerEvents = "none";

for (let j = 0; j < newCoin.div.children.length; j++) {
newCoin.div.children[j].style.left   = parseInt(newCoin.div.children[j].style.left) - least[rank][1] + "px";
newCoin.div.children[j].dataset.left = parseInt(newCoin.div.children[j].style.left) - least[rank][1] + "px";
newCoin.div.children[j].style.top    = parseInt(newCoin.div.children[j].style.top ) - least[rank][0] + "px";
newCoin.div.children[j].dataset.top  = parseInt(newCoin.div.children[j].style.top ) - least[rank][0] + "px";
}

recoverColouration();
readCoins();
restorePointerEventsNone();
spaceViewOff();

window.scrollTo(originalScrollX,originalScrollY);

Z();

}


}
