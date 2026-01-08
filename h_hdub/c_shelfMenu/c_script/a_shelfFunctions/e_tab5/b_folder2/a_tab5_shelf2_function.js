

ui.furyLeftMargin.click          = function() { drawFury(true); };

ui.furyInputArticle.click        = function() { furyInsert("article");    };
ui.furyInputParagraph.click      = function() { furyInsert("paragraph");  };
ui.furyInputSentence.click       = function() { furyInsert("sentence");   };
ui.furyInputHeading1.click       = function() { furyInsert("heading1");   };
ui.furyInputHeading2.click       = function() { furyInsert("heading2");   };
ui.furyInputHeading3.click       = function() { furyInsert("heading3");   };
ui.furyInputBlockquote.click     = function() { furyInsert("blockquote"); };

ui.furyRulesInfo.input           = function() {  };

ui.furyBreakArticle.click        = function() { furyBreak(); };
ui.furyBreakParagraph.click      = function() { furyBreak(); };
ui.furyGlobb.click               = function() { globber(); };










function furyBreak() {
if (coinFocus != null && (coinFocus.dataset.fury == "article" || coinFocus.dataset.fury == "paragraph")) {



console.log(coinFocus.dataset.fury);


}
}

























function globber() {
reflowGlobal(rev,0);
const paragraph            = {};
      paragraph.content    = "";
      paragraph.top        =  0;
const article              = {};
      article.content      = "";
      article.top          =  0;
let hasSentences  = false;
let hasParagraphs = false;

for (let j = 0; j < utilityLayer0.children.length; j++) {
if (utilityLayer0.children[j].dataset.fury == ("sentence" || "header1" || "header2" || "header3" || "blockquote")) {
if (parseInt(utilityLayer0.children[j].style.left) <= 90) {
hasSentences = true;
}
}
}

for (let j = 0; j < utilityLayer0.children.length; j++) {
if (utilityLayer0.children[j].dataset.fury == ("paragraph")) {
if (parseInt(utilityLayer0.children[j].style.left) <= 90) {
hasParagraphs = true;
}
}
}





if (hasSentences) {

for (let j = 0; j < utilityLayer0.children.length; j++) {

if (utilityLayer0.children[j].dataset.fury == ("sentence" || "header1" || "header2" || "header3" || "blockquote")) {

if (paragraph.content == "") {
paragraph.top = utilityLayer0.children[j].style.top;
}

let openTag  = "<p>";
let closeTag = "</p>";
switch (utilityLayer0.children[j].dataset.fury) {
case "sentence":   openTag = ""; closeTag = ""; break;
case "header1":    openTag = "<h1>"; closeTag = "</h1>"; break;
case "header2":    openTag = "<h2>"; closeTag = "</h2>"; break;
case "header3":    openTag = "<h3>"; closeTag = "</h3>"; break;
case "blockquote": openTag = "<blockquote>"; closeTag = "</blockquote>"; break;

paragraph.content += openTag + utilityLayer0.children[j].div.firstElementChild.value + closeTag + "\n";

}



} else if (utilityLayer0.children[j].dataset.fury == "paragraph" || utilityLayer0.children[j].dataset.fury == "article") {

if (paragraph.content != "") {
furyInsert("paragraph");
utilityLayer0.lastElementChild.div.firstChild.innerText = paragraph.content;
utilityLayer0.lastElementChild.style.top = paragraph.top;
paragraph.content = "";
}


}


}




} else if (hasParagraphs) {







}










}

















function drawFury(toggle){
if (hdubDemo.style.opacity == 1 && toggle) {
hdubDemo.style.opacity = 0;
} else {
hdubDemo.style.opacity = 1;
}
hdubDemo.width  = window.innerWidth;
hdubDemo.height = window.innerHeight;
let ctx = hdubDemo.getContext("2d");
ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
ctx.fillStyle = "rgba(127, 255, 212,0.35)";
ctx.fillRect(0,0,75,window.innerHeight);
ctx.fillStyle = "rgba(255, 255, 255,1)";
ctx.fillRect(65,0,5,window.innerHeight);
ctx.fillStyle = "rgba(255,   0,   0,1)";
ctx.fillRect(60,0,5,window.innerHeight);
ctx.fillStyle = "rgba(  0, 255,   0,1)";
ctx.fillRect(75,0,15,window.innerHeight);
}
window.addEventListener("resize",()=>{
if (ui.folder52.ref.style.display == "block" &&
    ui.tab5Wrapper.ref.style.display  == "block") {
drawFury();
}
});



window.addEventListener("scroll",()=>{
if (ui.folder52.ref.style.display == "block" &&
    ui.tab5Wrapper.ref.style.display  == "block") {
window.scrollTo(0, window.scrollY);
}
});









function furyInsert(type) {

if (hauptMode==1) {
hauptMode=0;
insertNewCoin([null,78,78,false,false,false]);
hauptMode=1;
} else {
insertNewCoin([null,78,78,false,false,false]);
}

let colour = "cyan", height = "250px";

switch (type) {
case "article":    colour =  "rgba(  0, 100,   0, 0.5)"; height = "750px"; break;
case "paragraph":  colour =  "rgba(  0, 128, 128, 0.5)"; height = "500px"; break;
case "sentence":   colour =  "rgba(154, 205,  50, 0.5)"; height = "250px"; break;
case "heading1":   colour =  "rgba( 75,   0, 130, 0.5)"; height = "150px"; break;
case "heading2":   colour =  "rgba(128,   0,   0, 0.5)"; height = "150px"; break;
case "heading3":   colour =  "rgba(220,  20,  60, 0.5)"; height = "150px"; break;
case "blockquote": colour =  "rgba( 65, 105, 225, 0.5)"; height = "250px"; break;
}

utilityLayer0.lastElementChild.style.top      = window.scrollY + "px";
utilityLayer0.lastElementChild.dataset.top    = window.scrollY + "px";
utilityLayer0.lastElementChild.style.left     = window.scrollX + 360 + "px";
utilityLayer0.lastElementChild.dataset.left   = window.scrollX + 360 + "px";
utilityLayer0.lastElementChild.style.width    =  "750px";
utilityLayer0.lastElementChild.dataset.width  =  "750px";
utilityLayer0.lastElementChild.style.height   =   height;
utilityLayer0.lastElementChild.dataset.height =   height;
utilityLayer0.lastElementChild.div.style.backgroundColor = colour;
utilityLayer0.lastElementChild.div.innerHTML = `<textarea style="width: 100%; height: calc(100% - 48px); background-color: rgba(255,255,255,0.35); resize: none; font-size: 32px; outline: 6px solid ${colour}; border-top-left-radius: 4px; border-bottom-left-radius: 4px;" oninput="this.innerText = this.value;"></textarea>`;
utilityLayer0.lastElementChild.anchor.style.zIndex = "0";
utilityLayer0.lastElementChild.div.style.padding     = "16px";
utilityLayer0.lastElementChild.div.style.paddingLeft = "100px";
utilityLayer0.lastElementChild.lastElementChild.style.outlineOffset = "-4px";
utilityLayer0.lastElementChild.div.style.fontSize = "32px";
utilityLayer0.lastElementChild.dataset.fury = type;
utilityLayer0.lastElementChild.id = utilityLayer0.lastElementChild.id.replace("coin", type);
utilityLayer0.lastElementChild.anchor.style.borderRadius  = "24px";
utilityLayer0.lastElementChild.main.style.borderRadius  = "24px";
utilityLayer0.lastElementChild.div.style.borderRadius  = "24px";
utilityLayer0.lastElementChild.style.borderRadius  = "24px";
utilityLayer0.lastElementChild.lastElementChild.style.borderRadius  = "16px";
utilityLayer0.lastElementChild.lastElementChild.style.outlineOffset = `-12px`;
utilityLayer0.lastElementChild.lastElementChild.style.outline = `12px double ${colour}`;
utilityLayer0.lastElementChild.div.style.color = `${colour}`;
utilityLayer0.lastElementChild.main.innerHTML += `<span style="position: absolute; bottom: 8px; right: 16px; font-family: monospace; font-size: 32px; font-weight: bold; color: rgb(127,127.127) + ')'};">${type.toUpperCase()}</span>`;

}











