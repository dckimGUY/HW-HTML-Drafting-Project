/* Initialize the visualizations canvas element. */
const Liv = document.createElement("canvas");
{
 const s = `position:fixed;left:0;top:0;pointer-events:none;border:none;`;
 Liv.style = s;
 Liv.style.opacity = 1;
 Liv.style.zIndex = 999999999;
}
document.getElementById("interfaceShelf").appendChild(Liv);
// 1. Set dimensions once or only on window resize
Liv.width = window.innerWidth;
Liv.height = window.innerHeight;
function drawLiv() {
 const ctx = Liv.getContext("2d");
 // 2. Simple Display Toggle
 const hasChildren = utilityLayer0.children.length > 0;
 Liv.style.display = (hasChildren && coinFocus) ? "block" : "none";
 if (!hasChildren || !coinFocus) {
 ctx.clearRect(0, 0, Liv.width, Liv.height);
 return;
 }
 // 3. Cache Window Dimensions (Avoid constant property lookups)
 const vW = window.innerWidth;
 const vH = window.innerHeight;
 if (vW > 3500 || vH > 3500) { Liv.width = 0; return; }
 // 4. Update width/height ONLY if window actually changed (massive performance win)
 if (Liv.width !== vW || Liv.height !== vH) {
 Liv.width = vW;
 Liv.height = vH;
 } else {
 ctx.clearRect(0, 0, vW, vH);
 }
 // 5. Use cached numeric values from coinFocus if possible, otherwise parseInt once
 const s = coinFocus.style;
 const scale = parseFloat(coinFocus.dataset.scale) || 1;
 const l = parseInt(s.left) - window.scrollX;
 const t = parseInt(s.top) - window.scrollY;
 const w = parseInt(s.width) * scale;
 const h = parseInt(s.height) * scale;
 // 6. Draw the highlight
 ctx.fillStyle = "rgba(127,127,127,0.15)";
 const offset = thinOutline + 1;
 ctx.fillRect(l + offset, t + offset, w - (offset * 2), h - (offset * 2));
}
