function changeLayer(chosenLayer) {
if (
topLayer.a_currentLayer != "importer" &&
topLayer.a_currentLayer != "thePhantomLair" &&
topLayer.a_currentLayer != "localView"
) {
makeTopLayer(chosenLayer);
}
}