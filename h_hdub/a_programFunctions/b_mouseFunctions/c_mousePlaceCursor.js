function mousePlaceCursor(mouseInfo) {
if (Cur.style.display!="none") {
const event=mouseInfo[0], ctrl=mouseInfo[1], shift=mouseInfo[2];
let newCursorX=0,
    newCursorY=0;
if (event.pageX%mouseIncrement< mouseIncrement/2) { newCursorX=Math.floor(event.pageX/mouseIncrement)*mouseIncrement; } else if (event.pageX%mouseIncrement>=mouseIncrement/2) { newCursorX=Math.ceil(event.pageX/mouseIncrement)*mouseIncrement; }
if (event.pageY%mouseIncrement< mouseIncrement/2) { newCursorY=Math.floor(event.pageY/mouseIncrement)*mouseIncrement; } else if (event.pageY%mouseIncrement>=mouseIncrement/2) { newCursorY=Math.ceil(event.pageY/mouseIncrement)*mouseIncrement; }
  Cur.style.left = newCursorX + "px";
Cur.dataset.left = newCursorX + "px";
  Cur.style.top  = newCursorY + "px";
Cur.dataset.top  = newCursorY + "px";
return (1);
}
}
