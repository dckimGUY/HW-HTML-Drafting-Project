function permanentRemoval() {

if (curFocus==0) {
	function removeFromCoinTrip(elementToBeRemoved) {
	let eT = elementToBeRemoved;
	eT.remove();
	swap0 = new Array(),      swap1 = new Array(),      swap2 = new Array();
	for (let j = 0; j < coinTrip.sel0.length; j++) { if (eT != coinTrip.sel0[j]) { swap0[swap0.length] = coinTrip.sel0[j]; } }
	for (let j = 0; j < coinTrip.sel1.length; j++) { if (eT != coinTrip.sel1[j]) { swap1[swap1.length] = coinTrip.sel1[j]; } }
	for (let j = 0; j < coinTrip.sel2.length; j++) { if (eT != coinTrip.sel2[j]) { swap2[swap2.length] = coinTrip.sel2[j]; } }
	coinTrip.sel0 = swap0; coinTrip.sel1 = swap1; coinTrip.sel2 = swap2;
	}



if (coinFocus != null) {



const textColour = window["coinColour" + coinFocus.dataset.coinTrip];
let fontWidth;
if (parseInt(coinFocus.style.width) < parseInt(coinFocus.style.height)) {
fontWidth = parseInt(coinFocus.style.width );} else {
fontWidth = parseInt(coinFocus.style.height);}
const coinCentre = [
parseInt(coinFocus.style.left) + parseInt(coinFocus.style.width ) / 2,
parseInt(coinFocus.style.top ) + parseInt(coinFocus.style.height) / 2
];
buzzWord(2,"delete",fontWidth / 2,textColour,80,80,25,"center",coinCentre[0],coinCentre[1]);






       if (focusPrevious(true)) {
removeFromCoinTrip(coinFocus.nextElementSibling);
         if (coinFocus.previousElementSibling) {
coinFocus1 = coinFocus.previousElementSibling;
} else {
coinFocus1 = null;
}

} else if (focusNext(true)) {
removeFromCoinTrip(coinFocus.previousElementSibling);
         if (coinFocus.nextElementSibling) {
coinFocus1 = coinFocus.nextElementSibling;
} else {
coinFocus1 = null;
}

} else {

removeFromCoinTrip(coinFocus);
coinFocus1 = null;
coinFocus = null;
curFocus=1;
modeRouter('',1);

} 
} 
}
}
