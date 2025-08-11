function saveWithHeaderFooter(rename,phpSub) {
spaceViewOn();
removePointerEventsNone();

if (rename==0&&filename!=defaultFilename) {
} else {
let result = prompt("enter filename, a good format is to use three numbers first (beginning with 100), this will keep organization. Example '100_projectCode.sectionName'. No need to put the extension.", filename);
if (result!=null) {
filename = result;
filename = filename.replace(/ /g, '-');
document.getElementById("documentTitle").innerText = filename;
}
}


let phpPaths = [];

let fileContents = fileSaveHeader.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');


for (let j = 0; j < utilityLayer0.children.length; j++) {
if (utilityLayer0.children[j].dataset.fileInclude&&utilityLayer0.children[j].dataset.fileInclude!=""&&utilityLayer0.children[j].dataset.fileInclude!="undefined"&&phpSub) {
const swap = utilityLayer0.children[j].lastElementChild.firstElementChild.nextElementSibling.innerHTML;
const filepath = utilityLayer0.children[j].dataset.fileInclude.split("@")[0].split(".")[0];

phpPaths[phpPaths.length] = '_' + filename + '["_' + filepath + '"]    =   _' + filepath + ';' ;

utilityLayer0.children[j].lastElementChild.firstElementChild.nextElementSibling.innerText = `phpStart include "./a_include/${filepath}.${utilityLayer0.children[j].dataset.fileInclude.split(".")[utilityLayer0.children[j].dataset.fileInclude.split(".").length - 1]}"; phpEnd`;
fileContents += utilityLayer0.children[j].outerHTML;
utilityLayer0.children[j].lastElementChild.firstElementChild.nextElementSibling.innerHTML = swap;
} else {
fileContents += utilityLayer0.children[j].outerHTML;
}
fileContents += '\n\n';
};


fileContents += fileSaveFooter.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');


fileContents = fileContents.replace("phpStart", '<?php');
fileContents = fileContents.replace("phpEnd", '?>');


saveHTMLparticle(rename, fileContents, false, false, phpSub);


restorePointerEventsNone();
spaceViewOff();
Z();


}
