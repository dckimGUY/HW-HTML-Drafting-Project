function isolateGroup() {
    // 1. Early exit for empty workspace
    if (coinFocus == null || utilityLayer0.children.length == 0) {
        groupPaste("0"); groupPaste("1"); groupPaste("2");
        return;
    }

    // 2. CACHE CALCULATIONS (One read, multiple uses)
    const s = coinFocus.style;
    const cW = parseInt(s.width) || 0;
    const cH = parseInt(s.height) || 0;
    const cL = parseInt(s.left) || 0;
    const cT = parseInt(s.top) || 0;

    const fontWidth = Math.min(cW, cH);
    const centerX = cL + (cW / 2);
    const centerY = cT + (cH / 2);
    const textColour = window["coinColour" + coinFocus.dataset.coinTrip];

    // Trigger effect
    buzzWord(2, "Y", fontWidth, textColour, 80, 80, 25, "center", centerX, centerY);

    const group = coinFocus.dataset.coinTrip.toString();
    deleteCoin(['', 88, 120]);

    // 3. OPTIMIZED BUFFER CHECK
    // Check if any of the three selection buffers have content
    const hasGroupData = (sel0PasteBuffer.value?.length > 0) || 
                         (sel1PasteBuffer.value?.length > 0) || 
                         (sel2PasteBuffer.value?.length > 0);

    if (hasGroupData) {
        pasteMultiple();
        groupPaste("0");
        groupPaste("1");
        groupPaste("2");
        pasteSingle();
    } else {
        // Handle full isolation
        groupDeletion("0");
        groupDeletion("1");
        groupDeletion("2");
        groupPaste(group);
        pasteSingle();
    }
}
