ui.save200.click                 = function() { deMinimis(false,         "1" ); updateInfoShelf(); };
ui.save300.click                 = function() { deMinimis(false, "(100/320)" ); updateInfoShelf(); };
ui.save500.click                 = function() { deMinimis(false, "(100/500)" ); updateInfoShelf(); };
ui.save800.click                 = function() { deMinimis(false, "(100/768)" ); updateInfoShelf(); };
ui.save1000.click                = function() { deMinimis(false, "(100/1000)"); updateInfoShelf(); };
ui.save1200.click                = function() { deMinimis(false, "(100/1280)"); updateInfoShelf(); };
ui.save1500.click                = function() { deMinimis(false, "(100/1536)"); updateInfoShelf(); };
ui.save1800.click                = function() { deMinimis(false, "(100/2000)"); updateInfoShelf(); };


const header1 = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="description" content="{{description}}">
<title>{{title}}</title>
`;
const header2 = `<!DOCTYPE html>
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
`;
const header3 = `<!DOCTYPE html>
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
























let fileHeader = `<!DOCTYPE html>
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




























function deMinimis(header, factor, eventArg, openInNewWindow, typeAlone, layerRef) {



const styleFirst    = [ "position", "top", "left", "width", "height", "zIndex", "userSelect" ];
const styleLast     = [ "transform", "transformOrigin", "opacity", "outline", "outlineOffset", "borderRadius", "boxShadow", "overflow" ];
const styleLastLast = [ "background", "backgroundColor", "backgroundSize", "padding", "color", "textShadow", "fontSize", "fontWeight", "fontStyle", "fontVariant", "fontFamily", "textAlign", "wordSpacing", "letterSpacing", "lineHeight", "textIndent" ];
const rename = false;








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
newWindow.document.write(fileHeader.replace(/{{title}}/g, filename).replace(/{{description}}/g, ui.pageDescription.ref.value) + "<style>\n" + '\n</style>\n</head>\n<body>' + "\n" + "<script>" + "\n</script>" + fileFooter);
restorePointerEventsNone();
spaceViewOff();
Z();
return;
}

saveHTMLparticle(rename, fileHeader.replace(/{{title}}/g, filename).replace(/{{description}}/g, ui.pageDescription.ref.value) + "<style>\n" + '\n</style>\n</head>\n<body>' + "\n" + "<script>" + "\n</script>" + fileFooter, false, false, false);
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

if (coinFocus != null) {
if (
typeAlone == "parts" ||
typeAlone == "flow"  ||
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
} else if (coinFocus.dataset.coinTrip == "2") {
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
/*****************/


for (let j = 0; j < doc.body.children.length; j++) {





if (doc.body.children[j].dataset.addScript) {
addToScript += "\n" + doc.body.children[j].dataset.addScript;
doc.body.children[j].remove();
continue;
}


if (doc.body.children[j].dataset.json) {
doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.innerHTML = "<div></div>";
}






idRoll.push(doc.body.children[j].id);
if (
(doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.children &&
 doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.childElementCount == 0) ||
!doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.children ||
!doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.children[0].dataset ||
!doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.children[0].dataset.coinTrip
) {
continue;
}
if (doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.children.length >= 1) {
const wrapping = document.createElement("div");
wrapping.innerHTML = doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.innerHTML;
otherString = wrapping.innerHTML;
let otherParser = new DOMParser();
let otherDoc = otherParser.parseFromString(otherString, 'text/html');
let otherCleanDOM = document.createElement("div");
for (let j = 0; j < otherDoc.body.children.length; j++) {



if (otherDoc.body.children[j].dataset.addScript) {
addToScript += "\n" + otherDoc.body.children[j].dataset.addScript;
otherDoc.body.children[j].remove();
continue;
}

if (otherDoc.body.children[j].dataset.json) {
try {
otherDoc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.innerHTML = "<div></div>";
} catch {};
}









idRoll.push(otherDoc.body.children[j].id);
let otherInner;
       if (otherDoc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.children.length == 1) {
otherInner = otherDoc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.firstElementChild;
for (y of styleFirst   ) { otherInner.style[y] = otherDoc.body.children[j].style[y]; }
for (y of styleLast    ) { otherInner.style[y] = otherDoc.body.children[j].lastElementChild.style[y]; }
for (y of styleLastLast) { otherInner.style[y] = otherDoc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.style[y]; }
if (otherInner.style.backgroundSize == "") { otherInner.style.backgroundSize  = "100% 100%"; }


} else if (otherDoc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.children.length == 0) {
otherInner = document.createElement("div");
otherInner.style.position        = otherDoc.body.children[j].style.position;
otherInner.style.left            = otherDoc.body.children[j].style.left;
otherInner.style.top             = otherDoc.body.children[j].style.top;
otherInner.style.width           = otherDoc.body.children[j].style.width;
otherInner.style.height          = otherDoc.body.children[j].style.height;
otherInner.style.zIndex          = otherDoc.body.children[j].style.zIndex;
}


















if (otherInner.id != "") {
let pattern = new RegExp(`#${otherInner.id}`, "g");
otherInner.innerHTML = otherInner.innerHTML.replace(pattern, "#" + otherDoc.body.children[j].id);
}
otherInner.innerHTML = otherInner.innerHTML.replace(/\#[^ ]+button/g, "#button");
otherInner.id        = otherDoc.body.children[j].id;

const classes = otherDoc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.classList.toString().trim().split(" ");
for (let c of classes) { if (c != "") { otherInner.classList.add(c); } }

otherInner.classList.add(`${otherInner.id}`);






if (otherDoc.body.children[j].dataset.notes) {
otherInner.dataset.notes         = otherDoc.body.children[j].dataset.notes;
} else {
otherInner.dataset.notes         = "";
}

if (otherDoc.body.children[j].dataset.json) { otherInner.dataset.json = otherDoc.body.children[j].dataset.json; }
if (otherDoc.body.children[j].dataset.state) { otherInner.dataset.state = otherDoc.body.children[j].dataset.state; }





otherCleanDOM += otherInner.outerHTML + "\n";
innerStylePosition += `
      .${otherInner.id} {
          position:         ${otherInner.style.position.toString().padStart(24, ' ')};
          left:             ${otherInner.style.left.toString().padStart(24, ' ')};
          top:              ${otherInner.style.top.toString().padStart(24, ' ')};
          width:            ${otherInner.style.width.toString().padStart(24, ' ')};
          height:           ${otherInner.style.height.toString().padStart(24, ' ')};
          z-index:          ${otherInner.style.zIndex.toString().padStart(24, ' ')};
          transform:        ${otherInner.style.transform.toString().padStart(24, ' ')};
          transform-origin: ${otherInner.style.transformOrigin.toString().padStart(24, ' ')};
          background-size:  ${otherInner.style.backgroundSize.toString().padStart(24, ' ')};
          overflow:         ${otherInner.style.overflow.toString().padStart(24, ' ')};
          opacity:          ${otherInner.style.opacity.toString().padStart(24, ' ')};
      }`;
innerStyleEtc += `
      .${otherInner.id} {
          user-select:      ${otherInner.style.userSelect.toString().padStart(24, ' ')};
          outline:          ${otherInner.style.outline.toString().padStart(24, ' ')};
          outline-offset:   ${otherInner.style.outlineOffset.toString().padStart(24, ' ')};
          border-radius:    ${otherInner.style.borderRadius.toString().padStart(24, ' ')};
          box-shadow:       ${otherInner.style.boxShadow.toString().padStart(24, ' ')};
          color:            ${otherInner.style.color.toString().padStart(24, ' ')};
          background:       ${otherInner.style.background.toString().padStart(24, ' ')};
          background-color: ${otherInner.style.backgroundColor.toString().padStart(24, ' ')};
          font-size:        ${otherInner.style.fontSize.toString().padStart(24, ' ')};
          font-variant:     ${otherInner.style.fontVariant.toString().padStart(24, ' ')};
          font-style:       ${otherInner.style.fontStyle.toString().padStart(24, ' ')};
          font-weight:      ${otherInner.style.fontWeight.toString().padStart(24, ' ')};
          font-family:      ${otherInner.style.fontFamily.toString().padStart(24, ' ')};
          text-shadow:      ${otherInner.style.textShadow.toString().padStart(24, ' ')};
          text-align:       ${otherInner.style.textAlign.toString().padStart(24, ' ')};
          word-spacing:     ${otherInner.style.wordSpacing.toString().padStart(24, ' ')};
          letter-spacing:   ${otherInner.style.letterSpacing.toString().padStart(24, ' ')};
          line-height:      ${otherInner.style.lineHeight.toString().padStart(24, ' ')};
          text-indent:      ${otherInner.style.textIndent.toString().padStart(24, ' ')};
          padding:          ${otherInner.style.padding.toString().padStart(24, ' ')};
      }`;

}

otherString = otherCleanDOM;

otherString = otherString.replace(/data-angle="[^"]*"/g, "");
otherString = otherString.replace(/data-children="[^"]*"/g, "");
otherString = otherString.replace(/data-coinTrip="[^"]*"/g, "");
otherString = otherString.replace(/data-dragPull="[^"]*"/g, "");
otherString = otherString.replace(/data-finishedOutline="[^"]*"/g, "");
otherString = otherString.replace(/data-height="[^"]*"/g, "");
otherString = otherString.replace(/data-jsName="[^"]*"/g, "");
otherString = otherString.replace(/data-left="[^"]*"/g, "");
otherString = otherString.replace(/data-outlineColour="[^"]*"/g, "");
otherString = otherString.replace(/data-parent="[^"]*"/g, "");
otherString = otherString.replace(/data-scale="[^"]*"/g, "");
otherString = otherString.replace(/data-top="[^"]*"/g, "");
otherString = otherString.replace(/data-width="[^"]*"/g, "");
otherString = otherString.replace(/style="[^"]*"/g, "");
otherString = otherString.replace(/contenteditable="[^"]*"/g, "");


otherString = otherString.replace(/<button style=.position: absolute; z-index: 300;[^>]*><\/button>/g, "");
otherString = otherString.replace(/<img alt=""[^>]*>/g, "");




wrapping.innerHTML = otherString;




doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.innerHTML = "";
doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.innerHTML = wrapping.outerHTML;
}
}




















let cleanDOM = document.createElement("div");
for (let j = 0; j < doc.body.children.length; j++) {
let inner;
       if (doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.children.length == 1) {
inner = doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.firstElementChild;




for (y of styleFirst   ) { inner.style[y] = doc.body.children[j].style[y]; }
for (y of styleLast    ) { inner.style[y] = doc.body.children[j].lastElementChild.style[y]; }
for (y of styleLastLast) { inner.style[y] = doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.style[y]; }
if (inner.style.backgroundSize == "") { inner.style.backgroundSize  = "100% 100%"; }








} else if (doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.children.length == 0) {
inner = document.createElement("div");


inner.style.position        = "absolute";
inner.style.left            = doc.body.children[j].style.left;
inner.style.top             = doc.body.children[j].style.top;
inner.style.width           = doc.body.children[j].style.width;
inner.style.height          = doc.body.children[j].style.height;
inner.style.zIndex          = doc.body.children[j].style.zIndex;
} else if (doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.children.length  > 1) {
inner = document.createElement("div");


inner.innerHTML = doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.innerHTML;
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






}

if (inner.id != "") {
let pattern = new RegExp(`#${inner.id}`, "g");
inner.innerHTML = inner.innerHTML.replace(pattern, "#" + doc.body.children[j].id);
}

inner.innerHTML = inner.innerHTML.replace(/\#[^ ]+button/g, "#button");
inner.id        = doc.body.children[j].id;




const classes = doc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.classList.toString().trim().split(" ");
for (let c of classes) { if (c != "") { inner.classList.add(c); } }


inner.classList.add(`${inner.id}`);












if (doc.body.children[j].dataset.notes) {
inner.dataset.notes         = doc.body.children[j].dataset.notes;
} else {
inner.dataset.notes         = "";
}

if (doc.body.children[j].dataset.json) {
inner.dataset.json          = doc.body.children[j].dataset.json;
}

if (doc.body.children[j].dataset.state) {
inner.dataset.state   = doc.body.children[j].dataset.state;
}











cleanDOM += inner.outerHTML + "\n";

stylePosition += `
.${inner.id} {
    position:         ${inner.style.position.toString().padStart(24, ' ')};
    left:             ${inner.style.left.toString().padStart(24, ' ')};
    top:              ${inner.style.top.toString().padStart(24, ' ')};
    width:            ${inner.style.width.toString().padStart(24, ' ')};
    height:           ${inner.style.height.toString().padStart(24, ' ')};
    z-index:          ${inner.style.zIndex.toString().padStart(24, ' ')};
    transform:        ${inner.style.transform.toString().padStart(24, ' ')};
    transform-origin: ${inner.style.transformOrigin.toString().padStart(24, ' ')};
    background-size:  ${inner.style.backgroundSize.toString().padStart(24, ' ')};
    overflow:         ${inner.style.overflow.toString().padStart(24, ' ')};
    opacity:          ${inner.style.opacity.toString().padStart(24, ' ')};
}`;
stylePosition += innerStylePosition;
                 innerStylePosition = "";

styleEtc += `
.${inner.id} {
    user-select:      ${inner.style.userSelect.toString().padStart(24, ' ')};
    outline:          ${inner.style.outline.toString().padStart(24, ' ')};
    outline-offset:   ${inner.style.outlineOffset.toString().padStart(24, ' ')};
    border-radius:    ${inner.style.borderRadius.toString().padStart(24, ' ')};
    box-shadow:       ${inner.style.boxShadow.toString().padStart(24, ' ')};
    color:            ${inner.style.color.toString().padStart(24, ' ')};
    background:       ${inner.style.background.toString().padStart(24, ' ')};
    background-color: ${inner.style.backgroundColor.toString().padStart(24, ' ')};
    font-size:        ${inner.style.fontSize.toString().padStart(24, ' ')};
    font-variant:     ${inner.style.fontVariant.toString().padStart(24, ' ')};
    font-style:       ${inner.style.fontStyle.toString().padStart(24, ' ')};
    font-weight:      ${inner.style.fontWeight.toString().padStart(24, ' ')};
    font-family:      ${inner.style.fontFamily.toString().padStart(24, ' ')};
    text-shadow:      ${inner.style.textShadow.toString().padStart(24, ' ')};
    text-align:       ${inner.style.textAlign.toString().padStart(24, ' ')};
    word-spacing:     ${inner.style.wordSpacing.toString().padStart(24, ' ')};
    letter-spacing:   ${inner.style.letterSpacing.toString().padStart(24, ' ')};
    line-height:      ${inner.style.lineHeight.toString().padStart(24, ' ')};
    text-indent:      ${inner.style.textIndent.toString().padStart(24, ' ')};
    padding:          ${inner.style.padding.toString().padStart(24, ' ')};
}`;
styleEtc += innerStyleEtc;
            innerStyleEtc = "";


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
string = string.replace(/contenteditable="[^"]*"/g, "");

string = string.replace(/<button style=.position: absolute; z-index: 300;[^>]*><\/button>/g, "");
string = string.replace(/<img alt=""[^>]*>/g, "");





if (factor && factor != 1) {
stylePosition = vwConversion(stylePosition,factor);
styleEtc      = vwConversion(styleEtc,factor);
}

doc = parser.parseFromString(string, 'text/html');

let eventRoll = [];
if (eventArg) { eventRoll = eventArg; } else { eventRoll = ["click", "dblclick", "mousedown", "mouseup", "mousemove", "mousewheel", "input", "change", "load"]; }




let scriptStarter = `

/*** THIS SETS UP THE REFERENCES ***/
const go           = {};
      go.vwFactor  = ${factor};
      go.elm       = {};
      go.dat       = {};
      go.playAudio = function(trackName) { go.aud[trackName].play(); return 0; };
      go.ids       =
${JSON.stringify(idRoll).replace('["', '[\n    "').replace('"]', '"\n]').replace(/",/g, '",\n    ')};

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
go.xqn.style = [ "top", "left" ];

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
for (t of dat) {  if (go.elm[id].ref.dataset[t])                  {
          const from = go.elm[id].ref.dataset[t];                   
    try { go.dat[t][id] = go.elm[id].dat[t] = JSON.parse(from);  }
  catch { go.dat[t][id] = go.elm[id].dat[t] =            from ;  }
          go.dat[t].nom[go.dat[t].nom.length] = id; }       }
if (go.elm[id].dat.notes.initialDisplay &&
    go.elm[id].dat.notes.initialDisplay == "none"
) { go.elm[id].ref.style.display = "none"; }

/*** SET UP FOR AUDIO DATA ***/
if (go.elm[id].ref.tagName == "AUDIO") {
const audio = new Audio();
  audio.src = go.elm[id].ref.src;
         if (!go.elm[id].aud) {
              go.elm[id].aud = []; }
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
nom.rate       =  {};
nom.rate.value = 200;
nom.rate.set   = function(val)  { nom.pause(); nom.rate.value = val; nom.resume(); return 0; }
nom.rate.incr  = function(step) { nom.pause(); let val; val = step; if (!step) val = 10; if (nom.rate.value > 20) nom.rate.value -= val; nom.resume(); return 0; }
nom.rate.decr  = function(step) { nom.pause(); let val; val = step; if (!step) val = 10;                          nom.rate.value += val; nom.resume(); return 0; }
nom.now        =  {};
nom.now.value  =   0;
nom.now.set    = function(val)  { nom.now.value = val; return 0; }
nom.now.incr   = function(step) { let val; val = step; if (!step) val = 1; if (nom.now.value < nom.length - 1) nom.now.value += val; return 0; }
nom.now.decr   = function(step) { let val; val = step; if (!step) val = 1; if (nom.now.value > 0) nom.now.value -= val; return 0; }

nom.set        = function(index) { go.setState(nom[index], arg); return 0; }
nom.reset      = function() { nom.now.value = 0; nom.set(nom.now.value); return 0; }
nom.next       = function() { if (nom.now.value == nom.length) { nom.now.value--; return 1; }
                 else { nom.set(nom.now.value++); return 0; } }
nom.prev       = function() {if (nom.now.value == -1) { nom.now.value++; return 1; }
                 else { nom.set(nom.now.value--); return 0; } }
nom.skip       = {};
nom.skip.start = function()     { nom.now.value = 0; nom.set(nom.now.value); return 0; }
nom.skip.rev   = function(step) { let val; val = step; if (!step) val = 5; for (s = 0; s < val; s++) { nom.prev(); } return 0; }
nom.skip.fwd   = function(step) { let val; val = step; if (!step) val = 5; for (s = 0; s < val; s++) { nom.next(); } return 0; }
nom.skip.end   = function()     { nom.now.value = nom.length - 1; nom.set(nom.now.value); return 0; }
nom.pause      = function() { return 0; }
nom.resume     = function() { nom.play.fwd(); return 0; }
nom.stop       = function() { nom.pause(); nom.skip.start();
                 nom.pause  = function() { return 0; };
                 nom.resume = function() { return 0; }; return 0; }
nom.play       = {};
nom.play.fwd   = function() { nom.pause(); const intervalId = setInterval(() => {
                 if (nom.next() == 1) { nom.pause(); } }, nom.rate.value);
                 nom.pause  = function() { clearInterval(intervalId); return 0; };
                 nom.resume = function() { nom.play.fwd(); }; return 0; }
nom.play.rev   = function() { nom.pause(); const intervalId = setInterval(() => {
                 if (nom.prev() == 1) { nom.pause(); } }, nom.rate.value);
                 nom.pause  = function() { clearInterval(intervalId); return 0; };
                 nom.resume = function() { nom.play.rev(); }; return 0; }
nom.flow       = 0;
nom.loop       = {};
nom.loop.fwd   = function() { nom.pause(); const intervalId = setInterval(() => {
                 if (nom.next() == 1) { nom.now.value = 0; nom.next(); } }, nom.rate.value);
                 nom.pause  = function() { clearInterval(intervalId); return 0; };
                 nom.resume = function() { nom.loop.fwd(); }; return 0; }
nom.loop.rev   = function() { nom.pause(); const intervalId = setInterval(() => {
                 if (nom.prev() == 1) { nom.now.value = nom.length - 1; nom.prev(); } }, nom.rate.value);
                 nom.pause  = function() { clearInterval(intervalId); return 0; };
                 nom.resume = function() { nom.loop.rev(); }; return 0; }
nom.loop.cycl  = function() { nom.pause(); const intervalId = setInterval(() => {
                 switch (nom.flow) {
                 case 0: if (nom.next() == 1) { nom.flow = 1; nom.prev(); nom.prev(); }; break;
                 case 1: if (nom.prev() == 1) { nom.flow = 0; nom.next(); nom.next(); }; break; } }, nom.rate.value);
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
go.setState = function(xqn,arg) { if (!!arg) {
for (y of go.xqn.style) { const target = arg.ref; try {
let value = parseInt(xqn.style[y]) * go.vwFactor + "vw";
if (go.vwFactor == 1) value = xqn.style[y];
target.style[y] = value; } catch {  } } return 0; }
for (d of go.ids) { for (y of go.xqn.style) {
const target = document.getElementById(d); try {
let value = parseInt(xqn.dat[d].style[y]) * go.vwFactor + "vw";
if (go.vwFactor == 1) value = xqn.dat[d].style[y];
target.style[y] = value;
} catch { } } } return 0; }
























/* SECTION 2: ANIMATION AND STATE CHANGE FOR EACH INDIVIDUALLY */
for (y of go.xqn.nom) { for (x of go.ids) {
for (q of go.elm[x].xqn.nom) { if (q == y) {
go.xqn.grp[y].nom.push(x); } } } }
go.setupAnimationsEach = function(point,source) {
for (y of [point]) {
y.pause      = function() { for (x of source) { go.elm[x].xqn.all.pause()     ; } }
y.resume     = function() { for (x of source) { go.elm[x].xqn.all.resume()    ; } }
y.stop       = function() { for (x of source) { go.elm[x].xqn.all.stop()      ; } }
y.set        = function() { for (x of source) { go.elm[x].xqn.all.set()       ; } }
y.reset      = function() { for (x of source) { go.elm[x].xqn.all.reset()     ; } }
y.next       = function() { for (x of source) { go.elm[x].xqn.all.next()      ; } }
y.prev       = function() { for (x of source) { go.elm[x].xqn.all.prev()      ; } }
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
for (let k = 0; k < eventRoll.length; k++) {
for (let j = 0; j < idRoll.length; j++) {
scriptStarter += `${("go.elm." + idRoll[j] + ".func." + eventRoll[k]).padStart(32, " ")} = function() {  }; /*  */
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
document.addEventListener(${('"' + eventRoll[k] + '"').padStart(14," ")}, function() { go.ids.forEach((id) => { if (event.target == go.elm[id].ref) { go.elm[id].func.${(eventRoll[k] + '();').padEnd(14," ")} return 0; } }, { passive: false }); });`;

} else {
scriptStarter += `
document.addEventListener(${('"' + eventRoll[k] + '"').padStart(14," ")}, function() { go.ids.forEach((id) => { if (event.target == go.elm[id].ref) { go.elm[id].func.${(eventRoll[k] + '();').padEnd(14," ")} return 0; } }); });`;
}
}
scriptStarter += `

window.addEventListener("resize", (event) => {  });
window.addEventListener("scroll", (event) => {  });



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

if (event.ctrlKey) {
saveHTMLparticle(rename, string, false, false, false);
}

restorePointerEventsNone();
spaceViewOff();
Z();

return string;
}



let stylesIncluded = "";
       if (!event.altKey) {
stylesIncluded = stylePosition + styleEtc;
} else if ( event.altKey) {
stylesIncluded = stylePosition;
}


if (openInNewWindow) {
const newWindow = window.open();
newWindow.document.write(fileHeader.replace(/{{title}}/g, filename).replace(/{{description}}/g, ui.pageDescription.ref.value) + "<style>\n" + stylesIncluded + '\n</style>\n</head>\n<body>' + "\n" + string + "\n\n\n" + "<script>" + scriptStarter + "\n</script>" + fileFooter);
restorePointerEventsNone();
spaceViewOff();
Z();
return;
}


saveHTMLparticle(rename, fileHeader.replace(/{{title}}/g, filename).replace(/{{description}}/g, ui.pageDescription.ref.value) + "<style>\n" + stylesIncluded + '\n</style>\n</head>\n<body>' + "\n" + string + "\n\n\n" + "<script>" + scriptStarter + "\n</script>" + fileFooter, false, false, false);
restorePointerEventsNone();
spaceViewOff();
Z();
return;
}



