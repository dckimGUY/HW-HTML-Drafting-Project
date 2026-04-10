function clearRotation() {
    if (coinFocus != null) {
        omni([coinFocus.lastElementChild, coinFocus.firstElementChild], {
            "transformOrigin": coinFocus.lastElementChild.style.transformOrigin,
            "transform": coinFocus.lastElementChild.style.transform
        });
        if (Cur.style.display == "block") {
            const originStr = `${parseInt(Cur.style.left) - parseInt(coinFocus.style.left) + "px"} ${parseInt(Cur.style.top) - parseInt(coinFocus.style.top) + "px"}`;
            omni(coinFocus.lastElementChild, { "transformOrigin": originStr });
            omni(coinFocus.firstElementChild, { "transformOrigin": originStr });
        } else if (Cur.style.display == "none") {
            omni(coinFocus.lastElementChild, { "transformOrigin": "center" });
            omni(coinFocus.firstElementChild, { "transformOrigin": "center" });
        }
        coinFocus.lastElementChild.dataset.perspective = "1536px";
        coinFocus.lastElementChild.dataset.rotateX = "0deg";
        coinFocus.lastElementChild.dataset.rotateY = "0deg";
        coinFocus.lastElementChild.dataset.rotateZ = "0deg";
        coinFocus.lastElementChild.dataset.translateZ = "0px";
        const transformStr = "perspective(1536px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px)";
        coinFocus.lastElementChild.style.transform = transformStr;
        coinFocus.firstElementChild.style.transform = transformStr;
        omni([coinFocus.lastElementChild, coinFocus.firstElementChild], { "transform": transformStr });
    }
}
