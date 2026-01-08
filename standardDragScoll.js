let
mousedown                =    {};
mousedown.hold           = false;
mousedown.clientX        =     0;
mousedown.clientY        =     0;
mousedown.scrollX        =     0;
mousedown.scrollY        =     0;

document.addEventListener("mousewheel", (event) => {
if (event.buttons===4) {
event.preventDefault();
}
}, { passive: false });

document.addEventListener("mousemove", (event) => {

if (mousedown.hold==true) {

mouseX = mousedown.scrollX + mousedown.clientX - event.clientX;
mouseY = mousedown.scrollY + mousedown.clientY - event.clientY;
quarterMouseX = mousedown.scrollX + (mousedown.clientX - event.clientX) / 4;
quarterMouseY = mousedown.scrollY + (mousedown.clientY - event.clientY) / 4;
if (event.buttons===4) {

event.preventDefault();
if (!event.ctrlKey&&!event.shiftKey) {

window.scrollTo({ left: mouseX, top: mouseY, behavior: "auto"});
} else if (!event.ctrlKey&& event.shiftKey) {
window.scrollTo({ left: quarterMouseX, top: quarterMouseY, behavior: "auto"});
}

return;
}

}

});

document.addEventListener("mousedown",   (event) => {
if (event.button===1) { event.preventDefault(); }
if (event.button!=2) {
mousedown.hold = true;
} else {
mousedown.hold=false;
}
});

document.addEventListener("mouseup", (event) => {
mousedown.hold           = false;
});