/* Stack the parts top to bottom according to the document ordering. */
function stackVertical(input,right,upward) {
if (input.length > 0) {
const aa = input;
const Cleft = parseInt(Cur.style.left);
const Ctop  = parseInt(Cur.style.top) ;
let topTally = 0;
for (j = 0; j < aa.length; j++) {
if (upward) { topTally += parseInt(aa[j].style.height) * parseFloat(aa[j].dataset.scale); }
if (right) { aa[j].style.left = Cleft + "px"; } else   { aa[j].style.left = Cleft - parseInt(aa[j].style.width) * parseFloat(aa[j].dataset.scale) + "px"; }
if (upward) { aa[j].style.top   = Ctop - topTally + "px"; } else { aa[j].style.top   = Ctop + topTally + "px"; }
aa[j].dataset.left  = aa[j].style.left;
aa[j].dataset.top   = aa[j].style.top ;
if (!upward) { topTally += parseInt(aa[j].style.height) * parseFloat(aa[j].dataset.scale); }
}
return(1);
} else {
return(0);
}
}
