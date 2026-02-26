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
























function deMinimis(header, factor, eventArg, openInNewWindow, typeAlone, layerRef) {

/* BE SURE THAT THE DOCUMENT ORDERING IS REFLECTED IN THE TRIPARTITE COLOUR SETS */
readCoins();


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

if (factor) {
lastFactor = factor;
localStorage.setItem("lastFactor", lastFactor);
}

if (openInNewWindow || typeAlone == "css") factor = lastFactor;






let innerStylePosition = "";
let innerStyleEtc      = "";











let idRoll = [];

for (let j = 0; j < doc.body.children.length; j++) {
idRoll.push(doc.body.children[j].id);


if (
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
idRoll.push(otherDoc.body.children[j].id);
let otherInner;
       if (otherDoc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.children.length == 1) {
otherInner = otherDoc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.firstElementChild;
otherInner.style.position        = "absolute";
otherInner.style.left            = otherDoc.body.children[j].style.left;
otherInner.style.top             = otherDoc.body.children[j].style.top;
otherInner.style.width           = otherDoc.body.children[j].style.width;
otherInner.style.height          = otherDoc.body.children[j].style.height;
otherInner.style.zIndex          = otherDoc.body.children[j].style.zIndex;
otherInner.style.userSelect      = otherDoc.body.children[j].style.userSelect;
otherInner.style.transform       = otherDoc.body.children[j].lastElementChild.style.transform;
otherInner.style.transformOrigin = otherDoc.body.children[j].lastElementChild.style.transformOrigin;
otherInner.style.outline         = otherDoc.body.children[j].lastElementChild.style.outline;
otherInner.style.outlineOffset   = otherDoc.body.children[j].lastElementChild.style.outlineOffset;
otherInner.style.borderRadius    = otherDoc.body.children[j].lastElementChild.style.borderRadius;
otherInner.style.overflow        = otherDoc.body.children[j].lastElementChild.style.overflow;
otherInner.style.boxShadow       = otherDoc.body.children[j].lastElementChild.style.boxShadow;
otherInner.style.color           = otherDoc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.style.color;
otherInner.style.background      = otherDoc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.style.background;
otherInner.style.backgroundColor = otherDoc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.style.backgroundColor;
otherInner.style.backgroundSize  = otherDoc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.style.backgroundSize;
if (otherInner.style.backgroundSize == "") {
otherInner.style.backgroundSize  = "100% 100%";
}
otherInner.style.fontSize        = otherDoc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.style.fontSize;
otherInner.style.fontVariant     = otherDoc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.style.fontVariant;
otherInner.style.fontStyle       = otherDoc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.style.fontStyle;
otherInner.style.fontWeight      = otherDoc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.style.fontWeight;
otherInner.style.fontFamily      = otherDoc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.style.fontFamily;
otherInner.style.opacity         = otherDoc.body.children[j].lastElementChild.style.opacity;
otherInner.style.textShadow      = otherDoc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.style.textShadow;
otherInner.style.textAlign       = otherDoc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.style.textAlign;
otherInner.style.wordSpacing     = otherDoc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.style.wordSpacing;
otherInner.style.letterSpacing   = otherDoc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.style.letterSpacing;
otherInner.style.lineHeight      = otherDoc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.style.lineHeight;
otherInner.style.textIndent      = otherDoc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.style.textIndent;
if (otherDoc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.style.padding == "inherit") {
otherInner.style.padding         = otherDoc.body.children[j].lastElementChild.style.padding;
} else {
otherInner.style.padding         = otherDoc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.style.padding;
}
} else if (otherDoc.body.children[j].lastElementChild.lastElementChild.previousElementSibling.children.length == 0) {
otherInner = document.createElement("div");
otherInner.style.position        = "absolute";
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
otherInner.classList.add(`${otherInner.id}`);
if (otherDoc.body.children[j].dataset.notes) {
otherInner.dataset.notes         = otherDoc.body.children[j].dataset.notes;
} else {
otherInner.dataset.notes         = "";
}
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

inner.classList.add(`${inner.id}`);

if (doc.body.children[j].dataset.notes) {
inner.dataset.notes         = doc.body.children[j].dataset.notes;
} else {
inner.dataset.notes         = "";
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

const go     = {};
      go.el  = {};
      go.aud = {};
      go.playAudio = function(trackName) { go.aud[trackName].play(); };
      go.img = [];
      go.ids =
${JSON.stringify(idRoll).replace('["', '[\n    "').replace('"]', '"\n]').replace(/",/g, '",\n    ')};
go.ids.forEach((id) => {
go.el[id]     = {};
go.el[id].ref = document.getElementById(id);

/*** SET UP FOR JSON ***/
if (go.el[id].ref.dataset &&
    go.el[id].ref.dataset.notes) {
    go.el[id].json = {};
if (JSON.parse(go.el[id].ref.dataset.notes)) {
go.el[id].json = JSON.parse(go.el[id].ref.dataset.notes);
} else {
go.el[id].json = go.el[id].ref.dataset.notes; } }
if (
go.el[id].json.initialDisplay &&
go.el[id].json.initialDisplay == "none"
) { go.el[id].ref.style.display = "none"; }

/*** SET UP FOR AUDIO DATA ***/
if (go.el[id].ref.tagName == "AUDIO") {
const audio = new Audio();
  audio.src = go.el[id].ref.src;
         if (!go.el[id].aud) {
              go.el[id].aud = []; }
              go.el[id].aud.push(audio);
              go.aud[id] = audio; }
  if (go.el[id].ref.dataset.audio) {
const audio = new Audio();
  audio.src = go.el[id].ref.dataset.audio;
         if (!go.el[id].aud) {
              go.el[id].aud = []; }
              go.el[id].aud.push(audio);
              go.aud[id] = audio; }
  for (let j = 0; j < go.el[id].ref.children.length; j++) {
  if (go.el[id].ref.children[j].tagName == "AUDIO") {
const audio = new Audio();
  audio.src = go.el[id].ref.children[j].src;
         if (!go.el[id].aud) {
              go.el[id].aud = []; }
              go.el[id].aud.push(audio); }
  if (go.el[id].ref.children[j].dataset.audio) {
const audio = new Audio();
  audio.src = go.el[id].ref.children[j].dataset.audio;
         if (!go.el[id].aud) {
              go.el[id].aud = []; }
              go.el[id].aud.push(audio); } }

/*** SET UP FOR IMAGE DATA ***/
let num = 0;
if (go.el[id].ref.firstElementChild &&
    go.el[id].ref.firstElementChild.dataset &&
    go.el[id].ref.firstElementChild.dataset["frame" + num]) {
go.el[id].img = [];
if (go.el[id].ref.firstElementChild.children.length == 0) {
go.el[id].ref.style.display = "none"; } }
while (go.el[id].ref.firstElementChild &&
       go.el[id].ref.firstElementChild.dataset &&
       go.el[id].ref.firstElementChild.dataset["frame" + num]) {
go.el[id].img[num]     = new Image();
go.el[id].img[num].src = go.el[id].ref.firstElementChild.dataset["frame" + num];
go.img[go.img.length]  = go.el[id].img[num];
num++; }
});

/*** DESCENDENTS ID LISTING ***/
go.ids.forEach((id) => {
if (go.el[id].ref.children.length > 0) {
for (let j = 0; j < go.el[id].ref.children.length; j++) {
if ( !go.el[id].ids && !go.el[id].el  &&
!!go.el[id].ref.children[j].id) {
go.el[id].ids = [];
go.el[id].el  = {}; }
if (!!go.el[id].ref.children[j].id) {
go.el[id].ids.push(go.el[id].ref.children[j].id);
go.el[id].el[go.el[id].ref.children[j].id] = go.el[go.el[id].ref.children[j].id]; } } }
});


`;
scriptStarter += `
/*** THIS SETS UP THE FUNCTION BLOCKS: READY FOR CODE ***/

`;
for (let k = 0; k < eventRoll.length; k++) {
for (let j = 0; j < idRoll.length; j++) {
scriptStarter += `${("go.el." + idRoll[j] + "." + eventRoll[k]).padStart(32, " ")} = function() {  }; /*  */
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
document.addEventListener(${('"' + eventRoll[k] + '"').padStart(14," ")}, function() { go.ids.forEach((id) => { if (event.target == go.el[id].ref) { go.el[id].${(eventRoll[k] + '();').padEnd(14," ")} return 0; } }, { passive: false }); });`;

} else {
scriptStarter += `
document.addEventListener(${('"' + eventRoll[k] + '"').padStart(14," ")}, function() { go.ids.forEach((id) => { if (event.target == go.el[id].ref) { go.el[id].${(eventRoll[k] + '();').padEnd(14," ")} return 0; } }); });`;
}
}
scriptStarter += `

window.addEventListener("resize", (event) => {  });
window.addEventListener("scroll", (event) => {  });







console.log(\`
---------------------------------------------
>>>   PAGE DATA STRUCTURE LAYOUT KEYMAP   <<<
---------------------------------------------
go             = {};       /* Basic Object */
go.aud         = {};       /* Audio Tracks */
go.img         = [];       /* Images Array */
go.ids         = [];       /* List All IDs */
go.el          = {};       /* Element Data */
go.el[id]      = {};       /* Each Element */
go.el[id].json = {};       /* JSON Entries */
go.el[id].aud  = [];       /* Audio Tracks */
go.el[id].img  = [];       /* Images Array */
go.el[id].ids  = [];       /* List All IDs */
go.el[id].el   = {};       /* Element Data */
go.el[id].ref  = document.getElementById(id);
---------------------------------------------
>>>   SINGLE DEPTH NESTING IS SUPPORTED   <<<
>>>   TO ENABLE VISUAL ASSEMBLY OF DATA   <<<
---------------------------------------------
\`);
`;


string = string.replace(/\[object HTMLDivElement\]/g, "");



const rename = false;


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






