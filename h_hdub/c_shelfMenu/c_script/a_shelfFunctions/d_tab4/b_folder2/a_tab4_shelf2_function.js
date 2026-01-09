ui.save200.click                 = function() { deMinimis(false, 1/2); };
ui.save300.click                 = function() { deMinimis(false, 1/3.2); };
ui.save500.click                 = function() { deMinimis(false, 1/5); };
ui.save800.click                 = function() { deMinimis(false, 1/7.68); };
ui.save1000.click                = function() { deMinimis(false, 1/10); };
ui.save1200.click                = function() { deMinimis(false, 1/12.8); };
ui.save1500.click                = function() { deMinimis(false, 1/15.36); };
ui.save1800.click                = function() { deMinimis(false, 1/20); };
ui.elementArticle.click          = function() { copyToClipboard('<article               style="width: 98%; height: 98%; margin: 0; border: 0; padding: 0;"></article>'); };
ui.elementColour.click           = function() { copyToClipboard('<input type="color"    name="colour"   style="width: 98%; height: 98%; margin: 0; border: 0; padding: 0;"></article>'); };
ui.elementRadioBtn.click         = function() { copyToClipboard('<input type="radio"    name="radio"    style="width: 98%; height: 98%; margin: 0; border: 0; padding: 0;"></article>'); };
ui.elementRange.click            = function() { copyToClipboard('<input type="range"    name="range"    style="width: 98%; height: 98%; margin: 0; border: 0; padding: 0;"></article>'); };
ui.elementValue.click            = function() { copyToClipboard('<input type="value"    name="value"    style="width: 98%; height: 98%; margin: 0; border: 0; padding: 0;"></article>'); };
ui.elementTextarea.click         = function() { copyToClipboard('<textarea              name="textarea" style="width: 98%; height: 98%; margin: 0; border: 0; padding: 0;"></textarea>'); };
ui.elementCheckbox.click         = function() { copyToClipboard('<input type="checkbox" name="checkbox" style="width: 98%; height: 98%; margin: 0; border: 0; padding: 0;"></article>'); };
ui.elementNumber.click           = function() { copyToClipboard('<input type="number"   name="number"   style="width: 98%; height: 98%; margin: 0; border: 0; padding: 0;"></article>'); };
ui.elementButton.click           = function() { copyToClipboard('<input type="button"   name="button"   style="width: 98%; height: 98%; margin: 0; border: 0; padding: 0;"></article>'); };
ui.elementCanvas.click           = function() { copyToClipboard('<canvas                style="width: 98%; height: 98%; margin: 0; border: 0; padding: 0;"></canvas>'); };














function vwConversion(string, factor) {
string = string.replace(/left: 0px;/g,   "left: 0vw;");
string = string.replace(/top: 0px;/g,    "top: 0vw;");
string = string.replace(/width: 0px;/g,  "width: 0vw;");
string = string.replace(/height: 0px;/g, "height: 0vw;");
let lefts = string.match(/left: [0123456789]*px;/);
          while (lefts) {
const currentValue = parseInt(lefts[0].replace(/left: /g, ""));
const newValue = currentValue * factor;
                   string = string.replace(/left: [0123456789]*px;/,   "left: " + newValue + "vw;");
lefts = string.match(/left: [0123456789]*px;/);
}
let tops = string.match(/top: [0123456789]*px;/);
          while (tops) {
const currentValue = parseInt(tops[0].replace(/top: /, ""));
const newValue = currentValue * factor;
                   string = string.replace(/top: [0123456789]*px;/,    "top: " + newValue + "vw;");
tops = string.match(/top: [0123456789]*px;/);
}
let widths = string.match(/width: [0123456789]*px;/);
          while (widths) {
const currentValue = parseInt(widths[0].replace(/width: /, ""));
const newValue = currentValue * factor;
                   string = string.replace(/width: [0123456789]*px;/,  "width: " + newValue + "vw;");
widths = string.match(/width: [0123456789]*px;/);
}
let heights = string.match(/height: [0123456789]*px;/);
          while (heights) {
const currentValue = parseInt(heights[0].replace(/height: /, ""));
const newValue = currentValue * factor;
                   string = string.replace(/height: [0123456789]*px;/, "height: " + newValue + "vw;");
heights = string.match(/height: [0123456789]*px;/);
}
let radiuses = string.match(/radius: [0123456789]*px;/);
          while (radiuses) {
const currentValue = parseInt(radiuses[0].replace(/radius: /, ""));
const newValue = currentValue * factor;
                   string = string.replace(/radius: [0123456789]*px;/, "radius: " + newValue + "vw;");
radiuses = string.match(/radius: [0123456789]*px;/);
}
let outlines = string.match(/outline: [^;]* [^;]* [0123456789]*px;/);
          while (outlines) {
const currentValue = parseInt(outlines[0].replace(/outline: [^;]* [^;]* ([0123456789]*)px;/, "$1"));
const newValue = currentValue * factor;
                   string = string.replace(/(outline: [^;]* [^;]* )[0123456789]*px;/, "$1" + newValue + "vw;");
outlines = string.match(/outline: [^;]* [^;]* [0123456789]*px;/);
}
let outlineOffsets = string.match(/outline-offset: -[0123456789]*px;/);
          while (outlineOffsets) {
const currentValue = parseFloat(outlineOffsets[0].replace(/outline-offset: (-[0123456789]*)px;/, "$1"));
const newValue = currentValue * factor;
                   string = string.replace(/outline-offset: -[0123456789]*px;/, "outline-offset: " + newValue + "vw;");
outlineOffsets = string.match(/outline-offset: -[0123456789]*px;/);
}
return string;
}
















const fileHeader = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="robots" content="index, follow">
<meta name="handheldfriendly" content="true">
<meta name="mobile-web-app-capable" content="yes">
<meta name="description"         content="{{description}}">
<meta property="og:description"  content="{{description}}">
<meta name="geo.position"  content="43.658497;-79.347015">
<meta name="geo.region"    content="CA-ON">
<meta name="geo.placename" content="Toronto">
                             <title>{{title}}</title>
<meta property="og:title"  content="{{title}}">
<meta property="og:type"   content="website">

<meta property="og:image"  content="<<insert URL>>">
<meta property="og:url"    content="<<insert URL>>">
<link rel="canonical"         href="<<insert URL>>">
<link rel="stylesheet"        href="<<insert URL>>"/>

<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" >
</head>
<body>
`;

const fileFooter = `
</body>
</html>
`;












function deMinimis(header, factor, eventArg) {
spaceViewOn();
removePointerEventsNone();

let string = utilityLayer0.innerHTML;

let parser = new DOMParser();
let doc = parser.parseFromString(string, 'text/html');



for (let j = 0; j < doc.body.children.length; j++) {

if (doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.children.length > 1) {
const wrapping = document.createElement("div");
wrapping.innerHTML = doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.innerHTML;
doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.innerHTML = "";
doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.innerHTML = wrapping.outerHTML;
}

}















let cleanDOM = document.createElement("div");

for (let j = 0; j < doc.body.children.length; j++) {

let inner;





       if (doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.children.length == 1) {
inner = doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.firstElementChild;

inner.style.position        = "absolute";
inner.style.left            = doc.body.children[j].style.left;
inner.style.top             = doc.body.children[j].style.top;
inner.style.width           = doc.body.children[j].style.width;
inner.style.height          = doc.body.children[j].style.height;
inner.style.zIndex          = doc.body.children[j].style.zIndex;inner.style.userSelect      = doc.body.children[j].style.userSelect;
inner.style.transform       = doc.body.children[j].lastElementChild.style.transform;
inner.style.transformOrigin = doc.body.children[j].lastElementChild.style.transformOrigin;
inner.style.outline         = doc.body.children[j].lastElementChild.style.outline;
inner.style.outlineOffset   = doc.body.children[j].lastElementChild.style.outlineOffset;
inner.style.borderRadius    = doc.body.children[j].lastElementChild.style.borderRadius;
inner.style.overflow        = doc.body.children[j].lastElementChild.style.overflow;
inner.style.boxShadow       = doc.body.children[j].lastElementChild.style.boxShadow;
inner.style.color           = doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.style.color;
inner.style.backgroundColor = doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.style.backgroundColor;
inner.style.fontSize        = doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.style.fontSize;
inner.style.fontVariant     = doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.style.fontVariant;
inner.style.fontStyle       = doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.style.fontStyle;
inner.style.fontWeight      = doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.style.fontWeight;
inner.style.fontFamily      = doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.style.fontFamily;
inner.style.opacity         = doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.style.opacity;
inner.style.textShadow      = doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.style.textShadow;
inner.style.textAlign       = doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.style.textAlign;
inner.style.wordSpacing     = doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.style.wordSpacing;
inner.style.letterSpacing   = doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.style.letterSpacing;
inner.style.lineHeight      = doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.style.lineHeight;
inner.style.textIndent      = doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.style.textIndent;
if (doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.style.padding == "inherit") {
inner.style.padding         = doc.body.children[j].lastElementChild.style.padding;
} else {
inner.style.padding         = doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.style.padding;
}

} else if (doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.children.length == 0) {
inner = document.createElement("div");

inner.style.position        = "absolute";
inner.style.left            = doc.body.children[j].style.left;
inner.style.top             = doc.body.children[j].style.top;
inner.style.width           = doc.body.children[j].style.width;
inner.style.height          = doc.body.children[j].style.height;
inner.style.zIndex          = doc.body.children[j].style.zIndex;

}

let pattern     = new RegExp(`#${inner.id}`, "g");





inner.innerHTML = inner.innerHTML.replace(pattern, "#" + doc.body.children[j].id);
inner.innerHTML = inner.innerHTML.replace(/\#[^ ]+button/g, "#button");



inner.id        = doc.body.children[j].id;

cleanDOM += inner.outerHTML + "\n";


}

string = cleanDOM;


/*



Pulling the style block out as hashes "#"


*/

/*


const styleBlock = string.replace(/^[^"]*"([^"]*)"/g, "#\1").replace(/style="/g, "{\n").replace(/".*>/g, "}").replace(/;/g, ";\n    ")
console.log(styleBlock);
*/

string = string.replace(/ data[^"]*"[^"]*"/g, "");
string = string.replace(/<button style=.position: absolute; z-index: 300;[^>]*><\/button>/g, "");
string = string.replace(/<img alt=""[^>]*>/g, "");




















if (factor) {
string = vwConversion(string,factor);
}


doc = parser.parseFromString(string, 'text/html');






















let idRoll = [];
for (let j = 0; j < doc.body.children.length; j++) {
idRoll[j] = doc.body.children[j].id;
}





let eventRoll = [];
if (eventArg) { eventRoll = eventArg; } else { eventRoll = ["click", "dblclick", "mousemove", "input", "change"]; }

let scriptStarter = `
<script>
/*** THIS SETS UP THE REFERENCES ***/
const ui = {};
${JSON.stringify(idRoll).replace('["', '[\n    "').replace('"]', '"\n]').replace(/",/g, '",\n    ')}.forEach((name) => {
ui[name]       = {};
ui[name].ref   = document.getElementById(name);
});
`;
scriptStarter += `
/*** THIS SETS UP THE FUNCTION BLOCKS: READY FOR CODE ***/
`;
for (let k = 0; k < eventRoll.length; k++) {
for (let j = 0; j < idRoll.length; j++) {
scriptStarter += `${("ui." + idRoll[j] + "." + eventRoll[k]).padStart(32, " ")} = function() {                        }; /*                                                */
`;
}
scriptStarter += `
`;
}
for (let k = 0; k < eventRoll.length; k++) {
scriptStarter += `
/*** THIS SETS UP EVENT DELEGATION FOR "${eventRoll[k].toUpperCase()}" EVENT ***/
document.addEventListener("${eventRoll[k]}", function() {
switch (event.target) {
`;
for (let j = 0; j < idRoll.length; j++) {
scriptStarter += `${("case ui." + idRoll[j] + ".ref").padStart(32, " ")}: ${("ui." + idRoll[j] + "." + eventRoll[k] + "()").padStart(32, " ")}; break;
`;
}
scriptStarter += `}});
`;
}
scriptStarter += `

window.addEventListener("resize", (event) => {  });
window.addEventListener("scroll", (event) => {  });
</script>`;











string = string.replace(/\[object HTMLDivElement\]/g, "");



const rename = false;







if (factor) {
saveHTMLparticle(rename, string + "\n\n\n" + scriptStarter, false, false, false);
} else if (header) {
saveHTMLparticle(rename, fileHeader.replace(/{{title}}/g, filename).replace(/{{description}}/g, ui.pageDescription.ref.value) + string + "\n\n\n" + scriptStarter + fileFooter, false, false, false);
} else {
saveHTMLparticle(rename, string, false, false, false);
}

restorePointerEventsNone();
spaceViewOff();
Z();
}






