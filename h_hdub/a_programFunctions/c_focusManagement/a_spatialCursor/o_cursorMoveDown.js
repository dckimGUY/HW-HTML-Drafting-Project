function cursorMoveDown() {

Cur.style.display="block";

Cur.style.top    = parseInt(Cur.style.top) + T + "px";
Cur.dataset.top  = parseInt(Cur.style.top) + T + "px";
Cur.scrollIntoView();
if (utilityLayer0.children.length==0) { curFocus = 1; }
}
