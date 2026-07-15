const USER_MENU_DATA = [

{ text: "File", items: [
{ text: "New Project", shortcut: "F5", action: () => { location.reload(); } },
{ text: "Open Project", shortcut: "", action: () => { openProject(); } },
{ text: "Save Project", shortcut: "s", action: () => { saveProject(); } },
{text: "Save Webpage(s)", items: [
{ text: "Save '.zip'" , shortcut: "Website", action: () => { document.getElementById('').click(); } },
{ note: "Save with sources, and in folders as a complete website package. Edit the image atlas, images, and audio later directly." }
]},
{text: "Save Web-Program", items: [
{ text: "Save Pixels" ,  shortcut: "", action: () => { document.getElementById('save200').click(); } },
{ text: "Save Screen Width" , shortcut: "", action: () => { document.getElementById('save300').click(); } },
{ text: "Save VW 500" ,  shortcut: "", action: () => { document.getElementById('save500').click(); } },
{ text: "Save VW 768" ,  shortcut: "", action: () => { document.getElementById('save800').click(); } },
{ text: "Save VW 1000" , shortcut: "", action: () => { document.getElementById('save1000').click(); } },
{ text: "Save VW 1280" , shortcut: "", action: () => { document.getElementById('save1200').click(); } },
{ text: "Save VW 1536" , shortcut: "", action: () => { document.getElementById('save1500').click(); } },
{ text: "Save VW 2000" , shortcut: "", action: () => { document.getElementById('save1800').click(); } },
{ note: "All of these will save the program as a single file with base64 sources. It's not easy to change images etc later. This will make a single-file vanilla web-program. Basically, you could view it and use it from your phone without internet." }
]}
]},

{ text: "Change Level", items: [
{ text: "Next Level", shortcut: "Shift+>", action: () => { layerRight(); lastKey = ">"; } },
{ text: "Previous Level", shortcut: "Shift+<", action: () => { layerLeft(); lastKey = "<"; } },
{ text: "Select Level",
items: [
{ text: "Levels 1-10",
items: [
{ text: "Goto Level 1" , shortcut: "1", action: () => { changeLayer("b_layer1" ); lastKey = "1"; } },
{ text: "Goto Level 2" , shortcut: "2", action: () => { changeLayer("c_layer2" ); lastKey = "2"; } },
{ text: "Goto Level 3" , shortcut: "3", action: () => { changeLayer("d_layer3" ); lastKey = "3"; } },
{ text: "Goto Level 4" , shortcut: "4", action: () => { changeLayer("e_layer4" ); lastKey = "4"; } },
{ text: "Goto Level 5" , shortcut: "5", action: () => { changeLayer("f_layer5" ); lastKey = "5"; } },
{ text: "Goto Level 6" , shortcut: "6", action: () => { changeLayer("g_layer6" ); lastKey = "6"; } },
{ text: "Goto Level 7" , shortcut: "7", action: () => { changeLayer("h_layer7" ); lastKey = "7"; } },
{ text: "Goto Level 8" , shortcut: "8", action: () => { changeLayer("i_layer8" ); lastKey = "8"; } },
{ text: "Goto Level 9" , shortcut: "9", action: () => { changeLayer("j_layer9" ); lastKey = "9"; } },
{ text: "Goto Level 10", shortcut: "0", action: () => { changeLayer("k_layer10"); lastKey = "0"; } }
]},
{ text: "Levels 11-20",
items: [
{ text: "Goto Level 11", shortcut: "!", action: () => { changeLayer("l_layer11"); lastKey = "!"; } },
{ text: "Goto Level 12", shortcut: "@", action: () => { changeLayer("m_layer12"); lastKey = "@"; } },
{ text: "Goto Level 13", shortcut: "#", action: () => { changeLayer("n_layer13"); lastKey = "#"; } },
{ text: "Goto Level 14", shortcut: "$", action: () => { changeLayer("o_layer14"); lastKey = "$"; } },
{ text: "Goto Level 15", shortcut: "%", action: () => { changeLayer("p_layer15"); lastKey = "%"; } },
{ text: "Goto Level 16", shortcut: "^", action: () => { changeLayer("q_layer16"); lastKey = "^"; } },
{ text: "Goto Level 17", shortcut: "&", action: () => { changeLayer("r_layer17"); lastKey = "&"; } },
{ text: "Goto Level 18", shortcut: "*", action: () => { changeLayer("s_layer18"); lastKey = "*"; } },
{ text: "Goto Level 19", shortcut: "(", action: () => { changeLayer("t_layer19"); lastKey = "("; } },
{ text: "Goto Level 20", shortcut: ")", action: () => { changeLayer("u_layer20"); lastKey = ")"; } }
]},
]}
]
},

{ text: "Insert Link", items: [
{ text: "Select Level",
items: [
{text: "Levels 1-10",
items: [
{ text: "Goto Level 1" , action: () => { linkButton( "Goto Level 1" , "try { !!utilityLayer0; changeLayer('b_layer1' );  } catch { window.location='{{lvl1}}' ;  }"); } },
{ text: "Goto Level 2" , action: () => { linkButton( "Goto Level 2" , "try { !!utilityLayer0; changeLayer('c_layer2' );  } catch { window.location='{{lvl2}}' ;  }"); } },
{ text: "Goto Level 3" , action: () => { linkButton( "Goto Level 3" , "try { !!utilityLayer0; changeLayer('d_layer3' );  } catch { window.location='{{lvl3}}' ;  }"); } },
{ text: "Goto Level 4" , action: () => { linkButton( "Goto Level 4" , "try { !!utilityLayer0; changeLayer('e_layer4' );  } catch { window.location='{{lvl4}}' ;  }"); } },
{ text: "Goto Level 5" , action: () => { linkButton( "Goto Level 5" , "try { !!utilityLayer0; changeLayer('f_layer5' );  } catch { window.location='{{lvl5}}' ;  }"); } },
{ text: "Goto Level 6" , action: () => { linkButton( "Goto Level 6" , "try { !!utilityLayer0; changeLayer('g_layer6' );  } catch { window.location='{{lvl6}}' ;  }"); } },
{ text: "Goto Level 7" , action: () => { linkButton( "Goto Level 7" , "try { !!utilityLayer0; changeLayer('h_layer7' );  } catch { window.location='{{lvl7}}' ;  }"); } },
{ text: "Goto Level 8" , action: () => { linkButton( "Goto Level 8" , "try { !!utilityLayer0; changeLayer('i_layer8' );  } catch { window.location='{{lvl8}}' ;  }"); } },
{ text: "Goto Level 9" , action: () => { linkButton( "Goto Level 9" , "try { !!utilityLayer0; changeLayer('j_layer9' );  } catch { window.location='{{lvl9}}' ;  }"); } },
{ text: "Goto Level 10", action: () => { linkButton( "Goto Level 10", "try { !!utilityLayer0; changeLayer('k_layer10');  } catch { window.location='{{lvl10}}';  }"); } }
]},
{
text: "Levels 11-20",
items: [
{ text: "Goto Level 11", action: () => { linkButton( "Goto Level 11", "try { !!utilityLayer0; changeLayer('l_layer11');  } catch { window.location='{{lvl11}}';  }"); } },
{ text: "Goto Level 12", action: () => { linkButton( "Goto Level 12", "try { !!utilityLayer0; changeLayer('m_layer12');  } catch { window.location='{{lvl12}}';  }"); } },
{ text: "Goto Level 13", action: () => { linkButton( "Goto Level 13", "try { !!utilityLayer0; changeLayer('n_layer13');  } catch { window.location='{{lvl13}}';  }"); } },
{ text: "Goto Level 14", action: () => { linkButton( "Goto Level 14", "try { !!utilityLayer0; changeLayer('o_layer14');  } catch { window.location='{{lvl14}}';  }"); } },
{ text: "Goto Level 15", action: () => { linkButton( "Goto Level 15", "try { !!utilityLayer0; changeLayer('p_layer15');  } catch { window.location='{{lvl15}}';  }"); } },
{ text: "Goto Level 16", action: () => { linkButton( "Goto Level 16", "try { !!utilityLayer0; changeLayer('q_layer16');  } catch { window.location='{{lvl16}}';  }"); } },
{ text: "Goto Level 17", action: () => { linkButton( "Goto Level 17", "try { !!utilityLayer0; changeLayer('r_layer17');  } catch { window.location='{{lvl17}}';  }"); } },
{ text: "Goto Level 18", action: () => { linkButton( "Goto Level 18", "try { !!utilityLayer0; changeLayer('s_layer18');  } catch { window.location='{{lvl18}}';  }"); } },
{ text: "Goto Level 19", action: () => { linkButton( "Goto Level 19", "try { !!utilityLayer0; changeLayer('t_layer19');  } catch { window.location='{{lvl19}}';  }"); } },
{ text: "Goto Level 20", action: () => { linkButton( "Goto Level 20", "try { !!utilityLayer0; changeLayer('u_layer20');  } catch { window.location='{{lvl20}}';  }"); } }
]},
]},
{ note: "Make easy links to other web-pages that are in this twenty-page website. You can also copy the code to your custom buttons." }
]
},




{ text: "Background", items: [
{ text: "Set Background Image", shortcut: "", action: () => { document.getElementById("coin44038").click(); } },
]
},





{ text: "Animation", items: [
{ text: "Insert Frame", shortcut: "INS", action: () => { document.getElementById("stateIns").click(); } },
{ text: "Make Animation Block", shortcut: "shift+INS", action: () => { document.getElementById("dumpAccumulator").click(); } },
{ text: "Open Animation Test Page", shortcut: "shift+ENTER", action: () => { deMinimis(false,'','',true); } },
{ note: "First make the changes to the filter, position, size, rotation, etc, then insert the frame. When you are finished make the animation block. Use 'active edit' to change it later. Click the code in the animation test window to copy it. Paste the code into your button 'click'." }
]
},











{ text: "Live View",
items: [
{ text: "Enter Live View", shortcut: "ENTER", action: (e) => { hotDog = true; spaceViewOn([e,32,32,,,]); removePointerEventsNone(); } },
{ text: "Exit Live View",
shortcut: "ESC",
action: (e) => {
hdubDemo.style.opacity = 0;
Picture.style.display = 'none';
if (ui.folder52.ref.style.display == "none" || ui.tab5Wrapper.ref.style.display == "none") {
hdubDemo.style.opacity = 0;
}
if (mode == 0) {
curFocus = 0;
modeRouter(e, 1);
}
hotDog = false;
spaceViewOff([e, 32, 32, e.shiftKey, e.ctrlKey, e.altKey]);
restorePointerEventsNone();
helpMenuOverlay.style.display = "none";
F.focus();
if (activeStateEdit == true) {
}
activeStateEdit = false;
document.getElementById("activeStateEdit").style.outline = "";
document.getElementById("activeStateEdit").style.backgroundColor = "transparent";
}
},
{ note: "Use the spacebar to quickly flip in and out of the live view. Enter and Esc are used together." }
]
},




























{ text: "Help",
items: [
{
text: "Open the Keymap",
shortcut: "F1",
action: () => {
openKeymap();
}
},
{ note: "If you are looking for other hints and tips, try to find the manual online, and check out some of the notes and tooltips in the program." }
]
},








{ text: "About", items: [
{ text: "Download - HDUB Pixel Art Edition",
shortcut: "Ctrl+S",
action: (e) => {
e.preventDefault();
document.getElementById("levelBar").style.display = "none";
animatorBar.style.display = "none";
localStorage.setItem("levelBar", document.getElementById("levelBar").style.display);
if (document.querySelector('script[src^="bundle.js"]')) {
const link = document.createElement('a');
link.href = './hdubPixelArtEdition.zip';
link.download = 'hdubPixelArtEdition.zip';
link.click();
} else {
document.body.style.cursor = 'wait';
const doctype = "<!DOCTYPE html>\n";
let htmlSource = doctype + document.documentElement.outerHTML;
htmlSource = htmlSource.replace(/>\s+</g, '><').replace(/\s{2,}/g, ' ').replace(/\n\s+/g, '\n');
const encoder = new TextEncoder();
const fileBytes = encoder.encode(htmlSource);
fflate.zip({ "hdubPixelArtEdition.html": [fileBytes, { level: 6 }] }, (err, data) => {
document.body.style.cursor = 'default';
if (err) return console.error("Zipping failed:", err);
const blob = new Blob([data], { type: 'application/zip' });
const url = URL.createObjectURL(blob);
const link = document.createElement('a');
link.href = url;
link.download = 'hdubPixelArtEdition.zip';
link.click();
setTimeout(() => URL.revokeObjectURL(url), 2000);
});
} } },
{ note: "Download this entire program. It's only one file, so that makes it incredibly portable. It doesn't need anything special, only the browser. It never needs updating, and does not contact anything externally to operate. You don't even need an internet connection to use it." }
]
},
















];
