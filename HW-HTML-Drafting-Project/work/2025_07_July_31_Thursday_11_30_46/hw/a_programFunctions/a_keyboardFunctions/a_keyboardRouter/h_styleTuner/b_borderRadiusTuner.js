function borderRadiusTuner() {

const part = coinFocus.lastElementChild;

let coinGroup;

       if (coinFocus.dataset.coinTrip==Ts0) {
coinGroup = coinTrip.sel0;
} else if (coinFocus.dataset.coinTrip==Ts1) {
coinGroup = coinTrip.sel1;
} else if (coinFocus.dataset.coinTrip==Ts2) {
coinGroup = coinTrip.sel2;
}

function evaluateOutline() {
part.style.outline =`${outlineTunedSize}px ${outlineStyleArray[outlineTunedStyle]} ${coinFocus.dataset.outlineColour}`;
}

function evaluateOutlineGroup() {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.style.outline =`${outlineTunedSize}px ${outlineStyleArray[outlineTunedStyle]} ${coinGroup[j].dataset.outlineColour}`;
}
}


       if (styleKey=="r") {
/*    /    */ if (kC == 111 && cC ==  47) {
if (outlineTunedSize > 0) {
outlineTunedSize -= 1;
evaluateOutline();
}
}
/*    *    */ if (kC == 106 && cC ==  42) {
outlineTunedSize += 1;
evaluateOutline();
}
/*    -    */ if (kC == 109 && cC ==  45) {
if (borderTopLeftRadiusHold      > 1) { part.style.borderTopLeftRadius     = --borderTopLeftRadiusHold     + "px"; }
if (borderTopRightRadiusHold     > 1) { part.style.borderTopRightRadius    = --borderTopRightRadiusHold    + "px"; }
if (borderBottomLeftRadiusHold   > 1) { part.style.borderBottomLeftRadius  = --borderBottomLeftRadiusHold  + "px"; }
if (borderBottomRightRadiusHold  > 1) { part.style.borderBottomRightRadius = --borderBottomRightRadiusHold + "px"; }
}
/*    +    */ if (kC == 107 && cC ==  43) {
part.style.borderTopLeftRadius     = ++borderTopLeftRadiusHold     + "px";
part.style.borderTopRightRadius    = ++borderTopRightRadiusHold    + "px";
part.style.borderBottomLeftRadius  = ++borderBottomLeftRadiusHold  + "px";
part.style.borderBottomRightRadius = ++borderBottomRightRadiusHold + "px";
}
/*    7    */ if (kC == 103 && cC ==  55) {
if (parseInt(part.style.borderTopLeftRadius)    != 0) {
part.style.borderTopLeftRadius     = 0 + "px";
} else {
part.style.borderTopLeftRadius     = borderTopLeftRadiusHold + "px";
}
}
/*    8    */ if (kC == 104 && cC ==  56) {
if (parseInt(part.style.borderTopLeftRadius)    != 0) {
part.style.borderTopLeftRadius      = 0 + "px";
part.style.borderTopRightRadius     = 0 + "px";
} else {
part.style.borderTopLeftRadius      = borderTopLeftRadiusHold + "px";
part.style.borderTopRightRadius     = borderTopRightRadiusHold + "px";
}
}
/*    9    */ if (kC == 105 && cC ==  57) {
if (parseInt(part.style.borderTopRightRadius)    != 0) {
part.style.borderTopRightRadius     = 0 + "px";
} else {
part.style.borderTopRightRadius     = borderTopRightRadiusHold + "px";
}
}
/*    4    */ if (kC == 100 && cC ==  52) {
if (parseInt(part.style.borderTopLeftRadius)    != 0) {
part.style.borderTopLeftRadius        = 0 + "px";
part.style.borderBottomLeftRadius     = 0 + "px";
} else {
part.style.borderTopLeftRadius        = borderTopLeftRadiusHold + "px";
part.style.borderBottomLeftRadius     = borderBottomLeftRadiusHold + "px";
}
}
/*    5    */ if (kC == 101 && cC ==  53) {
if (parseInt(part.style.borderTopLeftRadius)    != 0) {
part.style.borderTopLeftRadius        = 0 + "px";
part.style.borderBottomLeftRadius     = 0 + "px";
part.style.borderTopRightRadius        = 0 + "px";
part.style.borderBottomRightRadius     = 0 + "px";
} else {
part.style.borderTopLeftRadius        = borderTopLeftRadiusHold + "px";
part.style.borderBottomLeftRadius     = borderBottomLeftRadiusHold + "px";
part.style.borderTopRightRadius        = borderTopRightRadiusHold + "px";
part.style.borderBottomRightRadius     = borderBottomRightRadiusHold + "px";
}
}
/*    6    */ if (kC == 102 && cC ==  54) {
if (parseInt(part.style.borderTopRightRadius)    != 0) {
part.style.borderTopRightRadius        = 0 + "px";
part.style.borderBottomRightRadius     = 0 + "px";
} else {
part.style.borderTopRightRadius        = borderTopRightRadiusHold + "px";
part.style.borderBottomRightRadius     = borderBottomRightRadiusHold + "px";
}
}
/*    1    */ if (kC ==  97 && cC ==  49) {
if (parseInt(part.style.borderBottomLeftRadius)    != 0) {
part.style.borderBottomLeftRadius     = 0 + "px";
} else {
part.style.borderBottomLeftRadius     = borderBottomLeftRadiusHold + "px";
}
}
/*    2    */ if (kC ==  98 && cC ==  50) {
if (parseInt(part.style.borderBottomLeftRadius)    != 0) {
part.style.borderBottomLeftRadius      = 0 + "px";
part.style.borderBottomRightRadius     = 0 + "px";
} else {
part.style.borderBottomLeftRadius      = borderBottomLeftRadiusHold + "px";
part.style.borderBottomRightRadius     = borderBottomRightRadiusHold + "px";
}
}
/*    3    */ if (kC ==  99 && cC ==  51) {
if (parseInt(part.style.borderBottomRightRadius)    != 0) {
part.style.borderBottomRightRadius     = 0 + "px";
} else {
part.style.borderBottomRightRadius     = borderBottomRightRadiusHold + "px";
}
}
/*    0    */ if (kC ==  96 && cC ==  48) {
outlineTunedStyle += 1;
if (outlineTunedStyle > outlineStyleArray.length - 1) { outlineTunedStyle = 0; }
evaluateOutline();
}
/*    .    */ if (kC == 110 && cC ==  46) {
outlineTunedStyle -= 1;
if (outlineTunedStyle < 0) { outlineTunedStyle = outlineStyleArray.length - 1; }
evaluateOutline();
}





} else if (styleKey=="R") {
/*    /    */ if (kC == 111 && cC ==  47) {
if (outlineTunedSize > 0) {
outlineTunedSize -= 1;
evaluateOutlineGroup();
}
}
/*    *    */ if (kC == 106 && cC ==  42) {
outlineTunedSize += 1;
evaluateOutlineGroup();
}
/*    -    */ if (kC == 109 && cC ==  45) {
if (borderTopLeftRadiusHold     > 1) { for (let j = 0; j < coinGroup.length; j++) { coinGroup[j].lastElementChild.style.borderTopLeftRadius        = --borderTopLeftRadiusHold     + "px"; } }
if (borderTopRightRadiusHold    > 1) { for (let j = 0; j < coinGroup.length; j++) { coinGroup[j].lastElementChild.style.borderTopRightRadius       = --borderTopRightRadiusHold    + "px"; } }
if (borderBottomLeftRadiusHold  > 1) { for (let j = 0; j < coinGroup.length; j++) { coinGroup[j].lastElementChild.style.borderBottomLeftRadius     = --borderBottomLeftRadiusHold  + "px"; } }
if (borderBottomRightRadiusHold > 1) { for (let j = 0; j < coinGroup.length; j++) { coinGroup[j].lastElementChild.style.borderBottomRightRadius    = --borderBottomRightRadiusHold + "px"; } }
}
/*    +    */ if (kC == 107 && cC ==  43) {
for (let j = 0; j < coinGroup.length; j++) { coinGroup[j].lastElementChild.style.borderTopLeftRadius        = ++borderTopLeftRadiusHold     + "px"; }
for (let j = 0; j < coinGroup.length; j++) { coinGroup[j].lastElementChild.style.borderTopRightRadius       = ++borderTopRightRadiusHold    + "px"; }
for (let j = 0; j < coinGroup.length; j++) { coinGroup[j].lastElementChild.style.borderBottomLeftRadius     = ++borderBottomLeftRadiusHold  + "px"; }
for (let j = 0; j < coinGroup.length; j++) { coinGroup[j].lastElementChild.style.borderBottomRightRadius    = ++borderBottomRightRadiusHold + "px"; }
}
/*    7    */ if (kC == 103 && cC ==  55) {
if (parseInt(part.style.borderTopLeftRadius)    != 0) {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.style.borderTopLeftRadius     = 0 + "px";
}
} else {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.style.borderTopLeftRadius     = borderTopLeftRadiusHold + "px";
}
}
}
/*    8    */ if (kC == 104 && cC ==  56) {
if (parseInt(part.style.borderTopLeftRadius)    != 0) {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.style.borderTopLeftRadius      = 0 + "px";
coinGroup[j].lastElementChild.style.borderTopRightRadius     = 0 + "px";
}
} else {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.style.borderTopLeftRadius      = borderTopLeftRadiusHold + "px";
coinGroup[j].lastElementChild.style.borderTopRightRadius     = borderTopRightRadiusHold + "px";
}
}
}
/*    9    */ if (kC == 105 && cC ==  57) {
if (parseInt(part.style.borderTopRightRadius)    != 0) {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.style.borderTopRightRadius     = 0 + "px";
}
} else {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.style.borderTopRightRadius     = borderTopRightRadiusHold + "px";
}
}
}
/*    4    */ if (kC == 100 && cC ==  52) {
if (parseInt(part.style.borderTopLeftRadius)    != 0) {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.style.borderTopLeftRadius        = 0 + "px";
coinGroup[j].lastElementChild.style.borderBottomLeftRadius     = 0 + "px";
}
} else {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.style.borderTopLeftRadius        = borderTopLeftRadiusHold + "px";
coinGroup[j].lastElementChild.style.borderBottomLeftRadius     = borderBottomLeftRadiusHold + "px";
}
}
}
/*    5    */ if (kC == 101 && cC ==  53) {
if (parseInt(part.style.borderTopRightRadius)    != 0) {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.style.borderTopRightRadius        = 0 + "px";
coinGroup[j].lastElementChild.style.borderBottomRightRadius     = 0 + "px";
coinGroup[j].lastElementChild.style.borderTopLeftRadius        = 0 + "px";
coinGroup[j].lastElementChild.style.borderBottomLeftRadius     = 0 + "px";
}
} else {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.style.borderTopRightRadius        = borderTopRightRadiusHold + "px";
coinGroup[j].lastElementChild.style.borderBottomRightRadius     = borderBottomRightRadiusHold + "px";
coinGroup[j].lastElementChild.style.borderTopLeftRadius        = borderTopLeftRadiusHold + "px";
coinGroup[j].lastElementChild.style.borderBottomLeftRadius     = borderBottomLeftRadiusHold + "px";
}
}
}
/*    6    */ if (kC == 102 && cC ==  54) {
if (parseInt(part.style.borderTopRightRadius)    != 0) {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.style.borderTopRightRadius        = 0 + "px";
coinGroup[j].lastElementChild.style.borderBottomRightRadius     = 0 + "px";
}
} else {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.style.borderTopRightRadius        = borderTopRightRadiusHold + "px";
coinGroup[j].lastElementChild.style.borderBottomRightRadius     = borderBottomRightRadiusHold + "px";
}
}
}
/*    1    */ if (kC ==  97 && cC ==  49) {
if (parseInt(part.style.borderBottomLeftRadius)    != 0) {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.style.borderBottomLeftRadius     = 0 + "px";
}
} else {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.style.borderBottomLeftRadius     = borderBottomLeftRadiusHold + "px";
} 
}
}
/*    2    */ if (kC ==  98 && cC ==  50) {
if (parseInt(part.style.borderBottomLeftRadius)    != 0) {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.style.borderBottomLeftRadius      = 0 + "px";
coinGroup[j].lastElementChild.style.borderBottomRightRadius     = 0 + "px";
}
} else {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.style.borderBottomLeftRadius      = borderBottomLeftRadiusHold + "px";
coinGroup[j].lastElementChild.style.borderBottomRightRadius     = borderBottomRightRadiusHold + "px";
} 
}
}
/*    3    */ if (kC ==  99 && cC ==  51) {
if (parseInt(part.style.borderBottomRightRadius)    != 0) {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.style.borderBottomRightRadius     = 0 + "px";
}
} else {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.style.borderBottomRightRadius     = borderBottomRightRadiusHold + "px";
}
}
}
/*    0    */ if (kC ==  96 && cC ==  48) {
outlineTunedStyle += 1;
if (outlineTunedStyle > outlineStyleArray.length - 1) { outlineTunedStyle = 0; }
evaluateOutlineGroup();
}
/*    .    */ if (kC == 110 && cC ==  46) {
outlineTunedStyle -= 1;
if (outlineTunedStyle < 0) { outlineTunedStyle = outlineStyleArray.length - 1; }
evaluateOutlineGroup();
}

}

}
