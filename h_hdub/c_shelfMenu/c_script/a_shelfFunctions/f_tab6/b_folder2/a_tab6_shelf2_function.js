function prepareSiteMap() {
const wrapper = document.createElement("div");
const canvas  = document.createElement("canvas");
      canvas.id = "siteMapCanvas";
      canvas.width  = 376;
      canvas.height = 728;
      canvas.classList = "siteMapInners";
     wrapper.classList = "siteMap";
     wrapper.style.transformOrigin = "top left";
     wrapper.style.transform = "scale(0.5)";
wrapper.appendChild(canvas);
ui.folder62.ref.append(wrapper);
}

prepareSiteMap();




function drawSiteMap() {
const downsize = 16;
const canvas = document.getElementById("siteMapCanvas");
const ctx = canvas.getContext("2d");

const bg = document.getElementById("coin46861").value;
ctx.fillStyle = bg;
ctx.fillRect(0,0,canvas.width,canvas.height);
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



