function findZextrema() {
    const children = utilityLayer0.children;
    const len = children.length;

    // 1. Initial State
    const result = {
        lowestGlobalZ:  pageEchelon + 100000000,
        lowestSel0Z:    pageEchelon + 100000000,
        lowestSel1Z:    pageEchelon + 100000000,
        lowestSel2Z:    pageEchelon + 100000000,
        highestGlobalZ: 0,
        highestSel0Z:   0,
        highestSel1Z:   0,
        highestSel2Z:   0
    };

    if (len === 0) {
        // Fallback for empty layer
        for (let key in result) result[key] = pageEchelon;
        return result;
    }

    // 2. SINGLE PASS TARGETED LOOP
    for (let j = 0; j < len; j++) {
        const el = children[j];
        const nextZ = parseInt(el.style.zIndex) || 0;
        const trip = el.dataset.coinTrip;

        // Global check (Every part hits this)
        if (nextZ > result.highestGlobalZ) result.highestGlobalZ = nextZ;
        if (nextZ < result.lowestGlobalZ)  result.lowestGlobalZ  = nextZ;

        // Targeted Trip check (Only check the trip the part actually belongs to)
        if (trip == Ts0) {
            if (nextZ > result.highestSel0Z) result.highestSel0Z = nextZ;
            if (nextZ < result.lowestSel0Z)  result.lowestSel0Z  = nextZ;
        } else if (trip == Ts1) {
            if (nextZ > result.highestSel1Z) result.highestSel1Z = nextZ;
            if (nextZ < result.lowestSel1Z)  result.lowestSel1Z  = nextZ;
        } else if (trip == Ts2) {
            if (nextZ > result.highestSel2Z) result.highestSel2Z = nextZ;
            if (nextZ < result.lowestSel2Z)  result.lowestSel2Z  = nextZ;
        }
    }

    return result;
}
