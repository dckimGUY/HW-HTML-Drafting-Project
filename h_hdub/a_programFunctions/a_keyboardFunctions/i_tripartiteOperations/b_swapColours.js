var colourFlip = 0;

function swapColours() {
    // 1. Helper to swap a whole array of elements to a new trip
    const batchUpdate = (elements, newTrip) => {
        for (let j = 0; j < elements.length; j++) {
            elements[j].dataset.coinTrip = newTrip;
        }
    };

    // 2. Logic for the 3-way rotation
    if (colourFlip == 0) {
        batchUpdate(coinTrip.sel0, Ts1);
        batchUpdate(coinTrip.sel1, Ts0);
        colourFlip = 1;
    } else if (colourFlip == 1) {
        batchUpdate(coinTrip.sel2, Ts1);
        batchUpdate(coinTrip.sel1, Ts2);
        colourFlip = 2;
    } else if (colourFlip == 2) {
        batchUpdate(coinTrip.sel0, Ts2);
        batchUpdate(coinTrip.sel2, Ts0);
        colourFlip = 0;
    }

    // 3. Trigger the UI refresh
    readCoins();
    recoverColouration();
}
