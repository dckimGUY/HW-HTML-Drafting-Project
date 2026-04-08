let paddingTunedLeftRight = 16;
let paddingTunedTopBottom = 16;
let mainTunerOpacity = 1;


function paddingTuner() {

const part = coinFocus.lastElementChild.firstElementChild.nextElementSibling;

let coinGroup;

       if (coinFocus.dataset.coinTrip==Ts0) {
coinGroup = coinTrip.sel0;
} else if (coinFocus.dataset.coinTrip==Ts1) {
coinGroup = coinTrip.sel1;
} else if (coinFocus.dataset.coinTrip==Ts2) {
coinGroup = coinTrip.sel2;
}


       if (styleKey=="p") {
/*    /    */ if (kC == 111 && cC ==  47) {
if (paddingTunedLeftRight > 0) {
part.style.paddingLeft  = --paddingTunedLeftRight + "px";
part.style.paddingRight = --paddingTunedLeftRight + "px";
}
}
/*    *    */ if (kC == 106 && cC ==  42) {
part.style.paddingLeft  = ++paddingTunedLeftRight + "px";
part.style.paddingRight = ++paddingTunedLeftRight + "px";
}
/*    -    */ if (kC == 109 && cC ==  45) {
if (paddingTunedTopBottom > 0) {
part.style.paddingTop    = --paddingTunedTopBottom + "px";
part.style.paddingBottom = --paddingTunedTopBottom + "px";
}
}
/*    +    */ if (kC == 107 && cC ==  43) {
part.style.paddingTop    = ++paddingTunedTopBottom + "px";
part.style.paddingBottom = ++paddingTunedTopBottom + "px";
}
/*    7    */ if (kC == 103 && cC ==  55) {
part.style.fontStyle = "";
part.style.fontWeight = "";
part.style.fontVariant = "";
part.style.textTransform = "";
}
/*    8    */ if (kC == 104 && cC ==  56) {
if (part.style.fontStyle&&part.style.fontStyle=="italic") {
part.style.fontStyle = "";
} else {
part.style.fontStyle = "italic";
}
}
/*    9    */ if (kC == 105 && cC ==  57) {
if (part.style.fontWeight&&part.style.fontWeight=="bold") {
part.style.fontWeight = "";
} else {
part.style.fontWeight = "bold";
}
}
/*    4    */ if (kC == 100 && cC ==  52) {
part.style.direction = "ltr";
}
/*    5    */ if (kC == 101 && cC ==  53) {
if (part.style.fontVariant&&part.style.fontVariant=="small-caps") {
part.style.fontVariant = "";
} else {
part.style.fontVariant = "small-caps";
}
}
/*    6    */ if (kC == 102 && cC ==  54) {
part.style.direction = "rtl";
}
/*    1    */ if (kC ==  97 && cC ==  49) {
if (part.style.textTransform&&part.style.textTransform=="lowercase") {
part.style.textTransform = "";
} else {
part.style.textTransform = "lowercase";
}
}
/*    2    */ if (kC ==  98 && cC ==  50) {
if (part.style.textTransform&&part.style.textTransform=="uppercase") {
part.style.textTransform = "";
} else {
part.style.textTransform = "uppercase";
}
}
/*    3    */ if (kC ==  99 && cC ==  51) {
if (part.style.textTransform&&part.style.textTransform=="capitalize") {
part.style.textTransform = "";
} else {
part.style.textTransform = "capitalize";
}
}


/*    0    */ if (kC ==  96 && cC ==  48) {
if (mainTunerOpacity > 0) {
mainTunerOpacity -= 0.01
coinFocus.lastElementChild.style.opacity = mainTunerOpacity;
}
}
/*    .    */ if (kC == 110 && cC ==  46) {
if (mainTunerOpacity < 1) {
mainTunerOpacity += 0.01
coinFocus.lastElementChild.style.opacity = mainTunerOpacity;
}
}

} else if (styleKey=="P") {
/*    /    */ if (kC == 111 && cC ==  47) {
if (paddingTunedLeftRight > 0) {
--paddingTunedLeftRight;
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.paddingLeft  = paddingTunedLeftRight + "px";
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.paddingRight = paddingTunedLeftRight + "px";
}
}
}
/*    *    */ if (kC == 106 && cC ==  42) {
++paddingTunedLeftRight;
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.paddingLeft  = paddingTunedLeftRight + "px";
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.paddingRight = paddingTunedLeftRight + "px";
}
}
/*    -    */ if (kC == 109 && cC ==  45) {
if (paddingTunedTopBottom > 0) {
--paddingTunedTopBottom;
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.paddingTop    = paddingTunedTopBottom + "px";
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.paddingBottom = paddingTunedTopBottom + "px";
}
}
}
/*    +    */ if (kC == 107 && cC ==  43) {
++paddingTunedTopBottom;
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.paddingTop    = paddingTunedTopBottom + "px";
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.paddingBottom = paddingTunedTopBottom + "px";
}
}
/*    7    */ if (kC == 103 && cC ==  55) {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.fontStyle = "";
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.fontWeight = "";
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.fontVariant = "";
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.textTransform = "";
}
}
/*    8    */ if (kC == 104 && cC ==  56) {
if (part.style.fontStyle&&part.style.fontStyle=="italic") {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.fontStyle = "";
}
} else {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.fontStyle = "italic";
}
}
}
/*    9    */ if (kC == 105 && cC ==  57) {
if (part.style.fontWeight&&part.style.fontWeight=="bold") {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.fontWeight = "";
}
} else {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.fontWeight = "bold";
}
}
}
/*    4    */ if (kC == 100 && cC ==  52) {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.direction = "ltr";
}
}
/*    5    */ if (kC == 101 && cC ==  53) {
if (part.style.fontVariant&&part.style.fontVariant=="small-caps") {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.fontVariant = "";
}
} else {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.fontVariant = "small-caps";
}
}
}
/*    6    */ if (kC == 102 && cC ==  54) {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.direction = "rtl";
}
}
/*    1    */ if (kC ==  97 && cC ==  49) {
if (part.style.textTransform&&part.style.textTransform=="lowercase") {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.textTransform = "";
}
} else {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.textTransform = "lowercase";
}
}
}
/*    2    */ if (kC ==  98 && cC ==  50) {
if (part.style.textTransform&&part.style.textTransform=="uppercase") {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.textTransform = "";
}
} else {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.textTransform = "uppercase";
}
}
}
/*    3    */ if (kC ==  99 && cC ==  51) {
if (part.style.textTransform&&part.style.textTransform=="capitalize") {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.textTransform = "";
}
} else {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.textTransform = "capitalize";
}
}
}
/*    0    */ if (kC ==  96 && cC ==  48) {
if (mainTunerOpacity > 0) {
mainTunerOpacity -= 0.01
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.style.opacity = mainTunerOpacity;
}
}
}
/*    .    */ if (kC == 110 && cC ==  46) {
if (mainTunerOpacity < 1) {
mainTunerOpacity += 0.01
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.style.opacity = mainTunerOpacity;
}
}
}
}

}
