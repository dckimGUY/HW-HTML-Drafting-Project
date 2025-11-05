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

["xrayGrey", "xrayMagenta", "xrayCyan", "partY", "partX", "partW", "partH", "cursorAuto", "cursorXS", "cursorS", "cursorM", "cursorL", "cursorXL", "cursorNum", "partNom", "partPrev", "partNext", "partText"].forEach((name) => {
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






















