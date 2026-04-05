function rotateZright(rotationStep) {

if (Cur.style.display == "block") {
coinFocus.lastElementChild.style.transformOrigin  = `${parseInt(Cur.style.left) - parseInt(coinFocus.style.left) + "px"} ${parseInt(Cur.style.top) - parseInt(coinFocus.style.top) + "px"}`;
coinFocus.firstElementChild.style.transformOrigin = `${parseInt(Cur.style.left) - parseInt(coinFocus.style.left) + "px"} ${parseInt(Cur.style.top) - parseInt(coinFocus.style.top) + "px"}`;
} else if (Cur.style.display == "none") {
coinFocus.lastElementChild.style.transformOrigin  = "center";
coinFocus.firstElementChild.style.transformOrigin = "center";
}

if (coinFocus!=null) {
const perspective =  parseInt(coinFocus.lastElementChild.dataset.perspective   );
const rotateX     =  parseInt(coinFocus.lastElementChild.dataset.rotateX       );
const rotateY     =  parseInt(coinFocus.lastElementChild.dataset.rotateY       );
const rotateZ     =  parseInt(coinFocus.lastElementChild.dataset.rotateZ       );
const translateZ  =  parseInt(coinFocus.lastElementChild.dataset.translateZ    );
let newRotateZ = 0;
newRotateZ = rotateZ + rotationStep;

if (!rotationStep) {
newRotateZ = rotateZ + ZrotationStep;
}
       if (newRotateZ>=360) {
newRotateZ -= 360;
} else if (newRotateZ<0) {
newRotateZ += 360;
}
coinFocus.lastElementChild.dataset.rotateZ = newRotateZ;
coinFocus.lastElementChild.style.transform = "perspective(" + perspective + "px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) rotateZ(" + newRotateZ + "deg) translateZ(" + translateZ + "px)"; 
coinFocus.firstElementChild.style.transform = "perspective(" + perspective + "px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) rotateZ(" + newRotateZ + "deg) translateZ(" + translateZ + "px)"; 
}
}
