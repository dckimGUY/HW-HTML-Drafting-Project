function toggleActiveStateEdit() {
       if (activeStateEdit == false) {
           activeStateEdit  = true;
try { setState(document.getElementById("statename").innerText,currentStateNumber); } catch {  }
document.getElementById("activeStateEdit").style.outline = "2px dotted lime";
buzzWord(0,'<sup>ACTIVATED</sup>',96,'cyan',200,200,25,'top','','',event);
} else if (activeStateEdit == true) {
           activeStateEdit = false;
document.getElementById("activeStateEdit").style.outline = "";
buzzWord(0,'<sup>DISABLED</sup>',96,'red',200,200,25,'top','','',event);
}
}
