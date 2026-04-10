function rotateZleft(rotationStep) {
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
        const perspective = parseInt(coinFocus.lastElementChild.dataset.perspective);
        const rotateX = parseInt(coinFocus.lastElementChild.dataset.rotateX);
        const rotateY = parseInt(coinFocus.lastElementChild.dataset.rotateY);
        const rotateZ = parseInt(coinFocus.lastElementChild.dataset.rotateZ);
        const translateZ = parseInt(coinFocus.lastElementChild.dataset.translateZ);
        let newRotateZ = rotateZ - (rotationStep || ZrotationStep);
        if (newRotateZ >= 360) newRotateZ -= 360;
        else if (newRotateZ < 0) newRotateZ += 360;
        coinFocus.lastElementChild.dataset.rotateZ = newRotateZ;
        const transformStr = "perspective(" + perspective + "px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) rotateZ(" + newRotateZ + "deg) translateZ(" + translateZ + "px)";
        coinFocus.lastElementChild.style.transform = transformStr;
        coinFocus.firstElementChild.style.transform = transformStr;
        omni([coinFocus.lastElementChild, coinFocus.firstElementChild], { "transform": transformStr });
    }
}
