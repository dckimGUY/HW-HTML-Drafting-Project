function lastState() {
try {
currentStateNumber = stateHolder.length - 1;
} catch {
currentStateNumber = 0;
}

setState(document.getElementById("statename").innerText,currentStateNumber);

document.getElementById("stateFrame").innerText = currentStateNumber;
if (coinFocus != null) { document.getElementById("classListEntry").value = coinFocus.lastElementChild.lastElementChild.previousElementSibling.classList.toString(); }

return currentStateNumber;
}
