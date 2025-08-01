function cursorToCoinTopLeft() {
if (coinFocus!=null) {
Cur.style.left   = parseInt(coinFocus.style.left) + "px";
Cur.dataset.left = parseInt(coinFocus.style.left) + "px";
Cur.style.top    = parseInt(coinFocus.style.top)  + "px";
Cur.dataset.top  = parseInt(coinFocus.style.top)  + "px";
}
}
