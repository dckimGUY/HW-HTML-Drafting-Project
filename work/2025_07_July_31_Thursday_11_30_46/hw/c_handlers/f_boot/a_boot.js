var   utilityLayer0     ; utilityLayer0      = document.getElementById("utilityLayer0");
var   utilityLayer1     ; utilityLayer1      = document.getElementById("utilityLayer1");

utilityLayer1.style.pointerEvents = "none";

const defaultFilename = "100_emptyFile";
var filename = defaultFilename;


var   gridLayer         ; gridLayer          = document.getElementById("gridLayer")     ;
var   mouseIconLayer    ; mouseIconLayer     = document.getElementById("mouseIconLayer");
var   pulledText        ; pulledText         = document.createElement("textarea")       ;

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
"j_layer9" : { "a_name" : "j_layer9", "b_content" : j_layer9, "c_title" : " ", "d_filename" : "", "e_coinFocus" : null, "f_coinFocus1" : null, "g_layerTitle" : "LVL 9", "filename" : "100_emptyFile", "echelon" : 1 }
}


























pulledText.name = "pulledText";

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








let rev = 0; /* flow reversal */
function visualFlowIndicator() {if (rev==0) {return (`\u21D6`);} else if (rev==1) {return (`\u21D8`);} }





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

if (T>=8) {
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
Y.fillText(`                 h${Math.floor(window.innerHeight/T)}w${Math.floor(window.innerWidth/T)}/${window.innerWidth}x${window.innerHeight}/${T.toString().padStart(' ',3)} --- z-ECHELON=${pageEchelon / 100000000 } --- ${filename}.html`,bW,bW);
Y.font=bFarr;
//Y.fillText(`${visualFlowIndicator()}`,bW,bW);
Y.fillText(`${layerName}`,bW,bW);
Y.stroke();
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
window.addEventListener("resize",()=>{Z();});window.addEventListener("scroll",()=>{Z();});Z();
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
let  eM = 0;
/* a toggle for the window edge mode. */
let  wM = 0;

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

splashScreen.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAxXpUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjabVBBDgMhCLzzij4BARWf43Zt0h/0+cUFm922kzggYwYExuv5gNsEJQHJVUsrBQ3SpFG3RNHRD04oBy9QVC91+AhkJbbILmjxmFZ9GUVM3bJ8MtJ7CNtVaBLt9csoGvGcaI6wh1ELIyYXUhh0/xaWpvX8hW3gFeoHJm3hekyEv3eptr09Wx8mGpwYjZnVB+B5MnC3pBoTiz1EbpaLPZ6VtRNbyL89LcAbOptZz//isGAAAAGEaUNDUElDQyBwcm9maWxlAAB4nH2RPUjDQBzFX1OlIi0OdhBxyFDFwS4qxbFUsQgWSluhVQeTS7+gSUOS4uIouBYc/FisOrg46+rgKgiCHyDugpOii5T4v6TQIsaD4368u/e4ewcIrRpTzb44oGqWkUkmxHxhVQy8IoARhDCJmMRMPZVdzMFzfN3Dx9e7KM/yPvfnCClFkwE+kTjOdMMi3iCObVo6533iMKtICvE58ZRBFyR+5Lrs8hvnssMCzwwbucw8cZhYLPew3MOsYqjEs8QRRdUoX8i7rHDe4qzWGqxzT/7CYFFbyXKd5hiSWEIKaYiQ0UAVNViI0qqRYiJD+wkP/6jjT5NLJlcVjBwLqEOF5PjB/+B3t2ZpZtpNCiaA/hfb/hgHArtAu2nb38e23T4B/M/Aldb111vA3Cfpza4WOQKGtoGL664m7wGXO8DIky4ZkiP5aQqlEvB+Rt9UAIZvgcE1t7fOPk4fgBx1tXwDHBwCE2XKXvd490Bvb/+e6fT3AxkAcunGlVZHAAANdmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNC40LjAtRXhpdjIiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6R0lNUD0iaHR0cDovL3d3dy5naW1wLm9yZy94bXAvIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgIHhtcE1NOkRvY3VtZW50SUQ9ImdpbXA6ZG9jaWQ6Z2ltcDplNDUxMWVlMS1jMjhiLTRiODctODVlNy03YTY2OTI2ZTQ3MmIiCiAgIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6YmZhNWI0ZWYtMmVjNC00NTIwLTkyOGMtNzc4OGRmYmU3NzI2IgogICB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YmQ3MTNmNmItYjMzZS00OGIzLTk3M2UtNWYwZDFmNzFjYTU0IgogICBkYzpGb3JtYXQ9ImltYWdlL3BuZyIKICAgR0lNUDpBUEk9IjIuMCIKICAgR0lNUDpQbGF0Zm9ybT0iV2luZG93cyIKICAgR0lNUDpUaW1lU3RhbXA9IjE3NTMzNjQ0ODAzMzA2OTMiCiAgIEdJTVA6VmVyc2lvbj0iMi4xMC4zOCIKICAgdGlmZjpPcmllbnRhdGlvbj0iMSIKICAgeG1wOkNyZWF0b3JUb29sPSJHSU1QIDIuMTAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjU6MDc6MjRUMDk6NDE6MjAtMDQ6MDAiCiAgIHhtcDpNb2RpZnlEYXRlPSIyMDI1OjA3OjI0VDA5OjQxOjIwLTA0OjAwIj4KICAgPHhtcE1NOkhpc3Rvcnk+CiAgICA8cmRmOlNlcT4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YjFkYTU5M2UtNzUyMS00NzdkLTg0MTItZTBjY2IzNTJkZDdjIgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJHaW1wIDIuMTAgKFdpbmRvd3MpIgogICAgICBzdEV2dDp3aGVuPSIyMDI1LTA3LTI0VDA5OjQxOjIwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PmviuHMAAAAGYktHRAD4APgA+Im2+KUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfpBxgNKRSMVptPAAAgAElEQVR42u2d25akKBBFsdf8N4cvZx4yzfICCooKuHcvZ7qrTFNuESdChMEY4w0AAAC8BknmH9UAAADwPhAAAAAACAAAAABAAAAAAAACAAAAABAAAAAAgAAAAAAABAAAAAAgAAAAAAABAAAAAAgAAAAAuJP/Dn1KMpr+P/8CRgpc7wT6XXBx7d1yZJy/+D5tfvBMGeefnX7P7++Te1/ehz4/DH7feO6qvgq0AQAAtIVPO+QlH0RS/HOxD/kD1/reR6lr5d3Z6upeD5ZR2j5PmWX+XG+j7cMfin4PBwfHiUPy+h5ptnk88r5Hk+95fiwn3kvwnFD5NS9fsC7jv5/fS/jzW/e6vmYt9fx3fya1YVIcYjlnq/1Oe8RRB65zRgBcWcao010JiOV5+x1MOc5fPlGMcHBwnHb62wMt21ZkWaRNm5sT4OQ6/bwyb5+/FXyGbON7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";
splashScreen.width="512";
splashScreen.height="512";
splashScreen.style.position="absolute";
splashScreen.style.zIndex="100";
splashScreen.style.width="512px";
splashScreen.style.height="512px";
splashScreen.style.border="none";
splashScreen.style.borderRadius="16px";
splashScreen.style.outline="lime solid 5px";
splashScreen.style.boxShadow="rgba(0, 255, 0, 0.75) 0px 0px 48px";

splashScreen.style.left=`${window.innerWidth/2 - 256}px`;
splashScreen.style.top=`${window.innerHeight/2 - 256}px`;

document.body.appendChild(splashScreen);

splashScreenVisible = true;
}



/* Completion Message */

const z_coinFocus = coinFocus;

console.log(
`
     boot sequence successful...

HW - It's all I know...

`);
