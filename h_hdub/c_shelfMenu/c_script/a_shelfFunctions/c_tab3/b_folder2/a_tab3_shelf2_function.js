ui.loadBase.click                = function() { openImageSheet("base");         };
ui.loadFocus.click               = function() { openImageSheet("focus");        };
ui.loadHover.click               = function() { openImageSheet("hover");        };
ui.loadActive.click              = function() { openImageSheet("active");       };
ui.loadFocusHover.click          = function() { openImageSheet("focusHover");   };
ui.loadFocusActive.click         = function() { openImageSheet("focusActive");  };

ui.viewBase.click                = function() { viewImageSheet("base");         };
ui.viewFocus.click               = function() { viewImageSheet("focus");        };
ui.viewHover.click               = function() { viewImageSheet("hover");        };
ui.viewActive.click              = function() { viewImageSheet("active");       };
ui.viewFocusHover.click          = function() { viewImageSheet("focusHover");   };
ui.viewFocusActive.click         = function() { viewImageSheet("focusActive");  };

ui.clearBase.click               = function() { clearImageSheet("base");        };
ui.clearFocus.click              = function() { clearImageSheet("focus");       };
ui.clearHover.click              = function() { clearImageSheet("hover");       };
ui.clearActive.click             = function() { clearImageSheet("active");      };
ui.clearFocusHover.click         = function() { clearImageSheet("focusHover");  };
ui.clearFocusActive.click        = function() { clearImageSheet("focusActive"); };















ui.getButtons.click              = function() {
if (utilityLayer0.children.length!=0) {

for (let j = 0; j < utilityLayer0.children.length; j++) {
utilityLayer0.children[j].firstElementChild.style.zIndex="0";
}

const imageCutter = document.createElement("canvas");
let           ctx = imageCutter.getContext("2d")    ;

for (let j = 0; j < utilityLayer0.children.length; j++) {

const topOffset     = -parseInt(utilityLayer0.children[j].style.top)   ;
const leftOffset    = -parseInt(utilityLayer0.children[j].style.left)  ;
imageCutter.width   =  parseInt(utilityLayer0.children[j].style.width) ;
imageCutter.height  =  parseInt(utilityLayer0.children[j].style.height);


const buttonName = "button" + Date.now();
let   buttonCode = "";

buttonCode += `
<style>
#${buttonName} {
position            :    absolute;
top                 :         0px;
left                :         0px;
image-rendering     : crisp-edges;
image-rendering     :   pixelated;
background-color    : transparent;
background-size     :   100% 100%;
width               :        100%;
height              :        100%;
border              :         0px;
padding             :         0px;
margin              :         0px;
                    }
`;

if (sheetImages.base.img.src&&sheetImages.base.img.width!=0&&sheetImages.base.img.height!=0) {
viewImageSheet("base");       
ctx.drawImage(Picture, leftOffset, topOffset, Picture.width, Picture.height);
buttonCode += `
#${buttonName}               { background-image: url("${imageCutter.toDataURL("image/png")}"); outline: none; }`;
ctx.clearRect(0,0,imageCutter.width, imageCutter.height);
}
if (sheetImages.focus.img.src&&sheetImages.focus.img.width!=0&&sheetImages.focus.img.height!=0) {
viewImageSheet("focus");       
ctx.drawImage(Picture, leftOffset, topOffset, Picture.width, Picture.height);
buttonCode += `
#${buttonName}:focus         { background-image: url("${imageCutter.toDataURL("image/png")}"); outline: none; }`;
ctx.clearRect(0,0,imageCutter.width, imageCutter.height);
}
if (sheetImages.hover.img.src&&sheetImages.hover.img.width!=0&&sheetImages.hover.img.height!=0) {
viewImageSheet("hover");       
ctx.drawImage(Picture, leftOffset, topOffset, Picture.width, Picture.height);
buttonCode += `
#${buttonName}:hover         { background-image: url("${imageCutter.toDataURL("image/png")}"); outline: none; }`;
ctx.clearRect(0,0,imageCutter.width, imageCutter.height);
}
if (sheetImages.active.img.src&&sheetImages.active.img.width!=0&&sheetImages.active.img.height!=0) {
viewImageSheet("active");       
ctx.drawImage(Picture, leftOffset, topOffset, Picture.width, Picture.height);
buttonCode += `
#${buttonName}:active        { background-image: url("${imageCutter.toDataURL("image/png")}"); outline: none; }`;
ctx.clearRect(0,0,imageCutter.width, imageCutter.height);
}
if (sheetImages.focusHover.img.src&&sheetImages.focusHover.img.width!=0&&sheetImages.focusHover.img.height!=0) {
viewImageSheet("focusHover");       
ctx.drawImage(Picture, leftOffset, topOffset, Picture.width, Picture.height);
buttonCode += `
#${buttonName}:focus:hover   { background-image: url("${imageCutter.toDataURL("image/png")}"); outline: none; }`;
ctx.clearRect(0,0,imageCutter.width, imageCutter.height);
}
if (sheetImages.focusActive.img.src&&sheetImages.focusActive.img.width!=0&&sheetImages.focusActive.img.height!=0) {
viewImageSheet("focusActive");       
ctx.drawImage(Picture, leftOffset, topOffset, Picture.width, Picture.height);
buttonCode += `
#${buttonName}:focus:active  { background-image: url("${imageCutter.toDataURL("image/png")}"); outline: none; }`;
ctx.clearRect(0,0,imageCutter.width, imageCutter.height);
}

buttonCode += `
</style>
<button id="${buttonName}" onclick=""></button>`;

utilityLayer0.children[j].div.innerHTML = buttonCode;
buttonCode = "";

}










}
};
