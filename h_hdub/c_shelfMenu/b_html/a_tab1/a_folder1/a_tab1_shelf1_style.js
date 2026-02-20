shelfMenuHTML.tab1.folder1.style = `
<style>


.manageZ {
position: absolute;
top:   354px;
left:    1px;
width:   9px;
height: 66px;
background: transparent;
border:  0px;
margin:  0px;
padding: 0px;
}

.manageZ:hover  { background-color: rgba(  0, 255,   0, 0.5); }
.manageZ:active { background-color: rgba(255,   0, 255, 0.5); }

.clearZ {
position: absolute;
top:   429px;
left:    2px;
width:   7px;
height: 26px;
background: transparent;
border:  0px;
margin:  0px;
padding: 0px;
}


.clearZ:hover  { background-color: rgba(  0, 255,   0, 0.5); }
.clearZ:active { background-color: rgba(255,   0, 255, 0.5); }


.zMove {
position: absolute;
top: 437px;
width:  18px;
height: 19px;
background: transparent;
border:  0px;
margin:  0px;
padding: 0px;
}

.zMove:hover  { background-color: rgba(  0, 255,   0, 0.5); }
.zMove:active { background-color: rgba(255,   0, 255, 0.5); }

.zHigh { left: 14px; }
.zLow  { left: 36px; }
.zLess { left: 58px; }
.zMore { left: 80px; }
.vFlow { left: 102px; width: 40px; }


.coinItemSelected {
border: 2px solid black;
outline-offset: -2px;
outline: 2px solid red;
box-shadow: 0px 0px 10px black;
z-index: 100;
}





.addItemList {
font-family: dckimPixelMono;
font-size: 12px;
border: 2px solid white;
border-radius: 2px;
width: 46px;
height: 21px;
user-select: none;
}





.coinItemContainer {
display: flex;
justify-content: left;
}

.coinItemList {
font-family: dckimPixelMono;
font-size: 10px;
border: 2px solid white;
background-color: lightgrey;
border-radius: 2px;
width: 116px;
text-align: left;
overflow: hidden;
user-select: none;
}

.coinItemList:hover {
background-color: lime;
}

.coinDelete {
font-family: dckimPixelMono;
font-size: 10px;
background-color: lightgrey;
color: white;
border: 2px solid white;
border-radius: 2px;
width: 22px;
}




.addSystem {
position: absolute;
border: none;
margin: none;
padding: none;
left: 19px;
top: 245px;
width: 127px;
height: 21px;
}






.topPad {
width: 128px;
height: 128px;
}

.bottomPad {
width: 128px;
height: 128px;
}






.phantomItemList {
font-family: dckimPixelMono;
font-size: 10px;
border: 1px solid grey;
color: grey;
background-color: lightgrey;
border-radius: 2px;
width: 127px;
text-align: left;
overflow: hidden;
user-select: none;
}










.phantomLair {
position: absolute;
border: none;
margin: none;
padding: none;
left: 19px;
top: 298px;
width: 128px;
height: 131px;
line-height: 0.5;
background: transparent;
overflow: auto;
}
.phantomLair {
scrollbar-width: none;
-ms-overflow-style: none;
}
.phantomLair::-webkit-scrollbar {
display: none;
}





.itemSystem {
position: absolute;
border: none;
margin: none;
padding: none;
left: 19px;
top: 43px;
width: 128px;
height: 198px;
line-height: 0.5;
background: transparent;
overflow: auto;
}
.itemSystem {
scrollbar-width: none;
-ms-overflow-style: none;
}
.itemSystem::-webkit-scrollbar {
display: none;
}




.sidebarOpener {
position: absolute;
border: none;
margin: none;
padding: none;
left: 0px;
top: 0px;
width: 25px;
height: 32px;
image-rendering: crisp-edges;
image-rendering: pixelated;
background: transparent;
background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/sidebar.png?v=20260118105805");
z-index: 500;
}

.sidebarOpener:focus           { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/sidebar_focus.png?v=20260118103919"); }
.sidebarOpener:hover           { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/sidebar_hover.png?v=20260118201116"); }
.sidebarOpener:active          { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/sidebar_active.png?v=20260118200746"); }

.sidebar {
position: absolute;
border: none;
margin: none;
padding: none;
left: 0px;
top: 36px;
width: 174px;
height: 463px;
image-rendering: crisp-edges;
image-rendering: pixelated;
background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/folder-1-sidebar.png?v=20260205121302");
}






.hidden { display: none; }
.button_xrayGrey                 { position: absolute; border: none; margin: none; padding: none; left:     15px; top:     70px; width:     52px; height:     15px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/xray-silver.png?v=20251102205813");        }
.button_xrayGrey:focus           { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/xray-silver_focus.png?v=20251102205813");  }
.button_xrayGrey:hover           { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/xray-silver_hover.gif?v=20251102205813");  }
.button_xrayGrey:active          { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/xray-silver_active.png?v=20251102205813"); }
.button_xrayMagenta              { position: absolute; border: none; margin: none; padding: none; left:     74px; top:     70px; width:     52px; height:     15px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/xray-magenta.png?v=20251102205813");        }
.button_xrayMagenta:focus        { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/xray-magenta_focus.png?v=20251102205813");  }
.button_xrayMagenta:hover        { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/xray-magenta_hover.gif?v=20251102205813");  }
.button_xrayMagenta:active       { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/xray-magenta_active.png?v=20251102205813"); }
.button_xrayCyan                 { position: absolute; border: none; margin: none; padding: none; left:    133px; top:     70px; width:     52px; height:     15px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/xray-cyan.png?v=20251102205813");        }
.button_xrayCyan:focus           { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/xray-cyan_focus.png?v=20251102205813");  }
.button_xrayCyan:hover           { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/xray-cyan_hover.gif?v=20251102205813");  }
.button_xrayCyan:active          { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/xray-cyan_active.png?v=20251102205813"); }






.input_partY                     { position: absolute; border: none; margin: none; padding: none; left:      9px; top:     90px; width:     89px; height:     23px; outline-offset: -4px; 
caret-color: rgb(16,28,82);
color: rgb(16,28,82);
text-shadow: 0px .5px 0px rgb(24, 117, 189);
}
.input_partY::selection      { background: rgb(24, 117, 189); color: white; }

.input_partX                     { position: absolute; border: none; margin: none; padding: none; left:    102px; top:     90px; width:     89px; height:     23px; outline-offset: -4px; 
caret-color: rgb(16,28,82);
color: rgb(16,28,82);
text-shadow: 0px .5px 0px rgb(24, 117, 189);
}
.input_partX::selection      { background: rgb(24, 117, 189); color: white; }

.input_partW                     { position: absolute; border: none; margin: none; padding: none; left:    102px; top:    120px; width:     89px; height:     23px; outline-offset: -4px; 
caret-color: rgb(16,28,82);
color: rgb(16,28,82);
text-shadow: 0px .5px 0px rgb(24, 117, 189);
}
.input_partW::selection      { background: rgb(24, 117, 189); color: white; }

.input_partH                     { position: absolute; border: none; margin: none; padding: none; left:      9px; top:    120px; width:     89px; height:     23px; outline-offset: -4px; 
caret-color: rgb(16,28,82);
color: rgb(16,28,82);
text-shadow: 0px .5px 0px rgb(24, 117, 189);
}
.input_partH::selection      { background: rgb(24, 117, 189); color: white; }







.button_cursorAuto               { position: absolute; border: none; margin: none; padding: none; left:     13px; top:    148px; width:     11px; height:     11px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/cursor-auto.png?v=20251102205813");        }
.button_cursorAuto:focus         { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/cursor-auto_focus.png?v=20251102205813");  }
.button_cursorAuto:hover         { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/cursor-auto_hover.png?v=20251102205813");  }
.button_cursorAuto:active        { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/cursor-auto_active.png?v=20251102205813"); }
.button_cursorXS                 { position: absolute; border: none; margin: none; padding: none; left:     29px; top:    148px; width:     22px; height:     11px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/cursor-xs.png?v=20251102205813");        }
.button_cursorXS:focus           { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/cursor-xs_focus.png?v=20251102205813");  }
.button_cursorXS:hover           { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/cursor-xs_hover.png?v=20251102205813");  }
.button_cursorXS:active          { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/cursor-xs_active.png?v=20251102205813"); }
.button_cursorS                  { position: absolute; border: none; margin: none; padding: none; left:     59px; top:    148px; width:     22px; height:     11px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/cursor-s.png?v=20251102205813");        }
.button_cursorS:focus            { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/cursor-s_focus.png?v=20251102205813");  }
.button_cursorS:hover            { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/cursor-s_hover.png?v=20251102205813");  }
.button_cursorS:active           { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/cursor-s_active.png?v=20251102205813"); }
.button_cursorM                  { position: absolute; border: none; margin: none; padding: none; left:     89px; top:    148px; width:     22px; height:     11px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/cursor-m.png?v=20251102205813");        }
.button_cursorM:focus            { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/cursor-m_focus.png?v=20251102205813");  }
.button_cursorM:hover            { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/cursor-m_hover.png?v=20251102205813");  }
.button_cursorM:active           { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/cursor-m_active.png?v=20251102205813"); }
.button_cursorL                  { position: absolute; border: none; margin: none; padding: none; left:    119px; top:    148px; width:     22px; height:     11px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/cursor-l.png?v=20251102205813");        }
.button_cursorL:focus            { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/cursor-l_focus.png?v=20251102205813");  }
.button_cursorL:hover            { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/cursor-l_hover.png?v=20251102205813");  }
.button_cursorL:active           { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/cursor-l_active.png?v=20251102205813"); }
.button_cursorXL                 { position: absolute; border: none; margin: none; padding: none; left:    149px; top:    148px; width:     22px; height:     11px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/cursor-xl.png?v=20251102205813");        }
.button_cursorXL:focus           { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/cursor-xl_focus.png?v=20251102205813");  }
.button_cursorXL:hover           { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/cursor-xl_hover.png?v=20251102205813");  }
.button_cursorXL:active          { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/cursor-xl_active.png?v=20251102205813"); }
.button_cursorNum                { position: absolute; border: none; margin: none; padding: none; left:    176px; top:    148px; width:     11px; height:     11px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/cursor-number.png?v=20251102205813");        }
.button_cursorNum:focus          { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/cursor-number_focus.png?v=20251102205813");  }
.button_cursorNum:hover          { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/cursor-number_hover.png?v=20251102205813");  }
.button_cursorNum:active         { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/cursor-number_active.png?v=20251102205813"); }









.input_partNom                   { position: absolute; border: none; margin: none; padding: none; left:     9px; top:    165px; width:    182px; height:     23px; padding: 0px; text-align: center; outline-offset: -4px; 
caret-color: rgb(16,28,82);
color: rgb(16,28,82);
text-shadow: 0px .5px 0px rgb(24, 117, 189);
}
.input_partNom::selection      { background: rgb(24, 117, 189); color: white; }








.button_partPrev                 { position: absolute; border: none; margin: none; padding: none; left:     19px; top:    186px; width:     40px; height:     21px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/folder-1-1-larr.gif?v=20251119162356");        }
.button_partPrev:focus           { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/folder-1-1-larr_focus.gif?v=20251119163205");  }
.button_partPrev:hover           { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/folder-1-1-larr_hover.gif?v=20251119163428");  }
.button_partPrev:active          { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/folder-1-1-larr_active.gif?v=20251119163156"); }

.button_showNames                { position: absolute; border: none; margin: none; padding: none; left:     64px; top:    185px; width:     72px; height:     25px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/showName.png?v=20251120092442");        }
.button_showNames:focus          { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/showName_focus.png?v=20260121092914");  }
.button_showNames:hover          { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/showName_hover.png?v=20260121092928");  }
.button_showNames:active         { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/showName_active.png?v=20260121092941"); }


.button_partNext                 { position: absolute; border: none; margin: none; padding: none; left:    141px; top:    186px; width:     40px; height:     21px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/folder-1-1-rarr.gif?v=20251119163218");        }
.button_partNext:focus           { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/folder-1-1-rarr_focus.gif?v=20251119163306");  }
.button_partNext:hover           { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/folder-1-1-rarr_hover.gif?v=20251119163241");  }
.button_partNext:active          { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/folder-1-1-rarr_active.gif?v=20251119163335"); }




.input_partText                  { position: absolute; border: none; margin: none; padding: 4px; left:      8px; top:    240px; width:    184px; height:    225px; font-size: 8px;
background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/notesBG.png?v=20260219161121"); z-index: 100;
caret-color: white;
color: rgb(115,121,115);
text-shadow: 0px .5px 0px rgb(  0, 161, 238);
}
.input_partText::selection      { background: rgb(115,121,115); color: rgb(  0, 161, 238); }



.input_partStyle                 { position: absolute; border: none; margin: none; padding: 4px; left:      10px; top:    244px; width:   1472px; height:    225px; font-size: 8px;
background: transparent;

transform-origin: top left;
transform: scale(0.125);

}
.input_partStyle::selection      { background: rgb(16,28,82); color: rgb(238, 234, 49); }



.input_partCode                  { position: absolute; border: none; margin: none; padding: 4px; left:      8px; top:    240px; width:    184px; height:    225px; font-size: 8px;
background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/codeBG.png?v=20251130172043"); z-index: 100; color: white;
caret-color: magenta;
color: rgb(180,133,205);
text-shadow: 0px .5px 0px rgb(139, 56, 0);
}
.input_partCode::selection      { background: rgb(180,133,205); color: rgb(139, 56, 0); }


.randomTipMarquee {
position: absolute;
border: none;
margin: none;
padding: none;
padding-top: 8px;
left:     61px;
top:    469px;
width:    131px;
height:     22px;
outline-offset: -4px; 
caret-color: rgb(16,28,82);
color: rgba(140,140,140, 0.15);
text-shadow: 0px .5px 0px rgba(24, 117, 189,0.15);
background-color: lightgrey;
font-size: 6px;
}



.input_pathEntry                 { display: none; position: absolute; border: none; margin: none; padding: none; left:     61px; top:    469px; width:    131px; height:     22px; outline-offset: -4px; 
caret-color: rgb(16,28,82);
color: rgb(16,28,82);
text-shadow: 0px .5px 0px rgb(24, 117, 189);
}
.input_pathEntry::selection      { background: rgb(16,28,82); color: rgb(24, 117, 189); }






.button_notesTab                 { position: absolute; border: none; margin: none; padding: none; left:     11px; top:    215px; width:     58px; height:     25px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/notes.png?v=20260219113323");        }
.button_notesTab:focus           { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/notes_focus.png?v=20260219113333");  }
.button_notesTab:hover           { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/notes_hover.png?v=20260219113337");  }
.button_notesTab:active          { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/notes_active.png?v=20260219113327"); }
.button_styleTab                 { position: absolute; border: none; margin: none; padding: none; left:     71px; top:    215px; width:     58px; height:     25px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/style.png?v=20251130170651");        }
.button_styleTab:focus           { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/style_focus.png?v=20251130170709");  }
.button_styleTab:hover           { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/style_hover.png?v=20251130170658");  }
.button_styleTab:active          { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/style_active.png?v=20251130170703"); }
.button_codeTab                  { position: absolute; border: none; margin: none; padding: none; left:    131px; top:    215px; width:     58px; height:     25px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/code.png?v=20251130171453");        }
.button_codeTab:focus            { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/code_focus.png?v=20251130171445");  }
.button_codeTab:hover            { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/code_hover.png?v=20251130171449");  }
.button_codeTab:active           { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/code_active.png?v=20251130171458"); }



.styleContainer {
position: absolute;
left: 0;
top: 256px;


}





.input_styleFG {
position: absolute;
left: 0px;
top: 16px;
width: 480px;
height: 256px;
}
.input_styleBG {
position: absolute;
left: 480px;
top: 16px;
width: 480px;
height: 256px;
}
.input_styleOL {
position: absolute;
left: 960px;
top: 16px;
width: 480px;
height: 256px;
}



.styleMask {
position: absolute;
left: 0px;
top: 15px;
width: 144px;
height: 26px;
transform-origin: top left;
transform: scale(10);
background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/a_folder1/styleMask.png?v=20260120104953");
pointer-events: none;
image-rendering: crisp-edges;
image-rendering: pixelated;

}



</style>
`;