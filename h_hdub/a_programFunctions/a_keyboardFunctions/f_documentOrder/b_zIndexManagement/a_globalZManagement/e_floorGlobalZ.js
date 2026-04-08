function floorGlobalZ() {
    if (!coinFocus) {
        manageGlobalZ();
        return;
    }

    // 1. Cache the extrema and the current Z once
    const lowest = findZextrema().lowestGlobalZ;
    const currentZ = parseInt(coinFocus.style.zIndex) || 0;

    // 2. Only floor it if it's not already at the bottom
    if (currentZ !== lowest) {
        coinFocus.style.zIndex = lowest - internalStep;
    }

    // 3. Trigger the optimized sort
    manageGlobalZ();
}
