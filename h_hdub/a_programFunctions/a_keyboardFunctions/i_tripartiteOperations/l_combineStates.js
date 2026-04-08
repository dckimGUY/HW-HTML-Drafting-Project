function combineStates() {
    if (!coinFocus || !coinFocus.dataset.state) return;
    const selection = coinTrip["sel" + coinFocus.dataset.coinTrip];
    if (!selection || selection.length === 0) return;

    let combinedStates = [];

    for (let j = 0; j < selection.length; j++) {
        const el = selection[j];
        const rawState = el.dataset.state;

        if (rawState) {
            try {
                const parsed = JSON.parse(rawState);
                // The "Luggage Tag": Save the ID alongside the data
                combinedStates.push({
                    originalId: el.id, 
                    data: parsed 
                });
            } catch (e) { console.error("Parse error on:", el.id); }
            el.remove();
        }
    }

    // Commits the tagged states to the accumulator
    popAccumulator(JSON.stringify(combinedStates));
    
    readCoins(); 
    recoverColouration(); 
    redraw();
}