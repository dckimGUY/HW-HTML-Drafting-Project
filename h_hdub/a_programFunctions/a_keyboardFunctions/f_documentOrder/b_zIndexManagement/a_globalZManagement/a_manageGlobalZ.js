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
    // Complexity: n log n (Millions of times faster than before)
    az.sort((a, b) => {
        const p1 = b.z - a.z;      // Z High to Low
        const p2 = a.l - b.l;      // Left to Right
        const p3 = a.t - b.t;      // Top to Bottom
        const p4 = a.doc - b.doc;  // Original Document Order
        return p1 || p2 || p3 || p4;
    });

    // 3. HANDLE REVERSAL
    if (lastKey === "Z" && kC == 90 && cC == 90) {
        az.reverse();
    }

    // 4. BATCHED Z-INDEX UPDATE
    // Instead of looping through children to find IDs, we use the sorted array directly
    const baseZ = pageEchelon + (tricolourEchelon * 1);
    
    for (let j = 0; j < az.length; j++) {
        const el = az[j].el;
        const newZ = baseZ + (internalStep * j);
        
        el.style.zIndex = newZ;
        // Optional: sync to dataset if your other scripts need it
        // el.dataset.zIndex = newZ; 
    }

    return 1;
}
