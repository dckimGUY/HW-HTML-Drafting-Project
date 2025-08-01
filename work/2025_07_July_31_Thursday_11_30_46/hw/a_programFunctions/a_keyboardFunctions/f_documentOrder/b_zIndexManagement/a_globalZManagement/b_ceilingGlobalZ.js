function ceilingGlobalZ() {
if (coinFocus!=null) {
if (parseInt(coinFocus.style.zIndex) != findZextrema().highestGlobalZ) {
coinFocus.style.zIndex = findZextrema().highestGlobalZ + internalStep;
}
manageGlobalZ();
}
}
