function duplicateU() {
restoreSingle();
insertNewDuplicate(['',68,68]);
removeCoin(['',88,120]);
coinFocus.style.left = window.scrollX + (window.innerWidth  / 2) - (parseInt(coinFocus.style.width)  / 2) + "px";
coinFocus.style.top  = window.scrollY + (window.innerHeight / 2) - (parseInt(coinFocus.style.height) / 2) + "px";
coinFocus.dataset.left = coinFocus.style.left;
coinFocus.dataset.top  = coinFocus.style.top;
}