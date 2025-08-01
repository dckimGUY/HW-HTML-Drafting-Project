function cursorToWindowCentre() {
Cur.style.left   = window.scrollX + (window.innerWidth/2)  + "px";
Cur.dataset.left = window.scrollX + (window.innerWidth/2)  + "px"; 
Cur.style.top    = window.scrollY + (window.innerHeight/2) + "px";
Cur.dataset.top  = window.scrollY + (window.innerHeight/2) + "px";
if (utilityLayer0.children.length==0) { curFocus = 1; }
}
