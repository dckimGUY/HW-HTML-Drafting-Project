function globalUndo() {
    const targets = Array.from(utilityLayer0.children);
    if (targets.length > 0) {
        omni(targets).undo();
        targets.forEach(el => {
            el.dataset.left = el.style.left;
            el.dataset.top = el.style.top;
            el.dataset.width = el.style.width;
            el.dataset.height = el.style.height;
            el.dataset.zIndex = el.style.zIndex;
            if (el.lastElementChild) {
                el.lastElementChild.dataset.scale = el.lastElementChild.style.scale;
            }
        });
    }
}

function globalRedo() {
    const targets = Array.from(utilityLayer0.children);
    if (targets.length > 0) {
        omni(targets).redo();
        targets.forEach(el => {
            el.dataset.left = el.style.left;
            el.dataset.top = el.style.top;
            el.dataset.width = el.style.width;
            el.dataset.height = el.style.height;
            el.dataset.zIndex = el.style.zIndex;
            if (el.lastElementChild) {
                el.lastElementChild.dataset.scale = el.lastElementChild.style.scale;
            }
        });
    }
}
