function boxShadowTuner() {

const part = coinFocus.lastElementChild;

let coinGroup;

       if (coinFocus.dataset.coinTrip==Ts0) {
coinGroup = coinTrip.sel0;
} else if (coinFocus.dataset.coinTrip==Ts1) {
coinGroup = coinTrip.sel1;
} else if (coinFocus.dataset.coinTrip==Ts2) {
coinGroup = coinTrip.sel2;
}




function evaluateBoxShadow() {
part.style.boxShadow = `${boxShadowTop}${boxShadowSize * boxShadowFactor}px ${boxShadowLeft}${boxShadowSize * (1 - boxShadowFactor)}px ${boxShadowBlur}px rgba(${boxShadowColourTune},${boxShadowAlpha})`;
}


function evaluateBoxShadowGroup() {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.style.boxShadow = `${boxShadowTop}${boxShadowSize * boxShadowFactor}px ${boxShadowLeft}${boxShadowSize * (1 - boxShadowFactor)}px ${boxShadowBlur}px rgba(${boxShadowColourTune},${boxShadowAlpha})`;
}
}




function tintSelectorForward() {
       if (boxShadowColourTune=="0,0,0") {
return(tintArray[0]);
} else {
if (boxTintArrayNumber==tintArray.length - 1) {
boxTintArrayNumber = 0;
} else {
boxTintArrayNumber += 1;
}
return(tintArray[boxTintArrayNumber]);
}
}

function tintSelectorBackward() {
       if (boxShadowColourTune=="0,0,0") {
return(tintArray[0]);
} else {
if (boxTintArrayNumber==0) {
boxTintArrayNumber = tintArray.length - 1;
} else {
boxTintArrayNumber -= 1;
}
return(tintArray[boxTintArrayNumber]);
}
}




       if (styleKey==="u") {
/*    /    */ if (kC == 111 && cC ==  47) {
if (boxShadowBlur > 0.05) {
boxShadowBlur -= 0.05;
evaluateBoxShadow();
}
}
/*    *    */ if (kC == 106 && cC ==  42) {
boxShadowBlur += 0.05;
evaluateBoxShadow();
}
/*    -    */ if (kC == 109 && cC ==  45) {
if (boxShadowSize>0.5) {
boxShadowSize -= 0.5;
}
evaluateBoxShadow();
}
/*    +    */ if (kC == 107 && cC ==  43) {
boxShadowSize += 0.5;
evaluateBoxShadow();
}
/*    7    */ if (kC == 103 && cC ==  55) {
boxShadowTop  = "-";
boxShadowLeft = "-";
evaluateBoxShadow();
}
/*    8    */ if (kC == 104 && cC ==  56) {
if (boxShadowAlpha < 0.99) {
boxShadowAlpha += 0.01;
evaluateBoxShadow();
}
}
/*    9    */ if (kC == 105 && cC ==  57) {
boxShadowTop  = " ";
boxShadowLeft = "-";
evaluateBoxShadow();
}
/*    4    */ if (kC == 100 && cC ==  52) {
boxShadowColourTune = tintSelectorBackward();
evaluateBoxShadow();
}
/*    5    */ if (kC == 101 && cC ==  53) {
boxShadowColourTune = "0,0,0";
evaluateBoxShadow();
}
/*    6    */ if (kC == 102 && cC ==  54) {
boxShadowColourTune = tintSelectorForward();
evaluateBoxShadow();
}
/*    1    */ if (kC ==  97 && cC ==  49) {
boxShadowTop  = "-";
boxShadowLeft = " ";
evaluateBoxShadow();
}
/*    2    */ if (kC ==  98 && cC ==  50) {
if (boxShadowAlpha > 0.01) {
boxShadowAlpha -= 0.01;
evaluateBoxShadow();
}
}
/*    3    */ if (kC ==  99 && cC ==  51) {
boxShadowTop  = " ";
boxShadowLeft = " ";
evaluateBoxShadow();
}
/*    0    */ if (kC ==  96 && cC ==  48) {
if (boxShadowFactor < 1.00) { boxShadowFactor += 0.01; }
evaluateBoxShadow();

//part.style.boxShadow = "";

}
/*    .    */ if (kC == 110 && cC ==  46) {
if (boxShadowFactor > 0.00) { boxShadowFactor -= 0.01; }
evaluateBoxShadow();

}

if (kC == 0 && cC == 0) {
evaluateBoxShadow();
}




} else if (styleKey==="U") {

/*    /    */ if (kC == 111 && cC ==  47) {
if (boxShadowBlur > 0.05) {
boxShadowBlur -= 0.05;
evaluateBoxShadowGroup();
}
}
/*    *    */ if (kC == 106 && cC ==  42) {
boxShadowBlur += 0.05;
evaluateBoxShadowGroup();
}
/*    -    */ if (kC == 109 && cC ==  45) {
if (boxShadowSize>0.5) {
boxShadowSize -= 0.5;
}
evaluateBoxShadowGroup();
}
/*    +    */ if (kC == 107 && cC ==  43) {
boxShadowSize += 0.5;
evaluateBoxShadowGroup();
}
/*    7    */ if (kC == 103 && cC ==  55) {
boxShadowTop  = "-";
boxShadowLeft = "-";
evaluateBoxShadowGroup();
}
/*    8    */ if (kC == 104 && cC ==  56) {
if (boxShadowAlpha < 0.99) {
boxShadowAlpha += 0.01;
evaluateBoxShadowGroup();
}
}
/*    9    */ if (kC == 105 && cC ==  57) {
boxShadowTop  = " ";
boxShadowLeft = "-";
evaluateBoxShadowGroup();
}
/*    4    */ if (kC == 100 && cC ==  52) {
boxShadowColourTune = tintSelectorBackward();
evaluateBoxShadowGroup();
}
/*    5    */ if (kC == 101 && cC ==  53) {
boxShadowColourTune = "0,0,0";
evaluateBoxShadowGroup();
}
/*    6    */ if (kC == 102 && cC ==  54) {
boxShadowColourTune = tintSelectorForward();
evaluateBoxShadowGroup();
}
/*    1    */ if (kC ==  97 && cC ==  49) {
boxShadowTop  = "-";
boxShadowLeft = " ";
evaluateBoxShadowGroup();
}
/*    2    */ if (kC ==  98 && cC ==  50) {
if (boxShadowAlpha > 0.01) {
boxShadowAlpha -= 0.01;
evaluateBoxShadowGroup();
}
}
/*    3    */ if (kC ==  99 && cC ==  51) {
boxShadowTop  = " ";
boxShadowLeft = " ";
evaluateBoxShadowGroup();
}
/*    0    */ if (kC ==  96 && cC ==  48) {
if (boxShadowFactor < 1.00) { boxShadowFactor += 0.01; }
evaluateBoxShadowGroup();
}
/*    .    */ if (kC == 110 && cC ==  46) {
if (boxShadowFactor > 0.00) { boxShadowFactor -= 0.01; }
evaluateBoxShadowGroup();
}

}

}

