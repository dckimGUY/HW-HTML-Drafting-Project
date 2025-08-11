z_wizardCode.s_wizard = {};
z_wizardCode.s_wizard.a_documentation = `
Here we can get our header and footer pairs to save with. We can duplicate this to line a bunch of those up.
`;
z_wizardCode.s_wizard.b_code = `
<div id="coin58451" data-js-name="coin58451" data-drag-pull="backgroundColor" data-parent="" data-children="" data-scale="1" data-finished-outline="none" data-outline-colour="grey" data-left="0px" data-top="0px" data-width="384px" data-height="384px" style="position: absolute; z-index: 100250000; user-select: none; transform-origin: left top; transform: scale(1); left: 0px; top: 0px; width: 384px; height: 384px; outline: none;" data-coin-trip="?" data-file-include="a_saveWithHeaderFooter.html"><a data-name="anchor" style="position: absolute; z-index: 0; left: 0px; top: 0px; width: 100%; height: 100%; border: 0px; margin: 0px; font-size: 32px; font-family: monospace; color: rgb(0, 0, 0); text-align: left; background-color: transparent; opacity: 1;"></a><div data-name="main" data-perspective="1536px" data-rotate-x="0" data-rotate-y="0" data-rotate-z="0" data-translate-z="0" style="position: absolute; z-index: 100; overflow: hidden; left: 0px; top: 0px; width: 100%; height: 100%; border: none; transform-origin: center center; display: block;"><button data-name="button" style="position: absolute; z-index: 300; left: 0px; top: 0px; width: 100%; height: 100%; border: none; display: none; background-color: transparent; color: rgb(222, 255, 28); text-shadow: black 2px 2px 2px, black -2px 2px 2px, black 2px -2px 2px, black -2px -2px 2px; font-size: 24px; font-weight: bold;"></button><div data-name="div" style="position: absolute; z-index: 200; left: 0px; top: 0px; width: 100%; height: 100%; box-sizing: border-box; border: none; text-align: justify; background-color: transparent; color: rgb(0, 0, 0);"><div style="line-height: 0;">

<input type="value" style="width: 100%; height: 64px; font: inherit; margin: 0; padding: 0; border: 0; text-align: center; color: inherit;" placeholder="HEADER/FOOTER name" onchange="
this.setAttribute('value',this.value);
">

<button class="xqnBTN" style="width: 100%; height: 64px; font: inherit; margin: 0px; padding: 0px; border: none; color: inherit;" onclick="
window.fileSaveHeader = this.nextElementSibling.innerHTML;
window.fileSaveFooter = this.nextElementSibling.nextElementSibling.innerHTML;
this.parentNode.parentNode.parentNode.parentNode.remove();
saveWithHeaderFooter(1,false);
hotDog = false;
spaceViewOff([,32,32]);
restorePointerEventsNone(); 
helpMenuOverlay.style.display='none'; 
interfaceLayer.style.display='none';
">save with header/footer</button>


<textarea style="resize: vertical; width: 100%; height: 128px; font: inherit; line-height: 1; margin: 0px; padding: 0px; border: none; color: inherit; background-color: rgb(240,240,255);" oninput="
this.innerHTML = this.value;
">&lt;!DOCTYPE html&gt;
&lt;head&gt;
&lt;meta charset="UTF-8"&gt;
&lt;meta name="description" content="*** 150-160 characters. A description of your page, or you website. Search engines find this.***"&gt;
&lt;meta name="robots" content="index, follow"&gt;
&lt;meta name="geo.position" content="43.658497;-79.347015"&gt;&lt;!-- Change this to your correct coordinates. --&gt;
&lt;meta name="geo.region" content="CA-ON"&gt;&lt;!-- Change this to your correct location code. --&gt;
&lt;meta name="geo.placename" content="Toronto"&gt;&lt;!-- Change this to your correct city or location. --&gt;

&lt;meta property="og:title" content="***The Open Graph Title***"&gt;
&lt;meta property="og:description" content="*** 150-160 characters. A description of your page, or you website. Search engines find this.***"&gt;

&lt;meta property="og:type" content="website"&gt;
&lt;meta property="og:locale" content="en_CA"&gt;&lt;!-- Change this to the correct language for your page. --&gt;

&lt;meta property="og:url" content="https://myWebsite.com/myPage.html"&gt;

&lt;meta property="og:image" content="https://myWebsite.com/d_images/myOpenGraphImage.png"&gt;

&lt;meta name="twitter:card" content="summary_large_image"&gt;
&lt;meta name="twitter:title" content="***The Twitter Title***"&gt;
&lt;meta name="twitter:description" content="*** 150-160 characters. A description of your page, or you website. Search engines find this.***"&gt;
&lt;meta name="twitter:image" content="https://myWebsite.com/d_images/myTwitterImage.png"&gt;

&lt;meta name="mobile-web-app-capable" content="yes"&gt;
&lt;meta name="handheldfriendly" content="true"&gt;
&lt;meta name="author" content="***Your Name or Organization***"&gt;
&lt;link rel="apple-touch-icon" sizes="180x180" href="/images/android-chrome-512x512.png"&gt;
&lt;link rel="apple-touch-icon" sizes="192x192" href="/images/android-chrome-192x192.png"&gt;
&lt;link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png"&gt;
&lt;link rel="icon" type="image/images/png" sizes="32x32" href="/images/favicon-32x32.png"&gt;
&lt;link rel="icon" type="image/images/png" sizes="16x16" href="/images/favicon-16x16.png"&gt;

&lt;link rel="canonical" href="https://myWebsite.com/myPage.html"&gt;

&lt;style&gt;

html, body              { overflow: scroll; scrollbar-width: none;                          }
body                    { background-image: url("");
			  width: 98%; height: 98%;                                          }
body::-webkit-scrollbar { display: none;                                                    }
*::-webkit-scrollbar    { display: none;                                                    }
&lt;/style&gt;

&lt;link rel="stylesheet" href="./e_stylesheets/style.css" /&gt;

&lt;title&gt;***Page Title Here***&lt;/title&gt;

&lt;/head&gt;
&lt;body&gt;
</textarea>

<textarea style="resize: vertical; width: 100%; height: 128px; font: inherit; line-height: 1; margin: 0px; padding: 0px; border: none; color: inherit;" oninput="
this.innerHTML = this.value;
">&lt;script&gt;
/* assuming you know what to put here */
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</textarea>

</div></div><img data-name="img" alt="" style="position: absolute; display: none; z-index: 100; left: 0px; top: 0px; width: 100%; height: 100%; border: none; background-color: transparent;"></div></div>
`;
