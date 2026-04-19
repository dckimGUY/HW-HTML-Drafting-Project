function ceilingGlobalZ() {
    if (!coinFocus) return;

    // 1. Run the extrema check once and cache the result
    const extrema = findZextrema();
    const highest = extrema.highestGlobalZ;
    const currentZ = parseInt(coinFocus.style.zIndex) || 0;

    // 2. Only update if we aren't already at the top
    if (currentZ !== highest) {
        coinFocus.style.zIndex = highest + internalStep;
    }

    // 3. Run our new optimized manageGlobalZ
    manageGlobalZ();
}
