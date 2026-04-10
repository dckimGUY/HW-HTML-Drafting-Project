// 1. BUZZ SYSTEM (Now using CSS Transitions for hardware acceleration)
let buzzRunning = false;
function buzzWord(method, text, fontSize, colour, delay, speed, chop, sweepTo, left, top, event, force) {
 if (!force && buzzRunning) return;
 buzzRunning = true;
 const repeats = 10;
 for (let j = 0; j < repeats; j++) {
 setTimeout(() => {
 buzz(method, text, fontSize, colour, delay, speed, chop, sweepTo, left, top, event);
 if (j === repeats - 1) buzzRunning = false;
 }, 5 * j);
 }
}
function buzz(method, text, fontSize, colour, delay, speed, chop, sweepTo, left, top, event) {
 if ((text == "x" && lastKey != "x") || (text == "p" && lastKey != "p")) return;
 let lefting = -window.scrollX;
 let topping = -window.scrollY;
 let origin = "center";
 if (left && top) {
 lefting = left - (window.innerWidth / 2) - window.scrollX;
 topping = top - (window.innerHeight / 2) - window.scrollY;
 } else if (event) {
 lefting = event.clientX - (window.innerWidth / 2);
 topping = event.clientY - (window.innerHeight / 2);
 }
 const origins = {
 "top left": "bottom right", "top right": "bottom left",
 "bottom left": "top right", "bottom right": "top left",
 "top": "bottom", "bottom": "top", "left": "right", "right": "left"
 };
 origin = origins[sweepTo] || "center";
 const buzzFeed = document.createElement("button");
 const op = visualOpacity / 2;
 buzzFeed.style = `
 pointer-events:none; user-select:none; background:transparent; border:0;
 font-family:dckimPixelMono; font-size:${fontSize * 0.75}px; color:${colour};
 position:fixed; width:100vw; height:100vh; z-index:999999999;
 left:${lefting}px; top:${topping}px; transform-origin:${origin};
 transition: transform ${speed}ms linear, opacity ${speed}ms linear;
 opacity: ${method === 1 ? 0 : op};
 transform: ${method === 1 ? 'scale(0)' : 'scale(1)'};
 `;
 buzzFeed.innerHTML = text;
 document.body.append(buzzFeed);
 requestAnimationFrame(() => {
 setTimeout(() => {
 if (method === 0) {
 buzzFeed.style.opacity = 0;
 buzzFeed.style.transform = `scaleX(0.1) scaleY(10) rotateZ(-360deg)`;
 } else if (method === 1) {
 buzzFeed.style.opacity = op;
 buzzFeed.style.transform = `scale(1)`;
 } else if (method === 2) {
 buzzFeed.style.opacity = 0;
 buzzFeed.style.transform = `scale(0)`;
 }
 }, delay || 1);
 });
 setTimeout(() => { buzzFeed.remove(); }, speed + (delay || 0) + 50);
}
// 2. HANDLE BUZZ (Consolidated logic and removed the switch-wall)
function handleBuzz() {
 const textColour = document.getElementById("coin72275").value;
 const msgs = {
 "1": "LEVEL 1 ", "2": "LEVEL 2 ", "3": "LEVEL 3 ", "4": "LEVEL 4 ", "5": "LEVEL 5 ",
 "6": "LEVEL 6 ", "7": "LEVEL 7 ", "8": "LEVEL 8 ", "9": "LEVEL 9 ", "0": "LEVEL 10",
 "!": "LEVEL 11", "@": "LEVEL 12", "#": "LEVEL 13", "$": "LEVEL 14", "%": "LEVEL 15",
 "^": "LEVEL 16", "&": "LEVEL 17", "*": "LEVEL 18", "(": "LEVEL 19", ")": "LEVEL 20",
 "s": `${topLayer.aa_project_name} SAVED`, "S": `${filename} SAVED`,
 "b": "break", "B": "combine", "q": "unwrap", "Q": "wrap",
 "a": "add right", "A": "add right wall", "D": "add duplicate",
 "i": "add left", "I": "add left wall", "o": "add below", "O": "add above",
 "w": "W window mode", "e": "E edge mode", "d": "D duplication mode",
 "g": "G move mode", "G": "G move mode", "t": "T colour mode", "T": "T colour mode"
 };
 const message = msgs[lastKey];
 if (!message) return;
 const midX = window.scrollX + (window.innerWidth / 2);
 let bL = midX, bT = window.scrollY + 32, bM = 2, bO = "top", bD = 1000, bS = 400, bC = 100;
 if (lastKey === "s" || lastKey === "S") {
 bL = window.innerWidth / 2; bT = 32; bM = 1; bO = "center"; bD = 400; bS = 200; bC = 25;
 } else if ("bBqQaADiIoO".includes(lastKey)) {
 bT = window.scrollY + window.innerHeight - 32;
 } else if ("wedgtGmT".includes(lastKey)) {
 bT = window.scrollY + window.innerHeight - 32; bO = "bottom";
 }
 redraw();
 buzzWord(bM, message, 64, textColour, bD, bS, bC, bO, bL, bT);
}
