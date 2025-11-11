ui.coin21493.click               = function() { T = 1;    localStorage.setItem("gridSize", T); Z(); };
ui.coin31352.click               = function() { T = 2;    localStorage.setItem("gridSize", T); Z(); };

ui.coin33352.click               = function() { T = 5;    localStorage.setItem("gridSize", T); Z(); };
ui.coin35216.click               = function() { T = 10;   localStorage.setItem("gridSize", T); Z(); };
ui.coin36899.click               = function() { T = 20;   localStorage.setItem("gridSize", T); Z(); };
ui.coin38511.click               = function() { T = 50;   localStorage.setItem("gridSize", T); Z(); };
ui.coin40870.click               = function() { T = 100;  localStorage.setItem("gridSize", T); Z(); };
ui.coin46684.click               = function() { T = 200;  localStorage.setItem("gridSize", T); Z(); };
ui.coin48242.click               = function() { T = 500;  localStorage.setItem("gridSize", T); Z(); };
ui.coin50503.click               = function() { T = 1000; localStorage.setItem("gridSize", T); Z(); };

ui.coin53180.click               = function() { T = 4;    localStorage.setItem("gridSize", T); Z(); };
ui.coin55658.click               = function() { T = 8;    localStorage.setItem("gridSize", T); Z(); };
ui.coin57816.click               = function() { T = 16;   localStorage.setItem("gridSize", T); Z(); };
ui.coin60297.click               = function() { T = 32;   localStorage.setItem("gridSize", T); Z(); };
ui.coin64112.click               = function() { T = 64;   localStorage.setItem("gridSize", T); Z(); };
ui.coin66935.click               = function() { T = 128;  localStorage.setItem("gridSize", T); Z(); };
ui.coin70148.click               = function() { T = 256;  localStorage.setItem("gridSize", T); Z(); };
ui.coin05786.click               = function() { T = 512;  localStorage.setItem("gridSize", T); Z(); };

ui.coin08962.click               = function() { T = 3;    localStorage.setItem("gridSize", T); Z(); };
ui.coin10912.click               = function() { T = 6;    localStorage.setItem("gridSize", T); Z(); };
ui.coin15097.click               = function() { T = 12;   localStorage.setItem("gridSize", T); Z(); };
ui.coin18271.click               = function() { T = 24;   localStorage.setItem("gridSize", T); Z(); };
ui.coin21056.click               = function() { T = 48;   localStorage.setItem("gridSize", T); Z(); };
ui.coin22927.click               = function() { T = 96;   localStorage.setItem("gridSize", T); Z(); };
ui.coin26110.click               = function() { T = 192;  localStorage.setItem("gridSize", T); Z(); };
ui.coin44062.click               = function() { T = 384;  localStorage.setItem("gridSize", T); Z(); };

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

ui.cursorShutoff.click               = function() { if (Cur.style.display=='none') { Cur.style.display='block'; localStorage.setItem("cursorDisplay", "block"); cursorDisplay = "block"; } else { Cur.style.display='none'; localStorage.setItem("cursorDisplay", "none"); cursorDisplay = "none"; }; };






const userCustomTheme    = {};
      userCustomTheme.a0 = {};
      userCustomTheme.b1 = {};
      userCustomTheme.c2 = {};
      userCustomTheme.d3 = {};
      userCustomTheme.e4 = {};
      userCustomTheme.f5 = {};
      userCustomTheme.g6 = {};
      userCustomTheme.h7 = {};
      userCustomTheme.i8 = {};
      userCustomTheme.j9 = {};

function saveTheme(configName) {
userCustomTheme[configName].L                        = L;                       
userCustomTheme[configName].sL                       = sL;                      
userCustomTheme[configName].finishedBackgroundColour = finishedBackgroundColour; 
userCustomTheme[configName].U                        = U;                      
userCustomTheme[configName].D                        = D;                      
userCustomTheme[configName].C                        = C;                       
userCustomTheme[configName].bU                       = bU;                       
userCustomTheme[configName].greyColour               = greyColour;               
userCustomTheme[configName].blueColour               = blueColour;               
userCustomTheme[configName].pinkColour               = pinkColour;               
userCustomTheme[configName].lineColour               = lineColour;               
userCustomTheme[configName].selectedColour           = selectedColour;           
userCustomTheme[configName].thinOutline              = thinOutline;           
userCustomTheme[configName].borderWidth              = borderWidth;           
userCustomTheme[configName].edgeQ                    = edgeQ;           
userCustomTheme[configName].K                        = K;           
userCustomTheme[configName].visualOpacity            = visualOpacity;           
userCustomTheme[configName].partsOpacity             = partsOpacity;           
userCustomTheme[configName].pictureOpacity           = pictureOpacity;           
userCustomTheme[configName].T                        = T;           
userCustomTheme[configName].grid0Viz                 = grid0Viz;           
userCustomTheme[configName].grid1Viz                 = grid1Viz;           
userCustomTheme[configName].grid2Viz                 = grid2Viz;           
userCustomTheme[configName].grid3Viz                 = grid3Viz;           
userCustomTheme[configName].visualGridThickness1     = visualGridThickness1;           
userCustomTheme[configName].visualGridThickness2     = visualGridThickness2;           
userCustomTheme[configName].visualGridThickness3     = visualGridThickness3;           
userCustomTheme[configName].visualGridSize1          = visualGridSize1;           
userCustomTheme[configName].visualGridSize2          = visualGridSize2;           
userCustomTheme[configName].visualGridSize3          = visualGridSize3;           
userCustomTheme[configName].visualGridColour1        = visualGridColour1;           
userCustomTheme[configName].visualGridColour2        = visualGridColour2;           
userCustomTheme[configName].visualGridColour3        = visualGridColour3;           
userCustomTheme[configName].gridIncrementArray       = gridIncrementArray;           
userCustomTheme[configName].cursorDisplay            = cursorDisplay;           
localStorage.setItem("userCustomTheme_" + configName, JSON.stringify(userCustomTheme[configName]));
}


function loadTheme(configName) {
L                         = userCustomTheme[configName].L                        ? userCustomTheme[configName].L                        : L                          ; localStorage.setItem("L"                         , L                         ); ui.coin88067.ref.value = L                       ;
sL                        = userCustomTheme[configName].sL                       ? userCustomTheme[configName].sL                       : sL                         ; localStorage.setItem("sL"                        , sL                        ); ui.coin46861.ref.value = sL                      ;
finishedBackgroundColour  = userCustomTheme[configName].finishedBackgroundColour ? userCustomTheme[configName].finishedBackgroundColour : finishedBackgroundColour   ; localStorage.setItem("finishedBackgroundColour"  , finishedBackgroundColour  ); ui.coin44038.ref.value = finishedBackgroundColour;
U                         = userCustomTheme[configName].U                        ? userCustomTheme[configName].U                        : U                          ; localStorage.setItem("U"                         , U                         ); ui.coin72275.ref.value = U                       ;
C                         = userCustomTheme[configName].C                        ? userCustomTheme[configName].C                        : C                          ; localStorage.setItem("C"                         , C                         ); ui.coin74555.ref.value = C                       ;
bU                        = userCustomTheme[configName].bU                       ? userCustomTheme[configName].bU                       : bU                         ; localStorage.setItem("bU"                        , bU                        ); ui.coin43886.ref.value = bU                      ;
D                         = userCustomTheme[configName].D                        ? userCustomTheme[configName].D                        : D                          ; localStorage.setItem("D"                         , D                         );  ;
greyColour                = userCustomTheme[configName].greyColour               ? userCustomTheme[configName].greyColour               : greyColour                 ; localStorage.setItem("greyColour"                , greyColour                ); ui.coin59277.ref.value = greyColour    ;
blueColour                = userCustomTheme[configName].blueColour               ? userCustomTheme[configName].blueColour               : blueColour                 ; localStorage.setItem("blueColour"                , blueColour                ); ui.coin62796.ref.value = blueColour    ;
pinkColour                = userCustomTheme[configName].pinkColour               ? userCustomTheme[configName].pinkColour               : pinkColour                 ; localStorage.setItem("pinkColour"                , pinkColour                ); ui.coin65598.ref.value = pinkColour    ;
lineColour                = userCustomTheme[configName].lineColour               ? userCustomTheme[configName].lineColour               : lineColour                 ; localStorage.setItem("lineColour"                , lineColour                ); ui.coin67938.ref.value = lineColour    ;
selectedColour            = userCustomTheme[configName].selectedColour           ? userCustomTheme[configName].selectedColour           : selectedColour             ; localStorage.setItem("selectedColour"            , selectedColour            ); ui.coin47065.ref.value = selectedColour;
thinOutline               = userCustomTheme[configName].thinOutline              ? parseFloat(userCustomTheme[configName].thinOutline    )         : thinOutline                ; localStorage.setItem("thinOutline"               , thinOutline               ); ui.coin41267.ref.value = thinOutline; xrayWidth = thinOutline;
borderWidth               = userCustomTheme[configName].borderWidth              ? parseFloat(userCustomTheme[configName].borderWidth    )         : borderWidth                ; localStorage.setItem("borderWidth"               , borderWidth               ); ui.coin47497.ref.value = borderWidth ;
edgeQ                     = userCustomTheme[configName].edgeQ                    ? parseFloat(userCustomTheme[configName].edgeQ          )         : edgeQ                      ; localStorage.setItem("edgeQ"                     , edgeQ                     ); ui.coin50633.ref.value = edgeQ ;
K                         = userCustomTheme[configName].K                        ? parseFloat(userCustomTheme[configName].K              )         : K                          ; localStorage.setItem("K"                         , K                         ); ui.coin53526.ref.value = K ;
visualOpacity             = userCustomTheme[configName].visualOpacity            ? parseFloat(userCustomTheme[configName].visualOpacity  )         : visualOpacity              ; localStorage.setItem("visualOpacity"             , visualOpacity             ); ui.coin56897.ref.value = visualOpacity ; Vis.style.opacity=visualOpacity;
partsOpacity              = userCustomTheme[configName].partsOpacity             ? parseFloat(userCustomTheme[configName].partsOpacity   )         : partsOpacity               ; localStorage.setItem("partsOpacity"              , partsOpacity              ); ui.coin59527.ref.value = partsOpacity ; utilityLayer0.style.opacity=partsOpacity;
pictureOpacity            = userCustomTheme[configName].pictureOpacity           ? parseFloat(userCustomTheme[configName].pictureOpacity )         : pictureOpacity             ; localStorage.setItem("pictureOpacity"            , pictureOpacity            ); ui.coin17325.ref.value = pictureOpacity; Picture.style.opacity=pictureOpacity; Cur.style.opacity=pictureOpacity; ui.menuWrapper.ref.style.opacity=pictureOpacity; ;
T                         = userCustomTheme[configName].T                        ? parseInt(userCustomTheme[configName].T)                        : T                          ; localStorage.setItem("T"                         , T                         );  ;
grid0Viz                  = userCustomTheme[configName].grid0Viz                 ? userCustomTheme[configName].grid0Viz                 : grid0Viz                   ; localStorage.setItem("grid0Viz"                  , grid0Viz                  );  ;
grid1Viz                  = userCustomTheme[configName].grid1Viz                 ? userCustomTheme[configName].grid1Viz                 : grid1Viz                   ; localStorage.setItem("grid1Viz"                  , grid1Viz                  );  ;
grid2Viz                  = userCustomTheme[configName].grid2Viz                 ? userCustomTheme[configName].grid2Viz                 : grid2Viz                   ; localStorage.setItem("grid2Viz"                  , grid2Viz                  );  ;
grid3Viz                  = userCustomTheme[configName].grid3Viz                 ? userCustomTheme[configName].grid3Viz                 : grid3Viz                   ; localStorage.setItem("grid3Viz"                  , grid3Viz                  );  ;
visualGridThickness1      = userCustomTheme[configName].visualGridThickness1     ? parseInt(userCustomTheme[configName].visualGridThickness1  )  : visualGridThickness1       ; localStorage.setItem("visualGridThickness1"      , visualGridThickness1      );  ;
visualGridThickness2      = userCustomTheme[configName].visualGridThickness2     ? parseInt(userCustomTheme[configName].visualGridThickness2  )  : visualGridThickness2       ; localStorage.setItem("visualGridThickness2"      , visualGridThickness2      );  ;
visualGridThickness3      = userCustomTheme[configName].visualGridThickness3     ? parseInt(userCustomTheme[configName].visualGridThickness3  )  : visualGridThickness3       ; localStorage.setItem("visualGridThickness3"      , visualGridThickness3      );  ;
visualGridSize1           = userCustomTheme[configName].visualGridSize1          ? parseInt(userCustomTheme[configName].visualGridSize1       )  : visualGridSize1            ; localStorage.setItem("visualGridSize1"           , visualGridSize1           ); ui.coin18868.ref.value = visualGridSize1 ;
visualGridSize2           = userCustomTheme[configName].visualGridSize2          ? parseInt(userCustomTheme[configName].visualGridSize2       )  : visualGridSize2            ; localStorage.setItem("visualGridSize2"           , visualGridSize2           ); ui.coin21315.ref.value = visualGridSize2 ;
visualGridSize3           = userCustomTheme[configName].visualGridSize3          ? parseInt(userCustomTheme[configName].visualGridSize3       )  : visualGridSize3            ; localStorage.setItem("visualGridSize3"           , visualGridSize3           ); ui.coin23538.ref.value = visualGridSize3 ;
visualGridColour1         = userCustomTheme[configName].visualGridColour1        ? userCustomTheme[configName].visualGridColour1        : visualGridColour1          ; localStorage.setItem("visualGridColour1"         , visualGridColour1         ); ui.coin28281.ref.value = visualGridColour1 ;
visualGridColour2         = userCustomTheme[configName].visualGridColour2        ? userCustomTheme[configName].visualGridColour2        : visualGridColour2          ; localStorage.setItem("visualGridColour2"         , visualGridColour2         ); ui.coin30119.ref.value = visualGridColour2 ;
visualGridColour3         = userCustomTheme[configName].visualGridColour3        ? userCustomTheme[configName].visualGridColour3        : visualGridColour3          ; localStorage.setItem("visualGridColour3"         , visualGridColour3         ); ui.coin32259.ref.value = visualGridColour3 ;
gridIncrementArray        = userCustomTheme[configName].gridIncrementArray       ? userCustomTheme[configName].gridIncrementArray       : gridIncrementArray         ; localStorage.setItem("gridIncrementArray"        , gridIncrementArray        );  ;
cursorDisplay             = userCustomTheme[configName].cursorDisplay            ? userCustomTheme[configName].cursorDisplay            : cursorDisplay              ; localStorage.setItem("cursorDisplay"             , cursorDisplay             ); Cur.style.display = cursorDisplay ;
spaceViewOn();
spaceViewOff();
Z();
}










["a0", "b1", "c2", "d3", "e4", "f5", "g6", "h7", "i8", "j9"].forEach(function(configName) {
if (localStorage.getItem("userCustomTheme_" + configName)) {
userCustomTheme[configName] = JSON.parse(localStorage.getItem("userCustomTheme_" + configName));
}
});







ui.saveTheme_a0.click            = function() { saveTheme("a0"); };
ui.saveTheme_b1.click            = function() { saveTheme("b1"); };
ui.saveTheme_c2.click            = function() { saveTheme("c2"); };
ui.saveTheme_d3.click            = function() { saveTheme("d3"); };
ui.saveTheme_e4.click            = function() { saveTheme("e4"); };
ui.saveTheme_f5.click            = function() { saveTheme("f5"); };
ui.saveTheme_g6.click            = function() { saveTheme("g6"); };
ui.saveTheme_h7.click            = function() { saveTheme("h7"); };
ui.saveTheme_i8.click            = function() { saveTheme("i8"); };
ui.saveTheme_j9.click            = function() { saveTheme("j9"); };

ui.loadTheme_a0.click            = function() { loadTheme("a0"); };
ui.loadTheme_b1.click            = function() { loadTheme("b1"); };
ui.loadTheme_c2.click            = function() { loadTheme("c2"); };
ui.loadTheme_d3.click            = function() { loadTheme("d3"); };
ui.loadTheme_e4.click            = function() { loadTheme("e4"); };
ui.loadTheme_f5.click            = function() { loadTheme("f5"); };
ui.loadTheme_g6.click            = function() { loadTheme("g6"); };
ui.loadTheme_h7.click            = function() { loadTheme("h7"); };
ui.loadTheme_i8.click            = function() { loadTheme("i8"); };
ui.loadTheme_j9.click            = function() { loadTheme("j9"); };











