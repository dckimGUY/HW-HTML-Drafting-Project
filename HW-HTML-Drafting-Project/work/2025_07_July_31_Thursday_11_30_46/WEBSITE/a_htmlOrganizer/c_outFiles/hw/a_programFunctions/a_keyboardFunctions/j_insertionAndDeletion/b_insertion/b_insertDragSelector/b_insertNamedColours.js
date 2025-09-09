function insertNamedColours() {

let alpha = 1;

let result = null;
result = prompt("enter alpha transparency value: ", 1);
if (result!=null) {
alpha = result;
} else {
alpha=1;
}

if (result!=null) {

Cur.style.left   = "0px";
Cur.style.top    = "0px";
Cur.dataset.left = "0px";
Cur.dataset.top  = "0px";
for ( let j = 0; j < namedColourArray.length; j++) {

hauptMode=0;
curFocus=1;
insertNewCoin(["",78,110,true,false,false]);


let newCoin = utilityLayer0.lastElementChild;
let inputLocation = newCoin.lastElementChild.lastElementChild.previousElementSibling;

const  step1 = 25 * 48;
const  step2 = 50 * 48;
const  step3 = 75 * 48;
const  step4 = 100 * 48;
const  step5 = 125 * 48;

if (j < 25) {
newCoin.style.left   = "0px";
newCoin.dataset.left = "0px";
newCoin.style.top    = 48 * j + "px";
newCoin.dataset.top  = 48 * j + "px";
newCoin.dataset.coinTrip=Ts0;
} else if (j < 50) {
newCoin.style.left   = "256px";
newCoin.dataset.left = "256px";
newCoin.style.top    = 48 * j - step1 + "px";
newCoin.dataset.top  = 48 * j - step1 + "px";
newCoin.dataset.coinTrip=Ts0;
} else if (j < 75) {
newCoin.style.left   = "0px";
newCoin.dataset.left = "0px";
newCoin.style.top    = 48 * j - step2 + "px";
newCoin.dataset.top  = 48 * j - step2 + "px";
newCoin.dataset.coinTrip=Ts1;
} else if (j < 100) {
newCoin.style.left   = "256px";
newCoin.dataset.left = "256px";
newCoin.style.top    = 48 * j - step3 + "px";
newCoin.dataset.top  = 48 * j - step3 + "px";
newCoin.dataset.coinTrip=Ts1;
} else if (j < 125) {
newCoin.style.left   = "0px";
newCoin.dataset.left = "0px";
newCoin.style.top    = 48 * j - step4 + "px";
newCoin.dataset.top  = 48 * j - step4 + "px";
newCoin.dataset.coinTrip=Ts2;
} else if (j < 150) {
newCoin.style.left   = "256px";
newCoin.dataset.left = "256px";
newCoin.style.top    = 48 * j - step5 + "px";
newCoin.dataset.top  = 48 * j - step5 + "px";
newCoin.dataset.coinTrip=Ts2;
}

newCoin.style.width  = "256px";
newCoin.style.height =  "48px";
inputLocation.style.paddingLeft = "32px";

       if (alpha==1) {
newCoin.dataset.jsName = namedColourArray[j][0].toString();
newCoin.dataset.dragPull = "backgroundColor";
inputLocation.innerHTML = "&nbsp;&nbsp;&nbsp;" + namedColourArray[j][0];
inputLocation.style.backgroundColor = namedColourArray[j][0];
} else if (alpha<1) {
inputLocation.innerHTML = "&nbsp;&nbsp;&nbsp;" + namedColourArray[j][0] + " " + alpha * 100 + "%";
inputLocation.style.backgroundColor = namedColourArray[j][1] + alpha + ")";
}

inputLocation.style.color = "black";

[ "black","blue","darkblue","darkslateblue","darkgreen","darkmagenta","darkred","darkslategray","darkslategrey","indigo","maroon","mediumblue","midnightblue","navy","purple","rebeccapurple" ].forEach((darkColourName) => { if (namedColourArray[j][0]==darkColourName) {
inputLocation.style.color = "white";
} });

}

readCoins();

}
}
