function cursorToCoinLeftCentre() {

Cur.style.display="block";

if (coinFocus!=null) {
let scaleFactor = 1;
scaleFactor = parseFloat(coinFocus.dataset.scale);
Cur.style.left   = parseInt(coinFocus.style.left)                                       + "px";
Cur.dataset.left = parseInt(coinFocus.style.left)                                       + "px";
Cur.style.top    = parseInt(coinFocus.style.top)  + parseInt(coinFocus.style.height)*scaleFactor/2  + "px";
Cur.dataset.top  = parseInt(coinFocus.style.top)  + parseInt(coinFocus.style.height)*scaleFactor/2  + "px";
}
}
