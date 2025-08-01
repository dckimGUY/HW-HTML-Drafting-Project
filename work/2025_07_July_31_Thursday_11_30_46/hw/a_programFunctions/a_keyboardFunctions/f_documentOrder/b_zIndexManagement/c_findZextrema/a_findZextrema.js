function findZextrema() {

let lowestGlobalZ      = pageEchelon + 100000000,
    lowestSel0Z        = pageEchelon + 100000000,
    lowestSel1Z        = pageEchelon + 100000000,
    lowestSel2Z        = pageEchelon + 100000000,

    highestGlobalZ     =            0,
    highestSel0Z       =            0;
    highestSel1Z       =            0;
    highestSel2Z       =            0;

if (utilityLayer0.children.length > 0) {

for (let j = 0; j < utilityLayer0.children.length; j++) {

const nextZ = parseInt(utilityLayer0.children[j].style.zIndex);

if (nextZ > highestGlobalZ)   { highestGlobalZ = nextZ;   }
if (nextZ > highestSel0Z)     { highestSel0Z     = nextZ; }
if (nextZ > highestSel1Z)     { highestSel1Z     = nextZ; }
if (nextZ > highestSel2Z)     { highestSel2Z     = nextZ; }

if (nextZ < lowestGlobalZ)    { lowestGlobalZ  = nextZ;   }
if (nextZ < lowestSel0Z)      { lowestSel0Z      = nextZ; }
if (nextZ < lowestSel1Z)      { lowestSel1Z      = nextZ; }
if (nextZ < lowestSel2Z)      { lowestSel2Z      = nextZ; }

}

return ({
"lowestGlobalZ"   : lowestGlobalZ    ,
"lowestSel0Z"     : lowestSel0Z      ,
"lowestSel1Z"     : lowestSel1Z      ,
"lowestSel2Z"     : lowestSel2Z      ,

"highestGlobalZ"  : highestGlobalZ   ,
"highestSel0Z"    : highestSel0Z     ,
"highestSel1Z"    : highestSel1Z     ,
"highestSel2Z"    : highestSel2Z
});

} else {

return ({
"lowestGlobalZ"   : pageEchelon,
"lowestSel0Z"     : pageEchelon,
"lowestSel1Z"     : pageEchelon,
"lowestSel2Z"     : pageEchelon,

"highestGlobalZ"  : pageEchelon,
"highestSel0Z"    : pageEchelon,
"highestSel1Z"    : pageEchelon,
"highestSel2Z"    : pageEchelon
});

}

}
