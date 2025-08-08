z_wizardCode.h_wizard = {};
z_wizardCode.h_wizard.a_documentation = `
This one get a quick way to handle the image alternative text entry through the visual clickable interface. It's a bit cheap, and something more comprehensive could be completed later. For example, the part could chalk up a list of all parts with an 'src' on the image component, and then give individual entries for each one. Something like a big long list. For now, just one at a time, or the keyboard solution are pretty good.
`;
z_wizardCode.h_wizard.b_code = `
<div id="coin34006" data-js-name="coin34006" data-parent="coin13113" data-children="" data-finished-outline="none" data-drag-pull="backgroundColor" data-wrapper="undefined" data-outline-colour="grey" data-file-include="a_openImage.html" data-width="384px" data-height="384px" data-scale="1" style="position: absolute; z-index: 100249998; user-select: none; left: 0px; top: 0px; width: 384px; height: 384px; transform-origin: left top; transform: scale(1); outline: none;" data-angle="0" data-left="0px" data-top="0px" data-coin-trip="?"><a data-name="anchor" style="position: absolute; z-index: 0; left: 0px; top: 0px; width: 100%; height: 100%; border: 0px; margin: 0px; font-size: 32px; font-family: monospace; color: rgb(0, 0, 0); text-align: left; background-color: transparent; opacity: 1;"></a><div data-name="main" data-perspective="1536px" data-rotate-x="0" data-rotate-y="0" data-rotate-z="0" data-translate-z="0" style="position: absolute; z-index: 100; overflow: hidden; left: 0px; top: 0px; width: 100%; height: 100%; border: none; transform-origin: center center; display: block;"><button data-name="button" style="position: absolute; z-index: 300; left: 0px; top: 0px; width: 100%; height: 100%; border: none; display: none; background-color: transparent; color: rgb(222, 255, 28); text-shadow: black 2px 2px 2px, black -2px 2px 2px, black 2px -2px 2px, black -2px -2px 2px; font-size: 24px; font-weight: bold;"></button><div data-name="div" style="position: absolute; z-index: 200; left: 0px; top: 0px; width: 100%; height: 100%; box-sizing: border-box; border: none; text-align: justify; background-color: transparent; color: rgb(0, 0, 0); font-size: 24px; text-shadow: rgba(127, 127, 127, 0.75) 0.75px 0.75px 0.75px;"><div style="line-height: 0;">

<div style="display: flex; justify-content: center;">
<button class="xqnBTN" style="font-size: 18px; font-family: monospace; width: 384px; height: 48px; margin: 0px; padding: 0px; border: 4px solid grey; color: black;" onclick="
try {
this.parentNode.nextElementSibling.value = window.opener.coinFocus.img.alt;
} catch {};
"><u>read</u> alt text</button>
<button class="xqnBTN" style="font-size: 18px; font-family: monospace; width: 384px; height: 48px; margin: 0px; padding: 0px; border: 4px solid grey; color: black;" onclick="
try {
window.opener.coinFocus.img.alt = this.parentNode.nextElementSibling.value;
} catch {};
"><u>set</u> alt text</button>
</div>

<textarea style="font-size: inherit; width: 384px; height: 336px; margin: 0; padding: 0; border: 0;" placeholder="image alt text will appear here, you can 'read' it from the part, and you can also 'set ' it to the part. This is a good step for SEO(search engine optimization), so it is worth the extra effort. Also, use 'I' from style-mode (caps lock off)."></textarea>

</div></div><img data-name="img" alt="" style="position: absolute; display: none; z-index: 100; left: 0px; top: 0px; width: 100%; height: 100%; border: none; background-color: transparent;"></div></div>
`;
