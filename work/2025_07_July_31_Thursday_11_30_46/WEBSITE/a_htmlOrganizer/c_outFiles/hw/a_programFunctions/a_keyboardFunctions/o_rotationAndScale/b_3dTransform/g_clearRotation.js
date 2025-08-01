function clearRotation() {
if (coinFocus!=null) {

coinFocus.lastElementChild.dataset.perspective = "1536px";
coinFocus.lastElementChild.dataset.rotateX     =   "0deg";
coinFocus.lastElementChild.dataset.rotateY     =   "0deg";
coinFocus.lastElementChild.dataset.rotateZ     =   "0deg";
coinFocus.lastElementChild.dataset.translateZ  =    "0px";

coinFocus.lastElementChild.style.transform     = "perspective(1536px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px)";
}
}
