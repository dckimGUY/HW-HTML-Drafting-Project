function HJKLnoteCoin(message,duration,trip) {
if (coinFocus!=null&&HJKLnote==true) {

if (trip) {
let tripSet;
       if (coinFocus.dataset.coinTrip==Ts0) {
tripSet = coinTrip.sel0;
} else if (coinFocus.dataset.coinTrip==Ts1) {
tripSet = coinTrip.sel1;
} else if (coinFocus.dataset.coinTrip==Ts2) {
tripSet = coinTrip.sel2;
}

for (let j = 0; j < tripSet.length; j++) {
tripSet[j].lastElementChild.firstElementChild.style.display = "block";
tripSet[j].lastElementChild.firstElementChild.innerHTML = message;
}
} else {
coinFocus.lastElementChild.firstElementChild.style.display = "block";
coinFocus.lastElementChild.firstElementChild.innerHTML = message;
}

setTimeout(() => {
for (let j = 0; j < utilityLayer0.children.length; j++) {
utilityLayer0.children[j].lastElementChild.firstElementChild.style.display = "none";
utilityLayer0.children[j].lastElementChild.firstElementChild.innerHTML = "";
}
}, duration);
}
}
