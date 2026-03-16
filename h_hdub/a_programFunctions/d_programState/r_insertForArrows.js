function insertForArrows() {
if (activeStateEdit) {

if (document.getElementById("statename").innerText == "none") {
popAccumulator(JSON.stringify([JSON.parse(document.getElementById(topLayer.a_currentLayer.replace(/._l/g, 'setL')).dataset.programState)]));

setTimeout(() => { try {
stateHolder = JSON.parse(document.getElementById(coinFocus.id).dataset.state);
document.getElementById("statename").innerText = coinFocus.id;
document.getElementById("stateFrame").innerText = currentStateNumber;
focusFlip();
} catch {
if (!(!!document.getElementById(document.getElementById("statename").innerText))) {
stateHolder = null;
document.getElementById("statename").innerText = "none";
document.getElementById("stateFrame").innerText = currentStateNumber;
currentStateNumber = 0; } }; }, 10);

buzzWord(0,'+NEW',128,'green',400,200,25,'top');

} else {
let newArray = [];
stateHolder  =
newArray.concat(
stateHolder.slice(0,currentStateNumber + 1),
stateHolder.slice(0,currentStateNumber + 1)[stateHolder.slice(0,currentStateNumber + 1).length - 1],
stateHolder.slice(currentStateNumber + 1,stateHolder.length));
setTimeout(() => { nextState(); }, 10);
buzzWord(0,'+',128,'magenta',400,200,25,'top');
}

return currentStateNumber;

}


}
