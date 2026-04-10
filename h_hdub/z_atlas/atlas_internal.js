async function SquareAtlas(content) {
    const b64Regex = /data:image\/(png|gif);base64,[A-Za-z0-9+/=]+/g;
    const matches = [...new Set(content.match(b64Regex) || [])];
    if (!matches.length) return content;

    const images = [];
    for (const src of matches) {
        const img = await new Promise(res => {
            const i = new Image();
            i.onload = () => res(i);
            i.onerror = () => res(null);
            i.src = src;
        });
        if (img) images.push({ src, img, w: img.width, h: img.height });
    }

    // 1. Square Packing Logic
    const area = images.reduce((s, i) => s + (i.w * i.h), 0);
    const targetW = Math.sqrt(area) * 1.05;
    let curX = 0, curY = 0, rowH = 0, atlasW = 0;
    const layout = new Map();

    for (const item of images) {
        if (curX + item.w > targetW) { curX = 0; curY += rowH; rowH = 0; }
        layout.set(item.src, { x: curX, y: curY, w: item.w, h: item.h });
        rowH = Math.max(rowH, item.h);
        curX += item.w;
        atlasW = Math.max(atlasW, curX);
    }

    const canvas = document.createElement('canvas');
    canvas.width = atlasW; canvas.height = curY + rowH;
    const ctx = canvas.getContext('2d');
    images.forEach(i => ctx.drawImage(i.img, layout.get(i.src).x, layout.get(i.src).y));

    const atlasB64 = canvas.toDataURL('image/png');
    
    // 2. SEO-OPTIMIZED INJECTION (Finds </head> and puts it right before)
    const atlasStyle = `<style id="atlas-core">:root{--ATLAS:url('${atlasB64}');}</style>\n`;
    const headTag = "</head>";
    let processed = content.toLowerCase().includes(headTag) 
        ? content.replace(new RegExp(headTag, 'i'), atlasStyle + headTag) 
        : atlasStyle + content;

    // 3. String Replacement Logic
    for (const [src, l] of layout) {
        const szX = Math.round((canvas.width / l.w) * 100);
        const szY = Math.round((canvas.height / l.h) * 100);
        const pX = canvas.width === l.w ? 0 : (l.x / (canvas.width - l.w) * 100).toFixed(2);
        const pY = canvas.height === l.h ? 0 : (l.y / (canvas.height - l.h) * 100).toFixed(2);

        // No nested url(). Just the variable.
        const replacement = `var(--ATLAS); background-size: ${szX}% ${szY}%; background-position: ${pX}% ${pY}%`;
        
        const escaped = src.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const nukeRegex = new RegExp(`url\\(["']?${escaped}["']?\\)`, 'g');
        
        processed = processed.replace(nukeRegex, replacement);
    }

    return processed;
}
