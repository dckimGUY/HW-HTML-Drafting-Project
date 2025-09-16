function mousePlaceCursor(mouseInfo) {
if (Cur.style.display!="none") {
const event=mouseInfo[0], ctrl=mouseInfo[1], shift=mouseInfo[2];
let newCursorX=0,
    newCursorY=0;
if (event.pageX%T< T/2) { newCursorX=Math.floor(event.pageX/T)*T; } else if (event.pageX%T>=T/2) { newCursorX=Math.ceil(event.pageX/T)*T; }
if (event.pageY%T< T/2) { newCursorY=Math.floor(event.pageY/T)*T; } else if (event.pageY%T>=T/2) { newCursorY=Math.ceil(event.pageY/T)*T; }
  Cur.style.left = newCursorX + "px";
Cur.dataset.left = newCursorX + "px";
  Cur.style.top  = newCursorY + "px";
Cur.dataset.top  = newCursorY + "px";
return (1);
}
}
