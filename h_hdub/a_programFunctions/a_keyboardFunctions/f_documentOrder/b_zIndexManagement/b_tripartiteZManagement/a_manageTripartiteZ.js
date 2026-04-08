/* Manage Tripartite Z-Order (OPTIMIZED) */

function manageTripartiteZ() {
    const children = utilityLayer0.children;
    if (children.length <= 1) return 0;

    // 1. CACHE DATA (Read once)
    const az = Array.from(children).map((el, index) => ({
        el: el,
        z: parseInt(el.style.zIndex) || 0,
        l: parseInt(el.style.left) || 0,
        t: parseInt(el.style.top) || 0,
        doc: parseInt(el.dataset.docOrder) || index,
        trip: el.dataset.coinTrip
    }));

    // 2. NATIVE SORT (Z -> Left -> Top -> Original)
    az.sort((a, b) => {
        const p1 = b.z - a.z;      // Z High to Low
        const p2 = a.l - b.l;      // Left to Right
        const p3 = a.t - b.t;      // Top to Bottom
        const p4 = a.doc - b.doc;  // Original Document Order
        return p1 || p2 || p3 || p4;
    });

    // 3. HANDLE REVERSAL
    if (lastKey === "z" && kC == 90 && cC == 122) {
        az.reverse();
    }

    // 4. BATCHED TRIPARTITE Z-INDEX UPDATE
    // We use counters for each trip so we only loop ONCE
    let inc0 = 0, inc1 = 0, inc2 = 0;
    const base0 = pageEchelon + (tricolourEchelon * 2);
    const base1 = pageEchelon + (tricolourEchelon * 1);
    const base2 = pageEchelon + (tricolourEchelon * 3);

    for (let j = 0; j < az.length; j++) {
        const item = az[j];
        const el = item.el;
        
        if (item.trip == Ts0) {
            el.style.zIndex = base0 + (internalStep * inc0++);
        } else if (item.trip == Ts1) {
            el.style.zIndex = base1 + (internalStep * inc1++);
        } else if (item.trip == Ts2) {
            el.style.zIndex = base2 + (internalStep * inc2++);
        }
    }

    return 1;
}
