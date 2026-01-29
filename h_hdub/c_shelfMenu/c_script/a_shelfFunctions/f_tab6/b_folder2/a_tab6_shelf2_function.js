


function prepareSiteMap() {
const wrapper = document.createElement("div");
      wrapper.id = "siteMapWrapper";
const canvas  = document.createElement("canvas");
      canvas.id = "siteMapCanvas";
      canvas.width  = 47 *  12;
      canvas.height = 91 *  12;
      canvas.classList = "siteMapInners";
     wrapper.classList = "siteMap";
     wrapper.style.transformOrigin = "top left";
     wrapper.style.transform = "scale(0.334)";
wrapper.appendChild(canvas);
ui.folder62.ref.append(wrapper);
}
prepareSiteMap();



function zoomSiteMapOut() {
const canvas  = document.getElementById("siteMapCanvas");
const wrapper = document.getElementById("siteMapWrapper");
switch  (canvas.width / 47) {
case  2: canvas.width = 47 *  3; canvas.height = 91 *  3; wrapper.style.transform = "scale(1.335)"; break;
case  3: canvas.width = 47 *  4; canvas.height = 91 *  4; wrapper.style.transform = "scale(1.000)"; break;
case  4: canvas.width = 47 *  5; canvas.height = 91 *  5; wrapper.style.transform = "scale(0.800)"; break;
case  5: canvas.width = 47 *  6; canvas.height = 91 *  6; wrapper.style.transform = "scale(0.670)"; break;
case  6: canvas.width = 47 *  7; canvas.height = 91 *  7; wrapper.style.transform = "scale(0.573)"; break;
case  7: canvas.width = 47 *  8; canvas.height = 91 *  8; wrapper.style.transform = "scale(0.500)"; break;
case  8: canvas.width = 47 *  9; canvas.height = 91 *  9; wrapper.style.transform = "scale(0.445)"; break;
case  9: canvas.width = 47 * 10; canvas.height = 91 * 10; wrapper.style.transform = "scale(0.400)"; break;
case 10: canvas.width = 47 * 11; canvas.height = 91 * 11; wrapper.style.transform = "scale(0.365)"; break;
case 11: canvas.width = 47 * 12; canvas.height = 91 * 12; wrapper.style.transform = "scale(0.334)"; break;
case 12:                                                                                            break;
}
localStorage.setItem("viewFinderCanvasWidth",  canvas.width);
localStorage.setItem("viewFinderCanvasHeight", canvas.height);
}





function zoomSiteMapIn() {
const canvas  = document.getElementById("siteMapCanvas");
const wrapper = document.getElementById("siteMapWrapper");
switch  (canvas.width / 47) {
case  2:                                                                                            break;
case  3: canvas.width = 47 *  2; canvas.height = 91 *  2; wrapper.style.transform = "scale(2.000)"; break;
case  4: canvas.width = 47 *  3; canvas.height = 91 *  3; wrapper.style.transform = "scale(1.335)"; break;
case  5: canvas.width = 47 *  4; canvas.height = 91 *  4; wrapper.style.transform = "scale(1.000)"; break;
case  6: canvas.width = 47 *  5; canvas.height = 91 *  5; wrapper.style.transform = "scale(0.800)"; break;
case  7: canvas.width = 47 *  6; canvas.height = 91 *  6; wrapper.style.transform = "scale(0.670)"; break;
case  8: canvas.width = 47 *  7; canvas.height = 91 *  7; wrapper.style.transform = "scale(0.573)"; break;
case  9: canvas.width = 47 *  8; canvas.height = 91 *  8; wrapper.style.transform = "scale(0.500)"; break;
case 10: canvas.width = 47 *  9; canvas.height = 91 *  9; wrapper.style.transform = "scale(0.445)"; break;
case 11: canvas.width = 47 * 10; canvas.height = 91 * 10; wrapper.style.transform = "scale(0.400)"; break;
case 12: canvas.width = 47 * 11; canvas.height = 91 * 11; wrapper.style.transform = "scale(0.365)"; break;
}
localStorage.setItem("viewFinderCanvasWidth",  canvas.width);
localStorage.setItem("viewFinderCanvasHeight", canvas.height);
}



if (localStorage.getItem("viewFinderCanvasWidth") &&
    localStorage.getItem("viewFinderCanvasHeight")) {
const canvas  = document.getElementById("siteMapCanvas");
canvas.width  = localStorage.getItem("viewFinderCanvasWidth");
canvas.height = localStorage.getItem("viewFinderCanvasHeight");
zoomSiteMapOut();
zoomSiteMapIn();
drawSiteMap();
}














function drawSiteMap() {
const downsize = 16;
const canvas = document.getElementById("siteMapCanvas");
const ctx = canvas.getContext("2d");
const bg = document.getElementById("coin46861").value;
ctx.fillStyle = bg;
ctx.fillRect(0,0,canvas.width,canvas.height);
ctx.lineWidth = 2;
ctx.beginPath();
ctx.strokeStyle = document.getElementById("coin32259").value + "33";
const numberValue = document.getElementById("coin23538").value;
for (let j = 0; j <= parseInt(canvas.width * downsize / numberValue) + 1; j++) {
ctx.moveTo(((numberValue * j) - (window.pageXOffset % numberValue)) / downsize, 0);
ctx.lineTo(((numberValue * j) - (window.pageXOffset % numberValue)) / downsize, canvas.height);
}
for (let j = 0; j <= parseInt(canvas.height * downsize / numberValue) + 1; j++) {
ctx.moveTo(0,            ((numberValue * j) - (window.pageYOffset % numberValue)) / downsize);
ctx.lineTo(canvas.width, ((numberValue * j) - (window.pageYOffset % numberValue)) / downsize);
}
ctx.stroke();
for (let j = 0; j < utilityLayer0.children.length; j++) {
const left   = Math.floor((parseInt(utilityLayer0.children[j].style.left  ) - window.scrollX) / downsize);
const top    = Math.floor((parseInt(utilityLayer0.children[j].style.top   ) - window.scrollY) / downsize);
const width  = Math.floor(parseInt(utilityLayer0.children[j].style.width ) / downsize);
const height = Math.floor(parseInt(utilityLayer0.children[j].style.height) / downsize);
ctx.lineWidth = 2;
       if (utilityLayer0.children[j].dataset.coinTrip == "?") {
ctx.strokeStyle = blueColour;
} else if (utilityLayer0.children[j].dataset.coinTrip == "0") {
ctx.strokeStyle = greyColour;
} else if (utilityLayer0.children[j].dataset.coinTrip == "1") {
ctx.strokeStyle = pinkColour;
}
ctx.strokeRect(left + 1,top + 1,width - 2,height - 2);
}
const windowWidth = Math.floor(window.innerWidth / downsize);
const windowHeight = Math.floor(window.innerHeight / downsize);
ctx.fillStyle = "rgba(127,127,127,0.25)";
ctx.fillRect(1,1,windowWidth - 2,windowHeight - 2);
}
setTimeout(() => { drawSiteMap(); }, 500);



