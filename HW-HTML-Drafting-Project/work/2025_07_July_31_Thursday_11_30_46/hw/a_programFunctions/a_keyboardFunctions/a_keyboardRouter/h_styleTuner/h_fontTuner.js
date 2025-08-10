function fontTuner() {

const part = coinFocus.lastElementChild.firstElementChild.nextElementSibling;

let coinGroup;

       if (coinFocus.dataset.coinTrip==Ts0) {
coinGroup = coinTrip.sel0;
} else if (coinFocus.dataset.coinTrip==Ts1) {
coinGroup = coinTrip.sel1;
} else if (coinFocus.dataset.coinTrip==Ts2) {
coinGroup = coinTrip.sel2;
}




function evaluateTextShadow() {
part.style.textShadow = `${shadowTop}${shadowSize}em ${shadowLeft}${shadowSize}em ${shadowBlur}px rgba(${shadowColour},${shadowAlpha})`;
}


function evaluateTextShadowGroup() {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.textShadow = `${shadowTop}${shadowSize}em ${shadowLeft}${shadowSize}em ${shadowBlur}px rgba(${shadowColour},${shadowAlpha})`;
}
}




function tintSelectorForward() {
       if (shadowColour=="0,0,0") {
return(tintArray[0]);
} else {
if (tintArrayNumber==tintArray.length - 1) {
tintArrayNumber = 0;
} else {
tintArrayNumber += 1;
}
return(tintArray[tintArrayNumber]);
}
}

function tintSelectorBackward() {
       if (shadowColour=="0,0,0") {
return(tintArray[0]);
} else {
if (tintArrayNumber==0) {
tintArrayNumber = tintArray.length - 1;
} else {
tintArrayNumber -= 1;
}
return(tintArray[tintArrayNumber]);
}
}




       if (styleKey==="f") {
/*    /    */ if (kC == 111 && cC ==  47) {
if (shadowBlur > 0.05) {
shadowBlur -= 0.025;
evaluateTextShadow();
}
}
/*    *    */ if (kC == 106 && cC ==  42) {
shadowBlur += 0.025;
evaluateTextShadow();
}
/*    -    */ if (kC == 109 && cC ==  45) {
if (parseFloat(part.style.fontSize)>2) {
part.style.fontSize = parseFloat(part.style.fontSize) - 0.1 + "px";
}
}
/*    +    */ if (kC == 107 && cC ==  43) {
part.style.fontSize = parseFloat(part.style.fontSize) + 0.1 + "px";
}
/*    7    */ if (kC == 103 && cC ==  55) {
shadowTop  = "-";
shadowLeft = "-";
evaluateTextShadow();
}
/*    8    */ if (kC == 104 && cC ==  56) {
if (shadowAlpha < 0.99) {
shadowAlpha += 0.01;
evaluateTextShadow();
}
}
/*    9    */ if (kC == 105 && cC ==  57) {
shadowTop  = " ";
shadowLeft = "-";
evaluateTextShadow();
}
/*    4    */ if (kC == 100 && cC ==  52) {
shadowColour = tintSelectorBackward();
evaluateTextShadow();
}
/*    5    */ if (kC == 101 && cC ==  53) {
shadowColour = "0,0,0";
evaluateTextShadow();
}
/*    6    */ if (kC == 102 && cC ==  54) {
shadowColour = tintSelectorForward();
evaluateTextShadow();
}
/*    1    */ if (kC ==  97 && cC ==  49) {
shadowTop  = "-";
shadowLeft = " ";
evaluateTextShadow();
}
/*    2    */ if (kC ==  98 && cC ==  50) {
if (shadowAlpha > 0.01) {
shadowAlpha -= 0.01;
evaluateTextShadow();
}
}
/*    3    */ if (kC ==  99 && cC ==  51) {
shadowTop  = " ";
shadowLeft = " ";
evaluateTextShadow();
}
/*    0    */ if (kC ==  96 && cC ==  48) {
part.style.textShadow = "";
}
/*    .    */ if (kC == 110 && cC ==  46) {
evaluateTextShadow();
}





} else if (styleKey==="F") {

/*    /    */ if (kC == 111 && cC ==  47) {
if (shadowBlur > 0.05) {
shadowBlur -= 0.025;
evaluateTextShadowGroup();
}
}
/*    *    */ if (kC == 106 && cC ==  42) {
shadowBlur += 0.025;
evaluateTextShadowGroup();
}
/*    -    */ if (kC == 109 && cC ==  45) {
if (parseFloat(part.style.fontSize)>2) {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.fontSize = parseFloat(part.style.fontSize) - 0.1 + "px";
}
}
}
/*    +    */ if (kC == 107 && cC ==  43) {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.fontSize = parseFloat(part.style.fontSize) + 0.1 + "px";
}
}
/*    7    */ if (kC == 103 && cC ==  55) {
shadowTop  = "-";
shadowLeft = "-";
evaluateTextShadowGroup();
}
/*    8    */ if (kC == 104 && cC ==  56) {
if (shadowAlpha < 0.99) {
shadowAlpha += 0.01;
evaluateTextShadowGroup();
}
}
/*    9    */ if (kC == 105 && cC ==  57) {
shadowTop  = " ";
shadowLeft = "-";
evaluateTextShadowGroup();
}
/*    4    */ if (kC == 100 && cC ==  52) {
shadowColour = tintSelectorBackward();
evaluateTextShadowGroup();
}
/*    5    */ if (kC == 101 && cC ==  53) {
shadowColour = "0,0,0";
evaluateTextShadowGroup();
}
/*    6    */ if (kC == 102 && cC ==  54) {
shadowColour = tintSelectorForward();
evaluateTextShadowGroup();
}
/*    1    */ if (kC ==  97 && cC ==  49) {
shadowTop  = "-";
shadowLeft = " ";
evaluateTextShadowGroup();
}
/*    2    */ if (kC ==  98 && cC ==  50) {
if (shadowAlpha > 0.01) {
shadowAlpha -= 0.01;
evaluateTextShadowGroup();
}
}
/*    3    */ if (kC ==  99 && cC ==  51) {
shadowTop  = " ";
shadowLeft = " ";
evaluateTextShadowGroup();
}
/*    0    */ if (kC ==  96 && cC ==  48) {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.textShadow = "";
}
}
/*    .    */ if (kC == 110 && cC ==  46) {
evaluateTextShadowGroup();
}

}

}
