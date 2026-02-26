function toggleGlobb() {
if (coinFocus != null) {
if (coinTrip["sel" + coinFocus.dataset.coinTrip].length > 1) {
const lefting = coinTrip["sel" + coinFocus.dataset.coinTrip][0].style.left;
const topping = coinTrip["sel" + coinFocus.dataset.coinTrip][0].style.top;
const globbString = deMinimis(false,false,'','','flow');
insertNewDuplicate(['',68,68]);
deleteCoin(['',88,120]);
removeGroup();
pasteSingle();
coinFocus.lastElementChild.lastElementChild.previousElementSibling.innerHTML = globbString;
coinFocus.style.left   = lefting;
coinFocus.dataset.left = lefting;
coinFocus.style.top    = topping;
coinFocus.dataset.top  = topping;
} else {
const original = Array.from(coinFocus.lastElementChild.lastElementChild.previousElementSibling.children);
const lefting  = parseInt(coinFocus.style.left);
const topping  = parseInt(coinFocus.style.top);
const zSpot    = coinFocus.style.zIndex.toString();
coinFocus.lastElementChild.lastElementChild.previousElementSibling.innerHTML = original[0].outerHTML;
for (let g = 1; g < original.length; g++) {
setTimeout(() => {
insertNewDuplicate(['',68,68]);
coinFocus.style.left   = lefting + (T * g) + "px";
coinFocus.dataset.left = lefting + (T * g) + "px";
coinFocus.style.top    = topping + (T * g) + "px";
coinFocus.dataset.top  = topping + (T * g) + "px";
coinFocus.previousElementSibling.style.zIndex = zSpot;
coinFocus.lastElementChild.lastElementChild.previousElementSibling.innerHTML = original[g].outerHTML;
redraw();
readCoins();
}, 10 * g);
}
}
}
}