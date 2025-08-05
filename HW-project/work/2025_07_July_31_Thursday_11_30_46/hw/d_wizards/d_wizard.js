z_wizardCode.d_wizard = {};
z_wizardCode.d_wizard.a_documentation = `
Most of the best font and text related stuff is available in the 'tuners'. It may be best to duplicate all of that onto the clickable UI but, for now, pulling the system fonts is pretty good.
`;
z_wizardCode.d_wizard.b_code = `
<select style="font-size: 18px; font-family: monospace; width: 384px; height: 64px; margin: 0px; padding: 0px; border: none;" onchange="
this.parentNode.style.lineHeight='0';
this.parentNode.style.fontFamily=this.value;
this.parentNode.parentNode.parentNode.dataset.dragPull='div.style.fontFamily';
this.nextElementSibling.nextElementSibling.style.fontFamily=this.value;
if (this.nextElementSibling.lastElementChild.checked) {
try { window.opener.coinFocus.div.style.fontFamily=this.value; } catch {};
}
"></select>

<div style="display: flex; justify-content: left;">
<button class="xqnBTN" style="font-size: 18px; font-family: monospace; width: 320px; height: 64px; margin: 0px; padding: 0px; border: none;" onclick="try { window.opener.coinFocus.div.style.fontFamily=this.parentElement.previousElementSibling.value; } catch {};" >set font on selected</button>
<input type="checkbox" checked="true" style="font-size: 18px; font-family: monospace; width: 64px; height: 64px; margin: 0px; padding: 0px; border: none;" />
</div>

<textarea style="font-size: 18px; font-family: inherit; width: 384px; height: 192px; margin: 0px; padding: 0px; border: none;">
    To use this wizard most effectively, be aware that the 'TAB' button will allow you to drag the value from this location, and then onto a destination part.
    If you hold down the 'shift' key while dragging, then the font will go to an entire colour group.
    All of the best font stuff... like size and indentation, and a text-shadow tuner: They are found by using the 'tuners' in style-mode (with caps lock off).
    Then number pad takes care of most of those things. I might put another 'clickable UI' to cover those too, but, for now, this one is good and this text serves double as a 'sample text area'.
    Also, please keep in mind that if you would like to use these fonts on a website, most of the fonts that are available on your local system might not be available on every machine. So, you will need to do 'font-face-rule' inside of the style file, and that might be better for you.

- dckimGUY
</textarea>

<button class="xqnBTN" style="font-size: 18px; font-family: monospace; width: 384px; height: 64px; margin: 0px; padding: 0px; border: none;" onclick="
try { 
let myFont; (async () => {
myFont = await queryLocalFonts();
const uniqueNames = [...new Set(myFont.map(f => f.family))];
for (const name of uniqueNames) {
const option = document.createElement('option');
option.value = name;
option.textContent = name;
this.parentNode.firstElementChild.appendChild(option);
}
})();
} catch {};
" >queryLocalFonts()</button>
`;
