const arrayTemplateInput = [

["fontStyle","normal"],
["fontStyle","italic"],
["fontStyle","oblique"],

["fontVariant","normal"],
["fontVariant","small-caps"],
["fontVariant","normal"],
["fontVariant","bold"],

["textTransform","none"],
["textTransform","uppercase"],
["textTransform","lowercase"],
["textTransform","capitalize"],

["writingMode","horizontal-tb"],
["writingMode","vertical-rl"],
["writingMode","vertical-lr"],
["writingMode","sideways-rl"],
["writingMode","sideways-lr"],

["whiteSpace","normal"],
["whiteSpace","nowrap"],
["whiteSpace","pre"],
["whiteSpace","pre-wrap"],
["whiteSpace","pre-line"],
["whiteSpace","break-spaces"],

["wordBreak","normal"],
["wordBreak","break-word"],
["wordBreak","break-all"],
["wordBreak","keep-all"],

["overflowWrap","normal"],
["overflowWrap","break-word"],

["lineBreak","auto"],
["lineBreak","strict"],
["lineBreak","loose"],

["textDecorationLine","none"],
["textDecorationLine","underline"],
["textDecorationLine","line-through"],
["textDecorationLine","overline"],
["textDecorationLine","blink"],
["textDecorationStyle","solid"],
["textDecorationStyle","dotted"],
["textDecorationStyle","double"],
["textDecorationStyle","dashed"],
["textDecorationStyle","wavy"],

["fontFamily","Arial"],
["fontFamily","Helvetica"],
["fontFamily","Verdana"],
["fontFamily","Tahoma"],
["fontFamily","Trebuchet MS"],
["fontFamily","Times New Roman"],
["fontFamily","Georgia"],
["fontFamily","Garamond"],
["fontFamily","Courier New"],
["fontFamily","Lucida Console"],
["fontFamily","Lucida Sans Unicode"],
["fontFamily","Palatino Linotype"],
["fontFamily","Book Antiqua"],
["fontFamily","Impact"],
["fontFamily","Comic Sans MS"],
["fontFamily","Century Gothic"],
["fontFamily","Calibri"],
["fontFamily","Cambria"],
["fontFamily","Candara"],
["fontFamily","Consolas"],
["fontFamily","Franklin Gothic Medium"],
["fontFamily","Gill Sans"],
["fontFamily","Segoe UI"],
["fontFamily","Optima"],
["fontFamily","Futura"],
["fontFamily","Geneva"],
["fontFamily","Baskerville"],
["fontFamily","Droid Sans"],
["fontFamily","Droid Serif"],
["fontFamily","Roboto"],
["fontFamily","Noto Sans"],
["fontFamily","Noto Serif"],
["fontFamily","Liberation Sans"],
["fontFamily","Liberation Serif"],
["fontFamily","Ubuntu"],
["fontFamily","sans-serif"],
["fontFamily","serif"],
["fontFamily","monospace"],

["direction","ltr"],
["direction","rtl"]
];

function insertSingleTemplates(singleTemplatesArray) {

hauptMode=0;
curFocus=1;
Cur.style.left   = "0px";
Cur.style.top    = "0px";
Cur.dataset.left = "0px";
Cur.dataset.top  = "0px";

/* Dotting the box. */

arrayTemplateInput.forEach((array) => {
insertNewCoin(["",78,78,false,false,false]);
let newCoin = utilityLayer0.lastElementChild;
let radiusLocation = newCoin.lastElementChild;
radiusLocation.style.outline      = "4px dashed grey";
radiusLocation.style.borderRadius = "0px";
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.backgroundColor="lightgrey";
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.fontSize  =`32px`;
newCoin.lastElementChild.lastElementChild.previousElementSibling.style.textAlign =`center`;
newCoin.lastElementChild.lastElementChild.previousElementSibling.style[array[0]] =array[1];
newCoin.lastElementChild.lastElementChild.previousElementSibling.innerText       =`div.style.${array[0]}="${array[1]}";`;
newCoin.style.left     = 0 + "px";
newCoin.dataset.left   = 0 + "px";
newCoin.style.top      = 0 + "px";
newCoin.dataset.top    = 0 + "px";
newCoin.style.width    = 768 + "px";
newCoin.dataset.width  = 768 + "px";
newCoin.style.height   = 96 + "px";
newCoin.dataset.height = 96 + "px";
newCoin.dataset.dragPull=`div.style.${array[0]}`;
newCoin.dataset.coinTrip=Ts0;
});


recoverColouration();
readCoins();

}

/*

div.style.textDecorationColor, color
div.style.textDecorationThickness, px | em | auto | from-font

*/
