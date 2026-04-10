function singleUndo() {
    if (coinFocus != null) {
        omni(coinFocus).undo();
        const s = coinFocus.style;
        const d = coinFocus.dataset;
        d.left = s.left;
        d.top = s.top;
        d.width = s.width;
        d.height = s.height;
        d.zIndex = s.zIndex;
        if (coinFocus.lastElementChild) {
            coinFocus.lastElementChild.dataset.scale = coinFocus.lastElementChild.style.scale;
        }
    }
}

function singleRedo() {
    if (coinFocus != null) {
        omni(coinFocus).redo();
        const s = coinFocus.style;
        const d = coinFocus.dataset;
        d.left = s.left;
        d.top = s.top;
        d.width = s.width;
        d.height = s.height;
        d.zIndex = s.zIndex;
        if (coinFocus.lastElementChild) {
            coinFocus.lastElementChild.dataset.scale = coinFocus.lastElementChild.style.scale;
        }
    }
}
