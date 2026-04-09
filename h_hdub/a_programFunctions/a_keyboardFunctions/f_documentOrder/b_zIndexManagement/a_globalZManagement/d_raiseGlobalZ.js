function raiseGlobalZ() {
if (coinFocus!=null) {
if (parseInt(coinFocus.style.zIndex) < findZextrema().highestGlobalZ) {
coinFocus.style.zIndex = parseInt(coinFocus.style.zIndex) + internalStep + 1;
}
manageGlobalZ();
}
}
