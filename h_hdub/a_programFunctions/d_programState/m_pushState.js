function pushState(layerName) {


try {
const addState = JSON.parse(document.getElementById(layerName).dataset.programState);
topLayer.programStateAccumulator.push(addState);
buzzWord(0,'STATE',128,'magenta',200,200,25,'top','','');
} catch{}




}
