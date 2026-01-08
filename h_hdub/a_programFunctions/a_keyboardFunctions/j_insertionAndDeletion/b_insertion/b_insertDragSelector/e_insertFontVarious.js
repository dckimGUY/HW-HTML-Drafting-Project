function insertFontVarious() {

hauptMode=0;
curFocus=1;
Cur.style.left   = "0px";
Cur.style.top    = "0px";
Cur.dataset.left = "0px";
Cur.dataset.top  = "0px";


/* line height */

let factor = 0.02;

for ( let j = 0; j < 48; j++) {
insertNewCoin(["",78,78,false,false,false]);
let newCoin = utilityLayer0.lastElementChild;
let radiusLocation = newCoin.lastElementChild;
radiusLocation.style.outline      = "4px dashed magenta";
radiusLocation.style.borderRadius = "0px";
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.backgroundColor="white";
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.paddingLeft=``;
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.lineHeight=`${Math.round((1 + (j * factor))*100)/100}`;
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.fontSize  =`32px`;
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.textAlign =`left`;
newCoin.lastElementChild.lastElementChild.previousElementSibling.innerText       =`line height ${Math.round((1 + (j * factor))*100)/100}; line height ${Math.round((1 + (j * factor))*100)/100}; line height ${Math.round((1 + (j * factor))*100)/100}; line height ${Math.round((1 + (j * factor))*100)/100}; line height ${Math.round((1 + (j * factor))*100)/100}; line height ${Math.round((1 + (j * factor))*100)/100}; line height ${Math.round((1 + (j * factor))*100)/100}; line height ${Math.round((1 + (j * factor))*100)/100}; line height ${Math.round((1 + (j * factor))*100)/100}; line height ${Math.round((1 + (j * factor))*100)/100}; line height ${Math.round((1 + (j * factor))*100)/100}; line height ${Math.round((1 + (j * factor))*100)/100}; line height ${Math.round((1 + (j * factor))*100)/100}; line height ${Math.round((1 + (j * factor))*100)/100}; `;
newCoin.dataset.jsName = `lineHeight${Math.round((1 + (j * factor))*100)/100}`;
newCoin.style.left     = 0 + "px";
newCoin.dataset.left   = 0 + "px";
newCoin.style.top      = (j * 128) + "px";
newCoin.dataset.top    = (j * 128) + "px";
newCoin.style.width    = 256 + "px";
newCoin.dataset.width  = 256 + "px";
newCoin.style.height   = 128 + "px";
newCoin.dataset.height = 128 + "px";
newCoin.dataset.dragPull="div.style.lineHeight";
newCoin.dataset.coinTrip=Ts0;
}

/* letter spacing */

factor = 0.01;

for ( let j = 0; j < 48; j++) {
insertNewCoin(["",78,78,true,false,false]);
let newCoin = utilityLayer0.lastElementChild;
let radiusLocation = newCoin.lastElementChild;
radiusLocation.style.outline      = "4px dashed magenta";
radiusLocation.style.borderRadius = "0px";
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.backgroundColor="white";
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.paddingLeft=``;
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.letterSpacing=`${Math.round(((-0.05) + (j * factor))*100)/100}em`;
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.fontSize  =`32px`;
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.textAlign =`left`;
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.lineHeight =`1.1`;
newCoin.lastElementChild.lastElementChild.previousElementSibling.innerText       =`letter spacing ${Math.round(((-0.05) + (j * factor))*100)/100}; letter spacing ${Math.round(((-0.05) + (j * factor))*100)/100}; letter spacing ${Math.round(((-0.05) + (j * factor))*100)/100}; letter spacing ${Math.round(((-0.05) + (j * factor))*100)/100}; letter spacing ${Math.round(((-0.05) + (j * factor))*100)/100}; letter spacing ${Math.round(((-0.05) + (j * factor))*100)/100}; letter spacing ${Math.round(((-0.05) + (j * factor))*100)/100}; letter spacing ${Math.round(((-0.05) + (j * factor))*100)/100}; letter spacing ${Math.round(((-0.05) + (j * factor))*100)/100}; letter spacing ${Math.round(((-0.05) + (j * factor))*100)/100}; letter spacing ${Math.round(((-0.05) + (j * factor))*100)/100}; letter spacing ${Math.round(((-0.05) + (j * factor))*100)/100}; letter spacing ${Math.round(((-0.05) + (j * factor))*100)/100}; letter spacing ${Math.round(((-0.05) + (j * factor))*100)/100}; `;
newCoin.dataset.jsName = `letterSpacing${Math.round(((-0.05) + (j * factor))*100)/100}`;
newCoin.style.left     = 256 + "px";
newCoin.dataset.left   = 256 + "px";
newCoin.style.top      = (j * 128) + "px";
newCoin.dataset.top    = (j * 128) + "px";
newCoin.style.width    = 256 + "px";
newCoin.dataset.width  = 256 + "px";
newCoin.style.height   = 128 + "px";
newCoin.dataset.height = 128 + "px";
newCoin.dataset.dragPull="div.style.letterSpacing";
newCoin.dataset.coinTrip=Ts0;
}

/* word spacing */

factor = 0.01;

for ( let j = 0; j < 48; j++) {
insertNewCoin(["",78,78,true,false,false]);
let newCoin = utilityLayer0.lastElementChild;
let radiusLocation = newCoin.lastElementChild;
radiusLocation.style.outline      = "4px dashed magenta";
radiusLocation.style.borderRadius = "0px";
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.backgroundColor="white";
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.paddingLeft=``;
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.wordSpacing=`${Math.round(((-0.05) + (j * factor))*100)/100}em`;
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.fontSize  =`32px`;
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.textAlign =`left`;
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.lineHeight =`1.1`;
newCoin.lastElementChild.lastElementChild.previousElementSibling.innerText       =`word spacing ${Math.round(((-0.05) + (j * factor))*100)/100}; word spacing ${Math.round(((-0.05) + (j * factor))*100)/100}; word spacing ${Math.round(((-0.05) + (j * factor))*100)/100}; word spacing ${Math.round(((-0.05) + (j * factor))*100)/100}; word spacing ${Math.round(((-0.05) + (j * factor))*100)/100}; word spacing ${Math.round(((-0.05) + (j * factor))*100)/100}; word spacing ${Math.round(((-0.05) + (j * factor))*100)/100}; word spacing ${Math.round(((-0.05) + (j * factor))*100)/100}; word spacing ${Math.round(((-0.05) + (j * factor))*100)/100}; word spacing ${Math.round(((-0.05) + (j * factor))*100)/100}; word spacing ${Math.round(((-0.05) + (j * factor))*100)/100}; word spacing ${Math.round(((-0.05) + (j * factor))*100)/100}; word spacing ${Math.round(((-0.05) + (j * factor))*100)/100}; word spacing ${Math.round(((-0.05) + (j * factor))*100)/100}; `;
newCoin.dataset.jsName = `wordSpacing${Math.round(((-0.05) + (j * factor))*100)/100}`;
newCoin.style.left     = 512 + "px";
newCoin.dataset.left   = 512 + "px";
newCoin.style.top      = (j * 128) + "px";
newCoin.dataset.top    = (j * 128) + "px";
newCoin.style.width    = 256 + "px";
newCoin.dataset.width  = 256 + "px";
newCoin.style.height   = 128 + "px";
newCoin.dataset.height = 128 + "px";
newCoin.dataset.dragPull="div.style.wordSpacing";
newCoin.dataset.coinTrip=Ts0;
}

/* text indent */

factor = 0.1;

for ( let j = 0; j < 48; j++) {
insertNewCoin(["",78,78,true,false,false]);
let newCoin = utilityLayer0.lastElementChild;
let radiusLocation = newCoin.lastElementChild;
radiusLocation.style.outline      = "4px dashed magenta";
radiusLocation.style.borderRadius = "0px";
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.backgroundColor="white";
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.paddingLeft=``;
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.textIndent=`${Math.round(((0) + (j * factor))*100)/100}em`;
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.fontSize  =`32px`;
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.textAlign =`left`;
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.lineHeight =`1.1`;
newCoin.lastElementChild.lastElementChild.previousElementSibling.innerText       =`text indent ${Math.round(((0) + (j * factor))*100)/100}; text indent ${Math.round(((0) + (j * factor))*100)/100}; text indent ${Math.round(((0) + (j * factor))*100)/100}; text indent ${Math.round(((0) + (j * factor))*100)/100}; text indent ${Math.round(((0) + (j * factor))*100)/100}; text indent ${Math.round(((0) + (j * factor))*100)/100}; text indent ${Math.round(((0) + (j * factor))*100)/100}; text indent ${Math.round(((0) + (j * factor))*100)/100}; text indent ${Math.round(((0) + (j * factor))*100)/100}; text indent ${Math.round(((0) + (j * factor))*100)/100}; text indent ${Math.round(((0) + (j * factor))*100)/100}; text indent ${Math.round(((0) + (j * factor))*100)/100}; text indent ${Math.round(((0) + (j * factor))*100)/100}; text indent ${Math.round(((0) + (j * factor))*100)/100}; `;
newCoin.dataset.jsName = `textIndent${Math.round(((0) + (j * factor))*100)/100}`;
newCoin.style.left     = 768 + "px";
newCoin.dataset.left   = 768 + "px";
newCoin.style.top      = (j * 128) + "px";
newCoin.dataset.top    = (j * 128) + "px";
newCoin.style.width    = 256 + "px";
newCoin.dataset.width  = 256 + "px";
newCoin.style.height   = 128 + "px";
newCoin.dataset.height = 128 + "px";
newCoin.dataset.dragPull="div.style.textIndent";
newCoin.dataset.coinTrip=Ts0;
}

/* text shadow */

factor = 0.01;
let colourInput = "0,0,0";
let stacker = 384;
let indicationColour = "cyan";

for ( let k = 0; k < 8; k++) {
for ( let i = 0; i < 8; i++) {
for ( let j = 0; j < 3; j++) {
insertNewCoin(["",78,78,true,false,false]);
let newCoin = utilityLayer0.lastElementChild;
let radiusLocation = newCoin.lastElementChild;
radiusLocation.style.outline      = `4px dashed ${indicationColour}`;
radiusLocation.style.borderRadius = "0px";
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.backgroundColor="white";
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.paddingLeft=``;
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.textShadow=`${Math.round((0.01 + (j * factor))*100)/100}em ${Math.round((0.01 + (j * factor))*100)/100}em ${0.02 + (i * factor)}em rgba(${colourInput},${k * 0.1})`;
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.fontSize  =`32px`;
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.textAlign =`left`;
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.lineHeight =`1.1`;
newCoin.lastElementChild.lastElementChild.previousElementSibling.innerText       =`textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow, textShadow`;
newCoin.style.left     = 1024 + (256 * i) + "px";
newCoin.dataset.left   = 1024 + (256 * i) + "px";
newCoin.style.top      = (j * 128) + (k * stacker) + "px";
newCoin.dataset.top    = (j * 128) + (k * stacker) + "px";
newCoin.style.width    = 256 + "px";
newCoin.dataset.width  = 256 + "px";
newCoin.style.height   = 128 + "px";
newCoin.dataset.height = 128 + "px";
newCoin.dataset.dragPull="div.style.textShadow";
newCoin.dataset.coinTrip=Ts1;
}
}
if (indicationColour=="cyan") {indicationColour="yellow";} else { indicationColour="cyan";};
}

recoverColouration();
readCoins();

}


/*
div.style.color, color value ("#rrggbb" | "rgb()" | named)

div.style.font, shorthand
div.style.fontFamily, string
div.style.fontStyle, keyword ("normal" | "italic" | "oblique")
div.style.fontVariant, keyword ("normal" | "small-caps")
div.style.fontWeight, number | keyword (100–900 | "normal" | "bold")

div.style.textTransform, keyword ("none" | "uppercase" | "lowercase" | "capitalize")



div.style.textAlign, keyword ("left" | "right" | "center" | "justify")

div.style.direction, keyword ("ltr" | "rtl")
div.style.writingMode, keyword ("horizontal-tb" | "vertical-rl" | "vertical-lr" | "sideways-rl" | "sideways-lr")
div.style.whiteSpace, keyword ("normal" | "nowrap" | "pre" | "pre-wrap" | "pre-line" | "break-spaces")
div.style.wordBreak, keyword ("normal" | "break-word" | "break-all" | "keep-all")
div.style.overflowWrap, keyword ("normal" | "break-word")
div.style.lineBreak, keyword ("auto" | "strict" | "loose")
div.style.tabSize, number | px






div.style.textDecoration, shorthand
div.style.textDecorationLine, keyword ("none" | "underline" | "line-through" | "overline" | "blink")
div.style.textDecorationStyle, keyword ("solid" | "dotted" | "double" | "dashed" | "wavy")
div.style.textDecorationColor, color
div.style.textDecorationThickness, px | em | auto | from-font


*/
