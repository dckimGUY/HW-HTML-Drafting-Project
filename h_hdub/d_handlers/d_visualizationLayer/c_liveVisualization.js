/* Initialize the visualizations canvas element. */
const Liv=document.createElement("canvas");
{
const s=`position:fixed;left:0;top:0;pointer-events:none; border:none;`;
Liv.style=s;
Liv.style.opacity=1; //formerly K
Liv.style.zIndex = 999999999;
}
document.getElementById("interfaceShelf").appendChild(Liv);
Liv.width=window.innerWidth;
Liv.height=window.innerHeight;

function drawLiv(){
let ctx=Liv.getContext("2d");
ctx.clearRect(0,0,Liv.width,Liv.height);
if (utilityLayer0.children.length == 0) {
Liv.style.display = "none";
} else {
Liv.style.display = "block";
}
if (coinFocus == null) return;
if (window.innerWidth  > 3500) { Liv.width  = 0; return 0; }
if (window.innerHeight > 3500) { Liv.height = 0; return 0; }
Liv.width=window.innerWidth;
Liv.height=window.innerHeight;
l = parseInt(coinFocus.style.left) - window.scrollX;
t = parseInt(coinFocus.style.top)  - window.scrollY;
w = parseInt(coinFocus.style.width) * parseFloat(coinFocus.dataset.scale);
h = parseInt(coinFocus.style.height) * parseFloat(coinFocus.dataset.scale);
ctx.fillStyle   = "rgba(127,127,127,0.15)";
ctx.fillRect(l+thinOutline + 1,t+thinOutline + 1,w-(thinOutline + 1) * 2,h-(thinOutline + 1) * 2);
};
