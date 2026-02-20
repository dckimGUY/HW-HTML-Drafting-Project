shelfMenuHTML.tab4.folder2.HTML = `
<button   id="clipCSS"   onclick="copyToClipboard(deMinimis(false,false,'','','css' ));" class="button_ button_clip button_clipCSS"  title="clipboard: SHIFT for colour group, CTRL for one"></button>
<button   id="clipHTML"  onclick="copyToClipboard(deMinimis(false,false,'','','html'));" class="button_ button_clip button_clipHTML" title="clipboard: SHIFT for colour group, CTRL for one"></button>
<button   id="clipCODE"  onclick="copyToClipboard(deMinimis(false,false,'','','code'));" class="button_ button_clip button_clipCODE" title="clipboard: SHIFT for colour group, CTRL for one"></button>

<button   id="save200"   class="button_ button_save200"  title="SHIFT for colour group, +CTRL to save .txt"></button>
<button   id="save300"   class="button_ button_save300"  title="SHIFT for colour group, +CTRL to save .txt"></button>
<button   id="save500"   class="button_ button_save500"  title="set metric in tab 2-1"></button>
<button   id="save800"   class="button_ button_save800"  title="SHIFT for colour group, +CTRL to save .txt"></button>
<button   id="save1000"  class="button_ button_save1000" title="set metric in tab 2-1"></button>
<button   id="save1200"  class="button_ button_save1200" title="SHIFT for colour group, +CTRL to save .txt"></button>
<button   id="save1500"  class="button_ button_save1500" title="SHIFT for colour group, +CTRL to save .txt"></button>

<button   id="save1800"  class="button_ button_save1800" title="set metric in tab 2-1"></button>
<button   id="textFlow"  onclick="copyToClipboard(deMinimis(false,false,'','','flow'));" class="button_ button_clip button_textFlow" title="clipboard: minimal with no id/style/class; SHIFT for colour group, +CTRL to save .txt"></button>

<button   id="header0"   onclick="document.getElementById('headerText').value =      ''; topLayer[topLayer.a_currentLayer].header =      ''; fileHeader =      ''; localStorage.setItem('fileHeader', fileHeader);" class="button_ button_clip button_header0"  title="clear"></button>
<button   id="header1"   onclick="document.getElementById('headerText').value = header1; topLayer[topLayer.a_currentLayer].header = header1; fileHeader = header1; localStorage.setItem('fileHeader', fileHeader);" class="button_ button_clip button_header1"  title=""></button>
<button   id="header2"   onclick="document.getElementById('headerText').value = header2; topLayer[topLayer.a_currentLayer].header = header2; fileHeader = header2; localStorage.setItem('fileHeader', fileHeader);" class="button_ button_clip button_header2"  title=""></button>
<button   id="header3"   onclick="document.getElementById('headerText').value = header3; topLayer[topLayer.a_currentLayer].header = header3; fileHeader = header3; localStorage.setItem('fileHeader', fileHeader);" class="button_ button_clip button_header3"  title=""></button>
<button   id="header4"   onclick="document.getElementById('headerText').value = header4; topLayer[topLayer.a_currentLayer].header = header4; fileHeader = header4; localStorage.setItem('fileHeader', fileHeader);" class="button_ button_clip button_header4"  title="News-Media-Organization"></button>

<button   id="footer0"   onclick="document.getElementById('footerText').value =      ''; topLayer[topLayer.a_currentLayer].footer =      ''; fileFooter =      ''; localStorage.setItem('fileFooter', fileFooter);" class="button_ button_clip button_footer0"  title="clear"></button>
<button   id="footer1"   onclick="document.getElementById('footerText').value = footer1; topLayer[topLayer.a_currentLayer].footer = footer1; fileFooter = footer1; localStorage.setItem('fileFooter', fileFooter);" class="button_ button_clip button_footer1"  title=""></button>
<button   id="footer2"   onclick="document.getElementById('footerText').value = footer2; topLayer[topLayer.a_currentLayer].footer = footer2; fileFooter = footer2; localStorage.setItem('fileFooter', fileFooter);" class="button_ button_clip button_footer2"  title=""></button>
<button   id="footer3"   onclick="document.getElementById('footerText').value = footer3; topLayer[topLayer.a_currentLayer].footer = footer3; fileFooter = footer3; localStorage.setItem('fileFooter', fileFooter);" class="button_ button_clip button_footer3"  title=""></button>
<button   id="footer4"   onclick="document.getElementById('footerText').value = footer4; topLayer[topLayer.a_currentLayer].footer = footer4; fileFooter = footer4; localStorage.setItem('fileFooter', fileFooter);" class="button_ button_clip button_footer4"  title=""></button>

<textarea id="headerText" oninput="topLayer[topLayer.a_currentLayer].header = this.value; fileHeader = this.value; localStorage.setItem('fileHeader', this.value);" class="headerText dckimPixelMono"  placeholder="enter the header for this level" spellcheck="false"></textarea>
<textarea id="footerText" oninput="topLayer[topLayer.a_currentLayer].footer = this.value; fileFooter = this.value; localStorage.setItem('fileFooter', this.value);" class="footerText dckimPixelMono"  placeholder="enter the footer for this level" spellcheck="false"></textarea>
`;
