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
`</div><div id="folder11" class="button_ folder folder11image">` +
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
`</div><div id="folder41" class="button_ folder folder41image">` +
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
