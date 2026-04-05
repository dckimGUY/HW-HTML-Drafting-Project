function rotateLeft() {
if (coinFocus!=null) {

if (Cur.style.display == "block") {
coinFocus.lastElementChild.style.transformOrigin  = `${parseInt(Cur.style.left) - parseInt(coinFocus.style.left) + "px"} ${parseInt(Cur.style.top) - parseInt(coinFocus.style.top) + "px"}`;
coinFocus.firstElementChild.style.transformOrigin = `${parseInt(Cur.style.left) - parseInt(coinFocus.style.left) + "px"} ${parseInt(Cur.style.top) - parseInt(coinFocus.style.top) + "px"}`;
} else if (Cur.style.display == "none") {
coinFocus.lastElementChild.style.transformOrigin  = "center";
coinFocus.firstElementChild.style.transformOrigin = "center";
}

const perspective =  parseInt(coinFocus.lastElementChild.dataset.perspective   );
const rotateX     =  parseInt(coinFocus.lastElementChild.dataset.rotateX       );
const rotateY     =  parseInt(coinFocus.lastElementChild.dataset.rotateY       );
const rotateZ     =  parseInt(coinFocus.lastElementChild.dataset.rotateZ       );
const translateZ  =  parseInt(coinFocus.lastElementChild.dataset.translateZ    );
let newRotateY = 0;
newRotateY = rotateY - rotationStep;
       if (newRotateY>=360) {
newRotateY -= 360;
} else if (newRotateY<0) {
newRotateY += 360;
}
coinFocus.lastElementChild.dataset.rotateY = newRotateY;
coinFocus.lastElementChild.style.transform = "perspective(" + perspective + "px) rotateX(" + rotateX + "deg) rotateY(" + newRotateY + "deg) rotateZ(" + rotateZ + "deg) translateZ(" + translateZ + "px)"; 

coinFocus.firstElementChild.style.transform = "perspective(" + perspective + "px) rotateX(" + rotateX + "deg) rotateY(" + newRotateY + "deg) rotateZ(" + rotateZ + "deg) translateZ(" + translateZ + "px)"; 


}
}
