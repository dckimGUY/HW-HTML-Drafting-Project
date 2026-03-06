function duplicateU() {
restoreSingle();
insertNewDuplicate(['',68,68]);
removeCoin(['',88,120]);

coinFocus.style.left   = window.scrollX + "px";
coinFocus.dataset.left = window.scrollX + "px";
coinFocus.style.top    = window.scrollY + "px";
coinFocus.dataset.top  = window.scrollY + "px";
}