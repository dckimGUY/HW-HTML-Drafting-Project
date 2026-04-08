function lowerGlobalZ() {
    if (!coinFocus) {
        manageGlobalZ(); // Still run the sort even if nothing is focused
        return;
    }

    // 1. Cache the lookup and the current Z
    const lowest = findZextrema().lowestGlobalZ;
    const currentZ = parseInt(coinFocus.style.zIndex) || 0;

    // 2. Only drop if there is room to go lower
    if (currentZ > lowest) {
        coinFocus.style.zIndex = currentZ - internalStep - 1;
    }

    // 3. Kick off the optimized sort
    manageGlobalZ();
}
