function moveLeft(keyInfo){

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

let newValue = null;
let initialValue = parseInt(cl.dataset.left);

if ((parseInt(cl.style.left)%T)!=0) {
newValue= (Math.floor(parseInt(cl.style.left)/T) * T) +"px";
} else {
newValue=parseInt(cl.style.left) - T + "px";
}

const delta = parseInt(newValue) - initialValue;
if (shift&&cl!=Cur&&parseInt(newValue)>=0) {
       if (cl.dataset.coinTrip==Ts0) {
for (let j=0;j<coinTrip.sel0.length;j++){
coinTrip.sel0[j].style.left = parseInt(coinTrip.sel0[j].style.left) + delta + "px";
coinTrip.sel0[j].dataset.left = coinTrip.sel0[j].style.left;
}
} else if (cl.dataset.coinTrip==Ts1) {
for (let j=0;j<coinTrip.sel1.length;j++){
coinTrip.sel1[j].style.left = parseInt(coinTrip.sel1[j].style.left) + delta + "px";
coinTrip.sel1[j].dataset.left = coinTrip.sel1[j].style.left;
}
} else if (cl.dataset.coinTrip==Ts2) {
for (let j=0;j<coinTrip.sel2.length;j++){
coinTrip.sel2[j].style.left = parseInt(coinTrip.sel2[j].style.left) + delta + "px";
coinTrip.sel2[j].dataset.left = coinTrip.sel2[j].style.left;
}
}
} else {
if (parseInt(newValue)>=0&&newValue) {
cl.style.left   = parseInt(newValue) + "px";
cl.dataset.left = parseInt(newValue) + "px";
}
}
if (parseInt(newValue)>=0&&newValue) {
if (cl==Cur) {cl.style.left   = parseInt(newValue) + "px"; Cur.scrollIntoView({behavior:'auto', block: 'center', inline: 'center'});}
if (cl==Cur) {cl.dataset.left = parseInt(newValue) + "px";}
}


}