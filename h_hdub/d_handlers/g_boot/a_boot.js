var   utilityLayer0     ; utilityLayer0      = document.getElementById("utilityLayer0");
var   utilityLayer1     ; utilityLayer1      = document.getElementById("utilityLayer1");

utilityLayer1.style.pointerEvents = "none";

utilityLayer0.style.cursor = "move";

const defaultFilename = "pixel-level-1";
var filename = defaultFilename;

var   gridLayer         ; gridLayer          = document.getElementById("gridLayer")     ;
var   mouseIconLayer    ; mouseIconLayer     = document.getElementById("mouseIconLayer");
var   pulledText        ; pulledText         = document.createElement("textarea")       ;
var   edgeDetect        ; edgeDetect         = document.createElement("div")            ;

var cursorDisplay = "block";

var lastFlow = "colour";



if (localStorage.getItem("pageFont")) {
document.body.style.fontFamily = localStorage.getItem("pageFont");
}

edgeDetect.style.position        =           "absolute";
edgeDetect.style.pointerEvents   =               "none";
//edgeDetect.style.boxShadow       = `0px 0px 32px orange,0px 0px 32px orange,0px 0px 32px orange,0px 0px 32px orange,0px 0px 32px orange`;
edgeDetect.style.outline         =               `${edgeQ}px solid gold`;
edgeDetect.style.opacity         =               "0.25";
edgeDetect.style.display         =               "none"; 
edgeDetect.style.zIndex          =         "2000000000"; 

var   interfaceLayer    ; interfaceLayer     = document.getElementById("interfaceLayer");
interfaceLayer.innerHTML = defaultUI;
interfaceLayer.style.display = "none";

const HWworld = true;
var layerName = "LVL 1";

var useCustomCursors = false;


/* Not sure why I can't get these to work yet... Oops... */
/* I guess we'll just be using the defaults for now, but those are actually doing a lot better than we can. */

var cursorSize = [
[
[ 'a0_xsmall-31px', ' 16 16', ' 10 0', ' 10 21']
],

[
[  'b0_small-49px', ' 25 25', ' 16 0', ' 16 33']
],

[
[ 'c0_medium-65px', ' 33 33', ' 21 0', ' 21 44']
],

[
[  'd0_large-99px', ' 50 50', ' 32 0', ' 32 67']
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
cursor.auto         = `url('g_custom_cursors/${cursorSet[0]}/auto.png'         ), auto         `;
cursor.default      = `url('g_custom_cursors/${cursorSet[0]}/default.png'      ), default      `;
cursor.none         = `url('g_custom_cursors/${cursorSet[0]}/none.png'         ), none         `;
cursor.contextMenu  = `url('g_custom_cursors/${cursorSet[0]}/context-menu.png' ), context-menu `;
cursor.help         = `url('g_custom_cursors/${cursorSet[0]}/help.png'         ), help         `;
cursor.pointer      = `url('g_custom_cursors/${cursorSet[0]}/pointer.png'      ) ${cursorSet[2]}, pointer      `;
cursor.progress     = `url('g_custom_cursors/${cursorSet[0]}/progress.png'     ), progress     `;
cursor.wait         = `url('g_custom_cursors/${cursorSet[0]}/wait.png'         ) ${cursorSet[1]}, wait         `;
cursor.cell         = `url('g_custom_cursors/${cursorSet[0]}/cell.png'         ) ${cursorSet[1]}, cell         `;
cursor.crosshair    = `url('g_custom_cursors/${cursorSet[0]}/default.png'      )                , default      `;
cursor.text         = `url('g_custom_cursors/${cursorSet[0]}/text.png'         ) ${cursorSet[1]}, text         `;
cursor.verticalText = `url('g_custom_cursors/${cursorSet[0]}/vertical-text.png') ${cursorSet[1]}, vertical-text`;
cursor.alias        = `url('g_custom_cursors/${cursorSet[0]}/alias.png'        ), alias        `;
cursor.copy         = `url('g_custom_cursors/${cursorSet[0]}/copy.png'         ), copy         `;
cursor.move         = `url('g_custom_cursors/${cursorSet[0]}/move.png'         ) ${cursorSet[1]}, move         `;
cursor.noDrop       = `url('g_custom_cursors/${cursorSet[0]}/no-drop.png'      ) ${cursorSet[1]}, no-drop      `;
cursor.notAllowed   = `url('g_custom_cursors/${cursorSet[0]}/not-allowed.png'  ) ${cursorSet[1]}, not-allowed  `;
cursor.grab         = `url('g_custom_cursors/${cursorSet[0]}/grab.png'         ) ${cursorSet[3]}, grab         `;
cursor.grabbing     = `url('g_custom_cursors/${cursorSet[0]}/grabbing.png'     ) ${cursorSet[3]}, grabbing     `;
cursor.allScroll    = `url('g_custom_cursors/${cursorSet[0]}/all-scroll.png'   ) ${cursorSet[1]}, all-scroll   `;
cursor.colResize    = `url('g_custom_cursors/${cursorSet[0]}/col-resize.png'   ) ${cursorSet[1]}, col-resize   `;
cursor.rowResize    = `url('g_custom_cursors/${cursorSet[0]}/row-resize.png'   ) ${cursorSet[1]}, row-resize   `;
cursor.nResize      = `url('g_custom_cursors/${cursorSet[0]}/n-resize.png'     ) ${cursorSet[1]}, n-resize     `;
cursor.eResize      = `url('g_custom_cursors/${cursorSet[0]}/e-resize.png'     ) ${cursorSet[1]}, e-resize     `;
cursor.sResize      = `url('g_custom_cursors/${cursorSet[0]}/s-resize.png'     ) ${cursorSet[1]}, s-resize     `;
cursor.wResize      = `url('g_custom_cursors/${cursorSet[0]}/w-resize.png'     ) ${cursorSet[1]}, w-resize     `;
cursor.neResize     = `url('g_custom_cursors/${cursorSet[0]}/ne-resize.png'    ) ${cursorSet[1]}, ne-resize    `;
cursor.nwResize     = `url('g_custom_cursors/${cursorSet[0]}/nw-resize.png'    ) ${cursorSet[1]}, nw-resize    `;
cursor.seResize     = `url('g_custom_cursors/${cursorSet[0]}/se-resize.png'    ) ${cursorSet[1]}, se-resize    `;
cursor.swResize     = `url('g_custom_cursors/${cursorSet[0]}/sw-resize.png'    ) ${cursorSet[1]}, sw-resize    `;
cursor.ewResize     = `url('g_custom_cursors/${cursorSet[0]}/ew-resize.png'    ) ${cursorSet[1]}, ew-resize    `;
cursor.nsResize     = `url('g_custom_cursors/${cursorSet[0]}/ns-resize.png'    ) ${cursorSet[1]}, ns-resize    `;
cursor.neswResize   = `url('g_custom_cursors/${cursorSet[0]}/nesw-resize.png'  ) ${cursorSet[1]}, nesw-resize  `;
cursor.nwseResize   = `url('g_custom_cursors/${cursorSet[0]}/nwse-resize.png'  ) ${cursorSet[1]}, nwse-resize  `;
cursor.zoomIn       = `url('g_custom_cursors/${cursorSet[0]}/zoom-in.png'      ) ${cursorSet[1]}, zoom-in      `;
cursor.zoomOut      = `url('g_custom_cursors/${cursorSet[0]}/zoom-out.png'     ) ${cursorSet[1]}, zoom-out     `;
} else {
cursor.auto         = "auto         ";
cursor.default      = "default      ";
cursor.none         = "none         ";
cursor.contextMenu  = "context-menu ";
cursor.help         = "help         ";
cursor.pointer      = "pointer      ";
cursor.progress     = "progress     ";
cursor.wait         = "wait         ";
cursor.cell         = "cell         ";
cursor.crosshair    = "crosshair    ";
cursor.text         = "text         ";
cursor.verticalText = "vertical-text";
cursor.alias        = "alias        ";
cursor.copy         = "copy         ";
cursor.move         = "move         ";
cursor.noDrop       = "no-drop      ";
cursor.notAllowed   = "not-allowed  ";
cursor.grab         = "grab         ";
cursor.grabbing     = "grabbing     ";
cursor.allScroll    = "all-scroll   ";
cursor.colResize    = "col-resize   ";
cursor.rowResize    = "row-resize   ";
cursor.nResize      = "n-resize     ";
cursor.eResize      = "e-resize     ";
cursor.sResize      = "s-resize     ";
cursor.wResize      = "w-resize     ";
cursor.neResize     = "ne-resize    ";
cursor.nwResize     = "nw-resize    ";
cursor.seResize     = "se-resize    ";
cursor.swResize     = "sw-resize    ";
cursor.ewResize     = "ew-resize    ";
cursor.nsResize     = "ns-resize    ";
cursor.neswResize   = "nesw-resize  ";
cursor.nwseResize   = "nwse-resize  ";
cursor.zoomIn       = "zoom-in      ";
cursor.zoomOut      = "zoom-out     ";
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
const importer  = document.createElement("div");

const thePhantomLair = document.createElement("div");

thePhantomLair.innerHTML  = "";
thePhantomLair.style.pointerEvents = "none";
thePhantomLair.style.opacity     = "0.15";
thePhantomLair.id = "thePhantomLair";
document.body.prepend(thePhantomLair);


if (localStorage.getItem("thePhantomLairOpacity")) {
thePhantomLair.style.opacity = parseFloat(localStorage.getItem("thePhantomLairOpacity"));
}

const localView = document.createElement("div");



var topLayer = 
{
"aa_project_name" : "pixel-art-project",
"a_currentLayer" : "b_layer1",
"b_layer1" :  { "a_name" : "b_layer1",  "b_content" : b_layer1,  "c_title" : "", "d_description" : "Page 1 of my pixel art project.", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "LVL 1",  "filename" : "pixel-level-1", "echelon" : 1, "header" : "", "footer" : "" },
"c_layer2" :  { "a_name" : "c_layer2",  "b_content" : c_layer2,  "c_title" : "", "d_description" : "Page 2 of my pixel art project.", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "LVL 2",  "filename" : "pixel-level-2", "echelon" : 1, "header" : "", "footer" : "" },
"d_layer3" :  { "a_name" : "d_layer3",  "b_content" : d_layer3,  "c_title" : "", "d_description" : "Page 3 of my pixel art project.", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "LVL 3",  "filename" : "pixel-level-3", "echelon" : 1, "header" : "", "footer" : "" },
"e_layer4" :  { "a_name" : "e_layer4",  "b_content" : e_layer4,  "c_title" : "", "d_description" : "Page 4 of my pixel art project.", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "LVL 4",  "filename" : "pixel-level-4", "echelon" : 1, "header" : "", "footer" : "" },
"f_layer5" :  { "a_name" : "f_layer5",  "b_content" : f_layer5,  "c_title" : "", "d_description" : "Page 5 of my pixel art project.", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "LVL 5",  "filename" : "pixel-level-5", "echelon" : 1, "header" : "", "footer" : "" },
"g_layer6" :  { "a_name" : "g_layer6",  "b_content" : g_layer6,  "c_title" : "", "d_description" : "Page 6 of my pixel art project.", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "LVL 6",  "filename" : "pixel-level-6", "echelon" : 1, "header" : "", "footer" : "" },
"h_layer7" :  { "a_name" : "h_layer7",  "b_content" : h_layer7,  "c_title" : "", "d_description" : "Page 7 of my pixel art project.", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "LVL 7",  "filename" : "pixel-level-7", "echelon" : 1, "header" : "", "footer" : "" },
"i_layer8" :  { "a_name" : "i_layer8",  "b_content" : i_layer8,  "c_title" : "", "d_description" : "Page 8 of my pixel art project.", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "LVL 8",  "filename" : "pixel-level-8", "echelon" : 1, "header" : "", "footer" : "" },
"j_layer9" :  { "a_name" : "j_layer9",  "b_content" : j_layer9,  "c_title" : "", "d_description" : "Page 9 of my pixel art project.", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "LVL 9",  "filename" : "pixel-level-9", "echelon" : 1, "header" : "", "footer" : "" },
"k_layer10" : { "a_name" : "k_layer10", "b_content" : k_layer10, "c_title" : "", "d_description" : "Page 10 of my pixel art project.", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "LVL 10", "filename" : "pixel-level-10", "echelon" : 1, "header" : "", "footer" : "" },
"l_layer11" : { "a_name" : "l_layer11", "b_content" : l_layer11, "c_title" : "", "d_description" : "Page 11 of my pixel art project.", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "LVL 11", "filename" : "pixel-level-11", "echelon" : 1, "header" : "", "footer" : "" },
"m_layer12" : { "a_name" : "m_layer12", "b_content" : m_layer12, "c_title" : "", "d_description" : "Page 12 of my pixel art project.", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "LVL 12", "filename" : "pixel-level-12", "echelon" : 1, "header" : "", "footer" : "" },
"n_layer13" : { "a_name" : "n_layer13", "b_content" : n_layer13, "c_title" : "", "d_description" : "Page 13 of my pixel art project.", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "LVL 13", "filename" : "pixel-level-13", "echelon" : 1, "header" : "", "footer" : "" },
"o_layer14" : { "a_name" : "o_layer14", "b_content" : o_layer14, "c_title" : "", "d_description" : "Page 14 of my pixel art project.", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "LVL 14", "filename" : "pixel-level-14", "echelon" : 1, "header" : "", "footer" : "" },
"p_layer15" : { "a_name" : "p_layer15", "b_content" : p_layer15, "c_title" : "", "d_description" : "Page 15 of my pixel art project.", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "LVL 15", "filename" : "pixel-level-15", "echelon" : 1, "header" : "", "footer" : "" },
"q_layer16" : { "a_name" : "q_layer16", "b_content" : q_layer16, "c_title" : "", "d_description" : "Page 16 of my pixel art project.", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "LVL 16", "filename" : "pixel-level-16", "echelon" : 1, "header" : "", "footer" : "" },
"r_layer17" : { "a_name" : "r_layer17", "b_content" : r_layer17, "c_title" : "", "d_description" : "Page 17 of my pixel art project.", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "LVL 17", "filename" : "pixel-level-17", "echelon" : 1, "header" : "", "footer" : "" },
"s_layer18" : { "a_name" : "s_layer18", "b_content" : s_layer18, "c_title" : "", "d_description" : "Page 18 of my pixel art project.", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "LVL 18", "filename" : "pixel-level-18", "echelon" : 1, "header" : "", "footer" : "" },
"t_layer19" : { "a_name" : "t_layer19", "b_content" : t_layer19, "c_title" : "", "d_description" : "Page 19 of my pixel art project.", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "LVL 19", "filename" : "pixel-level-19", "echelon" : 1, "header" : "", "footer" : "" },
"u_layer20" : { "a_name" : "u_layer20", "b_content" : u_layer20, "c_title" : "", "d_description" : "Page 20 of my pixel art project.", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "LVL 20", "filename" : "pixel-level-20", "echelon" : 1, "header" : "", "footer" : "" },
"v_layer21" : { "a_name" : "v_layer21", "b_content" : v_layer21, "c_title" : "", "d_description" : "", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "LVL 21", "filename" : "100_emptyFile", "echelon" : 1, "header" : "", "footer" : "" },
"w_layer22" : { "a_name" : "w_layer22", "b_content" : w_layer22, "c_title" : "", "d_description" : "", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "LVL 22", "filename" : "100_emptyFile", "echelon" : 1, "header" : "", "footer" : "" },
"x_layer23" : { "a_name" : "x_layer23", "b_content" : x_layer23, "c_title" : "", "d_description" : "", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "LVL 23", "filename" : "100_emptyFile", "echelon" : 1, "header" : "", "footer" : "" },
"y_layer24" : { "a_name" : "y_layer24", "b_content" : y_layer24, "c_title" : "", "d_description" : "", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "LVL 24", "filename" : "100_emptyFile", "echelon" : 1, "header" : "", "footer" : "" },
"z_layer25" : { "a_name" : "z_layer25", "b_content" : z_layer25, "c_title" : "", "d_description" : "", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "LVL 25", "filename" : "100_emptyFile", "echelon" : 1, "header" : "", "footer" : "" },
"importer"  : { "a_name" : "importer" , "b_content" :  importer, "c_title" : "", "d_description" : "", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "importer", "filename": "importer"     , "echelon" : 1 },
"thePhantomLair" : { "a_name" : "thePhantomLair", "b_content" : thePhantomLair, "c_title" : "", "d_description" : "", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "thePhantomLair", "filename" : "thePhantomLair", "echelon" : 1 },
"localView" : { "a_name" : "localView", "b_content" : localView, "c_title" : "", "d_description" : "", "e_coinFocus" : null, "f_coinFocus1" : null, "h_notes" : "", "g_layerTitle" : "TAB VIEW", "filename" : "100_emptyFile", "echelon" : 1 }
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




topLayer.buoyHide        = "true";
topLayer.buoyPoint       = {};
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





topLayer.buoyPoint.buoy0.location = [0,    0];
topLayer.buoyPoint.buoy1.location = [1000, 0];
topLayer.buoyPoint.buoy2.location = [2000, 0];
topLayer.buoyPoint.buoy3.location = [3000, 0];
topLayer.buoyPoint.buoy4.location = [4000, 0];
topLayer.buoyPoint.buoy5.location = [5000, 0];
topLayer.buoyPoint.buoy6.location = [6000, 0];
topLayer.buoyPoint.buoy7.location = [7000, 0];
topLayer.buoyPoint.buoy8.location = [8000, 0];
topLayer.buoyPoint.buoy9.location = [9000, 0];


topLayer.buoyPoint.buoy0.name =  "0";
topLayer.buoyPoint.buoy1.name =  "1";
topLayer.buoyPoint.buoy2.name =  "2";
topLayer.buoyPoint.buoy3.name =  "3";
topLayer.buoyPoint.buoy4.name =  "4";
topLayer.buoyPoint.buoy5.name =  "5";
topLayer.buoyPoint.buoy6.name =  "6";
topLayer.buoyPoint.buoy7.name =  "7";
topLayer.buoyPoint.buoy8.name =  "8";
topLayer.buoyPoint.buoy9.name =  "9";

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

utilityLayer0.innerHTML  = "";
utilityLayer1.innerHTML  = "";
gridLayer.innerHTML      = "";
mouseIconLayer.innerHTML = "";

pulledText.onmouseover           = function() { this.select(); };
pulledText.onclick               = function() { this.select(); };
pulledText.onmouseleave            = function() { this.style.display = "none";};
pulledText.style.overflow        =             "hidden";
pulledText.style.wordBreak       =         "break-word";
pulledText.style.lineHeight      =                  "1";
pulledText.style.position        =           "absolute";
pulledText.readOnly              =               "true";
pulledText.style.fontSize        =              `128px`;
pulledText.style.resize          =               "none";
pulledText.style.opacity         =                  "0";
pulledText.style.display         =               "none"; 
pulledText.style.zIndex          =         "2000000000"; 

const blankSpaces =
`                                                                                                                                                       
                                                                                                                                                        
                                                                                                                                                        
                                                                                                                                                        
                                                                                                                                                        
                                                                                                                                                        
                                                                                                                                                        
                                                                                                                                                        
                                                                                                                                                        
                                                                                                                                                        
                                                                                                                                                        
                                                                                                                                                        
                                                                                                                                                        
                                                                                                                                                        
                                                                                                                                                        
                                                                                                                                                        
                                                                                                                                                        
                                                                                                                                                        
`;

mouseIconLayer.appendChild(pulledText) ;
mouseIconLayer.appendChild(edgeDetect) ;

utilityLayer0.style.opacity     = "0.75";
utilityLayer1.style.opacity     = "0.25";




var partsOpacity = K;
if (localStorage.getItem("partsOpacity")) { partsOpacity = localStorage.getItem("partsOpacity"); ui.coin59527.ref.value = partsOpacity; utilityLayer0.style.opacity=partsOpacity; }







/* This detects the caps-lock state, when possible. */
var CAPS = -1;
document.addEventListener("blur", (event) => { CAPS = -1; });

/* This decides the rotation step. */
var rotationStep  = 5;
var ZrotationStep = 5;

/* This mode will tell us CSS or Construction. */
var hauptMode = 0;
var spacebarHold = false;

/* This is an important little bit that holds the LAST KEY PRESSED.
 * This allows a secondary action on subsequent keypresses.         */
var lastKey = "w";

var coinFocus  = null,
    coinFocus1 = null,
    coinFocus2 = null;
var curFocus  = 0;

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
//window.onunload       = () => { window.closed = true; }

window.onbeforeunload = () => { window.closed = true; }

const docE = document.documentElement;
const docB = document.body;

/* This holds the tripartite description, referencing all coins. */
var
coinTrip      = {};
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
hold   = {};
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

var   visualGridThickness1 = gW;
var      visualGridColour1 =  "#FFFF00";
var        visualGridSize1 =  T;
var                  grid1Viz = "false";

var   visualGridThickness2 = gW;
var      visualGridColour2 =  "#00FFFF";
var        visualGridSize2 =  T;
var                  grid2Viz = "false";

var   visualGridThickness3 = gW;
var      visualGridColour3 =  "#FF00FF";
var        visualGridSize3 =  T;
var                  grid3Viz = "false";

if (localStorage.getItem("T")) { T = parseInt(localStorage.getItem("T")); ui.snapGridIncrement.ref.value = T; }
if (localStorage.getItem("mouseIncrement")) { mouseIncrement = parseInt(localStorage.getItem("mouseIncrement")); ui.coin18868.ref.value = mouseIncrement; }

if (localStorage.getItem("grid0Viz")) { grid0Viz = localStorage.getItem("grid0Viz"); }
if (localStorage.getItem("grid1Viz")) { grid1Viz = localStorage.getItem("grid1Viz"); }
if (localStorage.getItem("grid2Viz")) { grid2Viz = localStorage.getItem("grid2Viz"); }
if (localStorage.getItem("grid3Viz")) { grid3Viz = localStorage.getItem("grid3Viz"); }

if (localStorage.getItem("visualGridThickness1")) { visualGridThickness1 = parseInt(localStorage.getItem("visualGridThickness1")); }
   if (localStorage.getItem("visualGridColour1")) {    visualGridColour1 =             localStorage.getItem("visualGridColour1");  ui.coin28281.ref.value =    visualGridColour1; }
     if (localStorage.getItem("visualGridSize1")) {      visualGridSize1 =      parseInt(localStorage.getItem("visualGridSize1")); ui.coin18868.ref.value =    visualGridSize1;   }

if (localStorage.getItem("visualGridThickness2")) { visualGridThickness2 = parseInt(localStorage.getItem("visualGridThickness2")); }
   if (localStorage.getItem("visualGridColour2")) {    visualGridColour2 =             localStorage.getItem("visualGridColour2");  ui.coin30119.ref.value =    visualGridColour2; }
     if (localStorage.getItem("visualGridSize2")) {      visualGridSize2 =      parseInt(localStorage.getItem("visualGridSize2")); ui.coin21315.ref.value =    visualGridSize2;   }

if (localStorage.getItem("visualGridThickness3")) { visualGridThickness3 = parseInt(localStorage.getItem("visualGridThickness3")); }
   if (localStorage.getItem("visualGridColour3")) {    visualGridColour3 =             localStorage.getItem("visualGridColour3");  ui.coin32259.ref.value =    visualGridColour3; }
     if (localStorage.getItem("visualGridSize3")) {      visualGridSize3 =      parseInt(localStorage.getItem("visualGridSize3")); ui.coin23538.ref.value =    visualGridSize3;   }





if (localStorage.getItem("K")) { K = localStorage.getItem("K"); ui.coin53526.ref.value = K; }

/* Initialize the grid. */
document.documentElement.style.backgroundColor=L;
const V=document.createElement("canvas");
const F=document.createElement("textarea");
F.name = "spaceBarRetainer";
{
const s=`position:fixed;left:0;top:0;pointer-events:none;`;
V.style=s;
V.style.opacity=K;
F.style=s+`background-color:transparent;color:transparent;border:0;margin:0;padding:0;resize:none;user-select:none;width:${window.innerWidth + "px"};height:${window.innerHeight + "px"};`;
F.readOnly=true;
F.tabIndex=-1;
}
gridLayer.appendChild(V);
gridLayer.appendChild(F);

function Z(){

if (window.innerWidth  > 3500) { V.width  = 0; return 0; }
if (window.innerHeight > 3500) { V.height = 0; return 0; }

if (K == 0) return;



F.style.width=`${window.innerWidth}px`;
F.style.height=`${window.innerHeight}px`;
V.width=window.innerWidth;
V.height=window.innerHeight;

W=T-(window.scrollY%T);
X=T-(window.scrollX%T);
Y=V.getContext("2d");

Y.strokeStyle=U;
Y.lineWidth=gW;







if (grid1Viz=="true") {
W=visualGridSize1-(window.scrollY%visualGridSize1);
X=visualGridSize1-(window.scrollX%visualGridSize1);
Y.strokeStyle=visualGridColour1;
Y.beginPath(); Y.lineWidth=visualGridThickness1;
                            if (visualGridSize1>=8&&gW!=0) {
for(let k=0;k<parseInt(V.height/visualGridSize1)+1;k++){
                  Y.moveTo(0,W+(visualGridSize1*k));
            Y.lineTo(V.width,W+(visualGridSize1*k))};
 for(let k=0;k<parseInt(V.width/visualGridSize1)+1;k++){
                    Y.moveTo(X+(visualGridSize1*k),0);
                    Y.lineTo(X+(visualGridSize1*k),V.height)}; } Y.stroke();
}

if (grid2Viz=="true") {
W=visualGridSize2-(window.scrollY%visualGridSize2);
X=visualGridSize2-(window.scrollX%visualGridSize2);
Y.strokeStyle=visualGridColour2;
Y.beginPath(); Y.lineWidth=visualGridThickness2;
                            if (visualGridSize2>=8&&gW!=0) {
for(let k=0;k<parseInt(V.height/visualGridSize2)+1;k++){
                  Y.moveTo(0,W+(visualGridSize2*k));
            Y.lineTo(V.width,W+(visualGridSize2*k))};
 for(let k=0;k<parseInt(V.width/visualGridSize2)+1;k++){
                    Y.moveTo(X+(visualGridSize2*k),0);
                    Y.lineTo(X+(visualGridSize2*k),V.height)}; } Y.stroke();
}

if (grid3Viz=="true") {
W=visualGridSize3-(window.scrollY%visualGridSize3);
X=visualGridSize3-(window.scrollX%visualGridSize3);
Y.strokeStyle=visualGridColour3;
Y.beginPath(); Y.lineWidth=visualGridThickness3;
                            if (visualGridSize3>=8&&gW!=0) {
for(let k=0;k<parseInt(V.height/visualGridSize3)+1;k++){
                  Y.moveTo(0,W+(visualGridSize3*k));
            Y.lineTo(V.width,W+(visualGridSize3*k))};
 for(let k=0;k<parseInt(V.width/visualGridSize3)+1;k++){
                    Y.moveTo(X+(visualGridSize3*k),0);
                    Y.lineTo(X+(visualGridSize3*k),V.height)}; } Y.stroke();
}

W=T-(window.scrollY%T);
X=T-(window.scrollX%T);

Y.strokeStyle=U;
Y.lineWidth=gW;
if (grid0Viz=="true") {Y.beginPath();if (T>=8&&gW!=0) {
for(let k=0;k<parseInt(V.height/T)+1;k++){ Y.moveTo(0,W+(T*k)); Y.lineTo(V.width,W+(T*k))};
for(let k=0;k<parseInt(V.width/T)+1;k++){ Y.moveTo(X+(T*k),0); Y.lineTo(X+(T*k),V.height)};
}Y.stroke();}




W=T-(window.scrollY%T);
X=T-(window.scrollX%T);








Y.beginPath();
Y.strokeStyle=bU;
Y.lineWidth=bW;
Y.moveTo(0,-window.pageYOffset);
Y.lineTo(V.width,-window.pageYOffset);
Y.moveTo(-window.pageXOffset,0);
Y.lineTo(-window.pageXOffset,V.height);
Y.stroke();
V.style.opacity=K;



if (topLayer.buoyHide == "false") {

try {
const buoyValues = Object.values(topLayer.buoyPoint);
for (let j = 0; j < buoyValues.length; j++) {
Y.fillStyle = visualGridColour3;
Y.font = "400 96px dckimPixelMono";
Y.textBaseline="top";
Y.fillText(`${buoyValues[j].name}`,Math.floor((buoyValues[j].location[0] - window.scrollX + 20)),Math.floor((buoyValues[j].location[1] - window.scrollY + 1)));
}
} catch {}

}









Y.beginPath();
Y.fillStyle=U;
Y.font=bF;
Y.font = "400 32px dckimPixelMono";
Y.textBaseline="top";

if (gW!=0) {
Y.fillText(`${layerName} ${window.innerWidth}x${window.innerHeight} KEY:${T.toString().padStart(' ',4)} MOUSE:${mouseIncrement.toString().padStart(' ',3)} Z:${(pageEchelon / 100000000).toString().padStart(' ',3)}`,16,16);
Y.font=bFarr;
Y.font = "400 64px dckimPixelMono";
//Y.fillText(`${visualFlowIndicator()}`,0,0);
Y.fillText(`

لَا إِلَٰهَ إِلَّا ٱللَّٰهُ مُحَمَّدٌ رَسُولُ ٱللَّٰه
`,768,16);
Y.stroke();
}












};

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
scaleRange.value          = parseFloat(localStorage.getItem("shelfMenuScaleSetting"));
newFactor                 = ((1600 - scaleRange.value + 50)/200);
newHeight                 = (newFactor * 488) + "px";
newWidth                  = newFactor * 8;
leftBlocker.style.right   = 1600 - scaleRange.value + (newWidth/2) + "px";
mouseCatcher.style.right  = 1600 - newWidth - scaleRange.value + (newWidth/2) + "px";
rightBlocker.style.right  =  -scaleRange.value - (newWidth/2) + "px";
rightBlocker.style.height = newHeight;
leftBlocker.style.height  = newHeight;
scaleRange.style.height   = newHeight;
mouseCatcher.style.height = newHeight;
mouseCatcher.style.width  = newWidth + "px";
}




var gridIncrementArray = "3-2";

if (localStorage.getItem("gridIncrementArray")) { gridIncrementArray = localStorage.getItem("gridIncrementArray"); }





window.mouseIncrementCycle = function () {
if (gridIncrementArray=="3-2") {
     if (mouseIncrement==  1) {mouseIncrement=  4;}
else if (mouseIncrement==  4) {mouseIncrement=  8;}
else if (mouseIncrement==  8) {mouseIncrement= 16;}
else if (mouseIncrement== 16) {mouseIncrement=  1;}
else                          {mouseIncrement=  1;}
} else if (gridIncrementArray=="2")      {
     if (mouseIncrement==  1) {mouseIncrement=  4;}
else if (mouseIncrement==  4) {mouseIncrement=  8;}
else if (mouseIncrement==  8) {mouseIncrement= 16;}
else if (mouseIncrement== 16) {mouseIncrement=  1;}
else                          {mouseIncrement=  1;}
} else if (gridIncrementArray=="3")      {
     if (mouseIncrement==  1) {mouseIncrement=  6;}
else if (mouseIncrement==  6) {mouseIncrement= 12;}
else if (mouseIncrement== 12) {mouseIncrement= 24;}
else if (mouseIncrement== 24) {mouseIncrement=  1;}
else                          {mouseIncrement=  1;}
} else if (gridIncrementArray=="metric") {
     if (mouseIncrement==  1) {mouseIncrement=  5;}
else if (mouseIncrement==  5) {mouseIncrement= 10;}
else if (mouseIncrement== 10) {mouseIncrement= 20;}
else if (mouseIncrement== 20) {mouseIncrement=  1;}
else                          {mouseIncrement=  1;}
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

     if (T==  1) {                              }
else if (T==  2) {T=  1;E=2;U=D;aS1=128;aS2=256;}
else if (T==  4) {T=  2;E=2;U=D;aS1=128;aS2=256;}
else if (T==  8) {T=  4;E=2;U=D;aS1=128;aS2=256;}
else if (T== 12) {T=  8;E=2;U=D;aS1=128;aS2=256;}
else if (T== 16) {T= 12;E=3;U=C;aS1= 96;aS2=192;}
else if (T== 24) {T= 16;E=2;U=D;aS1= 64;aS2=128;}
else if (T== 32) {T= 24;E=3;U=C;aS1= 48;aS2= 96;}
else if (T== 48) {T= 32;E=2;U=D;aS1= 32;aS2= 64;}
else if (T== 64) {T= 48;E=3;U=C;aS1= 24;aS2= 48;}
else if (T== 96) {T= 64;E=2;U=D;aS1= 16;aS2= 32;}
else if (T==128) {T= 96;E=3;U=C;aS1= 12;aS2= 24;}
else if (T==192) {T=128;E=2;U=D;aS1=  8;aS2= 16;}
else if (T==256) {T=192;E=3;U=C;aS1=  6;aS2= 12;}
else if (T==384) {T=256;E=2;U=D;aS1=  4;aS2=  8;}
else if (T==512) {T=384;E=2;U=C;aS1=  4;aS2=  8;}
else             {T= 64;E=2;U=D;aS1= 16;aS2= 32;}

} else if (gridIncrementArray=="2")      {

     if (T==  1) {                              }
else if (T==  2) {T=  1;E=2;U=D;aS1=128;aS2=256;}
else if (T==  4) {T=  2;E=2;U=D;aS1=128;aS2=256;}
else if (T==  8) {T=  4;E=2;U=D;aS1=128;aS2=256;}
else if (T== 16) {T=  8;E=2;U=D;aS1=128;aS2=256;}
else if (T== 32) {T= 16;E=2;U=D;aS1= 64;aS2=128;}
else if (T== 64) {T= 32;E=2;U=D;aS1= 32;aS2= 64;}
else if (T==128) {T= 64;E=2;U=D;aS1= 16;aS2= 32;}
else if (T==256) {T=128;E=2;U=D;aS1=  8;aS2= 16;}
else if (T==512) {T=256;E=2;U=D;aS1=  4;aS2=  8;}
else             {T= 64;E=2;U=D;aS1= 16;aS2= 32;}

} else if (gridIncrementArray=="3")      {

     if (T==  1) {                              }
else if (T==  2) {T=  1;E=2;U=D;aS1=128;aS2=256;}
else if (T==  3) {T=  2;E=2;U=D;aS1=128;aS2=256;}
else if (T==  6) {T=  3;E=2;U=D;aS1=128;aS2=256;}
else if (T== 12) {T=  6;E=2;U=D;aS1=128;aS2=256;}
else if (T== 24) {T= 12;E=2;U=D;aS1= 64;aS2=128;}
else if (T== 48) {T= 24;E=2;U=D;aS1= 32;aS2= 64;}
else if (T== 96) {T= 48;E=2;U=D;aS1= 16;aS2= 32;}
else if (T==192) {T= 96;E=2;U=D;aS1=  8;aS2= 16;}
else if (T==384) {T=192;E=2;U=D;aS1=  4;aS2=  8;}
else if (T==768) {T=384;E=2;U=C;aS1=  4;aS2=  8;}
else             {T= 48;E=2;U=D;aS1= 16;aS2= 32;}

} else if (gridIncrementArray=="metric") {

     if (T==   1) {                              }
else if (T==   2) {T=  1;E=2;U=D;aS1=128;aS2=256;}
else if (T==   5) {T=  2;E=2;U=D;aS1=128;aS2=256;}
else if (T==  10) {T=  5;E=2;U=D;aS1=128;aS2=256;}
else if (T==  20) {T= 10;E=2;U=D;aS1= 64;aS2=128;}
else if (T==  50) {T= 20;E=2;U=D;aS1= 32;aS2= 64;}
else if (T== 100) {T= 50;E=2;U=D;aS1= 16;aS2= 32;}
else if (T== 200) {T=100;E=2;U=D;aS1=  8;aS2= 16;}
else if (T== 500) {T=200;E=2;U=D;aS1=  4;aS2=  8;}
else if (T==1000) {T=500;E=2;U=C;aS1=  4;aS2=  8;}
else              {T= 50;E=2;U=D;aS1= 16;aS2= 32;}

}
Z();
};

window.moreG = function () {
if (gridIncrementArray=="3-2") {

     if (T==  1) {T=  2;E=2;U=D;aS1= 96;aS2=192;}
else if (T==  2) {T=  4;E=2;U=D;aS1= 64;aS2=128;}
else if (T==  4) {T=  8;E=2;U=D;aS1= 64;aS2=128;}
else if (T==  8) {T= 12;E=3;U=C;aS1= 96;aS2=192;}
else if (T== 12) {T= 16;E=2;U=D;aS1= 64;aS2=128;}
else if (T== 16) {T= 24;E=3;U=C;aS1= 48;aS2= 96;}
else if (T== 24) {T= 32;E=2;U=D;aS1= 32;aS2= 64;}
else if (T== 32) {T= 48;E=3;U=C;aS1= 24;aS2= 48;}
else if (T== 48) {T= 64;E=2;U=D;aS1= 16;aS2= 32;}
else if (T== 64) {T= 96;E=3;U=C;aS1= 12;aS2= 24;}
else if (T== 96) {T=128;E=2;U=D;aS1=  8;aS2= 16;}
else if (T==128) {T=192;E=3;U=C;aS1=  6;aS2= 12;}
else if (T==192) {T=256;E=2;U=D;aS1=  4;aS2=  8;}
else if (T==256) {T=384;E=3;U=C;aS1=  2;aS2=  4;}
else if (T==384) {T=512;E=3;U=D;aS1=  2;aS2=  4;}
else if (T==512) {                              }
else             {T= 64;E=2;U=D;aS1= 16;aS2= 32;}

} else if (gridIncrementArray=="2")           {

     if (T==  1) {T=  2;E=2;U=D;aS1= 96;aS2=192;}
else if (T==  2) {T=  4;E=2;U=D;aS1= 64;aS2=128;}
else if (T==  4) {T=  8;E=2;U=D;aS1= 64;aS2=128;}
else if (T==  8) {T= 16;E=2;U=D;aS1= 64;aS2=128;}
else if (T== 16) {T= 32;E=2;U=D;aS1= 32;aS2= 64;}
else if (T== 32) {T= 64;E=2;U=D;aS1= 16;aS2= 32;}
else if (T== 64) {T=128;E=2;U=D;aS1=  8;aS2= 16;}
else if (T==128) {T=256;E=2;U=D;aS1=  4;aS2=  8;}
else if (T==256) {T=512;E=3;U=D;aS1=  2;aS2=  4;}
else if (T==512) {                              }
else             {T= 64;E=2;U=D;aS1= 16;aS2= 32;}

} else if (gridIncrementArray=="3")           {

     if (T==  1) {T=  2;E=2;U=D;aS1= 96;aS2=192;}
else if (T==  2) {T=  3;E=2;U=D;aS1= 96;aS2=192;}
else if (T==  3) {T=  6;E=2;U=D;aS1= 64;aS2=128;}
else if (T==  6) {T= 12;E=3;U=C;aS1= 96;aS2=192;}
else if (T== 12) {T= 24;E=3;U=C;aS1= 48;aS2= 96;}
else if (T== 24) {T= 48;E=3;U=C;aS1= 24;aS2= 48;}
else if (T== 48) {T= 96;E=3;U=C;aS1= 12;aS2= 24;}
else if (T== 96) {T=192;E=3;U=C;aS1=  6;aS2= 12;}
else if (T==192) {T=384;E=3;U=C;aS1=  2;aS2=  4;}
else if (T==384) {T=768;E=3;U=D;aS1=  2;aS2=  4;}
else if (T==768) {                              }
else             {T= 48;E=2;U=D;aS1= 16;aS2= 32;}

} else if (gridIncrementArray=="metric")      {

     if (T==   1) {T=   2;E=2;U=D;aS1=128;aS2=256;}
else if (T==   2) {T=   5;E=2;U=D;aS1=128;aS2=256;}
else if (T==   5) {T=  10;E=2;U=D;aS1= 64;aS2=128;}
else if (T==  10) {T=  20;E=2;U=D;aS1= 32;aS2= 64;}
else if (T==  20) {T=  50;E=2;U=D;aS1= 16;aS2= 32;}
else if (T==  50) {T= 100;E=2;U=D;aS1=  8;aS2= 16;}
else if (T== 100) {T= 200;E=2;U=D;aS1=  4;aS2=  8;}
else if (T== 200) {T= 500;E=2;U=C;aS1=  4;aS2=  8;}
else if (T== 500) {T=1000;E=2;U=D;aS1=  4;aS2=  8;}
else if (T==1000) {                               }
else              {T=  50;E=2;U=D;aS1= 16;aS2= 32;}

}
Z();
}





/* Initialize the spatial cursor. */

const Cur    = document.createElement("div");
Cur.style.position        =       "absolute";
Cur.style.width           =              cSZ + "px";
Cur.dataset.width         =              cSZ + "px";
Cur.style.height          =              cSZ + "px";
Cur.dataset.height        =              cSZ + "px";
Cur.style.top             =  cRT + (cSZ / 2) + "px";
Cur.dataset.top           =  cRT + (cSZ / 2) + "px";
Cur.style.left            =  cRL + (cSZ / 2) + "px";
Cur.dataset.left          =  cRL + (cSZ / 2) + "px";
Cur.style.userSelect      =           "none";
Cur.style.zIndex          =      "999999999";
Cur.style.pointerEvents   =           "none";
const curImg = document.createElement("img");
curImg.style.position        =    "absolute";
curImg.style.width           =           cSZ + "px";
curImg.style.height          =           cSZ + "px";
curImg.style.top             =        -cSZ/2 + "px";
curImg.style.left            =        -cSZ/2 + "px";
curImg.style.pointerEvents   =        "none";
curImg.style.userSelect      =        "none";
curImg.src                   = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAPdJREFUWIXl1tEOwyAIBVCfL4n//7mLUye1YMEmo9l8aXRyqrLSprRsRMB6xkX7AQAg+ncgPgvxQHwWwoH8btvhVBpK2w9vwA5BR8ArEM2Aj4AEOASgC7VTmyOhaALvg+xAu+FxiMgsiDseW7IC86gdUI7cvgQtZVYgr4Hzk9VT1q8qUIU8z1cAaW0KwDvlmtWt4vMzn28HoACnQ9ROuwHS2oStqsB1vPaPcTzSK8ASLy/BVVNaJToM+WoSTdVcTZkO8Do4iqMZGHUQvLza47kwAE88IzbDh7Adn0Y1v/GGv/l6T0/4SosHwr/SHgDEZyEeiM/CF4AXE18dqYulLVUAAAAASUVORK5CYII=";

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
/* If no part is available for focus, then the spatial cursor should become the new focus.    */

/* a toggle for the edge mode, which will allow us to isolate "right and bottom" or "top and left" for extendEdge. */
var  eM = 0;
/* a toggle for the window edge mode. */
var  wM = 0;

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
curFocus  = 1;
hauptMode=0;
if (window.opener==null) {
insertNewCoin([null,78,78,0,0,0]);
if (coinFocus!=null) {



       if (T%5==0) {

coinFocus.style.left    = "100px";
coinFocus.dataset.left  = "100px";
coinFocus.style.top     = "100px";
coinFocus.dataset.top   = "100px";

coinFocus.style.width    = "500px";
coinFocus.dataset.width  = "500px";
coinFocus.style.height   = "500px";
coinFocus.dataset.height = "500px";


} else if (T%3==0) {

coinFocus.style.left    = "96px";
coinFocus.dataset.left  = "96px";
coinFocus.style.top     = "96px";
coinFocus.dataset.top   = "96px";

coinFocus.style.width    = "600px";
coinFocus.dataset.width  = "600px";
coinFocus.style.height   = "600px";
coinFocus.dataset.height = "600px";

} else {

coinFocus.style.left    = "128px";
coinFocus.dataset.left  = "128px";
coinFocus.style.top     = "128px";
coinFocus.dataset.top   = "128px";

coinFocus.style.width    = "512px";
coinFocus.dataset.width  = "512px";
coinFocus.style.height   = "512px";
coinFocus.dataset.height = "512px";

}

coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.fontSize = "48px";
coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.color = invertHexColour(finishedBackgroundColour);
coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.overflow = "auto";
coinFocus.lastElementChild.lastElementChild.previousElementSibling.style.fontFamily = "dckimPixelMono";
coinFocus.lastElementChild.lastElementChild.previousElementSibling.innerHTML = `
<p>
Welcome to the Pixel Art Edition of the program.
</p>
`;



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
'color: rgb( 77,136,255); font-size:  24px; font-family: dckimPixelMono; text-shadow: 0px   1px 0px lime,   1px 0px 0px magenta,   1px   1px 0px magenta;',
'color: rgb( 77,136,255); font-size: 120px; font-family: dckimPixelMono; text-shadow: 0px 3.5px 0px lime, 3.5px 0px 0px magenta, 3.5px 3.5px 0px magenta;',
'color: rgb( 77,136,255); font-size:  24px; font-family: dckimPixelMono; text-shadow: 0px   1px 0px lime,   1px 0px 0px magenta,   1px   1px 0px magenta;',





);
