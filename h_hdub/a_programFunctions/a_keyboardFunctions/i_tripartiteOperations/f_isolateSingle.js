function isolateSingle() {
    // 1. Exit early or handle empty state
    if (coinFocus == null) {
        groupPaste("0"); groupPaste("1"); groupPaste("2");
        pasteMultiple();
        return;
    }

    const originalFocus = coinFocus;
    const s = coinFocus.style;
    const childrenLen = utilityLayer0.children.length;

    // 2. CACHE CALCULATIONS (Do this once, use it everywhere)
    // Prevents hitting the DOM repeatedly for the same numbers
    const cW = parseInt(s.width) || 0;
    const cH = parseInt(s.height) || 0;
    const cL = parseInt(s.left) || 0;
    const cT = parseInt(s.top) || 0;

    const fontWidth = Math.min(cW, cH);
    const centerX = cL + (cW / 2);
    const centerY = cT + (cH / 2);
    const textColour = window["coinColour" + coinFocus.dataset.coinTrip];

    // Helper to trigger the buzz effect
    const triggerBuzz = () => {
        buzzWord(2, "y", fontWidth, textColour, 80, 80, 25, "center", centerX, centerY);
    };

    // 3. LOGIC BRANCHES
    if (childrenLen <= 1) {
        triggerBuzz();
        groupPaste("0"); groupPaste("1"); groupPaste("2");
        pasteMultiple();
    } 
    else if (multiplePasteBuffer.value != '') {
        triggerBuzz();
        deleteCoin(['', 88, 120]);
        pasteMultiple();
        pasteSingle();
    } 
    else {
        triggerBuzz();
        deleteCoin(['', 88, 120]);
        deleteCoin(['', 88, 88]);
        pasteSingle();
    }

    // Restore focus state
    coinFocus = originalFocus;
}
