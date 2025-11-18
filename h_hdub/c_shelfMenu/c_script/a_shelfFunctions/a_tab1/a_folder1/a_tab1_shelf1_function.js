ui.xrayGrey.click                = function() { if (xrayVision=="true") { xrayVision="false"; localStorage.setItem("xrayVision", "false"); } else { xrayVision="true"; localStorage.setItem("xrayVision", "true"); } };
ui.xrayMagenta.click             = function() { if (xrayVision=="true") { xrayVision="false"; localStorage.setItem("xrayVision", "false"); } else { xrayVision="true"; localStorage.setItem("xrayVision", "true"); } };
ui.xrayCyan.click                = function() { if (xrayVision=="true") { xrayVision="false"; localStorage.setItem("xrayVision", "false"); } else { xrayVision="true"; localStorage.setItem("xrayVision", "true"); } };

ui.partY.input                   = function() { 
if (ui.partY.ref.value.includes("j")) { 
ui.partY.ref.value = ui.partY.ref.value.replace(/j/g, "");
ui.partX.ref.focus(); redraw(); return; 
} else if (ui.partY.ref.value.includes("k")) { 
ui.partY.ref.value = ui.partY.ref.value.replace(/k/g, "");
ui.partH.ref.focus(); redraw(); return; 
} else if (ui.partY.ref.value.includes("\n")) { 
ui.partY.ref.value = ui.partY.ref.value.replace(/\n/g, "");
ui.partNom.ref.focus(); redraw(); return; 
}    
inputPartNav("partY");
if (coinFocus!=null) {
coinFocus.style.top = parseInt(ui.partY.ref.value) + "px";
coinFocus.dataset.top = parseInt(ui.partY.ref.value) + "px";
redraw();
}
};

ui.partX.input                   = function() { 
if (ui.partX.ref.value.includes("j")) { 
ui.partX.ref.value = ui.partX.ref.value.replace(/j/g, "");
ui.partW.ref.focus(); redraw(); return; 
} else if (ui.partX.ref.value.includes("k")) { 
ui.partX.ref.value = ui.partX.ref.value.replace(/k/g, "");
ui.partY.ref.focus(); redraw(); return; 
}
inputPartNav("partX");
if (coinFocus!=null) {
coinFocus.style.left = parseInt(ui.partX.ref.value) + "px";
coinFocus.dataset.left = parseInt(ui.partX.ref.value) + "px";
redraw();
}
};


ui.partW.input                   = function() {

if (ui.partW.ref.value.includes("j")) { 
ui.partW.ref.value = ui.partW.ref.value.replace(/j/g, "");
ui.partH.ref.focus(); redraw(); return; 
} else if (ui.partW.ref.value.includes("k")) { 
ui.partW.ref.value = ui.partW.ref.value.replace(/k/g, "");
ui.partX.ref.focus(); redraw(); return; 
}
inputPartNav("partW");
if (coinFocus!=null) {
coinFocus.style.width = parseInt(ui.partW.ref.value) + "px";
coinFocus.dataset.width = parseInt(ui.partW.ref.value) + "px";
redraw();
}
};



ui.partH.input                   = function() {



if (ui.partH.ref.value.includes("j")) { 
ui.partH.ref.value = ui.partH.ref.value.replace(/j/g, "");
ui.partY.ref.focus(); redraw(); return; 
} else if (ui.partH.ref.value.includes("k")) { 
ui.partH.ref.value = ui.partH.ref.value.replace(/k/g, "");
ui.partW.ref.focus(); redraw(); return; 
}
inputPartNav("partH");
if (coinFocus!=null) {
coinFocus.style.height = parseInt(ui.partH.ref.value) + "px";
coinFocus.dataset.height = parseInt(ui.partH.ref.value) + "px";
redraw();
}
};




ui.cursorAuto.click              = function() { useCustomCursors = false;                               cursorSetup(); };
ui.cursorXS.click                = function() { useCustomCursors = true ; cursorSet = cursorSize[0][0]; cursorSetup(); };
ui.cursorS.click                 = function() { useCustomCursors = true ; cursorSet = cursorSize[1][0]; cursorSetup(); };
ui.cursorM.click                 = function() { useCustomCursors = true ; cursorSet = cursorSize[2][0]; cursorSetup(); };
ui.cursorL.click                 = function() { useCustomCursors = true ; cursorSet = cursorSize[3][0]; cursorSetup(); };
ui.cursorXL.click                = function() { useCustomCursors = true ; cursorSet = cursorSize[4][0]; cursorSetup(); };
ui.cursorNum.click               = function() {  };
ui.partNom.input                 = function() { inputPartNav("partNom"); if (coinFocus != null && curFocus ==0) { coinFocus.id = ui.partNom.ref.value; } };
ui.partPrev.click                = function() { focusPrevious(); updateInfoShelf(); redraw(); };
ui.partNext.click                = function() { focusNext();     updateInfoShelf(); redraw(); };
ui.partText.input                = function() { if (curFocus==0&&coinFocus!=null) { coinFocus.dataset.notes = ui.partText.ref.value; } };
ui.pathEntry.input               = function() { ui.pathEntry.ref.value = ui.pathEntry.ref.value.replace(/\\/g, "/"); hdub_imagePath = ui.pathEntry.ref.value; localStorage.setItem("hdub_imagePath", hdub_imagePath); };


 

function inputPartNav(inputBoxName) {

/* CYCLE THROUGH THE PARTS (LEFT AND RIGHT) */
       if (ui[inputBoxName].ref.value.includes(".")) { 
ui[inputBoxName].ref.value = ui[inputBoxName].ref.value.replace(/./g, "");
focusNext();updateInfoShelf();redraw();ui[inputBoxName].ref.select();

} else if (ui[inputBoxName].ref.value.includes(",")) { 
ui[inputBoxName].ref.value = ui[inputBoxName].ref.value.replace(/,/g, "");
focusPrevious();updateInfoShelf();redraw();ui[inputBoxName].ref.select();

/* SAME FROM THE NUMBER-PAD */
} else if (ui[inputBoxName].ref.value.includes("*")) { 
ui[inputBoxName].ref.value = ui[inputBoxName].ref.value.replace(/\*/g, "");
focusNext();updateInfoShelf();redraw();ui[inputBoxName].ref.select();
} else if (ui[inputBoxName].ref.value.includes("/")) { 
ui[inputBoxName].ref.value = ui[inputBoxName].ref.value.replace(/\//g, "");
focusPrevious();updateInfoShelf();redraw();ui[inputBoxName].ref.select();

/* CYCLE THROUGH THE PARTS (FIRST AND LAST) */
} else if (ui[inputBoxName].ref.value.includes("$")) { 
ui[inputBoxName].ref.value = ui[inputBoxName].ref.value.replace(/$/g, "");
focusLast();updateInfoShelf();redraw();ui[inputBoxName].ref.select();
} else if (ui[inputBoxName].ref.value.includes("^")) { 
ui[inputBoxName].ref.value = ui[inputBoxName].ref.value.replace(/^/g, "");
focusFirst();updateInfoShelf();redraw();ui[inputBoxName].ref.select();
} else if (ui[inputBoxName].ref.value.includes("|")) { 
ui[inputBoxName].ref.value = ui[inputBoxName].ref.value.replace(/|/g, "");
focusFirst();updateInfoShelf();redraw();ui[inputBoxName].ref.select();

/* CYCLE THOUGH THE LAYERS (LEFT AND RIGHT) */
} else if (ui[inputBoxName].ref.value.includes("<")) { 
ui[inputBoxName].ref.value = ui[inputBoxName].ref.value.replace(/</g, "");
layerLeft();updateInfoShelf();redraw();ui[inputBoxName].ref.select();
} else if (ui[inputBoxName].ref.value.includes(">")) { 
ui[inputBoxName].ref.value = ui[inputBoxName].ref.value.replace(/>/g, "");
layerRight();updateInfoShelf();redraw();ui[inputBoxName].ref.select();

}





}
