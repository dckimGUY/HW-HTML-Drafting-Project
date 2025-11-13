ui.coin21493.click               = function() { T = 1;    localStorage.setItem("T", T); Z(); };
ui.coin31352.click               = function() { T = 2;    localStorage.setItem("T", T); Z(); };

ui.snapGridIncrement.input       = function() {  };

ui.coin33352.click               = function() { T = 5;    localStorage.setItem("T", T); Z(); };
ui.coin35216.click               = function() { T = 10;   localStorage.setItem("T", T); Z(); };
ui.coin36899.click               = function() { T = 20;   localStorage.setItem("T", T); Z(); };
ui.coin38511.click               = function() { T = 50;   localStorage.setItem("T", T); Z(); };
ui.coin40870.click               = function() { T = 100;  localStorage.setItem("T", T); Z(); };
ui.coin46684.click               = function() { T = 200;  localStorage.setItem("T", T); Z(); };
ui.coin48242.click               = function() { T = 500;  localStorage.setItem("T", T); Z(); };
ui.coin50503.click               = function() { T = 1000; localStorage.setItem("T", T); Z(); };

ui.coin53180.click               = function() { T = 4;    localStorage.setItem("T", T); Z(); };
ui.coin55658.click               = function() { T = 8;    localStorage.setItem("T", T); Z(); };
ui.coin57816.click               = function() { T = 16;   localStorage.setItem("T", T); Z(); };
ui.coin60297.click               = function() { T = 32;   localStorage.setItem("T", T); Z(); };
ui.coin64112.click               = function() { T = 64;   localStorage.setItem("T", T); Z(); };
ui.coin66935.click               = function() { T = 128;  localStorage.setItem("T", T); Z(); };
ui.coin70148.click               = function() { T = 256;  localStorage.setItem("T", T); Z(); };
ui.coin05786.click               = function() { T = 512;  localStorage.setItem("T", T); Z(); };

ui.coin08962.click               = function() { T = 3;    localStorage.setItem("T", T); Z(); };
ui.coin10912.click               = function() { T = 6;    localStorage.setItem("T", T); Z(); };
ui.coin15097.click               = function() { T = 12;   localStorage.setItem("T", T); Z(); };
ui.coin18271.click               = function() { T = 24;   localStorage.setItem("T", T); Z(); };
ui.coin21056.click               = function() { T = 48;   localStorage.setItem("T", T); Z(); };
ui.coin22927.click               = function() { T = 96;   localStorage.setItem("T", T); Z(); };
ui.coin26110.click               = function() { T = 192;  localStorage.setItem("T", T); Z(); };
ui.coin44062.click               = function() { T = 384;  localStorage.setItem("T", T); Z(); };

ui.coin44789.click               = function() {
                 if ( grid0Viz == "true") {
                      grid0Viz = "false";
localStorage.setItem("grid0Viz", "false");
} else {              grid0Viz = "true";
localStorage.setItem("grid0Viz", "true"); }
Z();
};
ui.coin46633.click               = function() {
                 if ( grid1Viz == "true") {
                      grid1Viz = "false";
localStorage.setItem("grid1Viz", "false");
} else {              grid1Viz = "true";
localStorage.setItem("grid1Viz", "true"); }
Z();
};
ui.coin48525.click               = function() {
                 if ( grid2Viz == "true") {
                      grid2Viz = "false";
localStorage.setItem("grid2Viz", "false");
} else {              grid2Viz = "true";
localStorage.setItem("grid2Viz", "true"); }
Z();
};
ui.coin51107.click               = function() {
                 if ( grid3Viz == "true") {
                      grid3Viz = "false";
localStorage.setItem("grid3Viz", "false");
} else {              grid3Viz = "true";
localStorage.setItem("grid3Viz", "true"); }
Z();
};

ui.coin56470.click               = function() { visualGridThickness1 = 1; localStorage.setItem("visualGridThickness1", visualGridThickness1); Z(); };
ui.coin58382.click               = function() { visualGridThickness1 = 2; localStorage.setItem("visualGridThickness1", visualGridThickness1); Z(); };
ui.coin59792.click               = function() { visualGridThickness1 = 4; localStorage.setItem("visualGridThickness1", visualGridThickness1); Z(); };
ui.coin61443.click               = function() { visualGridThickness1 = 6; localStorage.setItem("visualGridThickness1", visualGridThickness1); Z(); };

ui.coin63058.click               = function() { visualGridThickness2 = 1; localStorage.setItem("visualGridThickness2", visualGridThickness2); Z(); };
ui.coin65326.click               = function() { visualGridThickness2 = 2; localStorage.setItem("visualGridThickness2", visualGridThickness2); Z(); };
ui.coin67576.click               = function() { visualGridThickness2 = 4; localStorage.setItem("visualGridThickness2", visualGridThickness2); Z(); };
ui.coin69548.click               = function() { visualGridThickness2 = 6; localStorage.setItem("visualGridThickness2", visualGridThickness2); Z(); };

ui.coin71699.click               = function() { visualGridThickness3 = 1; localStorage.setItem("visualGridThickness3", visualGridThickness3); Z(); };
ui.coin72936.click               = function() { visualGridThickness3 = 2; localStorage.setItem("visualGridThickness3", visualGridThickness3); Z(); };
ui.coin74420.click               = function() { visualGridThickness3 = 4; localStorage.setItem("visualGridThickness3", visualGridThickness3); Z(); };
ui.coin63249.click               = function() { visualGridThickness3 = 6; localStorage.setItem("visualGridThickness3", visualGridThickness3); Z(); };



ui.coin38634.click              = function() { visualGridSize1 = T; ui.coin18868.ref.value = T   ; localStorage.setItem("visualGridSize1", visualGridSize1); Z(); };
ui.coin18868.input              = function() { visualGridSize1 = parseInt(ui.coin18868.ref.value); localStorage.setItem("visualGridSize1", visualGridSize1); Z(); };
ui.coin28281.input              = function() {
visualGridColour1 = ui.coin28281.ref.value;
ui.coin28281.ref.setAttribute('value',ui.coin28281.ref.value);
localStorage.setItem('visualGridColour1',ui.coin28281.ref.value);
spaceViewOn();
spaceViewOff();
Z(); 
};

ui.coin41046.click              = function() { visualGridSize2 = T; ui.coin21315.ref.value = T   ; localStorage.setItem("visualGridSize2", visualGridSize2); Z(); };
ui.coin21315.input              = function() { visualGridSize2 = parseInt(ui.coin21315.ref.value); localStorage.setItem("visualGridSize2", visualGridSize2); Z(); };
ui.coin30119.input              = function() {
visualGridColour2 = ui.coin30119.ref.value;
ui.coin30119.ref.setAttribute('value',ui.coin30119.ref.value);
localStorage.setItem('visualGridColour2',ui.coin30119.ref.value);
spaceViewOn();
spaceViewOff();
Z(); 
};

ui.coin07023.click              = function() { visualGridSize3 = T; ui.coin23538.ref.value = T   ; localStorage.setItem("visualGridSize3", visualGridSize3); Z(); };
ui.coin23538.input              = function() { visualGridSize3 = parseInt(ui.coin23538.ref.value); localStorage.setItem("visualGridSize3", visualGridSize3); Z(); };
ui.coin32259.input              = function() { 
visualGridColour3 = ui.coin32259.ref.value;
ui.coin32259.ref.setAttribute('value',ui.coin32259.ref.value);
localStorage.setItem('visualGridColour3',ui.coin32259.ref.value);
spaceViewOn();
spaceViewOff();
Z(); 
};

ui.setMetric.click               = function() { gridIncrementArray = "metric"; localStorage.setItem("gridIncrementArray", gridIncrementArray); };
ui.setComp2.click                = function() { gridIncrementArray = "2";      localStorage.setItem("gridIncrementArray", gridIncrementArray); };
ui.setComp3.click                = function() { gridIncrementArray = "3";      localStorage.setItem("gridIncrementArray", gridIncrementArray); };
ui.setComp2and3.click            = function() { gridIncrementArray = "3-2";    localStorage.setItem("gridIncrementArray", gridIncrementArray); };









/* INVERT COLOURATIONS */

ui.invertBGandGrid.click         = function() {  };
ui.invertPartVisuals.click       = function() {  };









/* ROW 3 */

ui.coin88067.input              = function() { 
L = ui.coin88067.ref.value;
ui.coin88067.ref.setAttribute('value',ui.coin88067.ref.value);
localStorage.setItem('L',ui.coin88067.ref.value);
spaceViewOn();
spaceViewOff();
Z(); 
 };
ui.coin46861.input              = function() { 
sL = ui.coin46861.ref.value;
ui.coin46861.ref.setAttribute('value',ui.coin46861.ref.value);
localStorage.setItem('sL',ui.coin46861.ref.value);
spaceViewOn();
spaceViewOff();
Z(); 
};
ui.coin44038.input              = function() { 
finishedBackgroundColour = ui.coin44038.ref.value;
ui.coin44038.ref.setAttribute('value',ui.coin44038.ref.value);
localStorage.setItem('finishedBackgroundColour',ui.coin44038.ref.value);
spaceViewOn();
spaceViewOff();
Z();
 };
ui.coin72275.input              = function() { 
U = ui.coin72275.ref.value;
D = ui.coin72275.ref.value;
ui.coin72275.ref.setAttribute('value',ui.coin72275.ref.value);
localStorage.setItem('UD',ui.coin72275.ref.value);
spaceViewOn();
spaceViewOff();
Z();
 };
ui.coin74555.input              = function() { 
C = ui.coin74555.ref.value;
ui.coin74555.ref.setAttribute('value',ui.coin74555.ref.value);
localStorage.setItem('C',ui.coin74555.ref.value);
spaceViewOn();
spaceViewOff();
Z();
 };
ui.coin43886.input              = function() { 
bU = ui.coin43886.ref.value;
ui.coin43886.ref.setAttribute('value',ui.coin43886.ref.value);
localStorage.setItem('bU',ui.coin43886.ref.value);
spaceViewOn();
spaceViewOff();
Z();
 };




/*
if (localStorage.getItem("greyColour"    )) { greyColour     = localStorage.getItem("greyColour"    ); }
if (localStorage.getItem("blueColour"    )) { blueColour     = localStorage.getItem("blueColour"    ); }
if (localStorage.getItem("pinkColour"    )) { pinkColour     = localStorage.getItem("pinkColour"    ); }
*/

/* TRI-COLOURS */

ui.coin59277.input              = function() {
                      greyColour    = ui.coin59277.ref.value;
                      Bs0           = ui.coin59277.ref.value + "99";
                      Cs0           = ui.coin59277.ref.value + "99";
localStorage.setItem('greyColour'    ,ui.coin59277.ref.value);
                                      ui.coin59277.ref.setAttribute('value',
                                      ui.coin59277.ref.value); redraw();
spaceViewOn();
spaceViewOff();
};
ui.coin62796.input              = function() {
                      blueColour    = ui.coin62796.ref.value;
                      Bs2           = ui.coin62796.ref.value + "99";
                      Cs2           = ui.coin62796.ref.value + "99";
localStorage.setItem('blueColour'    ,ui.coin62796.ref.value);
                                      ui.coin62796.ref.setAttribute('value',
                                      ui.coin62796.ref.value); redraw();
spaceViewOn();
spaceViewOff();
};
ui.coin65598.input              = function() {
                      pinkColour    = ui.coin65598.ref.value;
                      Bs1           = ui.coin65598.ref.value + "99";
                      Cs1           = ui.coin65598.ref.value + "99";
localStorage.setItem('pinkColour'    ,ui.coin65598.ref.value);
                                      ui.coin65598.ref.setAttribute('value',
                                      ui.coin65598.ref.value); redraw();
spaceViewOn();
spaceViewOff();
};





ui.coin67938.input              = function() {
                      lineColour    = ui.coin67938.ref.value;
localStorage.setItem('lineColour'    ,ui.coin67938.ref.value);
                                      ui.coin67938.ref.setAttribute('value',
                                      ui.coin67938.ref.value); redraw();
};

ui.coin47065.input              = function() {
                      selectedColour= ui.coin47065.ref.value;
localStorage.setItem('selectedColour',ui.coin47065.ref.value);
                                      ui.coin47065.ref.setAttribute('value',
                                      ui.coin47065.ref.value); redraw();
};


















/* SLIDERS */



/*
localStorage.borderWidth = borderWidth;
localStorage.xrayWidth   = xrayWidth;
localStorage.thinOutline = thinOutline;
*/






ui.coin41267.input              = function() {
thinOutline = parseInt(ui.coin41267.ref.value);
xrayWidth = thinOutline;
localStorage.setItem("thinOutline", thinOutline);
if (utilityLayer0.children.length>0) { redraw(); }
};

ui.coin47497.input              = function() {
borderWidth = parseInt(ui.coin47497.ref.value);
localStorage.setItem("borderWidth", borderWidth);
if (utilityLayer0.children.length>0) { redraw(); }
};

ui.coin50633.input              = function() {
edgeQ = parseInt(ui.coin50633.ref.value);
localStorage.edgeQ = edgeQ;
if (utilityLayer0.children.length>0) { redraw(); }
};

ui.coin53526.input              = function() {
K = parseFloat(ui.coin53526.ref.value); Z();
localStorage.setItem("K", K);
};

ui.coin56897.input              = function() { 
visualOpacity = parseFloat(ui.coin56897.ref.value);
Vis.style.opacity=visualOpacity;
localStorage.setItem("visualOpacity", visualOpacity);
};

ui.coin59527.input              = function() { 
partsOpacity = parseFloat(ui.coin59527.ref.value);
utilityLayer0.style.opacity=partsOpacity;
localStorage.setItem("partsOpacity", partsOpacity);
};

ui.coin17325.input              = function() { 
pictureOpacity = parseFloat(ui.coin17325.ref.value);
Picture.style.opacity=pictureOpacity;
Cur.style.opacity=pictureOpacity;
ui.menuWrapper.ref.style.opacity=pictureOpacity;
localStorage.setItem("pictureOpacity", pictureOpacity);
};





ui.setDragThresholdFromGrid.click = function() {
edgeQ = T;
localStorage.edgeQ = edgeQ;
ui.coin50633.ref.value = edgeQ;
redraw();
};




ui.bodyFade.input              = function() { document.body.style.opacity = ui.bodyFade.ref.value; };





