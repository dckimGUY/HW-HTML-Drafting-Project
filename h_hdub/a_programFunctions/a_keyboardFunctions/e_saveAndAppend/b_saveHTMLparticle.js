async function saveHTMLparticle(rename, fileInputString, codePrep, js, phpSub) {
    // 1. Capture the "now" state immediately
    const parts = Array.from(utilityLayer0.children);
    const num = parts.length;
    const isTxt = (event && event.ctrlKey);
    const cleanName = filename.replace(/ /g, '-');

    // 2. Wrap the heavy lifting in a Promise so it doesn't "block"
    const generateFile = () => new Promise((resolve) => {
        setTimeout(() => {
            let fileExtension = isTxt ? ".txt" : ".html";
            if (phpSub) fileExtension = ".php";

            // The "Heavy Lift": Moving this to a timeout keeps the UI responsive
            const filesave = fileInputString || parts.map(el => el.outerHTML).join("\n\n");

            const d = new Date();
            const dateSuffix = `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, "0")}-${d.getDate().toString().padStart(2, "0")}-T${d.getHours().toString().padStart(2, "0")}-${d.getMinutes().toString().padStart(2, "0")}-${d.getSeconds().toString().padStart(2, "0")}`;
            
            const typeTag = codePrep ? "_CODE-PREP_" : "";
            const finalName = `${cleanName}${typeTag}@_${dateSuffix}_${num}pcs${fileExtension}`;

            resolve({ content: filesave, name: finalName });
        }, 0); 
    });

    // 3. Execute without locking the UI
    const fileData = await generateFile();

    // 4. Trigger the download
    const blob = new Blob([fileData.content], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileData.name;
    
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    URL.revokeObjectURL(url);
    Z(); // Reset the Z-order visualization if needed
}
