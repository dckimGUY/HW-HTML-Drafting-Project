z_wizardCode.p_wizard = {};
z_wizardCode.p_wizard.a_documentation = `
This one brings up a handy colour theme box. It can be saved, and sent to other people. This makes it easy to have multiple themes in use.
`;
z_wizardCode.p_wizard.b_code = `
<div id="coin47449" data-js-name="coin47449" data-drag-pull="backgroundColor" data-parent="" data-children="" data-scale="1" data-finished-outline="none" data-outline-colour="grey" data-left="0px" data-top="0px" data-width="384px" data-height="384px" style="position: absolute; z-index: 100250000; user-select: none; transform-origin: left top; transform: scale(1); left: 0px; top: 0px; width: 384px; height: 384px; outline: none;" data-coin-trip="?" data-file-include="a_colourTheme.html"><a data-name="anchor" style="position: absolute; z-index: 0; left: 0px; top: 0px; width: 100%; height: 100%; border: 0px; margin: 0px; font-size: 32px; font-family: monospace; color: rgb(0, 0, 0); text-align: left; background-color: transparent; opacity: 1;"></a><div data-name="main" data-perspective="1536px" data-rotate-x="0" data-rotate-y="0" data-rotate-z="0" data-translate-z="0" style="position: absolute; z-index: 100; overflow: hidden; left: 0px; top: 0px; width: 100%; height: 100%; border: none; transform-origin: center center; display: block;"><button data-name="button" style="position: absolute; z-index: 300; left: 0px; top: 0px; width: 100%; height: 100%; border: none; display: none; background-color: transparent; color: rgb(222, 255, 28); text-shadow: black 2px 2px 2px, black -2px 2px 2px, black 2px -2px 2px, black -2px -2px 2px; font-size: 24px; font-weight: bold;"></button><div data-name="div" style="position: absolute; z-index: 200; left: 0px; top: 0px; width: 100%; height: 100%; box-sizing: border-box; border: none; text-align: justify; background-color: transparent; color: rgb(0, 0, 0);"><div style="line-height: 0; width: 384px; height: 384px;">
<button class="xqnBTN" style="width: 384px; height: 128px; font: inherit; margin: 0px; padding: 0px; border: none; color: inherit;" onclick="

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
spaceViewOff();
Z();
">set colour theme</button>


<div style="display: flex; justify-content: center;">
<input type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#3F3F3F" onchange="
sL = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('sL',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
<input type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#3F3F5F" onchange="
L = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('L',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
<input type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#BFBFBF" onchange="
finishedBackgroundColour = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('finishedBackgroundColour',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
</div>

<div style="display: flex; justify-content: center;">
<input type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#00FFFF" onchange="
U = this.value;
D = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('UD',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
<input type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#00FF00" onchange="
C = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('C',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
<input type="color" style="width: 128px; height: 128px; margin: 0; padding: 0; border: 0;" value="#FF0000" onchange="
bU = this.value;
this.setAttribute('value',this.value);
localStorage.setItem('bU',this.value);
spaceViewOn();
spaceViewOff();
Z();
">
</div>
</div></div><img data-name="img" alt="" style="position: absolute; display: none; z-index: 100; left: 0px; top: 0px; width: 100%; height: 100%; border: none; background-color: transparent;"></div></div>
`;
