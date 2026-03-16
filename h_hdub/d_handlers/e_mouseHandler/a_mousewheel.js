if (localStorage.getItem("animatorTiming")) {
document.getElementById("animationTiming").value = localStorage.getItem("animatorTiming");
}


if (localStorage.getItem("stateTiming")) {
document.getElementById("stateTiming").innerText = parseInt(localStorage.getItem("stateTiming"));
}



if (localStorage.getItem("navUpscale")) {
document.getElementById("navUpscale").innerText = localStorage.getItem("navUpscale");
}




document.addEventListener("mousewheel", (event) => {


if (coinFocus != null) {
coinFocus.lastElementChild.lastElementChild.previousElementSibling = coinFocus.lastElementChild.lastElementChild.previousElementSibling;
}





for (let j = 1; j < 21; j++) {
if (event.target.id == `LVL${j}`) {
event.preventDefault(); event.stopPropagation();
       if (event.wheelDelta > 0) {
layerRight();
} else if (event.wheelDelta < 0) {
layerLeft();
}
loadSidebar1();
}
}







[
"popStyle1",
"popStyle2",
"popStyle3",
"activeStateEdit",
"statename",
"stateFrame",
"firstFrame",
"stateFrameLeft",
"stateFrameRight",
"lastFrame",
"stateCodeCopy",
"codeOutput",
"folder51",
"stateDel",
"stateIns",
"animatorBar",
"frameNumber1",
"frameBackward",
"frameForward",
"skipBack",
"skipAhead",
"skipToStart",
"skipToEnd",
"leftBumper",
"rightBumper"

].forEach((name) => {
if (event.target.id == name) {
event.preventDefault();
event.stopPropagation();
if (!event.shiftKey) {
       if (event.wheelDelta > 0) { nextState();
} else if (event.wheelDelta < 0) { previousState();
}
} else {
       if (event.wheelDelta > 0) { for (let j = 0; j < 5; j++) { nextState(); };
} else if (event.wheelDelta < 0) { for (let j = 0; j < 5; j++) { previousState(); };
}
}
return;
}
});




if (event.target.id == "stateTiming") {
event.preventDefault();
event.stopPropagation();
let increment = event.shiftKey && !event.ctrlKey ? 100 : 10;
if (event.ctrlKey) { increment = 1; }
if (event.wheelDelta > 0) {
document.getElementById("stateTiming").innerText = parseInt(document.getElementById("stateTiming").innerText) + increment;
} else if (event.wheelDelta < 0) {
document.getElementById("stateTiming").innerText = parseInt(document.getElementById("stateTiming").innerText) - increment;
}
if (parseInt(document.getElementById("stateTiming").innerText) < 0) { document.getElementById("stateTiming").innerText = 0; }
localStorage.setItem("stateTiming", parseInt(document.getElementById("stateTiming").innerText));
return;
}



if (localStorage.getItem("stateTiming")) {
document.getElementById("stateTiming").innerText = localStorage.getItem("stateTiming");
}









if (event.target.id == "hdubOverlay" || (event.target.dataset && event.target.dataset.hdubOverlay == "scroll")) {
event.preventDefault();
event.stopPropagation();
if (event.wheelDelta > 0) {
ui.hdubSheetTemplate4x.ref.value++;displayDemo();
switch (document.getElementById("hdubSheetTemplate4x").value) {
case '1': buzzWord(0,"10x",512,document.getElementById("coin72275").value,400,300,100,"center"); break;
case '2': buzzWord(0, "8x",512,document.getElementById("coin72275").value,400,300,100,"center"); break;
case '3': buzzWord(0, "6x",512,document.getElementById("coin72275").value,400,300,100,"center"); break;
case '4': buzzWord(0, "5x",512,document.getElementById("coin72275").value,400,300,100,"center"); break;
}
} else if (event.wheelDelta < 0) {
ui.hdubSheetTemplate4x.ref.value--;displayDemo();
switch (document.getElementById("hdubSheetTemplate4x").value) {
case '1': buzzWord(0,"10x",512,document.getElementById("coin72275").value,400,300,100,"center"); break;
case '2': buzzWord(0, "8x",512,document.getElementById("coin72275").value,400,300,100,"center"); break;
case '3': buzzWord(0, "6x",512,document.getElementById("coin72275").value,400,300,100,"center"); break;
case '4': buzzWord(0, "5x",512,document.getElementById("coin72275").value,400,300,100,"center"); break;
}
}








} else if (event.target == document.getElementById("siteMapCanvas")) {



event.preventDefault();
event.stopPropagation();

       if (event.wheelDelta > 0) {
zoomSiteMapIn();
} else if (event.wheelDelta < 0) {
zoomSiteMapOut();
}

drawSiteMap();















} else if (event.target == document.getElementById("navUpscale")) {
event.preventDefault();
event.stopPropagation();
if (event.wheelDelta > 0) {
document.getElementById("navUpscale").innerText = parseInt(document.getElementById("navUpscale").innerText) + 1;
} else if (event.wheelDelta < 0) {
document.getElementById("navUpscale").innerText = parseInt(document.getElementById("navUpscale").innerText) - 1;
}
if (parseInt(document.getElementById("navUpscale").innerText) < 1) {
document.getElementById("navUpscale").innerText = 1;
}
if (parseInt(document.getElementById("navUpscale").innerText) > 100) {
document.getElementById("navUpscale").innerText = 100;
}

localStorage.setItem("navUpscale", document.getElementById("navUpscale").innerText);







} else if (event.target == document.getElementById("partY")) {
event.preventDefault(); event.stopPropagation();
if ( event.shiftKey&& event.ctrlKey) {
       if (event.wheelDelta > 0) { ui.partY.ref.value =
                 parseInt(parseInt(ui.partY.ref.value) - mouseIncrement);
} else if (event.wheelDelta < 0) { ui.partY.ref.value =
                 parseInt(parseInt(ui.partY.ref.value) + mouseIncrement);
}                              if (ui.partY.ref.value  < mouseIncrement)
                                 { ui.partY.ref.value  = mouseIncrement; } } else if (!event.shiftKey&& event.ctrlKey) {
       if (event.wheelDelta > 0) { ui.partY.ref.value =
                 parseInt(parseInt(ui.partY.ref.value) - T);
} else if (event.wheelDelta < 0) { ui.partY.ref.value =
                 parseInt(parseInt(ui.partY.ref.value) + T);
}                              if (ui.partY.ref.value  < T)
                                 { ui.partY.ref.value  = T; } } else if (!event.shiftKey&&!event.ctrlKey) {
       if (event.wheelDelta > 0) { ui.partY.ref.value =
                 parseInt(parseInt(ui.partY.ref.value) - 2);
} else if (event.wheelDelta < 0) { ui.partY.ref.value =
                 parseInt(parseInt(ui.partY.ref.value) + 2);
}                              if (ui.partY.ref.value  < 2)
                                 { ui.partY.ref.value  = 2; } } else if ( event.shiftKey&&!event.ctrlKey) {
       if (event.wheelDelta > 0) { ui.partY.ref.value =
                 parseInt(parseInt(ui.partY.ref.value) - 1);
} else if (event.wheelDelta < 0) { ui.partY.ref.value =
                 parseInt(parseInt(ui.partY.ref.value) + 1);
}                              if (ui.partY.ref.value  < 1)
                                 { ui.partY.ref.value  = 1; } } if (coinFocus!=null) {
coinFocus.style.top =     parseInt(ui.partY.ref.value) + "px";
coinFocus.dataset.top =   parseInt(ui.partY.ref.value) + "px";
updateInfoShelf();redraw();
}
} else if (event.target == document.getElementById("partX")) {
event.preventDefault(); event.stopPropagation();
if ( event.shiftKey&& event.ctrlKey) {
       if (event.wheelDelta > 0) { ui.partX.ref.value =
                 parseInt(parseInt(ui.partX.ref.value) - mouseIncrement);
} else if (event.wheelDelta < 0) { ui.partX.ref.value =
                 parseInt(parseInt(ui.partX.ref.value) + mouseIncrement);
}                              if (ui.partX.ref.value  < mouseIncrement)
                                 { ui.partX.ref.value  = mouseIncrement; } } else if (!event.shiftKey&& event.ctrlKey) {
       if (event.wheelDelta > 0) { ui.partX.ref.value =
                 parseInt(parseInt(ui.partX.ref.value) - T);
} else if (event.wheelDelta < 0) { ui.partX.ref.value =
                 parseInt(parseInt(ui.partX.ref.value) + T);
}                              if (ui.partX.ref.value  < T)
                                 { ui.partX.ref.value  = T; } } else if (!event.shiftKey&&!event.ctrlKey) {
       if (event.wheelDelta > 0) { ui.partX.ref.value =
                 parseInt(parseInt(ui.partX.ref.value) - 2);
} else if (event.wheelDelta < 0) { ui.partX.ref.value =
                 parseInt(parseInt(ui.partX.ref.value) + 2);
}                              if (ui.partX.ref.value  < 2)
                                 { ui.partX.ref.value  = 2; } } else if ( event.shiftKey&&!event.ctrlKey) {
       if (event.wheelDelta > 0) { ui.partX.ref.value =
                 parseInt(parseInt(ui.partX.ref.value) - 1);
} else if (event.wheelDelta < 0) { ui.partX.ref.value =
                 parseInt(parseInt(ui.partX.ref.value) + 1);
}                              if (ui.partX.ref.value  < 1)
                                 { ui.partX.ref.value  = 1; } } if (coinFocus!=null) {
coinFocus.style.left =    parseInt(ui.partX.ref.value) + "px";
coinFocus.dataset.left =  parseInt(ui.partX.ref.value) + "px";
updateInfoShelf();redraw();
}
} else if (event.target == document.getElementById("partW")) {
event.preventDefault(); event.stopPropagation();
if ( event.shiftKey&& event.ctrlKey) {
       if (event.wheelDelta > 0) { ui.partW.ref.value =
                 parseInt(parseInt(ui.partW.ref.value) - mouseIncrement);
} else if (event.wheelDelta < 0) { ui.partW.ref.value =
                 parseInt(parseInt(ui.partW.ref.value) + mouseIncrement);
}                              if (ui.partW.ref.value  < mouseIncrement)
                                 { ui.partW.ref.value  = mouseIncrement; } } else if (!event.shiftKey&& event.ctrlKey) {
       if (event.wheelDelta > 0) { ui.partW.ref.value =
                 parseInt(parseInt(ui.partW.ref.value) - T);
} else if (event.wheelDelta < 0) { ui.partW.ref.value =
                 parseInt(parseInt(ui.partW.ref.value) + T);
}                              if (ui.partW.ref.value  < T)
                                 { ui.partW.ref.value  = T; } } else if (!event.shiftKey&&!event.ctrlKey) {
       if (event.wheelDelta > 0) { ui.partW.ref.value =
                 parseInt(parseInt(ui.partW.ref.value) - 2);
} else if (event.wheelDelta < 0) { ui.partW.ref.value =
                 parseInt(parseInt(ui.partW.ref.value) + 2);
}                              if (ui.partW.ref.value  < 2)
                                 { ui.partW.ref.value  = 2; } } else if ( event.shiftKey&&!event.ctrlKey) {
       if (event.wheelDelta > 0) { ui.partW.ref.value =
                 parseInt(parseInt(ui.partW.ref.value) - 1);
} else if (event.wheelDelta < 0) { ui.partW.ref.value =
                 parseInt(parseInt(ui.partW.ref.value) + 1);
}                              if (ui.partW.ref.value  < 1)
                                 { ui.partW.ref.value  = 1; } } if (coinFocus!=null) {
coinFocus.style.width =   parseInt(ui.partW.ref.value) + "px";
coinFocus.dataset.width = parseInt(ui.partW.ref.value) + "px";
updateInfoShelf();redraw();
}
} else if (event.target == document.getElementById("partH")) {
event.preventDefault(); event.stopPropagation();
if ( event.shiftKey&& event.ctrlKey) {
       if (event.wheelDelta > 0) { ui.partH.ref.value =
                 parseInt(parseInt(ui.partH.ref.value) - mouseIncrement);
} else if (event.wheelDelta < 0) { ui.partH.ref.value =
                 parseInt(parseInt(ui.partH.ref.value) + mouseIncrement);
}                              if (ui.partH.ref.value  < mouseIncrement)
                                 { ui.partH.ref.value  = mouseIncrement; } } else if (!event.shiftKey&& event.ctrlKey) {
       if (event.wheelDelta > 0) { ui.partH.ref.value =
                 parseInt(parseInt(ui.partH.ref.value) - T);
} else if (event.wheelDelta < 0) { ui.partH.ref.value =
                 parseInt(parseInt(ui.partH.ref.value) + T);
}                              if (ui.partH.ref.value  < T)
                                 { ui.partH.ref.value  = T; } } else if (!event.shiftKey&&!event.ctrlKey) {
       if (event.wheelDelta > 0) { ui.partH.ref.value =
                 parseInt(parseInt(ui.partH.ref.value) - 2);
} else if (event.wheelDelta < 0) { ui.partH.ref.value =
                 parseInt(parseInt(ui.partH.ref.value) + 2);
}                              if (ui.partH.ref.value  < 2)
                                 { ui.partH.ref.value  = 2; } } else if ( event.shiftKey&&!event.ctrlKey) {
       if (event.wheelDelta > 0) { ui.partH.ref.value =
                 parseInt(parseInt(ui.partH.ref.value) - 1);
} else if (event.wheelDelta < 0) { ui.partH.ref.value =
                 parseInt(parseInt(ui.partH.ref.value) + 1);
}                              if (ui.partH.ref.value  < 1)
                                 { ui.partH.ref.value  = 1; } } if (coinFocus!=null) {
coinFocus.style.height =  parseInt(ui.partH.ref.value) + "px";
coinFocus.dataset.height =parseInt(ui.partH.ref.value) + "px";
updateInfoShelf();redraw();
}
} else if (event.target == document.getElementById("levelNotes")) {
event.preventDefault(); event.stopPropagation();

} else if (event.target.dataset.scroll && event.target.dataset.scroll == "false" ||
           event.target == document.getElementById("itemSystem") ||
           event.target == document.getElementById("sidebar")) {
event.preventDefault(); event.stopPropagation();
       if ( event.shiftKey) {
       if (event.wheelDelta > 0) {
 focusPrevious(); updateInfoShelf(); redraw(); 
} else if (event.wheelDelta < 0) {
 focusNext(); updateInfoShelf(); redraw(); 
}
} else if (!event.shiftKey) {
       if (event.wheelDelta > 0) {
 focusPrevious(true); updateInfoShelf(); redraw(); 
} else if (event.wheelDelta < 0) {
 focusNext(true); updateInfoShelf(); redraw(); 
}
}


loadSidebar1();


} else if (event.target == document.getElementById("phantomLair") || event.target == document.getElementById("phantomFlip") || (event.target.dataset && event.target.dataset.lair == "true")) {
event.preventDefault(); event.stopPropagation();
       if (event.wheelDelta > 0) {
thePhantomLair.style.opacity = parseFloat(thePhantomLair.style.opacity) + 0.01;
} else if (event.wheelDelta < 0) {
thePhantomLair.style.opacity = parseFloat(thePhantomLair.style.opacity) - 0.01;
}

if (thePhantomLair.style.opacity < 0.00) {
thePhantomLair.style.opacity = 0.00;
}
if (thePhantomLair.style.opacity > 0.35) {
thePhantomLair.style.opacity = 0.35;
}

localStorage.setItem("thePhantomLairOpacity", thePhantomLair.style.opacity);

} else if (
event.target == document.getElementById("pageDescription") ||
event.target == document.getElementById("projectName") ||
event.target == document.getElementById("coin49592") ||
event.target == document.getElementById("coin54398") ||
event.target == document.getElementById("coin77155") ||
event.target == document.getElementById("coin59760") ||
event.target == document.getElementById("coin64291") ||
event.target == document.getElementById("coin70038") ||
event.target == document.getElementById("coin77671") ||
event.target == document.getElementById("folder12") ||
event.target == document.getElementById("setLayer1") ||
event.target == document.getElementById("setLayer2") ||
event.target == document.getElementById("setLayer3") ||
event.target == document.getElementById("setLayer4") ||
event.target == document.getElementById("setLayer5") ||
event.target == document.getElementById("setLayer6") ||
event.target == document.getElementById("setLayer7") ||
event.target == document.getElementById("setLayer8") ||
event.target == document.getElementById("setLayer9") ||
event.target == document.getElementById("setLayer10") ||
event.target == document.getElementById("setLayer11") ||
event.target == document.getElementById("setLayer12") ||
event.target == document.getElementById("setLayer13") ||
event.target == document.getElementById("setLayer14") ||
event.target == document.getElementById("setLayer15") ||
event.target == document.getElementById("setLayer16") ||
event.target == document.getElementById("setLayer17") ||
event.target == document.getElementById("setLayer18") ||
event.target == document.getElementById("setLayer19") ||
event.target == document.getElementById("setLayer20") ||
event.target == document.getElementById("setLayer21") ||
event.target == document.getElementById("setLayer22") ||
event.target == document.getElementById("setLayer23") ||
event.target == document.getElementById("setLayer24") ||
event.target == document.getElementById("setLayer25")
) {
event.preventDefault(); event.stopPropagation();
       if (event.wheelDelta > 0) {
layerRight();
} else if (event.wheelDelta < 0) {
layerLeft();
}
loadSidebar1();





} else if (
event.target == document.getElementById("clipCSS") ||
event.target == document.getElementById("clipHTML") ||
event.target == document.getElementById("clipCODE") ||
event.target == document.getElementById("save200") ||
event.target == document.getElementById("save300") ||
event.target == document.getElementById("save500") ||
event.target == document.getElementById("save800") ||
event.target == document.getElementById("save1000") ||
event.target == document.getElementById("save1200") ||
event.target == document.getElementById("save1500") ||
event.target == document.getElementById("save1800") ||
event.target == document.getElementById("textFlow") ||
event.target == document.getElementById("header0") ||
event.target == document.getElementById("header1") ||
event.target == document.getElementById("header2") ||
event.target == document.getElementById("header3") ||
event.target == document.getElementById("header4") ||
event.target == document.getElementById("footer0") ||
event.target == document.getElementById("footer1") ||
event.target == document.getElementById("footer2") ||
event.target == document.getElementById("footer3") ||
event.target == document.getElementById("footer4") ||
event.target == document.getElementById("folder42")
) {
event.preventDefault();
event.stopPropagation();
       if (event.wheelDelta < 0) {
switch (lastFactor) {
case         "1" : lastFactor = "(100/320)" ; break;
case "(100/320)" : lastFactor = "(100/500)" ; break;
case "(100/500)" : lastFactor = "(100/768)" ; break;
case "(100/768)" : lastFactor = "(100/1000)"; break;
case "(100/1000)": lastFactor = "(100/1280)"; break;
case "(100/1280)": lastFactor = "(100/1536)"; break;
case "(100/1536)": lastFactor = "(100/2000)"; break;
default          : lastFactor = "(100/2000)"; break;
}
} else if (event.wheelDelta > 0) {
switch (lastFactor) {
case "(100/320)" : lastFactor =         "1" ; break;
case "(100/500)" : lastFactor = "(100/320)" ; break;
case "(100/768)" : lastFactor = "(100/500)" ; break;
case "(100/1000)": lastFactor = "(100/768)" ; break;
case "(100/1280)": lastFactor = "(100/1000)"; break;
case "(100/1536)": lastFactor = "(100/1280)"; break;
case "(100/2000)": lastFactor = "(100/1536)"; break;
default          : lastFactor =         "1" ; break;
}
}
localStorage.setItem("lastFactor", lastFactor);
updateInfoShelf();
} else if (
event.target == document.getElementById("headerText") ||
event.target == document.getElementById("footerText")
) {
event.preventDefault();
event.stopPropagation();
} else if (
event.target == document.getElementById("readButtonBack") ||
event.target == document.getElementById("folder31") ||
event.target == document.getElementById("navPoint1") ||
event.target == document.getElementById("navPoint2") ||
event.target == document.getElementById("navPoint3") ||
event.target == document.getElementById("navPoint4") ||
event.target == document.getElementById("navPoint5") ||
event.target == document.getElementById("navPoint6") ||
event.target == document.getElementById("navPoint7") ||
event.target == document.getElementById("navPoint8") ||
event.target == document.getElementById("navPoint9") ||
event.target == document.getElementById("buttonScale").children[0] ||
event.target == document.getElementById("buttonScale").children[1] ||
event.target == document.getElementById("buttonScale").children[2] ||
event.target == document.getElementById("buttonScale").children[3] ||
event.target == document.getElementById("buttonScale").children[4] ||
event.target == document.getElementById("buttonScale").children[5] ||
event.target == document.getElementById("buttonScale").children[6] ||
event.target == document.getElementById("buttonScale").children[7] ||
event.target == document.getElementById("buttonScale").children[8] ||
event.target == document.getElementById("buttonScale").children[9] ||
event.target == document.getElementById("buttonScale").children[10] ||
event.target == document.getElementById("buttonScale").children[11] ||
event.target == document.getElementById("buttonScale").children[12] ||
event.target == document.getElementById("buttonScale").children[13] ||
event.target == document.getElementById("buttonScale").children[14] ||
event.target == document.getElementById("buttonScale").children[15] ||
event.target == document.getElementById("buttonScale").children[16] ||
event.target == document.getElementById("buttonScale").children[17] ||
event.target == document.getElementById("buttonScale").children[18] ||
event.target == document.getElementById("popColours") ||
event.target == document.getElementById("popButton") ||
event.target == document.getElementById("ringButton") ||
event.target == document.getElementById("yourButtonIsHere").firstElementChild
) {
event.preventDefault(); event.stopPropagation();
       if (event.wheelDelta > 0) {
cycleColoursForward();
drawButton7();
} else if (event.wheelDelta < 0) {
cycleColoursBackward();
drawButton7();
}
} else if (event.target == document.getElementById("animatorDiv")) {
event.preventDefault();
event.stopPropagation();
if (event.wheelDelta > 0) {
document.getElementById("animationTiming").value = parseInt(parseInt(document.getElementById("animationTiming").value) + 5);
} else if (event.wheelDelta < 0) {
document.getElementById("animationTiming").value -= 5;
}
if (document.getElementById("animationTiming").value < 5) {
document.getElementById("animationTiming").value = 5;
}
setupTheAnimator();
localStorage.setItem("animatorTiming", document.getElementById("animationTiming").value)
} else if (event.target == ui.frameNumber.ref) {
event.preventDefault();
event.stopPropagation();
if (event.wheelDelta > 0) {
ui.frameNumber.ref.value = parseInt(ui.frameNumber.ref.value) + 1;
} else if (event.wheelDelta < 0) {
ui.frameNumber.ref.value = parseInt(ui.frameNumber.ref.value) - 1;
}
if (ui.frameNumber.ref.value > imageRollArray.length) {
ui.frameNumber.ref.value = imageRollArray.length;
}
if (ui.frameNumber.ref.value < 1) {
ui.frameNumber.ref.value = 1;
}
setupTheAnimator();
}























[
    "styleFG",
    "styleBG",
    "styleOL",
    "shadowRadius7",
    "shadowRadius8",
    "shadowRadius9",
    "shadowRadius4",
    "shadowRadius5",
    "shadowRadius6",
    "shadowRadius1",
    "shadowRadius2",
    "shadowRadius3",
    "indentLine",
    "fontShadow",
    "charWord",
    "fontSize",
    "textAlignLeft",
    "textAlignCenter",
    "textAlignRight",
    "outlineSize",
    "outlineStyle",
    "padding",
    "opacity"
].forEach((name) => {

if (event.target == styleMenu[name].ref) {
event.preventDefault();
event.stopPropagation();
if (coinFocus != null) {
styleMenu[name].mousewheel();
}
}

});



if (event.buttons===4) {
event.preventDefault();
}

}, { passive: false });

/* THIS ENDS THE MOUSEWHEEL */




styleMenu.styleFG.mousewheel = function() {  }
styleMenu.styleBG.mousewheel = function() {  }
styleMenu.styleOL.mousewheel = function() {  }










styleMenu.shadowRadius7.mousewheel = function() { shadowRadiusWheel(); }
styleMenu.shadowRadius8.mousewheel = function() { shadowRadiusWheel(); }
styleMenu.shadowRadius9.mousewheel = function() { shadowRadiusWheel(); }
styleMenu.shadowRadius4.mousewheel = function() { shadowRadiusWheel(); }
styleMenu.shadowRadius5.mousewheel = function() { shadowRadiusWheel(); }
styleMenu.shadowRadius6.mousewheel = function() { shadowRadiusWheel(); }
styleMenu.shadowRadius1.mousewheel = function() { shadowRadiusWheel(); }
styleMenu.shadowRadius2.mousewheel = function() { shadowRadiusWheel(); }
styleMenu.shadowRadius3.mousewheel = function() { shadowRadiusWheel(); }


function shadowRadiusWheel() {
if (event.wheelDelta < 0) {
       if (!event.shiftKey && !event.ctrlKey && !event.altKey) {
styleKey = "r";
kC = 109; cC = 45;
borderRadiusTuner();
} else if ( event.shiftKey && !event.ctrlKey && !event.altKey) {
styleKey = "u";
kC = 109; cC = 45;
boxShadowTuner();
} else if (!event.shiftKey &&  event.ctrlKey && !event.altKey) {
styleKey = "u";
kC = 111; cC = 47;
boxShadowTuner();
} else if (!event.shiftKey && !event.ctrlKey &&  event.altKey) {
styleKey = "u";
kC = 96; cC = 48;
boxShadowTuner();
}
} else if (event.wheelDelta > 0) {
       if (!event.shiftKey && !event.ctrlKey && !event.altKey) {
styleKey = "r";
kC = 107; cC = 43;
borderRadiusTuner();
} else if ( event.shiftKey && !event.ctrlKey && !event.altKey) {
styleKey = "u";
kC = 107; cC = 43;
boxShadowTuner();
} else if (!event.shiftKey &&  event.ctrlKey && !event.altKey) {
styleKey = "u";
kC = 106; cC = 42;
boxShadowTuner();
} else if (!event.shiftKey && !event.ctrlKey &&  event.altKey) {
styleKey = "u";
kC = 110; cC = 46;
boxShadowTuner();
}
}
}











styleMenu.indentLine.mousewheel = function() {
if (!event.shiftKey) {
let upSize = 0.05;
if (coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.textIndent == "") {
coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.textIndent = "0em";
}
if (event.wheelDelta > 0) {
coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.textIndent = parseFloat(coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.textIndent) + upSize + "em";
} else if (event.wheelDelta <= 0) {
coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.textIndent = parseFloat(coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.textIndent) - upSize + "em";
}
} else if (event.shiftKey) {
let upSize = 0.01;
if (coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.lineHeight == "") {
coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.lineHeight = "1em";
}
if (event.wheelDelta > 0) {
coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.lineHeight = parseFloat(coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.lineHeight) + upSize + "em";
} else if (event.wheelDelta <= 0) {
coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.lineHeight = parseFloat(coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.lineHeight) - upSize + "em";
}
}

}

styleMenu.fontShadow.mousewheel = function() {  }





styleMenu.charWord.mousewheel = function() { 

if (!event.shiftKey) {
let upSize = 0.001;
if (!coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.letterSpacing) {
coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.letterSpacing = "0em";
}
if (event.wheelDelta > 0) {
coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.letterSpacing = parseFloat(coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.letterSpacing) + upSize + "em";
} else if (event.wheelDelta <= 0) {
coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.letterSpacing = parseFloat(coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.letterSpacing) - upSize + "em";
}
} else if (event.shiftKey) {
let upSize = 0.02;
if (coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.wordSpacing == "") {
coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.wordSpacing = "1em";
}
if (event.wheelDelta > 0) {
coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.wordSpacing = parseFloat(coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.wordSpacing) + upSize + "em";
} else if (event.wheelDelta <= 0) {
coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.wordSpacing = parseFloat(coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.wordSpacing) - upSize + "em";
}
}



}





styleMenu.fontSize.mousewheel = function() {
let upSize = 1;
if (event.shiftKey) { upSize = 0.1; } else if (event.ctrlKey) { upSize = 10; }
if (event.wheelDelta > 0) {
coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.fontSize = parseFloat(coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.fontSize) + upSize + "px";
} else if (event.wheelDelta <= 0) {
coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.fontSize = parseFloat(coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.fontSize) - upSize + "px";
}
}

styleMenu.textAlignLeft.mousewheel = function() {  }
styleMenu.textAlignCenter.mousewheel = function() {  }
styleMenu.textAlignRight.mousewheel = function() {  }


styleMenu.outlineSize.mousewheel = function() {
let change = 0.5;
if (coinFocus.lastElementChild.style.outline == "") {
coinFocus.lastElementChild.style.outline = "black solid 2px";
}
if (!coinFocus.lastElementChild.style.outlineOffset || coinFocus.lastElementChild.style.outlineOffset == "") {
coinFocus.lastElementChild.style.outlineOffset = "0px";
}
if (event.ctrlKey) { change = 0.1; }
if (!event.shiftKey) {
if (event.wheelDelta > 0) {
coinFocus.lastElementChild.style.outlineWidth = parseFloat(coinFocus.lastElementChild.style.outlineWidth) + change + "px";
} else if (event.wheelDelta <= 0) {
coinFocus.lastElementChild.style.outlineWidth = parseFloat(coinFocus.lastElementChild.style.outlineWidth) - change + "px";
}
} else if ( event.shiftKey) {
if (event.wheelDelta > 0) {
coinFocus.lastElementChild.style.outlineOffset = parseFloat(coinFocus.lastElementChild.style.outlineOffset) + change + "px";
} else if (event.wheelDelta <= 0) {
coinFocus.lastElementChild.style.outlineOffset = parseFloat(coinFocus.lastElementChild.style.outlineOffset) - change + "px";
}
}
}


styleMenu.outlineStyle.mousewheel = function() {
const part = coinFocus.lastElementChild;
function evaluateOutline() {
part.style.outlineStyle = `${outlineStyleArray[outlineTunedStyle]}`;
}

if (event.wheelDelta > 0) {

outlineTunedStyle -= 1;
if (outlineTunedStyle < 0) { outlineTunedStyle = outlineStyleArray.length - 1; }
evaluateOutline();
} else if (event.wheelDelta <= 0) {
outlineTunedStyle += 1;
if (outlineTunedStyle > outlineStyleArray.length - 1) { outlineTunedStyle = 0; }
evaluateOutline();
}


}

styleMenu.padding.mousewheel = function() {
let change = 1;
if (coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.padding == "") {
coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.padding = 0 + "px";
}
if (event.ctrlKey) { change = 5; }
if (!event.shiftKey) {
if (event.wheelDelta > 0) {
coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.paddingLeft  = parseFloat(coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.paddingLeft)  + change + "px";
coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.paddingRight = parseFloat(coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.paddingRight) + change + "px";
} else if (event.wheelDelta <= 0) {
coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.paddingLeft  = parseFloat(coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.paddingLeft)  - change + "px";
coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.paddingRight = parseFloat(coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.paddingRight) - change + "px";
}
} else if ( event.shiftKey) {
if (event.wheelDelta > 0) {
coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.paddingTop    = parseFloat(coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.paddingTop)    + change + "px";
coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.paddingBottom = parseFloat(coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.paddingBottom) + change + "px";
} else if (event.wheelDelta <= 0) {
coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.paddingTop    = parseFloat(coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.paddingTop)    - change + "px";
coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.paddingBottom = parseFloat(coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.paddingBottom) - change + "px";
}
}



}



styleMenu.opacity.mousewheel = function() {
let change = 0.05;
if (coinFocus.lastElementChild.style.opacity == "") {
coinFocus.lastElementChild.style.opacity = 1;
}
if (event.shiftKey) { change = 0.01; } else if (event.ctrlKey) { change = 0.1; }
if (event.wheelDelta > 0) {
coinFocus.lastElementChild.style.opacity = parseFloat(coinFocus.lastElementChild.style.opacity) + change;
} else if (event.wheelDelta <= 0) {
coinFocus.lastElementChild.style.opacity = parseFloat(coinFocus.lastElementChild.style.opacity) - change;
}
}
























