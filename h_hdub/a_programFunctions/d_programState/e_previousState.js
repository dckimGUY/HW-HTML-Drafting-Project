function previousState() {

currentStateNumber--;

if (currentStateNumber < 0) {
    currentStateNumber = 0;
}

setState(document.getElementById("statename").innerText,currentStateNumber);

document.getElementById("stateFrame").innerText = currentStateNumber;
document.getElementById("frameNumber1").lastElementChild.innerText = currentStateNumber;
if (coinFocus != null) { document.getElementById("classListEntry").value = coinFocus.lastElementChild.lastElementChild.previousElementSibling.classList.toString(); }
return currentStateNumber;
}
