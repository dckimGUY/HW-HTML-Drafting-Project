function cursorToEnd() {

Cur.style.display="block";

Cur.style.top     =   document.documentElement.scrollHeight;
Cur.style.left    =   document.documentElement.scrollLeft;
Cur.dataset.top   =   document.documentElement.scrollHeight;
Cur.dataset.left  =   document.documentElement.scrollLeft;
}
