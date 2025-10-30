z_wizardCode.v_wizard = {};
z_wizardCode.v_wizard.a_documentation = `
This one writes up some emails in the form of mailto links. This helps with outgoing email management for a website situation.
`;
z_wizardCode.v_wizard.b_code = `
<div id="coin39000" data-js-name="coin39000" data-drag-pull="backgroundColor" data-parent="" data-children="" data-scale="1" data-finished-outline="none" data-outline-colour="grey" data-left="0px" data-top="0px" data-width="384px" data-height="384px" style="position: absolute; z-index: 100250000; user-select: none; transform-origin: left top; transform: scale(1); left: 0px; top: 0px; width: 384px; height: 384px; outline: none;" data-coin-trip="?" data-file-include="y_mailMonster.html" data-flow="0"><a data-name="anchor" style="position: absolute; z-index: 0; left: 0px; top: 0px; width: 100%; height: 100%; border: 0px; margin: 0px; font-size: 32px; font-family: monospace; color: rgb(0, 0, 0); text-align: left; background-color: transparent; opacity: 1;"></a><div data-name="main" data-perspective="1536px" data-rotate-x="0" data-rotate-y="0" data-rotate-z="0" data-translate-z="0" style="position: absolute; z-index: 100; overflow: hidden; left: 0px; top: 0px; width: 100%; height: 100%; border: none; transform-origin: center center; display: block;"><button data-name="button" style="position: absolute; z-index: 300; left: 0px; top: 0px; width: 100%; height: 100%; border: none; display: none; background-color: transparent; color: rgb(222, 255, 28); text-shadow: black 2px 2px 2px, black -2px 2px 2px, black 2px -2px 2px, black -2px -2px 2px; font-size: 24px; font-weight: bold;"></button><div data-name="div" style="position: absolute; z-index: 200; left: 0px; top: 0px; width: 100%; height: 100%; box-sizing: border-box; border: none; text-align: justify; background-color: transparent; color: rgb(0, 0, 0);"><div><title>mail-MONSTER</title><div style="display:flex;"><button style="width: 33.33%; height: 66px;" onclick="let mailtoLink = document.createElement('a'); this.parentNode.nextElementSibling.value.split(';').forEach(emailAddress =&gt; {mailtoLink.innerText = emailAddress;mailtoLink.href='mailto:' + encodeURIComponent(emailAddress) +'?subject=' + encodeURIComponent(this.parentNode.nextElementSibling.nextElementSibling.value) +'&amp;body=' + this.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.value; this.parentNode.parentNode.nextElementSibling.appendChild(mailtoLink); this.parentNode.parentNode.nextElementSibling.innerHTML += '&lt;br&gt;';});">GO</button> <button style="width: 33.33%; height: 66px;" onclick="this.parentNode.parentNode.nextElementSibling.innerHTML = '';">CL</button> <button style="width: 33.33%; height: 66px;" onclick=" 
const newMailer = window.open('','');
newMailer.document.write(this.parentNode.parentNode.parentNode.outerHTML);
">Win.</button> </div> <input type="value" style="width: 100%; height: 33px;" placeholder="same=, multi=;" oninput="this.setAttribute('value',this.value)"> <input type="value" style="width: 100%; height: 33px;" placeholder="subject" oninput="this.setAttribute('value',this.value)"> <textarea style="resize: vertical; width: 100%; height: 132px;" placeholder="body"></textarea> </div> <div style="width: 100%;"></div></div><img data-name="img" alt="" style="position: absolute; display: none; z-index: 100; left: 0px; top: 0px; width: 100%; height: 100%; border: none; background-color: transparent;"></div></div>

<div id="coin34162" data-js-name="coin34162" data-drag-pull="backgroundColor" data-parent="" data-children="" data-scale="1" data-finished-outline="none" data-outline-colour="grey" data-left="0px" data-top="0px" data-width="384px" data-height="384px" style="position: absolute; z-index: 100250100; user-select: none; transform-origin: left top; transform: scale(1); left: 0px; top: 0px; width: 384px; height: 384px; outline: none;" data-coin-trip="?" data-file-include="a_mailtoWidget.html" data-flow="1"><a data-name="anchor" style="position: absolute; z-index: 200; left: 0px; top: 0px; width: 100%; height: 100%; border: 0px; margin: 0px; font-size: 32px; font-family: monospace; color: rgb(0, 0, 0); text-align: left; background-color: transparent; opacity: 1;"></a><div data-name="main" data-perspective="1536px" data-rotate-x="0" data-rotate-y="0" data-rotate-z="0" data-translate-z="0" style="position: absolute; z-index: 100; overflow: hidden; left: 0px; top: 0px; width: 100%; height: 100%; border: none; transform-origin: center center; display: block;"><button data-name="button" style="position: absolute; z-index: 300; left: 0px; top: 0px; width: 100%; height: 100%; border: none; display: none; background-color: transparent; color: rgb(222, 255, 28); text-shadow: black 2px 2px 2px, black -2px 2px 2px, black 2px -2px 2px, black -2px -2px 2px; font-size: 24px; font-weight: bold;"></button><div data-name="div" style="position: absolute; z-index: 200; left: 0px; top: 0px; width: 100%; height: 100%; box-sizing: border-box; border: none; text-align: justify; background-color: transparent; color: rgb(0, 0, 0);"><div style="display:flex;justify-content:center;">
<button class="xqnBTN" style="width: 90%; height: 16px; font: inherit;" onclick="
if (this.parentNode.nextElementSibling.style.display=='block') {
this.parentNode.nextElementSibling.style.display='none';
} else {
this.parentNode.nextElementSibling.style.display='block';
}

">* * * * * * * * *</button>
<button style="width: 10%; height: 16px; background-color: red;" onclick="
this.parentNode.nextElementSibling.remove();
this.parentNode.remove();
"></button>
</div>


<span style="display: block;">
<div style="display:flex;justify-content:center;">

<button class="xqnBTN" style="width: 33.33%; height: 64px; font: inherit; border: 4px solid blue; color: blue;" onclick="
let mailtoLink = document.createElement('a');
mailtoLink.innerText = this.parentNode.nextElementSibling.nextElementSibling.value + ' ||||||| ' + this.parentNode.nextElementSibling.value;
mailtoLink.href='mailto:' +
encodeURIComponent(this.parentNode.nextElementSibling.value) +
'?subject=' +
encodeURIComponent(this.parentNode.nextElementSibling.nextElementSibling.value) +
'&amp;body=' +
encodeURIComponent(this.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value);
this.parentNode.parentNode.nextElementSibling.appendChild(mailtoLink);
this.parentNode.parentNode.nextElementSibling.innerHTML += '&lt;br&gt;';
">mailto</button>

<button class="xqnBTN" style="width: 33.33%; height: 64px; font: inherit; border: 4px solid lime;" onclick="
let mailtoLink = document.createElement('a');
this.parentNode.nextElementSibling.value.split(';').forEach(emailAddress =&gt; {
mailtoLink.innerText = this.parentNode.nextElementSibling.nextElementSibling.value + ' ||||||| ' + emailAddress;
mailtoLink.href='mailto:' +
encodeURIComponent(emailAddress) +
'?subject=' +
encodeURIComponent(this.parentNode.nextElementSibling.nextElementSibling.value) +
'&amp;body=' +
encodeURIComponent(this.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value);
this.parentNode.parentNode.nextElementSibling.appendChild(mailtoLink);
this.parentNode.parentNode.nextElementSibling.innerHTML += '&lt;br&gt;';
});
"><span style="color: red;">M</span><span style="color: green;">U</span><span style="color: blue;">L</span><span style="color: white;">T</span><span style="color: magenta;">I</span></button>

<button class="xqnBTN" style="width: 33.33%; height: 64px; font: inherit; border: 4px solid red; color: red;" onclick="
this.parentNode.parentNode.nextElementSibling.innerHTML = '';
">clear</button>
</div>


<input type="value" style="width: 100%; height: 64px; margin: 0; padding: 0; border: 0; font: inherit;" placeholder="enter address">
<input type="value" style="width: 100%; height: 64px; margin: 0; padding: 0; border: 0; font: inherit; background-color: linen;" placeholder="enter subject">


<div style="display:flex;justify-content:center;">
<textarea style="resize: vertical; width: 100%; height: 64px; margin: 0; padding: 0; border: 0; font: inherit;" placeholder="Enter the email body here... The mailto links will come out below. Turn editable HTML on by pressing the 'e' key in style mode (caps lock off). Use ';' for multi ',' for between. Use the 'TAB' key to get to the coloured ribbons for keyboard access. The red ribbon clears the subject line and the body. All ribbons puts the focus on the subject line." onmouseenter="
this.nextElementSibling.style.height=this.style.height;
this.nextElementSibling.nextElementSibling.style.height=this.style.height;
this.nextElementSibling.nextElementSibling.nextElementSibling.style.height=this.style.height;
" onmouseleave="
this.nextElementSibling.style.height=this.style.height;
this.nextElementSibling.nextElementSibling.style.height=this.style.height;
this.nextElementSibling.nextElementSibling.nextElementSibling.style.height=this.style.height;
" onmousemove="
this.nextElementSibling.style.height=this.style.height;
this.nextElementSibling.nextElementSibling.style.height=this.style.height;
this.nextElementSibling.nextElementSibling.nextElementSibling.style.height=this.style.height;
"></textarea>
<button style="width: 4px; height: 64px; background-color: blue; border: none; margin: 0; padding: 0;" onclick="
let mailtoLink = document.createElement('a');
mailtoLink.innerText = this.parentNode.previousElementSibling.value + ' ||||||| ' + this.parentNode.previousElementSibling.previousElementSibling.value;
mailtoLink.href='mailto:' +
encodeURIComponent(this.parentNode.previousElementSibling.previousElementSibling.value) +
'?subject=' +
encodeURIComponent(this.parentNode.previousElementSibling.value) +
'&amp;body=' +
encodeURIComponent(this.parentNode.firstElementChild.value);
this.parentNode.parentNode.nextElementSibling.appendChild(mailtoLink);
this.parentNode.parentNode.nextElementSibling.innerHTML += '&lt;br&gt;';
this.parentNode.previousElementSibling.focus();
this.parentNode.previousElementSibling.select();
"></button>
<button style="width: 4px; height: 64px; background-color: lime; border: none; margin: 0; padding: 0;" onclick="
let mailtoLink = document.createElement('a');
this.parentNode.previousElementSibling.previousElementSibling.value.split(';').forEach(emailAddress =&gt; {
mailtoLink.innerText = this.parentNode.previousElementSibling.value + ' ||||||| ' + emailAddress;
mailtoLink.href='mailto:' +
encodeURIComponent(emailAddress) +
'?subject=' +
encodeURIComponent(this.parentNode.previousElementSibling.value) +
'&amp;body=' +
encodeURIComponent(this.parentNode.firstElementChild.value);
this.parentNode.parentNode.nextElementSibling.appendChild(mailtoLink);
this.parentNode.parentNode.nextElementSibling.innerHTML += '&lt;br&gt;';
this.parentNode.previousElementSibling.focus();
this.parentNode.previousElementSibling.select();
});
"></button>
<button style="width: 4px; height: 64px; background-color: red; border: none; margin: 0; padding: 0;" onclick="
this.parentNode.firstElementChild.value = '';
this.parentNode.previousElementSibling.focus();
this.parentNode.previousElementSibling.select();
"></button>
</div>
</span>


<div style="width: 100%; min-height: 64px; margin: 0; padding: 0; border: 0; font: inherit;"></div></div><img data-name="img" alt="" style="position: absolute; display: none; z-index: 100; left: 0px; top: 0px; width: 100%; height: 100%; border: none; background-color: transparent;"></div></div>


`;
