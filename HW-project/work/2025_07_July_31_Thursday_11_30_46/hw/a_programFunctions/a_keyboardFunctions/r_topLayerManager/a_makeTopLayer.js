function makeTopLayer(chosenLayer) {

if (coinFocus!=null) {
topLayer[topLayer.a_currentLayer].e_coinFocus = coinFocus.id;
} else {
topLayer[topLayer.a_currentLayer].e_coinFocus = null;
}

if (coinFocus1!=null) {
topLayer[topLayer.a_currentLayer].f_coinFocus = coinFocus1.id;
} else {
topLayer[topLayer.a_currentLayer].f_coinFocus = null;
}


topLayer[topLayer.a_currentLayer].b_content.innerHTML = utilityLayer0.innerHTML;

topLayer[topLayer.a_currentLayer].filename = filename;

topLayer[topLayer.a_currentLayer].echelon = pageEchelon / 100000000;


utilityLayer0.innerHTML = topLayer[chosenLayer].b_content.innerHTML;

filename = topLayer[chosenLayer].filename;

pageEchelon = topLayer[chosenLayer].echelon * 100000000;

topLayer.a_currentLayer = topLayer[chosenLayer].a_name;
layerName = topLayer[chosenLayer].g_layerTitle;

Z();


if (topLayer[topLayer.a_currentLayer].e_coinFocus!=null) {
coinFocus = document.getElementById(topLayer[topLayer.a_currentLayer].e_coinFocus);
} else {
coinFocus = null;
}

if (topLayer[topLayer.a_currentLayer].f_coinFocus1!=null) {
coinFocus1 = document.getElementById(topLayer[topLayer.a_currentLayer].f_coinFocus1);
} else {
coinFocus1 = null;
}


document.getElementById("documentTitle").innerText = filename;


readCoins();
recoverColouration();
if (coinFocus!=null) {
coinFocus.style.outline = fB;
}

if (coinFocus==null) { curFocus = 1; } else { curFocus = 0; }

}