z_wizardCode.p_wizard = {};
z_wizardCode.p_wizard.a_documentation = `
This one brings up a handy colour theme box. It can be saved, and sent to other people. This makes it easy to have multiple themes in use.
`;
z_wizardCode.p_wizard.b_code = `
<div id="coin98103" data-js-name="coin98103" data-parent="coin78584" data-children="" data-finished-outline="none" data-drag-pull="backgroundColor" data-wrapper="undefined" data-outline-colour="grey" data-file-include="a_colourTheme.html" data-width="192px" data-height="384px" data-scale="1" style="position: absolute; z-index: 100249999; user-select: none; left: 0px; top: 0px; width: 192px; height: 384px; transform-origin: left top; transform: scale(1); outline: none;" data-angle="0" data-left="0px" data-top="0px" data-coin-trip="?" data-flow="0"><a data-name="anchor" style="position: absolute; z-index: 0; left: 0px; top: 0px; width: 100%; height: 100%; border: 0px; margin: 0px; font-size: 32px; font-family: monospace; color: rgb(0, 0, 0); text-align: left; background-color: transparent; opacity: 1;"></a><div data-name="main" data-perspective="1536px" data-rotate-x="0" data-rotate-y="0" data-rotate-z="0" data-translate-z="0" style="position: absolute; z-index: 100; overflow: hidden; left: 0px; top: 0px; width: 100%; height: 100%; border: none; transform-origin: center center; display: block; outline: grey ridge 3px; border-radius: inherit;"><button data-name="button" style="position: absolute; z-index: 300; left: 0px; top: 0px; width: 100%; height: 100%; border: none; display: none; background-color: transparent; color: rgb(222, 255, 28); text-shadow: black 2px 2px 2px, black -2px 2px 2px, black 2px -2px 2px, black -2px -2px 2px; font-size: 24px; font-weight: bold;"></button><div data-name="div" style="position: absolute; z-index: 200; left: 0px; top: 0px; width: 100%; height: 100%; box-sizing: border-box; border: none; text-align: justify; background-color: transparent; color: rgb(0, 0, 0);"><div style="line-height: 0; width: 100%1; height: 384px;">
<button class="xqnBTN" style="width: 100%; height: 64px; font: inherit; margin: 0px; padding: 0px; border: none; color: inherit;" onclick="

sL = this.nextElementSibling.firstElementChild.value;
localStorage.setItem('sL',this.nextElementSibling.firstElementChild.value);

L = this.nextElementSibling.firstElementChild.nextElementSibling.value;
localStorage.setItem('L',this.nextElementSibling.firstElementChild.nextElementSibling.value);

finishedBackgroundColour = this.nextElementSibling.lastElementChild.value;
localStorage.setItem('finishedBackgroundColour',this.nextElementSibling.lastElementChild.value);

U = this.nextElementSibling.nextElementSibling.firstElementChild.value;
D = this.nextElementSibling.nextElementSibling.firstElementChild.value;
localStorage.setItem('UD',this.nextElementSibling.nextElementSibling.firstElementChild.value);

C = this.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.value;
localStorage.setItem('C',this.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.value);

bU = this.nextElementSibling.nextElementSibling.lastElementChild.value;
localStorage.setItem('bU',this.nextElementSibling.nextElementSibling.lastElementChild.value);

spaceViewOn();
hotDog = false;
spaceViewOff();
Z();

">set colour theme</button>


<div style="display: flex; justify-content: center;">
<input name="colour" type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#3F3F3F" onchange="
sL = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('sL',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
<input name="colour" type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#3F3F5F" onchange="
L = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('L',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
<input name="colour" type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#BFBFBF" onchange="
finishedBackgroundColour = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('finishedBackgroundColour',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
</div>

<div style="display: flex; justify-content: center;">
<input name="colour" type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#00FFFF" onchange="
U = this.value;
D = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('UD',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
<input name="colour" type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#00FF00" onchange="
C = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('C',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
<input name="colour" type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#FF0000" onchange="
bU = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('bU',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
</div>

<input name="colour" style="width: 100%; height: 64px; font: inherit; text-align: center; margin: 0px; padding: 0px; border: none; color: inherit;" value="set colour theme" oninput="

this.setAttribute('value', this.value);

this.parentNode.firstElementChild.innerText = this.value;




">

</div></div><img data-name="img" alt="" style="position: absolute; display: none; z-index: 100; left: 0px; top: 0px; width: 100%; height: 100%; border: none; background-color: transparent;"></div></div>

<div id="coin02932" data-js-name="coin02932" data-parent="coin78584" data-children="" data-finished-outline="none" data-drag-pull="backgroundColor" data-wrapper="undefined" data-outline-colour="grey" data-file-include="a_colourTheme.html" data-width="192px" data-height="64px" data-scale="1" style="position: absolute; z-index: 100249999; user-select: none; left: 192px; top: 0px; width: 192px; height: 64px; transform-origin: left top; transform: scale(1); outline: none;" data-angle="0" data-left="192px" data-top="0px" data-coin-trip="?" data-flow="1"><a data-name="anchor" style="position: absolute; z-index: 0; left: 0px; top: 0px; width: 100%; height: 100%; border: 0px; margin: 0px; font-size: 32px; font-family: monospace; color: rgb(0, 0, 0); text-align: left; background-color: transparent; opacity: 1;"></a><div data-name="main" data-perspective="1536px" data-rotate-x="0" data-rotate-y="0" data-rotate-z="0" data-translate-z="0" style="position: absolute; z-index: 100; overflow: hidden; left: 0px; top: 0px; width: 100%; height: 100%; border: none; transform-origin: center center; display: block; border-radius: inherit; outline: grey ridge 3px;"><button data-name="button" style="position: absolute; z-index: 300; left: 0px; top: 0px; width: 100%; height: 100%; border: none; display: none; background-color: transparent; color: rgb(222, 255, 28); text-shadow: black 2px 2px 2px, black -2px 2px 2px, black 2px -2px 2px, black -2px -2px 2px; font-size: 24px; font-weight: bold;"></button><div data-name="div" style="position: absolute; z-index: 200; left: 0px; top: 0px; width: 100%; height: 100%; box-sizing: border-box; border: none; text-align: justify; background-color: transparent; color: rgb(0, 0, 0);"><div style="line-height: 0; width: 100%1; height: 384px;">
<button class="xqnBTN" style="width: 100%; height: 64px; font: inherit; margin: 0px; padding: 0px; border: none; color: inherit;" onclick="

sL = this.nextElementSibling.firstElementChild.value;
localStorage.setItem('sL',this.nextElementSibling.firstElementChild.value);

L = this.nextElementSibling.firstElementChild.nextElementSibling.value;
localStorage.setItem('L',this.nextElementSibling.firstElementChild.nextElementSibling.value);

finishedBackgroundColour = this.nextElementSibling.lastElementChild.value;
localStorage.setItem('finishedBackgroundColour',this.nextElementSibling.lastElementChild.value);

U = this.nextElementSibling.nextElementSibling.firstElementChild.value;
D = this.nextElementSibling.nextElementSibling.firstElementChild.value;
localStorage.setItem('UD',this.nextElementSibling.nextElementSibling.firstElementChild.value);

C = this.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.value;
localStorage.setItem('C',this.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.value);

bU = this.nextElementSibling.nextElementSibling.lastElementChild.value;
localStorage.setItem('bU',this.nextElementSibling.nextElementSibling.lastElementChild.value);

spaceViewOn();
hotDog = false;
spaceViewOff();
Z();

">LIGHT</button>


<div style="display: flex; justify-content: center;">
<input name="colour" type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#fff9e5" onchange="
sL = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('sL',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
<input name="colour" type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#f5ffff" onchange="
L = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('L',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
<input name="colour" type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#ffffff" onchange="
finishedBackgroundColour = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('finishedBackgroundColour',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
</div>

<div style="display: flex; justify-content: center;">
<input name="colour" type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#000000" onchange="
U = this.value;
D = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('UD',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
<input name="colour" type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#008539" onchange="
C = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('C',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
<input name="colour" type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#FF0000" onchange="
bU = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('bU',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
</div>

<input name="colour" style="width: 100%; height: 64px; font: inherit; text-align: center; margin: 0px; padding: 0px; border: none; color: inherit;" value="LIGHT" oninput="

this.setAttribute('value', this.value);

this.parentNode.firstElementChild.innerText = this.value;




">

</div></div><img data-name="img" alt="" style="position: absolute; display: none; z-index: 100; left: 0px; top: 0px; width: 100%; height: 100%; border: none; background-color: transparent;"></div></div>

<div id="coin07581" data-js-name="coin07581" data-parent="coin78584" data-children="" data-finished-outline="none" data-drag-pull="backgroundColor" data-wrapper="undefined" data-outline-colour="grey" data-file-include="a_colourTheme.html" data-width="192px" data-height="64px" data-scale="1" style="position: absolute; z-index: 100249999; user-select: none; left: 192px; top: 64px; width: 192px; height: 64px; transform-origin: left top; transform: scale(1); outline: none;" data-angle="0" data-left="192px" data-top="64px" data-coin-trip="?" data-flow="2"><a data-name="anchor" style="position: absolute; z-index: 0; left: 0px; top: 0px; width: 100%; height: 100%; border: 0px; margin: 0px; font-size: 32px; font-family: monospace; color: rgb(0, 0, 0); text-align: left; background-color: transparent; opacity: 1;"></a><div data-name="main" data-perspective="1536px" data-rotate-x="0" data-rotate-y="0" data-rotate-z="0" data-translate-z="0" style="position: absolute; z-index: 100; overflow: hidden; left: 0px; top: 0px; width: 100%; height: 100%; border: none; transform-origin: center center; display: block; border-radius: inherit; outline: grey ridge 3px;"><button data-name="button" style="position: absolute; z-index: 300; left: 0px; top: 0px; width: 100%; height: 100%; border: none; display: none; background-color: transparent; color: rgb(222, 255, 28); text-shadow: black 2px 2px 2px, black -2px 2px 2px, black 2px -2px 2px, black -2px -2px 2px; font-size: 24px; font-weight: bold;"></button><div data-name="div" style="position: absolute; z-index: 200; left: 0px; top: 0px; width: 100%; height: 100%; box-sizing: border-box; border: none; text-align: justify; background-color: transparent; color: rgb(0, 0, 0);"><div style="line-height: 0; width: 100%1; height: 384px;">
<button class="xqnBTN" style="width: 100%; height: 64px; font: inherit; margin: 0px; padding: 0px; border: none; color: inherit;" onclick="

sL = this.nextElementSibling.firstElementChild.value;
localStorage.setItem('sL',this.nextElementSibling.firstElementChild.value);

L = this.nextElementSibling.firstElementChild.nextElementSibling.value;
localStorage.setItem('L',this.nextElementSibling.firstElementChild.nextElementSibling.value);

finishedBackgroundColour = this.nextElementSibling.lastElementChild.value;
localStorage.setItem('finishedBackgroundColour',this.nextElementSibling.lastElementChild.value);

U = this.nextElementSibling.nextElementSibling.firstElementChild.value;
D = this.nextElementSibling.nextElementSibling.firstElementChild.value;
localStorage.setItem('UD',this.nextElementSibling.nextElementSibling.firstElementChild.value);

C = this.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.value;
localStorage.setItem('C',this.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.value);

bU = this.nextElementSibling.nextElementSibling.lastElementChild.value;
localStorage.setItem('bU',this.nextElementSibling.nextElementSibling.lastElementChild.value);

spaceViewOn();
hotDog = false;
spaceViewOff();
Z();

">DARK</button>


<div style="display: flex; justify-content: center;">
<input name="colour" type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#000000" onchange="
sL = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('sL',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
<input name="colour" type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#000019" onchange="
L = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('L',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
<input name="colour" type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#000000" onchange="
finishedBackgroundColour = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('finishedBackgroundColour',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
</div>

<div style="display: flex; justify-content: center;">
<input name="colour" type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#ffd1d1" onchange="
U = this.value;
D = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('UD',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
<input name="colour" type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#00fbff" onchange="
C = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('C',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
<input name="colour" type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#ffffff" onchange="
bU = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('bU',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
</div>

<input name="colour" style="width: 100%; height: 64px; font: inherit; text-align: center; margin: 0px; padding: 0px; border: none; color: inherit;" value="DARK" oninput="

this.setAttribute('value', this.value);

this.parentNode.firstElementChild.innerText = this.value;




">

</div></div><img data-name="img" alt="" style="position: absolute; display: none; z-index: 100; left: 0px; top: 0px; width: 100%; height: 100%; border: none; background-color: transparent;"></div></div>

<div id="coin08410" data-js-name="coin08410" data-parent="coin78584" data-children="" data-finished-outline="none" data-drag-pull="backgroundColor" data-wrapper="undefined" data-outline-colour="grey" data-file-include="a_colourTheme.html" data-width="192px" data-height="64px" data-scale="1" style="position: absolute; z-index: 100249999; user-select: none; left: 192px; top: 128px; width: 192px; height: 64px; transform-origin: left top; transform: scale(1); outline: none;" data-angle="0" data-left="192px" data-top="128px" data-coin-trip="?" data-flow="3"><a data-name="anchor" style="position: absolute; z-index: 0; left: 0px; top: 0px; width: 100%; height: 100%; border: 0px; margin: 0px; font-size: 32px; font-family: monospace; color: rgb(0, 0, 0); text-align: left; background-color: transparent; opacity: 1;"></a><div data-name="main" data-perspective="1536px" data-rotate-x="0" data-rotate-y="0" data-rotate-z="0" data-translate-z="0" style="position: absolute; z-index: 100; overflow: hidden; left: 0px; top: 0px; width: 100%; height: 100%; border: none; transform-origin: center center; display: block; border-radius: inherit; outline: grey ridge 3px;"><button data-name="button" style="position: absolute; z-index: 300; left: 0px; top: 0px; width: 100%; height: 100%; border: none; display: none; background-color: transparent; color: rgb(222, 255, 28); text-shadow: black 2px 2px 2px, black -2px 2px 2px, black 2px -2px 2px, black -2px -2px 2px; font-size: 24px; font-weight: bold;"></button><div data-name="div" style="position: absolute; z-index: 200; left: 0px; top: 0px; width: 100%; height: 100%; box-sizing: border-box; border: none; text-align: justify; background-color: transparent; color: rgb(0, 0, 0);"><div style="line-height: 0; width: 100%1; height: 384px;">
<button class="xqnBTN" style="width: 100%; height: 64px; font: inherit; margin: 0px; padding: 0px; border: none; color: inherit;" onclick="

sL = this.nextElementSibling.firstElementChild.value;
localStorage.setItem('sL',this.nextElementSibling.firstElementChild.value);

L = this.nextElementSibling.firstElementChild.nextElementSibling.value;
localStorage.setItem('L',this.nextElementSibling.firstElementChild.nextElementSibling.value);

finishedBackgroundColour = this.nextElementSibling.lastElementChild.value;
localStorage.setItem('finishedBackgroundColour',this.nextElementSibling.lastElementChild.value);

U = this.nextElementSibling.nextElementSibling.firstElementChild.value;
D = this.nextElementSibling.nextElementSibling.firstElementChild.value;
localStorage.setItem('UD',this.nextElementSibling.nextElementSibling.firstElementChild.value);

C = this.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.value;
localStorage.setItem('C',this.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.value);

bU = this.nextElementSibling.nextElementSibling.lastElementChild.value;
localStorage.setItem('bU',this.nextElementSibling.nextElementSibling.lastElementChild.value);

spaceViewOn();
hotDog = false;
spaceViewOff();
Z();

">LIGHTBLUE</button>


<div style="display: flex; justify-content: center;">
<input name="colour" type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#ffffff" onchange="
sL = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('sL',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
<input name="colour" type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#f2f2f2" onchange="
L = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('L',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
<input name="colour" type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#ffffff" onchange="
finishedBackgroundColour = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('finishedBackgroundColour',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
</div>

<div style="display: flex; justify-content: center;">
<input name="colour" type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#00ffaa" onchange="
U = this.value;
D = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('UD',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
<input name="colour" type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#00e4e4" onchange="
C = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('C',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
<input name="colour" type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#0000ff" onchange="
bU = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('bU',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
</div>

<input name="colour" style="width: 100%; height: 64px; font: inherit; text-align: center; margin: 0px; padding: 0px; border: none; color: inherit;" value="LIGHTBLUE" oninput="

this.setAttribute('value', this.value);

this.parentNode.firstElementChild.innerText = this.value;




">

</div></div><img data-name="img" alt="" style="position: absolute; display: none; z-index: 100; left: 0px; top: 0px; width: 100%; height: 100%; border: none; background-color: transparent;"></div></div>

<div id="coin09651" data-js-name="coin09651" data-parent="coin78584" data-children="" data-finished-outline="none" data-drag-pull="backgroundColor" data-wrapper="undefined" data-outline-colour="grey" data-file-include="a_colourTheme.html" data-width="192px" data-height="64px" data-scale="1" style="position: absolute; z-index: 100249999; user-select: none; left: 192px; top: 192px; width: 192px; height: 64px; transform-origin: left top; transform: scale(1); outline: none;" data-angle="0" data-left="192px" data-top="192px" data-coin-trip="?" data-flow="4"><a data-name="anchor" style="position: absolute; z-index: 0; left: 0px; top: 0px; width: 100%; height: 100%; border: 0px; margin: 0px; font-size: 32px; font-family: monospace; color: rgb(0, 0, 0); text-align: left; background-color: transparent; opacity: 1;"></a><div data-name="main" data-perspective="1536px" data-rotate-x="0" data-rotate-y="0" data-rotate-z="0" data-translate-z="0" style="position: absolute; z-index: 100; overflow: hidden; left: 0px; top: 0px; width: 100%; height: 100%; border: none; transform-origin: center center; display: block; border-radius: inherit; outline: grey ridge 3px;"><button data-name="button" style="position: absolute; z-index: 300; left: 0px; top: 0px; width: 100%; height: 100%; border: none; display: none; background-color: transparent; color: rgb(222, 255, 28); text-shadow: black 2px 2px 2px, black -2px 2px 2px, black 2px -2px 2px, black -2px -2px 2px; font-size: 24px; font-weight: bold;"></button><div data-name="div" style="position: absolute; z-index: 200; left: 0px; top: 0px; width: 100%; height: 100%; box-sizing: border-box; border: none; text-align: justify; background-color: transparent; color: rgb(0, 0, 0);"><div style="line-height: 0; width: 100%1; height: 384px;">
<button class="xqnBTN" style="width: 100%; height: 64px; font: inherit; margin: 0px; padding: 0px; border: none; color: inherit;" onclick="

sL = this.nextElementSibling.firstElementChild.value;
localStorage.setItem('sL',this.nextElementSibling.firstElementChild.value);

L = this.nextElementSibling.firstElementChild.nextElementSibling.value;
localStorage.setItem('L',this.nextElementSibling.firstElementChild.nextElementSibling.value);

finishedBackgroundColour = this.nextElementSibling.lastElementChild.value;
localStorage.setItem('finishedBackgroundColour',this.nextElementSibling.lastElementChild.value);

U = this.nextElementSibling.nextElementSibling.firstElementChild.value;
D = this.nextElementSibling.nextElementSibling.firstElementChild.value;
localStorage.setItem('UD',this.nextElementSibling.nextElementSibling.firstElementChild.value);

C = this.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.value;
localStorage.setItem('C',this.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.value);

bU = this.nextElementSibling.nextElementSibling.lastElementChild.value;
localStorage.setItem('bU',this.nextElementSibling.nextElementSibling.lastElementChild.value);

spaceViewOn();
hotDog = false;
spaceViewOff();
Z();

">BEIGE</button>


<div style="display: flex; justify-content: center;">
<input name="colour" type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#e3d2a6" onchange="
sL = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('sL',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
<input name="colour" type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#e4c9af" onchange="
L = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('L',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
<input name="colour" type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#ffffff" onchange="
finishedBackgroundColour = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('finishedBackgroundColour',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
</div>

<div style="display: flex; justify-content: center;">
<input name="colour" type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#ffffff" onchange="
U = this.value;
D = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('UD',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
<input name="colour" type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#ffff42" onchange="
C = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('C',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
<input name="colour" type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#ffff00" onchange="
bU = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('bU',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
</div>

<input name="colour" style="width: 100%; height: 64px; font: inherit; text-align: center; margin: 0px; padding: 0px; border: none; color: inherit;" value="BEIGE" oninput="

this.setAttribute('value', this.value);

this.parentNode.firstElementChild.innerText = this.value;




">

</div></div><img data-name="img" alt="" style="position: absolute; display: none; z-index: 100; left: 0px; top: 0px; width: 100%; height: 100%; border: none; background-color: transparent;"></div></div>

<div id="coin09851" data-js-name="coin09851" data-parent="coin78584" data-children="" data-finished-outline="none" data-drag-pull="backgroundColor" data-wrapper="undefined" data-outline-colour="grey" data-file-include="a_colourTheme.html" data-width="192px" data-height="64px" data-scale="1" style="position: absolute; z-index: 100249999; user-select: none; left: 192px; top: 256px; width: 192px; height: 64px; transform-origin: left top; transform: scale(1); outline: none;" data-angle="0" data-left="192px" data-top="256px" data-coin-trip="?" data-flow="5"><a data-name="anchor" style="position: absolute; z-index: 0; left: 0px; top: 0px; width: 100%; height: 100%; border: 0px; margin: 0px; font-size: 32px; font-family: monospace; color: rgb(0, 0, 0); text-align: left; background-color: transparent; opacity: 1;"></a><div data-name="main" data-perspective="1536px" data-rotate-x="0" data-rotate-y="0" data-rotate-z="0" data-translate-z="0" style="position: absolute; z-index: 100; overflow: hidden; left: 0px; top: 0px; width: 100%; height: 100%; border: none; transform-origin: center center; display: block; border-radius: inherit; outline: grey ridge 3px;"><button data-name="button" style="position: absolute; z-index: 300; left: 0px; top: 0px; width: 100%; height: 100%; border: none; display: none; background-color: transparent; color: rgb(222, 255, 28); text-shadow: black 2px 2px 2px, black -2px 2px 2px, black 2px -2px 2px, black -2px -2px 2px; font-size: 24px; font-weight: bold;"></button><div data-name="div" style="position: absolute; z-index: 200; left: 0px; top: 0px; width: 100%; height: 100%; box-sizing: border-box; border: none; text-align: justify; background-color: transparent; color: rgb(0, 0, 0);"><div style="line-height: 0; width: 100%1; height: 384px;">
<button class="xqnBTN" style="width: 100%; height: 64px; font: inherit; margin: 0px; padding: 0px; border: none; color: inherit;" onclick="

sL = this.nextElementSibling.firstElementChild.value;
localStorage.setItem('sL',this.nextElementSibling.firstElementChild.value);

L = this.nextElementSibling.firstElementChild.nextElementSibling.value;
localStorage.setItem('L',this.nextElementSibling.firstElementChild.nextElementSibling.value);

finishedBackgroundColour = this.nextElementSibling.lastElementChild.value;
localStorage.setItem('finishedBackgroundColour',this.nextElementSibling.lastElementChild.value);

U = this.nextElementSibling.nextElementSibling.firstElementChild.value;
D = this.nextElementSibling.nextElementSibling.firstElementChild.value;
localStorage.setItem('UD',this.nextElementSibling.nextElementSibling.firstElementChild.value);

C = this.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.value;
localStorage.setItem('C',this.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.value);

bU = this.nextElementSibling.nextElementSibling.lastElementChild.value;
localStorage.setItem('bU',this.nextElementSibling.nextElementSibling.lastElementChild.value);

spaceViewOn();
hotDog = false;
spaceViewOff();
Z();

">GREY</button>


<div style="display: flex; justify-content: center;">
<input name="colour" type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#ababab" onchange="
sL = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('sL',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
<input name="colour" type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#808080" onchange="
L = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('L',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
<input name="colour" type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#1c1c1c" onchange="
finishedBackgroundColour = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('finishedBackgroundColour',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
</div>

<div style="display: flex; justify-content: center;">
<input name="colour" type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#d9d9d9" onchange="
U = this.value;
D = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('UD',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
<input name="colour" type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#5c5c5c" onchange="
C = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('C',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
<input name="colour" type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#000000" onchange="
bU = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('bU',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
</div>

<input name="colour" style="width: 100%; height: 64px; font: inherit; text-align: center; margin: 0px; padding: 0px; border: none; color: inherit;" value="GREY" oninput="

this.setAttribute('value', this.value);

this.parentNode.firstElementChild.innerText = this.value;




">

</div></div><img data-name="img" alt="" style="position: absolute; display: none; z-index: 100; left: 0px; top: 0px; width: 100%; height: 100%; border: none; background-color: transparent;"></div></div>

<div id="coin78584" data-js-name="coin78584" data-drag-pull="backgroundColor" data-parent="" data-children="coin98103,coin02932,coin07581,coin08410,coin09651,coin09851" data-scale="1" data-finished-outline="none" data-outline-colour="grey" data-left="192px" data-top="320px" data-width="192px" data-height="64px" style="position: absolute; z-index: 100250000; user-select: none; transform-origin: left top; transform: scale(1); left: 192px; top: 320px; width: 192px; height: 64px; outline: none;" data-coin-trip="?" data-file-include="a_colourTheme.html" data-lock-e="false" data-flow="6"><a data-name="anchor" style="position: absolute; z-index: 0; left: 0px; top: 0px; width: 100%; height: 100%; border: 0px; margin: 0px; font-size: 32px; font-family: monospace; color: rgb(0, 0, 0); text-align: left; background-color: transparent; opacity: 1;"></a><div data-name="main" data-perspective="1536px" data-rotate-x="0" data-rotate-y="0" data-rotate-z="0" data-translate-z="0" style="position: absolute; z-index: 100; overflow: hidden; left: 0px; top: 0px; width: 100%; height: 100%; border: none; transform-origin: center center; display: block; border-radius: inherit; outline: grey ridge 3px;"><button data-name="button" style="position: absolute; z-index: 300; left: 0px; top: 0px; width: 100%; height: 100%; border: none; display: none; background-color: transparent; color: rgb(222, 255, 28); text-shadow: black 2px 2px 2px, black -2px 2px 2px, black 2px -2px 2px, black -2px -2px 2px; font-size: 24px; font-weight: bold;"></button><div data-name="div" style="position: absolute; z-index: 200; left: 0px; top: 0px; width: 100%; height: 100%; box-sizing: border-box; border: none; text-align: justify; background-color: transparent; color: rgb(0, 0, 0);"><div style="line-height: 0; width: 100%1; height: 384px;">
<button class="xqnBTN" style="width: 100%; height: 64px; font: inherit; margin: 0px; padding: 0px; border: none; color: inherit;" onclick="

sL = this.nextElementSibling.firstElementChild.value;
localStorage.setItem('sL',this.nextElementSibling.firstElementChild.value);

L = this.nextElementSibling.firstElementChild.nextElementSibling.value;
localStorage.setItem('L',this.nextElementSibling.firstElementChild.nextElementSibling.value);

finishedBackgroundColour = this.nextElementSibling.lastElementChild.value;
localStorage.setItem('finishedBackgroundColour',this.nextElementSibling.lastElementChild.value);

U = this.nextElementSibling.nextElementSibling.firstElementChild.value;
D = this.nextElementSibling.nextElementSibling.firstElementChild.value;
localStorage.setItem('UD',this.nextElementSibling.nextElementSibling.firstElementChild.value);

C = this.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.value;
localStorage.setItem('C',this.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.value);

bU = this.nextElementSibling.nextElementSibling.lastElementChild.value;
localStorage.setItem('bU',this.nextElementSibling.nextElementSibling.lastElementChild.value);

spaceViewOn();
hotDog = false;
spaceViewOff();
Z();

">WHITE</button>


<div style="display: flex; justify-content: center;">
<input name="colour" type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#ffffff" onchange="
sL = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('sL',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
<input name="colour" type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#f2f2f2" onchange="
L = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('L',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
<input name="colour" type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#ffffff" onchange="
finishedBackgroundColour = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('finishedBackgroundColour',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
</div>

<div style="display: flex; justify-content: center;">
<input name="colour" type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#bababa" onchange="
U = this.value;
D = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('UD',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
<input name="colour" type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#bababa" onchange="
C = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('C',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
<input name="colour" type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#616161" onchange="
bU = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('bU',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
</div>

<input name="colour" style="width: 100%; height: 64px; font: inherit; text-align: center; margin: 0px; padding: 0px; border: none; color: inherit;" value="WHITE" oninput="

this.setAttribute('value', this.value);

this.parentNode.firstElementChild.innerText = this.value;




">

</div></div><img data-name="img" alt="" style="position: absolute; display: none; z-index: 100; left: 0px; top: 0px; width: 100%; height: 100%; border: none; background-color: transparent;"></div></div>
`;
