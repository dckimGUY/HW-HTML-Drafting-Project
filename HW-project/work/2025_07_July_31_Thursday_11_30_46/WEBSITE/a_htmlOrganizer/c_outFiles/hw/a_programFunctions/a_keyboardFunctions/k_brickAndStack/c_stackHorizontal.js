/* Stack the parts left to right according to the document ordering. */
function stackHorizontal(input,top,LR) {
if (input.length > 0) {
const aa = input;
const Cleft = parseInt(Cur.style.left);
const Ctop  = parseInt(Cur.style.top) ;
let leftTally = 0;





for (j = 0; j < aa.length; j++) {

if (LR) { leftTally += parseInt(aa[j].style.width) * parseFloat(aa[j].dataset.scale); }

if (top) { aa[j].style.top = Ctop + "px"; } else   { aa[j].style.top = Ctop - parseInt(aa[j].style.height) * parseFloat(aa[j].dataset.scale) + "px"; }
if (LR) { aa[j].style.left   = Cleft - leftTally + "px"; } else { aa[j].style.left   = Cleft + leftTally + "px"; }

aa[j].dataset.top   = aa[j].style.top ;
aa[j].dataset.left  = aa[j].style.left;

if (!LR) { leftTally += parseInt(aa[j].style.width) * parseFloat(aa[j].dataset.scale); }
}
return(1);
} else {
return(0);
}
}
