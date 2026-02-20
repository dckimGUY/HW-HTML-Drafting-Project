ui.save200.click                 = function() { deMinimis(false,         "1" ); updateInfoShelf(); };
ui.save300.click                 = function() { deMinimis(false, "(100/320)" ); updateInfoShelf(); };
ui.save500.click                 = function() { deMinimis(false, "(100/500)" ); updateInfoShelf(); };
ui.save800.click                 = function() { deMinimis(false, "(100/768)" ); updateInfoShelf(); };
ui.save1000.click                = function() { deMinimis(false, "(100/1000)"); updateInfoShelf(); };
ui.save1200.click                = function() { deMinimis(false, "(100/1280)"); updateInfoShelf(); };
ui.save1500.click                = function() { deMinimis(false, "(100/1536)"); updateInfoShelf(); };
ui.save1800.click                = function() { deMinimis(false, "(100/2000)"); updateInfoShelf(); };


const header1 = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="description" content="{{description}}">
<title>{{title}}</title>
</head>
<body style="background-color: {{backgroundColour}};">
`;
const header2 = `
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
</head>
<body style="background-color: {{backgroundColour}};">
`;
const header3 = `
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
<body style="background-color: {{backgroundColour}};">
`;
const header4 = `
<!DOCTYPE html>
<html lang="{{lang}}">
<head>
<meta  charset="UTF-8">
<meta     name="publication-date" content="{{date}}">
<meta     name="author" content="***your name">
<meta     name="robots" content="index, follow">
<link      rel="sitemap" type="application/xml" title="sitemap" href="***URL/sitemap/sitemap.xml">
<meta     name="handheldfriendly" content="true">
<meta     name="mobile-web-app-capable" content="yes">
<meta     name="description"     content="{{description}}">
<meta property="og:description"  content="{{description}}">
<meta     name="geo.position"  content="43.658497;-79.347015">
<meta     name="geo.region"    content="CA-ON">
<meta     name="geo.placename" content="Toronto">
                             <title>{{title}}</title>
<meta property="og:title"  content="{{title}}">
<meta property="og:type"   content="website">
<meta property="og:image"  content="***URL/images/{{title}}.png">
<meta property="og:url"    content="***URL/articles/{{title}}.html">
<link      rel="canonical"    href="***URL/articles/{{title}}.html">

<script type="application/ld+json">
{
"@context": "https://schema.org",
"publisher": {
"@type": "NewsMediaOrganization",
"name": "***enter newspaper name",
"correctionsPolicy"       :"***URL/news-media-organization/corrections-policy.html",
"diversityPolicy"         :"***URL/news-media-organization/diversity-policy.html",
"ethicsPolicy"            :"***URL/news-media-organization/ethics-policy.html",
"areaServed"              :"Toronto, Ontario, Canada",
"actionableFeedbackPolicy":"***URL/news-media-organization/actionable-feedback-policy.html",
"diversityStaffingReport" :"***URL/news-media-organization/diversity-staffing-report.html",
"ownershipFundingInfo"    :"***URL/news-media-organization/ownership-funding-policy.html",
"unnamedSourcesPolicy"    :"***URL/news-media-organization/unnamed-sources-policy.html",
"email":"***maybe enter your email",
"slogan":"***enter your slogan",
"telephone":"***905-555-5555",
"seeks":"***enter your goal",
"logo": {
"@type": "ImageObject",
"url": "***URL/images/logo.png"
}
},
"author": {
"@type": "NewsMediaOrganization",
"name": "***enter newspaper name"
},
"url": "URL"
}
</script>

<script type="application/ld+json">
{
"@context":"https://schema.org",
"@type":"Place",
"name":"***enter newspaper name",
"address":{
"@type":"PostalAddress",
"addressLocality":"Toronto",
"addressRegion":"ON",
"addressCountry":"CA"
},
"geo":{
"@type":"GeoCoordinates",
"latitude":43.658497,
"longitude": -79.347015
}
}
</script>

<script type="application/ld+json">
{
"@context":"https://schema.org",
"@type":"Article",
"headline":"{{title}}",
"description":"{{description}}",
"image":"***URL/images/{{title}}.png",
"datePublished":"{{dateU}}",
"dateModified":"{{dateU}}",
"inLanguage":"{{lang}}",
"mainEntityOfPage":"***URL",
"author": {
"@type": "Person",
"name":"***your name",
"familyName":"***your last name",
"givenName":"***you first name",
"email":"***enter your email",
"honorificPrefix":"***your position",
"gender":"***your gender",
"nationality":"Canadian",
"jobTitle":"",
"callSign":""
},
"publisher": {
"@type":"NewsMediaOrganization",
"name":"***enter newspaper name",
"logo": {
"@type":"ImageObject",
"url":"***URL/images/logo.png"
}
}
}
</script>
`;



const footer1 = `
</body>
</html>
`;
const footer2 = `
<footer>
<p><small>
&copy; Copyright Your Website Name
</small</p>
</footer>
</body>
</html>
`;
const footer3 = `
<script src="enter script URL"></script>
</body>
</html>
`;
const footer4 = `
<footer>
<p><small>
&copy; Copyright Your Website Name
</small</p>
</footer>
</body>
</html>
`;
























let fileHeader = `
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
<body style="background-color: {{backgroundColour}};">
`;

let fileFooter = `
</body>
</html>
`;

if (localStorage.getItem('fileHeader')) {
fileHeader = localStorage.getItem('fileHeader');
}

if (localStorage.getItem('fileFooter')) {
fileFooter = localStorage.getItem('fileFooter');
}





var lastFactor = "1";

if (localStorage.getItem("lastFactor")) {
lastFactor = localStorage.getItem("lastFactor");
}








function vwConversion(string, factor) {
string = string.replace(/ 0px;/g,   " 0vw;");
let pixels = string.match(/ [0123456789]*px;/);
while (pixels) {
const currentValue = parseInt(pixels[0].replace(/ /g, ""));
const newValue = currentValue * factor;
string = string.replace(/ [0123456789]*px;/, " " + `calc(${currentValue} * ${factor}` + "* 1vw);");
pixels = string.match(/ [0123456789]*px;/);
}
return string;
}
























function deMinimis(header, factor, eventArg, openInNewWindow, typeAlone, layerRef) {
spaceViewOn();
removePointerEventsNone();

let stylePosition = "";
let string = "";
    string = utilityLayer0.innerHTML;

if (coinFocus != null) {
if (
typeAlone == "css"  ||
typeAlone == "html" ||
typeAlone == "code" ||
typeAlone == "flow" ||
event.target.id == "save200"  ||
event.target.id == "save300"  ||
event.target.id == "save500"  ||
event.target.id == "save800"  ||
event.target.id == "save1000" ||
event.target.id == "save1200" ||
event.target.id == "save1500"
) {
if ( event.shiftKey) {
                   string = "";
       if (coinFocus.dataset.coinTrip == "0") {
                   string = "";
         for (let j = 0; j < coinTrip.sel0.length; j++) {
                   string += coinTrip.sel0[j].outerHTML;
}
} else if (coinFocus.dataset.coinTrip == "1") {
                   string = "";
         for (let j = 0; j < coinTrip.sel1.length; j++) {
                   string += coinTrip.sel1[j].outerHTML;
}
} else if (coinFocus.dataset.coinTrip == "?") {
                   string = "";
         for (let j = 0; j < coinTrip.sel2.length; j++) {
                   string += coinTrip.sel2[j].outerHTML;
}
}
}
}
}












if (layerRef) string = layerRef;






if (!typeAlone || typeAlone == "") {
stylePosition = `
.pixelArt {
border: none; padding: none;
margin: none; outline: none;
image-rendering: crisp-edges;
image-rendering: pixelated;
}
`;
}











let styleEtc      = "";

let parser = new DOMParser();
let doc = parser.parseFromString(string, 'text/html');

if (factor) {
lastFactor = factor;
localStorage.setItem("lastFactor", lastFactor);
}

if (openInNewWindow || typeAlone == "css") factor = lastFactor;


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
inner.style.zIndex          = doc.body.children[j].style.zIndex;
inner.style.userSelect      = doc.body.children[j].style.userSelect;
inner.style.transform       = doc.body.children[j].lastElementChild.style.transform;
inner.style.transformOrigin = doc.body.children[j].lastElementChild.style.transformOrigin;
inner.style.outline         = doc.body.children[j].lastElementChild.style.outline;
inner.style.outlineOffset   = doc.body.children[j].lastElementChild.style.outlineOffset;
inner.style.borderRadius    = doc.body.children[j].lastElementChild.style.borderRadius;
inner.style.overflow        = doc.body.children[j].lastElementChild.style.overflow;
inner.style.boxShadow       = doc.body.children[j].lastElementChild.style.boxShadow;
inner.style.color           = doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.style.color;
inner.style.background      = doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.style.background;
inner.style.backgroundColor = doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.style.backgroundColor;
inner.style.backgroundSize  = doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.style.backgroundSize;
if (inner.style.backgroundSize == "") {
inner.style.backgroundSize  = "100% 100%";
}
inner.style.fontSize        = doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.style.fontSize;
inner.style.fontVariant     = doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.style.fontVariant;
inner.style.fontStyle       = doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.style.fontStyle;
inner.style.fontWeight      = doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.style.fontWeight;
inner.style.fontFamily      = doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.style.fontFamily;
inner.style.opacity         = doc.body.children[j].lastElementChild.style.opacity;
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

inner.classList.add(`${inner.id}_position`);
inner.classList.add(`${inner.id}_etc`);

if (doc.body.children[j].dataset.notes) {
inner.dataset.notes         = doc.body.children[j].dataset.notes;
} else {
inner.dataset.notes         = "";
}

cleanDOM += inner.outerHTML + "\n";

stylePosition += `
.${inner.id}_position {
    position:         ${inner.style.position.toString().padStart(24, ' ')};
    left:             ${inner.style.left.toString().padStart(24, ' ')};
    top:              ${inner.style.top.toString().padStart(24, ' ')};
    width:            ${inner.style.width.toString().padStart(24, ' ')};
    height:           ${inner.style.height.toString().padStart(24, ' ')};
    z-index:          ${inner.style.zIndex.toString().padStart(24, ' ')};
}`;
styleEtc += `
.${inner.id}_etc {
    user-select:      ${inner.style.userSelect.toString().padStart(24, ' ')};
    transform:        ${inner.style.transform.toString().padStart(24, ' ')};
    transform-origin: ${inner.style.transformOrigin.toString().padStart(24, ' ')};
    outline:          ${inner.style.outline.toString().padStart(24, ' ')};
    outline-offset:   ${inner.style.outlineOffset.toString().padStart(24, ' ')};
    border-radius:    ${inner.style.borderRadius.toString().padStart(24, ' ')};
    overflow:         ${inner.style.overflow.toString().padStart(24, ' ')};
    box-shadow:       ${inner.style.boxShadow.toString().padStart(24, ' ')};
    color:            ${inner.style.color.toString().padStart(24, ' ')};
    background:       ${inner.style.background.toString().padStart(24, ' ')};
    background-color: ${inner.style.backgroundColor.toString().padStart(24, ' ')};
    background-size:  ${inner.style.backgroundSize.toString().padStart(24, ' ')};
    font-size:        ${inner.style.fontSize.toString().padStart(24, ' ')};
    font-variant:     ${inner.style.fontVariant.toString().padStart(24, ' ')};
    font-style:       ${inner.style.fontStyle.toString().padStart(24, ' ')};
    font-weight:      ${inner.style.fontWeight.toString().padStart(24, ' ')};
    font-family:      ${inner.style.fontFamily.toString().padStart(24, ' ')};
    opacity:          ${inner.style.opacity.toString().padStart(24, ' ')};
    text-shadow:      ${inner.style.textShadow.toString().padStart(24, ' ')};
    text-align:       ${inner.style.textAlign.toString().padStart(24, ' ')};
    word-spacing:     ${inner.style.wordSpacing.toString().padStart(24, ' ')};
    letter-spacing:   ${inner.style.letterSpacing.toString().padStart(24, ' ')};
    line-height:      ${inner.style.lineHeight.toString().padStart(24, ' ')};
    text-indent:      ${inner.style.textIndent.toString().padStart(24, ' ')};
    padding:          ${inner.style.padding.toString().padStart(24, ' ')};
}`;
}

string = cleanDOM;

string = string.replace(/data-angle="[^"]*"/g, "");
string = string.replace(/data-children="[^"]*"/g, "");
string = string.replace(/data-coinTrip="[^"]*"/g, "");
string = string.replace(/data-dragPull="[^"]*"/g, "");
string = string.replace(/data-finishedOutline="[^"]*"/g, "");
string = string.replace(/data-height="[^"]*"/g, "");
string = string.replace(/data-jsName="[^"]*"/g, "");
string = string.replace(/data-left="[^"]*"/g, "");
string = string.replace(/data-outlineColour="[^"]*"/g, "");
string = string.replace(/data-parent="[^"]*"/g, "");
string = string.replace(/data-scale="[^"]*"/g, "");
string = string.replace(/data-top="[^"]*"/g, "");
string = string.replace(/data-width="[^"]*"/g, "");
string = string.replace(/style="[^"]*"/g, "");


string = string.replace(/<button style=.position: absolute; z-index: 300;[^>]*><\/button>/g, "");
string = string.replace(/<img alt=""[^>]*>/g, "");




















if (factor && factor != 1) {
stylePosition = vwConversion(stylePosition,factor);
styleEtc      = vwConversion(styleEtc,factor);
}







doc = parser.parseFromString(string, 'text/html');



let idRoll = [];
for (let j = 0; j < doc.body.children.length; j++) {
idRoll[j] = doc.body.children[j].id;
}





let eventRoll = [];
if (eventArg) { eventRoll = eventArg; } else { eventRoll = ["click", "dblclick", "mousedown", "mouseup", "mousemove", "mousewheel", "input", "change"]; }

let scriptStarter = `

/*** THIS SETS UP THE REFERENCES ***/

const ui         = {};
      ui.images  = [];
      ui.audios  = [];
      ui.idList  =
${JSON.stringify(idRoll).replace('["', '[\n    "').replace('"]', '"\n]').replace(/",/g, '",\n    ')};
ui.idList.forEach((id) => {
ui[id]         = {};
ui[id].ref     = document.getElementById(id);

/*** SET UP FOR JSON ***/

if (ui[id].ref.dataset &&
    ui[id].ref.dataset.notes) {
ui[id].json = {};
if (JSON.parse(ui[id].ref.dataset.notes)) {
ui[id].json = JSON.parse(ui[id].ref.dataset.notes);
} else {
ui[id].json = ui[id].ref.dataset.notes;
}
}
if (
ui[id].json.initialDisplay &&
ui[id].json.initialDisplay == "none"
) {
ui[id].ref.style.display = "none";
}

/*** SET UP FOR IMAGE DATA ***/

let num = 0;
if (ui[id].ref.firstElementChild &&
    ui[id].ref.firstElementChild.dataset &&
    ui[id].ref.firstElementChild.dataset["frame" + num]) {
ui[id].images = [];
if (ui[id].ref.firstElementChild.children.length == 0) {
ui[id].ref.style.display = "none";
}
}
while (ui[id].ref.firstElementChild &&
       ui[id].ref.firstElementChild.dataset &&
       ui[id].ref.firstElementChild.dataset["frame" + num]) {
ui[id].images[num]           = new Image();
ui[id].images[num].src       = ui[id].ref.firstElementChild.dataset["frame" + num];
ui.images[ui.images.length]  = ui[id].images[num];
num++;
}

/*** SET UP FOR AUDIO DATA ***/

if (ui[id].ref.tagName      == "AUDIO") {
ui[id].audio                 = new Audio();
ui[id].audio.src             = ui[id].ref.src;
ui.audios[ui.audios.length]  = ui[id].audio;
}
if (ui[id].ref.dataset.audio) {
ui[id].audio                 = new Audio();
ui[id].audio.src             = ui[id].ref.dataset.audio;
ui.audios[ui.audios.length]  = ui[id].audio;
}
});


`;
scriptStarter += `
/*** THIS SETS UP THE FUNCTION BLOCKS: READY FOR CODE ***/

`;
for (let k = 0; k < eventRoll.length; k++) {
for (let j = 0; j < idRoll.length; j++) {
scriptStarter += `${("ui." + idRoll[j] + "." + eventRoll[k]).padStart(32, " ")} = function() {  }; /*  */
`;
}
scriptStarter += `
`;
}
scriptStarter += `
/*** THIS SETS UP EVENT DELEGATION ***/
`;
for (let k = 0; k < eventRoll.length; k++) {
if (eventRoll[k] == "mousewheel") {

scriptStarter += `
document.addEventListener(${('"' + eventRoll[k] + '"').padStart(14," ")}, function() { ui.idList.forEach((id) => { if (event.target == ui[id].ref) { ui[id].${(eventRoll[k] + '();').padEnd(14," ")} return 0; } }, { passive: false }); });`;

} else {
scriptStarter += `
document.addEventListener(${('"' + eventRoll[k] + '"').padStart(14," ")}, function() { ui.idList.forEach((id) => { if (event.target == ui[id].ref) { ui[id].${(eventRoll[k] + '();').padEnd(14," ")} return 0; } }); });`;
}
}
scriptStarter += `

window.addEventListener("resize", (event) => {  });
window.addEventListener("scroll", (event) => {  });

console.log(\`
***DATA STRUCTURE***
ui             = {};
ui.images      = [];
ui.audios      = [];
ui.idList      = [];
ui[id]         = {};
ui[id].ref     = document.getElementById(id);
\`);
`;


string = string.replace(/\[object HTMLDivElement\]/g, "");



const rename = false;


       if (typeAlone == "css" ) {
restorePointerEventsNone();
spaceViewOff();
Z();
return stylePosition + styleEtc;
} else if (typeAlone == "html") {
restorePointerEventsNone();
spaceViewOff();
Z();
return string;
} else if (typeAlone == "code") {
restorePointerEventsNone();
spaceViewOff();
Z();
return scriptStarter;
} else if (typeAlone == "flow") {
string = string.replace(/ id="[^"]*"/g, "");
string = string.replace(/ class="[^"]*"/g, "");
string = string.replace(/ data-notes="[^"]*"/g, "");
string = string.replace(/ >/g, ">");

if (event.ctrlKey) {
saveHTMLparticle(rename, string, false, false, false);
}

restorePointerEventsNone();
spaceViewOff();
Z();
return string;
}







if (openInNewWindow) {
const newWindow = window.open();
newWindow.document.write(fileHeader.replace(/{{title}}/g, filename).replace(/{{description}}/g, ui.pageDescription.ref.value).replace(/{{backgroundColour}}/g, finishedBackgroundColour) + "<style>\n" + stylePosition + styleEtc + '</style>\n</head>\n<body style="background-color: {{backgroundColour}};">'.replace(/{{backgroundColour}}/g, finishedBackgroundColour) + "\n" + string + "\n\n\n" + "<script>" + scriptStarter + "\n</script>" + fileFooter);
restorePointerEventsNone();
spaceViewOff();
Z();
return;
}

saveHTMLparticle(rename, fileHeader.replace(/{{title}}/g, filename).replace(/{{description}}/g, ui.pageDescription.ref.value).replace(/{{backgroundColour}}/g, finishedBackgroundColour) + "<style>\n" + stylePosition + styleEtc + '</style>\n</head>\n<body style="background-color: {{backgroundColour}};">'.replace(/{{backgroundColour}}/g, finishedBackgroundColour) + "\n" + string + "\n\n\n" + "<script>" + scriptStarter + "\n</script>" + fileFooter, false, false, false);


restorePointerEventsNone();
spaceViewOff();
Z();
}






