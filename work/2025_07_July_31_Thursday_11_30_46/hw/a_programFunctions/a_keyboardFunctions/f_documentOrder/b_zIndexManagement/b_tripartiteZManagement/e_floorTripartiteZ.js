function floorTripartiteZ() {
if (coinFocus!=null) {
       if (coinFocus.dataset.coinTrip==Ts0) {
if (parseInt(coinFocus.style.zIndex) != findZextrema().lowestSel0Z) {
coinFocus.style.zIndex = findZextrema().lowestSel0Z - internalStep;
}
} else if (coinFocus.dataset.coinTrip==Ts1) {
if (parseInt(coinFocus.style.zIndex) != findZextrema().lowestSel1Z) {
coinFocus.style.zIndex = findZextrema().lowestSel1Z - internalStep;
}
} else if (coinFocus.dataset.coinTrip==Ts2) {
if (parseInt(coinFocus.style.zIndex) != findZextrema().lowestSel2Z) {
coinFocus.style.zIndex = findZextrema().lowestSel2Z - internalStep;
}
}
}
manageTripartiteZ();
}
