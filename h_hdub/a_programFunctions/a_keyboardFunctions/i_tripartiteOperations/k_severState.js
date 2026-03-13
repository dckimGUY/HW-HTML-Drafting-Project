function severState() {
if (coinFocus != null && coinFocus.dataset.state != "" && stateHolder && stateHolder.length > 1) {
const lefting  = parseInt(coinFocus.style.left);
const topping  = parseInt(coinFocus.style.top);
const height   = parseInt(coinFocus.style.height);
const width    = parseInt(coinFocus.style.width);
const tempArray = Array.from(stateHolder);
removeCoin();
for (let j = 0; j < tempArray.length; j++) {
setTimeout(() => {
popAccumulator(JSON.stringify([tempArray[j]]));
coinFocus.style.left     = lefting + "px";
coinFocus.dataset.left   = lefting + "px";
coinFocus.style.top      = topping + (height * j) + "px";
coinFocus.dataset.top    = topping + (height * j) + "px";
coinFocus.style.width    = width + "px";
coinFocus.dataset.width  = width + "px";
coinFocus.style.height   = height + "px";
coinFocus.dataset.height = height + "px";
redraw();
}, 10 * j);
}
}
}