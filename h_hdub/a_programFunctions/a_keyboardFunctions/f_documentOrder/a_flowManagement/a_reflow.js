function reflow(input,reverse,order) {
/* Initial check to see if anything is in <a> and sel0 OR sel1 OR sel2 */
if (utilityLayer0.children.length > 1 && input.length > 0) {
const aa = input;
let   az = Array.from(aa);
let   zz = new Array();
/* Set the tie-breaker. */
for (j = 0; j < aa.length; j++) { az[j].dataset.flow = j; }
let number;
let next;
for (let f = 0; f < az.length; f++) {
number =   -1;
next   = null;
for (let g = 0; g < az.length; g++) {
     if (next == null) { next = az[g]; number = g; } else { if (az[g] != null) {

let topToBottom,leftToRight,ZhighToLow;
topToBottom =parseInt(next.style.top)        >  parseInt(az[g].style.top)       ;
leftToRight =parseInt(next.style.left)       >  parseInt(az[g].style.left)      ;
ZhighToLow  =parseInt(next.style.zIndex)     >  parseInt(az[g].style.zIndex)    ;

let bottomToTop,rightToLeft,ZlowToHigh;
bottomToTop =parseInt(next.style.top)        <  parseInt(az[g].style.top)       ;
rightToleft =parseInt(next.style.left)       <  parseInt(az[g].style.left)      ;
ZlowToHigh  =parseInt(next.style.zIndex)     <  parseInt(az[g].style.zIndex)    ;

let eqT2B,eqL2R,eqZ2H;
eqT2B =parseInt(next.style.top)              == parseInt(az[g].style.top)       ;
eqL2R =parseInt(next.style.left)             == parseInt(az[g].style.left)      ;
eqZ2H =parseInt(next.style.zIndex)           == parseInt(az[g].style.zIndex)    ;

let condition1 ,condition2 ,condition3 ,
    condition1e,condition2e,condition3e;

     if (order==0) { condition1 = topToBottom; condition1e = eqT2B;
                     condition2 = leftToRight; condition2e = eqL2R;
                     condition3 = ZhighToLow ; condition3e = eqZ2H; }

else if (order==1) { condition1 = leftToRight; condition1e = eqL2R;
                     condition2 = topToBottom; condition2e = eqT2B;
                     condition3 = ZhighToLow ; condition3e = eqZ2H; }

else if (order==2) { condition1 = leftToRight; condition1e = eqL2R;
                     condition2 = ZhighToLow ; condition2e = eqZ2H;
                     condition3 = topToBottom; condition3e = eqT2B; }

else if (order==3) { condition1 = ZhighToLow ; condition1e = eqZ2H;
                     condition2 = topToBottom; condition2e = eqT2B;
                     condition3 = leftToRight; condition3e = eqL2R; }

else if (order==4) { condition1 = ZhighToLow ; condition1e = eqZ2H;
                     condition2 = leftToRight; condition2e = eqL2R;
                     condition3 = topToBottom; condition3e = eqT2B; }

else if (order==5) { condition1 = topToBottom; condition1e = eqT2B;
                     condition2 = ZhighToLow ; condition2e = eqZ2H;
                     condition3 = leftToRight; condition3e = eqL2R; }

     if (condition1    ) {next = az[g]; number = g;}
else if (condition1e   )
{    if (condition2    ) {next = az[g]; number = g;}
else if (condition2e   )
{    if (condition3    ) {next = az[g]; number = g;}
else if (condition3e   )
{    if (parseInt(next.dataset.docOrder) >  parseInt(az[g].dataset.docOrder)) {next = az[g]; number = g;}
} } } } } }
zz[zz.length] = az[number];
az[number]    = null;
}
if (reverse) { zz.reverse(); }
for (j = 0; j < utilityLayer0.children.length; j++) {
if (utilityLayer0.children[j].dataset.coinTrip == input[0].dataset.coinTrip) {
utilityLayer0.children[j].remove();
}
}
for (j = 0; j < zz.length; j++) { utilityLayer0.appendChild(zz[j]); }
for (j = 0; j < aa.length; j++) { aa[j].dataset.flow = j; }
/* Re-Flow the tripartite coin sets. */
input = [];
input = zz;
Z();
return (1);
} else {
/* a has 0 or 1 children. */
return (0);
}
}
