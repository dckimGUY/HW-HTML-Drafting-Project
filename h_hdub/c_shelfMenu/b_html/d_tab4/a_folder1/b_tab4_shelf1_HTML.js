shelfMenuHTML.tab4.folder1.HTML = `


<button id="saveZip" class="button_ saveZip" onclick="buzzWord(0,'zip',96,'yellow',200,200,25,'top','','',event);" title="not working yet"></button>


<button id="saveBlank" class="button_ saveBlank" onclick="manufactureTemplate(cropObject(100, 180, makeObject(clean('h180w100')))); buzzWord(0,'SAVED',96,'yellow',200,200,25,'top','','',event);" title="SAVE: Blank Template\nAt This Scale Factor"></button>
<button id="HDUBinfo"  class="button_ HDUBinfo"  onclick="programManual('information-for-button-crafting');" title="PROGRAM USER MANUAL:\nInformation For Button Crafting"></button>



<textarea id="hdubSingleEntry" class="textarea_ input_hdubSingleEntry dckimPixelMono" placeholder="empty"
title="HDUB MANUAL ENTRY:\nTIP: Use NUMPAD with dot and dash\nthey replace the h and w.\nabc Changes the Slot.\nENTER inserts the shapes to HTML.\nSPACE saves a Shape-Key\nQuick-Access to this input\nusing SHIFT+M\nESC returns to the workspace.\n< > Changes the Level
[ ] Changes the Scale"
spellcheck="false">h20w20w20w20w20w20h50w50w50h40w20w30w40w10</textarea>

<textarea id="hdubPartDesignations" class="textarea_ input_hdubPartDesignations dckimPixelMono" placeholder="part" title="Manual Part Entry:\nUse Capital Letters\n[A-Z]" spellcheck="false"></textarea>



<button id="cancelEntries" class="button_ cancelEntries" onclick="document.getElementById('hdubSingleEntry').value = ''; document.getElementById('hdubPartDesignations').value = ''; hdubDemo.style.opacity = 0; Picture.style.display='none'; buzzWord(0,'CANCEL',96,'red',200,200,25,'top','','',event);"></button>


<button id="hdubAdd" class="button_ button_hdubAdd" title="add this one to the comma separated list"></button>
<textarea id="hdubRoll" class="textarea_ input_hdubRoll dckimPixelMono" placeholder="empty" title="comma separated hdub syntaxes" spellcheck="false"></textarea>
<button id="hdubRollLeft" class="button_ button_hdubRollLeft" title="roll through shape keys left"></button>
<button id="hdubRollRight" class="button_ button_hdubRollRight" title="roll through shape keys right"></button>
<button id="hdubEnter" class="button_ button_hdubEnter" title="enter this into HTML Drafting as parts"></button>
<button id="hdubSave" class="button_ button_hdubSave" title="save to image with syntax in filename"></button>

<canvas id="hdubCanvas" class="textarea_ input_hdubCanvas" width="100" height="180" title=""></canvas>

<div id="hdubOverlay" class="textarea_ input_hdubOverlay" title=""></div>




<button id="hdubSheetTemplate1x" class="button_ button_hdubSheetTemplate1x drag-button" draggable="true" title="SAVE: Base Image Sheet\n(This is part of a\nmulti-step process.\nFor more information\nuse the W? below.)"></button>
<input id="hdubSheetTemplate4x" class="button_ button_hdubSheetTemplate4x" type="range" min="1" max="20" step="1" value="10" title="hdubEntryFactor">


<button id="hwSel_a" class="button_ button_hwSel_a button_hwSel drag-button" draggable="true" title=""><img class="hwSel" ></button>
<button id="hwSel_b" class="button_ button_hwSel_b button_hwSel drag-button" draggable="true" title=""><img class="hwSel" ></button>
<button id="hwSel_c" class="button_ button_hwSel_c button_hwSel drag-button" draggable="true" title=""><img class="hwSel" ></button>
<button id="hwSel_d" class="button_ button_hwSel_d button_hwSel drag-button" draggable="true" title=""><img class="hwSel" ></button>
<button id="hwSel_e" class="button_ button_hwSel_e button_hwSel drag-button" draggable="true" title=""><img class="hwSel" ></button>
<button id="hwSel_f" class="button_ button_hwSel_f button_hwSel drag-button" draggable="true" title=""><img class="hwSel" ></button>
<button id="hwSel_g" class="button_ button_hwSel_g button_hwSel drag-button" draggable="true" title=""><img class="hwSel" ></button>
<button id="hwSel_i" class="button_ button_hwSel_i button_hwSel drag-button" draggable="true" title=""><img class="hwSel" ></button>
<button id="hwSel_j" class="button_ button_hwSel_j button_hwSel drag-button" draggable="true" title=""><img class="hwSel" ></button>
<button id="hwSel_k" class="button_ button_hwSel_k button_hwSel drag-button" draggable="true" title=""><img class="hwSel" ></button>
<button id="hwSel_l" class="button_ button_hwSel_l button_hwSel drag-button" draggable="true" title=""><img class="hwSel" ></button>
<button id="hwSel_m" class="button_ button_hwSel_m button_hwSel drag-button" draggable="true" title=""><img class="hwSel" ></button>
<button id="hwSel_n" class="button_ button_hwSel_n button_hwSel drag-button" draggable="true" title=""><img class="hwSel" ></button>
<button id="hwSel_o" class="button_ button_hwSel_o button_hwSel drag-button" draggable="true" title=""><img class="hwSel" ></button>
<button id="hwSel_p" class="button_ button_hwSel_p button_hwSel drag-button" draggable="true" title=""><img class="hwSel" ></button>
<button id="hwSel_q" class="button_ button_hwSel_q button_hwSel drag-button" draggable="true" title=""><img class="hwSel" ></button>
<button id="hwSel_r" class="button_ button_hwSel_r button_hwSel drag-button" draggable="true" title=""><img class="hwSel" ></button>
<button id="hwSel_s" class="button_ button_hwSel_s button_hwSel drag-button" draggable="true" title=""><img class="hwSel" ></button>
<button id="hwSel_t" class="button_ button_hwSel_t button_hwSel drag-button" draggable="true" title=""><img class="hwSel" ></button>
<button id="hwSel_u" class="button_ button_hwSel_u button_hwSel drag-button" draggable="true" title=""><img class="hwSel" ></button>
<button id="hwSel_v" class="button_ button_hwSel_v button_hwSel drag-button" draggable="true" title=""><img class="hwSel" ></button>
<button id="hwSel_x" class="button_ button_hwSel_x button_hwSel drag-button" draggable="true" title=""><img class="hwSel" ></button>
<button id="hwSel_y" class="button_ button_hwSel_y button_hwSel drag-button" draggable="true" title=""><img class="hwSel" ></button>
<button id="hwSel_z" class="button_ button_hwSel_z button_hwSel drag-button" draggable="true" title=""><img class="hwSel" ></button>


`;
