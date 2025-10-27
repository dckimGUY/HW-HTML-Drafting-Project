function wrapDocumentWithScreen() {
if (utilityLayer0.children.length>1) {

let originalScrollX = window.scrollX;
let originalScrollY = window.scrollY;

const newCoin = insertNewCoin([null,78,110,false,false,false]);

newCoin.remove();

const extent = findFurthestExtent();

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

for (let j = 0; j < newCoin.div.children.length; j++) {
newCoin.div.children[j].style.left   = parseInt(newCoin.div.children[j].style.left) - parseInt(window.scrollX) + "px";
newCoin.div.children[j].dataset.left = parseInt(newCoin.div.children[j].style.left) + "px";
newCoin.div.children[j].style.top    = parseInt(newCoin.div.children[j].style.top ) - parseInt(window.scrollY) + "px";
newCoin.div.children[j].dataset.top  = parseInt(newCoin.div.children[j].style.top ) + "px";
}

newCoin.style.top      = window.scrollY     + "px";
newCoin.dataset.top    = window.scrollY     + "px";
newCoin.style.left     = window.scrollX     + "px";
newCoin.dataset.left   = window.scrollX     + "px";
newCoin.style.width    = window.innerWidth  + "px";
newCoin.dataset.width  = window.innerWidth  + "px";
newCoin.style.height   = window.innerHeight + "px";
newCoin.dataset.height = window.innerHeight + "px";
newCoin.dataset.wrapper = "true";
newCoin.firstElementChild.style.pointerEvents = "none";

recoverColouration();
readCoins();
restorePointerEventsNone();
spaceViewOff();

window.scrollTo(originalScrollX,originalScrollY);

Z();

}
}
