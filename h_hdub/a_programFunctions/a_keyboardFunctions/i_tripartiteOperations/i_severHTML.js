function severHTML() {
if (coinFocus != null) {
const original = Array.from(coinFocus.lastElementChild.lastElementChild.previousElementSibling.children);
const lefting  = parseInt(coinFocus.style.left);
const topping  = parseInt(coinFocus.style.top);
const height   = parseInt(coinFocus.style.height);
const zSpot    = coinFocus.style.zIndex.toString();
coinFocus.lastElementChild.lastElementChild.previousElementSibling.innerHTML = original[0].outerHTML;
for (let j = 1; j < original.length; j++) {
setTimeout(() => {
insertNewDuplicate(['',68,68]);
coinFocus.style.left   = lefting + "px";
coinFocus.dataset.left = lefting + "px";
coinFocus.style.top    = topping + (height * j) + "px";
coinFocus.dataset.top  = topping + (height * j) + "px";
coinFocus.previousElementSibling.style.zIndex = zSpot;
coinFocus.lastElementChild.lastElementChild.previousElementSibling.innerHTML = original[j].outerHTML;
redraw();
}, 10 * j);
}
}
}