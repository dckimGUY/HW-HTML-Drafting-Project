function _mT(k, l, d, p) {
    if (!k[3] || l == Cur) return 0;
    const m = { [Ts0]: 'sel0', [Ts1]: 'sel1', [Ts2]: 'sel2' }[l.dataset.coinTrip];
    if (m) {
        // Prime the history for the entire group before moving
        coinTrip[m].forEach(o => omni(o, { [p]: o.style[p] }));
        
        const moveStr = d >= 0 ? `+=${d}px` : `-=${Math.abs(d)}px`;
        omni(coinTrip[m], { [p]: moveStr });
        coinTrip[m].forEach(o => o.dataset[p] = o.style[p]);
    }
    return 1;
}

function _cS(l, v, p) {
    if (l != Cur) return;
    // Prime the baseline before setting the new coordinate
    omni(l, { [p]: l.style[p] });
    omni(l, { [p]: v });
    l.dataset[p] = l.style[p];
    Cur.scrollIntoView({ behavior: 'auto', block: 'center', inline: 'center' });
}

function explicitEntryForTopAndLeft() {
    if (!coinFocus) return;
    const s = coinFocus.style, p = ["top", "left", "width", "height"];
    const def = p.map(k => parseInt(s[k] || 0)).join(",");
    const res = prompt("top,left,width,height", def);
    if (!res) return;
    const v = res.split(",").map(x => parseInt(eval(x.trim())));
    const t = curFocus == 1 ? Cur : coinFocus;
    
    // Prime history for all four properties
    let baseline = {};
    p.forEach(k => baseline[k] = t.style[k]);
    omni(t, baseline);

    let updates = {};
    p.forEach((k, i) => {
        if (curFocus == 1 && i > 1) return;
        updates[k] = v[i] + "px";
    });
    
    omni(t, updates);
    p.forEach(k => t.dataset[k] = t.style[k]);
}

function moveAllLeft() {
    const targets = Array.from(utilityLayer0.children);
    targets.forEach(c => omni(c, { "left": c.style.left }));
    omni(targets, { "left": `-=${T}px` }).forEach(c => c.dataset.left = c.style.left);
}

function moveAllRight() {
    const targets = Array.from(utilityLayer0.children);
    targets.forEach(c => omni(c, { "left": c.style.left }));
    omni(targets, { "left": `+=${T}px` }).forEach(c => c.dataset.left = c.style.left);
}

function moveAllUp() {
    const targets = Array.from(utilityLayer0.children);
    targets.forEach(c => omni(c, { "top": c.style.top }));
    omni(targets, { "top": `-=${T}px` }).forEach(c => c.dataset.top = c.style.top);
}

function moveAllDown() {
    const targets = Array.from(utilityLayer0.children);
    targets.forEach(c => omni(c, { "top": c.style.top }));
    omni(targets, { "top": `+=${T}px` }).forEach(c => c.dataset.top = c.style.top);
}

function moveLeft(k) {
    const l = (curFocus == 1 || !coinFocus) ? Cur : coinFocus;
    const c = parseInt(l.style.left || 0);
    const n = (c % T != 0 ? Math.floor(c / T) * T : c - T);
    if (n < 0) return;
    const currentDatasetPos = parseInt(l.dataset.left || 0);
    if (!_mT(k, l, n - currentDatasetPos, 'left')) {
        omni(l, { "left": l.style.left }); // Prime baseline
        l.style.left = l.dataset.left = n + "px";
    }
    _cS(l, n + "px", 'left');
}

function moveUp(k) {
    const l = (curFocus == 1 || !coinFocus) ? Cur : coinFocus;
    const c = parseInt(l.style.top || 0);
    const n = (c % T != 0 ? Math.floor(c / T) * T : c - T);
    if (n < 0) return;
    const currentDatasetPos = parseInt(l.dataset.top || 0);
    if (!_mT(k, l, n - currentDatasetPos, 'top')) {
        omni(l, { "top": l.style.top }); // Prime baseline
        l.style.top = l.dataset.top = n + "px";
    }
    _cS(l, n + "px", 'top');
}

function moveRight(k) {
    const l = (curFocus == 1 || !coinFocus) ? Cur : coinFocus;
    const x = parseInt(l.style.left || 0);
    const z = (curFocus == 0 && coinFocus) ? parseFloat(l.dataset.scale || 1) : 1;
    const w = parseInt(l.style.width || 0);
    let n = (l == Cur) ? 
        (x % T != 0 ? Math.ceil(x / T) * T : x + T) : 
        ((Math.ceil(x + w * z) % T != 0) ? Math.round(x + (Math.ceil((x + w * z) / T) * T - (x + w * z))) : x + T);
    
    const currentDatasetPos = parseInt(l.dataset.left || 0);
    if (!_mT(k, l, n - currentDatasetPos, 'left')) {
        omni(l, { "left": l.style.left }); // Prime baseline
        l.style.left = l.dataset.left = n + "px";
    }
    _cS(l, n + "px", 'left');
}

function moveDown(k) {
    const l = (curFocus == 1 || !coinFocus) ? Cur : coinFocus;
    const y = parseInt(l.style.top || 0);
    const z = (curFocus == 0 && coinFocus) ? parseFloat(l.dataset.scale || 1) : 1;
    const h = parseInt(l.style.height || 0);
    let n = (l == Cur) ? 
        (y % T != 0 ? Math.ceil(y / T) * T : y + T) : 
        ((Math.ceil(y + h * z) % T != 0) ? Math.round(y + (Math.ceil((y + h * z) / T) * T - (y + h * z))) : y + T);
    
    const currentDatasetPos = parseInt(l.dataset.top || 0);
    if (!_mT(k, l, n - currentDatasetPos, 'top')) {
        omni(l, { "top": l.style.top }); // Prime baseline
        l.style.top = l.dataset.top = n + "px";
    }
    _cS(l, n + "px", 'top');
}

function moveLeftAndCentre(k) {
    if (curFocus == 1) return moveLeft(k);
    const c = coinFocus;
    const f = parseFloat(c.dataset.scale) || 1;
    const w = parseInt(c.style.width || 0) * f;
    const x = parseInt(c.style.left || 0);
    const m = x + w / 2;
    const n = (m % T != 0 ? Math.floor(m / T) * T - w / 2 : x - T);
    if (n > -w) {
        omni(c, { "left": c.style.left }); // Prime baseline
        omni(c, { "left": n + "px" });
        c.dataset.left = c.style.left;
        return 0;
    }
    return 1;
}

function moveUpAndCentre(k) {
    if (curFocus == 1) return moveUp(k);
    const c = coinFocus;
    const f = parseFloat(c.dataset.scale) || 1;
    const h = parseInt(c.style.height || 0) * f;
    const y = parseInt(c.style.top || 0);
    const m = y + h / 2;
    const n = (m % T != 0 ? Math.floor(m / T) * T - h / 2 : y - T);
    if (n > -h) {
        omni(c, { "top": c.style.top }); // Prime baseline
        omni(c, { "top": n + "px" });
        c.dataset.top = c.style.top;
        return 0;
    }
    return 1;
}

function moveRightAndCentre(k) {
    if (curFocus == 1) return moveRight(k);
    const c = coinFocus;
    const f = parseFloat(c.dataset.scale) || 1;
    const w = parseInt(c.style.width || 0) * f;
    const x = parseInt(c.style.left || 0);
    const m = x + w / 2;
    const n = (Math.ceil(m) % T != 0 ? Math.round(x + (Math.ceil(m / T) * T - m)) : x + T);
    omni(c, { "left": c.style.left }); // Prime baseline
    omni(c, { "left": n + "px" });
    c.dataset.left = c.style.left;
}

function moveDownAndCentre(k) {
    if (curFocus == 1) return moveDown(k);
    const c = coinFocus;
    const f = parseFloat(c.dataset.scale) || 1;
    const h = parseInt(c.style.height || 0) * f;
    const y = parseInt(c.style.top || 0);
    const m = y + h / 2;
    const n = (Math.ceil(m) % T != 0 ? Math.round(y + (Math.ceil(m / T) * T - m)) : y + T);
    omni(c, { "top": c.style.top }); // Prime baseline
    omni(c, { "top": n + "px" });
    c.dataset.top = c.style.top;
}
