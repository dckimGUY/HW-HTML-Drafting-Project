function extendEdge(kI) {
    const [e, kC, cC] = kI, c = coinFocus;
    if (!c) return;
    const s = c.style,
        d = c.dataset;
    if (d.lockE != "true") {
        // REMOVED the priming call from here to eliminate the double-tap.

        let L = parseInt(s.left),
            W = parseInt(s.width),
            T0 = parseInt(s.top),
            H = parseInt(s.height);
        if (eM == 0) {
            if (kC == 72 && cC == 104) {
                if ((L + W) % T == 0) {
                    if (W - T >= 0) omni(c, { "width": W - T + "px" });
                    else {
                        omni(c, { "width": W + T + "px", "left": L - T + "px" });
                        eM = 1
                    }
                } else omni(c, { "width": (Math.floor((L + W) / T) * T) - L + "px" })
            }
            if (kC == 74 && cC == 106) omni(c, { "height": ((T0 + H) % T == 0 ? H + T : Math.ceil((T0 + H) / T) * T - T0) + "px" });
            if (kC == 75 && cC == 107) {
                if ((T0 + H) % T == 0) {
                    if (H - T >= 0) omni(c, { "height": H - T + "px" });
                    else {
                        omni(c, { "height": H + T + "px", "top": T0 - T + "px" });
                        eM = 1
                    }
                } else omni(c, { "height": (Math.floor((T0 + H) / T) * T) - T0 + "px" })
            }
            if (kC == 76 && cC == 108) omni(c, { "width": ((L + W) % T == 0 ? W + T : Math.ceil((L + W) / T) * T - L) + "px" })
        } else if (eM == 1) {
            if (kC == 72 && cC == 104) {
                if (L % T == 0) {
                    if (L >= T) {
                        omni(c, { "width": W + T + "px", "left": L - T + "px" })
                    }
                } else if (Math.floor(L / T) * T >= 0) {
                    omni(c, { "width": W + L - (Math.floor(L / T) * T) + "px", "left": Math.floor(L / T) * T + "px" })
                }
            }
            if (kC == 74 && cC == 106) {
                if (T0 % T == 0) {
                    if (H >= T) {
                        omni(c, { "height": H - T + "px", "top": T0 + T + "px" })
                    } else {
                        omni(c, { "height": H + T + "px" });
                        eM = 0
                    }
                } else {
                    omni(c, { "height": H + T0 - (Math.ceil(T0 / T) * T) + "px", "top": Math.ceil(T0 / T) * T + "px" })
                }
            }
            if (kC == 75 && cC == 107) {
                if (T0 % T == 0) {
                    if (T0 >= T) {
                        omni(c, { "height": H + T + "px", "top": T0 - T + "px" })
                    }
                } else if (Math.floor(T0 / T) * T >= 0) {
                    omni(c, { "height": H + T0 - (Math.floor(T0 / T) * T) + "px", "top": Math.floor(T0 / T) * T + "px" })
                }
            }
            if (kC == 76 && cC == 108) {
                if (L % T == 0) {
                    if (W >= T) {
                        omni(c, { "width": W - T + "px", "left": L + T + "px" })
                    } else {
                        omni(c, { "width": W + T + "px" });
                        eM = 0
                    }
                } else {
                    omni(c, { "width": W + L - (Math.ceil(L / T) * T) + "px", "left": Math.ceil(L / T) * T + "px" })
                }
            }
        }
        if (cC == 72) {
            if (W >= T * 2) {
                omni(c, { "width": W - T * 2 + "px", "left": L + T + "px" })
            }
        }
        if (cC == 74) {
            if (H >= T * 2) {
                omni(c, { "height": H - T * 2 + "px", "top": T0 + T + "px" })
            }
        }
        if (cC == 75) {
            omni(c, { "height": H + T * 2 + "px", "top": T0 - T + "px" })
        }
        if (cC == 76) {
            omni(c, { "width": W + T * 2 + "px", "left": L - T + "px" })
        }
        d.width = s.width;
        d.height = s.height;
        d.left = s.left;
        d.top = s.top
    } else {
        if (cC == 72) rotateLeft();
        if (cC == 74) rotateUnder();
        if (cC == 75) rotateOver();
        if (cC == 76) rotateRight();
        if (cC == 104) outerScaleDown(kI);
        if (cC == 106) rotateZleft();
        if (cC == 107) rotateZright();
        if (cC == 108) outerScaleUp(kI)
    }
}
