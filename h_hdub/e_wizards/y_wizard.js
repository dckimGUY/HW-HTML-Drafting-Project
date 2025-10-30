z_wizardCode.y_wizard = {};
z_wizardCode.y_wizard.a_documentation = `
A link saver, designed around the common inter-site-links from neocities.
`;
z_wizardCode.y_wizard.b_code = `
<div id="coin82236" data-js-name="coin82236" data-drag-pull="backgroundColor" data-parent="" data-children="" data-finished-outline="none" data-outline-colour="grey" style="position: absolute; transform-origin: left top; transform: scale(1); z-index: 100250000; user-select: none; left: 0px; top: 64px; width: 384px; height: 128px; outline: none;" data-left="0px" data-top="64px" data-width="384px" data-height="128px" data-scale="1" data-angle="0" data-coin-trip="?" data-wrapper="true" data-file-include="b_save88x31templateImage.html" data-flow="0"><a data-name="anchor" style="position: absolute; z-index: 0; left: 0px; top: 0px; width: 100%; height: 100%; border: 0px; margin: 0px; font-size: 32px; font-family: monospace; color: rgb(0, 0, 0); text-align: left; background-color: transparent; opacity: 1; display: none;"></a><div data-name="main" data-perspective="1536px" data-rotate-x="0" data-rotate-y="0" data-rotate-z="0" data-translate-z="0" style="position: absolute; z-index: 100; overflow: hidden; left: 0px; top: 0px; width: 100%; height: 100%; border: none; transform-origin: center center; display: block;"><button data-name="button" style="position: absolute; z-index: 300; left: 0px; top: 0px; width: 100%; height: 100%; border: none; display: none; background-color: transparent; color: rgb(222, 255, 28); text-shadow: black 2px 2px 2px, black -2px 2px 2px, black 2px -2px 2px, black -2px -2px 2px; font-size: 24px; font-weight: bold;"></button><div data-name="div" style="position: absolute; z-index: 200; left: 0px; top: 0px; width: 100%; height: 100%; box-sizing: border-box; border: none; text-align: justify; background-color: transparent; color: rgb(0, 0, 0);"><div style="display:flex; justify-content: center; width: 100%; height: 50%;">
<input style="width: 50%; height: 100%; font: inherit; margin: 0px; padding: 0px; border: 2px solid black; color: inherit; text-align: center;" value="88">

<input style="width: 50%; height: 100%; font: inherit; margin: 0px; padding: 0px; border: 2px solid black; color: inherit; text-align: center;" value="31">
</div>

<button style="width: 100%; height: 50%; font: inherit; margin: 0px; padding: 0px; border: none; color: inherit; background-color: lightgrey;" onclick="

const date       =    new Date()                                      ;
const year       =    date.getFullYear()                              ;
const month      =    date.getMonth().toString().padStart(2,'0')      ;
const day        =    date.getDate().toString().padStart(2,'0')       ;
const hour       =    date.getHours().toString().padStart(2,'0')      ;
const minute     =    date.getMinutes().toString().padStart(2,'0')    ;
const second     =    date.getSeconds().toString().padStart(2,'0')    ;
const dateSuffix =    year + '-' + month + '-' + day + '-T' + hour + '-' + minute + '-' + second;

var c=document.createElement('canvas');
c.width=this.previousElementSibling.firstElementChild.value; c.height=this.previousElementSibling.lastElementChild.value;
var a=document.createElement('a');
a.href=c.toDataURL('image/png');
a.download='neoLINK_' + this.previousElementSibling.firstElementChild.value + 'x' + this.previousElementSibling.lastElementChild.value + dateSuffix + '.png';
a.click();
" onmouseenter="this.style.backgroundColor='lime';" onmouseleave="this.style.backgroundColor='lightgrey';">save blank image template</button></div><img data-name="img" alt="" style="position: absolute; display: none; z-index: 100; left: 0px; top: 0px; width: 100%; height: 100%; border: none; background-color: transparent;"></div></div>

<div id="coin17964" data-js-name="coin17964" data-parent="coin64687" data-children="" data-finished-outline="none" data-drag-pull="backgroundColor" data-wrapper="undefined" data-outline-colour="grey" data-file-include="a_saveButtonWithinPart.html" data-width="128px" data-height="64px" data-scale="1" style="position: absolute; z-index: 100250100; user-select: none; left: 256px; top: 192px; width: 128px; height: 64px; transform-origin: left top; transform: scale(1); outline: none;" data-angle="0" data-left="256px" data-top="192px" data-coin-trip="?" data-flow="2"><a data-name="anchor" style="position: absolute; z-index: 0; left: 0px; top: 0px; width: 100%; height: 100%; border: 0px; margin: 0px; font-size: 32px; font-family: monospace; color: rgb(0, 0, 0); text-align: left; background-color: transparent; opacity: 1;"></a><div data-name="main" data-perspective="1536px" data-rotate-x="0" data-rotate-y="0" data-rotate-z="0" data-translate-z="0" style="position: absolute; z-index: 100; overflow: hidden; left: 0px; top: 0px; width: 100%; height: 100%; border: none; transform-origin: center center; display: block; outline: rgb(0, 255, 0) dashed 4px;"><button data-name="button" style="position: absolute; z-index: 300; left: 0px; top: 0px; width: 100%; height: 100%; border: none; display: none; background-color: transparent; color: rgb(222, 255, 28); text-shadow: black 2px 2px 2px, black -2px 2px 2px, black 2px -2px 2px, black -2px -2px 2px; font-size: 24px; font-weight: bold;"></button><div data-name="div" style="position: absolute; z-index: 200; left: 0px; top: 0px; width: 100%; height: 100%; box-sizing: border-box; border: none; text-align: justify; background-color: transparent; color: red;"><button style="width: 100%; height: 100%; font: inherit; margin: 0px; padding: 0px; border: none; color: inherit; background-color: rgba(255, 255, 255, 0.75);" onclick="
if (this.parentNode.parentNode.parentNode.dataset.coinTrip&amp;&amp;this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.dataset.coinTrip) {
const date       =    new Date()                                      ;
const year       =    date.getFullYear()                              ;
const month      =    date.getMonth().toString().padStart(2,'0')      ;
const day        =    date.getDate().toString().padStart(2,'0')       ;
const hour       =    date.getHours().toString().padStart(2,'0')      ;
const minute     =    date.getMinutes().toString().padStart(2,'0')    ;
const second     =    date.getSeconds().toString().padStart(2,'0')    ;
const dateSuffix =    year + '-' + month + '-' + day + '-T' + hour + '-' + minute + '-' + second;

let filesave = '';

for (let j=0; j &lt; this.parentNode.parentNode.parentNode.parentNode.children.length; j++) {

if (this.parentNode.parentNode.parentNode.parentNode.children[j]!=this.parentNode.parentNode.parentNode) {
filesave += this.parentNode.parentNode.parentNode.parentNode.children[j].outerHTML;
}

}

const blob = new Blob([filesave], { type:'text/html' });
const url = window.URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id + '@_' + dateSuffix + '_1pc' + '.html';
this.parentNode.parentNode.parentNode.remove();
a.click();
window.URL.revokeObjectURL(url);
}
" onmouseenter="this.style.backgroundColor='rgba(0,255,0,0.25)';" onmouseleave="this.style.backgroundColor='rgba(255,255,255,0.75)';">save this</button></div><img data-name="img" alt="" style="position: absolute; display: none; z-index: 100; left: 0px; top: 0px; width: 100%; height: 100%; border: none; background-color: transparent;"></div></div>

<div id="coin64687" data-js-name="coin64687" data-drag-pull="backgroundColor" data-parent="" data-children="coin17964" data-scale="1" data-finished-outline="none" data-outline-colour="grey" data-left="0px" data-top="192px" data-width="88px" data-height="31px" style="position: absolute; z-index: 100250300; user-select: none; transform-origin: left top; transform: scale(1); left: 0px; top: 192px; width: 88px; height: 31px; outline: none;" data-coin-trip="?" data-file-include="a_saveButtonWithinPart.html" data-flow="3" data-lock-e="false"><a data-name="anchor" style="position: absolute; z-index: 0; left: 0px; top: 0px; width: 100%; height: 100%; border: 0px; margin: 0px; font-size: 32px; font-family: monospace; color: rgb(0, 0, 0); text-align: left; background-color: transparent; opacity: 1;"></a><div data-name="main" data-perspective="1536px" data-rotate-x="0deg" data-rotate-y="0deg" data-rotate-z="0deg" data-translate-z="0px" style="position: absolute; z-index: 100; overflow: hidden; left: 0px; top: 0px; width: 100%; height: 100%; border: none; transform-origin: center center; display: block; outline: rgb(0, 255, 0) dashed 4px; transform: perspective(1536px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);"><button data-name="button" style="position: absolute; z-index: 300; left: 0px; top: 0px; width: 100%; height: 100%; border: none; display: none; background-color: transparent; color: rgb(222, 255, 28); text-shadow: black 2px 2px 2px, black -2px 2px 2px, black 2px -2px 2px, black -2px -2px 2px; font-size: 24px; font-weight: bold;"></button><div data-name="div" style="position: absolute; z-index: 200; left: 0px; top: 0px; width: 100%; height: 100%; box-sizing: border-box; border: none; text-align: justify; background-color: rgba(255, 255, 255, 0.25); color: red; font-size: 24px; text-shadow: rgba(127, 127, 127, 0.75) 0.75px 0.75px 0.75px;"><button style="width: 100%; height: 100%; font: inherit; margin: 0px; padding: 0px; border: none; color: inherit; background-color: rgba(255, 255, 255, 0.75);" onclick="
if (this.parentNode.parentNode.parentNode.dataset.coinTrip&amp;&amp;this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.dataset.coinTrip) {
const date       =    new Date()                                      ;
const year       =    date.getFullYear()                              ;
const month      =    date.getMonth().toString().padStart(2,'0')      ;
const day        =    date.getDate().toString().padStart(2,'0')       ;
const hour       =    date.getHours().toString().padStart(2,'0')      ;
const minute     =    date.getMinutes().toString().padStart(2,'0')    ;
const second     =    date.getSeconds().toString().padStart(2,'0')    ;
const dateSuffix =    year + '-' + month + '-' + day + '-T' + hour + '-' + minute + '-' + second;

let filesave = '';

for (let j=0; j &lt; this.parentNode.parentNode.parentNode.parentNode.children.length; j++) {

if (this.parentNode.parentNode.parentNode.parentNode.children[j]!=this.parentNode.parentNode.parentNode) {
filesave += this.parentNode.parentNode.parentNode.parentNode.children[j].outerHTML;
}

}

const blob = new Blob([filesave], { type:'text/html' });
const url = window.URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id + '@_' + dateSuffix + '_1pc' + '.html';
this.parentNode.parentNode.parentNode.remove();
a.click();
window.URL.revokeObjectURL(url);
}
" onmouseenter="this.style.backgroundColor='rgba(0,255,0,0.25)';" onmouseleave="this.style.backgroundColor='rgba(255,255,255,0.75)';">save this</button></div><img data-name="img" alt="" style="position: absolute; display: none; z-index: 100; left: 0px; top: 0px; width: 100%; height: 100%; border: none; background-color: transparent;"></div></div>

<div id="coin74802" data-js-name="coin74802" data-drag-pull="backgroundColor" data-parent="" data-children="" data-scale="1" data-finished-outline="none" data-outline-colour="grey" data-left="0px" data-top="256px" data-width="384px" data-height="128px" style="position: absolute; z-index: 100250300; user-select: none; transform-origin: left top; transform: scale(1); left: 0px; top: 256px; width: 384px; height: 128px; outline: none;" data-coin-trip="?"><a data-name="anchor" style="position: absolute; z-index: 0; left: 0px; top: 0px; width: 100%; height: 100%; border: 0px; margin: 0px; font-size: 32px; font-family: monospace; color: rgb(0, 0, 0); text-align: left; background-color: transparent; opacity: 1;"></a><div data-name="main" data-perspective="1536px" data-rotate-x="0" data-rotate-y="0" data-rotate-z="0" data-translate-z="0" style="position: absolute; z-index: 100; overflow: auto; left: 0px; top: 0px; width: 100%; height: 100%; border: none; transform-origin: center center; display: block;"><button data-name="button" style="position: absolute; z-index: 300; left: 0px; top: 0px; width: 100%; height: 100%; border: none; display: none; background-color: transparent; color: rgb(222, 255, 28); text-shadow: black 2px 2px 2px, black -2px 2px 2px, black 2px -2px 2px, black -2px -2px 2px; font-size: 24px; font-weight: bold;"></button><div data-name="div" style="position: absolute; z-index: 200; left: 0px; top: 0px; width: 100%; height: 100%; box-sizing: border-box; border: none; text-align: justify; background-color: transparent; color: rgb(0, 0, 0); font-size: 24px; text-shadow: rgba(127, 127, 127, 0.75) 0.75px 0.75px 0.75px; padding: 12px;">Instructions: Save and image in the desired size. Drag the image file back onto the screen then use the 'y' key from style mode (caps lock off) to enter the link URL. Place the save button directly on top of that link. The you have a link-saver. The little button is actually the perfect size for the standard 88x31 link.</div><img data-name="img" alt="" style="position: absolute; display: none; z-index: 100; left: 0px; top: 0px; width: 100%; height: 100%; border: none; background-color: transparent;"></div></div>

<div id="coin87740" data-js-name="coin87740" data-drag-pull="backgroundColor" data-parent="" data-children="" data-scale="1" data-finished-outline="none" data-outline-colour="grey" data-left="0px" data-top="0px" data-width="384px" data-height="64px" style="position: absolute; z-index: 100250300; user-select: none; transform-origin: left top; transform: scale(1); left: 0px; top: 0px; width: 384px; height: 64px; outline: none;" data-coin-trip="?"><a data-name="anchor" style="position: absolute; z-index: 0; left: 0px; top: 0px; width: 100%; height: 100%; border: 0px; margin: 0px; font-size: 32px; font-family: monospace; color: rgb(0, 0, 0); text-align: left; background-color: transparent; opacity: 1;"></a><div data-name="main" data-perspective="1536px" data-rotate-x="0" data-rotate-y="0" data-rotate-z="0" data-translate-z="0" style="position: absolute; z-index: 100; overflow: hidden; left: 0px; top: 0px; width: 100%; height: 100%; border: none; transform-origin: center center; display: block; border-radius: inherit; outline: rgb(255, 0, 0) dashed 4px;"><button data-name="button" style="position: absolute; z-index: 300; left: 0px; top: 0px; width: 100%; height: 100%; border: none; display: none; background-color: transparent; color: rgb(222, 255, 28); text-shadow: black 2px 2px 2px, black -2px 2px 2px, black 2px -2px 2px, black -2px -2px 2px; font-size: 24px; font-weight: bold;"></button><div data-name="div" style="position: absolute; z-index: 200; left: 0px; top: 0px; width: 100%; height: 100%; box-sizing: border-box; border: none; text-align: center; background-color: lime; color: red; font-size: 48px; text-shadow: rgba(0, 0, 0, 0.5) 0.01em 0.01em 2.025px;">LINK SAVER</div><img data-name="img" alt="" style="position: absolute; display: none; z-index: 100; left: 0px; top: 0px; width: 100%; height: 100%; border: none; background-color: transparent;"></div></div>


`;
