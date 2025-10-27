function rotateUnder() {
if (coinFocus!=null) {

const perspective =  parseInt(coinFocus.lastElementChild.dataset.perspective   );
const rotateX     =  parseInt(coinFocus.lastElementChild.dataset.rotateX       );
const rotateY     =  parseInt(coinFocus.lastElementChild.dataset.rotateY       );
const rotateZ     =  parseInt(coinFocus.lastElementChild.dataset.rotateZ       );
const translateZ  =  parseInt(coinFocus.lastElementChild.dataset.translateZ    );
let newRotateX = 0;
newRotateX = rotateX - rotationStep;
       if (newRotateX>=360) {
newRotateX -= 360;
} else if (newRotateX<0) {
newRotateX += 360;
}
coinFocus.lastElementChild.dataset.rotateX = newRotateX;
coinFocus.lastElementChild.style.transform = "perspective(" + perspective + "px) rotateX(" + newRotateX + "deg) rotateY(" + rotateY + "deg) rotateZ(" + rotateZ + "deg) translateZ(" + translateZ + "px)"; 

coinFocus.firstElementChild.style.transform = "perspective(" + perspective + "px) rotateX(" + newRotateX + "deg) rotateY(" + rotateY + "deg) rotateZ(" + rotateZ + "deg) translateZ(" + translateZ + "px)"; 
}
}
