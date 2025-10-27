function layerLeft() {

if (topLayer.a_currentLayer!="localView") {

const layerArray = ["b_layer1", "c_layer2", "d_layer3", "e_layer4", "f_layer5", "g_layer6", "h_layer7", "i_layer8", "j_layer9", "k_layer10", "l_layer11", "m_layer12", "n_layer13", "o_layer14", "p_layer15", "q_layer16", "r_layer17", "s_layer18", "t_layer19", "u_layer20", "v_layer21", "w_layer22", "x_layer23", "y_layer24", "z_layer25"];

let newLayer = null;

for (let j = 1; j < layerArray.length; j++) {
if (topLayer.a_currentLayer==layerArray[j]&&j!=0) {

newLayer = layerArray[j-1];

}
}

if (newLayer!=null) {
makeTopLayer(newLayer);
}

updateInfoShelf();
redraw();

}

}
