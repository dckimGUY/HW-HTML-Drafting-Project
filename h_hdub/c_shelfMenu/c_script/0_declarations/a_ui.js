/* AN OBJECT FOR THE USER INTERFACE */

const ui = {};

/* TAB SELECTORS */

["tab1", "tab2", "tab3", "tab4", "tab5", "tab6"].forEach((name) => {
ui[name]       = {};
ui[name].ref   = document.getElementById(name);
});

/* WRAPPERS */

["menu_open", "menuWrapper", "wrapper_tabSelectors", "tab1Wrapper", "tab2Wrapper", "tab3Wrapper", "tab4Wrapper", "tab5Wrapper", "tab6Wrapper", "crop"].forEach((name) => {
ui[name]       = {};
ui[name].ref   = document.getElementById(name);
});

/* FOLDERS */

[
"folder11", "folder12",
"folder21", "folder22",
"folder31", "folder32",
"folder41", "folder42",
"folder51", "folder52",
"folder61", "folder62"
].forEach((name) => {
ui[name]       = {};
ui[name].ref   = document.getElementById(name);
});

/* FOLDER SELECTORS */

[
"folder11button", "folder12button",
"folder21button", "folder22button",
"folder31button", "folder32button",
"folder41button", "folder42button",
"folder51button", "folder52button",
"folder61button", "folder62button"
].forEach((name) => {
ui[name]       = {};
ui[name].ref   = document.getElementById(name);
});

/* TAB 1, FOLDER 1 */

["xrayGrey", "xrayMagenta", "xrayCyan", "partY", "partX", "partW", "partH", "cursorAuto", "cursorXS", "cursorS", "cursorM", "cursorL", "cursorXL", "cursorNum", "partNom", "partPrev", "partNext", "partText", "pathEntry"].forEach((name) => {
ui[name]       = {};
ui[name].ref   = document.getElementById(name);
});

/* TAB 1, FOLDER 2 */

["coin77671", "coin77155", "coin59760", "coin64291", "coin70038", "coin49592", "coin54398", "setLayer1", "setLayer2", "setLayer3", "setLayer4", "setLayer5", "setLayer6", "setLayer7", "setLayer8", "setLayer9", "setLayer10", "setLayer11", "setLayer12", "setLayer13", "setLayer14", "setLayer15", "setLayer16", "setLayer17", "setLayer18", "setLayer19", "setLayer20", "setLayer21", "setLayer22", "setLayer23", "setLayer24", "setLayer25"].forEach((name,index) => {
ui[name]       = {};
ui[name].ref   = document.getElementById(name);
});

/* TAB 2, FOLDER 1 */

["modeZ", "modeEeM1", "modeD", "modeG", "modeEeM0", "modeT"].forEach((name) => {
ui[name]       = {};
ui[name].ref   = document.getElementById(name);
});

["coin88067", "coin46861", "coin44038", "coin72275", "coin43886"].forEach((name) => {
ui[name]       = {};
ui[name].ref   = document.getElementById(name);
});

/* SLIDERS */

["coin41267", "coin47497", "coin50633", "coin53526", "coin56897", "coin59527", "coin17325"].forEach((name) => {
ui[name]       = {};
ui[name].ref   = document.getElementById(name);
});

["coin59277", "coin62796", "coin65598", "coin67938", "coin47065"].forEach((name) => {
ui[name]       = {};
ui[name].ref   = document.getElementById(name);
});

["setDragThresholdFromGrid"].forEach((name) => {
ui[name]       = {};
ui[name].ref   = document.getElementById(name);
});


["bodyFade"].forEach((name) => {
ui[name]       = {};
ui[name].ref   = document.getElementById(name);
});




/* TAB 2, FOLDER 2 */

["snapGridIncrement", "invertBGandGrid", "invertPartVisuals", "coin21493", "coin31352", "coin44789", "coin33352", "coin35216", "coin36899", "coin38511", "coin40870", "coin46684", "coin48242", "coin50503", "coin53180", "coin55658", "coin57816", "coin60297", "coin64112", "coin66935", "coin70148", "coin05786", "coin08962", "coin10912", "coin15097", "coin18271", "coin21056", "coin22927", "coin26110", "coin44062", "coin46633", "coin48525", "coin51107", "coin56470", "coin58382", "coin59792", "coin61443", "coin63058", "coin65326", "coin67576", "coin69548", "coin71699", "coin72936", "coin74420", "coin63249"].forEach((name) => {
ui[name]       = {};
ui[name].ref   = document.getElementById(name);
});

["coin38634", "coin18868", "coin28281", "coin41046", "coin21315", "coin30119", "coin07023", "coin23538", "coin32259"].forEach((name) => {
ui[name]       = {};
ui[name].ref   = document.getElementById(name);
});

["setMetric", "setComp2", "setComp3", "setComp2and3"].forEach((name) => {
ui[name]       = {};
ui[name].ref   = document.getElementById(name);
});

["cursorShutoff"].forEach((name) => {
ui[name]       = {};
ui[name].ref   = document.getElementById(name);
});


["saveTheme_a0", "saveTheme_b1", "saveTheme_c2", "saveTheme_d3", "saveTheme_e4", "saveTheme_f5", "saveTheme_g6", "saveTheme_h7", "saveTheme_i8", "saveTheme_j9", "loadTheme_a0", "loadTheme_b1", "loadTheme_c2", "loadTheme_d3", "loadTheme_e4", "loadTheme_f5", "loadTheme_g6", "loadTheme_h7", "loadTheme_i8", "loadTheme_j9"].forEach((name) => {
ui[name]       = {};
ui[name].ref   = document.getElementById(name);
});










/* TAB 3, FOLDER 1 */

[
"readButtonBack"       ,
"yourButtonIsHere"     ,
"buttonTooltip"        , 
"buttonLink"           ,
"navPoint7"            ,
"navPoint8"            ,
"navPoint9"            ,
"navPoint4"            ,
"navPoint5"            ,
"navPoint6"            ,
"navPoint1"            ,
"navPoint2"            ,
"navPoint3"            ,
"cycleColourLeft"      ,
"cycleColoursRight"    ,
"buttonScale"          ,
"textEntry"            ,
"canvasOutput1"        ,
"canvasOutput2"        ,
"canvasOutput3"        ,
"canvasOutput4"        ,
"buttonFace"           ,
"buttonShadow"         ,
"buttonLeft"           ,
"buttonTop"            ,
"buttonRight"          ,
"buttonBottom"         ,
"textRight"            ,
"textBottom"           ,
"textFace"             ,
"textHover"            ,
"textActive"           ,
"textFocus"
].forEach((name) => {
ui[name]       = {};
ui[name].ref   = document.getElementById(name);
});

ui.buttonStyle           = {};
ui.buttonStyle.names     = ["a_flat"];
ui.buttonStyle.chosen    =  0;
ui.buttonStyle.a_flat    = {};
ui.buttonStyle.a_flat.left       = new Image();
ui.buttonStyle.a_flat.left.src   = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAA4CAMAAADOzPhPAAAAMFBMVEUAAAAA/wAQHFIA/wAYdb3//wCL1u7/AP//AABaAAAA///2/+7/AP8Aoe4AAP+LOAAHFtTmAAAAEHRSTlMA////////////////////wFCLQwAAAGRJREFUOI3t1DkOwDAIRNGRkIVF4fsfN4kXbJYbxL98oqABAJDYUPIBRTg6ysvRBwef7H2xc2Xrm9nsvZmlaed0q9rJ9fLl3zFJxkTZSRlVtrrY6WSvg4N2jto5+1UldXweQ+4PsMYjf82EkmsAAAAASUVORK5CYII=";
ui.buttonStyle.a_flat.center     = new Image();
ui.buttonStyle.a_flat.center.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAA4CAMAAADD0ogIAAAAMFBMVEUAAAAA/wAQHFIA/wAYdb3//wCL1u7/AP//AABaAAAA///2/+7/AP8Aoe4AAP+LOAAHFtTmAAAAEHRSTlMA////////////////////wFCLQwAAACpJREFUKJFj4EIDDMxogE4CGO7gQwMMHGhgVGBUgEIBjEQ3WARY0QCGAAAUkRsxaLzOoQAAAABJRU5ErkJggg==";
ui.buttonStyle.a_flat.right      = new Image();
ui.buttonStyle.a_flat.right.src  = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAA4CAMAAADHJ1g1AAAAMFBMVEUAAAAA/wAQHFIA/wAYdb3//wCL1u7/AP//AABaAAAA///2/+7/AP8Aoe4AAP+LOAAHFtTmAAAAEHRSTlMA////////////////////wFCLQwAAAGJJREFUOI3t0zkOwDAIRFGkKAJRcP/jerwQmXGfyr9Cr6IAcU7koWAkqkyqQQQh6lJpSKEpoFwnBRQr1xzEVuEH2aVL/1LKdr44TabPNkrbaVmhaZWGEXVjcvOD+ru/lBwEaWI9JhuCceR1AAAAAElFTkSuQmCC";







/******************/
/* INITIALIZATION */

ui.pathEntry.ref.value = hdub_imagePath;

ui.coin41267.ref.value = thinOutline;
ui.coin47497.ref.value = borderWidth;
ui.coin50633.ref.value = edgeQ;

//ui.coin41267.ref.addEventListener("focus", function() { });
ui.coin47497.ref.addEventListener("focus", function() { this.max = edgeQ - (thinOutline * 2); });
ui.coin50633.ref.addEventListener("focus", function() { this.min = borderWidth + thinOutline * 2; });

ui.coin88067.ref.value = L;
ui.coin46861.ref.value = sL;
ui.coin44038.ref.value = finishedBackgroundColour;
ui.coin72275.ref.value = U;
ui.coin43886.ref.value = bU;



ui.coin59277.ref.value = greyColour;
ui.coin62796.ref.value = blueColour;
ui.coin65598.ref.value = pinkColour;
ui.coin67938.ref.value = lineColour;
ui.coin47065.ref.value = selectedColour;








const menuScalerWrap    = document.getElementById("menuScalerWrap")   ;
const scaleRangeWrapper = document.getElementById("scaleRangeWrapper");
const mouseCatcher      = document.getElementById("mouseCatcher")     ;
const rightBlocker      = document.getElementById("rightBlocker")     ;
const leftBlocker       = document.getElementById("leftBlocker")      ;
const scaleRange        = document.getElementById("scaleRange")       ;
scaleRange.addEventListener("input", function() {
newFactor = ((1600 - scaleRange.value + 50)/200);
newHeight = (newFactor * 488) + "px";
newWidth  = newFactor * 8;
if (200 - scaleRange.value + (newWidth/2) <= 1600 && 1600 - scaleRange.value + (newWidth/2) >= newWidth) {
leftBlocker.style.right = 1600 - scaleRange.value + (newWidth/2) + "px";
mouseCatcher.style.right = 1600 - newWidth - scaleRange.value + (newWidth/2) + "px";
rightBlocker.style.right =  -scaleRange.value - (newWidth/2) + "px";
}
rightBlocker.style.height = newHeight;
leftBlocker.style.height  = newHeight;
scaleRange.style.height   = newHeight;
mouseCatcher.style.height = newHeight;
mouseCatcher.style.width  = newWidth + "px";
ui.menuWrapper.ref.style.transform = "scale(" + newFactor + ")";
ui.menu_open.ref.style.transform = "scale(" + newFactor + ")";
localStorage.setItem("shelfMenuScale", newFactor);
localStorage.setItem("shelfMenuScaleSetting", scaleRange.value);
});


menuScalerWrap.addEventListener("mousedown", function() { event.stopPropagation(); }, true);
menuScalerWrap.addEventListener("mousemove", function() { event.stopPropagation(); }, true);



scaleRange.addEventListener("mouseleave",   function() { scaleRangeWrapper.style.display="none";  mouseCatcher.style.pointerEvents="auto"; });
scaleRange.addEventListener("mouseout",     function() { scaleRangeWrapper.style.display="none";  mouseCatcher.style.pointerEvents="auto"; });
rightBlocker.addEventListener("mouseover",  function() { scaleRangeWrapper.style.display="none";  mouseCatcher.style.pointerEvents="auto"; });
leftBlocker.addEventListener("mouseover",   function() { scaleRangeWrapper.style.display="none";  mouseCatcher.style.pointerEvents="auto"; });
mouseCatcher.addEventListener("mouseenter", function() { scaleRangeWrapper.style.display="block"; mouseCatcher.style.pointerEvents="none"; });
mouseCatcher.addEventListener("mouseover",  function() { scaleRangeWrapper.style.display="block"; mouseCatcher.style.pointerEvents="none"; });












