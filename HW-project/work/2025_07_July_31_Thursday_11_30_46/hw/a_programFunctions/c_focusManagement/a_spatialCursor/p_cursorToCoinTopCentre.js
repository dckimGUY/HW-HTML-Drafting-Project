function cursorToCoinTopCentre() {
if (coinFocus!=null) {
let scaleFactor = 1;
scaleFactor = parseFloat(coinFocus.dataset.scale);
Cur.style.left   = parseInt(coinFocus.style.left) + parseInt(coinFocus.style.width)*scaleFactor/2 + "px";
Cur.dataset.left = parseInt(coinFocus.style.left) + parseInt(coinFocus.style.width)*scaleFactor/2 + "px";
Cur.style.top    = parseInt(coinFocus.style.top)  + "px";
Cur.dataset.top  = parseInt(coinFocus.style.top)  + "px";
}
}
