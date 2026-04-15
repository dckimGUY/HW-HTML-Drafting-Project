function combineStates() {
if (coinFocus != null && coinFocus.dataset.state != "") {
let combinedStates = [];
for (let j = 0; j < coinTrip["sel" + coinFocus.dataset.coinTrip].length; j++) {
if (!!coinTrip["sel" + coinFocus.dataset.coinTrip][j].dataset.state) {
for (i of JSON.parse(coinTrip["sel" + coinFocus.dataset.coinTrip][j].dataset.state)) {
combinedStates.push(i);
}
coinTrip["sel" + coinFocus.dataset.coinTrip][j].remove();
}
}
popAccumulator(JSON.stringify(combinedStates));
readCoins();
recoverColouration();
redraw();
}
}