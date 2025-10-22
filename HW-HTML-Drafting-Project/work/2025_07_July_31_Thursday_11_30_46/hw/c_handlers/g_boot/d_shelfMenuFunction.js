const       folder1 = document.getElementById("folder1");
const       folder2 = document.getElementById("folder2");
const       folder3 = document.getElementById("folder3");
const folder1button = document.getElementById("folder1button");
const folder2button = document.getElementById("folder2button");
const folder3button = document.getElementById("folder3button");

const       folder11 = document.getElementById("folder11");
const       folder12 = document.getElementById("folder12");
const       folder21 = document.getElementById("folder21");
const       folder22 = document.getElementById("folder22");
const       folder31 = document.getElementById("folder31");
const       folder32 = document.getElementById("folder32");
const folder11button = document.getElementById("folder11button");
const folder12button = document.getElementById("folder12button");
const folder21button = document.getElementById("folder21button");
const folder22button = document.getElementById("folder22button");
const folder31button = document.getElementById("folder31button");
const folder32button = document.getElementById("folder32button");

const shelfToggle    = document.getElementById("shelfToggle");
const lowerShelf     = document.getElementById("lowerShelf");

/* OPEN AND CLOSE THE FOLDERS */

   shelfToggle.addEventListener("click", function() { if (lowerShelf.style.display == "none") { lowerShelf.style.display = "block"; localStorage.setItem("lowerShelf", "block"); } else { lowerShelf.style.display = "none"; localStorage.setItem("lowerShelf", "none" ); } });

document.getElementById("savePage").addEventListener( "click", function() { saveFromHotdog(0,false); });
document.getElementById("F1button").addEventListener( "click", function() { helpMenu(); });

 folder1button.addEventListener("click", function() { folder1.style.display  = "block"; localStorage.setItem("folder1", "block"); folder2.style.display = "none" ; localStorage.setItem("folder2", "none" ); folder3.style.display = "none" ; localStorage.setItem("folder3", "none" );  });
 folder2button.addEventListener("click", function() { folder1.style.display  = "none" ; localStorage.setItem("folder1", "none" ); folder2.style.display = "block"; localStorage.setItem("folder2", "block"); folder3.style.display = "none" ; localStorage.setItem("folder3", "none" );  });
 folder3button.addEventListener("click", function() { folder1.style.display  = "none" ; localStorage.setItem("folder1", "none" ); folder2.style.display = "none" ; localStorage.setItem("folder2", "none" ); folder3.style.display = "block"; localStorage.setItem("folder3", "block");  });

folder11button.addEventListener("click", function() { folder11.style.display = "block"; localStorage.setItem("folder11", "block"); folder12.style.display = "none" ; localStorage.setItem("folder12", "none" ); });
folder12button.addEventListener("click", function() { folder11.style.display = "none" ; localStorage.setItem("folder11", "none" ); folder12.style.display = "block"; localStorage.setItem("folder12", "block"); });
folder21button.addEventListener("click", function() { folder21.style.display = "block"; localStorage.setItem("folder21", "block"); folder22.style.display = "none" ; localStorage.setItem("folder22", "none" ); });
folder22button.addEventListener("click", function() { folder21.style.display = "none" ; localStorage.setItem("folder21", "none" ); folder22.style.display = "block"; localStorage.setItem("folder22", "block"); });
folder31button.addEventListener("click", function() { folder31.style.display = "block"; localStorage.setItem("folder31", "block"); folder32.style.display = "none" ; localStorage.setItem("folder32", "none" ); });
folder32button.addEventListener("click", function() { folder31.style.display = "none" ; localStorage.setItem("folder31", "none" ); folder32.style.display = "block"; localStorage.setItem("folder32", "block"); });


if (localStorage.getItem("lowerShelf")) { lowerShelf.style.display = localStorage.getItem("lowerShelf"); }

   if (localStorage.getItem("folder1")) { folder1.style.display = localStorage.getItem("folder1"); }
   if (localStorage.getItem("folder2")) { folder2.style.display = localStorage.getItem("folder2"); }
   if (localStorage.getItem("folder3")) { folder3.style.display = localStorage.getItem("folder3"); }

  if (localStorage.getItem("folder12")) { folder12.style.display = localStorage.getItem("folder12"); }
  if (localStorage.getItem("folder12")) { folder12.style.display = localStorage.getItem("folder12"); }
  if (localStorage.getItem("folder22")) { folder22.style.display = localStorage.getItem("folder22"); }
  if (localStorage.getItem("folder22")) { folder22.style.display = localStorage.getItem("folder22"); }
  if (localStorage.getItem("folder32")) { folder32.style.display = localStorage.getItem("folder32"); }
  if (localStorage.getItem("folder32")) { folder32.style.display = localStorage.getItem("folder32"); }


 document.getElementById("notesLeft").addEventListener("click", function() { focusPrevious(); updateInfoShelf(); redraw(); });
document.getElementById("notesRight").addEventListener("click", function() { focusNext();     updateInfoShelf(); redraw(); });

 document.getElementById("filenameEntrySaves").addEventListener("input", function() { filename = filenameEntrySaves.value;  });
document.getElementById("filenameEntryLayers").addEventListener("input", function() { filename = filenameEntryLayers.value; });


document.getElementById("setLayer1" ).addEventListener("click", function() { makeTopLayer("b_layer1" ); });
document.getElementById("setLayer2" ).addEventListener("click", function() { makeTopLayer("c_layer2" ); });
document.getElementById("setLayer3" ).addEventListener("click", function() { makeTopLayer("d_layer3" ); });
document.getElementById("setLayer4" ).addEventListener("click", function() { makeTopLayer("e_layer4" ); });
document.getElementById("setLayer5" ).addEventListener("click", function() { makeTopLayer("f_layer5" ); });
document.getElementById("setLayer6" ).addEventListener("click", function() { makeTopLayer("g_layer6" ); });
document.getElementById("setLayer7" ).addEventListener("click", function() { makeTopLayer("h_layer7" ); });
document.getElementById("setLayer8" ).addEventListener("click", function() { makeTopLayer("i_layer8" ); });
document.getElementById("setLayer9" ).addEventListener("click", function() { makeTopLayer("j_layer9" ); });
document.getElementById("setLayer10").addEventListener("click", function() { makeTopLayer("k_layer10"); });
document.getElementById("setLayer11").addEventListener("click", function() { makeTopLayer("l_layer11"); });
document.getElementById("setLayer12").addEventListener("click", function() { makeTopLayer("m_layer12"); });
document.getElementById("setLayer13").addEventListener("click", function() { makeTopLayer("n_layer13"); });
document.getElementById("setLayer14").addEventListener("click", function() { makeTopLayer("o_layer14"); });
document.getElementById("setLayer15").addEventListener("click", function() { makeTopLayer("p_layer15"); });
document.getElementById("setLayer16").addEventListener("click", function() { makeTopLayer("q_layer16"); });
document.getElementById("setLayer17").addEventListener("click", function() { makeTopLayer("r_layer17"); });
document.getElementById("setLayer18").addEventListener("click", function() { makeTopLayer("s_layer18"); });
document.getElementById("setLayer19").addEventListener("click", function() { makeTopLayer("t_layer19"); });
document.getElementById("setLayer20").addEventListener("click", function() { makeTopLayer("u_layer20"); });
document.getElementById("setLayer21").addEventListener("click", function() { makeTopLayer("v_layer21"); });
document.getElementById("setLayer22").addEventListener("click", function() { makeTopLayer("w_layer22"); });
document.getElementById("setLayer23").addEventListener("click", function() { makeTopLayer("x_layer23"); });
document.getElementById("setLayer24").addEventListener("click", function() { makeTopLayer("y_layer24"); });
document.getElementById("setLayer25").addEventListener("click", function() { makeTopLayer("z_layer25"); });


lowerShelf.addEventListener("mousedown",     function() { event.stopPropagation(); }, true);
lowerShelf.addEventListener("mousemove",     function() { event.stopPropagation(); }, true);
lowerShelf.addEventListener("keydown",       function() { event.stopPropagation(); }, true);
lowerShelf.addEventListener("keypress",      function() { event.stopPropagation(); }, true);
lowerShelf.addEventListener("keyup",         function() { event.stopPropagation(); }, true);

//document.getElementById("feedGoButton");
//document.getElementById("feedTextualAccess");

document.getElementById("partName").addEventListener("input", function() { if (coinFocus!=null) { if (curFocus==0) { coinFocus.name = document.getElementById("partName").value; } } });
document.getElementById("partNotes").addEventListener( "input", function() { if (coinFocus!=null) { if (curFocus==0) { coinFocus.dataset.notes = document.getElementById("partNotes").value; } } });


document.getElementById("cycleLayerLeft" ).addEventListener( "click", function() { layerLeft();  });
document.getElementById("cycleLayerRight").addEventListener( "click", function() { layerRight(); });
