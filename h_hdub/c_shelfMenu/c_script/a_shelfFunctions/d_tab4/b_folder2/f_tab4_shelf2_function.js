var lastFactor = "1";
var useAllLayers = false;
if (localStorage.getItem("lastFactor")) { lastFactor = localStorage.getItem("lastFactor"); }
if (localStorage.getItem("useAllLayers")) { useAllLayers = localStorage.getItem("useAllLayers"); }




function vwConversion(string, factor) {
string = string.replace(/ 0px;/g,   " 0vw;");
let pixels = string.match(/ [^ ]*px;/);
while (pixels) {
const currentValue = parseFloat(pixels[0].replace(/ /g, ""));
const newValue = currentValue * factor;
string = string.replace(/ [^ ]*px;/, " " + `calc(${currentValue} * ${factor}` + "* 1vw);");
pixels = string.match(/ [^ ]*px;/);
}
return string;
}













function cookieCutterSave() {
let collection = "";
let sliceWidth = visualGridSize3;
for (let j = 0; j < 100; j++) {
for (let k = 0; k < utilityLayer0.children.length; k++) {
if (
parseInt(utilityLayer0.children[k].style.left) >=  j      * sliceWidth &&
parseInt(utilityLayer0.children[k].style.left) <  (j + 1) * sliceWidth
) {
utilityLayer0.children[k].style.left = parseInt(utilityLayer0.children[k].style.left) - (j * sliceWidth) + "px";
collection += utilityLayer0.children[k].outerHTML;
utilityLayer0.children[k].style.left = parseInt(utilityLayer0.children[k].style.left) + (j * sliceWidth) + "px";
}
}
if (collection == "") return;
deMinimis(false,lastFactor,'','','',collection);
collection = "";
}
}





















function redness(id) {
document.getElementById("save200" ).style.backgroundColor = "transparent";
document.getElementById("save300" ).style.backgroundColor = "transparent";
document.getElementById("save500" ).style.backgroundColor = "transparent";
document.getElementById("save800" ).style.backgroundColor = "transparent";
document.getElementById("save1000").style.backgroundColor = "transparent";
document.getElementById("save1200").style.backgroundColor = "transparent";
document.getElementById("save1500").style.backgroundColor = "transparent";
document.getElementById("save1800").style.backgroundColor = "transparent";
document.getElementById(id).style.backgroundColor = "rgba(255,0,255,0.35)";
}




async function zipSave() { deMinimis(true, null, null, null, null, null, null, event, true); };





async function deMinimis(header, factor, eventArg, openInNewWindow, typeAlone, layerRef, drag, event, zipThisFile) {

if (topLayer.a_currentLayer == "localView") { toggleLocalView(); }


const translateMove = [ "top", "left" ];
const styleFirst    = [ "backdropFilter", "filter", "position", "top", "left", "width", "height", "zIndex", "userSelect" ];
const styleLast     = [ "transform", "transformOrigin", "scale", "opacity", "outline", "outlineOffset", "borderRadius", "boxShadow", "overflow" ];
const styleLastLast = [ "background", "backgroundColor", "backgroundSize", "padding", "color", "textShadow", "fontSize", "fontWeight", "fontStyle", "fontVariant", "fontFamily", "textAlign", "wordSpacing", "letterSpacing", "lineHeight", "textIndent" ];
const rename = false;

const levelName = [ "b_layer1" , "c_layer2" , "d_layer3" , "e_layer4" , "f_layer5" , "g_layer6" , "h_layer7" , "i_layer8" , "j_layer9" , "k_layer10", "l_layer11", "m_layer12", "n_layer13", "o_layer14", "p_layer15", "q_layer16", "r_layer17", "s_layer18", "t_layer19", "u_layer20" ];

if (factor) {
lastFactor = factor;
localStorage.setItem("lastFactor", lastFactor);
}

if (openInNewWindow || typeAlone == "parts") factor = lastFactor;

if (lastFactor == "(100/320)") {
factor     = `(100/${window.innerWidth})`;
lastFactor = `(100/${window.innerWidth})`;
localStorage.setItem("lastFactor", "(100/320)");
}


if (utilityLayer0.children.length == 0) {
if (openInNewWindow) {
const newWindow = window.open();
newWindow.document.write(fileHeader.replace(/{{title}}/g, filename).replace(/{{description}}/g, ui.pageDescription.ref.value) + "<style>\n" + '\n</style>\n</head>\n<body>' + "\n" + "<script>" + "\n</" + "script>" + fileFooter);
restorePointerEventsNone();
spaceViewOff();
Z();
return;
}
  
saveHTMLparticle(rename,      fileHeader.replace(/{{title}}/g, filename).replace(/{{description}}/g,          ui.pageDescription.ref.value) + "<style>\n" + '\n</style>\n</head>\n<body>' + "\n" + "<script>" + "\n</" + "script>" + fileFooter,      false,     false,    event);
restorePointerEventsNone();
spaceViewOff();
Z();
return;
}




/* BE SURE THAT THE DOCUMENT ORDERING IS REFLECTED IN THE TRIPARTITE COLOUR SETS */
readCoins();
spaceViewOn();
removePointerEventsNone();
let stylePosition = "";
let string = "";
string = utilityLayer0.innerHTML;




if (useAllLayers) {
let tempString = "";
for (h of levelName) { tempString += topLayer[h].b_content.innerHTML; }
string = tempString;
}




if (coinFocus != null && event) {
if (
typeAlone == "parts" ||
typeAlone == "flow"  ||
event.target.id == "save200"  ||
event.target.id == "save300"  ||
event.target.id == "save500"  ||
event.target.id == "save800"  ||
event.target.id == "save1000" ||
event.target.id == "save1200" ||
event.target.id == "save1500" ||
event.target.id == "save1800"
) {
if (event.shiftKey) {                          string = "";
       if (coinFocus.dataset.coinTrip == "0") { string = "";
         for (let j = 0; j < coinTrip.sel0.length; j++)    {
                   string += coinTrip.sel0[j].outerHTML;   }
} else if (coinFocus.dataset.coinTrip == "1") { string = "";
         for (let j = 0; j < coinTrip.sel1.length; j++)    {
                   string += coinTrip.sel1[j].outerHTML;   }
} else if (coinFocus.dataset.coinTrip == "2") { string = "";
         for (let j = 0; j < coinTrip.sel2.length; j++)    {
                   string += coinTrip.sel2[j].outerHTML;   }
}

}
}
}








if (layerRef) string = layerRef;

if (!typeAlone || typeAlone == "") {
stylePosition = `
.trs {
  transition-property: visibility, filter, scale, top, left, width, height, z-index, transform, transform-origin, opacity, outline, outline-offset, border-radius, box-shadow, background-color, padding, color, text-shadow, font-size, font-weight, font-style, font-variant, font-family, text-align, word-spacing, letter-spacing, line-height, text-indent;
  transition-duration: ${document.getElementById("stateTiming").innerText + "ms"};
  transition-timing-function: linear;
  transition-delay: 0ms;
  transition-behavior: ;
}
.pixelArt {
border: none; padding: none;
margin: none; outline: none;
image-rendering: crisp-edges;
image-rendering: pixelated;
background-size: 100% 100%;
}
`;
if (localStorage.getItem('outgoingFont') && localStorage.getItem('outgoingFont') != "") {
stylePosition += `body {
font-family     : ${localStorage.getItem('outgoingFont')};
background-color: ${finishedBackgroundColour};
}
`;
} else {
stylePosition += `body {
background-color: ${finishedBackgroundColour};
}
`;
}
}










let styleEtc      = "";

let parser = new DOMParser();
let doc = parser.parseFromString(string, 'text/html');







let innerStylePosition = "";
let innerStyleEtc      = "";

let addToScript = "";









let idRoll = [];




/*****************/
/*****************/
/*****************/
/*****************/
/*****************/















/* --- FINAL BROWSER REGIMENT: HARDENED & RECURSIVE --- */

// 1. Setup global references into a config object
const config = {
    doc: doc,
    parser: parser,
    styleFirst: styleFirst,
    styleLast: styleLast,
    styleLastLast: styleLastLast
};

let otherCleanDOM = "";
idRoll = []; 

const serializeRecursive = (el) => {
    const level0 = el; 
    const level1 = level0.lastElementChild;
    const level2 = level1 ? level1.lastElementChild : null;

    // Strict Triad Regiment
    const guts = (level2 && level2.children.length === 1) ? level2.firstElementChild : null;
    const isAtomic = guts && !guts.dataset.coinTrip;

    let final;
    const masterID = level0.id;
    let oldInnerID = "";

    if (isAtomic) {
        final = guts.cloneNode(true);
        oldInnerID = final.id;

        // --- NEW: MAINTAIN CLASSES FROM LEVEL 2 ---
        if (level2 && level2.classList.length > 0) {
            final.classList.add(...level2.classList);
        }

        // BUBBLE DATA: Level 0, 1, 2 datasets move to the final atomic leaf
        const keys = ["notes", "json", "audio", "state"];
        [level0, level1, level2].forEach(source => {
            if (!source) return;
            keys.forEach(key => {
                if (source.dataset[key] !== undefined) {
                    final.dataset[key] = source.dataset[key];
                }
            });
        });

        for (let y of config.styleFirst)    { final.style[y] = level0.style[y]; }
        for (let y of config.styleLast)     { final.style[y] = level1.style[y]; }
        for (let y of config.styleLastLast) { final.style[y] = level2.style[y]; }
    } else {
        final = document.createElement("div");
        final.innerHTML = level2 ? level2.innerHTML : (level1 ? level1.innerHTML : "");
        
        // --- NEW: MAINTAIN CLASSES FROM LEVEL 2 ---
        if (level2 && level2.classList.length > 0) {
            final.classList.add(...level2.classList);
        }

        const keys = ["notes", "json", "audio", "state"];
        keys.forEach(key => {
            if (level0.dataset[key] !== undefined) {
                final.dataset[key] = level0.dataset[key];
            }
        });
        for (let y of config.styleFirst)    { final.style[y] = level0.style[y]; }
        if (level1) { for (let y of config.styleLast)     { final.style[y] = level1.style[y]; } }
        if (level2) { for (let y of config.styleLastLast) { final.style[y] = level2.style[y]; } }
    }

    // --- RECURSION TRIGGER ---
    const nested = final.querySelectorAll('[data-coin-trip]');
    nested.forEach(nest => {
        nest.outerHTML = serializeRecursive(nest); 
    });

    // --- HARDENED ID REPLACEMENT ---
    if (oldInnerID && oldInnerID !== "" && oldInnerID !== masterID) {
        // Escape special characters (like dots) for Regex literal matching
        const escapedID = oldInnerID.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        
        // Match id="", #id, or ="id" (aria-controls/for) + Negative Lookahead for collisions
        let idRegex = new RegExp(`(id=['"]|#|=["'])${escapedID}(?![a-zA-Z0-9_-])`, "g");
        
        final.innerHTML = final.innerHTML.replace(idRegex, (match, prefix) => {
            return prefix + masterID;
        });
        if (final.id === oldInnerID) final.id = masterID;
    }

    final.id = level0.id;
    if (!idRoll.includes(final.id)) { idRoll.push(final.id); }
    final.classList.add('trs', final.id);

    // --- CONDENSED STYLE LOGIC ---
    const posKeys = ['position', 'left', 'top', 'width', 'height', 'zIndex', 'transform', 'transformOrigin', 'backgroundSize', 'overflow', 'opacity'];
    const etcKeys = ['filter', 'backdropFilter', 'userSelect', 'outline', 'outlineOffset', 'borderRadius', 'boxShadow', 'color', 'background', 'backgroundColor', 'fontSize', 'fontVariant', 'fontStyle', 'fontWeight', 'fontFamily', 'textShadow', 'textAlign', 'wordSpacing', 'letterSpacing', 'lineHeight', 'textIndent', 'padding'];
    
    const allKeys = [...posKeys, ...etcKeys];
    let maxPadding = Math.max(...allKeys.map(k => (final.style[k] ?? "").toString().length));

    const buildRule = (keys) => `\n.${final.id} {${keys.map(k => `\n    ${k.replace(/[A-Z]/g, m => "-" + m.toLowerCase()).padEnd(18)}: ${(final.style[k] ?? "").toString().padStart(maxPadding, ' ')};`).join('')}\n}`;

    stylePosition += buildRule(posKeys);
    styleEtc      += buildRule(etcKeys);

    final.removeAttribute('style');
    return final.outerHTML;
};

// Main Execution
for (let j = 0; j < config.doc.body.children.length; j++) {
    const rootNode = config.doc.body.children[j];
    if (rootNode.dataset.coinTrip || rootNode.querySelector('[data-coin-trip]')) {
        otherCleanDOM += serializeRecursive(rootNode) + "\n";
    }
}

string = otherCleanDOM;
const attributesToScrub = [/data-(angle|children|coinTrip|dragPull|finishedOutline|height|jsName|left|outlineColour|parent|scale|top|width|flow)="[^"]*"/g, /contenteditable="[^"]*"/g];
attributesToScrub.forEach(reg => { string = string.replace(reg, ""); });

doc = config.parser.parseFromString(string, 'text/html');























if (factor && factor != 1) {
stylePosition = vwConversion(stylePosition,factor);
styleEtc      = vwConversion(styleEtc,factor);
}

let eventRoll = [];
if (eventArg) { eventRoll = eventArg; } else { eventRoll = ["click", "mouseover", "mouseout", "dblclick", "mousedown", "mouseup", "mousemove", "mousewheel", "input", "change", "load"]; }






const lvlRoll = {};
for (i of levelName) {
lvlRoll["LVL" + topLayer[i].g_layerTitle] = [];
for (let j = 0; j < topLayer[i].b_content.children.length; j++) {

if (topLayer[i].b_content.children[j].dataset.addScript) {
addToScript += "\n" + topLayer[i].b_content.children[j].dataset.addScript;
} else {
lvlRoll["LVL" + topLayer[i].g_layerTitle].push(topLayer[i].b_content.children[j].id);
}

}
}







let scriptStarter = `

/*** THIS SETS UP THE REFERENCES ***/
const go           = {};
      go.vwFactor  = ${factor};
      go.elm       = {};
      go.dat       = {};
      go.aud       = [];
      go.img       = [];
      go.playAudio = function(trackName) { go.aud[trackName].play(); return 0; };
      go.ids       =
${JSON.stringify(idRoll).replace('["', '[\n    "').replace('"]', '"\n]').replace(/",/g, '",\n    ')};
`;






/**************************************/
/**************************************/
/**************************************/
/* THIS IS ONE OF THE LAST WORK AREAS */
/**************************************/
/**************************************/
/**************************************/

/*

  1 (function() {
  2 let state = (this.lastState === 0) ? 1 : 0;
  3 go.xqn.grp['state58519'].rate.set(1000);
  4 go.setState(go.xqn.grp['state58519'][state]);
  5 this.lastState = state;
  6 }).call(go);

*/











scriptStarter += `
go.disp = {};
go.disp.ids = ${JSON.stringify(lvlRoll).replace('["', '[\n"').replace('"]', '"\n]').replace(/",/g, '",\n')};

go.fadeIn = function(input) { let array = input ? (Array.isArray(input) ? input : [input]) : go.ids;
for (let item of array) { let process = (id) => { let el = document.getElementById(id); if (el) { el.style.opacity = "1"; el.style.visibility = "visible"; } };
if (typeof item === 'number') { try { for (let id of go.disp.ids["LVL" + item]) { process(id); } } catch { } } else { process(item); } } return 0; };

go.fadeOut = function(input) { let array = input ? (Array.isArray(input) ? input : [input]) : go.ids;
for (let item of array) { let process = (id) => { let el = document.getElementById(id); if (el) { el.style.opacity = "0"; el.style.visibility = "hidden"; } };
if (typeof item === 'number') { try { for (let id of go.disp.ids["LVL" + item]) { process(id); } } catch { } } else { process(item); } } return 0; };

go.show = function(input) { 
let array = input ? (Array.isArray(input) ? input : [input]) : go.ids;
for (let item of array) {
if (typeof item === 'number') { try { for (let id of go.disp.ids["LVL" + item]) { let el = document.getElementById(id); if (el) { el.style.display = "block"; } } } catch { } } 
else { let el = document.getElementById(item); if (el) { el.style.display = "block"; } } } return 0; };

go.hide = function(input) { 
let array = input ? (Array.isArray(input) ? input : [input]) : go.ids;
for (let item of array) {
if (typeof item === 'number') { try { for (let id of go.disp.ids["LVL" + item]) { let el = document.getElementById(id); if (el) { el.style.display = "none"; } } } catch { } } 
else { let el = document.getElementById(item); if (el) { el.style.display = "none"; } } } return 0; };

go.style = function(prop, value, input) { let array = input ? (Array.isArray(input) ? input : [input]) : go.ids;
for (let item of array) { let process = (id) => { let el = document.getElementById(id); if (el) { el.style[prop] = value; } };
if (typeof item === 'number') { try { for (let id of go.disp.ids["LVL" + item]) { process(id); } } catch { } } else { process(item); } } return 0; };

go.addClass = function(className, input) { let array = input ? (Array.isArray(input) ? input : [input]) : go.ids;
for (let item of array) { let process = (id) => { let el = document.getElementById(id); if (el) { el.classList.add(className); } };
if (typeof item === 'number') { try { for (let id of go.disp.ids["LVL" + item]) { process(id); } } catch { } } else { process(item); } } return 0; };

go.removeClass = function(className, input) { let array = input ? (Array.isArray(input) ? input : [input]) : go.ids;
for (let item of array) { let process = (id) => { let el = document.getElementById(id); if (el) { el.classList.remove(className); } };
if (typeof item === 'number') { try { for (let id of go.disp.ids["LVL" + item]) { process(id); } } catch { } } else { process(item); } } return 0; };

go.cycle = function(stateName, rate) {
let frm=go.xqn.grp[stateName].length;
let state=(go.lastState+1)%frm||0;
if(rate)go.xqn.grp[stateName].rate.set(rate);
go.setState(go.xqn.grp[stateName][state]);
go.lastState=state;
};

`;







scriptStarter += `

const dat = [ "notes", "json" ];
for (t of dat) { go.dat[t] = {}; go.dat[t].nom = []; }

go.anim          = {};
go.anim.each     = {};
go.anim.each.all = {};
go.anim.each.grp = {};
go.anim.each.one = {};
go.anim.all      = {};
go.anim.grp      = {};

go.xqn       = {};
go.xqn.nom   = [];
go.xqn.grp   = {};
go.xqn.all   = [];
go.xqn.style = [ "filter",  "scale", "top", "left", "width", "height", "zIndex", "transform", "transformOrigin", "opacity", "outline", "outlineOffset", "borderRadius", "boxShadow", "backgroundColor", "padding", "color", "textShadow", "fontSize", "fontWeight", "fontStyle", "fontVariant", "fontFamily", "textAlign", "wordSpacing", "letterSpacing", "lineHeight", "textIndent" ];

go.ids.forEach((id) => {
go.elm[id]      = {};
go.elm[id].func = {};
go.elm[id].dat = {};
go.elm[id].ref  = document.getElementById(id);

/*** SET UP FOR STATE ***/
if (go.elm[id].ref.dataset.state) {
const from = go.elm[id].ref.dataset.state;
try { const input = JSON.parse(from);
for (s of input) { go.xqn.all.push(s); }           
go.xqn.grp[id] = go.elm[id].xqn = input;
go.xqn.grp[id].nom = [];
} catch {
go.xqn.grp[id] = go.elm[id].xqn = from ; }
go.xqn.nom[go.xqn.nom.length] = id; }

/*** SET UP FOR DATA ***/
for (t of ["notes"]) {  if (go.elm[id].ref.dataset[t])          {
             const from = go.elm[id].ref.dataset[t];
    try { go.dat[t][id] = go.elm[id].dat[t] = JSON.parse(from); }
  catch { go.dat[t][id] = go.elm[id].dat[t] =            from ; }
          go.dat[t].nom[go.dat[t].nom.length] = id; }           }

for (t of ["json"]) {  if (go.elm[id].ref.dataset[t])           {
             const from = go.elm[id].ref.dataset[t];
    try { go.dat[t][id] = go.elm[id].dat[t] = JSON.parse(from); }
  catch { go.dat[t][id] = go.elm[id].dat[t] =            from ; }
          go.dat[t].nom[go.dat[t].nom.length] = id; }           }

if (go.elm[id].dat.notes.initialDisplay &&
    go.elm[id].dat.notes.initialDisplay == "none"
) { go.elm[id].ref.style.display = "none";
    go.elm[id].ref.style.opacity =    "0";
    go.elm[id].ref.style.zIndex  =    "0"; }
if (go.elm[id].dat.notes.pointerEvents &&
    go.elm[id].dat.notes.pointerEvents == "none"
) { go.elm[id].ref.style.pointerEvents = "none"; }





/*** SET UP FOR AUDIO DATA ***/
if (go.elm[id].ref.tagName == "AUDIO") {
const audio = new Audio();
  audio.src = go.elm[id].ref.src;
         if (!go.elm[id].aud) { go.elm[id].aud = []; }
              go.elm[id].aud.push(audio);
              go.aud[id] = audio; }

  if (go.elm[id].ref.dataset.audio) {
const audio = new Audio();
  audio.src = go.elm[id].ref.dataset.audio;
         if (!go.elm[id].aud) {
              go.elm[id].aud = []; }
              go.elm[id].aud.push(audio);
              go.aud[id] = audio; }
  for (let j = 0; j < go.elm[id].ref.children.length; j++) {
  if (go.elm[id].ref.children[j].tagName == "AUDIO") {
const audio = new Audio();
  audio.src = go.elm[id].ref.children[j].src;
         if (!go.elm[id].aud) {
              go.elm[id].aud = []; }
              go.elm[id].aud.push(audio); }
  if (go.elm[id].ref.children[j].dataset.audio) {
const audio = new Audio();
  audio.src = go.elm[id].ref.children[j].dataset.audio;
         if (!go.elm[id].aud) {
              go.elm[id].aud = []; }
              go.elm[id].aud.push(audio); } }





/*** SET UP FOR IMAGE DATA ***/
let num = 0;
   if (go.elm[id].ref.firstElementChild &&
       go.elm[id].ref.firstElementChild.dataset &&
       go.elm[id].ref.firstElementChild.dataset["frame" + num]) {
       go.elm[id].img = []; go.img[id]    = [];
   if (go.elm[id].ref.firstElementChild.children.length == 0) {
       go.elm[id].ref.style.display = "none"; } }
while (go.elm[id].ref.firstElementChild &&
       go.elm[id].ref.firstElementChild.dataset &&
       go.elm[id].ref.firstElementChild.dataset["frame" + num]) {
       go.elm[id].img[num]     = new Image();
       go.elm[id].img[num].src = go.elm[id].ref.firstElementChild.dataset["frame" + num];
       go.img[id][go.img[id].length] = go.elm[id].img[num];
num++; }
});

/* SECTION 1: SET UP FOR A BROAD ANIMATION AND STATE CHANGE REGIMENT */
go.setupState  = function(obj,arg,ext) {
function setup(nom,arg,ext) {
nom.delay      =  {};
nom.delay.value=   0;
nom.rate       =  {};
nom.rate.value = ${document.getElementById("stateTiming").innerText};
nom.rate.set   = function(val)  { nom.pause(); nom.rate.value = val; nom.resume(); return 0; }
nom.rate.incr  = function(step) { nom.pause(); let val; val = step; if (!step) val = 10;
                 if (nom.rate.value > 20) nom.rate.value -= val; nom.resume(); return 0; }
nom.rate.decr  = function(step) { nom.pause(); let val; val = step; if (!step) val = 10;
                                          nom.rate.value += val; nom.resume(); return 0; }
nom.now        =  {};
nom.now.value  =   0;
nom.now.set    = function(val)  { nom.now.value = val; return 0; }
nom.now.incr   = function(step) { let val; val = step; if (!step) val = 1; if (nom.now.value < nom.length - 1) nom.now.value += val; return 0; }
nom.now.decr   = function(step) { let val; val = step; if (!step) val = 1; if (nom.now.value > 0) nom.now.value -= val; return 0; }
nom.set        = function(index) { go.setState(nom[index], nom.rate.value, nom.delay.value, arg); return 0; }
nom.reset      = function() { nom.pause(); nom.now.value = 0; nom.set(nom.now.value); return 0; }
nom.next       = function() { nom.pause(); if (nom.now.value != nom.length - 1) { ++nom.now.value; nom.set(nom.now.value); }; return 0; }
nom.prev       = function() { nom.pause(); if (nom.now.value !=              0) { --nom.now.value; nom.set(nom.now.value); }; return 0; }
nom.skip       = {};
nom.skip.start = function()     { nom.now.value = 0; nom.set(nom.now.value); return 0; }
nom.skip.rev   = function(step) { let val; val = step; if (!step) val = 5; for (s = 0; s < val; s++) { nom.prev(); } return 0; }
nom.skip.fwd   = function(step) { let val; val = step; if (!step) val = 5; for (s = 0; s < val; s++) { nom.next(); } return 0; }
nom.skip.end   = function()     { nom.now.value = nom.length - 1; nom.set(nom.now.value); return 0; }
nom.pause      = function() { return 0; }
nom.resume     = function() { nom.play.fwd(); return 0; }
nom.stop       = function() { nom.pause(); nom.skip.start();
                 nom.pause  = function() { return 0; };
                 nom.resume = function() { return 0; };
                 return 0; }
nom.play       = {};
nom.play.fwd   = function() { nom.pause(); nom.next(); const intervalId = setInterval(() => {
                 if (nom.now.value != nom.length - 1) { ++nom.now.value; nom.set(nom.now.value); }
                 }, nom.rate.value);
                 nom.pause  = function() { clearInterval(intervalId); return 0; };
                 nom.resume = function() { nom.play.fwd();            return 0; };
                 return 0; }
nom.play.rev   = function() { nom.pause(); nom.prev(); const intervalId = setInterval(() => {
                 if (nom.now.value !=              0) { --nom.now.value; nom.set(nom.now.value); }
                 }, nom.rate.value);
                 nom.pause  = function() { clearInterval(intervalId); return 0; };
                 nom.resume = function() { nom.play.rev();            return 0; };
                 return 0; }
nom.flow       = 0;
nom.loop       = {};
nom.loop.fwd   = function() { nom.pause(); nom.next(); const intervalId = setInterval(() => {
                 nom.now.value = (nom.now.value == nom.length - 1) ? 0 : (nom.now.value + 1);
                 nom.set(nom.now.value); }, nom.rate.value);
                 nom.pause  = function() { clearInterval(intervalId); return 0; };
                 nom.resume = function() { nom.loop.fwd();            return 0; };
                 return 0; }
nom.loop.rev   = function() { nom.pause(); nom.prev(); const intervalId = setInterval(() => {
                 nom.now.value = (nom.now.value == 0) ? nom.length - 1 : (nom.now.value - 1);
                 nom.set(nom.now.value); }, nom.rate.value);
                 nom.pause  = function() { clearInterval(intervalId); return 0; };
                 nom.resume = function() { nom.loop.rev();            return 0; };
                 return 0; }
nom.loop.cycl  = function() { nom.pause();
                 switch (nom.flow) {
                 case 0: nom.next(); break;
                 case 1: nom.prev(); break;
                 }
                 const intervalId = setInterval(() => {
                 switch (nom.flow) {
                 case 0: nom.now.value = (nom.now.value == nom.length - 1) ? 0 : (nom.now.value + 1);
                 nom.set(nom.now.value); break;
                 case 1: nom.now.value = (nom.now.value == 0) ? nom.length - 1 : (nom.now.value - 1);
                 nom.set(nom.now.value); break;
                 }
                 }, nom.rate.value);
                 nom.pause  = function() { clearInterval(intervalId); return 0; };
                 nom.resume = function() { nom.loop.cycl(); }; return 0; }

return 0; }
for (y of obj.nom) { setup(obj.grp[y],arg,ext); } setup(obj.all,arg,ext);
return 0; }

go.setupState(go.xqn,null,null);

go.ids.forEach((id) => {
/*** DESCENDENTS ID LISTING ***/
const argE = go.elm[id]; const argD = argE.ref.children; if (argD.length > 0) {
for (let j = 0; j < argD.length; j++) { if ( !argE.ids && !argE.elm && !!argD[j].id) {
argE.ids = []; argE.elm = {}; } if (!!argD[j].id) { argE.ids.push(argD[j].id);
argE.elm[argD[j].id] = go.elm[argD[j].id]; } } }
/*** PER ELEMENT STATE SETUP ***/
argE.xqn         = {};
argE.xqn.nom     = [];
argE.xqn.grp     = {};
argE.xqn.all     = [];
go.xqn.nom.forEach((name) => {
    if (go.xqn.grp[name][0].dat[id]) {
    argE.xqn.grp[name] = []; argE.xqn.nom.push(name); }
    for (let j = 0; j < go.xqn.grp[name].length; j++) {
    try { const entry = go.xqn.grp[name][j].dat[id];
    if (entry != undefined) { argE.xqn.all.push(entry);
    argE.xqn.grp[name].push(entry); } } catch { } } });
    go.setupState(argE.xqn,argE);
});


/*** A FUNCTION TO SET THE STATE ***/
go.setState = function(xqn,rate,delay,arg) { if (!!arg) {
for (y of go.xqn.style) { const target = arg.ref;
try {
let value = parseInt(xqn.style[y]) * go.vwFactor + "vw";
if (go.vwFactor == 1 || !xqn.style[y].includes("px") || y == "filter" || y == "transform") value = xqn.style[y];
target.style[y] = value;
if (target.style.transitionDuration != rate  + "ms") {
    target.style.transitionDuration  = rate  + "ms"; }
if (target.style.transitionDelay    != delay + "ms") {
    target.style.transitionDelay     = delay + "ms"; }
} catch {  } } return 0; }
for (d of go.ids) { for (y of go.xqn.style) {
const target = document.getElementById(d);
try {
let value = parseInt(xqn.dat[d].style[y]) * go.vwFactor + "vw";
if (go.vwFactor == 1 || !xqn.dat[d].style[y].includes("px") || y == "filter" || y == "transform") value = xqn.dat[d].style[y];
target.style[y] = value;
if (target.style.transitionDuration != rate  + "ms") {
    target.style.transitionDuration  = rate  + "ms"; }
if (target.style.transitionDelay    != delay + "ms") {
    target.style.transitionDelay     = delay + "ms"; }
} catch { } } } return 0; }

/* SECTION 2: ANIMATION AND STATE CHANGE FOR EACH INDIVIDUALLY */
for (y of go.xqn.nom) { for (x of go.ids) {
for (q of go.elm[x].xqn.nom) { if (q == y) {
go.xqn.grp[y].nom.push(x); } } } }
go.setupAnimationsEach = function(point,source) {
for (y of [point]) {
y.pause      = function() { for (x of source) { go.elm[x].xqn.all.pause()         ; } }
y.resume     = function() { for (x of source) { go.elm[x].xqn.all.resume()        ; } }
y.stop       = function() { for (x of source) { go.elm[x].xqn.all.stop()          ; } }
y.set        = function() { for (x of source) { go.elm[x].xqn.all.set()           ; } }
y.reset      = function() { for (x of source) { go.elm[x].xqn.all.reset()         ; } }
y.next       = function() { for (x of source) { go.elm[x].xqn.all.next()          ; } }
y.prev       = function() { for (x of source) { go.elm[x].xqn.all.prev()          ; } }
y.rate       = {};
y.rate.set   = function(val) { for (x of source) { go.elm[x].xqn.all.rate.set(val)  ; } }
y.rate.incr  = function(val) { for (x of source) { go.elm[x].xqn.all.rate.incr(val) ; } }
y.rate.decr  = function(val) { for (x of source) { go.elm[x].xqn.all.rate.decr(val) ; } }
y.now        = {};
y.now.set    = function(val) { for (x of source) { go.elm[x].xqn.all.now.set(val)   ; } }
y.now.incr   = function(val) { for (x of source) { go.elm[x].xqn.all.now.incr(val)  ; } }
y.now.decr   = function(val) { for (x of source) { go.elm[x].xqn.all.now.decr(val)  ; } }
y.skip       = {};
y.skip.start = function()    { for (x of source) { go.elm[x].xqn.all.skip.start(); } }
y.skip.rev   = function(val) { for (x of source) { go.elm[x].xqn.all.skip.rev(val)  ; } }
y.skip.fwd   = function(val) { for (x of source) { go.elm[x].xqn.all.skip.fwd(val)  ; } }
y.skip.end   = function()    { for (x of source) { go.elm[x].xqn.all.skip.end()  ; } }
y.play       = {};
y.play.fwd   = function() { for (x of source) { go.elm[x].xqn.all.play.fwd()  ; } }
y.play.rev   = function() { for (x of source) { go.elm[x].xqn.all.play.rev()  ; } }
y.loop       = {};
y.loop.fwd   = function() { for (x of source) { go.elm[x].xqn.all.loop.fwd()  ; } }
y.loop.rev   = function() { for (x of source) { go.elm[x].xqn.all.loop.rev()  ; } }
y.loop.cycl  = function() { for (x of source) { go.elm[x].xqn.all.loop.cycl() ; } }
}
}

go.setupAnimationsEach(go.anim.each.all,go.ids);

for (p of go.xqn.nom) {
const input = go.xqn.grp[p].nom;
go.anim.each.grp[p] = {};
go.setupAnimationsEach(go.anim.each.grp[p],input);
go.anim.grp[p] = {};
go.anim.grp[p].loop   = go.xqn.grp[p].loop  ;
go.anim.grp[p].now    = go.xqn.grp[p].now   ;
go.anim.grp[p].play   = go.xqn.grp[p].play  ;
go.anim.grp[p].rate   = go.xqn.grp[p].rate  ;
go.anim.grp[p].skip   = go.xqn.grp[p].skip  ;
go.anim.grp[p].next   = function() { go.xqn.grp[p].next()  ; }
go.anim.grp[p].pause  = function() { go.xqn.grp[p].pause() ; }
go.anim.grp[p].prev   = function() { go.xqn.grp[p].prev()  ; }
go.anim.grp[p].reset  = function() { go.xqn.grp[p].reset() ; }
go.anim.grp[p].resume = function() { go.xqn.grp[p].resume(); }
go.anim.grp[p].set    = function() { go.xqn.grp[p].set()   ; }
go.anim.grp[p].stop   = function() { go.xqn.grp[p].stop()  ; }
}

go.anim.all.loop   = go.xqn.all.loop  ;
go.anim.all.skip   = go.xqn.all.skip  ;
go.anim.all.now    = go.xqn.all.now   ;
go.anim.all.play   = go.xqn.all.play  ;
go.anim.all.rate   = go.xqn.all.rate  ;
go.anim.all.next   = function() { go.xqn.all.next()  ; }
go.anim.all.pause  = function() { go.xqn.all.pause() ; }
go.anim.all.prev   = function() { go.xqn.all.prev()  ; }
go.anim.all.reset  = function() { go.xqn.all.reset() ; }
go.anim.all.resume = function() { go.xqn.all.resume(); }
go.anim.all.set    = function() { go.xqn.all.set()   ; }
go.anim.all.stop   = function() { go.xqn.all.stop()  ; }

`;







scriptStarter += `
/*** THIS SETS UP THE FUNCTION BLOCKS: READY FOR CODE ***/

`;










if (useAllLayers) {

let num = 0;
for (h of levelName) {
num++;
if (topLayer[h].b_content.children.length == 0) continue;

scriptStarter += `
/*** LVL${num} ***/

`;



for (let k = 0; k < eventRoll.length; k++) {

for (c of topLayer[h].b_content.children) {


let extract = "";
try {
extract = c.lastElementChild.lastElementChild.getAttribute("on" + eventRoll[k]);
if (eventRoll[k] == "click") {
try {
extract = c.lastElementChild.lastElementChild.firstElementChild.getAttribute("on" + eventRoll[k]);
} catch { };
}
} catch { };
scriptStarter += `${("go.elm." + c.id + ".func." + eventRoll[k]).padStart(32, " ")} = function() { ${extract} }; /*  */
`;
}
scriptStarter += `
`;
}







}










} else if (!useAllLayers) {




for (let k = 0; k < eventRoll.length; k++) {
for (let j = 0; j < idRoll.length; j++) {

let extract = "";
try {
extract = document.getElementById(idRoll[j]).lastElementChild.lastElementChild.getAttribute("on" + eventRoll[k]);
if (eventRoll[k] == "click") {
try {
extract = document.getElementById(idRoll[j]).lastElementChild.lastElementChild.firstElementChild.getAttribute("on" + eventRoll[k]);
} catch { };
}
} catch { };
scriptStarter += `${("go.elm." + idRoll[j] + ".func." + eventRoll[k]).padStart(32, " ")} = function() { ${extract} }; /*  */
`;
}
scriptStarter += `
`;
}




}











scriptStarter += `
/*** THIS SETS UP EVENT DELEGATION ***/
`;
for (let k = 0; k < eventRoll.length; k++) {
if (eventRoll[k] == "mousewheel") {

scriptStarter += `
document.addEventListener(${('"' + eventRoll[k] + '"').padStart(14," ")}, function() { go.ids.forEach((id) => { if (event.target == go.elm[id].ref) { go.elm[id].func.${(eventRoll[k] + '();').padEnd(14," ")} return 0; } }, { passive: false }); });`;

} else {
scriptStarter += `
document.addEventListener(${('"' + eventRoll[k] + '"').padStart(14," ")}, function() { go.ids.forEach((id) => { if (event.target == go.elm[id].ref) { go.elm[id].func.${(eventRoll[k] + '();').padEnd(14," ")} return 0; } }); });`;
}
}
scriptStarter += `

window.addEventListener("resize", (event) => {  });
window.addEventListener("scroll", (event) => {  });


/* SET THE SCROLL LOCATION TO WHERE IT WAS WHEN THE FILE WAS SAVED */
window.scrollTo(${window.scrollX}, ${window.scrollY});


/*** CUSTOM ADDED SCRIPT ***/

${addToScript}





go.info = function() { console.log(\`


-----------------------------------------------
>>>    PAGE DATA STRUCTURE LAYOUT KEYMAP    <<<
-----------------------------------------------
go                = {};       /* Basic Object */
go.xqn            = {};       /* State Setups */
go.dat.notes      = {};       /* Note Collect */
go.dat.json       = {};       /* JSON Entries */
go.aud            = {};       /* Audio Tracks */
go.img            = {};       /* Image Arrays */
go.ids            = [];       /* List All IDs */
go.elm            = {};       /* Element Data */
-----------------------------------------------
>>>    PER ELEMENT COMPLIMENTARY DATASET    <<<
-----------------------------------------------
go.elm[id]        = {};       /* Each Element */
go.elm[id].xqn    = {};       /* Select State */
go.elm[id].notes  = {};       /* Note Entries */
go.elm[id].json   = {};       /* Include JSON */
go.elm[id].aud    = [];       /* Audio Tracks */
go.elm[id].img    = [];       /* Images Array */
go.elm[id].ids    = [];       /* Internal IDs */
go.elm[id].elm    = {};       /* Element Data */
go.elm[id].ref    = document.getElementById(id);
-----------------------------------------------
>>>    SINGLE DEPTH NESTING IS SUPPORTED    <<<
>>>    TO ENABLE VISUAL ASSEMBLY OF DATA    <<<
-----------------------------------------------
go.playAudio(trackName);     /*Quote The Name*/

\`);
}
`;


if (openInNewWindow) {
scriptStarter += animatorInclusion;
}



string = string.replace(/\s+on\w+="[^"]*"/gi, "");
string = string.replace(/\[object HTMLDivElement\]/g, "");





       if (typeAlone == "parts" ) {
restorePointerEventsNone();
spaceViewOff();
Z();
return [stylePosition, styleEtc, string, scriptStarter];

} else if (typeAlone == "flow") {
string = string.replace(/ id="[^"]*"/g, "");
string = string.replace(/ class="[^"]*"/g, "");
string = string.replace(/ data-notes="[^"]*"/g, "");
string = string.replace(/ >/g, ">");

if (event && event.ctrlKey) {
saveHTMLparticle(rename, string, false, false, false, event);
}

restorePointerEventsNone();
spaceViewOff();
Z();

return string;
}




let stylesIncluded = "";
       if (!event || !event.altKey) {
stylesIncluded = stylePosition + styleEtc;
} else if (event && event.altKey) {
stylesIncluded = stylePosition;
}














/* --- PREPARE INITIAL CONTENT --- */
let content = fileHeader.replace(/{{title}}/g, filename).replace(/{{description}}/g, ui.pageDescription.ref.value) 
    + "<style>\n" + stylesIncluded + '\n</style>\n</head>\n<body>' 
    + "\n" + string + "\n\n\n" 
    + "<script>" + scriptStarter + "\n</" + "script>" + fileFooter;

/* --- THE CALL SITE --- */
const result = await SquareAtlas(content);
content = result.html; 



if (zipThisFile) {


saveModularZip(result.html, result.atlases, filename);

/* --- COORDINATOR FUNCTION --- */
function saveModularZip(processedHTML, atlasArray, filename) {
    const folder = filename || 'dbn13_project';
    const zipData = {};

    // 1. DEDUPLICATED MEDIA EXTRACTION
    const mediaRegex = /data:(audio|video|image)\/([a-zA-Z0-9]+);base64,([A-Za-z0-9+/=]+)/g;
    let finalHTML = processedHTML;
    
    // We use a Map to ensure each unique base64 string only gets saved ONCE
    const uniqueMediaMap = new Map(); // Key: Base64 data, Value: { type, ext, path }
    let counts = { audio: 0, video: 0, image: 0 };

    // Pass 1: Identify unique items and convert to binary
    let match;
    while ((match = mediaRegex.exec(processedHTML)) !== null) {
        const fullMatch = match[0];
        const type = match[1];
        const extension = match[2];
        const b64Data = match[3];

        /* --- SPECIAL CASE FOR IMG TAGS --- */
        // Check if this specific base64 instance exists inside an <img> tag src
        const isInsideImgTag = processedHTML.includes(`src="${fullMatch}"`);

        // If it's a PNG but NOT in an <img> tag, we skip it (it's reserved for the Atlas)
        if (type === 'image' && extension === 'png' && !isInsideImgTag) continue;

        // If it IS in an <img> tag and it's a PNG, we only process it if it's NOT in the atlasArray
        if (isInsideImgTag && extension === 'png') {
            const isAtlas = atlasArray.some(atlasB64 => atlasB64.includes(b64Data));
            if (isAtlas) continue;
        }

        if (!uniqueMediaMap.has(b64Data)) {
            const relativePath = `${type}/${counts[type]}.${extension}`;
            counts[type]++;
            
            // Convert to binary only once
            const bin = atob(b64Data);
            const u8 = new Uint8Array(bin.length);
            for (let j = 0; j < bin.length; j++) u8[j] = bin.charCodeAt(j);
            
            uniqueMediaMap.set(b64Data, { 
                path: relativePath, 
                fullMatch: fullMatch,
                data: u8 
            });
            
            // Add the unique file to zipData
            zipData[`${folder}/${relativePath}`] = u8;
        }
    }

    // Pass 2: Global Atomic Replacement in HTML
    for (const [b64, info] of uniqueMediaMap) {
        // Replace every instance of this specific base64 string with its unique path
        finalHTML = finalHTML.split(info.fullMatch).join(info.path);
    }

    // 2. CLEAN EXTRACTION (Styles & Scripts)
    const parser = new DOMParser();
    const tempDoc = parser.parseFromString(finalHTML, 'text/html');
    
    let extractedInternalCSS = "";
    tempDoc.querySelectorAll('style').forEach(s => {
        if (s.id !== 'atlas-core') extractedInternalCSS += s.textContent + "\n";
        s.remove();
    });
    tempDoc.querySelectorAll('script').forEach(s => s.remove());
    const domGuts = tempDoc.body.innerHTML;

    // 3. ATLAS CSS ASSEMBLY
    let atlasRootCSS = ':root {\n';
    atlasArray.forEach((_, i) => {
        atlasRootCSS += `  --ATLAS${i}: url('atlases/${i}.png');\n`;
    });
    atlasRootCSS += '}\n\n';

    // 4. HTML ASSEMBLY
    const zipHTML = fileHeader.replace(/{{title}}/g, folder)
        .replace(/{{description}}/g, ui.pageDescription.ref.value) 
        + '\n<link rel="stylesheet" href="style.css">\n</head>\n<body>' 
        + "\n" + domGuts + "\n\n\n" 
        + '<script src="script.js"></script>' 
        + fileFooter;

    // 5. PACKET ASSIGNMENT
    zipData[`${folder}/index.html`] = fflate.strToU8(zipHTML);
    zipData[`${folder}/style.css`] = fflate.strToU8(atlasRootCSS + extractedInternalCSS);
    zipData[`${folder}/script.js`] = fflate.strToU8(scriptStarter);

    // 6. ATLAS FOLDER PACKETS
    atlasArray.forEach((b64, i) => {
        const parts = b64.split(',');
        const bin = atob(parts[1] || parts[0]);
        const u8 = new Uint8Array(bin.length);
        for (let j = 0; j < bin.length; j++) u8[j] = bin.charCodeAt(j);
        zipData[`${folder}/atlases/${i}.png`] = u8;
    });

    // 7. GENERATE & DOWNLOAD
    const zipped = fflate.zipSync(zipData);
    const link = document.createElement('a');
    link.href = URL.createObjectURL(new Blob([zipped], { type: 'application/zip' }));
    link.download = `${folder}.zip`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(link.href), 1000);
}

restorePointerEventsNone();
spaceViewOff();
Z();
return 0;
}








































if (openInNewWindow) {
if (typeof event !== 'undefined') event.preventDefault();
setTimeout(() => {
const newWindow = window.open('', '_blank');
if (newWindow) {
newWindow.document.write(content);
newWindow.document.close();
newWindow.focus();
}
}, 0);
restorePointerEventsNone();
spaceViewOff();
Z();
return;
}


saveHTMLparticle(rename, content, false, false, false, event);
restorePointerEventsNone();
spaceViewOff();
Z();
return;


}
