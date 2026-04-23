
let imageRollArray       = [];

let baseRollArray        = [];
let focusRollArray       = [];
let hoverRollArray       = [];
let activeRollArray      = [];
let focusHoverRollArray  = [];
let focusActiveRollArray = [];


function getButtons() {
if (utilityLayer0.children.length!=0) {
for (let j = 0; j < utilityLayer0.children.length; j++) {
utilityLayer0.children[j].firstElementChild.style.zIndex="0";
}
const imageCutter = document.createElement("canvas");
imageRollArray = [];


baseRollArray        = [];
focusRollArray       = [];
hoverRollArray       = [];

activeRollArray      = [];
focusHoverRollArray  = [];
focusActiveRollArray = [];




let           ctx = imageCutter.getContext("2d")    ;
for (let j = 0; j < utilityLayer0.children.length; j++) {
const topOffset     = -parseInt(utilityLayer0.children[j].style.top)   ;
const leftOffset    = -parseInt(utilityLayer0.children[j].style.left)  ;
imageCutter.width   =  parseInt(utilityLayer0.children[j].style.width) ;
imageCutter.height  =  parseInt(utilityLayer0.children[j].style.height);
ctx.clearRect(0,0,imageCutter.width, imageCutter.height);
const buttonName = "button" + Date.now();
let   buttonCode = "";
buttonCode += `
<button id="${buttonName}" class="pixelArt" style="position: absolute; top: 0px; left: 0px; background-color: transparent; background-size: 100% 100%; width: 100%; height: 100%; border: 0px; padding: 0px; margin: 0px;" onclick="">
<style>`;
if (sheetImages.base.img.src&&sheetImages.base.img.width!=0&&sheetImages.base.img.height!=0) {
viewImageSheet("base");       
ctx.drawImage(Picture, leftOffset, topOffset, Picture.width, Picture.height);
buttonCode += `
#${buttonName}               { background-image: url("${imageCutter.toDataURL("image/png")}"); outline: none; }`;
baseRollArray.push(imageCutter.toDataURL("image/png"));
ctx.clearRect(0,0,imageCutter.width, imageCutter.height);
}
if (sheetImages.focus.img.src&&sheetImages.focus.img.width!=0&&sheetImages.focus.img.height!=0) {
viewImageSheet("focus");       
ctx.drawImage(Picture, leftOffset, topOffset, Picture.width, Picture.height);
buttonCode += `
#${buttonName}:focus         { background-image: url("${imageCutter.toDataURL("image/png")}"); outline: none; }`;
focusRollArray.push(imageCutter.toDataURL("image/png"));
ctx.clearRect(0,0,imageCutter.width, imageCutter.height);
}
if (sheetImages.hover.img.src&&sheetImages.hover.img.width!=0&&sheetImages.hover.img.height!=0) {
viewImageSheet("hover");       
ctx.drawImage(Picture, leftOffset, topOffset, Picture.width, Picture.height);
buttonCode += `
#${buttonName}:hover         { background-image: url("${imageCutter.toDataURL("image/png")}"); outline: none; }`;
hoverRollArray.push(imageCutter.toDataURL("image/png"));
ctx.clearRect(0,0,imageCutter.width, imageCutter.height);
}
if (sheetImages.active.img.src&&sheetImages.active.img.width!=0&&sheetImages.active.img.height!=0) {
viewImageSheet("active");       
ctx.drawImage(Picture, leftOffset, topOffset, Picture.width, Picture.height);
buttonCode += `
#${buttonName}:active        { background-image: url("${imageCutter.toDataURL("image/png")}"); outline: none; }`;
activeRollArray.push(imageCutter.toDataURL("image/png"));
ctx.clearRect(0,0,imageCutter.width, imageCutter.height);
}
if (sheetImages.focusHover.img.src&&sheetImages.focusHover.img.width!=0&&sheetImages.focusHover.img.height!=0) {
viewImageSheet("focusHover");       
ctx.drawImage(Picture, leftOffset, topOffset, Picture.width, Picture.height);
buttonCode += `
#${buttonName}:focus:hover   { background-image: url("${imageCutter.toDataURL("image/png")}"); outline: none; }`;
focusHoverRollArray.push(imageCutter.toDataURL("image/png"));
ctx.clearRect(0,0,imageCutter.width, imageCutter.height);
}
if (sheetImages.focusActive.img.src&&sheetImages.focusActive.img.width!=0&&sheetImages.focusActive.img.height!=0) {
viewImageSheet("focusActive");       
ctx.drawImage(Picture, leftOffset, topOffset, Picture.width, Picture.height);
buttonCode += `
#${buttonName}:focus:active  { background-image: url("${imageCutter.toDataURL("image/png")}"); outline: none; }`;
focusActiveRollArray.push(imageCutter.toDataURL("image/png"));
ctx.clearRect(0,0,imageCutter.width, imageCutter.height);
}
buttonCode += `
</style>
</button>`;
utilityLayer0.children[j].lastElementChild.lastElementChild.innerHTML = buttonCode;
buttonCode = "";
}
}


imageRollArray = imageRollArray.concat(
baseRollArray        ,
focusRollArray       ,
hoverRollArray       ,
activeRollArray      ,
focusHoverRollArray  ,
focusActiveRollArray 
);



};














ui.getButtons.click              = function() { getButtons(); };











/*

[
"templateIntake",
"hdubSingleEntry",
"hdubSheetTemplate4x"
];

      sheetImages.star.img;      // image object
      sheetImages.star.filename; // file name prefix
      sheetImages.star.factor;   // multiplier for sizing
      sheetImages.star.syntax;   // syntax on object

getButtons();

*/


function makeStarSheet(multiplier,type) {
/* multiplier is 2,4,6; type is "btn" or "img" */
const width  = sheetImages.star.img.width ;
const height = sheetImages.star.img.height;
const canvas  = document.createElement("canvas");
canvas.width  = width  * multiplier;
canvas.height = height;
ctx = canvas.getContext("2d");
ctx.lineWidth = 2;
ctx.strokeStyle = "black";
for (let j = 0; j < multiplier; j++) {
ctx.drawImage(sheetImages.star.img, width * j, 0, width, height);
//ctx.strokeRect( width * j, 0, width, height);
}
const datePrefix = Date.now().toString().slice(-6);
const syntax     = reString(cropObject(100, 180, makeObject(clean(sheetImages.star.syntax))));
const dataURL    = canvas.toDataURL('image/png');
const link       = document.createElement('a');
link.href        = dataURL;
link.download    = `READY_${multiplier + type}_` + datePrefix + '_HDUB_' + sheetImages.star.factor + `_${multiplier + type}_` + syntax + '.png';
link.click();
}

ui.btn6.click                 = function() { makeStarSheet(6, "btn"); };
ui.btn4.click                 = function() { makeStarSheet(4, "btn"); };
ui.btn2.click                 = function() { makeStarSheet(2, "btn"); };

ui.img6.click                 = function() { makeStarSheet(6, "img"); };
ui.img4.click                 = function() { makeStarSheet(4, "img"); };
ui.img2.click                 = function() { makeStarSheet(2, "img"); };







ui.btnQuick1.click               = function() {
ui.hdubSheetTemplate4x.ref.value = 1;
ui.hdubSingleEntry.ref.value = "h36w20w20w20w20w20h36w20w20w20w20w20h36w20w20w20w20w20h36w20w20w20w20w20h36w20w20w20w20w20";
manufactureTemplate(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
};
ui.btnQuick2.click               = function() {
ui.hdubSheetTemplate4x.ref.value = 2;
ui.hdubSingleEntry.ref.value = "h36w20w20w20w20w20h36w20w20w20w20w20h36w20w20w20w20w20h36w20w20w20w20w20h36w20w20w20w20w20";
manufactureTemplate(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
};
ui.btnQuick3.click               = function() {
ui.hdubSheetTemplate4x.ref.value = 3;
ui.hdubSingleEntry.ref.value = "h36w20w20w20w20w20h36w20w20w20w20w20h36w20w20w20w20w20h36w20w20w20w20w20h36w20w20w20w20w20";
manufactureTemplate(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
};
ui.btnQuick4.click               = function() {
ui.hdubSheetTemplate4x.ref.value = 4;
ui.hdubSingleEntry.ref.value = "h36w20w20w20w20w20h36w20w20w20w20w20h36w20w20w20w20w20h36w20w20w20w20w20h36w20w20w20w20w20";
manufactureTemplate(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
};

ui.imgQuick1.click               = function() {
ui.hdubSheetTemplate4x.ref.value = 1;
ui.hdubSingleEntry.ref.value = "h18w25w25w25w25h18w25w25w25w25h18w25w25w25w25h18w25w25w25w25h18w25w25w25w25h18w25w25w25w25h18w25w25w25w25h18w25w25w25w25h18w25w25w25w25h18w25w25w25w25";
manufactureTemplate(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
};
ui.imgQuick2.click               = function() {
ui.hdubSheetTemplate4x.ref.value = 2;
ui.hdubSingleEntry.ref.value = "h18w25w25w25w25h18w25w25w25w25h18w25w25w25w25h18w25w25w25w25h18w25w25w25w25h18w25w25w25w25h18w25w25w25w25h18w25w25w25w25h18w25w25w25w25h18w25w25w25w25";
manufactureTemplate(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
};
ui.imgQuick3.click               = function() {
ui.hdubSheetTemplate4x.ref.value = 3;
ui.hdubSingleEntry.ref.value = "h18w25w25w25w25h18w25w25w25w25h18w25w25w25w25h18w25w25w25w25h18w25w25w25w25h18w25w25w25w25h18w25w25w25w25h18w25w25w25w25h18w25w25w25w25h18w25w25w25w25";
manufactureTemplate(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
};
ui.imgQuick4.click               = function() {
ui.hdubSheetTemplate4x.ref.value = 4;
ui.hdubSingleEntry.ref.value = "h18w25w25w25w25h18w25w25w25w25h18w25w25w25w25h18w25w25w25w25h18w25w25w25w25h18w25w25w25w25h18w25w25w25w25h18w25w25w25w25h18w25w25w25w25h18w25w25w25w25";
manufactureTemplate(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
};

ui.spriteClick1.click            = function() {
ui.hdubSheetTemplate4x.ref.value = 1;
ui.hdubSingleEntry.ref.value = "h18w50w50h18w50w50h18w50w50h18w50w50h18w50w50h18w50w50h18w50w50h18w50w50h18w50w50h18w50w50";
manufactureTemplate(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
};
ui.spriteClick2.click            = function() {
ui.hdubSheetTemplate4x.ref.value = 2;
ui.hdubSingleEntry.ref.value = "h18w50w50h18w50w50h18w50w50h18w50w50h18w50w50h18w50w50h18w50w50h18w50w50h18w50w50h18w50w50";
manufactureTemplate(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
};
ui.spriteClick3.click            = function() {
ui.hdubSheetTemplate4x.ref.value = 3;
ui.hdubSingleEntry.ref.value = "h18w50w50h18w50w50h18w50w50h18w50w50h18w50w50h18w50w50h18w50w50h18w50w50h18w50w50h18w50w50";
manufactureTemplate(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
};
ui.spriteClick4.click            = function() {
ui.hdubSheetTemplate4x.ref.value = 4;
ui.hdubSingleEntry.ref.value = "h18w50w50h18w50w50h18w50w50h18w50w50h18w50w50h18w50w50h18w50w50h18w50w50h18w50w50h18w50w50";
manufactureTemplate(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
};

ui.spriteLoop1.click             = function() {
ui.hdubSheetTemplate4x.ref.value = 1;
ui.hdubSingleEntry.ref.value = "h60w20w20w20w20w20h60w20w20w20w20w20h60w20w20w20w20w20";
manufactureTemplate(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
};
ui.spriteLoop2.click             = function() {
ui.hdubSheetTemplate4x.ref.value = 2;
ui.hdubSingleEntry.ref.value = "h60w20w20w20w20w20h60w20w20w20w20w20h60w20w20w20w20w20";
manufactureTemplate(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
};
ui.spriteLoop3.click             = function() {
ui.hdubSheetTemplate4x.ref.value = 3;
ui.hdubSingleEntry.ref.value = "h60w20w20w20w20w20h60w20w20w20w20w20h60w20w20w20w20w20";
manufactureTemplate(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
};
ui.spriteLoop4.click             = function() {
ui.hdubSheetTemplate4x.ref.value = 4;
ui.hdubSingleEntry.ref.value = "h60w20w20w20w20w20h60w20w20w20w20w20h60w20w20w20w20w20";
manufactureTemplate(cropObject(100, 180, makeObject(clean(ui.hdubSingleEntry.ref.value))));
};




const paintClear = {};
      paintClear.colour = "rgb(237, 28, 36)";
      paintClear.DOM    = ui.paint3.ref;









ui.paint0.click                  = function() { paintClear.DOM = ui.paint0.ref;  updateInfoShelf(); };
ui.paint1.click                  = function() { paintClear.DOM = ui.paint1.ref;  updateInfoShelf(); };
ui.paint2.click                  = function() { paintClear.DOM = ui.paint2.ref;  updateInfoShelf(); };
ui.paint3.click                  = function() { paintClear.DOM = ui.paint3.ref;  updateInfoShelf(); };
ui.paint4.click                  = function() { paintClear.DOM = ui.paint4.ref;  updateInfoShelf(); };
ui.paint5.click                  = function() { paintClear.DOM = ui.paint5.ref;  updateInfoShelf(); };
ui.paint6.click                  = function() { paintClear.DOM = ui.paint6.ref;  updateInfoShelf(); };
ui.paint7.click                  = function() { paintClear.DOM = ui.paint7.ref;  updateInfoShelf(); };
ui.paint8.click                  = function() { paintClear.DOM = ui.paint8.ref;  updateInfoShelf(); };
ui.paint9.click                  = function() { paintClear.DOM = ui.paint9.ref;  updateInfoShelf(); };
ui.paint10.click                 = function() { paintClear.DOM = ui.paint10.ref; updateInfoShelf(); };
ui.paint11.click                 = function() { paintClear.DOM = ui.paint11.ref; updateInfoShelf(); };
ui.paint12.click                 = function() { paintClear.DOM = ui.paint12.ref; updateInfoShelf(); };
ui.paint13.click                 = function() { paintClear.DOM = ui.paint13.ref; updateInfoShelf(); };
ui.paint14.click                 = function() { paintClear.DOM = ui.paint14.ref; updateInfoShelf(); };
ui.paint15.click                 = function() { paintClear.DOM = ui.paint15.ref; updateInfoShelf(); };
ui.paint16.click                 = function() { paintClear.DOM = ui.paint16.ref; updateInfoShelf(); };
ui.paint17.click                 = function() { paintClear.DOM = ui.paint17.ref; updateInfoShelf(); };
ui.paint18.click                 = function() { paintClear.DOM = ui.paint18.ref; updateInfoShelf(); };
ui.paint19.click                 = function() { paintClear.DOM = ui.paint19.ref; updateInfoShelf(); };























ui.animateClick.click               = function() { 
infoMessage(`
<h1>Here is a breakdown of how to use this stuff...</h1>
<ol>
<li>The programming is NOT perfect, you basically have to keep trying until it works.</li>
<li>The buttons are basically top notch for quality, and are best used with low resolution artwork.</li>
<li>Always save your work lots of times with the 's' button. That saves the whole project, and you can load it back in from the 'LEVELS' tab.</li>
<li>The animations are total crap... it will work if you delete them and then try to get them a few times. This is not a good example of how you would legitimately do animation for the web. You might be better off with 'gif' if the animation is long.</li>
<li>Use a low number of frames and use pixelated graphics if you try these animations.</li>
<li>These will be the lowest quality, worst animations that you can do, and the framerate is not reliable.</li>
<li>If you wonder why, you can't really copy the animated buttons, they won't work anymore on the second one...</li>
<li>SAVE THE FIRST IMAGE OR USE HDUB TO SAVE THE IMAGE FOR *SHEET</li>
<li>DRAG THE IMAGE BACK ON TO THE SCREEN AFTER YOU FINISH WORKING ON IT.</li>
<li>IF YOU ARE DOING BUTTONS, THEN YOU PROBABLY WANT TO DRAW THE FIRST BUTTON STATE AND THEN DRAG THE FILE BACK IN TO MAKE THE DUPLICATED TEMPLATE (2, 4, or 6)</li>
<li>ONCE FINISHED THE PROCESS, THE IMAGE FILE BECOMES BASICALLY INDEPENDENT AND CAN BE RE-USED TO BRING THE SAME LOW-RES CUSTOM BUTTONS BACK INTO THE PROGRAM.</li>
<li>KEEP THE BUTTON IMAGE FILES IN A SAFE PLACE SO YOU CAN RE-USE THEM MORE EASILY... STAY ORGANIZED IF POSSIBLE. THIS WILL MAKE A MESS OF YOUR DOWNLOADS FOLDER VERY QUICKLY.</li>
</ol>
`);
};


function infoMessage(message) {
insertNewCoin([null,78,78]);
coinFocus.lastElementChild.firstElementChild.innerHTML = message;
coinFocus.lastElementChild.firstElementChild.style.fontSize = "32px";
coinFocus.lastElementChild.firstElementChild.style.padding = "32px";
coinFocus.lastElementChild.firstElementChild.style.fontFamily = "dckimPixelMono"
coinFocus.lastElementChild.firstElementChild.style.overflow = "scroll";
coinFocus.style.width = "1536px";
coinFocus.style.height = "1536px";
coinFocus.dataset.width = "1536px";
coinFocus.dataset.height = "1536px";
}






ui.animateLoop.click                = function() { loopedAnimation(); };



ui.fewerFrames.click                = function() {
if (parseInt(ui.frameNumber.ref.value) > 1) {
ui.frameNumber.ref.value = parseInt(ui.frameNumber.ref.value) - 1;
}
setupTheAnimator();
};



ui.moreFrames.click                 = function() {
ui.frameNumber.ref.value = parseInt(ui.frameNumber.ref.value) + 1;

if (ui.frameNumber.ref.value > imageRollArray.length) {
ui.frameNumber.ref.value = imageRollArray.length;
}

if (ui.frameNumber.ref.value < 1) {
ui.frameNumber.ref.value = 1;
}

setupTheAnimator();
};






let animatorFrame = 0;
let animatorIntervals = [];

function setupTheAnimator() {
if (!imageRollArray[0]) return;
if (parseInt(ui.frameNumber.ref.value == 1)) {
ui.animatorImage.ref.src = imageRollArray[0];
return;
}
for (let j = 0; j < animatorIntervals.length; j++) {
clearInterval(animatorIntervals[j]);
}
animatorFrame = 0;
if (imageRollArray != []) {
const frames = ui.frameNumber.ref.value;
animatorIntervals[animatorIntervals.length] = setInterval(() => {
try {
ui.animatorImage.ref.src = imageRollArray[animatorFrame];
if (animatorFrame > parseInt(ui.frameNumber.ref.value) - 2) {
animatorFrame = 0;
} else {
animatorFrame++;
}
} catch {}
}, document.getElementById("animationTiming").value);
}
}






function loopedAnimation() {
if (!imageRollArray[0]) return;
const maxFrame = parseInt(ui.frameNumber.ref.value);
let imageCollector = [];
let frameCounter = 0;
let counter = 0;
let tempArray = Array.from(imageRollArray);



let entryFactor = 1;

switch (parseInt(ui.hdubSheetTemplate4x.ref.value)) {
case 1: entryFactor = 10; break;
case 2: entryFactor =  8; break;
case 3: entryFactor =  6; break;
case 4: entryFactor =  5; break;
}

while (tempArray.length > 0) {
imageCollector.push(tempArray.shift());
counter++;
if (counter == maxFrame || tempArray.length == 1) {
if (tempArray.length == 1) {
imageCollector.push(tempArray.shift());
counter++;
}

const imageDummy = new Image();
const randomDiv = document.createElement("div");
const anim = document.createElement("button");
const script = document.createElement("script");







anim.dataset.timing   = document.getElementById("animationTiming").value;
anim.dataset.maxFrame = counter - 1;
anim.dataset.counter = 0;
counter = 0;
anim.id = "anim_" + Date.now();

for (let u = 0; u < imageCollector.length; u++) {
anim.dataset["frame" + u] = imageCollector[u];
}
imageDummy.src = anim.dataset.frame0;
anim.style = `image-rendering: crisp-edges; image-rendering: pixelated; position: absolute; top: 0px; left: 0px; background-color: transparent; background-size: 100% 100%; width: 100%; height: 100%; border: 0px; padding: 0px; margin: 0px;`;





script.innerHTML = `


setInterval(() => {
try {
switch (document.getElementById("${anim.id}").dataset.counter) {
case  document.getElementById("${anim.id}").dataset.maxFrame:
document.getElementById("${anim.id}").style.backgroundImage = 'url("' + document.getElementById("${anim.id}").dataset.frame0 + '")';
document.getElementById("${anim.id}").dataset.counter = "0";
break;
`;

for (let b = 0; b < imageCollector.length - 1; b++) {
script.innerHTML += `
case  "${b}": document.getElementById("${anim.id}").style.backgroundImage = 'url("' + document.getElementById("${anim.id}").dataset.frame${b + 1} + '")';  document.getElementById("${anim.id}").dataset.counter = "${b + 1}"; break;
`;
}

script.innerHTML += `
case "${imageCollector.length - 1}": document.getElementById("${anim.id}").style.backgroundImage = 'url("' + document.getElementById("${anim.id}").dataset.frame0 + '")';  document.getElementById("${anim.id}").dataset.counter = "0"; break;
}
} catch {}
}, parseInt(document.getElementById("${anim.id}").dataset.timing));
`;


insertNewCoin([null,78,78]);
coinFocus.id = coinFocus.id.replace(/coin/g, "animation");
coinFocus.style.left    = parseInt(window.scrollX) + (frameCounter * T) + "px";
coinFocus.dataset.left  = parseInt(window.scrollX) + (frameCounter * T) + "px";
coinFocus.style.top     = parseInt(window.scrollY) + (frameCounter * T) + "px";
coinFocus.dataset.top   = parseInt(window.scrollY) + (frameCounter * T) + "px";
coinFocus.style.width    = imageDummy.naturalWidth  * entryFactor + "px";
coinFocus.dataset.width  = imageDummy.naturalWidth  * entryFactor + "px";
coinFocus.style.height   = imageDummy.naturalHeight * entryFactor + "px";
coinFocus.dataset.height = imageDummy.naturalHeight * entryFactor + "px";



if (event.shiftKey) {
anim.appendChild(script);
}
randomDiv.appendChild(anim);
coinFocus.lastElementChild.firstElementChild.innerHTML = "";
coinFocus.lastElementChild.firstElementChild.appendChild(randomDiv);
frameCounter++;






imageCollector = [];

}
}





/*

if (!imageRollArray[0]) return;
if (parseInt(ui.frameNumber.ref.value == 1)) {
ui.animatorImage.ref.src = imageRollArray[0];
return;
}
for (let j = 0; j < animatorIntervals.length; j++) {
clearInterval(animatorIntervals[j]);
}
animatorFrame = 0;
if (imageRollArray != []) {
const frames = ui.frameNumber.ref.value;
animatorIntervals[animatorIntervals.length] = setInterval(() => {
try {
ui.animatorImage.ref.src = imageRollArray[animatorFrame];
if (animatorFrame > parseInt(ui.frameNumber.ref.value) - 2) {
animatorFrame = 0;
} else {
animatorFrame++;
}
} catch {}
}, 200);
}

*/


}














/* BLANK SPACE BELOW THIS LINE */
