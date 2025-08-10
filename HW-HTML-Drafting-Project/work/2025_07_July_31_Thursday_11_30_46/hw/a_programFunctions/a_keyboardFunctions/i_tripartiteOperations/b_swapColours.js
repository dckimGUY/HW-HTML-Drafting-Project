var colourFlip=0;

function swapColours() {
       if (colourFlip==0) {
for (let j = 0; j < coinTrip.sel0.length; j++) { coinTrip.sel0[j].dataset.coinTrip = Ts1; }
for (let j = 0; j < coinTrip.sel1.length; j++) { coinTrip.sel1[j].dataset.coinTrip = Ts0; }
colourFlip=1;
} else if (colourFlip==1) {
for (let j = 0; j < coinTrip.sel2.length; j++) { coinTrip.sel2[j].dataset.coinTrip = Ts1; }
for (let j = 0; j < coinTrip.sel1.length; j++) { coinTrip.sel1[j].dataset.coinTrip = Ts2; }
colourFlip=2;
} else if (colourFlip==2) {
for (let j = 0; j < coinTrip.sel0.length; j++) { coinTrip.sel0[j].dataset.coinTrip = Ts2; }
for (let j = 0; j < coinTrip.sel2.length; j++) { coinTrip.sel2[j].dataset.coinTrip = Ts0; }
colourFlip=0;
}
readCoins();
recoverColouration();
coinFocus.style.outline = fB;
}
