function toggleActiveStateEdit() {
       if (activeStateEdit == false) {
           activeStateEdit  = true;
if (stateHolder == null) { insertForArrows(); }
try { setState(document.getElementById("statename").innerText,currentStateNumber); } catch {  }
document.getElementById("activeStateEdit").style.outline = "2px dotted lime";
document.getElementById("activeStateEdit").style.backgroundColor = "rgba(255, 0, 0, 0.5)";

document.getElementById("leftBumper").style.outline = "0.3vw dashed red";
document.getElementById("leftBumper").style.outlineOffset = "-0.3vw";
document.getElementById("leftBumper").lastElementChild.style.color = "black";



buzzWord(0,'<sup>ACTIVATED</sup>',96,'cyan',200,200,25,'top','','',event);
} else if (activeStateEdit == true) {
           activeStateEdit = false;
document.getElementById("activeStateEdit").style.outline = "";
document.getElementById("activeStateEdit").style.backgroundColor = "transparent";

document.getElementById("leftBumper").style.outline = "";
document.getElementById("leftBumper").lastElementChild.style.color = "magenta";

buzzWord(0,'<sup>DISABLED</sup>',96,'red',200,200,25,'top','','',event);
}
}
