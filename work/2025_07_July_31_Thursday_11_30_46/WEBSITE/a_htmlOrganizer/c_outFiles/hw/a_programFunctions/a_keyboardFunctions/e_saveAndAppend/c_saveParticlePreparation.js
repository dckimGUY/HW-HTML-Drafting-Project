function saveParticlePreparation(rename,phpSub) {
spaceViewOn();
removePointerEventsNone();





if (rename==0&&filename!=defaultFilename) {
} else {
let result = prompt("enter filename, a good format is to use three numbers first (beginning with 100), this will keep organization. Example '100_projectCode.sectionName'. No need to put the extension.", filename);
if (result!=null) {
filename = result;
filename = filename.replace(/ /g, '_');
document.getElementById("documentTitle").innerText = filename;
}
}








let phpPaths = [];

let fileContents = "";

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






fileContents += "\n\n<" + "script>\n";

let idNameStringArray = "['";
for (let j = 0; j < utilityLayer0.children.length; j++) {
if (j!=utilityLayer0.children.length - 1) {
idNameStringArray += utilityLayer0.children[j].id.toString() + "','";
} else {
idNameStringArray += utilityLayer0.children[j].id.toString();
}
}
idNameStringArray += "']";

fileContents += 
`
const
z_${filename}                         =    {  };

${idNameStringArray}.forEach( id => {
/* build the data */
z_${filename}[id]                     =    {  };
z_${filename}[id].a_self              =    document.getElementById(id);
z_${filename}[id].b_jsNote            =    z_${filename}[id].a_self.dataset.jsName;
z_${filename}[id].c_include           =    null;
z_${filename}[id].d_parent            =    null;
z_${filename}[id].e_children          =    null;
    z_${filename}[id].f_anchor        =    z_${filename}[id].a_self.firstElementChild    ;
    z_${filename}[id].g_main          =    z_${filename}[id].a_self.lastElementChild     ;
        z_${filename}[id].h_button    =    z_${filename}[id].g_main.firstElementChild    ;
        z_${filename}[id].i_div       =    z_${filename}[id].h_button.nextElementSibling ;
        z_${filename}[id].j_img       =    z_${filename}[id].g_main.lastElementChild     ;
});

`
;

/*
for (let j = 0; j < phpPaths.length; j++) {
fileContents += `try { ${phpPaths[j]} } catch { };
`;
};
*/



for (let j = 0; j < utilityLayer0.children.length; j++) {
if (utilityLayer0.children[j].dataset.children!="") {
const childrenElements = utilityLayer0.children[j].dataset.children.split(",");
let verifiedChildren = [];
for (let j = 0; j < childrenElements.length; j++) {
if (document.getElementById(childrenElements[j])) {
verifiedChildren[verifiedChildren.length] = childrenElements[j];
}
}


fileContents += 
`
z_${filename}.${utilityLayer0.children[j].id}.children          =    [z_${filename}.${verifiedChildren.join(",z_" + filename + ".")}];`;
};
};




fileContents += `
`;
for (let j = 0; j < utilityLayer0.children.length; j++) {
if (utilityLayer0.children[j].dataset.parent!="") {
if (document.getElementById(utilityLayer0.children[j].dataset.parent)) {
fileContents += 
`
z_${filename}.${utilityLayer0.children[j].id}.parent            =    z_${filename}.${utilityLayer0.children[j].dataset.parent};`;
}
};
};


/* Here is just a measure to ensure that our colourGroup naming is unique. Three digits should be enough. */
let nombre = (Date.now() % 1000).toString().padStart(3, '0');


fileContents +=
`

const
greyArray${nombre} = [`;

for (let j = 0; j < coinTrip.sel0.length; j++) {
fileContents += `z_${filename}.${coinTrip.sel0[j].id}`;
if (j < coinTrip.sel0.length - 1) {
fileContents += ', ';
}};

fileContents += 
`];
`;

fileContents +=
`
const
pinkArray${nombre} = [`;
for (let j = 0; j < coinTrip.sel1.length; j++) {
fileContents += `z_${filename}.${coinTrip.sel1[j].id}`;
if (j < coinTrip.sel1.length - 1) {
fileContents += ', ';
}};

fileContents += 
`];
`;

fileContents +=
`
const
blueArray${nombre} = [`;
for (let j = 0; j < coinTrip.sel2.length; j++) {
fileContents += `z_${filename}.${coinTrip.sel2[j].id}`;
if (j < coinTrip.sel2.length - 1) {
fileContents += ', ';
}};

fileContents += 
`];
`;

fileContents += "\n<" + "/script>";


fileContents = fileContents.replace("phpStart", '<?php');
fileContents = fileContents.replace("phpEnd", '?>');



saveHTMLparticle(rename, fileContents, false, false, phpSub);





restorePointerEventsNone();
spaceViewOff();
Z();
}
