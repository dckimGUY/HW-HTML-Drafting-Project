/* REGIMENT PROTOCOL: Z-Index Management Suite */
/* Verification: Parity with Original Tie-Breakers (Z -> Top -> Left -> docOrder) */
/* Constants: pageEchelon=100M | tricolourEchelon=250k | internalStep=100 */

function manageGlobalZ() {
    if (utilityLayer0.children.length > 1) {
        const children = Array.from(utilityLayer0.children);
        children.forEach(el => { if (typeof omni === 'function') omni(el, { "zIndex": el.style.zIndex }); });

        const snapshot = children.map(el => ({
            ref: el,
            top: parseFloat(el.style.top) || 0,
            left: parseFloat(el.style.left) || 0,
            zIndex: parseFloat(el.style.zIndex) || 0,
            docOrder: parseFloat(el.dataset.docOrder) || 0
        }));

        // SORTING: Z -> TOP -> LEFT -> DOCORDER
        snapshot.sort((a, b) => 
            (a.zIndex - b.zIndex) || (a.top - b.top) || (a.left - b.left) || (a.docOrder - b.docOrder)
        );

        if (lastKey === "Z" && kC == 90 && cC == 90) { snapshot.reverse(); }

        let inc = 0;
        const baseZ = pageEchelon + (tricolourEchelon * 1);
        snapshot.forEach(item => {
            item.ref.style.zIndex = baseZ + (internalStep * inc);
            inc++;
        });

        setTimeout(() => {
            snapshot.forEach(item => { if (typeof omni === 'function') omni(item.ref, { "zIndex": item.ref.style.zIndex }); });
        }, 0);
        return (1);
    }
    return (0);
}

function manageTripartiteZ() {
    if (utilityLayer0.children.length > 1) {
        const children = Array.from(utilityLayer0.children);
        children.forEach(el => { if (typeof omni === 'function') omni(el, { "zIndex": el.style.zIndex }); });

        const snapshot = children.map(el => ({
            ref: el,
            top: parseFloat(el.style.top) || 0,
            left: parseFloat(el.style.left) || 0,
            zIndex: parseFloat(el.style.zIndex) || 0,
            docOrder: parseFloat(el.dataset.docOrder) || 0,
            trip: el.dataset.coinTrip
        }));

        // SORTING: Z -> TOP -> LEFT -> DOCORDER
        snapshot.sort((a, b) => 
            (a.zIndex - b.zIndex) || (a.top - b.top) || (a.left - b.left) || (a.docOrder - b.docOrder)
        );

        if (lastKey === "z" && kC == 90 && cC == 122) { snapshot.reverse(); }

        const config = { [Ts0]: { e: 2, i: 0 }, [Ts1]: { e: 1, i: 0 }, [Ts2]: { e: 3, i: 0 } };
        snapshot.forEach(item => {
            const c = config[item.trip];
            if (c) {
                item.ref.style.zIndex = pageEchelon + (tricolourEchelon * c.e) + (internalStep * c.i);
                c.i++;
            }
        });

        setTimeout(() => {
            snapshot.forEach(item => { if (typeof omni === 'function') omni(item.ref, { "zIndex": item.ref.style.zIndex }); });
        }, 0);
        return (1);
    }
    return (0);
}

function findZextrema() {
    const children = utilityLayer0.children;
    const len = children.length;
    const ex = { lowestGlobalZ: Infinity, highestGlobalZ: -Infinity, lowestSel0Z: Infinity, highestSel0Z: -Infinity, lowestSel1Z: Infinity, highestSel1Z: -Infinity, lowestSel2Z: Infinity, highestSel2Z: -Infinity };
    if (len === 0) { const base = { ...ex }; Object.keys(base).forEach(k => base[k] = pageEchelon); return base; }
    for (let i = 0; i < len; i++) {
        const el = children[i];
        const z = parseFloat(el.style.zIndex) || 0, trip = el.dataset.coinTrip;
        if (z > ex.highestGlobalZ) ex.highestGlobalZ = z;
        if (z < ex.lowestGlobalZ)  ex.lowestGlobalZ  = z;
        if (trip === Ts0) { if (z > ex.highestSel0Z) ex.highestSel0Z = z; if (z < ex.lowestSel0Z)  ex.lowestSel0Z  = z; }
        else if (trip === Ts1) { if (z > ex.highestSel1Z) ex.highestSel1Z = z; if (z < ex.lowestSel1Z)  ex.lowestSel1Z  = z; }
        else if (trip === Ts2) { if (z > ex.highestSel2Z) ex.highestSel2Z = z; if (z < ex.lowestSel2Z)  ex.lowestSel2Z  = z; }
    }
    Object.keys(ex).forEach(k => { if (ex[k] === Infinity || ex[k] === -Infinity) ex[k] = pageEchelon; });
    return ex;
}

function ceilingTripartiteZ() { if (coinFocus != null) { const ex = findZextrema(); const curZ = parseFloat(coinFocus.style.zIndex) || 0, trip = coinFocus.dataset.coinTrip; let limit = (trip == Ts0) ? ex.highestSel0Z : (trip == Ts1) ? ex.highestSel1Z : ex.highestSel2Z; if (curZ != limit) { coinFocus.style.zIndex = limit + internalStep; } manageTripartiteZ(); } }
function lowerTripartiteZ() { if (coinFocus != null) { const ex = findZextrema(); const curZ = parseFloat(coinFocus.style.zIndex) || 0, trip = coinFocus.dataset.coinTrip; let limit = (trip == Ts0) ? ex.lowestSel0Z : (trip == Ts1) ? ex.lowestSel1Z : ex.lowestSel2Z; if (curZ > limit) { coinFocus.style.zIndex = curZ - (internalStep + 1); } manageTripartiteZ(); } }
function raiseTripartiteZ() { if (coinFocus != null) { const ex = findZextrema(); const curZ = parseFloat(coinFocus.style.zIndex) || 0, trip = coinFocus.dataset.coinTrip; let limit = (trip == Ts0) ? ex.highestSel0Z : (trip == Ts1) ? ex.highestSel1Z : ex.highestSel2Z; if (curZ < limit) { coinFocus.style.zIndex = curZ + (internalStep + 1); } manageTripartiteZ(); } }
function floorTripartiteZ() { if (coinFocus != null) { const ex = findZextrema(); const curZ = parseFloat(coinFocus.style.zIndex) || 0, trip = coinFocus.dataset.coinTrip; let limit = (trip == Ts0) ? ex.lowestSel0Z : (trip == Ts1) ? ex.lowestSel1Z : ex.lowestSel2Z; if (curZ != limit) { coinFocus.style.zIndex = limit - internalStep; } manageTripartiteZ(); } }

function clearZ() { if (utilityLayer0.children.length > 0) { for (let j = 0; j < utilityLayer0.children.length; j++) { utilityLayer0.children[j].style.zIndex = ""; } } }



function ceilingGlobalZ() {
if (coinFocus!=null) {
if (parseInt(coinFocus.style.zIndex) != findZextrema().highestGlobalZ) {
coinFocus.style.zIndex = findZextrema().highestGlobalZ + internalStep;
}
manageGlobalZ();
}
}



function lowerGlobalZ() {
if (coinFocus!=null) {
if (parseInt(coinFocus.style.zIndex) > findZextrema().lowestGlobalZ) {
coinFocus.style.zIndex = parseInt(coinFocus.style.zIndex) - internalStep - 1;
}
}
manageGlobalZ();
}









function clearZ() {
if (utilityLayer0.children.length > 0) {
for (let j = 0; j < utilityLayer0.children.length; j++) {
utilityLayer0.children[j].style.zIndex = "";
}}}

















function floorGlobalZ() {
if (coinFocus!=null) {
if (parseInt(coinFocus.style.zIndex) != findZextrema().lowestGlobalZ) {
coinFocus.style.zIndex = findZextrema().lowestGlobalZ - internalStep;
}
}
manageGlobalZ();
}






function raiseGlobalZ() {
if (coinFocus!=null) {
if (parseInt(coinFocus.style.zIndex) < findZextrema().highestGlobalZ) {
coinFocus.style.zIndex = parseInt(coinFocus.style.zIndex) + internalStep + 1;
}
manageGlobalZ();
}
}

















