function wrapParts() {
    const children = utilityLayer0.children;
    if (!coinFocus || children.length <= 1) return;

    const group = coinFocus.dataset.coinTrip;
    const originalX = window.scrollX;
    const originalY = window.scrollY;

    // 1. Calculate extents ONCE
    const furthest = findFurthestExtent();
    const least = findLeastExtent();
    const rankMap = { [Ts0]: 0, [Ts1]: 1, [Ts2]: 2 };
    const rank = rankMap[group] ?? 0;

    const minX = least[rank][1];
    const minY = least[rank][0];
    const width = furthest[rank][1] - least[3][1];
    const height = furthest[rank][0] - least[3][0];

    // 2. Prepare the Wrapper
    const newCoin = insertNewCoin([null, 78, 78, false, false, false]);
    newCoin.remove(); // Pull it out of DOM to work on it off-screen

    // 3. Batch move children into Fragment
    const fragment = document.createDocumentFragment();
    const partsArray = Array.from(children);
    
    partsArray.forEach(child => {
        const s = child.style;
        const ds = child.dataset;
        
        // Calculate new relative positions before appending
        const newL = (parseInt(s.left) || 0) - minX + "px";
        const newT = (parseInt(s.top) || 0) - minY + "px";
        
        s.left = ds.left = newL;
        s.top = ds.top = newT;
        
        fragment.appendChild(child);
    });

    // 4. Finalize Wrapper Styles
    const ns = newCoin.style;
    const nd = newCoin.dataset;
    ns.left = nd.left = minX + "px";
    ns.top = nd.top = minY + "px";
    ns.width = nd.width = width + "px";
    ns.height = nd.height = height + "px";
    
    newCoin.anchor.style.zIndex = 0;
    newCoin.firstElementChild.style.pointerEvents = "none";
    
    // 5. Inject everything back in one shot
    newCoin.div.appendChild(fragment);
    utilityLayer0.appendChild(newCoin);

    // 6. Global Refresh (Only once!)
    readCoins();
    recoverColouration();
    restorePointerEventsNone();
    window.scrollTo(originalX, originalY);
    Z();
}
