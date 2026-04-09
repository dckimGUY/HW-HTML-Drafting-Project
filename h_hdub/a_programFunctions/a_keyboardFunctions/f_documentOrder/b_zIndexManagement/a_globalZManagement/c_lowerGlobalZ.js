function lowerGlobalZ() {
if (coinFocus!=null) {
if (parseInt(coinFocus.style.zIndex) > findZextrema().lowestGlobalZ) {
coinFocus.style.zIndex = parseInt(coinFocus.style.zIndex) - internalStep - 1;
}
}
manageGlobalZ();
}
