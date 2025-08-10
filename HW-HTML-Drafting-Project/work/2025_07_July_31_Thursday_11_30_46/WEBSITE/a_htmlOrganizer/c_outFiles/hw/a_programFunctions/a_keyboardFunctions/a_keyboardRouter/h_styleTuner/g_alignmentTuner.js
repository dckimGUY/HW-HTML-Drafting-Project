function alignmentTuner() {

if (coinFocus!=null) {

const part = coinFocus.lastElementChild.firstElementChild.nextElementSibling;

let coinGroup;

       if (coinFocus.dataset.coinTrip==Ts0) {
coinGroup = coinTrip.sel0;
} else if (coinFocus.dataset.coinTrip==Ts1) {
coinGroup = coinTrip.sel1;
} else if (coinFocus.dataset.coinTrip==Ts2) {
coinGroup = coinTrip.sel2;
}



       if (styleKey=="a") {
/*    /    */ if (kC == 111 && cC ==  47) {
if (part.style.textIndent) {
if (parseFloat(part.style.textIndent) > 0.02) {
part.style.textIndent = parseFloat(part.style.textIndent) - 0.02 + "em";
}
} else {
part.style.textIndent = 0 + "em";
}
}
/*    *    */ if (kC == 106 && cC ==  42) {
if (part.style.textIndent) {
part.style.textIndent = parseFloat(part.style.textIndent) + 0.02 + "em";
} else {
part.style.textIndent = 0 + "em";
}
}
/*    -    */ if (kC == 109 && cC ==  45) {
if (part.style.fontSize) {
if (parseFloat(part.style.fontSize)>2) {
part.style.fontSize = parseFloat(part.style.fontSize) - 0.1 + "px";
}
} else {
part.style.fontSize = 32 + "px";
}
}
/*    +    */ if (kC == 107 && cC ==  43) {
if (part.style.fontSize) {
part.style.fontSize = parseFloat(part.style.fontSize) + 0.1 + "px";
} else {
part.style.fontSize = 32 + "px";
}
}
/*    7    */ if (kC == 103 && cC ==  55) {
if (part.style.lineHeight&&part.style.lineHeight!="inherit") {
if (parseFloat(part.style.lineHeight) > 0.02) {
part.style.lineHeight = parseFloat(part.style.lineHeight) - 0.02;
}
} else {
part.style.lineHeight = 1.00;
}
}
/*    8    */ if (kC == 104 && cC ==  56) {
if (part.style.lineHeight) {
part.style.lineHeight = "inherit";
}
}
/*    9    */ if (kC == 105 && cC ==  57) {
if (part.style.lineHeight&&part.style.lineHeight!="inherit") {
part.style.lineHeight = parseFloat(part.style.lineHeight) + 0.02;
} else {
part.style.lineHeight = 1.00;
}
}
/*    4    */ if (kC == 100 && cC ==  52) {
if (part.style.wordSpacing&&part.style.wordSpacing!="inherit") {
if (parseFloat(part.style.wordSpacing) > 0.02) {
part.style.wordSpacing = parseFloat(part.style.wordSpacing) - 0.02 + "em";
}
} else {
part.style.wordSpacing = 0 + "em";
}
}
/*    5    */ if (kC == 101 && cC ==  53) {
if (part.style.wordSpacing) {
part.style.wordSpacing = "inherit";
}
}
/*    6    */ if (kC == 102 && cC ==  54) {
if (part.style.wordSpacing&&part.style.wordSpacing!="inherit") {
part.style.wordSpacing = parseFloat(part.style.wordSpacing) + 0.02 + "em";
} else {
part.style.wordSpacing = 0 + "em";
}
}
/*    1    */ if (kC ==  97 && cC ==  49) {
if (part.style.letterSpacing&&part.style.letterSpacing!="inherit") {
if (parseFloat(part.style.letterSpacing) > 0.005) {
part.style.letterSpacing = parseFloat(part.style.letterSpacing) - 0.005 + "em";
}
} else {
part.style.letterSpacing = 0 + "em";
}
}
/*    2    */ if (kC ==  98 && cC ==  50) {
if (part.style.letterSpacing&&part.style.letterSpacing!="inherit") {
part.style.letterSpacing = "inherit";
}
}
/*    3    */ if (kC ==  99 && cC ==  51) {
if (part.style.letterSpacing) {
part.style.letterSpacing = parseFloat(part.style.letterSpacing) + 0.005 + "em";
} else {
part.style.letterSpacing = 0 + "em";
}
}
/*    0    */ if (kC ==  96 && cC ==  48) {
part.style.lineHeight    = "inherit";
part.style.wordSpacing   = "inherit";
part.style.letterSpacing = "inherit";
}
/*    .    */ if (kC == 110 && cC ==  46) {
cycleTextAlignment(["", "", "", false, "", ""]);
}







} else if (styleKey=="A") {

/*    /    */ if (kC == 111 && cC ==  47) {
if (part.style.textIndent) {
if (parseFloat(part.style.textIndent) > 0.02) {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.textIndent = parseFloat(part.style.textIndent) - 0.02 + "em";
}
}
} else {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.textIndent = 0 + "em";
}
}
}
/*    *    */ if (kC == 106 && cC ==  42) {
if (part.style.textIndent) {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.textIndent = parseFloat(part.style.textIndent) + 0.02 + "em";
}
} else {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.textIndent = 0 + "em";
}
}
}
/*    -    */ if (kC == 109 && cC ==  45) {
if (part.style.fontSize) {
if (parseFloat(part.style.fontSize)>2) {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.fontSize = parseFloat(part.style.fontSize) - 0.1 + "px";
}
}
} else {
part.style.fontSize = 32 + "px";
}

}
/*    +    */ if (kC == 107 && cC ==  43) {
if (part.style.fontSize) {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.fontSize = parseFloat(part.style.fontSize) + 0.1 + "px";
}
} else {
part.style.fontSize = 32 + "px";
}
}
/*    7    */ if (kC == 103 && cC ==  55) {
if (part.style.lineHeight&&part.style.lineHeight!="inherit") {
if (parseFloat(part.style.lineHeight) > 0.02) {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.lineHeight = parseFloat(part.style.lineHeight) - 0.02;
}
}
} else {
part.style.lineHeight = 1.00;
}
}
/*    8    */ if (kC == 104 && cC ==  56) {
if (part.style.lineHeight) {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.lineHeight = "inherit";
}
}
}
/*    9    */ if (kC == 105 && cC ==  57) {
if (part.style.lineHeight&&part.style.lineHeight!="inherit") {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.lineHeight = parseFloat(part.style.lineHeight) + 0.02;
}
} else {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.lineHeight = 1.00;
}
}
}
/*    4    */ if (kC == 100 && cC ==  52) {
if (part.style.wordSpacing&&part.style.wordSpacing!="inherit") {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.wordSpacing = parseFloat(part.style.wordSpacing) - 0.02 + "em";
}
} else {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.wordSpacing = 0 + "em";
}
}
}
/*    5    */ if (kC == 101 && cC ==  53) {
if (part.style.wordSpacing) {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.wordSpacing = "inherit";
}
}
}
/*    6    */ if (kC == 102 && cC ==  54) {
if (part.style.wordSpacing&&part.style.wordSpacing!="inherit") {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.wordSpacing = parseFloat(part.style.wordSpacing) + 0.02 + "em";
}
} else {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.wordSpacing = 0 + "em";
}
}
}
/*    1    */ if (kC ==  97 && cC ==  49) {
if (part.style.letterSpacing&&part.style.letterSpacing!="inherit") {
if (parseFloat(part.style.letterSpacing) > 0.005) {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.letterSpacing = parseFloat(part.style.letterSpacing) - 0.005 + "em";
}
}
} else {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.letterSpacing = 0 + "em";
}
}
}
/*    2    */ if (kC ==  98 && cC ==  50) {
if (part.style.letterSpacing) {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.letterSpacing = "inherit";
}
}
}
/*    3    */ if (kC ==  99 && cC ==  51) {
if (part.style.letterSpacing&&part.style.letterSpacing!="inherit") {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.letterSpacing = parseFloat(part.style.letterSpacing) + 0.005 + "em";
}
} else {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.letterSpacing = 0 + "em";
}
}
}
/*    0    */ if (kC ==  96 && cC ==  48) {
for (let j = 0; j < coinGroup.length; j++) {
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.lineHeight    = "inherit";
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.wordSpacing   = "inherit";
coinGroup[j].lastElementChild.firstElementChild.nextElementSibling.style.letterSpacing = "inherit";
}
}
/*    .    */ if (kC == 110 && cC ==  46) {
cycleTextAlignment(["", "", "", true, "", ""]);
}




}

}

}