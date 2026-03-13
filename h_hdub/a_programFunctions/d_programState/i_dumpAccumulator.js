function dumpAccumulator() {
if (topLayer.programStateAccumulator.length == 0) { return; };
popAccumulator(JSON.stringify(topLayer.programStateAccumulator));
buzzWord(0,'DATA',128,'orange',200,200,25,'top','','',event);
}
