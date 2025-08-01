function moveDownAndCentre(keyInfo){

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

if ((Math.ceil(parseInt(cl.style.top )+parseInt(cl.style.height)*scaleFactor/2)%T) !=0) {

newValue= Math.round(parseInt(cl.style.top ) + ((Math.ceil((parseInt(cl.style.top ) + parseInt(cl.style.height)*scaleFactor/2)/T)*T) - (parseInt(cl.style.top ) + parseInt(cl.style.height)*scaleFactor/2))) +"px";

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

cl.style.top=newValue;
cl.dataset.top=newValue;

if (cl==Cur) {cl.style.top   = parseInt(newValue) + "px";}
if (cl==Cur) {cl.dataset.top = parseInt(newValue) + "px";}


} else if (curFocus==1) {
moveDown(keyInfo);


}

}
