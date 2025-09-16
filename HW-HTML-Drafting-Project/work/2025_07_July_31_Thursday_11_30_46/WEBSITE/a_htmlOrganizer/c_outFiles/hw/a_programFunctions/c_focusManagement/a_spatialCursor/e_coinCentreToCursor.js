function coinCentreToCursor() {

Cur.style.display="block";

if (coinFocus!=null) {
let scaleFactor = 1;
scaleFactor = parseFloat(coinFocus.dataset.scale);
coinFocus.style.left   = parseInt(parseInt(Cur.style.left) - parseInt(coinFocus.style.width)*scaleFactor/2)   + "px";
coinFocus.dataset.left = coinFocus.style.left;
coinFocus.style.top    = parseInt(parseInt(Cur.style.top)  - parseInt(coinFocus.style.height)*scaleFactor/2)  + "px";
coinFocus.dataset.top  = coinFocus.style.top;
}
}
