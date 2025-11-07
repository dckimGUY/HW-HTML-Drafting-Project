/* ROW 1 */

ui.modeZ.click                   = function() { manageGlobalZ(0); modeRouter(null,9); };
ui.modeEeM1.click                = function() { eM=1; modeRouter(null,5); };
ui.modeD.click                   = function() { modeRouter(null,6); };
ui.modeG.click                   = function() { curFocus=0; modeRouter(null,1); };
ui.modeEeM0.click                = function() { eM=0; modeRouter(null,5); };
ui.modeT.click                   = function() { modeRouter(null,8); };

/* ROW 2 */

ui.hdub_menuScale8.click         = function() { ui.menuWrapper.ref.style.transform = "scale(8.00)"; };
ui.hdub_menuScale4.click         = function() { ui.menuWrapper.ref.style.transform = "scale(4.00)"; };
ui.hdub_menuScale2.click         = function() { ui.menuWrapper.ref.style.transform = "scale(2.00)"; };
ui.hdub_menuScale1.click         = function() { ui.menuWrapper.ref.style.transform = "scale(1.00)"; };
ui.hdub_menuScaleHalf.click      = function() { ui.menuWrapper.ref.style.transform = "scale(0.80)"; };
ui.hdub_menuScaleQuarter.click   = function() { ui.menuWrapper.ref.style.transform = "scale(0.65)"; };
ui.hdub_menuScaleEighth.click    = function() { ui.menuWrapper.ref.style.transform = "scale(0.50)"; };


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

ui.coin53526.input              = function() {  };
ui.coin56897.input              = function() {  };
ui.coin59527.input              = function() {  };
ui.coin17325.input              = function() {  };

