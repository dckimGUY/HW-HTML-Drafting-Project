function activeUpdate() {

if (activeStateEdit == true) {
try {
const newEntry = JSON.parse(document.getElementById(topLayer.a_currentLayer.replace(/._l/g, 'setL')).dataset.programState);
stateHolder[currentStateNumber] = newEntry;
document.getElementById(document.getElementById("statename").innerText).dataset.state = JSON.stringify(stateHolder);
} catch {}
}

}
