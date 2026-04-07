shelfMenuHTML.tab5.folder1.HTML = `
<button id="popStyle1" class="button_ popStyle1" onclick="popStyle(); buzzWord(0,'style' ,96,'magenta',200,200,25,'top','','',event);" title="Style Block\nJust leave it on the page\nand it is used in the\noutfile."></button>
<button id="popStyle2" class="button_ popStyle2" onclick="popJSON() ; buzzWord(0,'JSON'  ,96,'blue'   ,200,200,25,'top','','',event);" title="JSON Block\nName the object\nOutfile has go.dat.json" ></button>
<button id="popStyle3" class="button_ popStyle3" onclick="popScript(); buzzWord(0,'script',96,'green'  ,200,200,25,'top','','',event);" title="add+Script\nThis is inserted after the\ndefault scripts from\nthe page." ></button>

<button id="activeStateEdit"        class="button_ activeStateEdit"        onclick="toggleActiveStateEdit();" title="Use NumLock"></button>

<button   id="statename"       class="statename dckimPixelMono" title="Click to Reset to\nthe Selected State" onclick="setCurrentState();"></button>
<button   id="stateFrame"      class="button_ stateFrame dckimPixelMono" title="(the frame number)"></button>

<button id="firstFrame"      class="button_ firstFrame"      onclick="firstState();    buzzWord(0,'<sup>home</sup>',112,'magenta',200,200,25,'top','','',event);"></button>
<button id="stateFrameLeft"  class="button_ stateFrameLeft"  onclick="previousState(); buzzWord(0,'<sup>pgDN</sup>' ,112,'magenta',200,200,25,'top','','',event);"></button>
<button id="stateFrameRight" class="button_ stateFrameRight" onclick="nextState();     buzzWord(0,'<sup>pgUP</sup>' ,112,'magenta',200,200,25,'top','','',event);" title="Use with Active Edit while\nmoving a part with the mouse."></button>
<button id="lastFrame"       class="button_ lastFrame"       onclick="lastState();     buzzWord(0,'<sup>end</sup>' ,112,'magenta',200,200,25,'top','','',event);"></button>

<button id="stateTiming" class="button_ stateTiming dckimPixelMono" title="Set Speed">200</button>

<button id="stateDel" class="button_ stateDel" onclick="deleteKey();" title="Use the DEL key.\nNumPad has everything going."></button>
<button id="stateIns" class="button_ stateIns" onclick="insertKey();" title="Same as tapping INSERT key.\nAlso tap F9 while moving\nparts with SHIFT\nor use PGUP PGDN while\nActive Edit is on(numlock)"></button>

<input id="filterBrightness" class="filterBrightness" type="range" min="0" max="5"  step="0.05" value="1" onclick="filterShiftClick(event);" oninput="updateFilter();" />
<input id="filterContrast"   class="filterContrast"   type="range" min="0" max="5"  step="0.05" value="1" onclick="filterShiftClick(event);" oninput="updateFilter();" />
<input id="filterIntensity"  class="filterIntensity"  type="range" min="0" max="5"  step="0.05" value="1" onclick="filterShiftClick(event);" oninput="updateFilter();" />
<input id="filterAntique"    class="filterAntique"    type="range" min="0" max="1"  step="0.05" value="0" onclick="filterShiftClick(event);" oninput="updateFilter();" />
<input id="filterGrayscale"  class="filterGrayscale"  type="range" min="0" max="1"  step="0.05" value="0" onclick="filterShiftClick(event);" oninput="updateFilter();" />
<input id="filterInvert"     class="filterInvert"     type="range" min="0" max="1"  step="0.05" value="0" onclick="filterShiftClick(event);" oninput="updateFilter();" />
<input id="filterOpacity"    class="filterOpacity"    type="range" min="0" max="1"  step="0.05" value="1" onclick="filterShiftClick(event);" oninput="updateFilter();" />
<input id="filterBlur"       class="filterBlur"       type="range" min="0" max="20" step="0.5"  value="0" onclick="filterShiftClick(event);" oninput="updateFilter();" />

<button id="filterReset" class="button_ filterReset" onclick="updateFilter('reset');" title="reset the filter\nset the current part to 'filter: none;'"></button>
<button id="backdropFilter" class="button_ backdropFilter" onclick="updateFilter('drop');" title="put a new backdrop filter"></button>
<button id="setFilter" class="button_ setFilter" onclick="updateFilter('set');" title="set this on the part"></button>

<textarea id="classListEntry" class="classListEntry dckimPixelMono" title="this is not animated yet" oninput="event.stopPropagation(); const target = coinFocus.lastElementChild.firstElementChild; try { target.classList = ''; const className = document.getElementById('classListEntry').value.trim().split(' '); for (t of className) { target.classList.add(t); } } catch {  };" title="NOTE: This is NOT working\n(yet)"></textarea>
`;
