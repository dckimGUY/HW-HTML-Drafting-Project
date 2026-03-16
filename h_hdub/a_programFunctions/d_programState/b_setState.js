/*** A FUNCTION TO SET THE STATE ***/
function setState (quotedStateName,frameNumber) {


try {
const style = [ "top", "left" ];
let index   =        0; if (frameNumber) { index = frameNumber; }
let ids     =  stateHolder[index].ids;

for (let d of ids) {
try { if (d == mousedown.target.id) continue; } catch { }
const target = document.getElementById(d);

/*
try {
const value  = stateHolder[index].dat[d].classList;
target.lastElementChild.lastElementChild.previousElementSibling.classList = value;
} catch { }
*/

for (y of style) {
 try {
const value  = stateHolder[index].dat[d].style[y];

target.style[y]   = value;
target.dataset[y] = value;

} catch {  }
} }
redraw();
return 0;
} catch {
return 1;
}
}
