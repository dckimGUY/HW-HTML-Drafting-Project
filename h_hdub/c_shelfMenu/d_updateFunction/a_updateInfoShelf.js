
function updateInfoShelf() {




if (coinFocus != null && coinFocus.style.filter != "none") {


let filt = coinFocus.style.filter.replace(/[^ 0-9.]/g, "").split(" ");
document.getElementById("filterBrightness").value = filt[0];
document.getElementById("filterContrast").value   = filt[1];
document.getElementById("filterIntensity").value  = filt[2];
document.getElementById("filterGrayscale").value  = filt[3];
document.getElementById("filterAntique").value    = filt[4];
document.getElementById("filterInvert").value     = filt[5];
document.getElementById("filterOpacity").value    = filt[6];
if (filt.length == 8) {
document.getElementById("filterBlur").value       = filt[7];
} else {
document.getElementById("filterBlur").value       =       0;
}
}

















if (coinFocus != null) { document.getElementById("classListEntry").value = coinFocus.lastElementChild.lastElementChild.previousElementSibling.classList.toString(); }




updateState();







[
"save200",
"save300",
"save500",
"save800",
"save1000",
"save1200",
"save1500",
"save1800"
].forEach((save) => {
ui[save].ref.style.outline = "";
});

switch (lastFactor) {
case         "1" :  ui.save200.ref.style.outline = "4px dotted lime"; break;
case "(100/500)" :  ui.save500.ref.style.outline = "4px dotted lime"; break;
case "(100/768)" :  ui.save800.ref.style.outline = "4px dotted lime"; break;
case "(100/1000)": ui.save1000.ref.style.outline = "4px dotted lime"; break;
case "(100/1280)": ui.save1200.ref.style.outline = "4px dotted lime"; break;
case "(100/1536)": ui.save1500.ref.style.outline = "4px dotted lime"; break;
case "(100/2000)": ui.save1800.ref.style.outline = "4px dotted lime"; break;
default          :  ui.save300.ref.style.outline = "4px dotted lime"; break;
}


document.getElementById("headerText").value = fileHeader;
document.getElementById("footerText").value = fileFooter;


if (coinFocus!=null) {

if (ui.buttonLink.ref.value=="") {

ui.buttonTooltip.ref.value = "GOTO >> " + coinFocus.id;

}



if (
coinFocus.lastElementChild.lastElementChild.previousElementSibling.firstElementChild &&
coinFocus.lastElementChild.lastElementChild.previousElementSibling.firstElementChild.tagName == "BUTTON"
) {
ui.partCode.ref.value = coinFocus.lastElementChild.lastElementChild.previousElementSibling.firstElementChild.getAttribute("onclick");
} else {
ui.partCode.ref.value = coinFocus.lastElementChild.lastElementChild.previousElementSibling.getAttribute("onclick");
}

/*
if (
coinFocus.lastElementChild.lastElementChild.previousElementSibling.firstElementChild &&
coinFocus.lastElementChild.lastElementChild.previousElementSibling.firstElementChild.tagName == "IMG"
) {
ui.partCode.ref.value = coinFocus.lastElementChild.lastElementChild.previousElementSibling.firstElementChild.src;
}

*/


}
















topLayer[topLayer.a_currentLayer].b_content.innerHTML = utilityLayer0.innerHTML;

ui.snapGridIncrement.ref.value = T;

if (coinFocus!=null&&coinFocus.dataset.notes) {
ui.partText.ref.value  = coinFocus.dataset.notes;
} else {
ui.partText.ref.value  = "";
}

ui.partText.ref.style.outline = "";
try {
JSON.parse(ui.partText.ref.value);
} catch {
ui.partText.ref.style.outline = "2px dashed red";
}

let filenameEntryLayers = document.getElementById("coin77671");
filenameEntryLayers.value = filename;

ui.levelNotes.ref.value  = topLayer[topLayer.a_currentLayer].h_notes;
ui.pageDescription.ref.value  = topLayer[topLayer.a_currentLayer].d_description;
ui.projectName.ref.value = topLayer.aa_project_name;

let partY     = document.getElementById("partY"    ),
    partX     = document.getElementById("partX"    ),
    partW     = document.getElementById("partW"    ),
    partH     = document.getElementById("partH"    ),
    partNom   = document.getElementById("partNom"  ),
    partText  = document.getElementById("partText" );



if (coinFocus != null && curFocus == 0) {

partY.value = parseInt(coinFocus.style.top)    ;
partX.value = parseInt(coinFocus.style.left)   ;
partW.value = parseInt(coinFocus.style.width)  ;
partH.value = parseInt(coinFocus.style.height) ;

if (coinFocus.id) {
partNom.value = coinFocus.id;
} else {
partNom.value = "";
}

if (coinFocus.dataset.notes) {
partText.value = coinFocus.dataset.notes;
} else {
coinFocus.dataset.notes = "";
}

} else if (curFocus==1) {

partY.value    = parseInt(Cur.style.top) ;
partX.value   = parseInt(Cur.style.left);
partW.value  = 64                      ;
partH.value = 64                      ;
partNom.value   = "specialCursor"         ;
partText.value  = `What does that special cursor even do?`;

}









try {
document.getElementById("accumulatorCount").innerText = topLayer.programStateAccumulator.length;
} catch {
document.getElementById("accumulatorCount").innerText = "0";
}
















highlightLayer();

}



