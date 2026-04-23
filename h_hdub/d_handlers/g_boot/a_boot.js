utilityLayer1.style.pointerEvents = "none";
utilityLayer0.style.cursor = "move";
const defaultFilename = "pixel-level-1";
var filename = defaultFilename;
var gridLayer ; gridLayer = document.getElementById("gridLayer") ;
var mouseIconLayer ; mouseIconLayer = document.getElementById("mouseIconLayer");
var pulledText ; pulledText = document.createElement("textarea") ;
var edgeDetect ; edgeDetect = document.createElement("div") ;
var cursorDisplay = "block";
var lastFlow = "colour";
if (localStorage.getItem("pageFont")) {
document.body.style.fontFamily = localStorage.getItem("pageFont");
}
edgeDetect.style.position = "absolute";
edgeDetect.style.pointerEvents = "none";
//edgeDetect.style.boxShadow = `0px 0px 32px orange,0px 0px 32px orange,0px 0px 32px orange,0px 0px 32px orange,0px 0px 32px orange`;
edgeDetect.style.outline = `${edgeQ}px solid gold`;
edgeDetect.style.opacity = "0.25";
edgeDetect.style.display = "none";
edgeDetect.style.zIndex = "2000000000";
const HWworld = true;
var layerName = "1";
var useCustomCursors = false;
/* Not sure why I can't get these to work yet... Oops... */
/* I guess we'll just be using the defaults for now, but those are actually doing a lot better than we can. */
var cursorSize = [
[
[ 'a0_xsmall-31px', ' 16 16', ' 10 0', ' 10 21']
],
[
[ 'b0_small-49px', ' 25 25', ' 16 0', ' 16 33']
],
[
[ 'c0_medium-65px', ' 33 33', ' 21 0', ' 21 44']
],
[
[ 'd0_large-99px', ' 50 50', ' 32 0', ' 32 67']
],
[
['e0_xlarge-125px', ' 63 63', ' 42 0', ' 42 83']
]
];
var cursorSet = cursorSize[2][0];
var
cursor = {};
function cursorSetup() {
if (useCustomCursors==true) {
cursor.auto = `url('g_custom_cursors/${cursorSet[0]}/auto.png' ), auto `;
cursor.default = `url('g_custom_cursors/${cursorSet[0]}/default.png' ), default `;
cursor.none = `url('g_custom_cursors/${cursorSet[0]}/none.png' ), none `;
cursor.contextMenu = `url('g_custom_cursors/${cursorSet[0]}/context-menu.png' ), context-menu `;
cursor.help = `url('g_custom_cursors/${cursorSet[0]}/help.png' ), help `;
cursor.pointer = `url('g_custom_cursors/${cursorSet[0]}/pointer.png' ) ${cursorSet[2]}, pointer `;
cursor.progress = `url('g_custom_cursors/${cursorSet[0]}/progress.png' ), progress `;
cursor.wait = `url('g_custom_cursors/${cursorSet[0]}/wait.png' ) ${cursorSet[1]}, wait `;
cursor.cell = `url('g_custom_cursors/${cursorSet[0]}/cell.png' ) ${cursorSet[1]}, cell `;
cursor.crosshair = `url('g_custom_cursors/${cursorSet[0]}/default.png' ) , default `;
cursor.text = `url('g_custom_cursors/${cursorSet[0]}/text.png' ) ${cursorSet[1]}, text `;
cursor.verticalText = `url('g_custom_cursors/${cursorSet[0]}/vertical-text.png') ${cursorSet[1]}, vertical-text`;
cursor.alias = `url('g_custom_cursors/${cursorSet[0]}/alias.png' ), alias `;
cursor.copy = `url('g_custom_cursors/${cursorSet[0]}/copy.png' ), copy `;
cursor.move = `url('g_custom_cursors/${cursorSet[0]}/move.png' ) ${cursorSet[1]}, move `;
cursor.noDrop = `url('g_custom_cursors/${cursorSet[0]}/no-drop.png' ) ${cursorSet[1]}, no-drop `;
cursor.notAllowed = `url('g_custom_cursors/${cursorSet[0]}/not-allowed.png' ) ${cursorSet[1]}, not-allowed `;
cursor.grab = `url('g_custom_cursors/${cursorSet[0]}/grab.png' ) ${cursorSet[3]}, grab `;
cursor.grabbing = `url('g_custom_cursors/${cursorSet[0]}/grabbing.png' ) ${cursorSet[3]}, grabbing `;
cursor.allScroll = `url('g_custom_cursors/${cursorSet[0]}/all-scroll.png' ) ${cursorSet[1]}, all-scroll `;
cursor.colResize = `url('g_custom_cursors/${cursorSet[0]}/col-resize.png' ) ${cursorSet[1]}, col-resize `;
cursor.rowResize = `url('g_custom_cursors/${cursorSet[0]}/row-resize.png' ) ${cursorSet[1]}, row-resize `;
cursor.nResize = `url('g_custom_cursors/${cursorSet[0]}/n-resize.png' ) ${cursorSet[1]}, n-resize `;
cursor.eResize = `url('g_custom_cursors/${cursorSet[0]}/e-resize.png' ) ${cursorSet[1]}, e-resize `;
cursor.sResize = `url('g_custom_cursors/${cursorSet[0]}/s-resize.png' ) ${cursorSet[1]}, s-resize `;
cursor.wResize = `url('g_custom_cursors/${cursorSet[0]}/w-resize.png' ) ${cursorSet[1]}, w-resize `;
cursor.neResize = `url('g_custom_cursors/${cursorSet[0]}/ne-resize.png' ) ${cursorSet[1]}, ne-resize `;
cursor.nwResize = `url('g_custom_cursors/${cursorSet[0]}/nw-resize.png' ) ${cursorSet[1]}, nw-resize `;
cursor.seResize = `url('g_custom_cursors/${cursorSet[0]}/se-resize.png' ) ${cursorSet[1]}, se-resize `;
cursor.swResize = `url('g_custom_cursors/${cursorSet[0]}/sw-resize.png' ) ${cursorSet[1]}, sw-resize `;
cursor.ewResize = `url('g_custom_cursors/${cursorSet[0]}/ew-resize.png' ) ${cursorSet[1]}, ew-resize `;
cursor.nsResize = `url('g_custom_cursors/${cursorSet[0]}/ns-resize.png' ) ${cursorSet[1]}, ns-resize `;
cursor.neswResize = `url('g_custom_cursors/${cursorSet[0]}/nesw-resize.png' ) ${cursorSet[1]}, nesw-resize `;
cursor.nwseResize = `url('g_custom_cursors/${cursorSet[0]}/nwse-resize.png' ) ${cursorSet[1]}, nwse-resize `;
cursor.zoomIn = `url('g_custom_cursors/${cursorSet[0]}/zoom-in.png' ) ${cursorSet[1]}, zoom-in `;
cursor.zoomOut = `url('g_custom_cursors/${cursorSet[0]}/zoom-out.png' ) ${cursorSet[1]}, zoom-out `;
} else {
cursor.auto = "auto ";
cursor.default = "default ";
cursor.none = "none ";
cursor.contextMenu = "context-menu ";
cursor.help = "help ";
cursor.pointer = "pointer ";
cursor.progress = "progress ";
cursor.wait = "wait ";
cursor.cell = "cell ";
cursor.crosshair = "crosshair ";
cursor.text = "text ";
cursor.verticalText = "vertical-text";
cursor.alias = "alias ";
cursor.copy = "copy ";
cursor.move = "move ";
cursor.noDrop = "no-drop ";
cursor.notAllowed = "not-allowed ";
cursor.grab = "grab ";
cursor.grabbing = "grabbing ";
cursor.allScroll = "all-scroll ";
cursor.colResize = "col-resize ";
cursor.rowResize = "row-resize ";
cursor.nResize = "n-resize ";
cursor.eResize = "e-resize ";
cursor.sResize = "s-resize ";
cursor.wResize = "w-resize ";
cursor.neResize = "ne-resize ";
cursor.nwResize = "nw-resize ";
cursor.seResize = "se-resize ";
cursor.swResize = "sw-resize ";
cursor.ewResize = "ew-resize ";
cursor.nsResize = "ns-resize ";
cursor.neswResize = "nesw-resize ";
cursor.nwseResize = "nwse-resize ";
cursor.zoomIn = "zoom-in ";
cursor.zoomOut = "zoom-out ";
}
document.documentElement.style.cursor = document.body.style.cursor = cursor.crosshair;
}
cursorSetup();
/* This is for the visible layering system that is accessible from the 'top-row numbers'. */
const b_layer1 = document.createElement("div");
const c_layer2 = document.createElement("div");
const d_layer3 = document.createElement("div");
const e_layer4 = document.createElement("div");
const f_layer5 = document.createElement("div");
const g_layer6 = document.createElement("div");
const h_layer7 = document.createElement("div");
const i_layer8 = document.createElement("div");
const j_layer9 = document.createElement("div");
const k_layer10 = document.createElement("div");
const l_layer11 = document.createElement("div");
const m_layer12 = document.createElement("div");
const n_layer13 = document.createElement("div");
const o_layer14 = document.createElement("div");
const p_layer15 = document.createElement("div");
const q_layer16 = document.createElement("div");
const r_layer17 = document.createElement("div");
const s_layer18 = document.createElement("div");
const t_layer19 = document.createElement("div");
const u_layer20 = document.createElement("div");
const v_layer21 = document.createElement("div");
const w_layer22 = document.createElement("div");
const x_layer23 = document.createElement("div");
const y_layer24 = document.createElement("div");
const z_layer25 = document.createElement("div");
const importer = document.createElement("div");
const thePhantomLair = document.createElement("div");
thePhantomLair.innerHTML = "";
thePhantomLair.style.pointerEvents = "none";
thePhantomLair.style.opacity = "0.15";
thePhantomLair.id = "thePhantomLair";
document.body.prepend(thePhantomLair);
if (localStorage.getItem("thePhantomLairOpacity")) {
thePhantomLair.style.opacity = parseFloat(localStorage.getItem("thePhantomLairOpacity"));
}
const localView = document.createElement("div");
var localViewReturn = null;
var topLayer =
{
"aa_project_name" : "pixel-art-project",
"a_currentLayer" : "b_layer1",
"b_layer1" : { "backgroundColour" : "#FFFFFF", "a_name" : "b_layer1", "b_content" : b_layer1, "c_title" : "", "d_description" : "Page 1 of my pixel art project.", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "1", "filename" : "pixel-level-1", "echelon" : 1, "header" : "", "footer" : "" },
"c_layer2" : { "backgroundColour" : "#FFFFFF", "a_name" : "c_layer2", "b_content" : c_layer2, "c_title" : "", "d_description" : "Page 2 of my pixel art project.", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "2", "filename" : "pixel-level-2", "echelon" : 1, "header" : "", "footer" : "" },
"d_layer3" : { "backgroundColour" : "#FFFFFF", "a_name" : "d_layer3", "b_content" : d_layer3, "c_title" : "", "d_description" : "Page 3 of my pixel art project.", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "3", "filename" : "pixel-level-3", "echelon" : 1, "header" : "", "footer" : "" },
"e_layer4" : { "backgroundColour" : "#FFFFFF", "a_name" : "e_layer4", "b_content" : e_layer4, "c_title" : "", "d_description" : "Page 4 of my pixel art project.", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "4", "filename" : "pixel-level-4", "echelon" : 1, "header" : "", "footer" : "" },
"f_layer5" : { "backgroundColour" : "#FFFFFF", "a_name" : "f_layer5", "b_content" : f_layer5, "c_title" : "", "d_description" : "Page 5 of my pixel art project.", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "5", "filename" : "pixel-level-5", "echelon" : 1, "header" : "", "footer" : "" },
"g_layer6" : { "backgroundColour" : "#FFFFFF", "a_name" : "g_layer6", "b_content" : g_layer6, "c_title" : "", "d_description" : "Page 6 of my pixel art project.", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "6", "filename" : "pixel-level-6", "echelon" : 1, "header" : "", "footer" : "" },
"h_layer7" : { "backgroundColour" : "#FFFFFF", "a_name" : "h_layer7", "b_content" : h_layer7, "c_title" : "", "d_description" : "Page 7 of my pixel art project.", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "7", "filename" : "pixel-level-7", "echelon" : 1, "header" : "", "footer" : "" },
"i_layer8" : { "backgroundColour" : "#FFFFFF", "a_name" : "i_layer8", "b_content" : i_layer8, "c_title" : "", "d_description" : "Page 8 of my pixel art project.", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "8", "filename" : "pixel-level-8", "echelon" : 1, "header" : "", "footer" : "" },
"j_layer9" : { "backgroundColour" : "#FFFFFF", "a_name" : "j_layer9", "b_content" : j_layer9, "c_title" : "", "d_description" : "Page 9 of my pixel art project.", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "9", "filename" : "pixel-level-9", "echelon" : 1, "header" : "", "footer" : "" },
"k_layer10" : { "backgroundColour" : "#FFFFFF", "a_name" : "k_layer10", "b_content" : k_layer10, "c_title" : "", "d_description" : "Page 10 of my pixel art project.", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "10", "filename" : "pixel-level-10", "echelon" : 1, "header" : "", "footer" : "" },
"l_layer11" : { "backgroundColour" : "#FFFFFF", "a_name" : "l_layer11", "b_content" : l_layer11, "c_title" : "", "d_description" : "Page 11 of my pixel art project.", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "11", "filename" : "pixel-level-11", "echelon" : 1, "header" : "", "footer" : "" },
"m_layer12" : { "backgroundColour" : "#FFFFFF", "a_name" : "m_layer12", "b_content" : m_layer12, "c_title" : "", "d_description" : "Page 12 of my pixel art project.", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "12", "filename" : "pixel-level-12", "echelon" : 1, "header" : "", "footer" : "" },
"n_layer13" : { "backgroundColour" : "#FFFFFF", "a_name" : "n_layer13", "b_content" : n_layer13, "c_title" : "", "d_description" : "Page 13 of my pixel art project.", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "13", "filename" : "pixel-level-13", "echelon" : 1, "header" : "", "footer" : "" },
"o_layer14" : { "backgroundColour" : "#FFFFFF", "a_name" : "o_layer14", "b_content" : o_layer14, "c_title" : "", "d_description" : "Page 14 of my pixel art project.", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "14", "filename" : "pixel-level-14", "echelon" : 1, "header" : "", "footer" : "" },
"p_layer15" : { "backgroundColour" : "#FFFFFF", "a_name" : "p_layer15", "b_content" : p_layer15, "c_title" : "", "d_description" : "Page 15 of my pixel art project.", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "15", "filename" : "pixel-level-15", "echelon" : 1, "header" : "", "footer" : "" },
"q_layer16" : { "backgroundColour" : "#FFFFFF", "a_name" : "q_layer16", "b_content" : q_layer16, "c_title" : "", "d_description" : "Page 16 of my pixel art project.", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "16", "filename" : "pixel-level-16", "echelon" : 1, "header" : "", "footer" : "" },
"r_layer17" : { "backgroundColour" : "#FFFFFF", "a_name" : "r_layer17", "b_content" : r_layer17, "c_title" : "", "d_description" : "Page 17 of my pixel art project.", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "17", "filename" : "pixel-level-17", "echelon" : 1, "header" : "", "footer" : "" },
"s_layer18" : { "backgroundColour" : "#FFFFFF", "a_name" : "s_layer18", "b_content" : s_layer18, "c_title" : "", "d_description" : "Page 18 of my pixel art project.", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "18", "filename" : "pixel-level-18", "echelon" : 1, "header" : "", "footer" : "" },
"t_layer19" : { "backgroundColour" : "#FFFFFF", "a_name" : "t_layer19", "b_content" : t_layer19, "c_title" : "", "d_description" : "Page 19 of my pixel art project.", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "19", "filename" : "pixel-level-19", "echelon" : 1, "header" : "", "footer" : "" },
"u_layer20" : { "backgroundColour" : "#FFFFFF", "a_name" : "u_layer20", "b_content" : u_layer20, "c_title" : "", "d_description" : "Page 20 of my pixel art project.", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "20", "filename" : "pixel-level-20", "echelon" : 1, "header" : "", "footer" : "" },
"v_layer21" : { "backgroundColour" : "#FFFFFF", "a_name" : "v_layer21", "b_content" : v_layer21, "c_title" : "", "d_description" : "", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "LVL 21", "filename" : "100_emptyFile", "echelon" : 1, "header" : "", "footer" : "" },
"w_layer22" : { "backgroundColour" : "#FFFFFF", "a_name" : "w_layer22", "b_content" : w_layer22, "c_title" : "", "d_description" : "", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "LVL 22", "filename" : "100_emptyFile", "echelon" : 1, "header" : "", "footer" : "" },
"x_layer23" : { "backgroundColour" : "#FFFFFF", "a_name" : "x_layer23", "b_content" : x_layer23, "c_title" : "", "d_description" : "", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "LVL 23", "filename" : "100_emptyFile", "echelon" : 1, "header" : "", "footer" : "" },
"y_layer24" : { "backgroundColour" : "#FFFFFF", "a_name" : "y_layer24", "b_content" : y_layer24, "c_title" : "", "d_description" : "", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "LVL 24", "filename" : "100_emptyFile", "echelon" : 1, "header" : "", "footer" : "" },
"z_layer25" : { "backgroundColour" : "#FFFFFF", "a_name" : "z_layer25", "b_content" : z_layer25, "c_title" : "", "d_description" : "", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "LVL 25", "filename" : "100_emptyFile", "echelon" : 1, "header" : "", "footer" : "" },
"importer" : { "backgroundColour" : "#FFFFFF", "a_name" : "importer" , "b_content" : importer, "c_title" : "", "d_description" : "", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "importer", "filename": "importer" , "echelon" : 1 },
"thePhantomLair" : { "backgroundColour" : "#FFFFFF", "a_name" : "thePhantomLair", "b_content" : thePhantomLair, "c_title" : "", "d_description" : "", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "thePhantomLair", "filename" : "thePhantomLair", "echelon" : 1 },
"localView" : { "backgroundColour" : "#FFFFFF", "a_name" : "localView", "b_content" : localView, "c_title" : "", "d_description" : "", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "TAB VIEW", "filename" : "100_emptyFile", "echelon" : 1 }
};
[
"b_layer1",
"c_layer2",
"d_layer3",
"e_layer4",
"f_layer5",
"g_layer6",
"h_layer7",
"i_layer8",
"j_layer9",
"k_layer10",
"l_layer11",
"m_layer12",
"n_layer13",
"o_layer14",
"p_layer15",
"q_layer16",
"r_layer17",
"s_layer18",
"t_layer19",
"u_layer20",
"v_layer21",
"w_layer22",
"x_layer23",
"y_layer24",
"z_layer25"
].forEach((layerName) => {
topLayer[layerName].header = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="description" content="{{description}}">
<title>{{title}}</title>
`;
topLayer[layerName].footer = `
</body>
</html>
`;
});
topLayer.programStateAccumulator = [];
topLayer.buoyHide = "true";
topLayer.buoyPoint = {};
topLayer.buoyPoint.buoy0 = {};
topLayer.buoyPoint.buoy1 = {};
topLayer.buoyPoint.buoy2 = {};
topLayer.buoyPoint.buoy3 = {};
topLayer.buoyPoint.buoy4 = {};
topLayer.buoyPoint.buoy5 = {};
topLayer.buoyPoint.buoy6 = {};
topLayer.buoyPoint.buoy7 = {};
topLayer.buoyPoint.buoy8 = {};
topLayer.buoyPoint.buoy9 = {};
topLayer.buoyPoint.buoy0.location = [0, 0];
topLayer.buoyPoint.buoy1.location = [1000, 0];
topLayer.buoyPoint.buoy2.location = [2000, 0];
topLayer.buoyPoint.buoy3.location = [3000, 0];
topLayer.buoyPoint.buoy4.location = [4000, 0];
topLayer.buoyPoint.buoy5.location = [5000, 0];
topLayer.buoyPoint.buoy6.location = [6000, 0];
topLayer.buoyPoint.buoy7.location = [7000, 0];
topLayer.buoyPoint.buoy8.location = [8000, 0];
topLayer.buoyPoint.buoy9.location = [9000, 0];
topLayer.buoyPoint.buoy0.name = "0";
topLayer.buoyPoint.buoy1.name = "1";
topLayer.buoyPoint.buoy2.name = "2";
topLayer.buoyPoint.buoy3.name = "3";
topLayer.buoyPoint.buoy4.name = "4";
topLayer.buoyPoint.buoy5.name = "5";
topLayer.buoyPoint.buoy6.name = "6";
topLayer.buoyPoint.buoy7.name = "7";
topLayer.buoyPoint.buoy8.name = "8";
topLayer.buoyPoint.buoy9.name = "9";
topLayer.buoyPoint.buoy0.colour = "white";
topLayer.buoyPoint.buoy1.colour = "red";
topLayer.buoyPoint.buoy2.colour = "lime";
topLayer.buoyPoint.buoy3.colour = "cyan";
topLayer.buoyPoint.buoy4.colour = "magenta";
topLayer.buoyPoint.buoy5.colour = "yellow";
topLayer.buoyPoint.buoy6.colour = "orange";
topLayer.buoyPoint.buoy7.colour = "blue";
topLayer.buoyPoint.buoy8.colour = "lightgrey";
topLayer.buoyPoint.buoy9.colour = "purple";
topLayer.lastScroll = { left: 0, top: 0, behavior: "auto"};
if (localStorage.getItem("lastScroll")) {
topLayer.lastScroll = JSON.parse(localStorage.getItem("lastScroll"));
}
setTimeout(() => {
window.scrollTo(topLayer.lastScroll);
}, 200);
function gotoBuoy(point) {
window.scrollTo(point.location[0], point.location[1]);
}
function setBuoy(point) {
point.location[0] = window.scrollX;
point.location[1] = window.scrollY;
localStorage.setItem("buoyPoint", JSON.stringify(topLayer.buoyPoint));
}
if (localStorage.getItem("buoyPoint")) {
topLayer.buoyPoint = JSON.parse(localStorage.getItem("buoyPoint"));
}
pulledText.name = "pulledText";
pulledText.style.pointerEvents = "none";
var hotDog = false;
utilityLayer0.innerHTML = "";
utilityLayer1.innerHTML = "";
gridLayer.innerHTML = "";
mouseIconLayer.innerHTML = "";
pulledText.onmouseover = function() { this.select(); };
pulledText.onclick = function() { this.select(); };
pulledText.onmouseleave = function() { this.style.display = "none";};
pulledText.style.overflow = "hidden";
pulledText.style.wordBreak = "break-word";
pulledText.style.lineHeight = "1";
pulledText.style.position = "absolute";
pulledText.readOnly = "true";
pulledText.style.fontSize = `128px`;
pulledText.style.resize = "none";
pulledText.style.opacity = "0";
pulledText.style.display = "none";
pulledText.style.zIndex = "2000000000";
const blankSpaces =
`
`;
mouseIconLayer.appendChild(pulledText) ;
mouseIconLayer.appendChild(edgeDetect) ;
utilityLayer0.style.opacity = "0.75";
utilityLayer1.style.opacity = "0.25";
var partsOpacity = K;
if (localStorage.getItem("partsOpacity")) { partsOpacity = localStorage.getItem("partsOpacity"); ui.coin59527.ref.value = partsOpacity; utilityLayer0.style.opacity=partsOpacity; }
/* This detects the caps-lock state, when possible. */
var CAPS = -1;
document.addEventListener("blur", (event) => { CAPS = -1; });
/* This decides the rotation step. */
var rotationStep = 5;
var ZrotationStep = 5;
/* This mode will tell us CSS or Construction. */
var hauptMode = 0;
var spacebarHold = false;
/* This is an important little bit that holds the LAST KEY PRESSED.
 * This allows a secondary action on subsequent keypresses. */
var lastKey = "w";
var coinFocus = null,
 coinFocus1 = null,
 coinFocus2 = null;
var curFocus = 0;
/* Add these two custom properties on the window. */
window.children = [];
window.parents = [];
let w = window;
try {
while (w.opener) {
w = w.opener;
window.parents[parents.length] = w;
}
} catch {}
window.closed = false;
/* CHROME complains of this deprecated feature. */
//window.onunload = () => { window.closed = true; }
window.onbeforeunload = () => { window.closed = true; }
const docE = document.documentElement;
const docB = document.body;
/* This holds the tripartite description, referencing all coins. */
var
coinTrip = {};
coinTrip.sel0 = []; coinTrip.sel0.name = `coinTrip.sel0`;
coinTrip.sel1 = []; coinTrip.sel1.name = `coinTrip.sel1`;
coinTrip.sel2 = []; coinTrip.sel2.name = `coinTrip.sel2`;
coinTrip.out0 = []; coinTrip.out0.name = `coinTrip.out0`;
let yank=0;
let pasteAfter=0;
let pasteBefore=0;
let holdChar=null;
var
singlePasteBuffer={};
singlePasteBuffer.value=new Array();
singlePasteBuffer.name="singlePasteBuffer";
var
singleRestoreBuffer={};
singleRestoreBuffer.value=new Array();
singleRestoreBuffer.name="singleRestoreBuffer";
var
multiplePasteBuffer={};
multiplePasteBuffer.value=[];
multiplePasteBuffer.name="multiplePasteBuffer";
var
sel0PasteBuffer={};
sel0PasteBuffer.value=[];
sel0PasteBuffer.name="sel0PasteBuffer";
var
sel1PasteBuffer={};
sel1PasteBuffer.value=[];
sel1PasteBuffer.name="sel1PasteBuffer";
var
sel2PasteBuffer={};
sel2PasteBuffer.value=[];
sel2PasteBuffer.name="sel2PasteBuffer";
/* These will hold references that will be used to paste a coin. */
var
hold = {};
hold.q = {value:null,name:"q"}; hold.w = {value:null,name:"w"}; hold.e = {value:null,name:"e"}; hold.r = {value:null,name:"r"}; hold.t = {value:null,name:"t"}; hold.y = {value:null,name:"y"};
hold.u = {value:null,name:"u"}; hold.i = {value:null,name:"i"}; hold.o = {value:null,name:"o"}; hold.p = {value:null,name:"p"}; hold.a = {value:null,name:"a"}; hold.s = {value:null,name:"s"};
hold.d = {value:null,name:"d"}; hold.f = {value:null,name:"f"}; hold.g = {value:null,name:"g"}; hold.h = {value:null,name:"h"}; hold.j = {value:null,name:"j"}; hold.k = {value:null,name:"k"};
hold.l = {value:null,name:"l"}; hold.z = {value:null,name:"z"}; hold.x = {value:null,name:"x"}; hold.c = {value:null,name:"c"}; hold.v = {value:null,name:"v"}; hold.b = {value:null,name:"b"};
hold.n = {value:null,name:"n"}; hold.m = {value:null,name:"m"};
if (loadReferenceData()) {
} else {
}
var rev = 0; /* flow reversal */
function visualFlowIndicator() {if (rev==0) {return (`\u21D6`);} else if (rev==1) {return (`\u21D8`);} }
var Picture=document.createElement("canvas");
Picture.style.display="none";
Picture.style.position="absolute";
Picture.style.left="0";
Picture.style.top="0";
Picture.width=0;
Picture.height=0;
Picture.style.pointerEvents="none";
Picture.style.outlineWidth=bW/2 + "px";
Picture.style.outlineStyle="dashed";
if (localStorage.getItem("bU")) { bU = localStorage.getItem("bU"); ui.coin43886.ref.value = bU; }
Picture.style.outlineColor=bU;
var pictureOpacity = 1;
if (localStorage.getItem("pictureOpacity")) {
pictureOpacity = localStorage.getItem("pictureOpacity");
ui.coin17325.ref.value = pictureOpacity;
ui.menuWrapper.ref.style.opacity=pictureOpacity;
}
ui.menuWrapper.ref.style.transform="scale(2)";
Picture.style.opacity=pictureOpacity;
Picture.style.transformOrigin = "top left";
gridLayer.appendChild(Picture);
var grid0Viz = "true";
var visualGridThickness1 = gW;
var visualGridColour1 = "#FFFF00";
var visualGridSize1 = T;
var grid1Viz = "false";
var visualGridThickness2 = gW;
var visualGridColour2 = "#00FFFF";
var visualGridSize2 = T;
var grid2Viz = "false";
var visualGridThickness3 = gW;
var visualGridColour3 = "#FF00FF";
var visualGridSize3 = T;
var grid3Viz = "false";
if (localStorage.getItem("T")) { T = parseInt(localStorage.getItem("T")); ui.snapGridIncrement.ref.value = T; }
if (localStorage.getItem("mouseIncrement")) { mouseIncrement = parseInt(localStorage.getItem("mouseIncrement")); ui.coin18868.ref.value = mouseIncrement; }
if (localStorage.getItem("grid0Viz")) { grid0Viz = localStorage.getItem("grid0Viz"); }
if (localStorage.getItem("grid1Viz")) { grid1Viz = localStorage.getItem("grid1Viz"); }
if (localStorage.getItem("grid2Viz")) { grid2Viz = localStorage.getItem("grid2Viz"); }
if (localStorage.getItem("grid3Viz")) { grid3Viz = localStorage.getItem("grid3Viz"); }
if (localStorage.getItem("visualGridThickness1")) { visualGridThickness1 = parseInt(localStorage.getItem("visualGridThickness1")); }
 if (localStorage.getItem("visualGridColour1")) { visualGridColour1 = localStorage.getItem("visualGridColour1"); ui.coin28281.ref.value = visualGridColour1; }
 if (localStorage.getItem("visualGridSize1")) { visualGridSize1 = parseInt(localStorage.getItem("visualGridSize1")); ui.coin18868.ref.value = visualGridSize1; }
if (localStorage.getItem("visualGridThickness2")) { visualGridThickness2 = parseInt(localStorage.getItem("visualGridThickness2")); }
 if (localStorage.getItem("visualGridColour2")) { visualGridColour2 = localStorage.getItem("visualGridColour2"); ui.coin30119.ref.value = visualGridColour2; }
 if (localStorage.getItem("visualGridSize2")) { visualGridSize2 = parseInt(localStorage.getItem("visualGridSize2")); ui.coin21315.ref.value = visualGridSize2; }
if (localStorage.getItem("visualGridThickness3")) { visualGridThickness3 = parseInt(localStorage.getItem("visualGridThickness3")); }
 if (localStorage.getItem("visualGridColour3")) { visualGridColour3 = localStorage.getItem("visualGridColour3"); ui.coin32259.ref.value = visualGridColour3; }
 if (localStorage.getItem("visualGridSize3")) { visualGridSize3 = parseInt(localStorage.getItem("visualGridSize3")); ui.coin23538.ref.value = visualGridSize3; }
if (localStorage.getItem("K")) {
 K = localStorage.getItem("K");
 ui.coin53526.ref.value = K;
}
/* Initialize the grid. */
document.documentElement.style.backgroundColor = L;
const V = document.createElement("canvas");
const F = document.createElement("textarea");
F.name = "spaceBarRetainer";
{
 const s = `position:fixed;left:0;top:0;pointer-events:none;`;
 V.style = s;
 V.style.opacity = K;
 F.style = s + `background-color:transparent;color:transparent;border:0;margin:0;padding:0;resize:none;user-select:none;width:${window.innerWidth}px;height:${window.innerHeight}px;`;
 F.readOnly = true;
 F.tabIndex = -1;
}
gridLayer.appendChild(V);
gridLayer.appendChild(F);
function Z() {
 const vWidth = window.innerWidth;
 const vHeight = window.innerHeight;
 if (vWidth > 3500 || vHeight > 3500) { V.width = 0; return 0; }
 if (K == 0) return;
 // Sync dimensions once
 F.style.width = `${vWidth}px`;
 F.style.height = `${vHeight}px`;
 V.width = vWidth;
 V.height = vHeight;
 const Y = V.getContext("2d");
 const sX = window.scrollX;
 const sY = window.scrollY;
 // Helper to draw grids without repeating code
 function drawGrid(size, color, thickness) {
 if (size < 8 || gW == 0) return;
 Y.strokeStyle = color;
 Y.lineWidth = thickness;
 Y.beginPath();
 const offsetX = size - (sX % size);
 const offsetY = size - (sY % size);
 for (let x = offsetX; x < vWidth; x += size) {
 Y.moveTo(x, 0);
 Y.lineTo(x, vHeight);
 }
 for (let y = offsetY; y < vHeight; y += size) {
 Y.moveTo(0, y);
 Y.lineTo(vWidth, y);
 }
 Y.stroke();
 }
 if (grid1Viz == "true") drawGrid(visualGridSize1, visualGridColour1, visualGridThickness1);
 if (grid2Viz == "true") drawGrid(visualGridSize2, visualGridColour2, visualGridThickness2);
 if (grid3Viz == "true") drawGrid(visualGridSize3, visualGridColour3, visualGridThickness3);
 if (grid0Viz == "true") drawGrid(T, U, gW);
 // Crosshair / Origin Lines
 Y.beginPath();
 Y.strokeStyle = bU;
 Y.lineWidth = bW;
 Y.moveTo(0, -sY);
 Y.lineTo(vWidth, -sY);
 Y.moveTo(-sX, 0);
 Y.lineTo(-sX, vHeight);
 Y.stroke();
 V.style.opacity = K;
 // Buoy Points with Visibility Check
 if (topLayer.buoyHide == "false") {
 try {
 const buoyValues = Object.values(topLayer.buoyPoint);
 Y.fillStyle = visualGridColour3;
 Y.font = "400 96px dckimPixelMono";
 Y.textBaseline = "top";
 for (let j = 0; j < buoyValues.length; j++) {
 const bX = Math.floor(buoyValues[j].location[0] - sX + 20);
 const bY = Math.floor(buoyValues[j].location[1] - sY + 1);
 // Only draw text if it's on screen (approximate bounds)
 if (bX > -500 && bX < vWidth && bY > -100 && bY < vHeight) {
 Y.fillText(buoyValues[j].name, bX, bY);
 }
 }
 } catch (e) {}
 }
 // UI Overlay Text
 if (gW != 0) {
 Y.fillStyle = U;
 Y.font = "400 32px dckimPixelMono";
 Y.textBaseline = "top";
 const uiText = `${layerName} ${vWidth}x${vHeight} KEY:${T.toString().padStart(4, ' ')} MOUSE:${mouseIncrement.toString().padStart(3, ' ')} Z:${(pageEchelon / 100000000).toString().padStart(3, ' ')}`;
 Y.fillText(uiText, 16, 16);
 Y.font = "400 64px dckimPixelMono";
 Y.fillText("\nلَا إِلَٰهَ إِلَّا ٱللَّٰهُ مُحَمَّدٌ رَسُولُ ٱللَّٰه", 768, 16);
 }
}
Z();
function loadViewFinder() {
document.getElementById("coordinates").innerHTML = `<pre style="font: inherit;">${parseInt(window.pageXOffset).toString().padStart(8, " ")} ${parseInt(window.pageYOffset).toString().padStart(10, " ")}</pre>`;
}
loadViewFinder();
window.addEventListener("resize",()=>{Z(); redraw(); drawSiteMap();});
window.addEventListener("scroll",()=>{Z(); redraw(); drawSiteMap(); loadViewFinder(); });
//document.addEventListener("keydown",(event)=>{F.focus();F.value='';});
var shelfMenuScale = 2;
if (localStorage.getItem("shelfMenuScale")) {
shelfMenuScale = parseFloat(localStorage.getItem("shelfMenuScale"));
ui.menuWrapper.ref.style.transform = "scale(" + shelfMenuScale + ")";
ui.menu_open.ref.style.transform = "scale(" + shelfMenuScale + ")";
}
if (localStorage.getItem("shelfMenuScaleSetting")) {
scaleRange.value = parseFloat(localStorage.getItem("shelfMenuScaleSetting"));
newFactor = ((1600 - scaleRange.value + 50)/200);
newHeight = (newFactor * 488) + "px";
newWidth = newFactor * 8;
leftBlocker.style.right = 1600 - scaleRange.value + (newWidth/2) + "px";
mouseCatcher.style.right = 1600 - newWidth - scaleRange.value + (newWidth/2) + "px";
rightBlocker.style.right = -scaleRange.value - (newWidth/2) + "px";
rightBlocker.style.height = newHeight;
leftBlocker.style.height = newHeight;
scaleRange.style.height = newHeight;
mouseCatcher.style.height = newHeight;
mouseCatcher.style.width = newWidth + "px";
}
var gridIncrementArray = "3-2";
if (localStorage.getItem("gridIncrementArray")) { gridIncrementArray = localStorage.getItem("gridIncrementArray"); }
window.mouseIncrementCycle = function () {
if (gridIncrementArray=="3-2") {
 if (mouseIncrement== 1) {mouseIncrement= 4;}
else if (mouseIncrement== 4) {mouseIncrement= 8;}
else if (mouseIncrement== 8) {mouseIncrement= 16;}
else if (mouseIncrement== 16) {mouseIncrement= 1;}
else {mouseIncrement= 1;}
} else if (gridIncrementArray=="2") {
 if (mouseIncrement== 1) {mouseIncrement= 4;}
else if (mouseIncrement== 4) {mouseIncrement= 8;}
else if (mouseIncrement== 8) {mouseIncrement= 16;}
else if (mouseIncrement== 16) {mouseIncrement= 1;}
else {mouseIncrement= 1;}
} else if (gridIncrementArray=="3") {
 if (mouseIncrement== 1) {mouseIncrement= 6;}
else if (mouseIncrement== 6) {mouseIncrement= 12;}
else if (mouseIncrement== 12) {mouseIncrement= 24;}
else if (mouseIncrement== 24) {mouseIncrement= 1;}
else {mouseIncrement= 1;}
} else if (gridIncrementArray=="metric") {
 if (mouseIncrement== 1) {mouseIncrement= 5;}
else if (mouseIncrement== 5) {mouseIncrement= 10;}
else if (mouseIncrement== 10) {mouseIncrement= 20;}
else if (mouseIncrement== 20) {mouseIncrement= 1;}
else {mouseIncrement= 1;}
}
visualGridSize1 = mouseIncrement;
ui.coin18868.ref.value = mouseIncrement;
localStorage.setItem("visualGridSize1", visualGridSize1);
localStorage.setItem("mouseIncrement", mouseIncrement);
Z();
}
window.oneLessG = function () {
if (T!=0) {
T--;
Z();
};
};
window.oneMoreG = function () {
T++;
Z();
};
window.lessG = function () {
if (gridIncrementArray=="3-2") {
 if (T== 1) { }
else if (T== 2) {T= 1;E=2;U=D;aS1=128;aS2=256;}
else if (T== 4) {T= 2;E=2;U=D;aS1=128;aS2=256;}
else if (T== 8) {T= 4;E=2;U=D;aS1=128;aS2=256;}
else if (T== 12) {T= 8;E=2;U=D;aS1=128;aS2=256;}
else if (T== 16) {T= 12;E=3;U=C;aS1= 96;aS2=192;}
else if (T== 24) {T= 16;E=2;U=D;aS1= 64;aS2=128;}
else if (T== 32) {T= 24;E=3;U=C;aS1= 48;aS2= 96;}
else if (T== 48) {T= 32;E=2;U=D;aS1= 32;aS2= 64;}
else if (T== 64) {T= 48;E=3;U=C;aS1= 24;aS2= 48;}
else if (T== 96) {T= 64;E=2;U=D;aS1= 16;aS2= 32;}
else if (T==128) {T= 96;E=3;U=C;aS1= 12;aS2= 24;}
else if (T==192) {T=128;E=2;U=D;aS1= 8;aS2= 16;}
else if (T==256) {T=192;E=3;U=C;aS1= 6;aS2= 12;}
else if (T==384) {T=256;E=2;U=D;aS1= 4;aS2= 8;}
else if (T==512) {T=384;E=2;U=C;aS1= 4;aS2= 8;}
else {T= 64;E=2;U=D;aS1= 16;aS2= 32;}
} else if (gridIncrementArray=="2") {
 if (T== 1) { }
else if (T== 2) {T= 1;E=2;U=D;aS1=128;aS2=256;}
else if (T== 4) {T= 2;E=2;U=D;aS1=128;aS2=256;}
else if (T== 8) {T= 4;E=2;U=D;aS1=128;aS2=256;}
else if (T== 16) {T= 8;E=2;U=D;aS1=128;aS2=256;}
else if (T== 32) {T= 16;E=2;U=D;aS1= 64;aS2=128;}
else if (T== 64) {T= 32;E=2;U=D;aS1= 32;aS2= 64;}
else if (T==128) {T= 64;E=2;U=D;aS1= 16;aS2= 32;}
else if (T==256) {T=128;E=2;U=D;aS1= 8;aS2= 16;}
else if (T==512) {T=256;E=2;U=D;aS1= 4;aS2= 8;}
else {T= 64;E=2;U=D;aS1= 16;aS2= 32;}
} else if (gridIncrementArray=="3") {
 if (T== 1) { }
else if (T== 2) {T= 1;E=2;U=D;aS1=128;aS2=256;}
else if (T== 3) {T= 2;E=2;U=D;aS1=128;aS2=256;}
else if (T== 6) {T= 3;E=2;U=D;aS1=128;aS2=256;}
else if (T== 12) {T= 6;E=2;U=D;aS1=128;aS2=256;}
else if (T== 24) {T= 12;E=2;U=D;aS1= 64;aS2=128;}
else if (T== 48) {T= 24;E=2;U=D;aS1= 32;aS2= 64;}
else if (T== 96) {T= 48;E=2;U=D;aS1= 16;aS2= 32;}
else if (T==192) {T= 96;E=2;U=D;aS1= 8;aS2= 16;}
else if (T==384) {T=192;E=2;U=D;aS1= 4;aS2= 8;}
else if (T==768) {T=384;E=2;U=C;aS1= 4;aS2= 8;}
else {T= 48;E=2;U=D;aS1= 16;aS2= 32;}
} else if (gridIncrementArray=="metric") {
 if (T== 1) { }
else if (T== 2) {T= 1;E=2;U=D;aS1=128;aS2=256;}
else if (T== 5) {T= 2;E=2;U=D;aS1=128;aS2=256;}
else if (T== 10) {T= 5;E=2;U=D;aS1=128;aS2=256;}
else if (T== 20) {T= 10;E=2;U=D;aS1= 64;aS2=128;}
else if (T== 50) {T= 20;E=2;U=D;aS1= 32;aS2= 64;}
else if (T== 100) {T= 50;E=2;U=D;aS1= 16;aS2= 32;}
else if (T== 200) {T=100;E=2;U=D;aS1= 8;aS2= 16;}
else if (T== 500) {T=200;E=2;U=D;aS1= 4;aS2= 8;}
else if (T==1000) {T=500;E=2;U=C;aS1= 4;aS2= 8;}
else {T= 50;E=2;U=D;aS1= 16;aS2= 32;}
}
Z();
};
window.moreG = function () {
if (gridIncrementArray=="3-2") {
 if (T== 1) {T= 2;E=2;U=D;aS1= 96;aS2=192;}
else if (T== 2) {T= 4;E=2;U=D;aS1= 64;aS2=128;}
else if (T== 4) {T= 8;E=2;U=D;aS1= 64;aS2=128;}
else if (T== 8) {T= 12;E=3;U=C;aS1= 96;aS2=192;}
else if (T== 12) {T= 16;E=2;U=D;aS1= 64;aS2=128;}
else if (T== 16) {T= 24;E=3;U=C;aS1= 48;aS2= 96;}
else if (T== 24) {T= 32;E=2;U=D;aS1= 32;aS2= 64;}
else if (T== 32) {T= 48;E=3;U=C;aS1= 24;aS2= 48;}
else if (T== 48) {T= 64;E=2;U=D;aS1= 16;aS2= 32;}
else if (T== 64) {T= 96;E=3;U=C;aS1= 12;aS2= 24;}
else if (T== 96) {T=128;E=2;U=D;aS1= 8;aS2= 16;}
else if (T==128) {T=192;E=3;U=C;aS1= 6;aS2= 12;}
else if (T==192) {T=256;E=2;U=D;aS1= 4;aS2= 8;}
else if (T==256) {T=384;E=3;U=C;aS1= 2;aS2= 4;}
else if (T==384) {T=512;E=3;U=D;aS1= 2;aS2= 4;}
else if (T==512) { }
else {T= 64;E=2;U=D;aS1= 16;aS2= 32;}
} else if (gridIncrementArray=="2") {
 if (T== 1) {T= 2;E=2;U=D;aS1= 96;aS2=192;}
else if (T== 2) {T= 4;E=2;U=D;aS1= 64;aS2=128;}
else if (T== 4) {T= 8;E=2;U=D;aS1= 64;aS2=128;}
else if (T== 8) {T= 16;E=2;U=D;aS1= 64;aS2=128;}
else if (T== 16) {T= 32;E=2;U=D;aS1= 32;aS2= 64;}
else if (T== 32) {T= 64;E=2;U=D;aS1= 16;aS2= 32;}
else if (T== 64) {T=128;E=2;U=D;aS1= 8;aS2= 16;}
else if (T==128) {T=256;E=2;U=D;aS1= 4;aS2= 8;}
else if (T==256) {T=512;E=3;U=D;aS1= 2;aS2= 4;}
else if (T==512) { }
else {T= 64;E=2;U=D;aS1= 16;aS2= 32;}
} else if (gridIncrementArray=="3") {
 if (T== 1) {T= 2;E=2;U=D;aS1= 96;aS2=192;}
else if (T== 2) {T= 3;E=2;U=D;aS1= 96;aS2=192;}
else if (T== 3) {T= 6;E=2;U=D;aS1= 64;aS2=128;}
else if (T== 6) {T= 12;E=3;U=C;aS1= 96;aS2=192;}
else if (T== 12) {T= 24;E=3;U=C;aS1= 48;aS2= 96;}
else if (T== 24) {T= 48;E=3;U=C;aS1= 24;aS2= 48;}
else if (T== 48) {T= 96;E=3;U=C;aS1= 12;aS2= 24;}
else if (T== 96) {T=192;E=3;U=C;aS1= 6;aS2= 12;}
else if (T==192) {T=384;E=3;U=C;aS1= 2;aS2= 4;}
else if (T==384) {T=768;E=3;U=D;aS1= 2;aS2= 4;}
else if (T==768) { }
else {T= 48;E=2;U=D;aS1= 16;aS2= 32;}
} else if (gridIncrementArray=="metric") {
 if (T== 1) {T= 2;E=2;U=D;aS1=128;aS2=256;}
else if (T== 2) {T= 5;E=2;U=D;aS1=128;aS2=256;}
else if (T== 5) {T= 10;E=2;U=D;aS1= 64;aS2=128;}
else if (T== 10) {T= 20;E=2;U=D;aS1= 32;aS2= 64;}
else if (T== 20) {T= 50;E=2;U=D;aS1= 16;aS2= 32;}
else if (T== 50) {T= 100;E=2;U=D;aS1= 8;aS2= 16;}
else if (T== 100) {T= 200;E=2;U=D;aS1= 4;aS2= 8;}
else if (T== 200) {T= 500;E=2;U=C;aS1= 4;aS2= 8;}
else if (T== 500) {T=1000;E=2;U=D;aS1= 4;aS2= 8;}
else if (T==1000) { }
else {T= 50;E=2;U=D;aS1= 16;aS2= 32;}
}
Z();
}
/* Initialize the spatial cursor. */
const Cur = document.createElement("div");
Cur.style.position = "absolute";
Cur.style.width = cSZ + "px";
Cur.dataset.width = cSZ + "px";
Cur.style.height = cSZ + "px";
Cur.dataset.height = cSZ + "px";
Cur.style.top = cRT + (cSZ / 2) + "px";
Cur.dataset.top = cRT + (cSZ / 2) + "px";
Cur.style.left = cRL + (cSZ / 2) + "px";
Cur.dataset.left = cRL + (cSZ / 2) + "px";
Cur.style.userSelect = "none";
Cur.style.zIndex = "999999999";
Cur.style.pointerEvents = "none";
const curImg = document.createElement("img");
curImg.style.position = "absolute";
curImg.style.width = cSZ + "px";
curImg.style.height = cSZ + "px";
curImg.style.top = -cSZ/2 + "px";
curImg.style.left = -cSZ/2 + "px";
curImg.style.pointerEvents = "none";
curImg.style.userSelect = "none";
curImg.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAPdJREFUWIXl1tEOwyAIBVCfL4n//7mLUye1YMEmo9l8aXRyqrLSprRsRMB6xkX7AQAg+ncgPgvxQHwWwoH8btvhVBpK2w9vwA5BR8ArEM2Aj4AEOASgC7VTmyOhaALvg+xAu+FxiMgsiDseW7IC86gdUI7cvgQtZVYgr4Hzk9VT1q8qUIU8z1cAaW0KwDvlmtWt4vMzn28HoACnQ9ROuwHS2oStqsB1vPaPcTzSK8ASLy/BVVNaJToM+WoSTdVcTZkO8Do4iqMZGHUQvLza47kwAE88IzbDh7Adn0Y1v/GGv/l6T0/4SosHwr/SHgDEZyEeiM/CF4AXE18dqYulLVUAAAAASUVORK5CYII=";
Cur.appendChild(curImg);
gridLayer.appendChild(Cur);
Cur.style.opacity=pictureOpacity;
if (localStorage.getItem("cursorDisplay")) { Cur.style.display = localStorage.getItem("cursorDisplay"); cursorDisplay = Cur.style.display; }
/* Initialize window inheritances, if any. */
/* When a new window is opened from another, these values will become inherited. */
try {
if (window.opener!=null) {
window.T=window.opener.T;
window.aS1=window.opener.aS1;
window.aS2=window.opener.aS2;
window.aD1=window.opener.aD1;
window.aD2=window.opener.aD2;
window.E=window.opener.E;
window.L=window.opener.L;
window.U=window.opener.U;
window.C=window.opener.C;
window.D=window.opener.D;
window.gW=window.opener.gW;
window.bF=window.opener.bF;
window.bW=window.opener.bW;
window.bU=window.opener.bU;
window.K=window.opener.K;
//window.singlePasteBuffer.value = window.opener.singlePasteBuffer.value;
//window.multiplePasteBuffer.value = window.opener.multiplePasteBuffer.value;
Z();
window.hold=window.opener.hold;
}
} catch {}
P=document.createElement("div");
Q=document.createElement("div");
R=document.createElement("div");
S=document.createElement("div");
function setOut(A){
A.style=
`position:absolute;
pointer-events:none;
user-select:none;
width:${O+"px"};
height:${O+"px"};
background-color:${N};`;
gridLayer.appendChild(A);
}
setOut(P);
setOut(Q);
setOut(R);
setOut(S);
rdots();
function dot() {
P.style.display = "block";
Q.style.display = "block";
R.style.display = "block";
S.style.display = "block";
}
function rdots() {
P.style.display = "none";
Q.style.display = "none";
R.style.display = "none";
S.style.display = "none";
}
/* Initialize the focus manager "fMan". */
/* This file is to manage which part is being focused for the purpose of functions and modes. */
/* If no part is available for focus, then the spatial cursor should become the new focus. */
/* a toggle for the edge mode, which will allow us to isolate "right and bottom" or "top and left" for extendEdge. */
var eM = 0;
/* a toggle for the window edge mode. */
var wM = 0;
/* These enable the rotation between some of the possible arrangements from brick, stepStack and flow. */
let vST = 0; /* brick vertical */
let hST = 0; /* brick horizontal */
let sST = 0; /* stepStack flats */
let dST = 0; /* stepStack diagonals */
let charM=0,charQ1=0,charQ2=0;charF=0;
function flipEdge() {
if (mode==5) {
if(eM==0){
eM=1;
}else{
eM=0;
};}; }
function flipWindowEdge() { if (mode==0) { if (wM == 0) { wM = 1; } else { wM = 0; }; }; }
if (utilityLayer0.children.length==0) {
curFocus = 1;
hauptMode=0;
if (window.opener==null) {
insertNewCoin([null,78,78,0,0,0]);
if (coinFocus!=null) {
coinFocus.style.left = "100px";
coinFocus.dataset.left = "100px";
coinFocus.style.top = "100px";
coinFocus.dataset.top = "100px";
coinFocus.style.width = "250px";
coinFocus.dataset.width = "250px";
coinFocus.style.height = "300px";
coinFocus.dataset.height = "300px";
coinFocus.lastElementChild.firstElementChild.style.fontSize = "48px";
coinFocus.lastElementChild.firstElementChild.style.color = invertHexColour(finishedBackgroundColour);
coinFocus.lastElementChild.firstElementChild.style.overflow = "auto";
coinFocus.lastElementChild.firstElementChild.style.fontFamily = "dckimPixelMono";
coinFocus.lastElementChild.firstElementChild.innerHTML = `<button id="palmTree" class="pixelArt" style="position: absolute; top: 0px; left: 0px; background-color: transparent; background-size: 100% 100%; width: 100%; height: 100%; border: 0px; padding: 0px; margin: 0px;">
<style>
#palmTree               { background-image: url("data:image/png;base64,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"); outline: none; }
#palmTree:focus         { background-image: url("data:image/png;base64,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"); outline: none; }
#palmTree:hover         { background-image: url("data:image/png;base64,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"); outline: none; }
#palmTree:active        { background-image: url("data:image/png;base64,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"); outline: none; }
</style>
</button>`;
}
}
hauptMode=0;
if (coinFocus!=null) {
};
/* A refreshed window will start again with mode = 0 */
try {
if (window.opener) {
mode = 0;
toggleMenu();
}
} catch {}
} else {
coinFocus = utilityLayer0.lastElementChild;
}
readCoins();
let splashScreenVisible = false;
let splashScreen = document.createElement("div");
let firstTime = "true";
if (localStorage.getItem("firstTime")) { firstTime = localStorage.getItem("firstTime"); }
if (firstTime == "true") {
loadTheme("e4");
tabSelector(4); folder4Selector(2);
localStorage.setItem("firstTime", "false");
}
function programManual(page) { window.open(`./program-user-manual-for-hdub/${page}.html`,"_blank"); }
if (!window.opener) {
splashScreen.classList = "splashScreen";
splashScreen.style.backgroundImage = "url(" + splashScreenBase64 + ")";
splashScreen.style.backgroundSize = "100% 100%";
splashScreen.title = `F1`;
document.body.appendChild(splashScreen);
splashScreenVisible = true;
}
const z_wizardCode = {};
/* DRAW INITIAL BUTTON AFTER THE FONT IS LOADED */
document.fonts.load("16px 'dckimPixelMono'").then(() => {
drawButton7();
redraw();
});
redraw();
setTimeout(() => { redraw(); }, 2000);
updateInfoShelf();
spaceViewOn();
spaceViewOff();
document.documentElement.click();
/* Completion Message */
console.log(
`%c${document.querySelector('meta[name="last-build"]').content}
%chdub 
%c[ Pixel Art Edition ]
 it's all i know...
`,
'color: #00a1ee; font-size: 24px; font-family: dckimPixelMono; text-shadow: 0px 1px 0px lime, 1px 0px 0px magenta, 1px 1px 0px magenta;',
'color: #00a1ee; font-size: 120px; font-family: dckimPixelMono; text-shadow: 0px 3.5px 0px lime, 3.5px 0px 0px magenta, 3.5px 3.5px 0px magenta;',
'color: #00a1ee; font-size: 24px; font-family: dckimPixelMono; text-shadow: 0px 1px 0px lime, 1px 0px 0px magenta, 1px 1px 0px magenta;',
);
