/* Manage Z-Order Globally (OPTIMIZED) */

function manageGlobalZ() {
    const children = utilityLayer0.children;
    if (children.length <= 1) return 0;

    // 1. CACHE DATA (One read per element)
    const az = Array.from(children).map((el, index) => ({
        el: el,
        z: parseInt(el.style.zIndex) || 0,
        l: parseInt(el.style.left) || 0,
        t: parseInt(el.style.top) || 0,
        doc: parseInt(el.dataset.docOrder) || index
    }));

    // 2. NATIVE SORT (Z -> Left -> Top -> Original)
    // Fixed p1 to stop the constant reversal loop
    az.sort((a, b) => {
        const p1 = a.z - b.z;      // Low to High (Stops the ping-pong reversal)
        const p2 = a.l - b.l;      // Left to Right
        const p3 = a.t - b.t;      // Top to Bottom
        const p4 = a.doc - b.doc;  // Original Document Order
        return p1 || p2 || p3 || p4;
    });

    // 3. HANDLE REVERSAL
/*
    if (lastKey === "Z" && kC == 90 && cC == 90) {
        az.reverse();
    }
*/

    // 4. BATCHED Z-INDEX UPDATE
    const baseZ = pageEchelon + (tricolourEchelon * 1);
    
    for (let j = 0; j < az.length; j++) {
        const el = az[j].el;
        const newZ = baseZ + (internalStep * j);
        
        el.style.zIndex = newZ;
    }

    return 1;
}
