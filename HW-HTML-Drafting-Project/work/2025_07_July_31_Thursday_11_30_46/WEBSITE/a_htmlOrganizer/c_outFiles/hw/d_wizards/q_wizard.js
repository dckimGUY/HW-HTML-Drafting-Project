z_wizardCode.q_wizard = {};
z_wizardCode.q_wizard.a_documentation = `
These are the buttons to turn base64 on or off for images, audio, video. This will only affect what is brought in by dragging from the file system.
`;
z_wizardCode.q_wizard.b_code = `
<div id="coin89792" data-js-name="coin89792" data-drag-pull="backgroundColor" data-parent="" data-children="" data-scale="1" data-finished-outline="none" data-outline-colour="grey" data-left="0px" data-top="0px" data-width="384px" data-height="384px" style="position: absolute; z-index: 100250000; user-select: none; transform-origin: left top; transform: scale(1); left: 0px; top: 0px; width: 384px; height: 384px; outline: none;" data-coin-trip="?" data-file-include="a_selectorsBase64.html"><a data-name="anchor" style="position: absolute; z-index: 0; left: 0px; top: 0px; width: 100%; height: 100%; border: 0px; margin: 0px; font-size: 32px; font-family: monospace; color: rgb(0, 0, 0); text-align: left; background-color: transparent; opacity: 1;"></a><div data-name="main" data-perspective="1536px" data-rotate-x="0" data-rotate-y="0" data-rotate-z="0" data-translate-z="0" style="position: absolute; z-index: 100; overflow: hidden; left: 0px; top: 0px; width: 100%; height: 100%; border: none; transform-origin: center center; display: block;"><button data-name="button" style="position: absolute; z-index: 300; left: 0px; top: 0px; width: 100%; height: 100%; border: none; display: none; background-color: transparent; color: rgb(222, 255, 28); text-shadow: black 2px 2px 2px, black -2px 2px 2px, black 2px -2px 2px, black -2px -2px 2px; font-size: 24px; font-weight: bold;"></button><div data-name="div" style="position: absolute; z-index: 200; left: 0px; top: 0px; width: 100%; height: 100%; box-sizing: border-box; border: none; text-align: justify; background-color: transparent; color: rgb(0, 0, 0); font-size: 24px; text-shadow: rgba(127, 127, 127, 0.75) 0.75px 0.75px 0.75px;"><div style="line-height: 0;">
<button class="xqnBTN" style="width: 384px; height: 64px; font: inherit; margin: 0px; padding: 0px; border: 4px solid green; color: inherit;" onclick="
                      useBase64forImages = true;
localStorage.setItem('useBase64forImages','true');
                    ">use Base64 for Images = <u>true</u></button>
<button class="xqnBTN" style="width: 384px; height: 64px; font: inherit; margin: 0px; padding: 0px; border: 4px solid green; color: inherit;" onclick="
                      useBase64forVideo = true;
localStorage.setItem('useBase64forVideo','true');
                    ">use Base64 for Video = <u>true</u></button>
<button class="xqnBTN" style="width: 384px; height: 64px; font: inherit; margin: 0px; padding: 0px; border: 4px solid green; color: inherit;" onclick="
                      useBase64forAudio = true;
localStorage.setItem('useBase64forAudio','true');
                    ">use Base64 for Audio = <u>true</u></button>




<button class="xqnBTN" style="width: 384px; height: 64px; font: inherit; margin: 0px; padding: 0px; border: 4px solid red; color: inherit;" onclick="
                      useBase64forImages = false;
localStorage.setItem('useBase64forImages','false');
                    ">use Base64 for Images = false</button>
<button class="xqnBTN" style="width: 384px; height: 64px; font: inherit; margin: 0px; padding: 0px; border: 4px solid red; color: inherit;" onclick="
                      useBase64forAudio = false;
localStorage.setItem('useBase64forAudio','false');
                    ">use Base64 for Audio = false</button>
<button class="xqnBTN" style="width: 384px; height: 64px; font: inherit; margin: 0px; padding: 0px; border: 4px solid red; color: inherit;" onclick="
                      useBase64forVideo = false;
localStorage.setItem('useBase64forVideo','false');
                    ">use Base64 for Video = false</button>
</div></div><img data-name="img" alt="" style="position: absolute; display: none; z-index: 100; left: 0px; top: 0px; width: 100%; height: 100%; border: none; background-color: transparent;"></div></div>
`;
