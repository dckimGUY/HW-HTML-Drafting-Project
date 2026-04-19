/* Re-Flow Order: Top, Left, Z, Original Document Order (OPTIMIZED) */

function reflowGlobal(reverse, order) {
    const children = utilityLayer0.children;
    if (children.length <= 1) return 0;

    // 1. CACHE ALL DATA (Stop the parseInt storm)
    const az = Array.from(children).map((el, index) => ({
        el: el,
        t: parseInt(el.style.top) || 0,
        l: parseInt(el.style.left) || 0,
        z: parseInt(el.style.zIndex) || 0,
        doc: parseInt(el.dataset.docOrder) || index
    }));

    // 2. NATIVE SORT ENGINE (Fucking Fast)
    const sortLogic = (a, b) => {
        let p1, p2, p3;
        switch (order) {
            case 0: p1 = a.t - b.t; p2 = a.l - b.l; p3 = b.z - a.z; break; 
            case 1: p1 = a.l - b.l; p2 = a.t - b.t; p3 = b.z - a.z; break; 
            case 2: p1 = a.l - b.l; p2 = b.z - a.z; p3 = a.t - b.t; break;
            case 3: p1 = b.z - a.z; p2 = a.t - b.t; p3 = a.l - b.l; break;
            case 4: p1 = b.z - a.z; p2 = a.l - b.l; p3 = a.t - b.t; break;
            case 5: p1 = a.t - b.t; p2 = b.z - a.z; p3 = a.l - b.l; break;
            default: p1 = a.t - b.t; p2 = a.l - b.l; p3 = b.z - a.z;
        }
        return p1 || p2 || p3 || (a.doc - b.doc);
    };

    az.sort(sortLogic);
    if (reverse) az.reverse();

    // 3. BATCHED DOM UPDATE (Document Fragment)
    // Build the new order off-screen, then inject once
    const fragment = document.createDocumentFragment();
    
    // Reset selection arrays for the "Big Refresh"
    coinTrip.sel0 = []; 
    coinTrip.sel1 = []; 
    coinTrip.sel2 = [];

    az.forEach((item, index) => {
        const el = item.el;
        el.dataset.flow = index;
        
        // Re-populate tripartite sets while we are looping anyway
        const trip = el.dataset.coinTrip;
        if (trip == Ts0) coinTrip.sel0.push(el);
        else if (trip == Ts1) coinTrip.sel1.push(el);
        else if (trip == Ts2) coinTrip.sel2.push(el);

        fragment.appendChild(el);
    });

    // One single layout change instead of thousands
    utilityLayer0.innerHTML = "";
    utilityLayer0.appendChild(fragment);

    Z();
    return 1;
}
