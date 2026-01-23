/* ASSEMBLE THE HTML FOR THE SHELF */

shelfMenuHTML.wrapperStyle = `
<style>
.menuWrapper {
position: fixed;
right: 0px;
top: 0px;
width: 200px;
height: 500px;
z-index: 9999999999;
transform-origin: top right;
transform: scale(2);
}
.tabSelectors {
position: absolute; left: 0px; top: 0px; width: 200px; height: 32px; z-index: 300;
}
.folderSelectors {
position: absolute; left: 0px; top: 0px; width: 200px; height: 64px; z-index: 200;
}
.tab {
position: absolute; left: 0px; top: 0px; width: 200px; height: 500px; z-index: 100;
}
.folder {
position: absolute; left: 0px; top: 0px; width: 200px; height: 500px; z-index: 100;
}
.button_open {
position: fixed;
border: none;
margin: none;
padding: none;
right: 0px;
top: 0px;
width: 16px;
height: 16px;
z-index: 9999999999;
transform-origin: top right;
transform: scale(2);
                                background-image: url("h_hdub/c_shelfMenu/a_images/0_tabSelectors/open.png?v=20251102205812");        }
.button_open:focus            { background-image: url("h_hdub/c_shelfMenu/a_images/0_tabSelectors/open_focus.png?v=20251102205812");  }
.button_open:hover            { background-image: url("h_hdub/c_shelfMenu/a_images/0_tabSelectors/open_hover.png?v=20251102205812");  }
.button_open:active           { background-image: url("h_hdub/c_shelfMenu/a_images/0_tabSelectors/open_active.png?v=20251102205812"); }

` +
shelfMenuHTML.tab1.backgrounds.style +
shelfMenuHTML.tab2.backgrounds.style +
shelfMenuHTML.tab3.backgrounds.style +
shelfMenuHTML.tab4.backgrounds.style +
shelfMenuHTML.tab5.backgrounds.style +
shelfMenuHTML.tab6.backgrounds.style +
`
</style>
`;

const shelfAssembly = 

shelfMenuHTML.wrapperStyle +
`<div id="menuWrapper" class="menuWrapper">` +
`<div id="wrapper_tabSelectors" class="tabSelectors">` +
shelfMenuHTML.tabSelectors.style +
shelfMenuHTML.tabSelectors.HTML  +
`</div>` +

`<div id="tab1Wrapper" class="tab">` +
`<div id="tab1folderSelectors" class="folderSelectors">` +
shelfMenuHTML.tab1.folderSelectors.style +
shelfMenuHTML.tab1.folderSelectors.HTML  +
`</div>

<div id="sidebar" class="sidebar">
<button id="sidebarOpener" class="sidebarOpener" onclick="toggleSidebar1();"></button>
<div id="itemSystem"  class="itemSystem"></div>
<div id="addSystem"   class="addSystem"></div>
<div id="phantomLair" class="phantomLair"></div>
</div>

<div id="folder11" class="button_ folder folder11image">` +
shelfMenuHTML.tab1.folder1.style +
shelfMenuHTML.tab1.folder1.HTML  +
`</div><div id="folder12" class="button_ folder folder12image">` +
shelfMenuHTML.tab1.folder2.style +
shelfMenuHTML.tab1.folder2.HTML  +
`</div></div>` +

`<div id="tab2Wrapper" class="tab">` +
`<div id="tab2folderSelectors" class="folderSelectors">` +
shelfMenuHTML.tab2.folderSelectors.style +
shelfMenuHTML.tab2.folderSelectors.HTML  +
`</div><div id="folder21" class="button_ folder folder21image">` +
shelfMenuHTML.tab2.folder1.style +
shelfMenuHTML.tab2.folder1.HTML  +
`</div><div id="folder22" class="button_ folder folder22image">` +
shelfMenuHTML.tab2.folder2.style +
shelfMenuHTML.tab2.folder2.HTML  +
`</div></div>` +

`<div id="tab3Wrapper" class="tab">` +
`<div id="tab3folderSelectors" class="folderSelectors">` +
shelfMenuHTML.tab3.folderSelectors.style +
shelfMenuHTML.tab3.folderSelectors.HTML  +
`</div><div id="folder31" class="button_ folder folder31image">` +
shelfMenuHTML.tab3.folder1.style +
shelfMenuHTML.tab3.folder1.HTML  +
`</div><div id="folder32" class="button_ folder folder32image">` +
shelfMenuHTML.tab3.folder2.style +
shelfMenuHTML.tab3.folder2.HTML  +
`</div></div>` +

`<div id="tab4Wrapper" class="tab">` +
`<div id="tab4folderSelectors" class="folderSelectors">` +
shelfMenuHTML.tab4.folderSelectors.style +
shelfMenuHTML.tab4.folderSelectors.HTML  +
`</div>



<div id="sidebar4" class="sidebar4">
<button id="sidebarOpener4" class="sidebarOpener4" onclick="toggleSidebar4();"></button>
<div id="fMan" class="fMan">














<button id="hdubA" onclick="" class="pixelArt" style="position: absolute; left: 0px; top: 0px; width: 230px; height: 290px; z-index: 100250000; user-select: none; transform-origin: center center; overflow: hidden; color: black; background-color: transparent; font-size: 32px; opacity: 1; text-align: left; padding: 0px;">
<style>
.pixelArt           {
image-rendering     : crisp-edges;
image-rendering     :   pixelated;
                    }
#hdubA      {
position            :    absolute;
top                 :         0px;
left                :         0px;
background-color    : transparent;
background-size     :   100% 100%;
width               :        100%;
height              :        100%;
border              :         0px;
padding             :         0px;
margin              :         0px;
                    }

#hdubA               { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABEElEQVR4AeyUuw3CMBRFH5RMECGxAQ0zsAcVKzAFK1CxBzPQsAESygS0kGNxUeQ4xE4iKwVIl2e/z8nzJ5nb51ccLq8xBdbBgTIp1xsbQ7BgOjgToFjpuTNLkeqwYn3hOCWgy9XeUkSN6mWD8MXZ7HE/KafTkkuNnxiE+0l959OBs3wUu5LpdB7bsfLyd86d5Y6rgy5LLjV+Xv7O/Q76zpM6Z/ko9mFJ8Fio8pLgvEBIxV22AefUQ0sHyscJMfbB1FBb9zfg9eDQ8R8e3MF828Jpc+qhNvATR4x/5SiWr3PdYe5xSMRRKCYf8Ubnxe3qfATb5BKqv7Y4/ipsYrltKY/bmZwEhgoWTAfXBMdYgvkGAAD///NANGIAAAAGSURBVAMAoegCSkB7XhoAAAAASUVORK5CYII="); outline: none; }
#hdubA:focus         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABEElEQVR4AeyUuw3CMBRFH5RMECGxAQ0zsAcVKzAFK1CxBzPQsAESygS0kGNxUeQ4xE4iKwVIl2e/z8nzJ5nb51ccLq8xBdbBgTIp1xsbQ7BgOjgToFjpuTNLkeqwYn3hOCWgy9XeUkSN6mWD8MXZ7HE/KafTkkuNnxiE+0l959OBs3wUu5LpdB7bsfLyd86d5Y6rgy5LLjV+Xv7O/Q76zpM6Z/ko9mFJ8Fio8pLgvEBIxV22AefUQ0sHyscJMfbB1FBb9zfg9eDQ8R8e3MF828Jpc+qhNvATR4x/5SiWr3PdYe5xSMRRKCYf8Ubnxe3qfATb5BKqv7Y4/ipsYrltKY/bmZwEhgoWTAfXBMdYgvkGAAD///NANGIAAAAGSURBVAMAoegCSkB7XhoAAAAASUVORK5CYII="); outline: none; }
#hdubA:hover         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABBklEQVR4AeyUSw6CMBRFnw4dEYdGNsUaXJZrYFMYh4aRU+U0XkNKkRZIw0CT62vf5/D6gb19fsW5eq0psA4OlEnb1LaGYMF0cCZAsdLTHpYi1WHF+sJxSkBP5cVSRI3qZYPwgx3t3lyVM2nJpcZPDML9pLnz7cBZPopdyXY6j+1Yefk7585yx9XBlCWXGj8vf+d+B3PnSZ2zfBT7sCR4LFR5SXBeIKTiKTuAc+qhpQPl44QY+2BqqO37B/B+cOn4Dw/uYL5t4bQ59VAb+Ikjxr9yFMvXue4w9zgk4igUk4/4oPOirJyP4JhcQvc3FsffhU0sty3trd7JSWCpYMF0cE1wrCWYbwAAAP//F6plFgAAAAZJREFUAwDRvwJKQrfGswAAAABJRU5ErkJggg=="); outline: none; }
#hdubA:active        { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABFUlEQVR4AeyVTQ6CMBBGO+5mJ1ujl9IreCyvoJfSuMWdS+QVBwhthAIhLDT5HDo/jykdZeO+n+3+WMwpsB4OlEX+uLo5BAumh7MAijW9i9ylyOqwxqrhOE1Ad4ezSxE1Vm82ClfJ3PN+sZxeS65KFuRF4UHWSMd64GwfDd3Iejof2rHlLd85M8uMWwd9llxqunnLd97tYOw6qXO2j4beLAk+FGp5SXB+QMiK+2wA59RjWweqkjmV+J8aNdS2bxjA28Gp13949Aku91g4bU491gZ+4ojrXzkWW65zlWqGmemYVJo5j8XxqTQv6rrzbH/yu1GpACqh9Qnll0oYU6l8ZdgZy8Nfj5uYk8BUwYLp4bbAMZdgfgAAAP//xfmvAgAAAAZJREFUAwCTABhKDYUV8wAAAABJRU5ErkJggg=="); outline: none; }
</style>
</button>
<button id="hdubB" onclick="" class="pixelArt" style="position: absolute; left: 230px; top: 0px; width: 230px; height: 290px; z-index: 100250000; user-select: none; transform-origin: center center; overflow: hidden; color: black; background-color: transparent; font-size: 32px; opacity: 1; text-align: left; padding: 0px;">
<style>
.pixelArt           {
image-rendering     : crisp-edges;
image-rendering     :   pixelated;
                    }
#hdubB      {
position            :    absolute;
top                 :         0px;
left                :         0px;
background-color    : transparent;
background-size     :   100% 100%;
width               :        100%;
height              :        100%;
border              :         0px;
padding             :         0px;
margin              :         0px;
                    }

#hdubB               { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABLUlEQVR4AeySzQnCQBBGV0+eBcEabMNWLMFUEUuwlbRhDYLg2VvkLfnCJEzirOSmwnOzs7Nv9m+dut++atolQZvlSOncqnNaAlw4s5wOUtrNrklRyPeQq5eThPS02qYo5ANzPQby1+OYru3Ty3NjWsRUgYHcNXRBioou1DcU8QqE5ZjYGVCEvsUrUCSXbKqAxtV+JdfkT+2Pyb2X4R1R0bEgBV4GeEIbC8uRCSvgm6cJvCL6IizXBK9VUXZlx8NyVmaxkqnvsBwB2xYUImZhB3b1RXIrinz/5e4pFR0LlyW4vLGRS+bCFQ/LkVkkmGvD8jkJY+NVExvI2TKrYyAKUrDHobkDOQkklsAckNC2vfxQX3KcxBLypNGfXFl+r48rxgkuAS6cWa4OgaXA+QYAAP//37tFwAAAAAZJREFUAwDgMzlK3r1UqwAAAABJRU5ErkJggg=="); outline: none; }
#hdubB:focus         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABLUlEQVR4AeySzQnCQBBGV0+eBcEabMNWLMFUEUuwlbRhDYLg2VvkLfnCJEzirOSmwnOzs7Nv9m+dut++atolQZvlSOncqnNaAlw4s5wOUtrNrklRyPeQq5eThPS02qYo5ANzPQby1+OYru3Ty3NjWsRUgYHcNXRBioou1DcU8QqE5ZjYGVCEvsUrUCSXbKqAxtV+JdfkT+2Pyb2X4R1R0bEgBV4GeEIbC8uRCSvgm6cJvCL6IizXBK9VUXZlx8NyVmaxkqnvsBwB2xYUImZhB3b1RXIrinz/5e4pFR0LlyW4vLGRS+bCFQ/LkVkkmGvD8jkJY+NVExvI2TKrYyAKUrDHobkDOQkklsAckNC2vfxQX3KcxBLypNGfXFl+r48rxgkuAS6cWa4OgaXA+QYAAP//37tFwAAAAAZJREFUAwDgMzlK3r1UqwAAAABJRU5ErkJggg=="); outline: none; }
#hdubB:hover         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABJUlEQVR4AeySTQ6CMBBGi0tXhLVeijN4LM/ApXRNWLnFvIaPDGTAqWGnJs/S6fRN/05p+tWXdjwStFmOlM7w6NIR4MKZ5XSQ0r5Sn6KQ7yHXLCcJ6a1qUhTygbkeC/k5Nek+9l6eG9Mitgos5K5hClJUTKG5oYhXICzHxM6AIvQtXoEiuWRbBTSu9iu5Jn9qf0zuvQzviIqOBSnwMsAT2lhYjkxYAd88TeAV0RdhuSZ4rYqyKzselrMyi5VsfYflCNi2oBAxCzuwqy+SW1Hk+y93T6noWLgsweWtjVwyF654WI7MIsFeG5bvSRhbr5rYQs6WWR0DUZCCPQ7NXchJILEE5oCEtp3l9bXNcRJLyJNWf3Jl+fDsKsYJHgEunFmuDoGjwPkGAAD//2+5ZZoAAAAGSURBVAMASTAfSi9GP1kAAAAASUVORK5CYII="); outline: none; }
#hdubB:active        { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABNklEQVR4AeyTQXLCMAwArd50a3rmVe0X+qx+obyKM3DjGGadyCgZwchMbsDMYlu2V7Zjf5T597n7HrcEbZUjpXE6/JctwIWzymkgpbyMp5KF8RHmanIGIf2Vr5KF8cDciIVcZSh/4zEaF8ZsEfcSLOShYQ6S1JhDrSBJlCAtx6QyFJV4d1GCLjkJQCVOQJ/nKbkXPKq/mDy6GdHxdB0LUuBmQCT0sbQcmeEF1O3+qww0G2l5mxFULCm78t1pua3OSi+5V0/LEahML1QlfkTswK++S06CHt7y8LS6joWPZfDx1kZuksrtrqflyDxrcdROy6PJPrZeNX0LOVtmdXRkQQoqt+OwuQu5yvQ4GJxFZXpYJvRlkw+7nxpXmQar5Mo6afVnrio/H/ZCP8EtwIWzyq1BYCtwXgEAAP//xFU8hAAAAAZJREFUAwApKDlKxYu5tgAAAABJRU5ErkJggg=="); outline: none; }
</style>
</button>
<button id="hdubC" onclick="" class="pixelArt" style="position: absolute; left: 460px; top: 0px; width: 230px; height: 290px; z-index: 100250000; user-select: none; transform-origin: center center; overflow: hidden; color: black; background-color: transparent; font-size: 32px; opacity: 1; text-align: left; padding: 0px;">
<style>
.pixelArt           {
image-rendering     : crisp-edges;
image-rendering     :   pixelated;
                    }
#hdubC      {
position            :    absolute;
top                 :         0px;
left                :         0px;
background-color    : transparent;
background-size     :   100% 100%;
width               :        100%;
height              :        100%;
border              :         0px;
padding             :         0px;
margin              :         0px;
                    }

#hdubC               { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABO0lEQVR4AeyULQ7CQBCFByQn4D6kBovnBFgcEoflBHgspuE+nAAL/RqmmU73p8DKkrzszux735YJZS6fz3J/f5UU2BYOlOJcXaWEYMFs4RRAWUNaV0dJyWeU1cG9gVqBi4tISuojYxWFE1CgDYT26iNjz4NwTASskf1zK6Ki9iJDVvtBuB7aFeitPgiy/dR+AOdmniAV4gIuS3k4G8BpegECaPvU9L3oq28UXM1+BeRlPT34mJHYcG7fg+fM355P8ODEprHkx8ILwRvnnfwd8A74fq7+a+Zc6GUv/BkOlG/kRV8vGMBzoyGMgCoktg7gMSN9gCrqnILw2NPnYPwYyKovCOcQE2ZEnRIeRMb6onBMmBHBlPAgMlYdfFdvbL+3J5hSz9wUymrhj9Nq1vSEZgnBgtnCtaBRSjDfAAAA//9y/97wAAAABklEQVQDAHccIUpPIBQyAAAAAElFTkSuQmCC"); outline: none; }
#hdubC:focus         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABO0lEQVR4AeyULQ7CQBCFByQn4D6kBovnBFgcEoflBHgspuE+nAAL/RqmmU73p8DKkrzszux735YJZS6fz3J/f5UU2BYOlOJcXaWEYMFs4RRAWUNaV0dJyWeU1cG9gVqBi4tISuojYxWFE1CgDYT26iNjz4NwTASskf1zK6Ki9iJDVvtBuB7aFeitPgiy/dR+AOdmniAV4gIuS3k4G8BpegECaPvU9L3oq28UXM1+BeRlPT34mJHYcG7fg+fM355P8ODEprHkx8ILwRvnnfwd8A74fq7+a+Zc6GUv/BkOlG/kRV8vGMBzoyGMgCoktg7gMSN9gCrqnILw2NPnYPwYyKovCOcQE2ZEnRIeRMb6onBMmBHBlPAgMlYdfFdvbL+3J5hSz9wUymrhj9Nq1vSEZgnBgtnCtaBRSjDfAAAA//9y/97wAAAABklEQVQDAHccIUpPIBQyAAAAAElFTkSuQmCC"); outline: none; }
#hdubC:hover         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABMUlEQVR4AeyUPQ6CQBCFR0sqYq2X4gAezgNwKa0NFa3yEYcMs3+oW2Lysjuz732LE/Eon0977l41BXaGA6UY7r3UECyYM5wCKGtMozwlJ59R1gL3BmoFNjeRnNRHxioJJ6BAG4jt1UfGnkfhmAhYI/vxKqKi9iJDVvtRuB7aFWgjJ0G2n9sHcG7mCXIhLuCynIezAE7TCxBA26em70VffZvgavYrIC/rWcG3jMSGS/sVvGT+9nyHRye2j6U8Fl4I3jjv5O+Ad8D3S/VfM+dCL3vhz3CgfCMv+npBAC+NhjACqpDUGsBTRvoAVdQlReGppy/B+DGQVV8UziEmzIg6JzyIjPUl4ZgwI4I54UFkrBZ4e+lsf7UnmNPKPBXKmuHDoz9MPaFZQ7BgznAtaNQSzDcAAAD//7AyTeUAAAAGSURBVAMA7MUESk/KrM8AAAAASUVORK5CYII="); outline: none; }
#hdubC:active        { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABR0lEQVR4AeyUu3LCMBBFtek2VdzzVUmfj0uffBU9qZISOBKL1/JaMuASZu5I+7hH8s6gl3T5ve3ej1sKbIYDJTjsv9MWggUzwwmAskb6Px5SS7XHWFd43UBswNevlFqyPjxei3AMBvSGaG99eHw9hNOEwTey//tMyURcCw9ey4dwK/oVqMqQVAafbu5ncE7mBi2XypC/oNVDbQYnWctu7fMq5QBqXirjl62Ce6jfq5QxqYyrr0/ga0bizb39BN5rvrX+hIcTe46lPxaV8q+rO3kO+A/U+V780Mw5sJY/8G44UL6oFnk7YAZXaY8GMwJqkKV1Bl9qJA/QRNxTCFeJb9+D8fSqrHhyVcoBGNZA6VMZwXjCm1NAKuWdxtiSSunD43WFD7sPn5/sVYpZJV4nzefAWBn+u/+Rcy6R3EKwYGa4BSS2EswTAAAA//9qfLbVAAAABklEQVQDALe9IUrh181jAAAAAElFTkSuQmCC"); outline: none; }
</style>
</button>
<button id="hdubD" onclick="" class="pixelArt" style="position: absolute; left: 690px; top: 0px; width: 230px; height: 290px; z-index: 100250000; user-select: none; transform-origin: center center; overflow: hidden; color: black; background-color: transparent; font-size: 32px; opacity: 1; text-align: left; padding: 0px;">
<style>
.pixelArt           {
image-rendering     : crisp-edges;
image-rendering     :   pixelated;
                    }
#hdubD      {
position            :    absolute;
top                 :         0px;
left                :         0px;
background-color    : transparent;
background-size     :   100% 100%;
width               :        100%;
height              :        100%;
border              :         0px;
padding             :         0px;
margin              :         0px;
                    }

#hdubD               { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABFklEQVR4AeyUQQrCMBBFoyvXguAZvIFrj+NWT6Fbj9O1N/AMguDanfKGTknGiSQlG6GF33SmP2+Soek89Nf62L1bCqzAgRLcjofQQrBgCpwAKONi1YVS4fekrAGOCehluwylwo+Y6ymBvx67sL8+PZ+b00XkCiRwl9AnKYr68GvwChTDoenObJHcDqrgWoCxRNVwoLoDnn9pFDwHpD1x75vCbdEJbjsi8dQWaYO9/U9b+OdwenUHo1bOKeQ0KiQ3joLnYDZfDWfVFpKLq+CAaQeyQNtv3idwncwLK4DI5ok9MPkETqJGQFH8hcTzEzgmzKXCj2Jg/DzAN6ez5DGXSiY4N2UJ/H7azfCQbCFYMAWuAYlWgvkBAAD//2h1LDMAAAAGSURBVAMAx0AYSjlwAMYAAAAASUVORK5CYII="); outline: none; }
#hdubD:focus         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABFklEQVR4AeyUQQrCMBBFoyvXguAZvIFrj+NWT6Fbj9O1N/AMguDanfKGTknGiSQlG6GF33SmP2+Soek89Nf62L1bCqzAgRLcjofQQrBgCpwAKONi1YVS4fekrAGOCehluwylwo+Y6ymBvx67sL8+PZ+b00XkCiRwl9AnKYr68GvwChTDoenObJHcDqrgWoCxRNVwoLoDnn9pFDwHpD1x75vCbdEJbjsi8dQWaYO9/U9b+OdwenUHo1bOKeQ0KiQ3joLnYDZfDWfVFpKLq+CAaQeyQNtv3idwncwLK4DI5ok9MPkETqJGQFH8hcTzEzgmzKXCj2Jg/DzAN6ez5DGXSiY4N2UJ/H7azfCQbCFYMAWuAYlWgvkBAAD//2h1LDMAAAAGSURBVAMAx0AYSjlwAMYAAAAASUVORK5CYII="); outline: none; }
#hdubD:hover         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABEUlEQVR4AeyUwQ3CMAxFA0dOqGcYhDW6BvOwRtdgEDhXPXEFPauuEuOgpMoFqZV+U7s/z4nVdB/m63jq3y0FVuBACabHEFoIFkyBEwBlfIUxlAq/J2UtcExAb5culAo/Yq6nBH4IXbjeR8/n5nQRuQIJ3CXMSYqiOfwavALFcGi6M1skt4MquBZgLFE1HKjugOdfWgXPAWlP3PumcFt0g9uOSLy1Rdpgb//TFv45nF7dwaqVcwo5jQrJjavgOZjNV8NZtYXk4io4YNqBLND2m/cJXCfzwgogsnliD0w+gZOoEVAUfyHx/ASOCXOp8KMYGD8v8OO5lzzmUskE56YsgU/PYYeHZAvBgilwDUi0EswPAAAA//+x8dl1AAAABklEQVQDAHH/Akp/RlJ2AAAAAElFTkSuQmCC"); outline: none; }
#hdubD:active        { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABIElEQVR4AeyVwQ3CMAxFY26+Uc4swhowBvMwBqzBIpyBG0fQS5tCUgclVS5IIP2m/rWfE4vCwg2f5Xr7bCmwHg6U4HY5uhaCBdPDCYCyPp43VyryLQXWCCcJ6GGzcqUiH1FrKYKrdG5/vlp5phc2kWsQwU3CYNIUDeFksRoUw6Gp9CdLm+ROUAUPDVhLVA0HqtKfgPtvmgXPARnP5+ybwtOmf3g6ER//x+LHkF5+Zyz85qh04wFm7Zy3kLdxpGRuZsEzrIldDWfXE0rGqIIDZhwo5aXz5nkED8U8SAUQpT6xBcaP4Bg1AopU3t+Qz/oIrtL/CVBQIpXOqdhgmozwbr0j9skqfZHK99UXGJfA8vD75STkYLYQLJgeHgKMVoL5AgAA//9WzybiAAAABklEQVQDAB/jGEoBrnKJAAAAAElFTkSuQmCC"); outline: none; }
</style>
</button>
<button id="hdubE" onclick="" class="pixelArt" style="position: absolute; left: 920px; top: 0px; width: 230px; height: 290px; z-index: 100250000; user-select: none; transform-origin: center center; overflow: hidden; color: black; background-color: transparent; font-size: 32px; opacity: 1; text-align: left; padding: 0px;">
<style>
.pixelArt           {
image-rendering     : crisp-edges;
image-rendering     :   pixelated;
                    }
#hdubE      {
position            :    absolute;
top                 :         0px;
left                :         0px;
background-color    : transparent;
background-size     :   100% 100%;
width               :        100%;
height              :        100%;
border              :         0px;
padding             :         0px;
margin              :         0px;
                    }

#hdubE               { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABKklEQVR4AdSTO44CMRAFvXuKvc+KhJRrkJLwifgkpFyDlARxH24BKouHnsED8tgBjFTqdrdd7cDzG27f3+R0aQnaKEfKYjfYhxbgwhnlLJASh4NV6AvnQa67nCLSxXQd+sJ5PCKRH47zsNzM1KuOiRzbuwEMdzjTxZO8ayN1pAx3qNHLUSTPCRjEACD3PdVyZEiB3Gkid6Hnny3nbYPfWHnxzRE5+uGoSapYJJfIo0S5WCTPCV7ViuS85UeayRHxnh0No0bfKbq5H1SOFLT2WC132WP+HXLeOfjtq2+OEPT2yTXgSU6TjdrgkTp9hxr4PuWJnENdG3WAvqN6Liby3IaaWiLnveqn6Btx6EJ3+fg4ijWaNSCRK8rP2/8fFWnUggtnlGtBoRU4rwAAAP//xiV2uwAAAAZJREFUAwD9MWBKFDPpmgAAAABJRU5ErkJggg=="); outline: none; }
#hdubE:focus         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABKklEQVR4AdSTO44CMRAFvXuKvc+KhJRrkJLwifgkpFyDlARxH24BKouHnsED8tgBjFTqdrdd7cDzG27f3+R0aQnaKEfKYjfYhxbgwhnlLJASh4NV6AvnQa67nCLSxXQd+sJ5PCKRH47zsNzM1KuOiRzbuwEMdzjTxZO8ayN1pAx3qNHLUSTPCRjEACD3PdVyZEiB3Gkid6Hnny3nbYPfWHnxzRE5+uGoSapYJJfIo0S5WCTPCV7ViuS85UeayRHxnh0No0bfKbq5H1SOFLT2WC132WP+HXLeOfjtq2+OEPT2yTXgSU6TjdrgkTp9hxr4PuWJnENdG3WAvqN6Liby3IaaWiLnveqn6Btx6EJ3+fg4ijWaNSCRK8rP2/8fFWnUggtnlGtBoRU4rwAAAP//xiV2uwAAAAZJREFUAwD9MWBKFDPpmgAAAABJRU5ErkJggg=="); outline: none; }
#hdubE:hover         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABIklEQVR4AdSTMQ4CIRBF0dLKWOulPI7GyuhxvJTWxspW84jffHZZDQuFbvIywwy8oWCn4fXNl+tHS9BGOVIWt/MptAAXzihngZR4D9cwFs6DXG85RaS7zSGMhfN4RCKfhUXYH7fqVcdEju3bAIY7nBmiJx/aSB0pwx1q9HIUyXMCBjEAyH1PtRwZUiB3mshd6Plvy3nb4DdWXnxzRI5+OGqSKhbJJfIoUS4WyXOCT7UiOW+5SzM5It6zo2HU6DtFN/eDypGC1h6r5S7r5v8h552D37765ghBb59cA3pymmzUBo/U6TvUwPcpT+QcGtqoA/Qd1XMxkec21NQSOe9VP8XYiEMXesvnq3Ws0awBiVxRfrucJirSqAUXzijXgkIrcD4BAAD//5q//NwAAAAGSURBVAMAX309SoXEb6kAAAAASUVORK5CYII="); outline: none; }
#hdubE:active        { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABPElEQVR4AdSVMU4DMRBFPXTTsX1OBbcBUSG4DZwqfegog96anx1vvJG8dgGRvsb+M/PGK9nKXfr93R8eziMFdoYDZXM6fqQRggVzhrMBSvw+n9Je0Y/EusAxgb48vaW9oh+OVMDdpvT6/qxcdyzg0NxuD2B4FD1buoJvFeIDdZuS2yI8cjU1wWsAt/ylDHGbipJuODS3/CWso4bAIzCu/zacu43iibVuPjmgKD04PEEVm+ACxShQLTbBa4BbXhOcu7zWMDggt3yn3XLUMLfyAVHbdHIa1nLLQ9Y++244kC39Dzj3HMWv6D45QKS7z1oDruAkKVRBjPjko/BQrNO6gNO0VagG8lHya7GA1wp6vALutvyr6HG0RrflMV3g0+FxPqRbfhRu+yIQsWb41/HTZJLoFSyYM1wbjFGC+QMAAP//fMFv4AAAAAZJREFUAwAJrWBK6T4p/gAAAABJRU5ErkJggg=="); outline: none; }
</style>
</button>
<button id="hdubF" onclick="" class="pixelArt" style="position: absolute; left: 0px; top: 290px; width: 230px; height: 290px; z-index: 100250000; user-select: none; transform-origin: center center; overflow: hidden; color: black; background-color: transparent; font-size: 32px; opacity: 1; text-align: left; padding: 0px;">
<style>
.pixelArt           {
image-rendering     : crisp-edges;
image-rendering     :   pixelated;
                    }
#hdubF      {
position            :    absolute;
top                 :         0px;
left                :         0px;
background-color    : transparent;
background-size     :   100% 100%;
width               :        100%;
height              :        100%;
border              :         0px;
padding             :         0px;
margin              :         0px;
                    }

#hdubF               { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABKklEQVR4AeyTvQ3CMBCFDVNAywYUTEBHicQmwBDAJkiUdExAwQa0sAXks3joYpxYVixEQZSX+/Hdd1Zk993rGaxOj5IC6+FACXaTmyshWDA9nAAodr6YuS6CIdYbThLoaH1xXQQDFqrBD/uju27G5IuoBoeYGsDwUPTF9AGPFSkHlOGhyKvG2iy4bbQ+wxiA8LVWBA4MKMKXisEFtPa34ZxrZHcsP3vngKx04cgJKpsFF8hagWI2Cx4DtOWy4JzjUMXggDjLVhpGjnWrrJ3bRvlAkWJrO8MtLPT/8PCP+Pi7v4VrzA30o4MPedaDdGNY2zmNABqrqwXWqavc5FuDc151KdosdUlyVfCGL8/DKnSOxpR8YctHLA+/b6c9akmWECyYHq6ARCnBfAIAAP//3+eiBwAAAAZJREFUAwARTDxKwr3+QQAAAABJRU5ErkJggg=="); outline: none; }
#hdubF:focus         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABKklEQVR4AeyTvQ3CMBCFDVNAywYUTEBHicQmwBDAJkiUdExAwQa0sAXks3joYpxYVixEQZSX+/Hdd1Zk993rGaxOj5IC6+FACXaTmyshWDA9nAAodr6YuS6CIdYbThLoaH1xXQQDFqrBD/uju27G5IuoBoeYGsDwUPTF9AGPFSkHlOGhyKvG2iy4bbQ+wxiA8LVWBA4MKMKXisEFtPa34ZxrZHcsP3vngKx04cgJKpsFF8hagWI2Cx4DtOWy4JzjUMXggDjLVhpGjnWrrJ3bRvlAkWJrO8MtLPT/8PCP+Pi7v4VrzA30o4MPedaDdGNY2zmNABqrqwXWqavc5FuDc151KdosdUlyVfCGL8/DKnSOxpR8YctHLA+/b6c9akmWECyYHq6ARCnBfAIAAP//3+eiBwAAAAZJREFUAwARTDxKwr3+QQAAAABJRU5ErkJggg=="); outline: none; }
#hdubF:hover         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABJElEQVR4AeyTvQ3CMBCFD0oqRA0NG7BKhmEIhskqbEADNUpFC/ksXnQxSSwrFqIgysv9+O47K7KX9n7W2+pZUmADHChBc62thGDBDHACoNiH3W2OYIjVwUkC3R/PNkcwYKEefGUbu5wO5IuoB4eYGsDwWPQN6QM+VKQcUIbHIq8ab7PgvtH7DGMAwtdaETgwoAhfKgYX0NvfhnOukd+x/OydA/LShSMnqGwWXCBvBRqyWfAhwFQuC845jlUMDoiz7KVh5Fj3ytq5b5QPFCn2djbcw2L/D4//SIi/+1u4xtzAMDr6kGc9So+GvZ3TCGC0ul1gnbrWTb49OOdVl2LKUpcktwUdfL2r2tCMxpRC4cRHrABvbvWCWpIlBAtmgCsgUUowXwAAAP//tc+IEwAAAAZJREFUAwDCOR9KGs817AAAAABJRU5ErkJggg=="); outline: none; }
#hdubF:active        { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABNklEQVR4AeyVMU4DMRBFPXTTsX0qbsBV4C4cgrvAVbgBVfrQUQY9m7+xN5OVrLWiFIn0M/b3+I135dE+pP/f4+7lOFJgMxwok8P+I40QLJgZzgQo8fd4SFsEQ6wZjgn06e0rbREMWKiBu03p+/0Zf4gaOES39QIUX4p9kc7gUZI8oG5TcmuFr5w6dsHrjfXYrTwtRdymeWkIHJpbeRrG0jC4gHW8bTj3GtUn1rj75IBqqeHwBFXsggtUR4Gi2AWPAGteF5x7vNQwOCC3cp/dSlQxt1PzkIe6Ts6GpdxKkaXPfDMcyCXd4eGbue5roY3pwOgo+KxHa5HXnJyNAKJEeayTp/labOBupy+KmiOKbucNExWZ4dPuNa+7laZwuxxz4sqfWBn+s/80cjFHCBbMDNcEY5Rg/gEAAP//+Rrn2gAAAAZJREFUAwCcsDxKYVAaEwAAAABJRU5ErkJggg=="); outline: none; }
</style>
</button>
<button id="hdubG" onclick="" class="pixelArt" style="position: absolute; left: 230px; top: 290px; width: 230px; height: 290px; z-index: 100250000; user-select: none; transform-origin: center center; overflow: hidden; color: black; background-color: transparent; font-size: 32px; opacity: 1; text-align: left; padding: 0px;">
<style>
.pixelArt           {
image-rendering     : crisp-edges;
image-rendering     :   pixelated;
                    }
#hdubG      {
position            :    absolute;
top                 :         0px;
left                :         0px;
background-color    : transparent;
background-size     :   100% 100%;
width               :        100%;
height              :        100%;
border              :         0px;
padding             :         0px;
margin              :         0px;
                    }

#hdubG               { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABV0lEQVR4AaySu20CQRCG164AOXLqMpzarZARk1AACTEZrUBKGaREiA5A34k5zc3OPgYd0q+b1//Ncref6fX7Xh8fcwrsAAdKclgs0hyCBXOAkwDlafW3+UktJfMT1gg3/RG4//1KLbHc+sldOMMCZKglZvHYORduhyRfnW8JSd56ZnBOwEmsEehpe0mI2Pbx4NX1DK6bEgMDKnnvswuuYZyOU+paKZ7AI8YSUNcncN0oxbweXpMnetoXhmMG4ome1ltwDajFYTjfpSa9LAQHyk2piRlZEIKLqfcZgvMR5ZbYBVJnRnohOCZtJteyvTBcw1rxBM5m/l7L1NufwEsmboe+BaU5W++CY5IFLCGm1lIGr70aoMiDUmex7mVw3YzGdoELl9PXPm6tJ4dy4TRZgIB4KvWo40cjfHm/k2di2BODpbqwBvh19//BMMU5BAvmAJeEwlyC+QQAAP//OstHawAAAAZJREFUAwAzJFRKI2biwwAAAABJRU5ErkJggg=="); outline: none; }
#hdubG:focus         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABV0lEQVR4AaySu20CQRCG164AOXLqMpzarZARk1AACTEZrUBKGaREiA5A34k5zc3OPgYd0q+b1//Ncref6fX7Xh8fcwrsAAdKclgs0hyCBXOAkwDlafW3+UktJfMT1gg3/RG4//1KLbHc+sldOMMCZKglZvHYORduhyRfnW8JSd56ZnBOwEmsEehpe0mI2Pbx4NX1DK6bEgMDKnnvswuuYZyOU+paKZ7AI8YSUNcncN0oxbweXpMnetoXhmMG4ome1ltwDajFYTjfpSa9LAQHyk2piRlZEIKLqfcZgvMR5ZbYBVJnRnohOCZtJteyvTBcw1rxBM5m/l7L1NufwEsmboe+BaU5W++CY5IFLCGm1lIGr70aoMiDUmex7mVw3YzGdoELl9PXPm6tJ4dy4TRZgIB4KvWo40cjfHm/k2di2BODpbqwBvh19//BMMU5BAvmAJeEwlyC+QQAAP//OstHawAAAAZJREFUAwAzJFRKI2biwwAAAABJRU5ErkJggg=="); outline: none; }
#hdubG:hover         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABTklEQVR4AaySy20CQRBExz76hDjbgTgN0nA8ToM0HIg5I05cQW9Fod6enk+jRSpt/+r1sDvv5fHbfR5uWwrsAgdKcvk/li0EC+YCJwHK0+tazmUk7xHrCfcDAv5+78tIzHo/eQhnWECGRmIWj58L4X5I+c/fuSDlo2cF5wScxBuBfpR9QcS+jwevrVdw21QMDKjy2ecU3MI4Hae0tVa8gmeMLaCtr+C20Yp5PbymSPSsLw3HDCQSPauX4BbQi9NwvktPdlkKDpSb0hMzWpCCyzT7TMH5iLolfoHqzKiXgmOyZnIr30vDLWwUr+Bs5u+NTLP9Fbxl4nbYW9Ca8/UpOCYtYAkxtZEqeO/VAEURlDqLba+C22Y29gtCuE7f+7i9ng4VwmmyAAGJ1OpRx4+e8N3XgbwSw5EYbNXFWuCX0/GNYYpbCBbMBa6EwlaCeQcAAP//U1kAjwAAAAZJREFUAwAK/jNKBOcYbgAAAABJRU5ErkJggg=="); outline: none; }
#hdubG:active        { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABa0lEQVR4AayUQVLDMAxFLXbaEda9CNeAY3AejgHX4CJdU3Ysy7wYNbJix3EnnfljW9J/chNNHtL/7/H0cj1SYGc4UA6X80c6QrBgznAOQFmjfq+X1FP0GOsGjwUGfH9+Sj1RG/2cq3CKDUhRT9TiiXVVeCyy89vXd0J27q0rODfgJtEIVGVKKlO1AR683reC+6TtDWznvesuuIdxO27pY619AR8xtoA+XsB9orVXyc+cRxWlMhW2YThulfxiVcqVnNddcA/Y2g/DeS9b8s2G4ECZlC1RYw2G4Gbauw7BVZZJiQ1sclSWiRmCA1RZzJy9VMrcMNzDevsCrpL/ds+0N1/AWyamw09Bqy7Gd8ExWQOasCfW0wqu0n40QFENSpzGPreC++ToPjaowlXy7ZndVoOtnHmqcJIq+YsHpCaV5QI+r7LM+g0+nV5hrqSSm6iUK4UqZUwlg401w3/On0IxwSMEC+YMtwOBowTzDwAA//89DLx/AAAABklEQVQDAHznVEpz+IKxAAAAAElFTkSuQmCC"); outline: none; }
</style>
</button>
<button id="hdubH" onclick="" class="pixelArt" style="position: absolute; left: 460px; top: 290px; width: 230px; height: 290px; z-index: 100250100; user-select: none; transform-origin: center center; overflow: hidden; color: black; background-color: transparent; font-size: 32px; opacity: 1; text-align: left; padding: 0px;">
<style>
.pixelArt           {
image-rendering     : crisp-edges;
image-rendering     :   pixelated;
                    }
#hdubH      {
position            :    absolute;
top                 :         0px;
left                :         0px;
background-color    : transparent;
background-size     :   100% 100%;
width               :        100%;
height              :        100%;
border              :         0px;
padding             :         0px;
margin              :         0px;
                    }

#hdubH               { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABBElEQVR4AeyUsQ3CMBBFD0omyBA0zMAebEEDokLQsAV7MAMNQ2QCWsg74egc29KhuHSUn5z/d56ik85L+V3d/vGpKbAKB8qiX2+khmDBVDgLoLzfO5GSyFEpxycPrBGOSXg6XKQkclTK8clhoQi+uoucr0f8RPjkiDrZMBj45EOpdwRXp+KjwbPNbG2Z3xYGBGVJGdPdc6bPKsNKLDc8+dJhuOGMtpWDLW44MM4NRO3RX3AP0O5pcNuNsW5tGVthi6gtnBuMuN0QanxyRB18+8YnD14EZ0DsFE5rcjT17Zo8gXevp3qEJemG4VHK8YdYAkv/vL9tF8EkmCtYMBUeFhi1BPMLAAD///pPCCIAAAAGSURBVAMA6b8GShNE0/kAAAAASUVORK5CYII="); outline: none; }
#hdubH:focus         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABBElEQVR4AeyUsQ3CMBBFD0omyBA0zMAebEEDokLQsAV7MAMNQ2QCWsg74egc29KhuHSUn5z/d56ik85L+V3d/vGpKbAKB8qiX2+khmDBVDgLoLzfO5GSyFEpxycPrBGOSXg6XKQkclTK8clhoQi+uoucr0f8RPjkiDrZMBj45EOpdwRXp+KjwbPNbG2Z3xYGBGVJGdPdc6bPKsNKLDc8+dJhuOGMtpWDLW44MM4NRO3RX3AP0O5pcNuNsW5tGVthi6gtnBuMuN0QanxyRB18+8YnD14EZ0DsFE5rcjT17Zo8gXevp3qEJemG4VHK8YdYAkv/vL9tF8EkmCtYMBUeFhi1BPMLAAD///pPCCIAAAAGSURBVAMA6b8GShNE0/kAAAAASUVORK5CYII="); outline: none; }
#hdubH:hover         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAAA/ElEQVR4AeyUMQ7CMAxFDSNTxQyX6nFATAiO00vBjDqxQp9FKqdJJKNmTNXfOv+nT5UlZyu/qzv0n5oCq3CgLMbHIDUEC6bCWQDl/ZaXlESOSjk+eWDNcEzCy+kmJZGjUo5PDgtF8J3s5Xo/4yfCJ0fUyYbJwCefSr0juDoVHw2ebWZry/q2MCAoS8qY7p4zfVYZVmK54cmXDsMNZ7StHGxxw4FxbiBqj/6Ce4B2T4Pbbsx1a8vcCltEbeHcYMTthlDjkyPq4Ns3PnnwIjgDYqdwWZOjpW/X5Am8O/bqEZakG6ZHKcefYgks/fPxOWyCSbBWsGAqPCwwagnmFwAA//8dAtc+AAAABklEQVQDAP9hBkrhIcOAAAAAAElFTkSuQmCC"); outline: none; }
#hdubH:active        { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABCElEQVR4AeyVMQ6CQBBFd+ymk95T6W00VkZvo6eyx84SebsODi7ENVBC8tnZ/5cXMsnAKryv9WbbzCmwEQ6UTX2/hjkEC2aEswHK+mzqMCZyNJbjkxurg2MSHvfnMCZyNJbjk8NCPbhKFU6XA34mfJUqqPw+Yw/34GbOtS7wwU4ubZneFgYEDZIGzOKeM31eA6zMKoZnTxYYxXDG36uAHYrhwFTSt4W6RH/BS4D+zAL33ejqpS1dK3zRawvfDUbcH7AanxxRm+9XfHLzenCV9PP1k+hrlTRE3vuuVSpjfya02uyiqZIAKvkaD7Q3lTxTSV4bB2PFN3/cb2ImwVTBghnhtsGYSzBfAAAA//98PpT0AAAABklEQVQDAAb+HkpuG/05AAAAAElFTkSuQmCC"); outline: none; }
</style>
</button>
<button id="hdubI" onclick="" class="pixelArt" style="position: absolute; left: 690px; top: 290px; width: 230px; height: 290px; z-index: 100250000; user-select: none; transform-origin: center center; overflow: hidden; color: black; background-color: transparent; font-size: 32px; opacity: 1; text-align: left; padding: 0px;">
<style>
.pixelArt           {
image-rendering     : crisp-edges;
image-rendering     :   pixelated;
                    }
#hdubI      {
position            :    absolute;
top                 :         0px;
left                :         0px;
background-color    : transparent;
background-size     :   100% 100%;
width               :        100%;
height              :        100%;
border              :         0px;
padding             :         0px;
margin              :         0px;
                    }

#hdubI               { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAAA4UlEQVR4AeyVsQ3CMBBFL0wQUdGyCqySFWgYgIYVsgqsQkuFskHIs4hlmW/LUlw6ylfsu/+fopMl7+z3HC6PuabAOjhQNmPfWw3BgungbIDyDXW6Hq1EFj0ry8OjvoMO3d5KxA/EefZJ+PP2snH+4MkKD15lSsIxEyLMWokeHtWjloVj2KIGl9NrY2ljkROQxXZa2ljkBGQxe1q4vrjmZHIp0sOzLOWbhBMiLFNBEQ/eoOSXSbh3bFgk4dyN3JElwqv+wcOHafrrEypRHFxZDv6+nzsMFGsIFkwHXzcUagnmFwAA//8dVQtaAAAABklEQVQDAC8q7jsKHyB2AAAAAElFTkSuQmCC"); outline: none; }
#hdubI:focus         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAAA4UlEQVR4AeyVsQ3CMBBFL0wQUdGyCqySFWgYgIYVsgqsQkuFskHIs4hlmW/LUlw6ylfsu/+fopMl7+z3HC6PuabAOjhQNmPfWw3BgungbIDyDXW6Hq1EFj0ry8OjvoMO3d5KxA/EefZJ+PP2snH+4MkKD15lSsIxEyLMWokeHtWjloVj2KIGl9NrY2ljkROQxXZa2ljkBGQxe1q4vrjmZHIp0sOzLOWbhBMiLFNBEQ/eoOSXSbh3bFgk4dyN3JElwqv+wcOHafrrEypRHFxZDv6+nzsMFGsIFkwHXzcUagnmFwAA//8dVQtaAAAABklEQVQDAC8q7jsKHyB2AAAAAElFTkSuQmCC"); outline: none; }
#hdubI:hover         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAAA2klEQVR4AeyVQQqDMBBFxy67EtftpTxDj9UzeKl2La66tb7QhFD/SMAsI36cTP5/yBDIxX5PfxvXmgIb4EBZLK/JaggWzABnAZRvro/NVqI8Qx1ZCU4zF9BHN1iJ8ObZWLvwqw32XOfoc7948CqDC8dMiDC1Ent41B69QziGM2pwOb02ljYWOQHZbKeljUVOQDYPTwvXF9ecTG5N9vBspXxdOCHCMpU18eDNWql04clxonDh3I3ckSXCq/4hwfv7uNsnVKL/YGQF+PKeOgw0awgWzACPCxq1BPMLAAD//1tvdn0AAAAGSURBVAMAeo/eO/Y5dp4AAAAASUVORK5CYII="); outline: none; }
#hdubI:active        { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAAA3klEQVR4AeyVMQ7CMAxFYzZvhLmngitwLK4Ap+pM2RhLXyBVRJ20UjOm6lcd5/s1siL54H7PsTuPNQU2wIGyGPq7qyFYMAOcBVC+qd7j4LYorSGOrBlOMhXQq5zcFuFNa2Ochat4dxuf0Zf94lHx5n4Wjlul/IMSmPoiHMMeNbjZvdaW1hazA2ay3ZbWFrMDZrJ4WxhfjDmzckqyh2cKzTcLp4hisypJ4sGbpOYwC58dO4IsXOU7P5mTa1JZGdC+uyzOqOKdyrr+CyMrnPzVPwQDyRqCBTPA44JELcH8AAAA//8c4yUSAAAABklEQVQDAH9U7juffWqOAAAAAElFTkSuQmCC"); outline: none; }
</style>
</button>
<button id="hdubJ" onclick="" class="pixelArt" style="position: absolute; left: 920px; top: 290px; width: 230px; height: 290px; z-index: 100250000; user-select: none; transform-origin: center center; overflow: hidden; color: black; background-color: transparent; font-size: 32px; opacity: 1; text-align: left; padding: 0px;">
<style>
.pixelArt           {
image-rendering     : crisp-edges;
image-rendering     :   pixelated;
                    }
#hdubJ      {
position            :    absolute;
top                 :         0px;
left                :         0px;
background-color    : transparent;
background-size     :   100% 100%;
width               :        100%;
height              :        100%;
border              :         0px;
padding             :         0px;
margin              :         0px;
                    }

#hdubJ               { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABE0lEQVR4AeyUzQkCMRCFo0cr0EKswJtHwatVaBVahVfBozcrsBCtwKvyBUfyM9md1YAgKzySvHnzbTYuGbrXb7w5P2oKrIcDZbGbXl0NwYLp4SyAMmpaLOfOKvqF9YZjagI62jtnFXnhtMKPh5O7r5yXNGmjZMhLvRVOkAYEgHUqfOoorJngYUOXeQ9XT6s/ln8/Fu6GVOo7G8zoawGqXVD4BlYWieBZ9Uvjt3C58T55CfPOOXf+jy4PieDcx+w0BABsApOnL+yReQQXMx15QOpZ1hmcXbAbSzM58qVsBidIA43MS6JOrlTHV+EUaARQEnVyTXrD15dJlgNQUhYODGF5+G07G1DDrCFYMD1cFhi1BPMJAAD///vJWwMAAAAGSURBVAMAGC7+OyooWuMAAAAASUVORK5CYII="); outline: none; }
#hdubJ:focus         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABE0lEQVR4AeyUzQkCMRCFo0cr0EKswJtHwatVaBVahVfBozcrsBCtwKvyBUfyM9md1YAgKzySvHnzbTYuGbrXb7w5P2oKrIcDZbGbXl0NwYLp4SyAMmpaLOfOKvqF9YZjagI62jtnFXnhtMKPh5O7r5yXNGmjZMhLvRVOkAYEgHUqfOoorJngYUOXeQ9XT6s/ln8/Fu6GVOo7G8zoawGqXVD4BlYWieBZ9Uvjt3C58T55CfPOOXf+jy4PieDcx+w0BABsApOnL+yReQQXMx15QOpZ1hmcXbAbSzM58qVsBidIA43MS6JOrlTHV+EUaARQEnVyTXrD15dJlgNQUhYODGF5+G07G1DDrCFYMD1cFhi1BPMJAAD///vJWwMAAAAGSURBVAMAGC7+OyooWuMAAAAASUVORK5CYII="); outline: none; }
#hdubJ:hover         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABB0lEQVR4AeyUTQ6CMBCFR5esiGu9FAfwcB6AS+nasGKr+RqH9BcGbWJCMHlp++bNR6mkR/n82nP3qimwDg6UxXDvpYZgwXRwFkAZcxrlKVbRr6wJjpkT0OYmYhV55SzCGznJeBUnbcqNmiGv9UU4QRoQANax8Kkjv2aC+w1r5js8e1r7sWz9WLgbYmXf2WAGXwvQ3AWFb2AlkQCeVH80/gvXG++blzDvnHPn/1jzkADOfcxOfQDAOTB5+vwenQdwNeORB8SeZZ3A2QW7sTSTI1/KJnCCNNDIvCTq5Ep1/CycAo0ASqJObk4TvL10SQ5ASUnYM5Tl4MOjP1DDrCFYMB1cFxi1BPMNAAD//7uICgIAAAAGSURBVAMAMRjoO8tslqIAAAAASUVORK5CYII="); outline: none; }
#hdubJ:active        { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABDElEQVR4AeyVsQ6CMBCGe27nJLtPpbsP565P5a6TjpivWATugKIkJgaSP6X/Xb9rC2lX4fVstrtyToGNcKB0rpdTmEOwYEY4HaC0nh7lNeSK8YlVwzE9AV0fQ8gV+YkzClcpwv0QotIgr005KkUdHoWTqVIElaoI/a4Aq1Q5zVgWvDlgyvsCd3dr2ZZ/3xbOhq7cNWeYrb8FqHdA4WewTEoLbqJfGr+FpxPvk0Vkz5x953tMKdKCq9gzG+AQeGhlLXjfrCjQFxvyDVzFzr4PMDRrxhg4psp4gTEwHBdOQKUqAMSTyvsiJt9TDS+2exNXqS5dFdua5IaRWBF+u5yFGOYcggUzwlMHYy7BfAIAAP//Dz6RjAAAAAZJREFUAwC0BP47GE8/aAAAAABJRU5ErkJggg=="); outline: none; }
</style>
</button>
<button id="hdubK" onclick="" class="pixelArt" style="position: absolute; left: 0px; top: 580px; width: 230px; height: 290px; z-index: 100250000; user-select: none; transform-origin: center center; overflow: hidden; color: black; background-color: transparent; font-size: 32px; opacity: 1; text-align: left; padding: 0px;">
<style>
.pixelArt           {
image-rendering     : crisp-edges;
image-rendering     :   pixelated;
                    }
#hdubK      {
position            :    absolute;
top                 :         0px;
left                :         0px;
background-color    : transparent;
background-size     :   100% 100%;
width               :        100%;
height              :        100%;
border              :         0px;
padding             :         0px;
margin              :         0px;
                    }

#hdubK               { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABCklEQVR4AcyUMQ7CMAxFDSMn4D6IhZWdE7CyMbKxcgJ2VpaK+3ACVtCLcJVUTlXTFKXSVxLbeflJ087l+ywPj3dJgQ1woAwu65uUECyYAc4AKO1mfZJfxXykrBZOEOjiKpITNbkcceZTo0rg9+Yor52m0pb4kHw8K4HHiRL9euCcKWfb3ZUeWTdej3OPa3ZRh3Ov63qc48SrwWfOdZsMboF5D9x9K0dssHOKvXLBraPpc++CT+o8B8+5dznv+59bC7vgFkBjlvticF0kbv8H54Nge/Hq2ifel6dOa+ijxLm+MO6zJSZY8TgGgzrUwvfNlrGQHCMgygrw53k10yCJsYIFM8B1QKCUYH4AAAD//ywAazAAAAAGSURBVAMAGpkRSr7U1HQAAAAASUVORK5CYII="); outline: none; }
#hdubK:focus         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABCklEQVR4AcyUMQ7CMAxFDSMn4D6IhZWdE7CyMbKxcgJ2VpaK+3ACVtCLcJVUTlXTFKXSVxLbeflJ087l+ywPj3dJgQ1woAwu65uUECyYAc4AKO1mfZJfxXykrBZOEOjiKpITNbkcceZTo0rg9+Yor52m0pb4kHw8K4HHiRL9euCcKWfb3ZUeWTdej3OPa3ZRh3Ov63qc48SrwWfOdZsMboF5D9x9K0dssHOKvXLBraPpc++CT+o8B8+5dznv+59bC7vgFkBjlvticF0kbv8H54Nge/Hq2ifel6dOa+ijxLm+MO6zJSZY8TgGgzrUwvfNlrGQHCMgygrw53k10yCJsYIFM8B1QKCUYH4AAAD//ywAazAAAAAGSURBVAMAGpkRSr7U1HQAAAAASUVORK5CYII="); outline: none; }
#hdubK:hover         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABAElEQVR4AcyUQQ6CMBBFR5esiGu9FAfwcB6AS+nasGKreY1DWjIljBRSkp+2M9PX31I4y+9pr92npMAGOFAGw7OXEoIFM8AZAKUd5S3/ivlIWROcINDmIZITNbkcceZTo0rgjVxkvGsqbYmvycezEnicKNGvB86ZcrbzXemRzeP1OPe4Zhd1OPe6rsc5TrxafeZct93gFpj3wN23csRWO6fYKxfcOpol9y74rs5z8Jx7l/Ol/7m1sAtuATRmuS8G10Xi9jg4HwTbi1fXPvGlPHVaQx8lzvWFcZ8tMcGKxzEY1KEJ3t46xkJyi4AoK8CHV3/SIImtggUzwHVAoJRgfgEAAP//0bW5nwAAAAZJREFUAwA9mPg7Kk0gywAAAABJRU5ErkJggg=="); outline: none; }
#hdubK:active        { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABB0lEQVR4AcyUsQ7CIBRFwQ0nu/erdPfj3PWrutdJx5qDvgYaqH2VGkxuCvfB4UKxO/P5HdrjUFJgPRwonb67mhKCBdPD6QDl+Rx6s1bMR8Ia4ZhA9xdjcmJMrobPfMaIIrizjXmcpRQ/8Z39Xg9nRfCwUKJdD5wz5Wynu5Ijm/r1JNekZhd1JNemric5SbRafOZct83gKTDvgbufquEtTs5grVTw1NHMpVfBN02eg+fSq5I7m/+epxZWwVMA8VLpi8FlkfD5Pzh/CLYXri5t/Lk642QMbRQld/b9wrjPKTEh5Yeesw3DvEZ405684WxjnF0vIMLy8Ht3s2JS+FWwYHq4dDBKCeYLAAD//3LCSoQAAAAGSURBVAMAkBARStLUoiQAAAAASUVORK5CYII="); outline: none; }
</style>
</button>
<button id="hdubL" onclick="" class="pixelArt" style="position: absolute; left: 230px; top: 580px; width: 230px; height: 290px; z-index: 100250000; user-select: none; transform-origin: center center; overflow: hidden; color: black; background-color: transparent; font-size: 32px; opacity: 1; text-align: left; padding: 0px;">
<style>
.pixelArt           {
image-rendering     : crisp-edges;
image-rendering     :   pixelated;
                    }
#hdubL      {
position            :    absolute;
top                 :         0px;
left                :         0px;
background-color    : transparent;
background-size     :   100% 100%;
width               :        100%;
height              :        100%;
border              :         0px;
padding             :         0px;
margin              :         0px;
                    }

#hdubL               { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAAA5ElEQVR4AeyVsQ3CMBBFL4xABYMwAR0lEhswAkwBI7ABEiUdEzAIVKwQ9Cx+FMUXIgc3SI705fjf3XNyieyJfa7Z/lbnFNgAB8rkuHhYDsGCGeBMgDKi9WZlfSI+JLEauAqAbqup9Ym4cofGCH45X+1Uv9w6fOJu0DEjuJMz2ipwt3WlLaUtbgdcs/wtf9wW9nnUfoUsHxSoDhfutUASHADFXeEL2B6T4BQC6grfUwTnqSj2klO9CJ4K+JYfwTmAOYjHinot2MB397k8I2GsgIgV4M/DspJJ4FfBghngmmDkEsw3AAAA///140OBAAAABklEQVQDAFZBAEq/VXRpAAAAAElFTkSuQmCC"); outline: none; }
#hdubL:focus         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAAA5ElEQVR4AeyVsQ3CMBBFL4xABYMwAR0lEhswAkwBI7ABEiUdEzAIVKwQ9Cx+FMUXIgc3SI705fjf3XNyieyJfa7Z/lbnFNgAB8rkuHhYDsGCGeBMgDKi9WZlfSI+JLEauAqAbqup9Ym4cofGCH45X+1Uv9w6fOJu0DEjuJMz2ipwt3WlLaUtbgdcs/wtf9wW9nnUfoUsHxSoDhfutUASHADFXeEL2B6T4BQC6grfUwTnqSj2klO9CJ4K+JYfwTmAOYjHinot2MB397k8I2GsgIgV4M/DspJJ4FfBghngmmDkEsw3AAAA///140OBAAAABklEQVQDAFZBAEq/VXRpAAAAAElFTkSuQmCC"); outline: none; }
#hdubL:hover         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAAA10lEQVR4AeyVQQ6CMBBFB5euCGu9FGfwWJ6BS+masHKLeY2fEDpIWrsxKclP6Z+ZVxhIe7LP1V76uaTABjhQJtNjsBKCBTPAmQBlRC8bbU/EjyTWAlcB0FvT2Z6IK/dojOBn6+w+j24dPnE36JgR3MnJtircbV1tS22L2wHXrH/LH7eFfR6tX6HIBwWqw4V7LZAEB0DxVvgCrsckOIWAtsL3FMF5Koq95FQvgqcCvuVHcA5gDuJcUa8FF3h77eUZCbkCIlaAT8+hkUngV8GCGeCaYJQSzDcAAAD//5erLeoAAAAGSURBVAMAyp/tOwMG/kQAAAAASUVORK5CYII="); outline: none; }
#hdubL:active        { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAAA3klEQVR4AeyVQQ6CMBBFO+66s645lV7BY3kFPRVrcecS86qDhA6SYjckJfkp/TPzgIEwO/c59s2xLymwEQ6UTddeXQnBghnhbICyomffuTkRX5KyBrgWAD3Lwc2JuOYurQncS3CX/m7W4XsJZswyE7iVtNarcLNztS21LWYHTLN+LRtuC/95NH6EIi8UqA4XzvUCWXAAFE+Fr8DxmgWnENBU+JYSOHdFsZWc6yXwXMCv/ATu5T2gGcZr5OU7wAd4aE7DTXgJzss6AVFWhD/am6hJ4F/BghnhusEoJZgvAAAA///EKEpmAAAABklEQVQDAOF/AEoRBcrQAAAAAElFTkSuQmCC"); outline: none; }
</style>
</button>
<button id="hdubM" onclick="" class="pixelArt" style="position: absolute; left: 460px; top: 580px; width: 230px; height: 290px; z-index: 100250000; user-select: none; transform-origin: center center; overflow: hidden; color: black; background-color: transparent; font-size: 32px; opacity: 1; text-align: left; padding: 0px;">
<style>
.pixelArt           {
image-rendering     : crisp-edges;
image-rendering     :   pixelated;
                    }
#hdubM      {
position            :    absolute;
top                 :         0px;
left                :         0px;
background-color    : transparent;
background-size     :   100% 100%;
width               :        100%;
height              :        100%;
border              :         0px;
padding             :         0px;
margin              :         0px;
                    }

#hdubM               { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABE0lEQVR4AeyVsQ3CMBBFDRULIFFT0jFDViIMQVgpM9BRUiOxAB34nbjIdmzpUFykCOIn9v/np+MUhbX7fXZt/6kpsAIHyubenlwNwYIpcDZAuW+2vSuJHJVyfHJlDXBMwv355koiR6UcnxwWiuDvV+MelyP+SPjkiPWowBv45H4p3wguTsXLAs8O0zwWfRJ4GlhnaYlphifnTNv5wBkHMrXti+bTuW/mr+/SeXZcprHwtktP57y0xgRPD1n384AzhlCW7s2d8w8TqircAktros5Lr1PeJ2R6mDWe7vWOR6b7CM7PDucarsn0EOswC9dkWjfAD91VPMKcJAwuuRo8SpQl8GfXrNQkmCpYMAWuG4xagvkFAAD//6UO6LsAAAAGSURBVAMAkPkeSvN/VcQAAAAASUVORK5CYII="); outline: none; }
#hdubM:focus         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABE0lEQVR4AeyVsQ3CMBBFDRULIFFT0jFDViIMQVgpM9BRUiOxAB34nbjIdmzpUFykCOIn9v/np+MUhbX7fXZt/6kpsAIHyubenlwNwYIpcDZAuW+2vSuJHJVyfHJlDXBMwv355koiR6UcnxwWiuDvV+MelyP+SPjkiPWowBv45H4p3wguTsXLAs8O0zwWfRJ4GlhnaYlphifnTNv5wBkHMrXti+bTuW/mr+/SeXZcprHwtktP57y0xgRPD1n384AzhlCW7s2d8w8TqircAktros5Lr1PeJ2R6mDWe7vWOR6b7CM7PDucarsn0EOswC9dkWjfAD91VPMKcJAwuuRo8SpQl8GfXrNQkmCpYMAWuG4xagvkFAAD//6UO6LsAAAAGSURBVAMAkPkeSvN/VcQAAAAASUVORK5CYII="); outline: none; }
#hdubM:hover         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABEUlEQVR4AeyVsQ3CMBBFDSUVooaGDVglwzAEw2QVNqCBGqWiBb8TF50dWzqEixRB/MT+//x0nKKwDt/Pdt+9WwqswIGyGe59aCFYMAXOBij3V3iGmshRLccnV9YIxyQ8nq+hJnJUy/HJYaEEvgm7cLuc8CfCJ0esJwXRwCePS/kmcHEaXhZ4cZjuseiTwNPAukjLTDc8O+fazgfOOJCr7Vg0n85jMz99l86L43KNhbddfrrk5TUueH7Iu58HnDFYebp3d84/jFVTuAeW1ySd116nvE/I9DBrPN3rHY9M9wmcn23natdkeoi1zeyaTOtG+PbQiUdYkoTmUqrBo0RZAh8e/UpNgn8FC6bAdYPRSjA/AAAA//+/a6+wAAAABklEQVQDADdsBkpaAJY6AAAAAElFTkSuQmCC"); outline: none; }
#hdubM:active        { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABHElEQVR4AeyVsbHCMAyGrdepe+mp2IBVYBeGYBdYhQ2o6KGjBD4bhdjEhzhcpIBDUaRf+k6ny9l/4fH7ny2vLQ1shAMlOB23oYXBghnhBEDxl+sp1Awdq+nk0Y3Vw0kiztf7UDN0rKaTR4eFZXCVLhw2C/IvRl6lCyrva6w5g1uylf/BRzfpXot9CXwNvI/SiqQbXvS5wunAWQfmGvteNJ3J78N89P9NProu11o4EcvusVxZ44KXTd54GnDWMDTP9O7JVdItpJJ8U7gHVtZkk9eOU84TNGvmnZzF5smhWZzBVdLlO9ytvat01tNf0qYNvcqzrod3s1VsVkk7Vcl9FAcPlVxXSTElxorw83EnlkT41mDBjHALSLQymDcAAAD//3rCzaIAAAAGSURBVAMAcLoeSlfcJ2UAAAAASUVORK5CYII="); outline: none; }
</style>
</button>
<button id="hdubN" onclick="" class="pixelArt" style="position: absolute; left: 690px; top: 580px; width: 230px; height: 290px; z-index: 100250000; user-select: none; transform-origin: center center; overflow: hidden; color: black; background-color: transparent; font-size: 32px; opacity: 1; text-align: left; padding: 0px;">
<style>
.pixelArt           {
image-rendering     : crisp-edges;
image-rendering     :   pixelated;
                    }
#hdubN      {
position            :    absolute;
top                 :         0px;
left                :         0px;
background-color    : transparent;
background-size     :   100% 100%;
width               :        100%;
height              :        100%;
border              :         0px;
padding             :         0px;
margin              :         0px;
                    }

#hdubN               { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABCUlEQVR4AeSVQQ4BQRBFmyNYcRALaztLiVPYcgq2TiGxtLO2cBBWrsC8jppMG0UVHZlkxDfd/5c3leoM3fB49ZeHW06BjXCgbNbDc8ghWDAjnA1QrtPZJGgiR1qOTy6sEo5JuBn1giZypOX45LBQAt9t92F+vOLXhE+OWNcKCgOfvFjGdwKPTsaPFsCfD8syvRaMhTF4R+MeCzfgRha54Rao1HwFt3ZvhvNoS0fWqxluBVbrXHBv9y54tSvLujlwfqs9o2lO55Y5V2v+1zl/rtrTh/8up2OpYY2SzuXAOLRX+pTzHWoAoxK+OA3YB0JNFGiZ+NQIK8Ivq3FHTIJfBQtmhMsGI5dg3gEAAP//V731XQAAAAZJREFUAwA76xtKC8BImwAAAABJRU5ErkJggg=="); outline: none; }
#hdubN:focus         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABCUlEQVR4AeSVQQ4BQRBFmyNYcRALaztLiVPYcgq2TiGxtLO2cBBWrsC8jppMG0UVHZlkxDfd/5c3leoM3fB49ZeHW06BjXCgbNbDc8ghWDAjnA1QrtPZJGgiR1qOTy6sEo5JuBn1giZypOX45LBQAt9t92F+vOLXhE+OWNcKCgOfvFjGdwKPTsaPFsCfD8syvRaMhTF4R+MeCzfgRha54Rao1HwFt3ZvhvNoS0fWqxluBVbrXHBv9y54tSvLujlwfqs9o2lO55Y5V2v+1zl/rtrTh/8up2OpYY2SzuXAOLRX+pTzHWoAoxK+OA3YB0JNFGiZ+NQIK8Ivq3FHTIJfBQtmhMsGI5dg3gEAAP//V731XQAAAAZJREFUAwA76xtKC8BImwAAAABJRU5ErkJggg=="); outline: none; }
#hdubN:hover         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABAElEQVR4AeSVQQ6CQAxFq0tXhLUexGtwDc/jNbiGB9E1YeVWeRNLQKy2OjEkGL/M/F8fTSfoWh6vYlvdcgpsggNl055rySFYMBOcDVCuV2nEEjmycnxyZfVwTMLjvhRL5MjK8clhoRF8I6UcTg3+RPjkiPWkoDPwybtleo/gycn4sQD482F5preAsTCG6GjCY+EG3MijMNwD1Zqv4N7u3XAebe3Ie3XDvcBhXQge7T4EH3blWc8Hzm91ZDTz6dwz52HN/zrnz9V6+vDf5XSsNazRqHM9MA7tlT7lfIcawKiHF7uKvRBaosDK1KdGWQneXuqVmgS/ChbMBNcNRi7BvAMAAP//+P8digAAAAZJREFUAwCQCARK91S2+AAAAABJRU5ErkJggg=="); outline: none; }
#hdubN:active        { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABC0lEQVR4AeSVzQ2CQBCFd7zNTTzbiG1oGdZjGdqGjXhWbx413+IgCIuzSgwJJC/Lvjd8DMvfLDy3+XJ9H1JgIxwok8tpH4YQLJgRzgQo4+1+CSmRo1SOT26sCo5JuFstQkrkKJXjk8NCDbhKEbbHM35L+CpFUPlcYwc34GYONU4A/n6zPEs3gWVhGXKXJntZOAEn8igb7oFazVdwb/duOK+/deQd3XAvsF6XBc/tPgte78qzPx64Svpb3nUl4+m8q7s+73+d83NNvX34fTlXYDXso0bnKuUN43nukkp/zjEqBdyoCl4sN9FQKf/wKu2RApW2r/LyqDFWhF9PBzGT4FfBghnhNsEYSjAfAAAA///zUPvkAAAABklEQVQDANAgG0qXRPcDAAAAAElFTkSuQmCC"); outline: none; }
</style>
</button>
<button id="hdubO" onclick="" class="pixelArt" style="position: absolute; left: 920px; top: 580px; width: 230px; height: 290px; z-index: 100250000; user-select: none; transform-origin: center center; overflow: hidden; color: black; background-color: transparent; font-size: 32px; opacity: 1; text-align: left; padding: 0px;">
<style>
.pixelArt           {
image-rendering     : crisp-edges;
image-rendering     :   pixelated;
                    }
#hdubO      {
position            :    absolute;
top                 :         0px;
left                :         0px;
background-color    : transparent;
background-size     :   100% 100%;
width               :        100%;
height              :        100%;
border              :         0px;
padding             :         0px;
margin              :         0px;
                    }

#hdubO               { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABO0lEQVR4AezSO05DMRCFYcMq2A9KQ8s2aGl4VDwaWrZBSxOxH3YB+iwcWXNtxyhXqRLpxOOZc/44ls/T3+fi9utnTcFmOKjN++YjrSEszAy3AbVGXW2e00jRb19YO7hmFOjj3UsaiSfmyr4LFwItxt7Kw9uaN+HMQq1Aq8crE2cLOBNzNNo/vd4nUkfJyNb9Bbwe1jXo5/Yhkbqe9eppeA8w6h8P7s7c3eg0o5ksRvFMndwdu+sSUuuVfW+dgvfC+/onePOGpq4lvgIvQq9JrJpT8Mr/r/J48Nn32zu+t49R5tMnd8fumtQFMFqn4SCgpJ7RAu5v+Xsz4dojI1v3FvB6eGjdhDuBk9C+H+AhmehtwpmYSXAkHpKJ2sFvttdxlveCI2VT+CqsDP9+uzwz11xDWJgZXjYaawnzFwAA//8oGuFrAAAABklEQVQDAB9/GEr1pzMdAAAAAElFTkSuQmCC"); outline: none; }
#hdubO:focus         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABO0lEQVR4AezSO05DMRCFYcMq2A9KQ8s2aGl4VDwaWrZBSxOxH3YB+iwcWXNtxyhXqRLpxOOZc/44ls/T3+fi9utnTcFmOKjN++YjrSEszAy3AbVGXW2e00jRb19YO7hmFOjj3UsaiSfmyr4LFwItxt7Kw9uaN+HMQq1Aq8crE2cLOBNzNNo/vd4nUkfJyNb9Bbwe1jXo5/Yhkbqe9eppeA8w6h8P7s7c3eg0o5ksRvFMndwdu+sSUuuVfW+dgvfC+/onePOGpq4lvgIvQq9JrJpT8Mr/r/J48Nn32zu+t49R5tMnd8fumtQFMFqn4SCgpJ7RAu5v+Xsz4dojI1v3FvB6eGjdhDuBk9C+H+AhmehtwpmYSXAkHpKJ2sFvttdxlveCI2VT+CqsDP9+uzwz11xDWJgZXjYaawnzFwAA//8oGuFrAAAABklEQVQDAB9/GEr1pzMdAAAAAElFTkSuQmCC"); outline: none; }
#hdubO:hover         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABNUlEQVR4AezSMU5DMRCEYUNJFVHDpXIcEBWC4+RSUKNUtKDPiiNrn+04ylOqRJp4vTvzx7F8nw6fzdP2b03BZjiozf5rl9YQFmaG24Bao37TTxop+u0L6wjXjAJ9e/lII/HEXNl34UKgxdhbeXhb8yacWagVaPV4ZeJsAWdijkb798/XROooGdm6v4DXw7oGfUiPidT1rFdPw3uAUf96cHfm7kanGc1kMYpn6uTu2F2XkFqv7HvrFLwXPtW/wZs3NHUt8RV4EXpNYtWcglf+s8rrwWffb+/43j5GmU+f3B27a1IXwGidhoOAknpGC7i/5e/NhGuPjGzdW8Dr4aV1E+4ETkKnfoCHZKK3CWdiJsGReEgm6gjfPG/jLO8FR8qm8FVYGb7/3t2Za64hLMwMLxuNtYT5DwAA//8817Q1AAAABklEQVQDAC2sAkqQZ3KFAAAAAElFTkSuQmCC"); outline: none; }
#hdubO:active        { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABOUlEQVR4AeyVsU5DMQxFYzZvvL1fBX8DYkLwN/BV3cvGWHTycIkcp/hVUadWuk3sXJ9YVqreld/P/e7hOFNgKxwowWH/UWYIFswKJwDK6vV9PJRz8n5iY53gJL2Avjy9lXPC4+ssHsIpAmrG0YoHb3QewjFTFBVEObzU+LMOjgmzNxK/vj8XxN6LGmrbfAdvD9s9UJWlqCzDC1o/+zQc81ZdD87MmN3WDs1PLQyLU53bvK1IJTf3FNygW9cbPJxYaiz+FfAiyIXEJpmCN/5N2+vBVXLvd9S+/z2kO2fGzBqxH13Q5tNwioAi9hl1cJXLRuNHwuUdnOQshXCVtXu6+e8iPEhl6awhHJfK378OxSOprD5qvE7wZffoz2qssharxGs1uS9jVfjX/lM4JzlDsGBWuAUkZgnmDwAAAP//4qlHKAAAAAZJREFUAwBKWxhKNjAisQAAAABJRU5ErkJggg=="); outline: none; }
</style>
</button>
<button id="hdubP" onclick="" class="pixelArt" style="position: absolute; left: 0px; top: 870px; width: 230px; height: 290px; z-index: 100250000; user-select: none; transform-origin: center center; overflow: hidden; color: black; background-color: transparent; font-size: 32px; opacity: 1; text-align: left; padding: 0px;">
<style>
.pixelArt           {
image-rendering     : crisp-edges;
image-rendering     :   pixelated;
                    }
#hdubP      {
position            :    absolute;
top                 :         0px;
left                :         0px;
background-color    : transparent;
background-size     :   100% 100%;
width               :        100%;
height              :        100%;
border              :         0px;
padding             :         0px;
margin              :         0px;
                    }

#hdubP               { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABHElEQVR4AeyTsRHCMAxFDROkpGUVWIUVaMJRcaRhBVaBVWgpswHc86Gcojgm4lwBuftxJH89x0o8D69rsb08SgpshAMlOFdVKCFYMCOcACgjWtXLMEVh5BJWBxcf0H19DFOEF0mtHQfwa3MLh2ZnfclYXoAFkDUN4NagYxZFOsezXoRY5IJT5NmZG55bgB3o9nwEZ4Ep+jG47muuPe62AObDIQvmN+VvkrwLDhBJsR4tmDkXnAIroEi/sXhccCBWQJEA9eiCUwhIi9yY3PAxUCr/h6e6Er6oLXK8U/vkdDKfmkvlem2hEEDKKDnm8UmcG3twDoc9gakYXw4qcx1807YxR+E7RWPmJqwIv5/WM7wkSwgWzAiXgEQpwXwCAAD//0uzW7sAAAAGSURBVAMA0fUeStnNk/gAAAAASUVORK5CYII="); outline: none; }
#hdubP:focus         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABHElEQVR4AeyTsRHCMAxFDROkpGUVWIUVaMJRcaRhBVaBVWgpswHc86Gcojgm4lwBuftxJH89x0o8D69rsb08SgpshAMlOFdVKCFYMCOcACgjWtXLMEVh5BJWBxcf0H19DFOEF0mtHQfwa3MLh2ZnfclYXoAFkDUN4NagYxZFOsezXoRY5IJT5NmZG55bgB3o9nwEZ4Ep+jG47muuPe62AObDIQvmN+VvkrwLDhBJsR4tmDkXnAIroEi/sXhccCBWQJEA9eiCUwhIi9yY3PAxUCr/h6e6Er6oLXK8U/vkdDKfmkvlem2hEEDKKDnm8UmcG3twDoc9gakYXw4qcx1807YxR+E7RWPmJqwIv5/WM7wkSwgWzAiXgEQpwXwCAAD//0uzW7sAAAAGSURBVAMA0fUeStnNk/gAAAAASUVORK5CYII="); outline: none; }
#hdubP:hover         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABFklEQVR4AeyTPQ7CMAyFAyNTxQyX6nFATAiO00vBjDqxgr4IV67rhhp14kd6BDvPnxvTLNPrU23qx5wCm+FACdpLk+YQLJgZTgCUFd3TLU0RXk/C6uBiAnrYndIU4UVSa9cBfJXW6XjeW58bywPQAFnTAG4NOqYp0jl+6ybEohCcosjJwvBSA06gx/MRnAZT9GNwPdfSeMJjAcwfhyyY15S3SfIhOEAkxXq1YPZCcAqsgCL9xOIJwYFYAUUC1GsITiEgLXJjCsPHQF7+D/emkr5oLHK9vXNyO9n39rxcbywUAvCMkmMfn8SltQfnctgb6MX4SlDZ6+DVts45Ct8pGwtfwsrw9tos8JKcQ7BgZrgEJOYSzCcAAAD//1+FCMQAAAAGSURBVAMACA4HSqAAUMIAAAAASUVORK5CYII="); outline: none; }
#hdubP:active        { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABKUlEQVR4AeyVPY7CQAyFx9u52/Scavc2ICoEt4FT0UNHCfomOAyOE2VQKn6kx8Se58+JYZSfdP/8Lv6ucwpshgMlOB33aQ7BgpnhBEBZ0eV6SlOEN5KxOriZgK6X2zRFeJHV+rUHV2nSZrfyvjC2G6AB8qYe3BvKmKaozHFdNiE2VcEpUpn+ZNXwsQY8QTmel+A0mKIPg5dzHRtP9VgA88MhD+ZvqtJ06So4QNRVFxcezFYVnAIvoEjlccfmqYID8VJpkkofTIMqOAUqLUylXckNqRo+BIryX3g0lfRGY7HjHT0np5P9aC/KPY2FQgCR0XLs47N4bH2Cq7SvMH8KfawSn0jfqIM3i/+8p9KePJXhNRtHvoyV4efjQfCSnEOwYGa4BSTmEswbAAAA//8YCnTXAAAABklEQVQDAHdVHkpotYhBAAAAAElFTkSuQmCC"); outline: none; }
</style>
</button>
<button id="hdubQ" onclick="" class="pixelArt" style="position: absolute; left: 230px; top: 870px; width: 230px; height: 290px; z-index: 100250000; user-select: none; transform-origin: center center; overflow: hidden; color: black; background-color: transparent; font-size: 32px; opacity: 1; text-align: left; padding: 0px;">
<style>
.pixelArt           {
image-rendering     : crisp-edges;
image-rendering     :   pixelated;
                    }
#hdubQ      {
position            :    absolute;
top                 :         0px;
left                :         0px;
background-color    : transparent;
background-size     :   100% 100%;
width               :        100%;
height              :        100%;
border              :         0px;
padding             :         0px;
margin              :         0px;
                    }

#hdubQ               { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABWElEQVR4AeyVPW4CQQyFnZQpU1GnTpMyRarcIxdInVwCUXIB7kFNScMhqChpQd9oH/J6zPCjlaAA6Wk89vNns2jFs3Wf0d98N6TAFjhQLuv3DxtCsGAWOBegnFHbH7OWop+7WAc4SS8Bp5+v1pJ8vldxCqdBQBmPnfLREz0pPJquvVdwNmCbDPi72BjKavTQ62sV3Bd9DPRlZoaIfe1Y3IMzmQ2iGRhQ5YnJ6a6TXhi69+BKDnXeFs7X5zHEb0OOWsz7+20395tcGj82T5/YfT4W3kTeyHTlLnnR5gClrr95nISznYDEUkblpeLlUq0Hp4BBxdbJkFadWg9OIpNArcHUWM73V3AMGL2JmAGIOAo/fTFfwTFgpIH4HDGU3yV6UzgmDWBIFPWobMABPloto7/8pTEkimGV2SXEKvD1+PuJGslz9Pa/tMnXvBJ5+mHBLHBdSAwlmHsAAAD//17USrcAAAAGSURBVAMAhiMIShqLWLYAAAAASUVORK5CYII="); outline: none; }
#hdubQ:focus         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABWElEQVR4AeyVPW4CQQyFnZQpU1GnTpMyRarcIxdInVwCUXIB7kFNScMhqChpQd9oH/J6zPCjlaAA6Wk89vNns2jFs3Wf0d98N6TAFjhQLuv3DxtCsGAWOBegnFHbH7OWop+7WAc4SS8Bp5+v1pJ8vldxCqdBQBmPnfLREz0pPJquvVdwNmCbDPi72BjKavTQ62sV3Bd9DPRlZoaIfe1Y3IMzmQ2iGRhQ5YnJ6a6TXhi69+BKDnXeFs7X5zHEb0OOWsz7+20395tcGj82T5/YfT4W3kTeyHTlLnnR5gClrr95nISznYDEUkblpeLlUq0Hp4BBxdbJkFadWg9OIpNArcHUWM73V3AMGL2JmAGIOAo/fTFfwTFgpIH4HDGU3yV6UzgmDWBIFPWobMABPloto7/8pTEkimGV2SXEKvD1+PuJGslz9Pa/tMnXvBJ5+mHBLHBdSAwlmHsAAAD//17USrcAAAAGSURBVAMAhiMIShqLWLYAAAAASUVORK5CYII="); outline: none; }
#hdubQ:hover         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABUElEQVR4AeyVvY0CQQyFfRdehAhPRyHXxtZARh2UQBu0QSEQIyJS0Dfah7weM/xoJQhAehqP/fzZLFrxbf1n8tedxhTYAgfK5bBd2xiCBbPAuQDljDra3lqKfu5iXeAkvQRc/U+tJfl8r+IUToOAMl475aMnelJ4ND17r+BswDYZcLHZG8pq9NDraxXcF30M9Memhoh97Vo8gDOZDaIZGFDlicnprpNeGLoP4EqOdb4WztfnMcRvQ45azPv7azf3mzwafzZPn9h7PhbeRN7IdOU++dDmAKW+v3nchLOdgMRSRuWl4uVSbQCngEHF1smQVp3aAE4ik0CtwdRYzvdXcAwYvYmYAYg4Cj99MV/BMWCkgfgeMZTfJXpTOCYNYEgU9ahswAU+mXXRX/7SGBLFsMrsEmIV+GG3/qJG8h79zua23HWVyNMPC2aB60JiLME8AwAA//82U5PLAAAABklEQVQDAB4EFEq5CpzFAAAAAElFTkSuQmCC"); outline: none; }
#hdubQ:active        { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABVUlEQVR4AeyVu00DQRCGd8gm4wiRKYQ2TAtk1EEJlAFt0MjFmIzQ6Dvfb/Yxd8bWSXZgS79m5/XNeK2Vb9L4uV2tt0sK7AAHirPp39MSggVzgOMAxdb62W7SnOp6fLH2cIK5BHx7vEtzUl3eq3MIp0FAFU5Z1dFT14TwuuhUv4GzAdtEwJfPr4SiHD305rkGnifzM1C3Lrl1kwPyes4FnMlsQCKXwIq5xQPohaG6Aq7gUva88PpK9K3c4qtRHnvezdngVF03D2/uMq+Fl8iLDFceg0dtDlAa+2fNQTjbCchZiqj1gyvgbodfnaAM0XnKFvCpIoHYbKqGnFtXpBu4W7w9A1DRPToRmFQDJ+gWDyAXiaH8LnUuhFPkthvAVrXI14oG7OHd6qmuH/7S3HZ/bW5/lmFNcRYQa4B/9x9GjuB/dP/wnF77dSPi9MOCOcDlEFhKMH8BAAD//2udnfsAAAAGSURBVAMA4jIuSnD1coEAAAAASUVORK5CYII="); outline: none; }
</style>
</button>
<button id="hdubR" onclick="" class="pixelArt" style="position: absolute; left: 460px; top: 870px; width: 230px; height: 290px; z-index: 100250000; user-select: none; transform-origin: center center; overflow: hidden; color: black; background-color: transparent; font-size: 32px; opacity: 1; text-align: left; padding: 0px;">
<style>
.pixelArt           {
image-rendering     : crisp-edges;
image-rendering     :   pixelated;
                    }
#hdubR      {
position            :    absolute;
top                 :         0px;
left                :         0px;
background-color    : transparent;
background-size     :   100% 100%;
width               :        100%;
height              :        100%;
border              :         0px;
padding             :         0px;
margin              :         0px;
                    }

#hdubR               { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABJ0lEQVR4AeSTwQ3CMAxFAxP0iJA4sAqs0hW4MAAXVugqsAoHJMSxG0BfRFDrOpEtegBR6UPz7T47TjsPr2uxOz2mFNgIB8qiqaowhWDBjHAWQPnf7NfBqpC5EusNJw/oclUHq8jnuZwG8PPhEm7XJpc78mmiVGAAHz3dMyiKela8LRUwwyF5d+aC5wrkunfDKWDVH8G1V4+3iMOW43KNBTCHhyRIW5vhAFEfQsdI65o8M5xkKVlMxs1wOkQSQAHGJX3WZjjJbF8rQEyTC64BSt73w3Nzd3fumbsbXpqxjP0GXJv7oHM+BpLk9ljjE0fc40nhE0/+AJ4Oiw9FE3GkxZJHfASv2zZ6BHOKCd1PLo7fhUNixc7vx+0smQQ+FSyYEZ4WGFMJ5hMAAP//05JyfQAAAAZJREFUAwDGeS1KCEd7CgAAAABJRU5ErkJggg=="); outline: none; }
#hdubR:focus         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABJ0lEQVR4AeSTwQ3CMAxFAxP0iJA4sAqs0hW4MAAXVugqsAoHJMSxG0BfRFDrOpEtegBR6UPz7T47TjsPr2uxOz2mFNgIB8qiqaowhWDBjHAWQPnf7NfBqpC5EusNJw/oclUHq8jnuZwG8PPhEm7XJpc78mmiVGAAHz3dMyiKela8LRUwwyF5d+aC5wrkunfDKWDVH8G1V4+3iMOW43KNBTCHhyRIW5vhAFEfQsdI65o8M5xkKVlMxs1wOkQSQAHGJX3WZjjJbF8rQEyTC64BSt73w3Nzd3fumbsbXpqxjP0GXJv7oHM+BpLk9ljjE0fc40nhE0/+AJ4Oiw9FE3GkxZJHfASv2zZ6BHOKCd1PLo7fhUNixc7vx+0smQQ+FSyYEZ4WGFMJ5hMAAP//05JyfQAAAAZJREFUAwDGeS1KCEd7CgAAAABJRU5ErkJggg=="); outline: none; }
#hdubR:hover         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABH0lEQVR4AeSTMQ7CMAxFAyNTxYjopXoGjsUZeqkiRtSJFfoighrXiWzRAQTSp823++w47Ta8fs2xe6wpsBEOlMU49GENwYIZ4SyAcr2HW7CKfE2J9YaTBPTQnoJV5PNcSRl8F/bhOpxLuQufJmoFMvji6ZlBUTSz4m2tgBkOybszF7xUoNS9G04Bq/4Irr16vEUcthyXayyAOTwkQdraDAeI5hA6RlrX5JnhJEvJYjJuhtMhkgAKMC7pszbDSWb7WgFimlxwDVDzvh9emru7c8/c3fDajGXsN+Da3LPO+RhIkttjjU8ccY8nhU88+Rk8HRYfiibiSIslj/gC3rRd9AiWFBOmv1IcfwqHxIqdj5d+k0wCnwoWzAhPC4y1BPMJAAD//4HjYEAAAAAGSURBVAMAD5MUSqnzAkoAAAAASUVORK5CYII="); outline: none; }
#hdubR:active        { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABKUlEQVR4AeSTPQ7CMAyFYzZvdEVwKbgCx+IKcCkQK2yM0C8lqM1PcUQZEEiPNvbrZ8dtZu75my/X9ykF1sOBsric9m4KwYLp4SyAcr3dL84q/DkF1guOCehitXVW4ee5kgZwlcadj7uSN4nTxFiBATx5uhegKOqF/O1YATMckkrdzqrgpQKl7qvhFLDqj+C5T4+vSKVJplU1FsC8PJSQMgEzHCDqM+gYqaRd4zPDMceKi8V5M5wOUQygAOOK46zNcMwqXz6hFLGqqnMrNPgmgZfmXg1Xsc+9Gh62bLn+Bjw390HnHAZMuS0TJ4+4H/OE3ACu0r0sTmJOKo1Tee9J4M1y42MqHUAlvXpD+6eS5lS6WJt2geU7v54OEoIkPhUsmB4eFgSmEswHAAAA//9YPJTQAAAABklEQVQDAIoqLUq3fwxmAAAAAElFTkSuQmCC"); outline: none; }
</style>
</button>
<button id="hdubS" onclick="" class="pixelArt" style="position: absolute; left: 690px; top: 870px; width: 230px; height: 290px; z-index: 100250000; user-select: none; transform-origin: center center; overflow: hidden; color: black; background-color: transparent; font-size: 32px; opacity: 1; text-align: left; padding: 0px;">
<style>
.pixelArt           {
image-rendering     : crisp-edges;
image-rendering     :   pixelated;
                    }
#hdubS      {
position            :    absolute;
top                 :         0px;
left                :         0px;
background-color    : transparent;
background-size     :   100% 100%;
width               :        100%;
height              :        100%;
border              :         0px;
padding             :         0px;
margin              :         0px;
                    }

#hdubS               { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABVklEQVR4AazSsVHEMBBGYR0hIdEVQUIN9EFEC1RBC0T0QQ0kFHERIekxnwfd2OuVTmZ8M29sSf++XWvupvz9ji8f5z2hneSkFqf7h7IHXJyT3ILUM/LzVEqPmLeurovcZoT0+XBXesgg1lo35QpIhXrIQD7mUrmgghi2fjt/F3i/RipvFVVp1tieoea1m+QKb9/LNLlGEWcylc1yhSQZzub8Sz4X9N43yeu9ulv0xM5SuU92nwIRDSoaVGLOOpU7GKE28dQk1jTldXpfMCcK6jpr0JQr0iCikbMRVnKf14JQs1aDOP1CTirQwrkGoyzkvalM63xULLeQ29iTzXJX49pGhhiWE14Tx6sblptUA89RNsl70ji17EruHyHocBR5dTG/kgsIKoB1Dxn5LJPKBRVAcQ8Z+YyL/Pj1mZ0XxT2youqa5KfXx4OQzT3g4pzkdWFjLzh/AQAA///XtSqkAAAABklEQVQDACzPQEqgBU0eAAAAAElFTkSuQmCC"); outline: none; }
#hdubS:focus         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABVklEQVR4AazSsVHEMBBGYR0hIdEVQUIN9EFEC1RBC0T0QQ0kFHERIekxnwfd2OuVTmZ8M29sSf++XWvupvz9ji8f5z2hneSkFqf7h7IHXJyT3ILUM/LzVEqPmLeurovcZoT0+XBXesgg1lo35QpIhXrIQD7mUrmgghi2fjt/F3i/RipvFVVp1tieoea1m+QKb9/LNLlGEWcylc1yhSQZzub8Sz4X9N43yeu9ulv0xM5SuU92nwIRDSoaVGLOOpU7GKE28dQk1jTldXpfMCcK6jpr0JQr0iCikbMRVnKf14JQs1aDOP1CTirQwrkGoyzkvalM63xULLeQ29iTzXJX49pGhhiWE14Tx6sblptUA89RNsl70ji17EruHyHocBR5dTG/kgsIKoB1Dxn5LJPKBRVAcQ8Z+YyL/Pj1mZ0XxT2youqa5KfXx4OQzT3g4pzkdWFjLzh/AQAA///XtSqkAAAABklEQVQDACzPQEqgBU0eAAAAAElFTkSuQmCC"); outline: none; }
#hdubS:hover         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABTUlEQVR4AazSQU7DMBBGYZclq6pruFTPwLE4Qy8F66ortkVfhKtkMnYdlEpPie1/3kysvpS/3/HtfN8T2klOanH7upQ94OKc5BaknpGfci09Yt66uh5ymxHSj8Op9JBBrLVuyhWQCvWQgXzMpXJBBTFs/Xm/Fnh/RipvFVVp1tieoea1m+QKX8tpmlyjiDOZyma5QpIMZ3P+JZ8Leu+b5PVe3S16Ymep3Ce7T4GIBhUNKjFnncodjFCbeGoSa5ryOr0vmBMFdZ01aMoVaRDRyNkIK7nPa0GoWatBnH4hJxVo4VyDURby3lSmdT4qllvIbezJZrmrcW0jQwzLCZ+J49UNy02qgecom+Q9aZxadiX3jxB0OIq8uphfyQUEFcC6h4x8lknlggqguIeMfMZDfnw/Z+dFcY+sqLom+e37chCyuQdcnJO8LmzsBecvAAAA//+SuaIPAAAABklEQVQDAMrcQEpNcU7TAAAAAElFTkSuQmCC"); outline: none; }
#hdubS:active        { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABZ0lEQVR4AayTQXLDIAwAUW+61T3nVe0X+qx+oX1Vzk1vPTpZCB5bCAIZMrNjC6SVwuCXcP+9nt7XmaCNcqQEl/N3mAEunFFOgJSn5X+9hBY2nzi7NjmLFqSf8hZakAO2lrgqpwApSS3IAfJtnisnkQKbTPy1/gbg/RGuvFaUpV5j1hhqXzskp1BliZPTyKKykLIxLKdSZQkqJezteUq+F7Teh+T5XDlbaInZc+Uq6VxJsNAgQ4OMzSN25Wz0kJvwpImtqcpV0vT2RlhBjr0GVTlFKuWNoBl7PRRy/l4NhCrpH/FusdMf5EhJqMG+Fbbig1ylPhXHoXL8Alti9g5yFmYyLOdoOLaeIbrlCB+J7dF1y5mUBjx7GZK3pHZqcgu5Sv3GUODhickr5CyqpAYUEbcgR8W/oq4cmUr69CluoeKLcWzy5fRBXKCSmqj4z6LgtpBdUf53/pHbWmBxBrhwRnkOWJgFzisAAAD//4U+1usAAAAGSURBVAMAQRxjSlgvnsgAAAAASUVORK5CYII="); outline: none; }
</style>
</button>
<button id="hdubT" onclick="" class="pixelArt" style="position: absolute; left: 920px; top: 870px; width: 230px; height: 290px; z-index: 100250000; user-select: none; transform-origin: center center; overflow: hidden; color: black; background-color: transparent; font-size: 32px; opacity: 1; text-align: left; padding: 0px;">
<style>
.pixelArt           {
image-rendering     : crisp-edges;
image-rendering     :   pixelated;
                    }
#hdubT      {
position            :    absolute;
top                 :         0px;
left                :         0px;
background-color    : transparent;
background-size     :   100% 100%;
width               :        100%;
height              :        100%;
border              :         0px;
padding             :         0px;
margin              :         0px;
                    }

#hdubT               { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAAA8klEQVR4AeyVsQ3CMBBFDyZIiZAoWAVWyQo0DEDDClkFVqFAQpTZAPwszrLJWQqyCwpH+cr5392LdYnkpXyu1eHyqimwHg6UxdB1UkOwYHo4C6A8d8etlEjcpawAd56Hrje9lIiNwUIJHKOmsvDHfRBV7oWa52nVJPDr6RaAxMhqij1qEC9AxJpP4JgkEfEvogfFPRN4nCyNG9ycYBtLG4s5AdNsf8ufjYUjiyPP3JYzyVHjQvPOflCaaDa7IpMaaiMrhFl4qCgIsnBOFY6tOaLW2kOA9+M4ydM0R9+NyvLw53m/oACzhmDB9HBdYNQSzDcAAAD//0RIlFcAAAAGSURBVAMAldkSSlBZrBoAAAAASUVORK5CYII="); outline: none; }
#hdubT:focus         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAAA8klEQVR4AeyVsQ3CMBBFDyZIiZAoWAVWyQo0DEDDClkFVqFAQpTZAPwszrLJWQqyCwpH+cr5392LdYnkpXyu1eHyqimwHg6UxdB1UkOwYHo4C6A8d8etlEjcpawAd56Hrje9lIiNwUIJHKOmsvDHfRBV7oWa52nVJPDr6RaAxMhqij1qEC9AxJpP4JgkEfEvogfFPRN4nCyNG9ycYBtLG4s5AdNsf8ufjYUjiyPP3JYzyVHjQvPOflCaaDa7IpMaaiMrhFl4qCgIsnBOFY6tOaLW2kOA9+M4ydM0R9+NyvLw53m/oACzhmDB9HBdYNQSzDcAAAD//0RIlFcAAAAGSURBVAMAldkSSlBZrBoAAAAASUVORK5CYII="); outline: none; }
#hdubT:hover         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAAA50lEQVR4AeyVMQ7CMAxFDSNTxYjopXoGjsUZeqkiRtSJFfoiHCXUkYrigSFVv+p826+RWyl7+VzdeXh5CmyAA2UxT6N4CBbMAGcBlOdTHlIjGMqKcEygp/4iNYIBC2VwDE8V4ffpKqrSCzXP06rJ4Ac5RiAxsppSjxrECxCx5jM4JklE/IvoQWnPCp4ma+MGNyfYxtLGYk7ANNvf8mdj4cjiyDO3tZjkqFlC8y5+UJpoNrsSkxpqEyuGRXisqAiKcE4Vjq0totbaQ4R3/bDK07RF343KCvD5Nu4owPQQLJgBrgsML8F8AwAA//+fPO+DAAAABklEQVQDAC/U/DvNsQ5/AAAAAElFTkSuQmCC"); outline: none; }
#hdubT:active        { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAAA+ElEQVR4AeyVQQ6CMBBFO+5mJ1uDl9IreCyvoJeSuMWdS+QVW0poMYQuXNT46fR35kEGktmZ729fn7qcAmvhQNm0zc3kECyYFs4GKOu7a80WwXAsD8cEejhezBbBgIUmcIycSsKfj6txSt3QnbPGciZwlcoDVSqjUsVqJp7KkMcNkMpYM4FTpTIkE6+RyrxuBl8D/JVb4NEOlbaUtkQ7EDXL1/JnbWFkMfKij9WbnJHTh9F/8oVSRHG0KjDJITewfJiE+4wNQRKuMo48xteSVMbRFj6Lh1f1OfRtrDKMLpXl1SYHF8ey8FdzF84wcwgWTAt3G4xcgvkBAAD//99X5t4AAAAGSURBVAMA/koSSkMr2rEAAAAASUVORK5CYII="); outline: none; }
</style>
</button>
<button id="hdubU" onclick="" class="pixelArt" style="position: absolute; left: 0px; top: 1160px; width: 230px; height: 290px; z-index: 100250000; user-select: none; transform-origin: center center; overflow: hidden; color: black; background-color: transparent; font-size: 32px; opacity: 1; text-align: left; padding: 0px;">
<style>
.pixelArt           {
image-rendering     : crisp-edges;
image-rendering     :   pixelated;
                    }
#hdubU      {
position            :    absolute;
top                 :         0px;
left                :         0px;
background-color    : transparent;
background-size     :   100% 100%;
width               :        100%;
height              :        100%;
border              :         0px;
padding             :         0px;
margin              :         0px;
                    }

#hdubU               { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAAA80lEQVR4AeyVwQ3CMAxFA1MAEmMwATeOSGzACDAFjMAGSBy5MQFjIAFbQJ9VV2pjq6maYxC/jb/tl9aqlGmof7Pj45dTYAUOlOC8+oQcggVT4ARAuW93m+CJPPLy+OSV1cAxSS6W++CJPPLy+ORhoRb8dr2H9+uCHwmfPGIdFVQGPvlqKf8WXJyMlwI3h1nGUsZiTsA0y9dSxmJOwDSTvxY9ZThpWJu0jhnBOUk4UTp1EgJFEiRcInhCj1vCxryZFphwfXrvDbS5727CaWIDxAZDRA/9qIEfnnPiSBQPEQBlCfx7Wk/UJDFWsGAKXAOMXIL5BwAA//9NzPPuAAAABklEQVQDACAbDEo8n29DAAAAAElFTkSuQmCC"); outline: none; }
#hdubU:focus         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAAA80lEQVR4AeyVwQ3CMAxFA1MAEmMwATeOSGzACDAFjMAGSBy5MQFjIAFbQJ9VV2pjq6maYxC/jb/tl9aqlGmof7Pj45dTYAUOlOC8+oQcggVT4ARAuW93m+CJPPLy+OSV1cAxSS6W++CJPPLy+ORhoRb8dr2H9+uCHwmfPGIdFVQGPvlqKf8WXJyMlwI3h1nGUsZiTsA0y9dSxmJOwDSTvxY9ZThpWJu0jhnBOUk4UTp1EgJFEiRcInhCj1vCxryZFphwfXrvDbS5727CaWIDxAZDRA/9qIEfnnPiSBQPEQBlCfx7Wk/UJDFWsGAKXAOMXIL5BwAA//9NzPPuAAAABklEQVQDACAbDEo8n29DAAAAAElFTkSuQmCC"); outline: none; }
#hdubU:hover         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAAA50lEQVR4AeyVQQ6CQAxFq0tXxKWRS3EGj+UZuBTGpWHlVnmNJYFp4xBmOcYP09/2DTQkc5Tfr7l2n5ICq3CgBOPQSwnBgqlwAqDc3/KSSORRlMcnb6wZjkny0t4kEnkU5fHJw0IL+EnO8hzu+InwySPWScFk4JOflvpfwNUpeKlwd5h1LHUs7gRcs34tdSzuBFwz+2uxU4aThrVLW5kJnJOEE2VVpyFQpEHGJYFn9IQlbMybWYELt6eP3sCa/91dOE1sgNhgi+ihH83wpu2IE1G8RQCMpfDx0R/MJLFXsGAq3AKMUoL5BQAA//8lJDc5AAAABklEQVQDAG6Z9zt1r/Z/AAAAAElFTkSuQmCC"); outline: none; }
#hdubU:active        { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAAA6ElEQVR4AeyVQQ6CMBBFO+5mJ1uDl9IreCyvoJeSuMWdS8wrDgaYxka7LMmn9P/2FSYkswnva9sehpICG+FAmfTdJZQQLJgRzgQo43PoQ0rkKJXjkxtrgmMS7vankBI5SuX45LDQDK7ShPvtjL8SvkoTVL6vsc0zuJmlxgp3K1nLUsviVsA1699Sy+JWwDWz/xbrMnQanl3awlzBVdKdBihaMJLTFTy5MiPgYL7MlrpwlfHt6Zu28JfRhQNS+TRjDsmVSsP2qAnetMdoLG8q4yEqeSP7jRXhj+4qZhL8K1gwI9wmGKUE8wUAAP//jh+1AgAAAAZJREFUAwBAmgxK507p9wAAAABJRU5ErkJggg=="); outline: none; }
</style>
</button>
<button id="hdubV" onclick="" class="pixelArt" style="position: absolute; left: 230px; top: 1160px; width: 230px; height: 290px; z-index: 100250000; user-select: none; transform-origin: center center; overflow: hidden; color: black; background-color: transparent; font-size: 32px; opacity: 1; text-align: left; padding: 0px;">
<style>
.pixelArt           {
image-rendering     : crisp-edges;
image-rendering     :   pixelated;
                    }
#hdubV      {
position            :    absolute;
top                 :         0px;
left                :         0px;
background-color    : transparent;
background-size     :   100% 100%;
width               :        100%;
height              :        100%;
border              :         0px;
padding             :         0px;
margin              :         0px;
                    }

#hdubV               { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABEUlEQVR4AdyUMQ7CMAxFU47AxH1QF1auwMjKxsjGysgVWFkq7sPEFUpeRFCrxCSWPKAgPiTf9kvqRF24z2d1eIyWAhvgQJlc+puzECyYAc4EKP+b/uQkEUdSHJ94ZH3hmAR33dJJIo6kOD5xWGgGvw9Hdx1f+InwiSPGSYI38In7YfjO4MEx/GkITs/onbY71FA7rfuPtsRrxlVjPN2hNDbZea4lLGgCB5STGl7bEhZTwymqVRbOlaKPNRDyyM/lZuG5RDxNS8hXwSnQqEE4h8Rh/WoDcfKknAbbIj2qxhfbUvP2496TJy0owjkoDqwk8orw/bBNcigsKSnyRmSFnT/P6857DtNCsGAGeJxgWAnmGwAA///6pgxTAAAABklEQVQDADieEkqajfaHAAAAAElFTkSuQmCC"); outline: none; }
#hdubV:focus         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABEUlEQVR4AdyUMQ7CMAxFU47AxH1QF1auwMjKxsjGysgVWFkq7sPEFUpeRFCrxCSWPKAgPiTf9kvqRF24z2d1eIyWAhvgQJlc+puzECyYAc4EKP+b/uQkEUdSHJ94ZH3hmAR33dJJIo6kOD5xWGgGvw9Hdx1f+InwiSPGSYI38In7YfjO4MEx/GkITs/onbY71FA7rfuPtsRrxlVjPN2hNDbZea4lLGgCB5STGl7bEhZTwymqVRbOlaKPNRDyyM/lZuG5RDxNS8hXwSnQqEE4h8Rh/WoDcfKknAbbIj2qxhfbUvP2496TJy0owjkoDqwk8orw/bBNcigsKSnyRmSFnT/P6857DtNCsGAGeJxgWAnmGwAA///6pgxTAAAABklEQVQDADieEkqajfaHAAAAAElFTkSuQmCC"); outline: none; }
#hdubV:hover         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABCElEQVR4AdyUMQ7CMAxFXUamqjNcqmfgWJyhl4K56sRa8iKCWiWmseQBBfEh+bZfUifqST6f/jKungIb4UCZLI9JPAQLZoQzAcr/S2bRRBxpcXziifWFYxK8dYNoIo60OD5xWGgHP8sg93XGz4RPHDHOEoKBTzwM43cHj47jT0NwekbvrN2hhtpt3X+0JV0zrhrj7Q61scvOSy1hQRc4oJLM8NqWsJgZTlGtinCuFH2sgZBHfim3CC8l4llaQr4JToFFDcI5JA7rVxuIk6flNNgW7VEtvtqWmrcf9548bUEVzkFxYEci7xDeX8csh8IjZUXBSKy48+U5dcETTA/BghnhaYLhJZhvAAAA//8oivGhAAAABklEQVQDAB5+/DtRyUkNAAAAAElFTkSuQmCC"); outline: none; }
#hdubV:active        { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABB0lEQVR4AdyVQQ6CMBBFO+5mJ645lV7BY3kFPRVrcecSecUSCB1oYxcGk5/SP+2j/mn04L6fY33uSgqshwNl0jZ3V0KwYHo4E6CM7651lqgjq45PPbBGOCbFq5ycJerIquNTh4VmcJXK3bon/kL4KpVT2V4TNs/gwSw17giuYme6FlfoyXTNf8QSrhlXjefpCa3nIiePRcILi8ABxZQNT42El2XD2ZSqKFwl/TpaeXOAKJxCTDmRsD8LzoYc7RCust3UtWYS3w5j4Wv9KjOWlF8/7j3rrEOYcJWhoTRtTSqVxXYjvKovi0Uqw7+9ij0uNvVGYHn4q3lI7znMEoIF08PDBKOUYH4AAAD//0voLEIAAAAGSURBVAMARQsSSvgA9N0AAAAASUVORK5CYII="); outline: none; }
</style>
</button>
<button id="hdubW" onclick="" class="pixelArt" style="position: absolute; left: 460px; top: 1160px; width: 230px; height: 290px; z-index: 100250000; user-select: none; transform-origin: center center; overflow: hidden; color: black; background-color: transparent; font-size: 32px; opacity: 1; text-align: left; padding: 0px;">
<style>
.pixelArt           {
image-rendering     : crisp-edges;
image-rendering     :   pixelated;
                    }
#hdubW      {
position            :    absolute;
top                 :         0px;
left                :         0px;
background-color    : transparent;
background-size     :   100% 100%;
width               :        100%;
height              :        100%;
border              :         0px;
padding             :         0px;
margin              :         0px;
                    }

#hdubW               { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABCElEQVR4AezUzU0DQQyG4YET4o5EDbSRPqiCVBGqoI+0QQ1I3BE30DPCkXfiw6404rSRPo392X6z8v7ctr/f4/H8M1OwHQ4qeT++tBnCwuxwCajz7uHcKqllVT08PcG6wJmK92+tVVLTQ+Kqh6emhxbw789D+3pmL8VTC1fMizxOnlrkC3iYs84dXm5y01o8CVSSCvMK7m6767k3HjEn+QNn7jFjNntX8FzMcYblOPeM8Wr4OLgm3+Hllva1rF+Ll8FLMU7wqPLNjP6+83EjPf//tVRfPZfig0XiLJ6Z7InLK3fnPRVbZAYw6wJ/Or1mv2neojwcrA7/OB1uFJkzhIXZ4ZEwZgnzFwAA///IC1ggAAAABklEQVQDANk4AkpjeeNZAAAAAElFTkSuQmCC"); outline: none; }
#hdubW:focus         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABCElEQVR4AezUzU0DQQyG4YET4o5EDbSRPqiCVBGqoI+0QQ1I3BE30DPCkXfiw6404rSRPo392X6z8v7ctr/f4/H8M1OwHQ4qeT++tBnCwuxwCajz7uHcKqllVT08PcG6wJmK92+tVVLTQ+Kqh6emhxbw789D+3pmL8VTC1fMizxOnlrkC3iYs84dXm5y01o8CVSSCvMK7m6767k3HjEn+QNn7jFjNntX8FzMcYblOPeM8Wr4OLgm3+Hllva1rF+Ll8FLMU7wqPLNjP6+83EjPf//tVRfPZfig0XiLJ6Z7InLK3fnPRVbZAYw6wJ/Or1mv2neojwcrA7/OB1uFJkzhIXZ4ZEwZgnzFwAA///IC1ggAAAABklEQVQDANk4AkpjeeNZAAAAAElFTkSuQmCC"); outline: none; }
#hdubW:hover         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAAA/0lEQVR4AeyUPQ7CMAyFDWOnihku1QNwOA7QS8GMOnUFfRGuXlMPiRQxBekp9rP9Ubk/Z/v9xuv0aSmwCQ6UZHnO1kKwYCY4CVDO1d4WiZoq6sGjx1kbHJPi8DCLRI0eRBz14FGjB+3gg11svWPvhUfNXWI8z/3Eo+b5Du5mq7PDw01WrYUnAYWkwDzAudvcde31R4wT8Qec2sMMs+od4FrUWGEaa08eF8PzwZK8w8Mt9bWUr4WXgZcin8BDkc9M7ved5xtJ+f/XEn31uBQ+WIhYhceMesThlXPneSpqxAxA1QYfb5P6RnONdNhZCb685hNFzBaCBTPBPcFoJZhfAAAA//+vqEb2AAAABklEQVQDAAHF7Dvaeg1kAAAAAElFTkSuQmCC"); outline: none; }
#hdubW:active        { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABA0lEQVR4AeyUMQ7CMAxFYzYz0Z1Twc7h2OFU3csEY+kLJCTEQqkUMaXSV9xv5zWy3Gzc+9ntD3NLgfVwoLxM48W1ECyYHs4LUNbHPDlL5FJZNXjUBFaEY5Lcnp2zRI4aRGzV4JGjBmVwlcHdT9i58FSGaKrU1WXwuLtR0OFmI1e1hUlAJskwC7hKOQlhxFgRH2BNed8TRa6AY1pKYWls1QavGh42rFk73OxWb0t9W1TKH4nd/CiIOBWeyudKDrne89CJbP1/W6xbjyNxYSHiVHjsST1i8+Qqr2lhCmql8mNahv2Rj0WpDE6lXnHjEgSWP/ltvMriOcwWggXTw8MLRivBfAIAAP//Tz6LWwAAAAZJREFUAwAXHAJKyq+UUAAAAABJRU5ErkJggg=="); outline: none; }
</style>
</button>
<button id="hdubY" onclick="" class="pixelArt" style="position: absolute; left: 690px; top: 1160px; width: 230px; height: 290px; z-index: 100250000; user-select: none; transform-origin: center center; overflow: hidden; color: black; background-color: transparent; font-size: 32px; opacity: 1; text-align: left; padding: 0px;">
<style>
.pixelArt           {
image-rendering     : crisp-edges;
image-rendering     :   pixelated;
                    }
#hdubY      {
position            :    absolute;
top                 :         0px;
left                :         0px;
background-color    : transparent;
background-size     :   100% 100%;
width               :        100%;
height              :        100%;
border              :         0px;
padding             :         0px;
margin              :         0px;
                    }

#hdubY               { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABFUlEQVR4AeyUMQ7CMAxFA0dg4irMiIWVY8DKxsjGCsdgZamYuQoTV4C+qK4a1wkCopahiE/j/+2P7aodu+oz3V6fOYGtN8eU4Lg4uxzAC09vToAp1+Vi72JABzEdHl28anNIxNNs4mJABzEdHh0vEJhfip1b3x7wLcCjA86thJKARy+P/huYeybjT7fmjMV4egDZJzvlrHVqqG3y3Xbe/Odfz2bnjMeY2px1AM2TS43mTXOd9G3cjzljMu67rskh18pLdk4RxVYhHBo5nC0kza2CT7jB3NzWsJY/W0vs3S1t8hIjR2J97e+G8mjziKdAju5Y4rrzTbESLrhSnEKQXAXi5c3vh/kIHjIH8MLTm0sAkQt4vgAAAP//J5o8hgAAAAZJREFUAwAO2xJKOZwe0QAAAABJRU5ErkJggg=="); outline: none; }
#hdubY:focus         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABFUlEQVR4AeyUMQ7CMAxFA0dg4irMiIWVY8DKxsjGCsdgZamYuQoTV4C+qK4a1wkCopahiE/j/+2P7aodu+oz3V6fOYGtN8eU4Lg4uxzAC09vToAp1+Vi72JABzEdHl28anNIxNNs4mJABzEdHh0vEJhfip1b3x7wLcCjA86thJKARy+P/huYeybjT7fmjMV4egDZJzvlrHVqqG3y3Xbe/Odfz2bnjMeY2px1AM2TS43mTXOd9G3cjzljMu67rskh18pLdk4RxVYhHBo5nC0kza2CT7jB3NzWsJY/W0vs3S1t8hIjR2J97e+G8mjziKdAju5Y4rrzTbESLrhSnEKQXAXi5c3vh/kIHjIH8MLTm0sAkQt4vgAAAP//J5o8hgAAAAZJREFUAwAO2xJKOZwe0QAAAABJRU5ErkJggg=="); outline: none; }
#hdubY:hover         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABDklEQVR4AeyUQQ6CQAxFR5euCGs9iNfgGp7Ha3AND6Jrwsqt8iaUMKUzRp0AC4xfpv+337YE9q7/FMfqlRPYenNMCdp77XIALzy9OQGmXJ+ucTGgg5gOjy5egzkk4vVcuhjQQUyHR8cLBOYHV7rLrYGfAB4dcJ4kdAQ8enf038DcMxl/5jVnLMbTA8g+2SlnrVND7Zift/PxP/97NjtnPMbU5qwDaJ5cajRvmuukX+NlzBmTcT91TQ65Vl6yc4ootgrh0MjhbCFpbhV8w23m5ra2taxsLbF3t7TJS4wcifV1uRvKo80jngI5umOJh86LUyVccKU4hSC5D8TLm7ePegcPmQN44enNJYDIBTzfAAAA//8w/IIvAAAABklEQVQDAD6B/DtPY9LeAAAAAElFTkSuQmCC"); outline: none; }
#hdubY:active        { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABBElEQVR4AeyVTQ6CMBCFO+5mJ665iNfQY3gej6HX8CKsxZ1LzAcOgdpWExpwgclL2zfj1+nwt3Hv37Y8NDkFtoUDZVFXF5dDsGC2cBZAGZ9N7WIijmJxfOLG6uGYBM/7nYuJOIrF8YnDQiO4SuFOtzv+h/BVCqfyPcf+PIKbmWucF64SPrb1k54y909nbRv681Y+3HnqPFi5Srw1v7aEwoJwAjm0DFwl3Br/RKG7xHKSlaukN0iB2SAJJ2GKVniwe2tb/qwtsXe3lclLjBxb++NyF1Sle/x5zGNSKfyC+3VfeVEee3M4Uem++CrhcZhrc2O18Ed1FQKYOQQLZgu3BUYuwXwBAAD//9KjcBoAAAAGSURBVAMAP2wSSrEaaYAAAAAASUVORK5CYII="); outline: none; }
</style>
</button>
<button id="hdubZ" onclick="" class="pixelArt" style="position: absolute; left: 920px; top: 1160px; width: 230px; height: 290px; z-index: 100250000; user-select: none; transform-origin: center center; overflow: hidden; color: black; background-color: transparent; font-size: 32px; opacity: 1; text-align: left; padding: 0px;">
<style>
.pixelArt           {
image-rendering     : crisp-edges;
image-rendering     :   pixelated;
                    }
#hdubZ      {
position            :    absolute;
top                 :         0px;
left                :         0px;
background-color    : transparent;
background-size     :   100% 100%;
width               :        100%;
height              :        100%;
border              :         0px;
padding             :         0px;
margin              :         0px;
                    }

#hdubZ               { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABMklEQVR4AcSUQQ6CMBBFqysvYOLapTvPwJXEQ4hX4gzuXLo28QLuNI/4yRQotJUEk5+2M/8/BkXW7vfZlfVnToFt4EA53MuTm0OwYDZwDkBZN9vaIfYpIoPIiNXCKdLcn28OsU8RGUQGFvLgFCSMKVLOrkG4NeXul4U/LkdnFboLed6vorV4k9OQSSs1qU0FNvhsy4PTwGBFLVc9eA6Iu2SgbnYWeBeqczScPwfPvYJaQ1PTj4LngKPhGHM0OXlo6piLTcJDkLHvWplR+D9Tc4EgfAwcM/UonGaMGMLKZgYnxzz0TNsgHoTPipp8PbhtytRdLazbs2cPDlhBa8rde/BcSCi3DJzHLUVD07eTH6qr450sIPsU2RwsLtbAn1Wx4kBRPyj7FNkcLJgNXAcKcwnmFwAA//9RLqCZAAAABklEQVQDAFRtTEp4xwNvAAAAAElFTkSuQmCC"); outline: none; }
#hdubZ:focus         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABMklEQVR4AcSUQQ6CMBBFqysvYOLapTvPwJXEQ4hX4gzuXLo28QLuNI/4yRQotJUEk5+2M/8/BkXW7vfZlfVnToFt4EA53MuTm0OwYDZwDkBZN9vaIfYpIoPIiNXCKdLcn28OsU8RGUQGFvLgFCSMKVLOrkG4NeXul4U/LkdnFboLed6vorV4k9OQSSs1qU0FNvhsy4PTwGBFLVc9eA6Iu2SgbnYWeBeqczScPwfPvYJaQ1PTj4LngKPhGHM0OXlo6piLTcJDkLHvWplR+D9Tc4EgfAwcM/UonGaMGMLKZgYnxzz0TNsgHoTPipp8PbhtytRdLazbs2cPDlhBa8rde/BcSCi3DJzHLUVD07eTH6qr450sIPsU2RwsLtbAn1Wx4kBRPyj7FNkcLJgNXAcKcwnmFwAA//9RLqCZAAAABklEQVQDAFRtTEp4xwNvAAAAAElFTkSuQmCC"); outline: none; }
#hdubZ:hover         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABNklEQVR4AcSUsQ3CMBBFD0oqRIlIwwaskhmYgSEYJquwAQ3UKBUt6EVcdE5ixzaWgvRl++7/lwsyrOX32R7qT0mB7eBAObSPRkoIFswOzgEo61tegtiniAwio6weTpHm8XITxD5FZBAZWMiBU1BhTJHm7OqFW1Pufln4/XoSK99bqGcju97iTE5DTbpSU/UpzwafbTlwGhisqOVqBM8B8ZYMNMwWgQ+heo6G8+Pg3mtQV9/U9KPgOeBoOMYczU7umzrmYbNwHyT0XWsmCP9nah7ghYfAMVMH4TRjxBBWNjM5OeapO22DeBA+K2rqG8FtU03D1cKGPXt24IA1aE25eweeC/HlloFz3VI0NX0/+baqhf9kBbJPkc3B4mEdvH02Kw4U99VZEPsUkUFkYMHs4HqgUEowvwAAAP//tfTU1AAAAAZJREFUAwD4TjNK7dY4UgAAAABJRU5ErkJggg=="); outline: none; }
#hdubZ:active        { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAABR0lEQVR4AcSVQXLCMAxFre60a7YduukNepX2Cj1DD9G7lKtwA1bsYccS5jkoyCEOtskMzPyxJOs/K4wzeQmX3+vq67SkwEY4UJL97j8sIVgwI5wEKOvxtA+IuEZ4EB5jDXCKbH78bgIirhEehAcWSuAUTDTWyHx+zcJ9U2v8XPj27zN45Z7CelS6oSWZXKVLQBhUuqDSa3BlApUrmJYETkGlB6n0K7VW3cBbQPaEY+8i8DHU8mI4Lwf33oy25qZmvwjeAi6G09iiu5Pnpi457C48B5n7r80zC39kag7IwufAJVPPwtksEUN4ec/k5DRP3WlvpAfR50XN+m7gftOaxquHjfd8nsABm9E3tcYJvBWS8z0HznWr0dT0w+Td6jt+cQyo0n8sVMpW74PFYRF+2K2FhOLb+09AxDXCg/DAghnhllBYSjDPAAAA//9YNarzAAAABklEQVQDAIH2VEoaEIWMAAAAAElFTkSuQmCC"); outline: none; }
</style>
</button>


















</div>
</div>



<div id="folder41" class="button_ folder folder41image">` +
shelfMenuHTML.tab4.folder1.style +
shelfMenuHTML.tab4.folder1.HTML  +
`</div><div id="folder42" class="button_ folder folder42image">` +
shelfMenuHTML.tab4.folder2.style +
shelfMenuHTML.tab4.folder2.HTML  +
`</div></div>` +

`<div id="tab5Wrapper" class="tab">` +
`<div id="tab5folderSelectors" class="folderSelectors">` +
shelfMenuHTML.tab5.folderSelectors.style +
shelfMenuHTML.tab5.folderSelectors.HTML  +
`</div><div id="folder51" class="button_ folder folder51image">` +
shelfMenuHTML.tab5.folder1.style +
shelfMenuHTML.tab5.folder1.HTML  +
`</div><div id="folder52" class="button_ folder folder52image">` +
shelfMenuHTML.tab5.folder2.style +
shelfMenuHTML.tab5.folder2.HTML  +
`</div></div>` +

`<div id="tab6Wrapper" class="tab">` +
`<div id="tab6folderSelectors" class="folderSelectors">` +
shelfMenuHTML.tab6.folderSelectors.style +
shelfMenuHTML.tab6.folderSelectors.HTML  +
`</div><div id="folder61" class="button_ folder folder61image">` +
shelfMenuHTML.tab6.folder1.style +
shelfMenuHTML.tab6.folder1.HTML  +
`</div><div id="folder62" class="button_ folder folder62image">` +
shelfMenuHTML.tab6.folder2.style +
shelfMenuHTML.tab6.folder2.HTML  +
`</div></div>` +
`</div>` +
shelfMenuHTML.scaler +
`
<button id="menu_open" class="button_ button_open" title="Open a menu." style="display: none;"></button>`
;

/* INJECT THE ASSEMBLED HTML INTO THE ELEMENT */

var interfaceShelf = document.getElementById("interfaceShelf");
interfaceShelf.innerHTML = shelfAssembly;
