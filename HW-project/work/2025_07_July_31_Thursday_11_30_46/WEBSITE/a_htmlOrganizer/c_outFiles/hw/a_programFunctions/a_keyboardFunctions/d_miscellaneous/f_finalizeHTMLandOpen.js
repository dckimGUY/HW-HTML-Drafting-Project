function finalizeHTMLandOpen() {

spaceViewOn();

removePointerEventsNone();


let fileContents =
`
<!DOCTYPE html>
<head>
<meta charset="UTF-8">

<!-- Basic description for the page. -->
<meta name="description"            content="">
<meta name="robots"                 content="index, follow">

<!-- This give the location information for the website. -->

<meta name="geo.position"           content="0;0">
<meta name="geo.region"             content="001">
<meta name="geo.placename"          content="Earth">

<!-- This gives information to social media websites. -->

<meta property="og:title"           content="">
<meta property="og:description"     content="">
<meta property="og:type"            content="website">
<meta property="og:locale"          content="en_CA">
<meta property="og:url"             content="">
<meta property="og:image"           content="">

<!-- This gives information specifically for twitter. -->

<meta name="twitter:card"           content="summary_large_image">
<meta name="twitter:title"          content="">
<meta name="twitter:description"    content="">
<meta name="twitter:image"          content="">

<!-- Not sure, I think you normally will want these statements. -->

<meta name="mobile-web-app-capable" content="yes">
<meta name="handheldfriendly"       content="true">
<meta name="author"                 content="">

<!-- These ones are for the little icon that your website gets. -->

<link rel="apple-touch-icon"             sizes="180x180" href="/images/android-chrome-512x512.png">
<link rel="apple-touch-icon"             sizes="192x192" href="/images/android-chrome-192x192.png">
<link rel="apple-touch-icon"             sizes="180x180" href="/images/apple-touch-icon.png">
<link rel="icon" type="image/images/png" sizes="32x32"   href="/images/favicon-32x32.png">
<link rel="icon" type="image/images/png" sizes="16x16"   href="/images/favicon-16x16.png">


<!-- Everything above this line is a template for the website's
'HTMLtopClip' variable. It is best to fill this information in
only once and then load it into the HW program. -->


`;

fileContents +=
`
<link rel="canonical" href="">

<title>${filename}</title>
</head>
<body>

<!-- This covering is removed after the page is loaded. -->
<div id="loadCover" style="position: fixed; left: 0px; top: 0px; overflow: hidden; width: 100%; height: 100%; background-color: ${finishedBackgroundColour};"></div>

<div><!-- Wouldn't it be great if there was a div wrapping the main stuff? Then it would look better in the console. You basically don't ever need any of this anyway. -->
`;

for (let j = 0; j < utilityLayer0.children.length; j++) {
fileContents += utilityLayer0.children[j].outerHTML;
fileContents += '\n';
};

fileContents +=
`
</div><!-- This is the end of the div wrapping the main parts of the document. -->


<` + `script>

/* Use HW to pull additional information as needed to attain a
peaceful scripting experience. */

/* The following variables can give easy access to the HTML stuff...
If you forgot, then you can still go back and enter the names by
using "n" in construction mode. It can sometimes be easier to change
the id names, putting them into a sequence. That is done from style mode
using the "i" key. */

/* You can also access them on "window.such" and from a subsequent window
using "opener.such". That's what is called "polluting the namespace"... */

`;

let idNameStringArray = "['";
for (let j = 0; j < utilityLayer0.children.length; j++) {
if (j!=utilityLayer0.children.length - 1) {
idNameStringArray += utilityLayer0.children[j].id.toString() + "',";
} else {
idNameStringArray += utilityLayer0.children[j].id.toString() + "'";
}
}
idNameStringArray += "]";


fileContents += 
`

const
_${filename}                       =    {  };

${idNameStringArray}.forEach( id => {
_${filename}[id]                   =    {  };
_${filename}[id].include           =    null;
_${filename}[id].parent            =    null;
_${filename}[id].children          =    null;
_${filename}[id].outer             =    document.getElementById(id);
    _${filename}[id].utility       =    _${filename}[id].outer.firstElementChild   ;
    _${filename}[id].anchor        =    _${filename}[id].outer.lastElementChild    ;
        _${filename}[id].button    =    _${filename}[id].anchor.firstElementChild  ;
        _${filename}[id].div       =    _${filename}[id].button.nextElementSibling ;
        _${filename}[id].img       =    _${filename}[id].anchor.lastElementChild   ;
});

`
;

fileContents += `


/* Here we fill in the information for what was initialized as 'null'. */
`;


for (let j = 0; j < utilityLayer0.children.length; j++) {
if (utilityLayer0.children[j].dataset.children!="") {
fileContents += 
`
${utilityLayer0.children[j].dataset.jsName}.children          =    [${utilityLayer0.children[j].dataset.children.toString().replace(/,/g,", ")}];`;
};
};

fileContents += `
`;

for (let j = 0; j < utilityLayer0.children.length; j++) {
if (utilityLayer0.children[j].dataset.parent!="") {
fileContents += 
`
${utilityLayer0.children[j].dataset.jsName}.parent            =    [${utilityLayer0.children[j].dataset.parent}];`;
};
};


/* Here is just a measure to ensure that our colourGroup naming is unique. Three digits should be enough. */
let nombre = (Date.now() % 1000).toString().padStart(3, '0');

fileContents +=
`

/* Here are all of the same parts from above packaged into
convenient array formats. HW has not done it's last trick
just yet, because we can still refer to the parts there,
and pull out information that we can use here... */

var
greyArray${nombre} = [`;

for (let j = 0; j < coinTrip.sel0.length; j++) {
fileContents += `${coinTrip.sel0[j].dataset.jsName}`;
if (j < coinTrip.sel0.length - 1) {
fileContents += ', ';
}
};

fileContents += 
`];
`
;


fileContents +=
`var
pinkArray${nombre} = [`;
for (let j = 0; j < coinTrip.sel1.length; j++) {
fileContents += `${coinTrip.sel1[j].dataset.jsName}`;
if (j < coinTrip.sel1.length - 1) {
fileContents += ', ';
}
};

fileContents += 
`];
`
;


fileContents +=
`var
blueArray${nombre} = [`;
for (let j = 0; j < coinTrip.sel2.length; j++) {
fileContents += `${coinTrip.sel2[j].dataset.jsName}`;
if (j < coinTrip.sel2.length - 1) {
fileContents += ', ';
}
};


fileContents += 
`];
`;


fileContents +=
`

/* These are some handlers that might be useful. */

/* This one is making a covering so that we don't see all of the stuff until it's fully loaded. */
document.addEventListener("load", (event) => { document.getElementById("loadCover").style.display = "none"; });

let kC = 0, cC = 0;
document.addEventListener("keydown"    ,    (event) => { kC = event.keyCode;  cC=0; });
document.addEventListener("keyup"      ,    (event) => { });
document.addEventListener("keypress"   ,    (event) => { cC = event.charCode; /* Back-tick */ if (kC == 192 && cC ==  96) { window.close(); } });

document.addEventListener("mousedown"  ,    (event) => { });
document.addEventListener("mouseup"    ,    (event) => { });
document.addEventListener("click"      ,    (event) => { });
document.addEventListener("dblclick"   ,    (event) => { });

document.addEventListener("mousemove"  ,    (event) => { });
document.addEventListener("mouseover"  ,    (event) => { });
document.addEventListener("mouseout"   ,    (event) => { });

document.addEventListener("touchstart" ,    (event) => { });
document.addEventListener("touchend"   ,    (event) => { });
document.addEventListener("touchcancel",    (event) => { });
document.addEventListener("touchmove"  ,    (event) => { });

<` + `/script>
`;

fileContents +=
`<` + `/body>
<` + `/html>`;


const newWindow = window.open("","_blank",`height=${window.innerHeight},width=${window.innerWidth},top=${window.screenTop},left=${window.screenLeft},resizable=yes`);

newWindow.document.write(fileContents);


saveHTMLparticle(false, fileContents, true);



restorePointerEventsNone();

spaceViewOff();

}
