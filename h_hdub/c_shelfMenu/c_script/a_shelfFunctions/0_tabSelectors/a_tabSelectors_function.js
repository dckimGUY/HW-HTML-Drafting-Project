ui.tab1.click                 = function() { tabSelector(1); };
ui.tab2.click                 = function() { tabSelector(2); };
ui.tab3.click                 = function() { tabSelector(3); };
ui.tab4.click                 = function() { tabSelector(4); };
ui.tab5.click                 = function() { tabSelector(5); };
ui.tab6.click                 = function() { tabSelector(6); };
ui.crop.click                 = function() { ui.menuWrapper.ref.style.display = "none";  ui.menu_open.ref.style.display = "block"; };
ui.menu_open.click            = function() { ui.menuWrapper.ref.style.display = "block"; ui.menu_open.ref.style.display = "none";  };

function tabSelector(tabNumber) {
/* HIDE EVERYTHING */
for (let j = 1; j < 7; j++) { document.getElementById("tab" + j + "Wrapper").style.display = "none"; }
/* SHOW THE SELECTED TAB */
document.getElementById("tab" + tabNumber + "Wrapper").style.display = "block";
/* KEEP THE TAB NUMBER IN LOCAL STORAGE */
localStorage.setItem("currentMenuTab", tabNumber);
}

/* THIS WILL SET OUR INITIAL STATE WHEN THE PAGE LOADS */
for (let j = 1; j < 7; j++) { document.getElementById("tab" + j + "Wrapper").style.display = "none"; }

/* CHECK LOCAL STORAGE FOR THE CURRENT TAB, IF NONE, DEFAULT TO 1 */
if (localStorage.getItem("currentMenuTab")) {
document.getElementById("tab" + localStorage.getItem("currentMenuTab") + "Wrapper").style.display = "block";
} else {
ui.tab1Wrapper.ref.style.display = "block";
}

