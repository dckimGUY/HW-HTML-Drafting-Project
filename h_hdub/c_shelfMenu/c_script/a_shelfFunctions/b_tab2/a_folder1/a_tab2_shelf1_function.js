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
ui.hdub_menuScaleHalf.click      = function() { ui.menuWrapper.ref.style.transform = "scale(0.50)"; };
ui.hdub_menuScaleQuarter.click   = function() { ui.menuWrapper.ref.style.transform = "scale(0.25)"; };
ui.hdub_menuScaleEighth.click    = function() { ui.menuWrapper.ref.style.transform = "scale(0.125)"; };