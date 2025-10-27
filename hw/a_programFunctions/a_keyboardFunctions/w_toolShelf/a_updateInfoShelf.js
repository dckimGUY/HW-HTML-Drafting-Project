function updateInfoShelf() {


topLayer[topLayer.a_currentLayer].b_content.innerHTML = utilityLayer0.innerHTML;

let filenameEntrySaves  = document.getElementById("filenameEntrySaves" ),
    filenameEntryLayers = document.getElementById("filenameEntryLayers");

filenameEntrySaves.value  = filename;
filenameEntryLayers.value = filename;

let partTop    = document.getElementById("partTop"   ),
    partLeft   = document.getElementById("partLeft"  ),
    partWidth  = document.getElementById("partWidth" ),
    partHeight = document.getElementById("partHeight"),
    partName   = document.getElementById("partName"  ),
    partNotes  = document.getElementById("partNotes" );



if (coinFocus != null && curFocus == 0) {

partTop.value    = parseInt(coinFocus.style.top)   ;
partLeft.value   = parseInt(coinFocus.style.left)  ;
partWidth.value  = parseInt(coinFocus.style.width) ;
partHeight.value = parseInt(coinFocus.style.height);

if (coinFocus.id) {
partName.value = coinFocus.id;
} else {
partName.value = "";
}

if (coinFocus.dataset.notes) {
partNotes.value = coinFocus.dataset.notes;
} else {
coinFocus.dataset.notes = "";
partNotes.value = coinFocus.dataset.notes;
}

} else if (curFocus==1) {

partTop.value    = parseInt(Cur.style.top) ;
partLeft.value   = parseInt(Cur.style.left);
partWidth.value  = 64                      ;
partHeight.value = 64                      ;
partName.value   = "specialCursor"         ;
partNotes.value  = `This little special cursor does some small jobs, but it's capability is not yet fully utilized. What other interesting things might this cursor be used for?`;

}

highlightLayer();

}