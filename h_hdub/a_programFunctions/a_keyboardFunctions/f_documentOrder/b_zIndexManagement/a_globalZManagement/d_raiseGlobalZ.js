function raiseGlobalZ() {
    if (!coinFocus) {
        manageGlobalZ();
        return;
    }

    // 1. Cache the current Z and the extrema result once
    const currentZ = parseInt(coinFocus.style.zIndex) || 0;
    const highest = findZextrema().highestGlobalZ;

    // 2. Only raise if we aren't already at the absolute top
    if (currentZ < highest) {
        // Use the cached currentZ for the math instead of re-reading from DOM
        coinFocus.style.zIndex = currentZ + internalStep + 1;
    }

    // 3. Trigger the optimized global sort
    manageGlobalZ();
}
