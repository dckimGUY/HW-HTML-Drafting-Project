z_wizardCode.n_wizard = {};
z_wizardCode.n_wizard.a_documentation = `
Here are some buttons to save files, either from within a part, or the document. The last one is to change the filename/title of the page.
`;
z_wizardCode.n_wizard.b_code = `
<div id="coin55961" data-js-name="coin55961" data-drag-pull="backgroundColor" data-parent="" data-children="" data-scale="1" data-finished-outline="none" data-outline-colour="grey" data-left="0px" data-top="0px" data-width="256px" data-height="128px" style="position: absolute; z-index: 100250000; user-select: none; transform-origin: left top; transform: scale(1); left: 0px; top: 0px; width: 256px; height: 128px; outline: none;" data-coin-trip="?" data-file-include="a_saveButtonWithinPart.html" data-flow="0"><a data-name="anchor" style="position: absolute; z-index: 0; left: 0px; top: 0px; width: 100%; height: 100%; border: 0px; margin: 0px; font-size: 32px; font-family: monospace; color: rgb(0, 0, 0); text-align: left; background-color: transparent; opacity: 1;"></a><div data-name="main" data-perspective="1536px" data-rotate-x="0" data-rotate-y="0" data-rotate-z="0" data-translate-z="0" style="position: absolute; z-index: 100; overflow: hidden; left: 0px; top: 0px; width: 100%; height: 100%; border: none; transform-origin: center center; border-radius: 32px; outline: grey solid 3px; display: block;"><button data-name="button" style="position: absolute; z-index: 300; left: 0px; top: 0px; width: 100%; height: 100%; border: none; display: none; background-color: transparent; color: rgb(222, 255, 28); text-shadow: black 2px 2px 2px, black -2px 2px 2px, black 2px -2px 2px, black -2px -2px 2px; font-size: 24px; font-weight: bold;"></button><div data-name="div" style="position: absolute; z-index: 200; left: 0px; top: 0px; width: 100%; height: 100%; box-sizing: border-box; border: none; text-align: justify; background-color: transparent; color: rgb(0, 0, 0);"><button style="width: 100%; height: 100%; font: inherit; margin: 0px; padding: 0px; border: none; color: inherit;" onclick="
if (this.parentNode.parentNode.parentNode.dataset.coinTrip&amp;&amp;this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.dataset.coinTrip) {
const date       =    new Date()                                      ;
const year       =    date.getFullYear()                              ;
const month      =    date.getMonth().toString().padStart(2,'0')      ;
const day        =    date.getDate().toString().padStart(2,'0')       ;
const hour       =    date.getHours().toString().padStart(2,'0')      ;
const minute     =    date.getMinutes().toString().padStart(2,'0')    ;
const second     =    date.getSeconds().toString().padStart(2,'0')    ;
const dateSuffix =    year + '-' + month + '-' + day + '-T' + hour + '-' + minute + '-' + second;
let filesave = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.outerHTML;
const blob = new Blob([filesave], { type:'text/html' });
const url = window.URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id + '@_' + dateSuffix + '_1pc' + '.html';
a.click();
window.URL.revokeObjectURL(url);
}
" onmouseenter="this.style.backgroundColor='lime';" onmouseleave="this.style.backgroundColor='lightgrey';">save this</button></div><img data-name="img" alt="" style="position: absolute; display: none; z-index: 100; left: 0px; top: 0px; width: 100%; height: 100%; border: none; background-color: transparent;"></div></div>

<div id="coin90544" data-js-name="coin90544" data-drag-pull="backgroundColor" data-parent="" data-children="" data-scale="1" data-finished-outline="none" data-outline-colour="grey" data-left="256px" data-top="0px" data-width="128px" data-height="384px" style="position: absolute; z-index: 100250000; user-select: none; transform-origin: left top; transform: scale(1); left: 256px; top: 0px; width: 128px; height: 384px; outline: none;" data-coin-trip="?" data-flow="1"><a data-name="anchor" style="position: absolute; z-index: 0; left: 0px; top: 0px; width: 100%; height: 100%; border: 0px; margin: 0px; font-size: 32px; font-family: monospace; color: rgb(0, 0, 0); text-align: left; background-color: transparent; opacity: 1;"></a><div data-name="main" data-perspective="1536px" data-rotate-x="0" data-rotate-y="0" data-rotate-z="0" data-translate-z="0" style="position: absolute; z-index: 100; overflow: auto; left: 0px; top: 0px; width: 100%; height: 100%; border: none; transform-origin: center center; display: block;"><button data-name="button" style="position: absolute; z-index: 300; left: 0px; top: 0px; width: 100%; height: 100%; border: none; display: none; background-color: transparent; color: rgb(222, 255, 28); text-shadow: black 2px 2px 2px, black -2px 2px 2px, black 2px -2px 2px, black -2px -2px 2px; font-size: 24px; font-weight: bold;"></button><div data-name="div" style="position: absolute; z-index: 200; left: 0px; top: 0px; width: 100%; height: 100%; box-sizing: border-box; border: none; text-align: center; background-color: transparent; color: rgb(0, 0, 0); font-size: 24px; text-shadow: rgba(127, 127, 127, 0.75) 0.75px 0.75px 0.75px;">Here are some buttons to save in a different way than the 's' key. The one marked 'save this' works when it is wrapped together with other parts, it saves the first wrapper. The one marked 'save document' will save the document, even if you save it along with your file. The last button will set a new title and filename for the current page. Do not enter '.html' that is unnecessary. All of these buttons work from the current page.</div><img data-name="img" alt="" style="position: absolute; display: none; z-index: 100; left: 0px; top: 0px; width: 100%; height: 100%; border: none; background-color: transparent;"></div></div>

<div id="coin50377" data-js-name="coin50377" data-drag-pull="backgroundColor" data-parent="" data-children="" data-scale="1" data-finished-outline="none" data-outline-colour="grey" data-left="0px" data-top="128px" data-width="256px" data-height="128px" style="position: absolute; z-index: 100250000; user-select: none; transform-origin: left top; transform: scale(1); left: 0px; top: 128px; width: 256px; height: 128px; outline: none;" data-coin-trip="?" data-file-include="b_saveDocumentWithin.html" data-flow="2"><a data-name="anchor" style="position: absolute; z-index: 0; left: 0px; top: 0px; width: 100%; height: 100%; border: 0px; margin: 0px; font-size: 32px; font-family: monospace; color: rgb(0, 0, 0); text-align: left; background-color: transparent; opacity: 1;"></a><div data-name="main" data-perspective="1536px" data-rotate-x="0" data-rotate-y="0" data-rotate-z="0" data-translate-z="0" style="position: absolute; z-index: 100; overflow: hidden; left: 0px; top: 0px; width: 100%; height: 100%; border: none; transform-origin: center center; border-radius: 32px; outline: grey solid 3px; display: block;"><button data-name="button" style="position: absolute; z-index: 300; left: 0px; top: 0px; width: 100%; height: 100%; border: none; display: none; background-color: transparent; color: rgb(222, 255, 28); text-shadow: black 2px 2px 2px, black -2px 2px 2px, black 2px -2px 2px, black -2px -2px 2px; font-size: 24px; font-weight: bold;"></button><div data-name="div" style="position: absolute; z-index: 200; left: 0px; top: 0px; width: 100%; height: 100%; box-sizing: border-box; border: none; text-align: justify; background-color: transparent; color: rgb(0, 0, 0);"><button style="width: 100%; height: 100%; font: inherit; margin: 0px; padding: 0px; border: none; color: inherit;" onclick="
const date       =    new Date()                                      ;
const year       =    date.getFullYear()                              ;
const month      =    date.getMonth().toString().padStart(2,'0')      ;
const day        =    date.getDate().toString().padStart(2,'0')       ;
const hour       =    date.getHours().toString().padStart(2,'0')      ;
const minute     =    date.getMinutes().toString().padStart(2,'0')    ;
const second     =    date.getSeconds().toString().padStart(2,'0')    ;
const dateSuffix =    year + '-' + month + '-' + day + '-T' + hour + '-' + minute + '-' + second;
let filesave = document.documentElement.outerHTML;
const blob = new Blob([filesave], { type:'text/html' });
const url = window.URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = document.title + '@_' + dateSuffix + '_1pc' + '.html';
a.click();
window.URL.revokeObjectURL(url);
" onmouseenter="this.style.backgroundColor='lime';" onmouseleave="this.style.backgroundColor='lightgrey';">save document</button></div><img data-name="img" alt="" style="position: absolute; display: none; z-index: 100; left: 0px; top: 0px; width: 100%; height: 100%; border: none; background-color: transparent;"></div></div>

<div id="coin28044" data-js-name="coin28044" data-drag-pull="backgroundColor" data-parent="" data-children="" data-scale="1" data-finished-outline="none" data-outline-colour="grey" data-left="0px" data-top="256px" data-width="256px" data-height="128px" style="position: absolute; z-index: 100250000; user-select: none; transform-origin: left top; transform: scale(1); left: 0px; top: 256px; width: 256px; height: 128px; outline: none;" data-coin-trip="?" data-file-include="c_setDocumentTitle.html" data-flow="3"><a data-name="anchor" style="position: absolute; z-index: 0; left: 0px; top: 0px; width: 100%; height: 100%; border: 0px; margin: 0px; font-size: 32px; font-family: monospace; color: rgb(0, 0, 0); text-align: left; background-color: transparent; opacity: 1;"></a><div data-name="main" data-perspective="1536px" data-rotate-x="0" data-rotate-y="0" data-rotate-z="0" data-translate-z="0" style="position: absolute; z-index: 100; overflow: hidden; left: 0px; top: 0px; width: 100%; height: 100%; border: none; transform-origin: center center; display: block; border-radius: 32px; outline: grey solid 3px;"><button data-name="button" style="position: absolute; z-index: 300; left: 0px; top: 0px; width: 100%; height: 100%; border: none; display: none; background-color: transparent; color: rgb(222, 255, 28); text-shadow: black 2px 2px 2px, black -2px 2px 2px, black 2px -2px 2px, black -2px -2px 2px; font-size: 24px; font-weight: bold;"></button><div data-name="div" style="position: absolute; z-index: 200; left: 0px; top: 0px; width: 100%; height: 100%; box-sizing: border-box; border: none; text-align: justify; background-color: transparent; color: rgb(0, 0, 0);"><input type="value" style="width: 100%; height: 50%; margin: 0; padding: 0; border: 0;" placeholder="enter title/filename">

<button style="width: 100%; height: 50%; font: inherit; margin: 0px; padding: 0px; border: none; color: inherit; background-color: lightgrey;" onclick="
if (this.previousElementSibling.value!='') {
document.title = this.previousElementSibling.value.replace(/ /g, '-');
filename = document.title;
} else {
document.title = '100_emptyFile'.replace(/ /g, '-');
filename = document.title;
}
Z();
" onmouseenter="this.style.backgroundColor='lime';" onmouseleave="this.style.backgroundColor='lightgrey';">set page title</button></div><img data-name="img" alt="" style="position: absolute; display: none; z-index: 100; left: 0px; top: 0px; width: 100%; height: 100%; border: none; background-color: transparent;"></div></div>
`;
