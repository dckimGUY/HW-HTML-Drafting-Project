function cursorToCoinBottomRight() {
if (coinFocus!=null) {
let scaleFactor = 1;
scaleFactor = parseFloat(coinFocus.dataset.scale);
Cur.style.left   = parseInt(coinFocus.style.left) + parseInt(coinFocus.style.width)*scaleFactor   + "px";
Cur.dataset.left = parseInt(coinFocus.style.left) + parseInt(coinFocus.style.width)*scaleFactor   + "px";
Cur.style.top    = parseInt(coinFocus.style.top)  + parseInt(coinFocus.style.height)*scaleFactor  + "px";
Cur.dataset.top  = parseInt(coinFocus.style.top)  + parseInt(coinFocus.style.height)*scaleFactor  + "px";
}
}
