function moveRightAndCentre(keyInfo){

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

if ((Math.ceil(parseInt(cl.style.left)+parseInt(cl.style.width)*scaleFactor/2)%T) !=0) {
newValue= Math.round(parseInt(cl.style.left) + ((Math.ceil((parseInt(cl.style.left) + parseInt(cl.style.width)*scaleFactor/2)/T)*T) - (parseInt(cl.style.left) + parseInt(cl.style.width)*scaleFactor/2))) +"px";
} else {
newValue=parseInt(cl.style.left) + T + "px";
}

if (cl==Cur) {
if (((parseInt(cl.style.left))%T) !=0) {
newValue= (Math.ceil((parseInt(cl.style.left))/T)*T) +"px";
} else {
newValue=parseInt(cl.style.left) + T + "px";
}


}

cl.style.left=newValue;
cl.dataset.left=newValue;

if (cl==Cur) {cl.style.left   = parseInt(newValue) + "px";}
if (cl==Cur) {cl.dataset.left = parseInt(newValue) + "px";}



} else if (curFocus==1) {

moveRight(keyInfo);

}

}
