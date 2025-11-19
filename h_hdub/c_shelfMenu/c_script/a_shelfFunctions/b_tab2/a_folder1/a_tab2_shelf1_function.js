/* ROW 1 */

ui.modeZ.click                   = function() { manageGlobalZ(0); modeRouter(null,9); };
ui.modeEeM1.click                = function() { eM=1; modeRouter(null,5); };
ui.modeD.click                   = function() { modeRouter(null,6); };
ui.modeG.click                   = function() { curFocus=0; modeRouter(null,1); };
ui.modeEeM0.click                = function() { eM=0; modeRouter(null,5); };
ui.modeT.click                   = function() { modeRouter(null,8); };

/* ROW 2 */









ui.cursorShutoff.click               = function() { if (Cur.style.display=='none') { Cur.style.display='block'; localStorage.setItem("cursorDisplay", "block"); cursorDisplay = "block"; } else { Cur.style.display='none'; localStorage.setItem("cursorDisplay", "none"); cursorDisplay = "none"; }; };






const userCustomTheme    = {};
      userCustomTheme.currentTheme = {};
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
mouseIncrement            = visualGridSize1;
spaceViewOn();
spaceViewOff();
Z();
}



/* THIS IS WHERE MY DEFAULT THEMES RESIDE */

userCustomTheme.a0 =
{
    "title": "DCKIM",
    "description": "This is the basic theme that I used to do the initial testing for this project.",
    "L": "#3f3f5f",
    "sL": "#3f3f3f",
    "finishedBackgroundColour": "#bfbfbf",
    "U": "#00ffff",
    "D": "#00ffff",
    "C": "#00ffff",
    "bU": "#ff0000",
    "greyColour": "#ffffff",
    "blueColour": "#00ffff",
    "pinkColour": "#de80ff",
    "lineColour": "#000000",
    "selectedColour": "#deff1c",
    "thinOutline": 2,
    "borderWidth": 8,
    "edgeQ": 32,
    "K": 0.295,
    "visualOpacity": 0.5,
    "partsOpacity": 0.25,
    "pictureOpacity": 1,
    "T": 32,
    "grid0Viz": "true",
    "grid1Viz": "false",
    "grid2Viz": "false",
    "grid3Viz": "true",
    "visualGridThickness1": 1,
    "visualGridThickness2": 1,
    "visualGridThickness3": 6,
    "visualGridSize1": 16,
    "visualGridSize2": 64,
    "visualGridSize3": 1536,
    "visualGridColour1": "#ffff00",
    "visualGridColour2": "#00ffff",
    "visualGridColour3": "#ff0000",
    "gridIncrementArray": "3-2",
    "cursorDisplay": "block"
};

userCustomTheme.b1 =
{
    "title": "Mostly Beige",
    "description": "This is almost exactly a direct inversion of the DCKIM theme.",
    "L": "#a5a588",
    "sL": "#afa7a7",
    "finishedBackgroundColour": "#404040",
    "U": "#ffffff",
    "D": "#ffffff",
    "C": "#00FF00",
    "bU": "#0000ff",
    "greyColour": "#000000",
    "blueColour": "#ff0000",
    "pinkColour": "#217f00",
    "lineColour": "#000000",
    "selectedColour": "#00ffff",
    "thinOutline": 2,
    "borderWidth": 8,
    "edgeQ": 32,
    "K": "0.135",
    "visualOpacity": "0.45",
    "partsOpacity": "0.25",
    "pictureOpacity": "1",
    "T": 32,
    "grid0Viz": "true",
    "grid1Viz": "false",
    "grid2Viz": "false",
    "grid3Viz": "true",
    "visualGridThickness1": 1,
    "visualGridThickness2": 1,
    "visualGridThickness3": 6,
    "visualGridSize1": 16,
    "visualGridSize2": 64,
    "visualGridSize3": 1536,
    "visualGridColour1": "#0000ff",
    "visualGridColour2": "#ff0000",
    "visualGridColour3": "#0000ff",
    "gridIncrementArray": "3-2",
    "cursorDisplay": "block"
};

userCustomTheme.c2 =
{
    "title": "Indie Web Contest",
    "description": "",
    "L": "#fef1fe",
    "sL": "#ececfe",
    "finishedBackgroundColour": "#ffffff",
    "U": "#000000",
    "D": "#000000",
    "C": "#00FF00",
    "bU": "#ff00ff",
    "greyColour": "#81febd",
    "blueColour": "#a8a8ff",
    "pinkColour": "#fda9fe",
    "lineColour": "#000000",
    "selectedColour": "#deff1c",
    "thinOutline": 2,
    "borderWidth": 5,
    "edgeQ": 32,
    "K": 0.21,
    "visualOpacity": 0.55,
    "partsOpacity": 0.39,
    "pictureOpacity": "1",
    "T": 32,
    "grid0Viz": "false",
    "grid1Viz": "true",
    "grid2Viz": "true",
    "grid3Viz": "true",
    "visualGridThickness1": 1,
    "visualGridThickness2": 2,
    "visualGridThickness3": 2,
    "visualGridSize1": 8,
    "visualGridSize2": 64,
    "visualGridSize3": 512,
    "visualGridColour1": "#f89ffe",
    "visualGridColour2": "#c09ffe",
    "visualGridColour3": "#f955fc",
    "gridIncrementArray": "2",
    "cursorDisplay": "none"
};

userCustomTheme.d3 =
{
    "title": "IndieWebFlipped",
    "description": "Just the same one flipped to dark.",
    "L": "#010e01",
    "sL": "#131301",
    "finishedBackgroundColour": "#000000",
    "U": "#ffffff",
    "D": "#ffffff",
    "C": "#ffffff",
    "bU": "#00ff00",
    "greyColour": "#7e0142",
    "blueColour": "#575700",
    "pinkColour": "#025601",
    "lineColour": "#ffffff",
    "selectedColour": "#2100e3",
    "thinOutline": 2,
    "borderWidth": 5,
    "edgeQ": 32,
    "K": 0.21,
    "visualOpacity": 0.55,
    "partsOpacity": 0.39,
    "pictureOpacity": 1,
    "T": 32,
    "grid0Viz": "false",
    "grid1Viz": "true",
    "grid2Viz": "true",
    "grid3Viz": "true",
    "visualGridThickness1": 1,
    "visualGridThickness2": 2,
    "visualGridThickness3": 2,
    "visualGridSize1": 8,
    "visualGridSize2": 64,
    "visualGridSize3": 512,
    "visualGridColour1": "#076001",
    "visualGridColour2": "#3f6001",
    "visualGridColour3": "#06aa03",
    "gridIncrementArray": "2",
    "cursorDisplay": "none"
};

userCustomTheme.e4 ={
    "title": "Graph Paper",
    "description": "I made this theme to resemble the expensive type of metric graph paper.",
    "L": "#ffffff",
    "sL": "#ffffff",
    "finishedBackgroundColour": "#ffffff",
    "U": "#00ffff",
    "D": "#00ffff",
    "C": "#00ffff",
    "bU": "#00ff62",
    "greyColour": "#008f00",
    "blueColour": "#0000ff",
    "pinkColour": "#ff0000",
    "lineColour": "#000000",
    "selectedColour": "#ffffff",
    "thinOutline": 1,
    "borderWidth": 3,
    "edgeQ": 20,
    "K": 0.205,
    "visualOpacity": 0.495,
    "partsOpacity": 0.43,
    "pictureOpacity": 1,
    "T": 50,
    "grid0Viz": "false",
    "grid1Viz": "true",
    "grid2Viz": "true",
    "grid3Viz": "true",
    "visualGridThickness1": 1,
    "visualGridThickness2": 2,
    "visualGridThickness3": 2,
    "visualGridSize1": 10,
    "visualGridSize2": 100,
    "visualGridSize3": 1000,
    "visualGridColour1": "#04ff00",
    "visualGridColour2": "#03c200",
    "visualGridColour3": "#0077b3",
    "gridIncrementArray": "metric",
    "cursorDisplay": "none"
};

userCustomTheme.f5 =
{
    "title": "Graph Paper Flipped",
    "description": "Inverted",
    "L": "#000000",
    "sL": "#000000",
    "finishedBackgroundColour": "#000000",
    "U": "#ff0000",
    "D": "#ff0000",
    "C": "#ff0000",
    "bU": "#ff009d",
    "greyColour": "#ff70ff",
    "blueColour": "#ffff00",
    "pinkColour": "#00ffff",
    "lineColour": "#ffffff",
    "selectedColour": "#000000",
    "thinOutline": 1,
    "borderWidth": 3,
    "edgeQ": 20,
    "K": 0.205,
    "visualOpacity": 0.495,
    "partsOpacity": 0.43,
    "pictureOpacity": 1,
    "T": 50,
    "grid0Viz": "false",
    "grid1Viz": "true",
    "grid2Viz": "true",
    "grid3Viz": "true",
    "visualGridThickness1": 1,
    "visualGridThickness2": 2,
    "visualGridThickness3": 2,
    "visualGridSize1": 10,
    "visualGridSize2": 100,
    "visualGridSize3": 1000,
    "visualGridColour1": "#fb00ff",
    "visualGridColour2": "#fc3dff",
    "visualGridColour3": "#ff884c",
    "gridIncrementArray": "metric",
    "cursorDisplay": "none"
};

userCustomTheme.g6 =
{
    "title": "MinimalG",
    "description": "Keep it simple.",
    "L": "#ffffff",
    "sL": "#ffffff",
    "finishedBackgroundColour": "#ffffff",
    "U": "#ff0000",
    "D": "#ff0000",
    "C": "#ff0000",
    "bU": "#ff009d",
    "greyColour": "#ff80ff",
    "blueColour": "#ff7f00",
    "pinkColour": "#5cadff",
    "lineColour": "#ffffff",
    "selectedColour": "#808080",
    "thinOutline": 2,
    "borderWidth": 5,
    "edgeQ": 24,
    "K": 0,
    "visualOpacity": 0.685,
    "partsOpacity": 0.375,
    "pictureOpacity": 0.645,
    "T": 24,
    "grid0Viz": "false",
    "grid1Viz": "false",
    "grid2Viz": "false",
    "grid3Viz": "false",
    "visualGridThickness1": 1,
    "visualGridThickness2": 2,
    "visualGridThickness3": 2,
    "visualGridSize1": 1,
    "visualGridSize2": 100,
    "visualGridSize3": 1000,
    "visualGridColour1": "#fb00ff",
    "visualGridColour2": "#fc3dff",
    "visualGridColour3": "#ff884c",
    "gridIncrementArray": "3",
    "cursorDisplay": "none"
};

userCustomTheme.h7 =
{
    "title": "MinimalH",
    "description": "Simple",
    "L": "#000000",
    "sL": "#000000",
    "finishedBackgroundColour": "#000000",
    "U": "#00ffff",
    "D": "#00ffff",
    "C": "#00ffff",
    "bU": "#00ff62",
    "greyColour": "#ff80ff",
    "blueColour": "#ff7f00",
    "pinkColour": "#5cadff",
    "lineColour": "#ffffff",
    "selectedColour": "#808080",
    "thinOutline": 2,
    "borderWidth": 5,
    "edgeQ": 24,
    "K": 0,
    "visualOpacity": 0.685,
    "partsOpacity": 0.375,
    "pictureOpacity": 0.645,
    "T": 24,
    "grid0Viz": "false",
    "grid1Viz": "false",
    "grid2Viz": "false",
    "grid3Viz": "false",
    "visualGridThickness1": 1,
    "visualGridThickness2": 2,
    "visualGridThickness3": 2,
    "visualGridSize1": 1,
    "visualGridSize2": 100,
    "visualGridSize3": 1000,
    "visualGridColour1": "#04ff00",
    "visualGridColour2": "#03c200",
    "visualGridColour3": "#0077b3",
    "gridIncrementArray": "3",
    "cursorDisplay": "none"
};

userCustomTheme.i8 =
{
    "title": "MinI",
    "description": "Simple",
    "L": "#ffffff",
    "sL": "#ffffff",
    "finishedBackgroundColour": "#ffffff",
    "U": "#ff0000",
    "D": "#ff0000",
    "C": "#ff0000",
    "bU": "#ff009d",
    "greyColour": "#007f00",
    "blueColour": "#0080ff",
    "pinkColour": "#a35200",
    "lineColour": "#000000",
    "selectedColour": "#7f7f7f",
    "thinOutline": 2,
    "borderWidth": 5,
    "edgeQ": 24,
    "K": 0,
    "visualOpacity": 0.685,
    "partsOpacity": 0.375,
    "pictureOpacity": 0.645,
    "T": 24,
    "grid0Viz": "false",
    "grid1Viz": "false",
    "grid2Viz": "false",
    "grid3Viz": "false",
    "visualGridThickness1": 1,
    "visualGridThickness2": 2,
    "visualGridThickness3": 2,
    "visualGridSize1": 1,
    "visualGridSize2": 100,
    "visualGridSize3": 1000,
    "visualGridColour1": "#fb00ff",
    "visualGridColour2": "#fc3dff",
    "visualGridColour3": "#ff884c",
    "gridIncrementArray": "3",
    "cursorDisplay": "none"
};

userCustomTheme.j9 =
{
    "title": "MinJ",
    "description": "Simple",
    "L": "#000000",
    "sL": "#000000",
    "finishedBackgroundColour": "#000000",
    "U": "#00ffff",
    "D": "#00ffff",
    "C": "#00ffff",
    "bU": "#00ff62",
    "greyColour": "#007f00",
    "blueColour": "#0080ff",
    "pinkColour": "#a35200",
    "lineColour": "#000000",
    "selectedColour": "#7f7f7f",
    "thinOutline": 2,
    "borderWidth": 5,
    "edgeQ": 24,
    "K": 0,
    "visualOpacity": 0.685,
    "partsOpacity": 0.375,
    "pictureOpacity": 0.645,
    "T": 24,
    "grid0Viz": "false",
    "grid1Viz": "false",
    "grid2Viz": "false",
    "grid3Viz": "false",
    "visualGridThickness1": 1,
    "visualGridThickness2": 2,
    "visualGridThickness3": 2,
    "visualGridSize1": 1,
    "visualGridSize2": 100,
    "visualGridSize3": 1000,
    "visualGridColour1": "#04ff00",
    "visualGridColour2": "#03c200",
    "visualGridColour3": "#0077b3",
    "gridIncrementArray": "3",
    "cursorDisplay": "none"
};














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
