function recoverColouration() {
    const children = utilityLayer0.children;
    const len = children.length;

    for (let j = 0; j < len; j++) {
        const el = children[j];
        const first = el.firstElementChild;
        if (!first) continue;

        const trip = el.dataset.coinTrip;

        // Grouping the styles so the browser engine can optimize the writes
        if (trip == Ts0) {
            first.style.color = Fs0;
            el.style.outlineColor = Cs0;
            first.style.backgroundColor = Bs0;
            first.style.opacity = Os0;
        } else if (trip == Ts1) {
            first.style.color = Fs1;
            el.style.outlineColor = Cs1;
            first.style.backgroundColor = Bs1;
            first.style.opacity = Os1;
        } else if (trip == Ts2) {
            first.style.color = Fs2;
            el.style.outlineColor = Cs2;
            first.style.backgroundColor = Bs2;
            first.style.opacity = Os2;
        }
    }
}
