function lowerTripartiteZ() {
    if (!coinFocus) {
        manageTripartiteZ();
        return;
    }

    const trip = coinFocus.dataset.coinTrip;
    const currentZ = parseInt(coinFocus.style.zIndex) || 0;
    
    // 1. Scan for extrema once
    const extrema = findZextrema();
    
    // 2. Map trip types to their specific "floor" values
    const tripFloors = {
        [Ts0]: extrema.lowestSel0Z,
        [Ts1]: extrema.lowestSel1Z,
        [Ts2]: extrema.lowestSel2Z
    };

    const targetLow = tripFloors[trip];

    // 3. Only lower if we aren't already at the bottom of the trip group
    if (targetLow !== undefined && currentZ > targetLow) {
        coinFocus.style.zIndex = currentZ - internalStep - 1;
    }

    // 4. Run the optimized tripartite sort
    manageTripartiteZ();
}
