function cursorMoveLeft() {
if (parseInt(Cur.style.left) > 0) {
Cur.style.left   = parseInt(Cur.style.left) - T + "px";
if (parseInt(Cur.style.left) < 0) {Cur.style.left    = 0 + "px";}
Cur.dataset.left = Cur.style.left;
Cur.scrollIntoView();
}
if (utilityLayer0.children.length==0) { curFocus = 1; }
}
