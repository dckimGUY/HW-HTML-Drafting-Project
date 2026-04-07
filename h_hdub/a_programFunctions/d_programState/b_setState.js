/*** A FUNCTION TO SET THE STATE ***/
function setState (quotedStateName,frameNumber) {
try {
let style = [ "filter", "scale", "top", "left", "width", "height", "transform", "transformOrigin", "opacity", "outline", "outlineOffset", "borderRadius", "boxShadow", "backgroundColor", "backgroundSize", "padding", "color", "textShadow", "fontSize", "fontWeight", "fontStyle", "fontVariant", "fontFamily", "textAlign", "wordSpacing", "letterSpacing", "lineHeight", "textIndent" ];
const styleFirst    = [ "backdrop-filter", "filter", "top", "left", "width", "height", "zIndex" ];
const styleLast     = [ "transform", "transformOrigin", "scale", "opacity", "outline", "outlineOffset", "borderRadius", "boxShadow" ];
const styleLastLast = [ "backgroundColor", "backgroundSize", "padding", "color", "textShadow", "fontSize", "fontWeight", "fontStyle", "fontVariant", "fontFamily", "textAlign", "wordSpacing", "letterSpacing", "lineHeight", "textIndent" ];

let index   =        0; if (frameNumber) { index = frameNumber; }
let ids     =  stateHolder[index].ids;

for (let d of ids) {
try { if (d == mousedown.target.id) continue; } catch { }
const target = document.getElementById(d);
for (y of style) {
 try {
const value  = stateHolder[index].dat[d].style[y];
for (r of styleFirst   ) { if (y == r ) { target.style[y] = value; } }
for (r of styleLast    ) { if (y == r ) { target.lastElementChild.style[y] = value; } }
for (r of styleLastLast) { if (y == r ) { target.lastElementChild.firstElementChild.style[y] = value; } }
if (y == "transform") { target.firstElementChild.style[y] = value; }
} catch {  }
}
}
for (let j = 0; j < utilityLayer0.children.length; j++) {
utilityLayer0.children[j].dataset.left   = utilityLayer0.children[j].style.left  ;
utilityLayer0.children[j].dataset.top    = utilityLayer0.children[j].style.top   ;
utilityLayer0.children[j].dataset.width  = utilityLayer0.children[j].style.width ;
utilityLayer0.children[j].dataset.height = utilityLayer0.children[j].style.height;
utilityLayer0.children[j].dataset.scale  = utilityLayer0.children[j].style.scale;
}
redraw();
return 0;
} catch {
return 1;
}
}