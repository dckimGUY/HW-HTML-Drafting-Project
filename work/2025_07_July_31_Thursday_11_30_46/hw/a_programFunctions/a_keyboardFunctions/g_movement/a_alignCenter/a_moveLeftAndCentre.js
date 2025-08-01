function moveLeftAndCentre(keyInfo){

const
e      = keyInfo[0],
kC     = keyInfo[1],
cC     = keyInfo[2],
shift  = keyInfo[3],
ctrl   = keyInfo[4],
alt    = keyInfo[5];

let cl;

if (curFocus==0) {
if (coinFocus!=null) {cl=coinFocus;} else {cl=Cur;};
if (curFocus==1) {cl=Cur;}
let scaleFactor = 1;
if (curFocus==0) {
scaleFactor = parseFloat(coinFocus.dataset.scale);
}

let newValue = null;
let initialValue = parseInt(cl.dataset.left);

if (((parseInt(cl.style.left) + parseInt(cl.style.width)*scaleFactor/2)%T)!=0) {
newValue= (Math.floor((parseInt(cl.style.left) + (parseInt(cl.style.width)*scaleFactor/2))/T) * T) - (parseInt(cl.style.width)*scaleFactor/2) +"px";
} else {
newValue=parseInt(cl.style.left) - T + "px";
}

if (parseInt(newValue) > -(parseInt(cl.style.width)*scaleFactor)) {
cl.style.left=newValue;
cl.dataset.left=newValue;


return (0);
} else {
return (1);
}
} else if (curFocus==1) {
moveLeft(keyInfo);
}

}
