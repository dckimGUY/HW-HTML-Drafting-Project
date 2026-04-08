function floorTripartiteZ() {
    if (!coinFocus) {
        manageTripartiteZ();
        return;
    }

    const trip = coinFocus.dataset.coinTrip;
    const currentZ = parseInt(coinFocus.style.zIndex) || 0;
    
    // 1. Run the heavy extrema search only ONCE
    const extrema = findZextrema();
    
    // 2. Look up the specific floor for this trip
    const tripFloors = {
        [Ts0]: extrema.lowestSel0Z,
        [Ts1]: extrema.lowestSel1Z,
        [Ts2]: extrema.lowestSel2Z
    };

    const targetLow = tripFloors[trip];

    // 3. Only floor it if it's not already at the bottom of its trip
    if (targetLow !== undefined && currentZ !== targetLow) {
        coinFocus.style.zIndex = targetLow - internalStep;
    }

    // 4. Trigger the optimized tripartite sort
    manageTripartiteZ();
}
