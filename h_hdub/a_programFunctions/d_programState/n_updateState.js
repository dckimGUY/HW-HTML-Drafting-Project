function updateState() {

try {
stateHolder = JSON.parse(document.getElementById(coinFocus.id).dataset.state);
document.getElementById("statename" ).innerText = coinFocus.id;
document.getElementById("stateFrame").innerText = currentStateNumber;
} catch {
if (!(!!document.getElementById(document.getElementById("statename").innerText))) {
stateHolder = null;
document.getElementById("statename").innerText = "none";
document.getElementById("stateFrame").innerText = currentStateNumber;
currentStateNumber = 0;
}
};

}
