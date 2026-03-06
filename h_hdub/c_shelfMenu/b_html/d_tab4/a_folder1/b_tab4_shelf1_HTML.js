shelfMenuHTML.tab4.folder1.HTML = `

<button id="saveBlank" class="button_ saveBlank" onclick="manufactureTemplate(cropObject(100, 180, makeObject(clean('h180w100')))); buzzWord(0,'SAVED',96,'yellow',200,200,25,'top','','',event);" title="SAVE: Blank Template\nAt This Scale Factor"></button>
<button id="HDUBinfo"  class="button_ HDUBinfo"  onclick="programManual('information-for-button-crafting');" title="PROGRAM USER MANUAL:\nInformation For Button Crafting"></button>



<textarea id="hdubSingleEntry" class="textarea_ input_hdubSingleEntry dckimPixelMono" placeholder="empty"
title="HDUB MANUAL ENTRY:\nTIP: Use NUMPAD with dot and dash\nthey replace the h and w.\nabc Changes the Slot.\nENTER inserts the shapes to HTML.\nSPACE saves a Shape-Key\nQuick-Access to this input\nusing SHIFT+SPACE\nESC returns to the workspace.\n< > Changes the Level
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




<button id="hdubSheetTemplate1x" class="button_ button_hdubSheetTemplate1x" title="SAVE: Base Image Sheet\n(This is part of a\nmulti-step process.\nFor more information\nuse the W? below.)"></button>
<input id="hdubSheetTemplate4x" class="button_ button_hdubSheetTemplate4x" type="range" min="1" max="20" step="1" value="10" title="hdubEntryFactor">


<button id="hwSel_a" class="button_ button_hwSel_a" title=""><img class="hwSel" ></button>
<button id="hwSel_b" class="button_ button_hwSel_b" title=""><img class="hwSel" ></button>
<button id="hwSel_c" class="button_ button_hwSel_c" title=""><img class="hwSel" ></button>
<button id="hwSel_d" class="button_ button_hwSel_d" title=""><img class="hwSel" ></button>
<button id="hwSel_e" class="button_ button_hwSel_e" title=""><img class="hwSel" ></button>
<button id="hwSel_f" class="button_ button_hwSel_f" title=""><img class="hwSel" ></button>
<button id="hwSel_g" class="button_ button_hwSel_g" title=""><img class="hwSel" ></button>
<button id="hwSel_i" class="button_ button_hwSel_i" title=""><img class="hwSel" ></button>
<button id="hwSel_j" class="button_ button_hwSel_j" title=""><img class="hwSel" ></button>
<button id="hwSel_k" class="button_ button_hwSel_k" title=""><img class="hwSel" ></button>
<button id="hwSel_l" class="button_ button_hwSel_l" title=""><img class="hwSel" ></button>
<button id="hwSel_m" class="button_ button_hwSel_m" title=""><img class="hwSel" ></button>
<button id="hwSel_n" class="button_ button_hwSel_n" title=""><img class="hwSel" ></button>
<button id="hwSel_o" class="button_ button_hwSel_o" title=""><img class="hwSel" ></button>
<button id="hwSel_p" class="button_ button_hwSel_p" title=""><img class="hwSel" ></button>
<button id="hwSel_q" class="button_ button_hwSel_q" title=""><img class="hwSel" ></button>
<button id="hwSel_r" class="button_ button_hwSel_r" title=""><img class="hwSel" ></button>
<button id="hwSel_s" class="button_ button_hwSel_s" title=""><img class="hwSel" ></button>
<button id="hwSel_t" class="button_ button_hwSel_t" title=""><img class="hwSel" ></button>
<button id="hwSel_u" class="button_ button_hwSel_u" title=""><img class="hwSel" ></button>
<button id="hwSel_v" class="button_ button_hwSel_v" title=""><img class="hwSel" ></button>
<button id="hwSel_x" class="button_ button_hwSel_x" title=""><img class="hwSel" ></button>
<button id="hwSel_y" class="button_ button_hwSel_y" title=""><img class="hwSel" ></button>
<button id="hwSel_z" class="button_ button_hwSel_z" title=""><img class="hwSel" ></button>
`;
