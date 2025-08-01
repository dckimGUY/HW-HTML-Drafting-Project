function guideLayer(keyInfo) {

const
e      = keyInfo[0],
kC     = keyInfo[1],
cC     = keyInfo[2],
shift  = keyInfo[3],
ctrl   = keyInfo[4],
alt    = keyInfo[5];

let copyOfLayer = utilityLayer0.cloneNode(true);


for (let j = 0; j < copyOfLayer.children.length; j++) {
if(copyOfLayer.children[j]&&copyOfLayer.children[j].style) {
copyOfLayer.children[j].style.outline = fA;
}
}

utilityLayer1.innerHTML = copyOfLayer.innerHTML;
if (utilityLayer1.children.length>0) {
for (let j = 0; j < utilityLayer1.children.length; j++) {
const idSuffix = Date.now().toString();
utilityLayer1.children[j].id = 'coin' + idSuffix.slice(idSuffix.length - 5, idSuffix.length) + "_" + j.toString().padStart(3,"0");
utilityLayer1.children[j].dataset.jsName = utilityLayer1.children[j].id;
       if (showPartName==true) {
utilityLayer1.children[j].firstElementChild.innerText = utilityLayer1.children[j].id;
} else {
utilityLayer1.children[j].firstElementChild.innerText =                           "";
}
}
}
}
