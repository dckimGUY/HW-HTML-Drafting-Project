function highlightLayer() {

const tintMin  = 0.2,
      tintMax  = 0.755,
      tintStep = 0.025;

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
document.getElementById("setLayer" + (j + 1)).style.backgroundColor = "rgba(255,0,0," + alphaValue +")";
} else {
document.getElementById("setLayer" + (j + 1)).style.backgroundColor = "transparent";
}


if (topLayer[layerArray[j]].a_name==topLayer.a_currentLayer) {
document.getElementById("setLayer" + (j + 1)).style.outline = "6px solid cyan";
} else {
document.getElementById("setLayer" + (j + 1)).style.outline = "";
}





}

}