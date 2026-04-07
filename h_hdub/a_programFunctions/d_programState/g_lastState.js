function lastState() {
try {
currentStateNumber = stateHolder.length - 1;
} catch {
currentStateNumber = 0;
}

setState(document.getElementById("statename").innerText,currentStateNumber);

document.getElementById("stateFrame").innerText = currentStateNumber;
document.getElementById("frameNumber1").lastElementChild.innerText = currentStateNumber;
if (coinFocus != null) { document.getElementById("classListEntry").value = coinFocus.lastElementChild.firstElementChild.classList.toString(); }

return currentStateNumber;
}
