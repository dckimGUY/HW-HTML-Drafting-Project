async function saveProject(pullFile) {
    // 1. UNIFY STATE (Only if necessary)
    if (topLayer.a_currentLayer === "localView") toggleLocalView();

    // Cache current layer reference to stop property lookups
    const curName = topLayer.a_currentLayer;
    const curLayer = topLayer[curName];

    // Batch update current layer data
    curLayer.e_coinFocus = coinFocus ? coinFocus.id : null;
    curLayer.f_coinFocus = coinFocus1 ? coinFocus1.id : null;
    curLayer.b_content.innerHTML = utilityLayer0.innerHTML;
    curLayer.filename = filename;
    curLayer.echelon = pageEchelon / 100000000;

    // Sync Buffers and Themes
    saveTheme("currentTheme");
    topLayer.projectThemes = userCustomTheme;
    topLayer.singlePasteBuffer = singlePasteBuffer;
    topLayer.singleRestoreBuffer = singleRestoreBuffer;
    topLayer.multiplePasteBuffer = multiplePasteBuffer;
    topLayer.sel0PasteBuffer = sel0PasteBuffer;
    topLayer.sel1PasteBuffer = sel1PasteBuffer;
    topLayer.sel2PasteBuffer = sel2PasteBuffer;
    topLayer.hold = hold;
    topLayer.hwString = ui.hwString;

    // 2. OPTIMIZED UI DATA CAPTURE
    topLayer.capitals = {};
    const idNames = ui.idNames;
    for (let i = 0; i < idNames.length; i++) {
        const name = idNames[i];
        const source = ui[name];
        topLayer.capitals[name] = {
            value: source.value.toString(),
            title: source.title.toString(),
            colour: source.colour.toString()
        };
    }

    // 3. FAST STRINGIFY
    // Replaced the 'instanceof Element' check with a faster check
    const json = JSON.stringify(topLayer, (key, value) => {
        return (value && value.outerHTML) ? value.outerHTML : value;
    });

    // 4. COMPRESSION (Your logic is already the fastest native way)
    const stream = new Blob([json]).stream().pipeThrough(new CompressionStream('gzip'));
    const compressedBlob = await new Response(stream).blob();

    // 5. CLEAN DATE GENERATION
    const d = new Date();
    const dateSuffix = d.toISOString().replace(/[:.]/g, '-').split('T');
    const finalDate = `${dateSuffix[0]}-T${dateSuffix[1].slice(0, 8)}`;

    // 6. DOWNLOAD TRIGGER
    const url = URL.createObjectURL(compressedBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `HDUB_Project_${topLayer.aa_project_name}@_${finalDate}.json.gz`;

    document.body.appendChild(a); // Append for browser compatibility
    a.click();
    document.body.removeChild(a);
    
    URL.revokeObjectURL(url);
    return 0;
}
