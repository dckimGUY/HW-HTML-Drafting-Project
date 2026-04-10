function outerScaleUp() {
    if (coinFocus != null) {
        // Prime baseline for history tracking
        omni([coinFocus.lastElementChild, coinFocus.firstElementChild], {
            "transformOrigin": coinFocus.lastElementChild.style.transformOrigin,
            "scale": coinFocus.lastElementChild.style.scale
        });

        if (Cur.style.display == "block") {
            const originStr = `${parseInt(Cur.style.left) - parseInt(coinFocus.style.left) + "px"} ${parseInt(Cur.style.top) - parseInt(coinFocus.style.top) + "px"}`;
            omni(coinFocus.lastElementChild, { "transformOrigin": originStr });
            omni(coinFocus.firstElementChild, { "transformOrigin": originStr });
        } else if (Cur.style.display == "none") {
            omni(coinFocus.lastElementChild, { "transformOrigin": "center" });
            omni(coinFocus.firstElementChild, { "transformOrigin": "center" });
        }

        let newScale = 1;
        let scaleFactor = T / 512;
        let currentScale = parseFloat(coinFocus.lastElementChild.dataset.scale);

        newScale = Math.round((parseFloat(coinFocus.lastElementChild.dataset.scale) + scaleFactor) * 10000) / 10000;

        if ((currentScale * 10000) % (scaleFactor * 10000) == 0) {
            newScale = Math.round((currentScale + scaleFactor) * 10000) / 10000;
        } else {
            newScale = Math.round(((currentScale + scaleFactor) * 10000) + (scaleFactor * 10000 - (currentScale * 10000) % (scaleFactor * 10000))) / 10000;
        }

        coinFocus.lastElementChild.style.scale = newScale;
        coinFocus.lastElementChild.dataset.scale = newScale;
        coinFocus.firstElementChild.style.scale = newScale;
        coinFocus.firstElementChild.dataset.scale = newScale;

        omni([coinFocus.lastElementChild, coinFocus.firstElementChild], { "scale": newScale });
    }
}
