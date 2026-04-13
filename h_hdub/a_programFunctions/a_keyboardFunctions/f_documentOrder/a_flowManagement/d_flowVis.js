function flowVis() {
    if (utilityLayer0.children.length === 0) return;

    // Determine character once per call
    const text = (lastFlow === "global") ? "v" : "V";

    // Small delay to ensure utilityLayer0 has settled
    setTimeout(() => {
        // Convert to array to freeze the snapshot of elements
        const nodes = Array.from(utilityLayer0.children);

        nodes.forEach((node, index) => {
            setTimeout(() => {
                const ds = node.dataset;
                const style = node.style;
                const textColour = window["coinColour" + ds.coinTrip];

                // Extract and parse numeric values once
                const w = parseInt(style.width) || 0;
                const h = parseInt(style.height) || 0;
                const l = parseInt(style.left) || 0;
                const t = parseInt(style.top) || 0;

                // Determine font size (shortest side)
                const fontWidth = Math.min(w, h);

                // Calculate center points
                const centerX = l + (w / 2);
                const centerY = t + (h / 2);

                // Trigger buzzWord with captured values
                buzzWord(1, text, fontWidth, textColour, 20, 20, 10, "center", centerX, centerY, null, true);
            }, index * 80);
        });
    }, 20);
}
