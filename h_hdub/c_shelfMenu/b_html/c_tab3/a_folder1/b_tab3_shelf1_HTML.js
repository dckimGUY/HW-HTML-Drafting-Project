shelfMenuHTML.tab3.folder1.HTML = `
<div   id="buttonMakerContainer" class="buttonMakerContainer">
<div   id="yourButtonIsHere"     class="yourButtonIsHere"></div>


<div   id="buttonScale"                                           class="buttonScale"> 
<textarea id="textEntry"         class="offscreen"></textarea>



<canvas id="canvasOutput1" width="312" height="56" style="display: none;"></canvas>
<canvas id="canvasOutput2" width="312" height="56" style="display: none;"></canvas>
<canvas id="canvasOutput3" width="312" height="56" style="display: none;"></canvas>
<canvas id="canvasOutput4" width="312" height="56" style="display: none;"></canvas>

<input id="textFace"     name="textFace"     title="textFace"     class="input_pos input_buttonFace"   type="color" value="#ACBA6A">
<input id="buttonTop"    name="buttonTop"    title="buttonTop"    class="input_pos input_buttonShadow" type="color" value="#EEEA31">
<input id="textRight"    name="textRight"    title="textRight"    class="input_pos input_buttonLeft"   type="color" value="#737973">

<input id="buttonLeft"   name="buttonLeft"   title="buttonLeft"   class="input_pos input_buttonTop"    type="color" value="#B485CD">
<input id="buttonFace"   name="buttonFace"   title="buttonFace"   class="input_pos input_buttonRight"  type="color" value="#C5C2C5">
<input id="buttonRight"  name="buttonRight"  title="buttonRight"  class="input_pos input_buttonBottom" type="color" value="#A4AAA4">

<input id="buttonShadow" name="buttonShadow" title="buttonShadow" class="input_pos input_textRight"    type="color" value="#FFA3A3">
<input id="buttonBottom" name="buttonBottom" title="buttonBottom" class="input_pos input_textBottom"   type="color" value="#737973">
<input id="textBottom"   name="textBottom"   title="textBottom"   class="input_pos input_textFace"     type="color" value="#00FF00">

<input id="textActive"   name="textHover"    title="textActive"   class="input_pos input_textHover"    type="color" value="#00A1EE">
<input id="textHover"    name="textActive"   title="textHover"    class="input_pos input_textActive"   type="color" value="#FF00FF">
<input id="textFocus"    name="textFocus"    title="textFocus"    class="input_pos input_textFocus"    type="color" value="#101C52">

<input id="buttonTooltip" class="input input_buttonTooltip dckimPixelMono" placeholder="tooltip" title="Click the button to type custom text.">
<input id="buttonLink"    class="input input_buttonLink dckimPixelMono"    placeholder="URL, blank=NAV"     title="If not empty, the link is used instead of internal navigation, which uses the currently selected object.">

</div>
</div>

<div class="covering"></div>

<button id="readButtonBack" class="button_ button_readButtonBack" title="Read button colour back into the program."></button>

<button id="cycleColourLeft" class="button_ button_cycleColourLeft" title="Cycle Colours Left"></button>
<button id="cycleColoursRight" class="button_ button_cycleColoursRight" title="Cycle Colours Right"></button>
<button id="navPoint7" class="button_ button_navPoint7" title="NAV Part: top left,\n+SHIFT for Screen\n+CTRL to copy code"></button>
<button id="navPoint8" class="button_ button_navPoint8" title="NAV Part: top centre,\n+SHIFT for Screen\n+CTRL to copy code"></button>
<button id="navPoint9" class="button_ button_navPoint9" title="NAV Part: top right,\n+SHIFT for Screen\n+CTRL to copy code"></button>
<button id="navPoint4" class="button_ button_navPoint4" title="NAV Part: left centre,\n+SHIFT for Screen\n+CTRL to copy code"></button>
<button id="navPoint5" class="button_ button_navPoint5" title="NAV Part: centre,\n+SHIFT for Screen\n+CTRL to copy code"></button>
<button id="navPoint6" class="button_ button_navPoint6" title="NAV Part: right centre,\n+SHIFT for Screen\n+CTRL to copy code"></button>
<button id="navPoint1" class="button_ button_navPoint1" title="NAV Part: bottom left,\n+SHIFT for Screen\n+CTRL to copy code"></button>
<button id="navPoint2" class="button_ button_navPoint2" title="NAV Part: bottom centre,\n+SHIFT for Screen\n+CTRL to copy code"></button>
<button id="navPoint3" class="button_ button_navPoint3" title="NAV Part: bottom right,\n+SHIFT for Screen\n+CTRL to copy code"></button>





<textarea id="buttonWordList" name="buttonWordList" class="input_ input_buttonWordList dckimPixelMono" type="value" placeholder="empty" spellcheck="false">0
1
2
3
4
5
6
7
8
9</textarea>
<button id="popColours" class="button_ button_popColours dckimPixelMono" title="cycle colours and pop lines"></button>
<button id="popButton" class="button_ button_popButton dckimPixelMono" title="pop lines into new buttons"></button>
<button id="ringButton" class="button_ button_ringButton dckimPixelMono" title="set up a navigation ring from the list,\n'SHIFT' gives colours,\nuse only two buttons to\nget a 'back-and-forth'">navigation</button>

<button id="navUpscale" class="navUpscale dckimPixelMono" disabled="true" title="that dot is written in pencil">16</button>

<button id="navAlphabet" class="navAlphabet" title="these look like they are in reverse,\nbut they will make linkages in the forwards order.\nWhen saved, the webpage will be functionable from the keyboard." onclick="
document.getElementById('buttonWordList').value = alphabet.join('. \\n') + '. ';
if (!event.shiftKey) {
document.getElementById('buttonWordList').value = alphabet.reverse().join('. \\n') + '. ';
alphabet.reverse();
}
"></button>
<button id="navNumber"   class="navNumber"  title="these look like they are in reverse,\nbut they will make linkages in the forwards order.\nWhen saved, the webpage will be functionable from the keyboard."  onclick="
document.getElementById('buttonWordList').value = ' 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26'.replace(/,/g, '. \\n') + '. ';
if (!event.shiftKey) {
document.getElementById('buttonWordList').value = ' 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26'.split(',').reverse().join(',').replace(/,/g, '. \\n') + '. ';
}
"></button>

<button id="gridLock" class="button_ button_gridLock" title=""></button>

`;
