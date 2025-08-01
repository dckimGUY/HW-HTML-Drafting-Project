/* Point stacking can be used together with document re-flow to render a width stacking order. */
function stackPoint(input,top,left,stepH,stepV) {
if (input.length > 0) {
const aa = input;
const Cleft = parseInt(Cur.style.left);
const Ctop  = parseInt(Cur.style.top) ;




for (j = 0; j < aa.length; j++) {

let scaleFactor = 1;
if (aa[j].dataset.scale) {
scaleFactor = parseFloat(aa[j].dataset.scale);
}

     if ( top &&  left) {
if (stepH) { aa[j].style.left = Cleft + (T * j) + "px"; } else { aa[j].style.left = Cleft + "px"; }
if (stepV) { aa[j].style.top = Ctop + (T * j) + "px"; } else { aa[j].style.top = Ctop + "px"; }
}
else if ( top && !left) {
if (stepH) { aa[j].style.left = Cleft - (T * j) - parseInt(aa[j].style.width) * scaleFactor + "px"; } else { aa[j].style.left = Cleft - parseInt(aa[j].style.width) * scaleFactor + "px"; }
if (stepV) { aa[j].style.top = Ctop + (T * j) + "px"; } else { aa[j].style.top = Ctop + "px"; }
}
else if (!top && !left) {
if (stepH) { aa[j].style.left = Cleft - (T * j) - parseInt(aa[j].style.width) * scaleFactor + "px"; } else { aa[j].style.left = Cleft - parseInt(aa[j].style.width) * scaleFactor + "px"; }
if (stepV) { aa[j].style.top = Ctop - (T * j) - parseInt(aa[j].style.height) * scaleFactor + "px"; } else { aa[j].style.top = Ctop - parseInt(aa[j].style.height) * scaleFactor + "px"; }
}
else if (!top &&  left) {
if (stepH) { aa[j].style.left = Cleft + (T * j) + "px"; } else { aa[j].style.left = Cleft + "px"; }
if (stepV) { aa[j].style.top = Ctop - (T * j) - parseInt(aa[j].style.height) * scaleFactor + "px"; } else { aa[j].style.top = Ctop - parseInt(aa[j].style.height) * scaleFactor + "px"; }
}
aa[j].dataset.left  = aa[j].style.left + "px";
aa[j].dataset.top   = aa[j].style.top  + "px";
}
return(1);
} else {
return(0);
}
}
