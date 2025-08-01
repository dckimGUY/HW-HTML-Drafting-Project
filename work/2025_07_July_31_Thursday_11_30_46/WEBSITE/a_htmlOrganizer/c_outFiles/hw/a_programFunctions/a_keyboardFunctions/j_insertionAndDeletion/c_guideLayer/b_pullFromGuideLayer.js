function pullFromGuideLayer(keyInfo) {

const
e      = keyInfo[0],
kC     = keyInfo[1],
cC     = keyInfo[2],
shift  = keyInfo[3],
ctrl   = keyInfo[4],
alt    = keyInfo[5];

if (utilityLayer1.children.length>0) {
for (let j = 0; j < utilityLayer1.children.length; j++) {
utilityLayer0.appendChild(utilityLayer1.children[j].cloneNode(true));
}

utilityLayer1.innerHTML =  "";

readCoins();
coinFocus=utilityLayer0.children[utilityLayer0.children.length - 1];
curFocus=0;
recoverColouration();
coinFocus.style.outline = fB;

}






}
