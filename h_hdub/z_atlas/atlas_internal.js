async function SquareAtlas(content) {
    const HARD_MAX = 4096;
    const b64Regex = /data:image\/(?:png|gif);base64,[A-Za-z0-9+/=]+/g;
    
    // 1. DEDUPLICATION: Get unique original sources only
    const uniqueMatches = [...new Set(content.match(b64Regex) || [])];
    if (!uniqueMatches.length) return content;

    const images = [];
    for (const src of uniqueMatches) {
        try {
            const img = await new Promise((res) => {
                const i = new Image();
                i.onload = () => res(i); 
                i.onerror = () => res(null);
                i.src = src;
            });
            // Gatekeeper: Ignore images > 4096px or failed loads
            if (img && img.width > 0 && img.width <= HARD_MAX && img.height <= HARD_MAX) {
                images.push({ src, img, w: img.width, h: img.height });
            }
        } catch (e) { continue; }
    }

    // SORT: Tallest first for packing efficiency
    images.sort((a, b) => b.h - a.h);

    const atlasStore = []; 
    const masterLookup = new Map();
    let remaining = [...images];

    // 2. MULTI-BUCKET PACKING & CINCHING
    while (remaining.length > 0) {
        const totalArea = remaining.reduce((s, i) => s + (i.w * i.h), 0);
        const minSide = Math.sqrt(totalArea);
        const maxImgW = Math.max(...remaining.map(i => i.w));
        
        let targetW = Math.pow(2, Math.ceil(Math.log2(Math.max(minSide, maxImgW))));
        if (targetW > HARD_MAX) targetW = HARD_MAX;

        let curX = 0, curY = 0, rowH = 0, actualMaxW = 0;
        const layout = new Map();
        const placedIndices = [];

        for (let i = 0; i < remaining.length; i++) {
            const item = remaining[i];
            if (curX + item.w > targetW) {
                if (curY + rowH + item.h > HARD_MAX) break; 
                curX = 0; curY += rowH; rowH = 0;
            }
            if (curY + item.h > HARD_MAX) break;

            layout.set(item.src, { x: curX, y: curY, w: item.w, h: item.h });
            rowH = Math.max(rowH, item.h);
            curX += item.w;
            actualMaxW = Math.max(actualMaxW, curX);
            placedIndices.push(i);
        }

        const finalMaxDim = Math.max(actualMaxW, curY + rowH);
        const side = Math.pow(2, Math.ceil(Math.log2(finalMaxDim)));
        
        const canvas = document.createElement('canvas');
        canvas.width = side; canvas.height = side;
        const ctx = canvas.getContext('2d');

        const bucketItems = remaining.filter((_, idx) => placedIndices.includes(idx));
        bucketItems.forEach(i => {
            const l = layout.get(i.src);
            ctx.drawImage(i.img, l.x, l.y);
            masterLookup.set(i.src, { 
                x: l.x, y: l.y, w: l.w, h: l.h, side, idx: atlasStore.length 
            });
        });

        atlasStore.push(canvas.toDataURL('image/png'));
        remaining = remaining.filter((_, idx) => !placedIndices.includes(idx));
    }

    // 3. ATOMIC GLOBAL REPLACEMENT
    let finalBody = content;
    for (const [src, l] of masterLookup) {
        const szX = (l.side / l.w * 100).toFixed(2).replace(/\.00$/, "");
        const szY = (l.side / l.h * 100).toFixed(2).replace(/\.00$/, "");
        const pX = (l.side === l.w || l.x === 0) ? "0%" : (l.x / (l.side - l.w) * 100).toFixed(2).replace(/\.00$/, "") + "%";
        const pY = (l.side === l.h || l.y === 0) ? "0%" : (l.y / (l.side - l.h) * 100).toFixed(2).replace(/\.00$/, "") + "%";
        
        const replacement = `var(--ATLAS${l.idx}); background-size: ${szX}% ${szY}%; background-position: ${pX} ${pY}`;
        
        // Split/Join bypasses "Regex too large" errors for massive strings
        const targets = [
            `url("${src}")`, `url('${src}')`, `url(${src})`,
            `URL("${src}")`, `URL('${src}')`, `URL(${src})`
        ];
        targets.forEach(t => {
            finalBody = finalBody.split(t).join(replacement);
        });
    }

    // 4. STYLE INJECTION
    let atlasStyles = `<style id="atlas-core">:root{`;
    atlasStore.forEach((data, i) => atlasStyles += `--ATLAS${i}:url('${data}');`);
    atlasStyles += `}</style>\n`;

    const headTag = "</head>";
    const headIndex = finalBody.toLowerCase().indexOf(headTag);
    return headIndex !== -1 
        ? finalBody.slice(0, headIndex) + atlasStyles + finalBody.slice(headIndex)
        : atlasStyles + finalBody;
}
