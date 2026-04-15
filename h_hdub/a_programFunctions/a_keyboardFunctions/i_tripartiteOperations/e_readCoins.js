function readCoins() {
    const children = utilityLayer0.children;
    const len = children.length;
    if (len === 0) return 0;

    // 1. Reset selections
    coinTrip.sel0 = [];
    coinTrip.sel1 = [];
    coinTrip.sel2 = [];

    // 2. Build a Quick-Lookup Map for "hold" values
    // This replaces that massive 26-line if/else chain
    const holdMap = new Map();
    Object.values(hold).forEach(item => {
        if (item.value) holdMap.set(item.value, item.name);
    });

    // 3. SINGLE PASS LOOP
    for (let j = 0; j < len; j++) {
        const el = children[j];
        const ds = el.dataset;

        // A. Selections (Batching into arrays)
        const trip = ds.coinTrip;
        if (trip == Ts0) coinTrip.sel0.push(el);
        else if (trip == Ts1) coinTrip.sel1.push(el);
        else if (trip == Ts2) coinTrip.sel2.push(el);

        // B. Structure Mapping (Linking child elements to properties)
        const first = el.firstElementChild;
        const last = el.lastElementChild;
        
        if (first) el.anchor = first;
        if (last)  el.main   = last;

        if (el.main) {
            const btn = el.main.firstElementChild;
            if (btn) {
                el.button = btn;
                el.div = btn.nextElementSibling;
            }
            el.img = el.main.lastElementChild;
        }

        // C. Text/Label Management
        if (first) {
            let label = "";
            const holdName = holdMap.get(el);

            if (holdName) {
                label = `"${holdName}"`;
            }

            if (showPartName) {
                // If there's a hold name, append ID. Otherwise, just ID.
                label += (label ? " " : "") + el.id;
            }

            // Only update DOM if the text actually changed (Saves CPU)
            if (first.innerText !== label) {
                first.innerText = label;
            }
        }
    }

    return 1;
}
