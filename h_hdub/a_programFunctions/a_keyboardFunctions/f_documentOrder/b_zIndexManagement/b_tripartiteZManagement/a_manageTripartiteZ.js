/* Arrange Z-Order Globally: Z Order, Original Document Order, Top Order, Left Order. */
/* The second press of the key performs a reversal of the same function. */

function manageTripartiteZ() {
if (utilityLayer0.children.length > 1) {


const aa = utilityLayer0.children;
let   az = Array.from(aa);
let   zz = new Array();

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

let eqT2B,eqL2R,eqZ2H;
eqT2B =parseInt(next.style.top)              == parseInt(az[g].style.top)       ;
eqL2R =parseInt(next.style.left)             == parseInt(az[g].style.left)      ;
eqZ2H =parseInt(next.style.zIndex)           == parseInt(az[g].style.zIndex)    ;

let condition1 ,condition2 ,condition3 ,
    condition1e,condition2e,condition3e;

condition1 = ZhighToLow ; condition1e = eqZ2H;
condition2 = leftToRight; condition2e = eqL2R;
condition3 = topToBottom; condition3e = eqT2B;

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

/* This function is jiggered to always perform a reversal on the subsequent press. */
if (lastKey==="z"&&kC==90&&cC==122) {zz.reverse();}

let increment=0;
for (let j=0; j<zz.length; j++) {
for (let i = 0; i < coinTrip.sel0.length; i++) {
if (coinTrip.sel0[i].id==zz[j].id) {
coinTrip.sel0[i].style.zIndex = pageEchelon + (tricolourEchelon * 2) + (internalStep * increment);
increment++;
} } }
increment=0;
for (let j=0; j<zz.length; j++) {
for (let i = 0; i < coinTrip.sel1.length; i++) {
if (coinTrip.sel1[i].id==zz[j].id) {
coinTrip.sel1[i].style.zIndex = pageEchelon + (tricolourEchelon * 1) + (internalStep * increment);
increment++;
} } }
increment=0;
for (let j=0; j<zz.length; j++) {
for (let i = 0; i < coinTrip.sel2.length; i++) {
if (coinTrip.sel2[i].id==zz[j].id) {
coinTrip.sel2[i].style.zIndex = pageEchelon + (tricolourEchelon * 3) + (internalStep * increment);
increment++;
} } }

return (1);
} else {
return (0);
}
}
