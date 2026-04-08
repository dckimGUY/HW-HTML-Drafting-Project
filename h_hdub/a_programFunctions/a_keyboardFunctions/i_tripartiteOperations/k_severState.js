
function severState() {
    if (!coinFocus || !coinFocus.dataset.state || !stateHolder || stateHolder.length <= 1) return;

    const s = coinFocus.style;
    const l = parseInt(s.left) || 0, t = parseInt(s.top) || 0;
    const h = parseInt(s.height) || 0, w = parseInt(s.width) || 0;
    const tempArray = Array.from(stateHolder);

    removeCoin();

    tempArray.forEach((wrapper, j) => {
        setTimeout(() => {
            // Safety: Check if this is a "tagged" state or an old "raw" state
            const isTagged = wrapper.originalId !== undefined;
            const stateToPop = isTagged ? wrapper.data : [wrapper];

            popAccumulator(JSON.stringify(stateToPop));
            
            if (coinFocus) {
                // RESTORE THE IDENTITY: Reclaim the original ID
                if (isTagged) {
                    coinFocus.id = wrapper.originalId;
                }

                const newTop = t + (h * j) + "px";
                const curStyle = coinFocus.style;
                const curData = coinFocus.dataset;
                
                curStyle.left = curData.left = l + "px";
                curStyle.top  = curData.top  = newTop;
                curStyle.width = curData.width = w + "px";
                curStyle.height = curData.height = h + "px";
            }

            if (j === tempArray.length - 1) {
                readCoins();
                recoverColouration();
                redraw();
            }
        }, 10 * j);
    });
}
