function wrapDocument() {
if (utilityLayer0.children.length>1) {

let originalScrollX = window.scrollX;
let originalScrollY = window.scrollY;

const newCoin = insertNewCoin([null,78,78,false,false,false]);

newCoin.remove();

const furthest = findFurthestExtent();
const least    = findLeastExtent()   ;

readCoins();
spaceViewOn();
removePointerEventsNone();

for (let j = 0; j < utilityLayer0.children.length; j++) {
utilityLayer0.children[j].lastElementChild.firstElementChild.style.display = "none";
utilityLayer0.children[j].lastElementChild.firstElementChild.innerText = "";
}

newCoin.div.innerHTML = utilityLayer0.innerHTML;

utilityLayer0.innerHTML = "";

utilityLayer0.appendChild(newCoin);

newCoin.anchor.style.zIndex = 0;
newCoin.style.left     =    least[3][1] + "px";
newCoin.dataset.left   =    least[3][1] + "px";
newCoin.style.top      =    least[3][0] + "px";
newCoin.dataset.top    =    least[3][0] + "px";
newCoin.style.width    = furthest[3][1] - least[3][1] + "px";
newCoin.dataset.width  = furthest[3][1] - least[3][1] + "px";
newCoin.style.height   = furthest[3][0] - least[3][0] + "px";
newCoin.dataset.height = furthest[3][0] - least[3][0] + "px";
newCoin.dataset.wrapper = "true";
newCoin.firstElementChild.style.pointerEvents = "none";

for (let j = 0; j < newCoin.div.children.length; j++) {
newCoin.div.children[j].style.left   = parseInt(newCoin.div.children[j].style.left) - least[3][1] + "px";
newCoin.div.children[j].dataset.left = parseInt(newCoin.div.children[j].style.left) - least[3][1] + "px";
newCoin.div.children[j].style.top    = parseInt(newCoin.div.children[j].style.top ) - least[3][0] + "px";
newCoin.div.children[j].dataset.top  = parseInt(newCoin.div.children[j].style.top ) - least[3][0] + "px";
}

recoverColouration();
readCoins();
restorePointerEventsNone();
spaceViewOff();

window.scrollTo(originalScrollX,originalScrollY);

Z();

}
}
