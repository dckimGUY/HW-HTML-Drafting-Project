function ceilingTripartiteZ() {
    if (!coinFocus) return;

    const trip = coinFocus.dataset.coinTrip;
    const currentZ = parseInt(coinFocus.style.zIndex) || 0;
    
    // 1. Run extrema search ONCE and store the result
    const extrema = findZextrema();
    
    // 2. Map trips to their specific "highest" values
    const tripHeads = {
        [Ts0]: extrema.highestSel0Z,
        [Ts1]: extrema.highestSel1Z,
        [Ts2]: extrema.highestSel2Z
    };

    const targetHigh = tripHeads[trip];

    // 3. Only update if not already at the top for its trip
    if (targetHigh !== undefined && currentZ !== targetHigh) {
        coinFocus.style.zIndex = targetHigh + internalStep;
    }

    // 4. Run the optimized sort
    manageTripartiteZ();
}
