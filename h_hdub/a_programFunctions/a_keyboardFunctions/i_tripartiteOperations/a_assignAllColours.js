function assignAllColours() {
    const children = utilityLayer0.children;
    const len = children.length;
    if (len === 0) return;

    // 1. Determine the target "Trip" and associated styles once
    const firstTrip = children[0].dataset.coinTrip;
    let target = {};

    if (firstTrip == Ts0) {
        target = { trip: Ts1, f: Fs1, c: Cs1, b: Bs1, o: Os1 };
    } else if (firstTrip == Ts1) {
        target = { trip: Ts2, f: Fs2, c: Cs2, b: Bs2, o: Os2 };
    } else {
        target = { trip: Ts0, f: Fs0, c: Cs0, b: Bs0, o: Os0 };
    }

    // 2. Single-pass loop with cached references
    for (let j = 0; j < len; j++) {
        const el = children[j];
        const first = el.firstElementChild;

        el.dataset.coinTrip = target.trip;
        el.style.outlineColor = target.c;

        if (first) {
            const s = first.style;
            s.color = target.f;
            s.backgroundColor = target.b;
            s.opacity = target.o;
        }
    }

    // 3. Refresh arrays
    readCoins();
}
