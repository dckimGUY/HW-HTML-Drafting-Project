var   utilityLayer0     ; utilityLayer0      = document.getElementById("utilityLayer0");
var   utilityLayer1     ; utilityLayer1      = document.getElementById("utilityLayer1");

utilityLayer1.style.pointerEvents = "none";

const defaultFilename = "100_emptyFile";
var filename = defaultFilename;

var   gridLayer         ; gridLayer          = document.getElementById("gridLayer")     ;
var   mouseIconLayer    ; mouseIconLayer     = document.getElementById("mouseIconLayer");
var   pulledText        ; pulledText         = document.createElement("textarea")       ;
var   edgeDetect        ; edgeDetect         = document.createElement("div")            ;

var lastFlow = "global";

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

var   interfaceShelf    ; interfaceShelf     = document.getElementById("interfaceShelf");
interfaceShelf.innerHTML = defaultUIshelf;

const HWworld = true;
var layerName = "LVL 1";

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

const localView = document.createElement("div");

var topLayer = 
{
"a_currentLayer" : "b_layer1",
"b_layer1" : { "a_name" : "b_layer1", "b_content" : b_layer1, "c_title" : " ", "d_filename" : "", "e_coinFocus" : null, "f_coinFocus1" : null, "g_layerTitle" : "LVL 1", "filename" : "100_emptyFile", "echelon" : 1 },
"c_layer2" : { "a_name" : "c_layer2", "b_content" : c_layer2, "c_title" : " ", "d_filename" : "", "e_coinFocus" : null, "f_coinFocus1" : null, "g_layerTitle" : "LVL 2", "filename" : "100_emptyFile", "echelon" : 1 },
"d_layer3" : { "a_name" : "d_layer3", "b_content" : d_layer3, "c_title" : " ", "d_filename" : "", "e_coinFocus" : null, "f_coinFocus1" : null, "g_layerTitle" : "LVL 3", "filename" : "100_emptyFile", "echelon" : 1 },
"e_layer4" : { "a_name" : "e_layer4", "b_content" : e_layer4, "c_title" : " ", "d_filename" : "", "e_coinFocus" : null, "f_coinFocus1" : null, "g_layerTitle" : "LVL 4", "filename" : "100_emptyFile", "echelon" : 1 },
"f_layer5" : { "a_name" : "f_layer5", "b_content" : f_layer5, "c_title" : " ", "d_filename" : "", "e_coinFocus" : null, "f_coinFocus1" : null, "g_layerTitle" : "LVL 5", "filename" : "100_emptyFile", "echelon" : 1 },
"g_layer6" : { "a_name" : "g_layer6", "b_content" : g_layer6, "c_title" : " ", "d_filename" : "", "e_coinFocus" : null, "f_coinFocus1" : null, "g_layerTitle" : "LVL 6", "filename" : "100_emptyFile", "echelon" : 1 },
"h_layer7" : { "a_name" : "h_layer7", "b_content" : h_layer7, "c_title" : " ", "d_filename" : "", "e_coinFocus" : null, "f_coinFocus1" : null, "g_layerTitle" : "LVL 7", "filename" : "100_emptyFile", "echelon" : 1 },
"i_layer8" : { "a_name" : "i_layer8", "b_content" : i_layer8, "c_title" : " ", "d_filename" : "", "e_coinFocus" : null, "f_coinFocus1" : null, "g_layerTitle" : "LVL 8", "filename" : "100_emptyFile", "echelon" : 1 },
"j_layer9" : { "a_name" : "j_layer9", "b_content" : j_layer9, "c_title" : " ", "d_filename" : "", "e_coinFocus" : null, "f_coinFocus1" : null, "g_layerTitle" : "LVL 9", "filename" : "100_emptyFile", "echelon" : 1 },

"k_layer10" : { "a_name" : "k_layer10", "b_content" : k_layer10, "c_title" : " ", "d_filename" : "", "e_coinFocus" : null, "f_coinFocus1" : null, "g_layerTitle" : "LVL 10", "filename" : "100_emptyFile", "echelon" : 1 },
"l_layer11" : { "a_name" : "l_layer11", "b_content" : l_layer11, "c_title" : " ", "d_filename" : "", "e_coinFocus" : null, "f_coinFocus1" : null, "g_layerTitle" : "LVL 11", "filename" : "100_emptyFile", "echelon" : 1 },
"m_layer12" : { "a_name" : "m_layer12", "b_content" : m_layer12, "c_title" : " ", "d_filename" : "", "e_coinFocus" : null, "f_coinFocus1" : null, "g_layerTitle" : "LVL 12", "filename" : "100_emptyFile", "echelon" : 1 },
"n_layer13" : { "a_name" : "n_layer13", "b_content" : n_layer13, "c_title" : " ", "d_filename" : "", "e_coinFocus" : null, "f_coinFocus1" : null, "g_layerTitle" : "LVL 13", "filename" : "100_emptyFile", "echelon" : 1 },
"o_layer14" : { "a_name" : "o_layer14", "b_content" : o_layer14, "c_title" : " ", "d_filename" : "", "e_coinFocus" : null, "f_coinFocus1" : null, "g_layerTitle" : "LVL 14", "filename" : "100_emptyFile", "echelon" : 1 },
"p_layer15" : { "a_name" : "p_layer15", "b_content" : p_layer15, "c_title" : " ", "d_filename" : "", "e_coinFocus" : null, "f_coinFocus1" : null, "g_layerTitle" : "LVL 15", "filename" : "100_emptyFile", "echelon" : 1 },
"q_layer16" : { "a_name" : "q_layer16", "b_content" : q_layer16, "c_title" : " ", "d_filename" : "", "e_coinFocus" : null, "f_coinFocus1" : null, "g_layerTitle" : "LVL 16", "filename" : "100_emptyFile", "echelon" : 1 },
"r_layer17" : { "a_name" : "r_layer17", "b_content" : r_layer17, "c_title" : " ", "d_filename" : "", "e_coinFocus" : null, "f_coinFocus1" : null, "g_layerTitle" : "LVL 17", "filename" : "100_emptyFile", "echelon" : 1 },
"s_layer18" : { "a_name" : "s_layer18", "b_content" : s_layer18, "c_title" : " ", "d_filename" : "", "e_coinFocus" : null, "f_coinFocus1" : null, "g_layerTitle" : "LVL 18", "filename" : "100_emptyFile", "echelon" : 1 },
"t_layer19" : { "a_name" : "t_layer19", "b_content" : t_layer19, "c_title" : " ", "d_filename" : "", "e_coinFocus" : null, "f_coinFocus1" : null, "g_layerTitle" : "LVL 19", "filename" : "100_emptyFile", "echelon" : 1 },
"u_layer20" : { "a_name" : "u_layer20", "b_content" : u_layer20, "c_title" : " ", "d_filename" : "", "e_coinFocus" : null, "f_coinFocus1" : null, "g_layerTitle" : "LVL 20", "filename" : "100_emptyFile", "echelon" : 1 },
"v_layer21" : { "a_name" : "v_layer21", "b_content" : v_layer21, "c_title" : " ", "d_filename" : "", "e_coinFocus" : null, "f_coinFocus1" : null, "g_layerTitle" : "LVL 21", "filename" : "100_emptyFile", "echelon" : 1 },
"w_layer22" : { "a_name" : "w_layer22", "b_content" : w_layer22, "c_title" : " ", "d_filename" : "", "e_coinFocus" : null, "f_coinFocus1" : null, "g_layerTitle" : "LVL 22", "filename" : "100_emptyFile", "echelon" : 1 },
"x_layer23" : { "a_name" : "x_layer23", "b_content" : x_layer23, "c_title" : " ", "d_filename" : "", "e_coinFocus" : null, "f_coinFocus1" : null, "g_layerTitle" : "LVL 23", "filename" : "100_emptyFile", "echelon" : 1 },
"y_layer24" : { "a_name" : "y_layer24", "b_content" : y_layer24, "c_title" : " ", "d_filename" : "", "e_coinFocus" : null, "f_coinFocus1" : null, "g_layerTitle" : "LVL 24", "filename" : "100_emptyFile", "echelon" : 1 },
"z_layer25" : { "a_name" : "z_layer25", "b_content" : z_layer25, "c_title" : " ", "d_filename" : "", "e_coinFocus" : null, "f_coinFocus1" : null, "g_layerTitle" : "LVL 25", "filename" : "100_emptyFile", "echelon" : 1 },

"localView" : { "a_name" : "localView", "b_content" : localView, "c_title" : " ", "d_filename" : "", "e_coinFocus" : null, "f_coinFocus1" : null, "g_layerTitle" : "LOCAL VIEW", "filename" : "100_emptyFile", "echelon" : 1 }
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

/* This detects the caps-lock state, when possible. */
var CAPS = -1;
document.addEventListener("blur", (event) => { CAPS = -1; });

/* This decides the rotation step. */
var rotationStep = 5;
var ZrotationStep = 1;

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

Picture.style.outlineWidth=bW + "px";
Picture.style.outlineStyle="dotted";
Picture.style.outlineColor=bU;

Picture.style.opacity=K;
gridLayer.appendChild(Picture);






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
F.style.width=`${window.innerWidth}px`;
F.style.height=`${window.innerHeight}px`;
V.width=window.innerWidth;
V.height=window.innerHeight;

W=T-(window.scrollY%T);
X=T-(window.scrollX%T);
Y=V.getContext("2d");
Y.strokeStyle=U;
Y.lineWidth=gW;
Y.beginPath();

if (T>=8&&gW!=0) {
for(let k=0;k<parseInt(V.height/T)+1;k++){
Y.moveTo(0,W+(T*k));
Y.lineTo(V.width,W+(T*k))};
for(let k=0;k<parseInt(V.width/T)+1;k++){
Y.moveTo(X+(T*k),0);
Y.lineTo(X+(T*k),V.height)};
}

Y.fillStyle=U;
Y.font=bF;
Y.textBaseline="top";

if (gW!=0) {
Y.fillText(`                 h${Math.floor(window.innerHeight/T)}w${Math.floor(window.innerWidth/T)}/${window.innerWidth}x${window.innerHeight}/${T.toString().padStart(' ',3)} --- z-ECHELON=${pageEchelon / 100000000 } --- ${filename}.html`,bW,bW);
Y.font=bFarr;
//Y.fillText(`${visualFlowIndicator()}`,bW,bW);
Y.fillText(`${layerName}`,bW,bW);
Y.stroke();
}

Y.beginPath();
Y.strokeStyle=bU;
Y.lineWidth=bW;
Y.moveTo(0,-window.pageYOffset);
Y.lineTo(V.width,-window.pageYOffset);
Y.moveTo(-window.pageXOffset,0);
Y.lineTo(-window.pageXOffset,V.height);
Y.stroke();
V.style.opacity=K;
};

Z();
window.addEventListener("resize",()=>{Z();})
window.addEventListener("scroll",()=>{Z();})
document.addEventListener("keydown",(event)=>{F.focus();F.value='';});










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
Z();
};

window.moreG = function () {
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
curImg.src                   =                 "iconSet/spatialCursor/customCursor.png"; /* If not present we use the fallback icon in BASE64. */
curImg.onerror               = function() {
this.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAMUExURQAAAP///+0cJMPDw5kSAiMAAAABdFJOUwBA5thmAAAAAWJLR0QB/wIt3gAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAAd0SU1FB+kFBRQnJYhP8iYAAADTSURBVDjLzdKxDcJADAXQBOko0mcEmluCjJAinyBGYApGoKFPgxTMPFmCGShyPkeyTQkFsXTS3ZMS//hSFFJhKHx9AVX7O6wlx/7tzyXo4qAGjQ4AIheLwUbbMdhnHmgj3Q0Q0rrpeUPXFA2NxuQQJVoDubVCFOgUcsda4SXQLx0JAqHnvcBgIC2a8vurJ+8NRAGuqRPQ8XTafJlX7qcQBAYDDX+yQom039q5H1I32CmfaAw4G4hEwNHeLIO7XQZ3c5HMvGTuZua5Pn+H1fyn/84xAznlXBhTn9tKAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI1LTA1LTA1VDIwOjE4OjIxKzAwOjAw1KOWzgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNS0wNS0wNVQyMDozNzo1NiswMDowMMP7+6kAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjUtMDUtMDVUMjA6Mzk6MzcrMDA6MDDqP+j2AAAAAElFTkSuQmCC";
}
Cur.appendChild(curImg);
gridLayer.appendChild(Cur);





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





/* Initialize the cursor icon set. */

const
mouseCursor = document.createElement("img");
mouseCursor.style.position           = "fixed";
mouseCursor.style.width              =  mSZ + "px";
mouseCursor.style.height             =  mSZ + "px";
mouseCursor.style.pointerEvents      = "none";
mouseCursor.style.userSelect         = "none";
mouseCursor.style.display            = "none";
mouseCursor.style.zIndex             = "999999999";
mouseIconLayer.appendChild(mouseCursor)

const iconSet = {
mode0:{cur0:new Image(),cur1:new Image(),cur2:new Image()},
mode1:{cur0:new Image(),cur1:new Image(),cur2:new Image()},
mode2:{cur0:new Image(),cur1:new Image(),cur2:new Image()},
mode3:{cur0:new Image(),cur1:new Image(),cur2:new Image()},
mode4:{cur0:new Image(),cur1:new Image(),cur2:new Image()},
mode5:{cur0:new Image(),cur1:new Image(),cur2:new Image()},
mode6:{cur0:new Image(),cur1:new Image(),cur2:new Image()},
mode7:{cur0:new Image(),cur1:new Image(),cur2:new Image()},
mode8:{cur0:new Image(),cur1:new Image(),cur2:new Image()},
mode9:{cur0:new Image(),cur1:new Image(),cur2:new Image()}
}

iconSet.mode0.cur0.src = "./iconSet/mode0/cur0.png"; iconSet.mode0.cur1.src = "./iconSet/mode0/cur1.png"; iconSet.mode0.cur2.src = "./iconSet/mode0/cur2.png";
iconSet.mode1.cur0.src = "./iconSet/mode1/cur0.png"; iconSet.mode1.cur1.src = "./iconSet/mode1/cur1.png"; iconSet.mode1.cur2.src = "./iconSet/mode1/cur2.png";
iconSet.mode2.cur0.src = "./iconSet/mode2/cur0.png"; iconSet.mode2.cur1.src = "./iconSet/mode2/cur1.png"; iconSet.mode2.cur2.src = "./iconSet/mode2/cur2.png";
iconSet.mode3.cur0.src = "./iconSet/mode3/cur0.png"; iconSet.mode3.cur1.src = "./iconSet/mode3/cur1.png"; iconSet.mode3.cur2.src = "./iconSet/mode3/cur2.png";
iconSet.mode4.cur0.src = "./iconSet/mode4/cur0.png"; iconSet.mode4.cur1.src = "./iconSet/mode4/cur1.png"; iconSet.mode4.cur2.src = "./iconSet/mode4/cur2.png";
iconSet.mode5.cur0.src = "./iconSet/mode5/cur0.png"; iconSet.mode5.cur1.src = "./iconSet/mode5/cur1.png"; iconSet.mode5.cur2.src = "./iconSet/mode5/cur2.png";
iconSet.mode6.cur0.src = "./iconSet/mode6/cur0.png"; iconSet.mode6.cur1.src = "./iconSet/mode6/cur1.png"; iconSet.mode6.cur2.src = "./iconSet/mode6/cur2.png";
iconSet.mode7.cur0.src = "./iconSet/mode7/cur0.png"; iconSet.mode7.cur1.src = "./iconSet/mode7/cur1.png"; iconSet.mode7.cur2.src = "./iconSet/mode7/cur2.png";
iconSet.mode8.cur0.src = "./iconSet/mode8/cur0.png"; iconSet.mode8.cur1.src = "./iconSet/mode8/cur1.png"; iconSet.mode8.cur2.src = "./iconSet/mode8/cur2.png";
iconSet.mode9.cur0.src = "./iconSet/mode9/cur0.png"; iconSet.mode9.cur1.src = "./iconSet/mode9/cur1.png"; iconSet.mode9.cur2.src = "./iconSet/mode9/cur2.png";

let

currentIconSet = iconSet.mode1;
mouseCursor.src = currentIconSet.cur0.src;




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


function flipEdge()       { 
if (mode==5) {
if(eM==0){
eM=1;
noteCoin("&uarr;<br>E<br><span style='font-size: 0.5em;'>edge mode</span><br>&larr;",durationC);

}else{
eM=0;
noteCoin("&rarr;<br>E<br><span style='font-size: 0.5em;'>edge mode</span><br>&darr;",durationC);

};}; }



function flipWindowEdge() { if (mode==0) {if(wM==0){wM=1;}else{wM=0;};}; }
if (utilityLayer0.children.length==0) {
curFocus  = 1;
hauptMode=0;
if (window.opener==null) {
insertNewCoin([null,78,110,0,0,0]);
}
hauptMode=1;
if (coinFocus!=null) {
};
/* A refreshed window will start again with mode=0 */
try {
if (window.opener) {mode=0;}
} catch {}
} else {
coinFocus = utilityLayer0.lastElementChild;
}
readCoins();
let splashScreenVisible = false;
let splashScreen = document.createElement("img");

if (!window.opener) {

splashScreen.src="data:image/png;base64," + splashScreenBase64;
splashScreen.width="512";
splashScreen.height="512";
splashScreen.style.position="absolute";
splashScreen.style.zIndex="100";
splashScreen.style.width="384px";
splashScreen.style.height="384px";
splashScreen.style.border="none";
splashScreen.style.borderRadius="16px";
splashScreen.style.outline="lime solid 5px";
splashScreen.style.boxShadow="rgba(255, 255, 255, 0.75) 0px 0px 48px,rgba(255, 255, 255, 0.75) 0px 0px 48px";

splashScreen.style.left=`${window.innerWidth/2 - 192}px`;
splashScreen.style.top=`${window.innerHeight/2 - 192}px`;

document.body.appendChild(splashScreen);

splashScreenVisible = true;
}


const z_wizardCode = {};

/* Completion Message */


console.log(
`
     boot sequence successful...

HW - It's all I know...

`);
