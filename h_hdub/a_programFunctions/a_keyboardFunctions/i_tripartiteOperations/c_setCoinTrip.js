function setCoinTrip(e, cycle) {
    if (e.target == Cur || coinFocus == null) return;

    // 1. Determine target trip
    let trip = coinFocus1 != null ? coinFocus1.dataset.coinTrip : Ts2;
    if (cycle) {
        const currentTrip = coinFocus.dataset.coinTrip;
        if (currentTrip == Ts0) trip = Ts1;
        else if (currentTrip == Ts1) trip = Ts2;
        else if (currentTrip == Ts2) trip = Ts0;
    }

    // 2. Optimized Removal: Use .filter() instead of manual loops
    // This is faster and much cleaner
    coinTrip.sel0 = coinTrip.sel0.filter(item => item !== coinFocus);
    coinTrip.sel1 = coinTrip.sel1.filter(item => item !== coinFocus);
    coinTrip.sel2 = coinTrip.sel2.filter(item => item !== coinFocus);

    // 3. Batch Update Style Data
    // We map the Trip ID to the variables (Ts0 -> Tm0, Fs0, etc.)
    const config = {
        [Ts0]: { sel: coinTrip.sel0, tm: Tm0, es: Es0, fs: Fs0, bs: Bs0, os: Os0 },
        [Ts1]: { sel: coinTrip.sel1, tm: Tm1, es: Es1, fs: Fs1, bs: Bs1, os: Os1 },
        [Ts2]: { sel: coinTrip.sel2, tm: Tm2, es: Es2, fs: Fs2, bs: Bs2, os: Os2 }
    };

    const c = config[trip];
    if (c) {
        // Add to array
        c.sel.push(coinFocus);

        // Update Dataset
        coinFocus.dataset.coinTrip = c.tm;

        // Update Styles in one pass
        const s = coinFocus.firstElementChild.style;
        s.fontFamily = c.es;
        s.color = c.fs;
        s.textAlign = Gs2;
        s.backgroundColor = c.bs;
        s.opacity = c.os;
    }
}
