function flowVis() {
    const children = utilityLayer0.children;
    const len = children.length;
    if (len === 0) return;

    // 1. Initial setup outside the loop
    const text = (lastFlow === "global") ? "v" : "V";
    
    // 2. Pre-calculate all data to avoid "Layout Thrashing" inside the timeouts
    const buzzData = Array.from(children).map(el => {
        const s = el.style;
        const w = parseInt(s.width) || 0;
        const h = parseInt(s.height) || 0;
        const l = parseInt(s.left) || 0;
        const t = parseInt(s.top) || 0;
        
        return {
            colour: window["coinColour" + el.dataset.coinTrip],
            size: Math.min(w, h),
            cX: l + (w / 2),
            cY: t + (h / 2)
        };
    });

    // 3. Batch the buzz calls
    // We use a small delay multiplier (60ms) but the math is already done
    buzzData.forEach((data, j) => {
        setTimeout(() => {
            buzzWord(1, text, data.size, data.colour, 20, 20, 10, "center", data.cX, data.cY, null, true);
        }, j * 60);
    });
}
