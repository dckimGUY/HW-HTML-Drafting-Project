function cursorMoveRight() {
Cur.style.left   = parseInt(Cur.style.left) + T + "px";
Cur.dataset.left = parseInt(Cur.style.left) + T + "px";
Cur.scrollIntoView();
if (utilityLayer0.children.length==0) { curFocus = 1; }
}
