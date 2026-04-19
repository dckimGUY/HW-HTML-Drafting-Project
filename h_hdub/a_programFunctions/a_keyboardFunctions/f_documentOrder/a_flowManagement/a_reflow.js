function reflow(input, reverse, order) {
    if (utilityLayer0.children.length <= 1 || input.length === 0) return 0;

    // 1. CACHE ALL DATA ONCE (Kills Layout Thrashing)
    // We map the elements to objects with numeric values so the sort is instant
    const az = Array.from(input).map((el, index) => ({
        el: el,
        t: parseInt(el.style.top) || 0,
        l: parseInt(el.style.left) || 0,
        z: parseInt(el.style.zIndex) || 0,
        d: parseInt(el.dataset.docOrder) || index,
        flow: index
    }));

    // 2. DEFINE SORT PRIORITY MAP
    // order 0: Top -> Left -> Z
    // order 1: Left -> Top -> Z, etc.
    const sortLogic = (a, b) => {
        let p1, p2, p3;
        switch (order) {
            case 0: p1 = a.t - b.t; p2 = a.l - b.l; p3 = b.z - a.z; break; // TopToBottom, LeftToRight, ZHighToLow
            case 1: p1 = a.l - b.l; p2 = a.t - b.t; p3 = b.z - a.z; break; 
            case 2: p1 = a.l - b.l; p2 = b.z - a.z; p3 = a.t - b.t; break;
            case 3: p1 = b.z - a.z; p2 = a.t - b.t; p3 = a.l - b.l; break;
            case 4: p1 = b.z - a.z; p2 = a.l - b.l; p3 = a.t - b.t; break;
            case 5: p1 = a.t - b.t; p2 = b.z - a.z; p3 = a.l - b.l; break;
            default: p1 = a.t - b.t; p2 = a.l - b.l; p3 = b.z - a.z;
        }
        // Tie-breaker logic (p1, then p2, then p3, then docOrder)
        return p1 || p2 || p3 || (a.d - b.d);
    };

    // 3. EXECUTE SORT
    az.sort(sortLogic);
    if (reverse) az.reverse();

    // 4. BATCHED DOM UPDATE
    const tripId = input[0].dataset.coinTrip;
    
    // Efficiently remove only the targeted trip elements
    const children = Array.from(utilityLayer0.children);
    for (let child of children) {
        if (child.dataset.coinTrip === tripId) {
            child.remove();
        }
    }

    // Append sorted elements
    const fragment = document.createDocumentFragment();
    az.forEach((item, index) => {
        item.el.dataset.flow = index;
        fragment.appendChild(item.el);
    });
    utilityLayer0.appendChild(fragment);

    // 5. REFRESH
    Z();
    return 1;
}
