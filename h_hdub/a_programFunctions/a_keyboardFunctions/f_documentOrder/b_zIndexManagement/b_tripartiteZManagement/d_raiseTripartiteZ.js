function raiseTripartiteZ() {
    if (!coinFocus) {
        manageTripartiteZ();
        return;
    }

    const trip = coinFocus.dataset.coinTrip;
    const currentZ = parseInt(coinFocus.style.zIndex) || 0;
    
    // 1. Run the heavy extrema search only ONCE
    const extrema = findZextrema();
    
    // 2. Look up the specific ceiling for this trip
    const tripHeads = {
        [Ts0]: extrema.highestSel0Z,
        [Ts1]: extrema.highestSel1Z,
        [Ts2]: extrema.highestSel2Z
    };

    const targetHigh = tripHeads[trip];

    // 3. Only raise if there's room to grow within the trip
    if (targetHigh !== undefined && currentZ < targetHigh) {
        // Use cached currentZ for math to avoid a second DOM read
        coinFocus.style.zIndex = currentZ + internalStep + 1;
    }

    // 4. Trigger the optimized sort
    manageTripartiteZ();
}
