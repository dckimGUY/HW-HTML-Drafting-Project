function cursorMoveUp() {

Cur.style.display="block";

if (parseInt(Cur.style.top) > 0) {
Cur.style.top    = parseInt(Cur.style.top) - T + "px";
if (parseInt(Cur.style.top) < 0) {Cur.style.top    = 0 + "px";}
Cur.dataset.top  = Cur.style.top;
Cur.scrollIntoView();
}
if (utilityLayer0.children.length==0) { curFocus = 1; }
}
