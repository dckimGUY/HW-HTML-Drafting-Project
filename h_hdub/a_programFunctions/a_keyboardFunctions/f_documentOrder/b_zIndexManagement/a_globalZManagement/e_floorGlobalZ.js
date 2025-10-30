function floorGlobalZ() {
if (coinFocus!=null) {
if (parseInt(coinFocus.style.zIndex) != findZextrema().lowestGlobalZ) {
coinFocus.style.zIndex = findZextrema().lowestGlobalZ - internalStep;
}
}
manageGlobalZ();
}
