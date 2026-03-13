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

<button id="stateTiming" class="button_ stateTiming dckimPixelMono" title="This is not yet in use.">2000</button>


<button id="stateDel" class="button_ stateDel" onclick="deleteKey();" title="Use the DEL key.\nNumPad has everything going."></button>
<button id="stateIns" class="button_ stateIns" onclick="insertKey();" title="Same as tapping INSERT key.\nAlso tap F9 while moving\nparts with SHIFT\nor use PGUP PGDN while\nActive Edit is on(numlock)"></button>

 
<textarea id="classListEntry" class="classListEntry dckimPixelMono" oninput="event.stopPropagation(); const target = coinFocus.lastElementChild.lastElementChild.previousElementSibling; try { target.classList = ''; const className = document.getElementById('classListEntry').value.trim().split(' '); for (t of className) { target.classList.add(t); } } catch {  };" title="NOTE: This is NOT working\n(yet)"></textarea>






`;
