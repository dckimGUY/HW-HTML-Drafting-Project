ui.furyListItem.click            = function() { furyInsert("listItem");      };
ui.furyOrderedList.click         = function() { furyInsert("orderedList");   };
ui.furyUnorderedList.click       = function() { furyInsert("unorderedList"); };

ui.furyWrapArticle.click         = function() {  };
ui.furyWrapSection.click         = function() {};

ui.furyInputParagraph.click      = function() { furyInsert("paragraph");  };
ui.furyInputHeading1.click       = function() { furyInsert("heading1");   };
ui.furyInputHeading2.click       = function() { furyInsert("heading2");   };
ui.furyInputHeading3.click       = function() { furyInsert("heading3");   };
ui.furyInputBlockquote.click     = function() { furyInsert("blockquote"); };

ui.furyGlobb.click               = function() { toggleGlobb(); };





function furyInsert(type) {

if (hauptMode==1) {
hauptMode=0;
insertNewCoin(['',78,78]);
hauptMode=1;
} else {
insertNewCoin(['',78,78]);
}

let colour = "cyan", height = "250px";
let tag    = "p";
let inner  =  "";

switch (type) {
case "listItem":      colour = "rgba(  0, 100,   0, 0.5)"; height = "150px"; tag = "li";         inner = ' contenteditable="true">';        break;
case "orderedList":   colour = "rgba(  0, 100,   0, 0.5)"; height = "250px"; tag = "ol";         inner = ' contenteditable="true"><li contenteditable="true">item1</li><li contenteditable="true">item2</li>'; break;
case "unorderedList": colour = "rgba(  0, 100,   0, 0.5)"; height = "250px"; tag = "ul";         inner = ' contenteditable="true"><li contenteditable="true">item1</li><li contenteditable="true">item2</li>'; break;
case "paragraph":     colour = "rgba(  0, 128, 128, 0.5)"; height = "500px"; tag = "p" ;         inner = ' contenteditable="true">';         break;
case "heading1":      colour = "rgba( 75,   0, 130, 0.5)"; height = "150px"; tag = "h1";         inner = ' contenteditable="true">';         break;
case "heading2":      colour = "rgba(128,   0,   0, 0.5)"; height = "150px"; tag = "h2";         inner = ' contenteditable="true">';         break;
case "heading3":      colour = "rgba(220,  20,  60, 0.5)"; height = "150px"; tag = "h3";         inner = ' contenteditable="true">';         break;
case "blockquote":    colour = "rgba( 65, 105, 225, 0.5)"; height = "250px"; tag = "blockquote"; inner = ' contenteditable="true">'; break;
}

utilityLayer0.lastElementChild.style.top      = window.scrollY + "px";
utilityLayer0.lastElementChild.dataset.top    = window.scrollY + "px";
utilityLayer0.lastElementChild.style.left     = window.scrollX + "px";
utilityLayer0.lastElementChild.dataset.left   = window.scrollX + "px";
utilityLayer0.lastElementChild.style.width    =  "750px";
utilityLayer0.lastElementChild.dataset.width  =  "750px";
utilityLayer0.lastElementChild.style.height   =   height;
utilityLayer0.lastElementChild.dataset.height =   height;
utilityLayer0.lastElementChild.lastElementChild.firstElementChild.innerHTML = `<${tag} style="margin: 0px; border: 0px; padding: 0px; width: 100%; height: calc(100% - 32px); outline-offset: -3px; outline: 3px dashed ${colour};"${inner}</${tag}>`;
utilityLayer0.lastElementChild.lastElementChild.firstElementChild.style.fontSize = "32px";

utilityLayer0.lastElementChild.lastElementChild.firstElementChild.style.backgroundColor = colour;
utilityLayer0.lastElementChild.anchor.style.zIndex = "0";
utilityLayer0.lastElementChild.lastElementChild.firstElementChild.style.padding     = "16px";
utilityLayer0.lastElementChild.lastElementChild.firstElementChild.style.paddingLeft = "100px";
utilityLayer0.lastElementChild.lastElementChild.style.outlineOffset = "-4px";
utilityLayer0.lastElementChild.dataset.fury = type;
utilityLayer0.lastElementChild.id = utilityLayer0.lastElementChild.id.replace("coin", type);
utilityLayer0.lastElementChild.anchor.style.borderRadius  = "24px";
utilityLayer0.lastElementChild.lastElementChild.style.borderRadius  = "24px";
utilityLayer0.lastElementChild.lastElementChild.firstElementChild.style.borderRadius  = "24px";
utilityLayer0.lastElementChild.style.borderRadius  = "24px";
utilityLayer0.lastElementChild.lastElementChild.style.borderRadius  = "16px";
utilityLayer0.lastElementChild.lastElementChild.style.outlineOffset = `-12px`;
utilityLayer0.lastElementChild.lastElementChild.style.outline = `12px double ${colour}`;
utilityLayer0.lastElementChild.lastElementChild.firstElementChild.style.color = `black`;
}











