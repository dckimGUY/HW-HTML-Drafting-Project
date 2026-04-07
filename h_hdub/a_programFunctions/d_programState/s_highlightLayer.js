

function runUpdate() {
const layerArray = ["b_layer1", "c_layer2", "d_layer3", "e_layer4", "f_layer5", "g_layer6", "h_layer7", "i_layer8", "j_layer9", "k_layer10", "l_layer11", "m_layer12", "n_layer13", "o_layer14", "p_layer15", "q_layer16", "r_layer17", "s_layer18", "t_layer19", "u_layer20", "v_layer21", "w_layer22", "x_layer23", "y_layer24", "z_layer25"];

const timeStamp = Date.now().toString().slice(-5);
for (let j = 0; j < layerArray.length; j++) {
let programState       = {};
    programState.ids   = [];
    programState.dat   = {};
    programState.page  = {};
    programState.page.title = topLayer[layerArray[j]].filename;
    programState.page.level = topLayer[layerArray[j]].g_layerTitle;
    programState.page.desc  = topLayer[layerArray[j]].d_description;

for (let i = 0; i < topLayer[layerArray[j]].b_content.children.length; i++) {
    programState.ids[programState.ids.length] = topLayer[layerArray[j]].b_content.children[i].id;
    programState.dat[topLayer[layerArray[j]].b_content.children[i].id] = {};
    programState.dat[topLayer[layerArray[j]].b_content.children[i].id].style = {};

programState.dat[topLayer[layerArray[j]].b_content.children[i].id].id = topLayer[layerArray[j]].b_content.children[i].id;




const styleFirst    = [ "filter", "top", "left", "width", "height", "zIndex" ];
const styleLast     = [ "transform", "transformOrigin", "scale", "opacity", "outline", "outlineOffset", "borderRadius", "boxShadow" ];
const styleLastLast = [ "backgroundColor", "padding", "color", "textShadow", "fontSize", "fontWeight", "fontStyle", "fontVariant", "fontFamily", "textAlign", "wordSpacing", "letterSpacing", "lineHeight", "textIndent" ];

for (y of styleFirst   ) { programState.dat[topLayer[layerArray[j]].b_content.children[i].id].style[y] = topLayer[layerArray[j]].b_content.children[i].style[y]; }
for (y of styleLast    ) { programState.dat[topLayer[layerArray[j]].b_content.children[i].id].style[y] = topLayer[layerArray[j]].b_content.children[i].lastElementChild.style[y]; }
for (y of styleLastLast) { programState.dat[topLayer[layerArray[j]].b_content.children[i].id].style[y] = topLayer[layerArray[j]].b_content.children[i].lastElementChild.firstElementChild.style[y]; }




}
if (topLayer[layerArray[j]].b_content.children.length > 0) {
ui["setLayer" + (j + 1)].ref.dataset.programState = JSON.stringify(programState);
} else {
ui["setLayer" + (j + 1)].ref.dataset.programState = "";
}
}


}










function highlightLayer() {
const tintMin  = 0.2,
      tintMax  = 0.65,
      tintStep = 0.05;
const layerArray = ["b_layer1", "c_layer2", "d_layer3", "e_layer4", "f_layer5", "g_layer6", "h_layer7", "i_layer8", "j_layer9", "k_layer10", "l_layer11", "m_layer12", "n_layer13", "o_layer14", "p_layer15", "q_layer16", "r_layer17", "s_layer18", "t_layer19", "u_layer20", "v_layer21", "w_layer22", "x_layer23", "y_layer24", "z_layer25"];

const timeStamp = Date.now().toString().slice(-5);


runUpdate();


for (let j = 1; j < 21; j++) {


if (topLayer[topLayer.a_currentLayer].g_layerTitle == j) {
document.getElementById("LVL" + j).style.backgroundColor = "rgba(0,255,0,1)";
document.getElementById("LVL" + j).style.zIndex  = "999999999";
} else {
document.getElementById("LVL" + j).style.backgroundColor = "transparent";
document.getElementById("LVL" + j).style.zIndex  =   "0";
}



}


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





















