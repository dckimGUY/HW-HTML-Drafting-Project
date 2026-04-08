// --- BUNDLE & UNPACK SYSTEM (Powered by fflate) ---

/**
 * 1. Beautifier: Restores indentation and line breaks for the Dev Zip.
 */
function beautify(code) {
    let indent = 0;
    return code
        .replace(/\{/g, "{\n")
        .replace(/\}/g, "\n}\n")
        .replace(/;/g, ";\n")
        .split("\n")
        .map(line => {
            line = line.trim();
            if (line.startsWith("}")) indent--;
            const result = "    ".repeat(Math.max(0, indent)) + line;
            if (line.endsWith("{")) indent++;
            return result;
        })
        .join("\n").replace(/\n\s*\n/g, "\n");
}

/**
 * 2. Main Keyboard Controller: Ctrl+S and Ctrl+Shift+S
 */
window.onkeydown = async e => {
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();

        // SCENARIO A: Lite/Production Version
        if (document.querySelector('script[src^="bundle.js"]')) {
            const link = document.createElement('a');
            link.href = './hdubPixelArtEdition.zip';
            link.download = 'hdubPixelArtEdition.zip';
            link.click();
            return;
        }

        // SCENARIO B: Standalone Version (has fflate and blueprint markers)
        const zip = new fflate.AsyncZip();
        const filesToZip = {};
        let finalFileName = "hdubPixelArtEdition.zip";

        // DEVELOPER RECONSTRUCTION MODE (Ctrl + Shift + S)
        if (e.shiftKey) {
            finalFileName = "hdub_DEV_environment.zip";
            
            // Create a virtual copy of the document to transform the HTML structure
            const docClone = document.documentElement.cloneNode(true);
            
            // Reconstruct files and CLEAN the HTML clone simultaneously
            docClone.querySelectorAll('script[data-path], style[data-path]').forEach(cloneItem => {
                const path = cloneItem.getAttribute('data-path');
                
                // Get the ACTUAL content from the live document (not the clone)
                const liveItem = document.querySelector(`[data-path="${path}"]`);
                let content = liveItem.innerText;
                
                // Un-Terser/Beautify the JS and CSS for the folders
                if (path.endsWith('.js') || path.endsWith('.css')) {
                    content = beautify(content);
                }
                filesToZip[path] = fflate.strToU8(content);

                // --- THE REVERSAL PROCESS ---
                // Empty the internal content and convert to a source-linked tag
                cloneItem.innerText = ""; 
                if (path.endsWith('.js')) {
                    cloneItem.setAttribute('src', path);
                } else if (path.endsWith('.css')) {
                    // Replace <style> with <link rel="stylesheet"> for CSS files
                    const linkTag = document.createElement('link');
                    linkTag.rel = 'stylesheet';
                    linkTag.href = path;
                    cloneItem.replaceWith(linkTag);
                }
            });

            // Reconstruct secondary structural files
            filesToZip["y_header.txt"] = fflate.strToU8(document.head.innerHTML);
            const storage = document.getElementById('storageKeys');
            filesToZip["storageKeys.txt"] = fflate.strToU8(storage ? storage.outerHTML : "");
            
            // Add the TRANSFORMED runnable dev file (sourced to external files)
            const devHTML = "<!DOCTYPE html>\n" + docClone.outerHTML;
            filesToZip["workingVersion.html"] = fflate.strToU8(devHTML);
        } 
        
        // STANDARD USER SAVE (Ctrl + S)
        else {
            const htmlSource = "<!DOCTYPE html>\n" + document.documentElement.outerHTML;
            filesToZip["index.html"] = fflate.strToU8(htmlSource);
        }

        // 3. EXECUTE ZIP (Uses fflate workers to prevent UI lag)
        for (const [path, data] of Object.entries(filesToZip)) {
            const zippedFile = new fflate.AsyncZipDeflate(path, { level: 6 });
            zip.add(zippedFile);
            zippedFile.push(data, true);
        }

        const chunks = [];
        zip.ondata = (err, chunk, final) => {
            if (err) return console.error("fflate error:", err);
            chunks.push(chunk);
            
            if (final) {
                const blob = new Blob(chunks, { type: 'application/zip' });
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = finalFileName;
                
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                console.log(`Hdub bundle complete: ${finalFileName}`);
                setTimeout(() => URL.revokeObjectURL(url), 2000);
            }
        };
        zip.end();
    }
};