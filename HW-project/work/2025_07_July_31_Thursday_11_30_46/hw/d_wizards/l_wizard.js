z_wizardCode.l_wizard = {};
z_wizardCode.l_wizard.a_documentation = `
This one sets up a very simple method of collecting and using links. The idea is to unwrap the part, and then copy whichever one you like to re-use. Then you just save your long list of links into a file for later.
`;
z_wizardCode.l_wizard.b_code = `
<div id="coin70543" data-js-name="coin70543" data-drag-pull="backgroundColor" data-parent="" data-children="" data-scale="1" data-finished-outline="none" data-outline-colour="grey" data-left="0px" data-top="192px" data-width="384px" data-height="64px" style="position: absolute; z-index: 100250000; user-select: none; transform-origin: left top; transform: scale(1); left: 0px; top: 192px; width: 384px; height: 64px; outline: none;" data-coin-trip="?" data-file-include="a_linkReader.html" data-flow="0"><a data-name="anchor" style="position: absolute; z-index: 0; left: 0px; top: 0px; width: 100%; height: 100%; border: 0px; margin: 0px; font-size: 32px; font-family: monospace; color: rgb(0, 0, 0); text-align: left; background-color: transparent; opacity: 1;"></a><div data-name="main" data-perspective="1536px" data-rotate-x="0" data-rotate-y="0" data-rotate-z="0" data-translate-z="0" style="position: absolute; z-index: 100; overflow: hidden; left: 0px; top: 0px; width: 100%; height: 100%; border: none; transform-origin: center center; display: block; border-radius: 64px; outline: grey solid 3px;"><button data-name="button" style="position: absolute; z-index: 300; left: 0px; top: 0px; width: 100%; height: 100%; border: none; display: none; background-color: transparent; color: rgb(222, 255, 28); text-shadow: black 2px 2px 2px, black -2px 2px 2px, black 2px -2px 2px, black -2px -2px 2px; font-size: 24px; font-weight: bold;"></button><div data-name="div" style="position: absolute; z-index: 200; left: 0px; top: 0px; width: 100%; height: 100%; box-sizing: border-box; border: none; text-align: justify; background-color: transparent; color: rgb(0, 0, 0); font-size: 24px; text-shadow: rgba(127, 127, 127, 0.75) 0.75px 0.75px 0.75px;"><div style="display: flex; justify-content: center;">
<button class="xqnBTN" style="width: 10%; height: 64px; font: inherit; margin: 0px; padding: 0px; border: none; color: inherit;" onclick="
try {
this.nextElementSibling.value = window.opener.coinFocus.anchor.href;
} catch {};
">read</button>
<input type="value" style="width: 90%; height: 64px; font: inherit; margin: 0px; padding: 0px; border: none; color: inherit; text-align: center;" placeholder="read link URL" oninput="
if (this.value.startsWith('anchor')) {
this.value = this.value.slice(13,-2);
}
this.setAttribute('value',this.value);
">
</div></div><img data-name="img" alt="" style="position: absolute; display: none; z-index: 100; left: 0px; top: 0px; width: 100%; height: 100%; border: none; background-color: transparent;"></div></div>

<div id="coin74849" data-js-name="coin74849" data-drag-pull="backgroundColor" data-parent="" data-children="" data-scale="1" data-finished-outline="none" data-outline-colour="grey" data-left="0px" data-top="256px" data-width="384px" data-height="64px" style="position: absolute; z-index: 100250000; user-select: none; transform-origin: left top; transform: scale(1); left: 0px; top: 256px; width: 384px; height: 64px; outline: none;" data-coin-trip="?" data-file-include="b_linkSetter.html" data-flow="1"><a data-name="anchor" style="position: absolute; z-index: 0; left: 0px; top: 0px; width: 100%; height: 100%; border: 0px; margin: 0px; font-size: 32px; font-family: monospace; color: rgb(0, 0, 0); text-align: left; background-color: transparent; opacity: 1;"></a><div data-name="main" data-perspective="1536px" data-rotate-x="0" data-rotate-y="0" data-rotate-z="0" data-translate-z="0" style="position: absolute; z-index: 100; overflow: hidden; left: 0px; top: 0px; width: 100%; height: 100%; border: none; transform-origin: center center; display: block; border-radius: 64px; outline: grey solid 3px;"><button data-name="button" style="position: absolute; z-index: 300; left: 0px; top: 0px; width: 100%; height: 100%; border: none; display: none; background-color: transparent; color: rgb(222, 255, 28); text-shadow: black 2px 2px 2px, black -2px 2px 2px, black 2px -2px 2px, black -2px -2px 2px; font-size: 24px; font-weight: bold;"></button><div data-name="div" style="position: absolute; z-index: 200; left: 0px; top: 0px; width: 100%; height: 100%; box-sizing: border-box; border: none; text-align: justify; background-color: transparent; color: rgb(0, 0, 0); font-size: 24px; text-shadow: rgba(127, 127, 127, 0.75) 0.75px 0.75px 0.75px;"><div style="display: flex; justify-content: center;">
<input type="value" style="width: 90%; height: 64px; font: inherit; margin: 0px; padding: 0px; border: none; color: inherit; text-align: center;" placeholder="enter link URL" oninput="
if (this.value.startsWith('anchor')) {
this.value = this.value.slice(13,-2);
}
this.setAttribute('value',this.value);
">
<button class="xqnBTN" style="width: 10%; height: 64px; font: inherit; margin: 0px; padding: 0px; border: none; color: inherit;" onclick="
try {
window.opener.coinFocus.anchor.href = this.previousElementSibling.value;
} catch {};
">set</button>
</div></div><img data-name="img" alt="" style="position: absolute; display: none; z-index: 100; left: 0px; top: 0px; width: 100%; height: 100%; border: none; background-color: transparent;"></div></div>

<div id="coin76528" data-js-name="coin76528" data-drag-pull="backgroundColor" data-parent="" data-children="" data-scale="1" data-finished-outline="none" data-outline-colour="grey" data-left="0px" data-top="320px" data-width="384px" data-height="64px" style="position: absolute; z-index: 100250000; user-select: none; transform-origin: left top; transform: scale(1); left: 0px; top: 320px; width: 384px; height: 64px; outline: none;" data-coin-trip="?" data-file-include="c_linkReadOrSet.html" data-flow="2"><a data-name="anchor" style="position: absolute; z-index: 0; left: 0px; top: 0px; width: 100%; height: 100%; border: 0px; margin: 0px; font-size: 32px; font-family: monospace; color: rgb(0, 0, 0); text-align: left; background-color: transparent; opacity: 1;"></a><div data-name="main" data-perspective="1536px" data-rotate-x="0" data-rotate-y="0" data-rotate-z="0" data-translate-z="0" style="position: absolute; z-index: 100; overflow: hidden; left: 0px; top: 0px; width: 100%; height: 100%; border: none; transform-origin: center center; display: block; border-radius: 64px; outline: grey solid 3px;"><button data-name="button" style="position: absolute; z-index: 300; left: 0px; top: 0px; width: 100%; height: 100%; border: none; display: none; background-color: transparent; color: rgb(222, 255, 28); text-shadow: black 2px 2px 2px, black -2px 2px 2px, black 2px -2px 2px, black -2px -2px 2px; font-size: 24px; font-weight: bold;"></button><div data-name="div" style="position: absolute; z-index: 200; left: 0px; top: 0px; width: 100%; height: 100%; box-sizing: border-box; border: none; text-align: justify; background-color: transparent; color: rgb(0, 0, 0); font-size: 24px; text-shadow: rgba(127, 127, 127, 0.75) 0.75px 0.75px 0.75px;"><div style="display: flex; justify-content: center;">

<button class="xqnBTN" style="width: 10%; height: 64px; font: inherit; margin: 0px; padding: 0px; border: none; color: inherit;" onclick="
try {
this.nextElementSibling.value = window.opener.coinFocus.anchor.href;
} catch {};
">read</button>

<input type="value" style="width: 80%; height: 64px; font: inherit; margin: 0px; padding: 0px; border: none; color: inherit; text-align: center;" placeholder="enter link URL" oninput="
if (this.value.startsWith('anchor')) {
this.value = this.value.slice(13,-2);
}
this.setAttribute('value',this.value);
">

<button class="xqnBTN" style="width: 10%; height: 64px; font: inherit; margin: 0px; padding: 0px; border: none; color: inherit;" onclick="
try {
window.opener.coinFocus.anchor.href = this.previousElementSibling.value;
} catch {};
">set</button>

</div></div><img data-name="img" alt="" style="position: absolute; display: none; z-index: 100; left: 0px; top: 0px; width: 100%; height: 100%; border: none; background-color: transparent;"></div></div>

<div id="coin26299" data-js-name="coin26299" data-drag-pull="backgroundColor" data-parent="" data-children="" data-finished-outline="none" data-outline-colour="grey" style="position: absolute; transform-origin: left top; transform: scale(1); z-index: 100250000; user-select: none; left: 0px; top: 0px; width: 384px; height: 192px; outline: none;" data-left="0px" data-top="0px" data-width="384px" data-height="192px" data-scale="1" data-angle="0" data-coin-trip="?"><a data-name="anchor" style="position: absolute; z-index: 0; left: 0px; top: 0px; width: 100%; height: 100%; border: 0px; margin: 0px; font-size: 32px; font-family: monospace; color: rgb(0, 0, 0); text-align: left; background-color: transparent; opacity: 1;"></a><div data-name="main" data-perspective="1536px" data-rotate-x="0" data-rotate-y="0" data-rotate-z="0" data-translate-z="0" style="position: absolute; z-index: 100; overflow: auto; left: 0px; top: 0px; width: 100%; height: 100%; border: none; transform-origin: center center; display: block;"><button data-name="button" style="position: absolute; z-index: 300; left: 0px; top: 0px; width: 100%; height: 100%; border: none; display: none; background-color: transparent; color: rgb(222, 255, 28); text-shadow: black 2px 2px 2px, black -2px 2px 2px, black 2px -2px 2px, black -2px -2px 2px; font-size: 24px; font-weight: bold;"></button><div data-name="div" style="position: absolute; z-index: 200; left: 0px; top: 0px; width: 100%; height: 100%; box-sizing: border-box; border: none; text-align: justify; background-color: transparent; color: rgb(0, 0, 0); font-size: 24px; text-shadow: rgba(127, 127, 127, 0.75) 0.75px 0.75px 0.75px; padding: 1px 24px 0px;">No need to complicate this, it seems pretty solid just like this. Definitely unwrap this part, that way you can just duplicate as many of these as you like, and then you can save them in a file. That way you only need to do your link setup one time. Then you can just re-use your link file. The 'read' isn't so great for local file links, it's best for full URL. The local links are set correctly, however, the read 'seems' wrong but, that's just how the browser works. You can stil just write them in for local links.</div><img data-name="img" alt="" style="position: absolute; display: none; z-index: 100; left: 0px; top: 0px; width: 100%; height: 100%; border: none; background-color: transparent;"></div></div>
`;
