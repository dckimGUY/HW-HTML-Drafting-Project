function updateInfoShelf() {

topLayer[topLayer.a_currentLayer].b_content.innerHTML = utilityLayer0.innerHTML;

if (coinFocus!=null&&coinFocus.dataset.notes) {
ui.partText.ref.value  = coinFocus.dataset.notes;
} else {
ui.partText.ref.value  = "";
}

let filenameEntryLayers = document.getElementById("coin77671");
filenameEntryLayers.value = filename;

let partY     = document.getElementById("partY"    ),
    partX     = document.getElementById("partX"    ),
    partW     = document.getElementById("partW"    ),
    partH     = document.getElementById("partH"    ),
    partNom   = document.getElementById("partNom"  ),
    partText  = document.getElementById("partText" );



if (coinFocus != null && curFocus == 0) {

partY.value = parseInt(coinFocus.style.top)    + "px";
partX.value = parseInt(coinFocus.style.left)   + "px";
partW.value = parseInt(coinFocus.style.width)  + "px";
partH.value = parseInt(coinFocus.style.height) + "px";

if (coinFocus.id) {
partNom.value = coinFocus.id;
} else {
partNom.value = "";
}

if (coinFocus.dataset.notes) {
partText.value = coinFocus.dataset.notes;
} else {
coinFocus.dataset.notes = "";
}

} else if (curFocus==1) {

partY.value    = parseInt(Cur.style.top) ;
partX.value   = parseInt(Cur.style.left);
partW.value  = 64                      ;
partH.value = 64                      ;
partNom.value   = "specialCursor"         ;
partText.value  = `This little special cursor does some small jobs, but it's capability is not yet fully utilized. What other interesting things might this cursor be used for?`;

}

/* THIS FUNCTION WILL BE INTERNAL BECAUSE IT IS ONLY CALLED TOGETHER WITH THIS ONE */


function highlightLayer() {
const tintMin  = 0.2,
      tintMax  = 0.65,
      tintStep = 0.05;
const layerArray = ["b_layer1", "c_layer2", "d_layer3", "e_layer4", "f_layer5", "g_layer6", "h_layer7", "i_layer8", "j_layer9", "k_layer10", "l_layer11", "m_layer12", "n_layer13", "o_layer14", "p_layer15", "q_layer16", "r_layer17", "s_layer18", "t_layer19", "u_layer20", "v_layer21", "w_layer22", "x_layer23", "y_layer24", "z_layer25"];
for (let j = 0; j < layerArray.length; j++) {
if (topLayer[layerArray[j]].b_content.innerHTML!="") {
let alphaValue = 0;
const parser = new DOMParser();
const doc = parser.parseFromString(topLayer[layerArray[j]].b_content.innerHTML, 'text/html');
         if ((tintMin + doc.body.children.length * tintStep) < tintMax) {
alphaValue = (tintMin + doc.body.children.length * tintStep)
} else {
alphaValue = tintMax;
}
ui["setLayer" + (j + 1)].ref.style.backgroundColor = "rgba(255,0,0," + alphaValue +")";
} else {
ui["setLayer" + (j + 1)].ref.style.backgroundColor = "transparent";
}
if (topLayer[layerArray[j]].a_name==topLayer.a_currentLayer) {
ui["setLayer" + (j + 1)].ref.style.borderRadius  = "4px";
ui["setLayer" + (j + 1)].ref.style.outlineOffset = "-5px";
ui["setLayer" + (j + 1)].ref.style.outline       = "3px double rgb(255,255,255)";
} else {
ui["setLayer" + (j + 1)].ref.style.outline = "";
}
}
}

highlightLayer();









function highlightButtonState() {
const layerArray = ["loadBase", "loadFocus", "loadHover", "loadActive", "loadFocusHover", "loadFocusActive"];
const layerArray2 = ["base", "focus", "hover", "active", "focusHover", "focusActive"];
for (let j = 0; j < layerArray.length; j++) {
if (sheetImages[layerArray2[j]].img&&sheetImages[layerArray2[j]].img.width!=0&&sheetImages[layerArray2[j]].img.height!=0) {
ui[layerArray[j]].ref.style.outline       = "2px dashed black";
ui[layerArray[j]].ref.style.outlineOffset = "-2px";
} else {
ui[layerArray[j]].ref.style.outline = "";
}


}
}

highlightButtonState();


}
