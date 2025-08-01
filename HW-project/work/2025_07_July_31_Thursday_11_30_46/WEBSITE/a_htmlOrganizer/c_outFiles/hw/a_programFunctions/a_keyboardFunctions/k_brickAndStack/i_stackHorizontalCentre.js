/* Stack the parts left to right according to the document ordering. */
function stackHorizontalCentre(input) {
if (input.length > 0) {
const aa = input;
const Cleft = parseInt(Cur.style.left);
const Ctop  = parseInt(Cur.style.top) ;
let leftTally = 0;
for (j = 0; j < aa.length; j++) {
aa[j].style.top = Ctop - parseInt(aa[j].style.height) * parseFloat(aa[j].dataset.scale) / 2 + "px";
aa[j].style.left   = Cleft + leftTally + "px";
aa[j].dataset.top   = aa[j].style.top ;
aa[j].dataset.left  = aa[j].style.left;
leftTally += parseInt(aa[j].style.width) * parseFloat(aa[j].dataset.scale);
}
return(1);
} else {
return(0);
}
}
