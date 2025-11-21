function moveDown(keyInfo){

const
e      = keyInfo[0],
kC     = keyInfo[1],
cC     = keyInfo[2],
shift  = keyInfo[3],
ctrl   = keyInfo[4],
alt    = keyInfo[5];

let cl;
if (coinFocus!=null) {cl=coinFocus;} else {cl=Cur;};
if (curFocus==1) {cl=Cur;}

let scaleFactor = 1;


if (curFocus==0&&coinFocus!=null) {
scaleFactor = parseFloat(coinFocus.dataset.scale);
}


let newValue = null;
let initialValue = parseInt(cl.dataset.top);

if ((Math.ceil(parseInt(cl.style.top)+parseInt(cl.style.height)*scaleFactor)%T) !=0) {
newValue= Math.round(parseInt(cl.style.top) + ((Math.ceil((parseInt(cl.style.top) + parseInt(cl.style.height)*scaleFactor)/T)*T) - (parseInt(cl.style.top) + parseInt(cl.style.height)*scaleFactor))) +"px";
} else {
newValue=parseInt(cl.style.top) + T + "px";
}
if (cl==Cur) {
if (((parseInt(cl.style.top))%T) !=0) {
newValue= (Math.ceil((parseInt(cl.style.top))/T)*T) +"px";
} else {
newValue=parseInt(cl.style.top) + T + "px";
}
}
const delta = parseInt(newValue) - initialValue;
if (shift&&cl!=Cur) {
       if (cl.dataset.coinTrip==Ts0) {
for (let j=0;j<coinTrip.sel0.length;j++){
coinTrip.sel0[j].style.top = parseInt(coinTrip.sel0[j].style.top) + delta + "px";
coinTrip.sel0[j].dataset.top = coinTrip.sel0[j].style.top;
}
} else if (cl.dataset.coinTrip==Ts1) {
for (let j=0;j<coinTrip.sel1.length;j++){
coinTrip.sel1[j].style.top = parseInt(coinTrip.sel1[j].style.top) + delta + "px";
coinTrip.sel1[j].dataset.top = coinTrip.sel1[j].style.top;
}
} else if (cl.dataset.coinTrip==Ts2) {
for (let j=0;j<coinTrip.sel2.length;j++){
coinTrip.sel2[j].style.top = parseInt(coinTrip.sel2[j].style.top) + delta + "px";
coinTrip.sel2[j].dataset.top = coinTrip.sel2[j].style.top;
}
}
} else {
cl.style.top=newValue;
cl.dataset.top=newValue;
}
if (cl==Cur) {cl.style.top   = parseInt(newValue) + "px"; Cur.scrollIntoView({behavior:'auto', block: 'center', inline: 'center'});}
if (cl==Cur) {cl.dataset.top = parseInt(newValue) + "px";}


}
