function rotateOver() {
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
let newRotateX = 0;
newRotateX = rotateX + rotationStep;

coinFocus.lastElementChild.dataset.rotateX = newRotateX;
coinFocus.lastElementChild.style.transform = "perspective(" + perspective + "px) rotateX(" + newRotateX + "deg) rotateY(" + rotateY + "deg) rotateZ(" + rotateZ + "deg) translateZ(" + translateZ + "px)"; 

coinFocus.firstElementChild.style.transform = "perspective(" + perspective + "px) rotateX(" + newRotateX + "deg) rotateY(" + rotateY + "deg) rotateZ(" + rotateZ + "deg) translateZ(" + translateZ + "px)"; 

}
}
