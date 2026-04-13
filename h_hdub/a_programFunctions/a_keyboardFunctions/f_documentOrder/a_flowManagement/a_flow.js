/* --- UNIFIED REFLOW BLOCK: DETERMINISTIC PRODUCTION STANDARDS --- */

function reflow(input, reverse, order) {
    if (utilityLayer0.children.length > 0 && input.length > 0) {
        const aa = input;
        let az = Array.from(aa);
        let zz = [];

        // Snapshot coordinates into numeric cache to ensure mathematical certainty
        const cache = az.map(el => ({
            t: parseInt(el.style.top) || 0,
            l: parseInt(el.style.left) || 0,
            z: parseInt(el.style.zIndex) || 0,
            d: parseInt(el.dataset.docOrder) || 0
        }));

        const targetCoinTrip = az[0].dataset.coinTrip;

        for (let f = 0; f < az.length; f++) {
            let number = -1;
            let next = null;
            for (let g = 0; g < az.length; g++) {
                if (az[g] == null) continue;
                if (next == null) { 
                    next = az[g]; 
                    number = g; 
                } else {
                    const n = cache[number]; 
                    const c = cache[g];
                    
                    // Priority Hierarchies: Low-to-High (Spatial) and High-to-Low (Z-Index)
                    let t2b = n.t > c.t, l2r = n.l > c.l, zhl = n.z < c.z;
                    let eqT = n.t == c.t, eqL = n.l == c.l, eqZ = n.z == c.z;

                    let c1, c2, c3, e1, e2, e3;
                    if (order == 0)      { c1=t2b; e1=eqT; c2=l2r; e2=eqL; c3=zhl; e3=eqZ; } // T > L > Z
                    else if (order == 1) { c1=l2r; e1=eqL; c2=t2b; e2=eqT; c3=zhl; e3=eqZ; } // L > T > Z
                    else if (order == 2) { c1=l2r; e1=eqL; c2=zhl; e2=eqZ; c3=t2b; e3=eqT; } // L > Z > T
                    else if (order == 3) { c1=zhl; e1=eqZ; c2=t2b; e2=eqT; c3=l2r; e3=eqL; } // Z > T > L
                    else if (order == 4) { c1=zhl; e1=eqZ; c2=l2r; e2=eqL; c3=t2b; e3=eqT; } // Z > L > T
                    else if (order == 5) { c1=t2b; e1=eqT; c2=zhl; e2=eqZ; c3=l2r; e3=eqL; } // T > Z > L

                    // The Atomic Comparison Chain
                    if (c1 || (e1 && (c2 || (e2 && (c3 || (e3 && n.d > c.d)))))) {
                        next = az[g];
                        number = g;
                    }
                }
            }
            zz.push(az[number]);
            az[number] = null;
        }

        if (reverse) { zz.reverse(); }

        // SURGICAL ATOMIC SYNC: Remove only target elements and re-append in exact order
        zz.forEach(el => { if (el.parentNode === utilityLayer0) el.remove(); });
        
        for (let j = 0; j < zz.length; j++) { 
            utilityLayer0.appendChild(zz[j]);
            zz[j].dataset.flow = String(j);
        }

        Z();
        return (1);
    }
    return (0);
}

function reflowGlobal(reverse, order) {
    if (utilityLayer0.children.length > 1) {
        const aa = Array.from(utilityLayer0.children);
        
        // Execute global sort using the primary hierarchical engine
        const result = reflow(aa, reverse, order);
        
        // Re-distribute to tripartite coin sets based on current DOM sequence
        coinTrip.sel0 = []; coinTrip.sel1 = []; coinTrip.sel2 = [];
        const finalArr = Array.from(utilityLayer0.children);
        
        finalArr.forEach(el => {
            const ct = el.dataset.coinTrip;
            if (ct == Ts0) { coinTrip.sel0.push(el); }
            else if (ct == Ts1) { coinTrip.sel1.push(el); }
            else if (ct == Ts2) { coinTrip.sel2.push(el); }
        });

        return result;
    }
    return (0);
}

function reflowPerTrip() {
    reflow(coinTrip.sel0, rev, 0);
    reflow(coinTrip.sel1, rev, 0);
    reflow(coinTrip.sel2, rev, 0);
}
