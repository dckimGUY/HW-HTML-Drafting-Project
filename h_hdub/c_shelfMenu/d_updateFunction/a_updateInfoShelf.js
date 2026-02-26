function updateInfoShelf() {






[
"save200",
"save300",
"save500",
"save800",
"save1000",
"save1200",
"save1500",
"save1800"
].forEach((save) => {
ui[save].ref.style.outline = "";
});

switch (lastFactor) {
case         "1" :  ui.save200.ref.style.outline = "4px dotted lime"; break;
case "(100/320)" :  ui.save300.ref.style.outline = "4px dotted lime"; break;
case "(100/500)" :  ui.save500.ref.style.outline = "4px dotted lime"; break;
case "(100/768)" :  ui.save800.ref.style.outline = "4px dotted lime"; break;
case "(100/1000)": ui.save1000.ref.style.outline = "4px dotted lime"; break;
case "(100/1280)": ui.save1200.ref.style.outline = "4px dotted lime"; break;
case "(100/1536)": ui.save1500.ref.style.outline = "4px dotted lime"; break;
case "(100/2000)": ui.save1800.ref.style.outline = "4px dotted lime"; break;
}


document.getElementById("headerText").value = fileHeader;
document.getElementById("footerText").value = fileFooter;


if (coinFocus!=null) {

if (ui.buttonLink.ref.value=="") {

ui.buttonTooltip.ref.value = "GOTO >> " + coinFocus.id;

}





document.getElementById("partCode").value = coinFocus.lastElementChild.firstElementChild.nextElementSibling.innerHTML;
}
















topLayer[topLayer.a_currentLayer].b_content.innerHTML = utilityLayer0.innerHTML;

ui.snapGridIncrement.ref.value = T;

if (coinFocus!=null&&coinFocus.dataset.notes) {
ui.partText.ref.value  = coinFocus.dataset.notes;
} else {
ui.partText.ref.value  = "";
}

ui.partText.ref.style.outline = "";
try {
JSON.parse(ui.partText.ref.value);
} catch {
ui.partText.ref.style.outline = "2px dashed red";
}

let filenameEntryLayers = document.getElementById("coin77671");
filenameEntryLayers.value = filename;

ui.levelNotes.ref.value  = topLayer[topLayer.a_currentLayer].h_notes;
ui.pageDescription.ref.value  = topLayer[topLayer.a_currentLayer].d_description;
ui.projectName.ref.value = topLayer.aa_project_name;

let partY     = document.getElementById("partY"    ),
    partX     = document.getElementById("partX"    ),
    partW     = document.getElementById("partW"    ),
    partH     = document.getElementById("partH"    ),
    partNom   = document.getElementById("partNom"  ),
    partText  = document.getElementById("partText" );



if (coinFocus != null && curFocus == 0) {

partY.value = parseInt(coinFocus.style.top)    ;
partX.value = parseInt(coinFocus.style.left)   ;
partW.value = parseInt(coinFocus.style.width)  ;
partH.value = parseInt(coinFocus.style.height) ;

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
partText.value  = `What does that special cursor even do?`;

}

/* THIS FUNCTION WILL BE INTERNAL BECAUSE IT IS ONLY CALLED TOGETHER WITH THIS ONE */


function highlightLayer() {
const tintMin  = 0.2,
      tintMax  = 0.65,
      tintStep = 0.05;
const layerArray = ["b_layer1", "c_layer2", "d_layer3", "e_layer4", "f_layer5", "g_layer6", "h_layer7", "i_layer8", "j_layer9", "k_layer10", "l_layer11", "m_layer12", "n_layer13", "o_layer14", "p_layer15", "q_layer16", "r_layer17", "s_layer18", "t_layer19", "u_layer20", "v_layer21", "w_layer22", "x_layer23", "y_layer24", "z_layer25"];

for (let j = 0; j < layerArray.length; j++) {


let nameList = topLayer[layerArray[j]].filename + " =\n[";
for (let i = 0; i < topLayer[layerArray[j]].b_content.children.length; i++) {
nameList += '\n"' + topLayer[layerArray[j]].b_content.children[i].id + '"';
if (i != topLayer[layerArray[j]].b_content.children.length - 1) {
nameList += ',';
}
}
nameList += "\n];";

ui["setLayer" + (j + 1)].ref.setAttribute("title", nameList);

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

}



