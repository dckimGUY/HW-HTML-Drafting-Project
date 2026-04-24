async function saveHTMLparticle(rename, fileInputString, codePrep, js, phpSub, event) {

let fileExtension = ".html";
if (event && event.ctrlKey) { fileExtension = ".txt"; };

const numberOfElements = utilityLayer0.children.length;

const date       =    new Date()                                      ;
const year       =    date.getFullYear()                              ;
const month      =    date.getMonth().toString().padStart(2,"0")      ;
const day        =    date.getDate().toString().padStart(2,"0")       ;
const hour       =    date.getHours().toString().padStart(2,"0")      ;
const minute     =    date.getMinutes().toString().padStart(2,"0")    ;
const second     =    date.getSeconds().toString().padStart(2,"0")    ;

const dateSuffix =    `${year}-${month}-${day}-T${hour}-${minute}-${second}`

let filesave = "";

for (let j = 0; j < utilityLayer0.children.length; j++) {
filesave += utilityLayer0.children[j].outerHTML + "\n\n";
}

if (fileInputString) { filesave = fileInputString; }

const blob = new Blob([filesave], { type:'text/html' });
const url = URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;


a.download = filename + "@_" + dateSuffix + "_" + numberOfElements + "pcs" + fileExtension;

if (event && event.shiftKey) { a.download = filename + fileExtension; };

a.click();
URL.revokeObjectURL(url);
Z();

}
