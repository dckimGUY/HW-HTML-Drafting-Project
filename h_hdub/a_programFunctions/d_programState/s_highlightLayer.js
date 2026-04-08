const STYLE_KEYS = {
    first: ["filter", "top", "left", "width", "height", "zIndex"],
    last:  ["transform", "transformOrigin", "scale", "opacity", "outline", "outlineOffset", "borderRadius", "boxShadow"],
    final: ["backgroundColor", "padding", "color", "textShadow", "fontSize", "fontWeight", "fontStyle", "fontVariant", "fontFamily", "textAlign", "wordSpacing", "letterSpacing", "lineHeight", "textIndent"]
};

// Updated to include your special extra layers
const LAYER_KEYS = ["b_layer1", "c_layer2", "d_layer3", "e_layer4", "f_layer5", "g_layer6", "h_layer7", "i_layer8", "j_layer9", "k_layer10", "l_layer11", "m_layer12", "n_layer13", "o_layer14", "p_layer15", "q_layer16", "r_layer17", "s_layer18", "t_layer19", "u_layer20", "v_layer21", "w_layer22", "x_layer23", "y_layer24", "z_layer25", "importer", "thePhantomLair", "localView"];

function runUpdate(specificLayerIndex = null) {
    const start = specificLayerIndex !== null ? specificLayerIndex : 0;
    const end = specificLayerIndex !== null ? specificLayerIndex + 1 : LAYER_KEYS.length;

    for (let j = start; j < end; j++) {
        const layerName = LAYER_KEYS[j];
        const layerObj = topLayer[layerName];
        
        // CRITICAL FIX: Ensure layer exists and b_content is a valid element before reading .children
        if (!layerObj || !layerObj.b_content || typeof layerObj.b_content !== 'object') continue;

        const children = layerObj.b_content.children;
        const layerButton = ui["setLayer" + (j + 1)];

        if (!children || children.length === 0) {
            if (layerButton) layerButton.ref.dataset.programState = "";
            continue;
        }

        let programState = {
            ids: [],
            dat: {},
            page: {
                title: layerObj.filename || "",
                level: layerObj.g_layerTitle || "",
                desc:  layerObj.d_description || ""
            }
        };

        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            const id = child.id;
            const datEntry = { id: id, style: {} };

            STYLE_KEYS.first.forEach(y => datEntry.style[y] = child.style[y]);
            
            const lastEl = child.lastElementChild;
            if (lastEl) {
                STYLE_KEYS.last.forEach(y => datEntry.style[y] = lastEl.style[y]);
                const firstOfLast = lastEl.firstElementChild;
                if (firstOfLast) {
                    STYLE_KEYS.final.forEach(y => datEntry.style[y] = firstOfLast.style[y]);
                }
            }
            programState.ids.push(id);
            programState.dat[id] = datEntry;
        }

        if (layerButton) {
            layerButton.ref.dataset.programState = JSON.stringify(programState);
        }
    }
}

function highlightLayer() {
    const tintMin = 0.2, tintMax = 0.65, tintStep = 0.05;
    const currentLayerIndex = LAYER_KEYS.indexOf(topLayer.a_currentLayer);
    
    if (currentLayerIndex !== -1) runUpdate(currentLayerIndex);

    // Update LVL indicators (1-20)
    const currentObj = topLayer[topLayer.a_currentLayer];
    const activeLvl = currentObj ? currentObj.g_layerTitle : null;
    
    for (let j = 1; j <= 20; j++) {
        const lvlEl = document.getElementById("LVL" + j);
        if (!lvlEl) continue;
        const isActive = activeLvl == j;
        lvlEl.style.backgroundColor = isActive ? "rgba(0,255,0,1)" : "transparent";
        lvlEl.style.zIndex = isActive ? "999999999" : "0";
    }

    // Update Layer Selection UI
    for (let j = 0; j < LAYER_KEYS.length; j++) {
        const layerName = LAYER_KEYS[j];
        const layer = topLayer[layerName];
        const layerButton = ui["setLayer" + (j + 1)];
        
        if (!layer || !layerButton) continue;

        const btn = layerButton.ref;
        // Use optional chaining for child count
        const childCount = layer.b_content?.children?.length || 0;

        if (childCount > 0) {
            const alphaValue = Math.min(tintMax, tintMin + (childCount * tintStep));
            btn.style.backgroundColor = `rgba(255,0,0,${alphaValue})`;
        } else {
            btn.style.backgroundColor = "transparent";
        }

        if (layer.a_name === topLayer.a_currentLayer) {
            btn.style.borderRadius = "4px";
            btn.style.outlineOffset = "-5px";
            btn.style.outline = "3px double rgb(255,255,255)";
        } else {
            btn.style.outline = "";
        }
    }
}
