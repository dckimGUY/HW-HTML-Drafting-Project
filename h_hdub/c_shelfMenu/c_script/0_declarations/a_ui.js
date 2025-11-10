/* AN OBJECT FOR THE USER INTERFACE */

const ui = {};

/* TAB SELECTORS */

["tab1", "tab2", "tab3", "tab4", "tab5", "tab6"].forEach((name) => {
ui[name]       = {};
ui[name].ref   = document.getElementById(name);
});

/* WRAPPERS */

["menuWrapper", "tab1Wrapper", "tab2Wrapper", "tab3Wrapper", "tab4Wrapper", "tab5Wrapper", "tab6Wrapper"].forEach((name) => {
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

["hdub_menuScale8", "hdub_menuScale4", "hdub_menuScale2", "hdub_menuScale1", "hdub_menuScaleHalf", "hdub_menuScaleQuarter", "hdub_menuScaleEighth"].forEach((name) => {
ui[name]       = {};
ui[name].ref   = document.getElementById(name);
});

["coin88067", "coin46861", "coin44038", "coin72275", "coin74555", "coin43886"].forEach((name) => {
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

/* TAB 2, FOLDER 1 */

["coin21493", "coin31352", "coin44789", "coin33352", "coin35216", "coin36899", "coin38511", "coin40870", "coin46684", "coin48242", "coin50503", "coin53180", "coin55658", "coin57816", "coin60297", "coin64112", "coin66935", "coin70148", "coin05786", "coin08962", "coin10912", "coin15097", "coin18271", "coin21056", "coin22927", "coin26110", "coin44062", "coin46633", "coin48525", "coin51107", "coin56470", "coin58382", "coin59792", "coin61443", "coin63058", "coin65326", "coin67576", "coin69548", "coin71699", "coin72936", "coin74420", "coin63249"].forEach((name) => {
ui[name]       = {};
ui[name].ref   = document.getElementById(name);
});

["coin38634", "coin18868", "coin28281", "coin41046", "coin21315", "coin30119", "coin07023", "coin23538", "coin32259"].forEach((name) => {
ui[name]       = {};
ui[name].ref   = document.getElementById(name);
});
















/* TAB 3, FOLDER 1 */

["coin17304", "coin26746", "coin32891", "coin40855", "coin46032"].forEach((name) => {
ui[name]       = {};
ui[name].ref   = document.getElementById(name);
});



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
ui.coin74555.ref.value = C;
ui.coin43886.ref.value = bU;



ui.coin59277.ref.value = greyColour;
ui.coin62796.ref.value = blueColour;
ui.coin65598.ref.value = pinkColour;
ui.coin67938.ref.value = lineColour;
ui.coin47065.ref.value = selectedColour;


