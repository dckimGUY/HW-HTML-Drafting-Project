shelfMenuHTML.tab3.folder2.style = `
<style>
.input_frameNumber                 { position: absolute; border: none; margin: none; padding: none; left:     79px; top:    290px; width:    40px; height:     20px; outline-offset: -4px; color: black; text-align: left; padding: 0px; padding-left: 2px; padding-right: 2px; caret-color: red; text-align: center; font-size: 24px; z-index: 600; overflow: hidden; }

.input_animationTiming                 { position: absolute; border: none; margin: none; padding: none; left:     -28px; top:    320px; width:    256px; height:     256px; outline-offset: -4px; color: black; text-align: center; padding: 0px; padding-left: 2px; padding-right: 2px; caret-color: red; text-align: center; font-size: 64px; z-index: 800; pointer-events: none; user-select: none; overflow: hidden;


color: rgba(0,0,0,0.45);

text-shadow:
0px 2px 0px rgba(255,0,255,0.25),
2px 2px 0px rgba(255,255,0,0.25),
2px 0px 0px rgba(255,255,0,0.25);


}


.viewOverlay {
position: absolute;
border: none;
margin: none;
padding: none;
left: 2px;
top: 277px;
width: 196px;
height: 146px;
background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/viewOverlay.png?v=20260115234303");
pointer-events: none;
z-index: 500;
}

.animatorImage {
position: absolute;
border: none;
margin: none;
padding: none;
left: 21px;
top: 304px;
width: 158px;
height: 93px;
}



.button_animateClick                { position: absolute; border: none; margin: none; padding: none; left:     40px; top:    389px; width:     58px; height:     26px;
                                      background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/animateClick.png?v=20260115163503"); z-index: 600;       }
.button_animateClick:focus          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/animateClick_focus.png?v=20260114212803");  }
.button_animateClick:hover          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/animateClick_hover.png?v=20260115163540");  }
.button_animateClick:active         { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/animateClick_active.png?v=20260115163509"); }
.button_animateLoop                { position: absolute; border: none; margin: none; padding: none; left:    103px; top:    389px; width:     58px; height:     31px;
                                     background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/animateLoop.png?v=20260114212426"); z-index: 600;       }
.button_animateLoop:focus          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/animateLoop_focus.png?v=20260114212616");  }
.button_animateLoop:hover          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/animateLoop_hover.png?v=20260114212535");  }
.button_animateLoop:active         { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/animateLoop_active.png?v=20260114212606"); }
.button_fewerFrames                { position: absolute; border: none; margin: none; padding: none; left:     66px; top:    294px; width:     12px; height:     12px;
                                     background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/fewerFrames.png?v=20260114212119"); z-index: 600;       }
.button_fewerFrames:focus          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/fewerFrames_focus.png?v=20260114213024");  }
.button_fewerFrames:hover          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/fewerFrames_hover.png?v=20260114213006");  }
.button_fewerFrames:active         { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/fewerFrames_active.png?v=20260114213015"); }
.button_moreFrames                { position: absolute; border: none; margin: none; padding: none; left:    120px; top:    294px; width:     12px; height:     12px;
                                    background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/moreFrames.png?v=20260114212143"); z-index: 600;       }
.button_moreFrames:focus          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/moreFrames_focus.png?v=20260114212918");  }
.button_moreFrames:hover          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/moreFrames_hover.png?v=20260114212900");  }
.button_moreFrames:active         { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/moreFrames_active.png?v=20260114212910"); }









.button_btnQuick1                { position: absolute; border: none; margin: none; padding: none; left:     80px; top:     72px; width:     28px; height:     25px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/btnQuick1.png?v=20260113130614");        }
.button_btnQuick1:focus          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/btnQuick1_focus.png?v=20260113130649");  }
.button_btnQuick1:hover          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/btnQuick1_hover.png?v=20260115165416");  }
.button_btnQuick1:active         { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/btnQuick1_active.png?v=20260115165617"); }
.button_btnQuick2                { position: absolute; border: none; margin: none; padding: none; left:    109px; top:     72px; width:     27px; height:     25px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/btnQuick2.png?v=20260113130540");        }
.button_btnQuick2:focus          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/btnQuick2_focus.png?v=20260113130650");  }
.button_btnQuick2:hover          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/btnQuick2_hover.png?v=20260115165502");  }
.button_btnQuick2:active         { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/btnQuick2_active.png?v=20260115165452"); }
.button_btnQuick3                { position: absolute; border: none; margin: none; padding: none; left:    136px; top:     72px; width:     25px; height:     25px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/btnQuick3.png?v=20260113130541");        }
.button_btnQuick3:focus          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/btnQuick3_focus.png?v=20260113130651");  }
.button_btnQuick3:hover          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/btnQuick3_hover.png?v=20260115165521");  }
.button_btnQuick3:active         { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/btnQuick3_active.png?v=20260115165509"); }
.button_btnQuick4                { position: absolute; border: none; margin: none; padding: none; left:    161px; top:     73px; width:     24px; height:     23px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/btnQuick4.png?v=20260113130542");        }
.button_btnQuick4:focus          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/btnQuick4_focus.png?v=20260113130653");  }
.button_btnQuick4:hover          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/btnQuick4_hover.png?v=20260115165538");  }
.button_btnQuick4:active         { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/btnQuick4_active.png?v=20260115165530"); }

.button_btn6                     { position: absolute; border: none; margin: none; padding: none; left:      8px; top:    106px; width:     58px; height:     25px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/6btn.png?v=20260113130610");        }
.button_btn6:focus               { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/6btn_focus.png?v=20260113130646");  }
.button_btn6:hover               { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/6btn_hover.png?v=20260125224428");  }
.button_btn6:active              { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/6btn_active.png?v=20260125224453"); }
.button_btn4                     { position: absolute; border: none; margin: none; padding: none; left:     69px; top:    106px; width:     59px; height:     25px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/4btn.png?v=20260113130608");        }
.button_btn4:focus               { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/4btn_focus.png?v=20260113130644");  }
.button_btn4:hover               { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/4btn_hover.png?v=20260125224447");  }
.button_btn4:active              { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/4btn_active.png?v=20260125224443"); }
.button_btn2                     { position: absolute; border: none; margin: none; padding: none; left:    132px; top:    106px; width:     60px; height:     25px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/btn2.png?v=20260113130612");        }
.button_btn2:focus               { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/btn2_focus.png?v=20260113130648");  }
.button_btn2:hover               { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/btn2_hover.png?v=20260125224439");  }
.button_btn2:active              { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/btn2_active.png?v=20260125224434"); }

.button_img6                     { position: absolute; border: none; margin: none; padding: none; left:      8px; top:    146px; width:     54px; height:     35px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/6img.png?v=20260113130611");        }
.button_img6:focus               { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/6img_focus.png?v=20260113130647");  }
.button_img6:hover               { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/6img_hover.png?v=20260114125713");  }
.button_img6:active              { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/6img_active.png?v=20260114125708"); }
.button_img4                     { position: absolute; border: none; margin: none; padding: none; left:     72px; top:    146px; width:     56px; height:     35px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/4img.png?v=20260113130609");        }
.button_img4:focus               { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/4img_focus.png?v=20260113130645");  }
.button_img4:hover               { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/4img_hover.png?v=20260114125731");  }
.button_img4:active              { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/4img_active.png?v=20260114125727"); }
.button_img2                     { position: absolute; border: none; margin: none; padding: none; left:    137px; top:    146px; width:     55px; height:     35px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/2img.png?v=20260113130607");        }
.button_img2:focus               { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/2img_focus.png?v=20260113130643");  }
.button_img2:hover               { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/2img_hover.png?v=20260114125722");  }
.button_img2:active              { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/2img_active.png?v=20260114125717"); }





.button_imgQuick1                { position: absolute; border: none; margin: none; padding: none; left:     81px; top:    182px; width:     27px; height:     25px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/imgQuick1.png?v=20260113130543");        }
.button_imgQuick1:focus          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/imgQuick1_focus.png?v=20260113130654");  }
.button_imgQuick1:hover          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/imgQuick1_hover.png?v=20260115165554");  }
.button_imgQuick1:active         { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/imgQuick1_active.png?v=20260115165545"); }
.button_imgQuick2                { position: absolute; border: none; margin: none; padding: none; left:    108px; top:    182px; width:     27px; height:     25px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/imgQuick2.png?v=20260113130546");        }
.button_imgQuick2:focus          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/imgQuick2_focus.png?v=20260113130700");  }
.button_imgQuick2:hover          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/imgQuick2_hover.png?v=20260115165609");  }
.button_imgQuick2:active         { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/imgQuick2_active.png?v=20260115165601"); }
.button_imgQuick3                { position: absolute; border: none; margin: none; padding: none; left:    135px; top:    182px; width:     26px; height:     25px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/imgQuick3.png?v=20260113130544");        }
.button_imgQuick3:focus          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/imgQuick3_focus.png?v=20260113130655");  }
.button_imgQuick3:hover          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/imgQuick3_hover.png?v=20260114205343");  }
.button_imgQuick3:active         { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/imgQuick3_active.png?v=20260114205514"); }
.button_imgQuick4                { position: absolute; border: none; margin: none; padding: none; left:    161px; top:    182px; width:     26px; height:     25px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/imgQuick4.png?v=20260113130545");        }
.button_imgQuick4:focus          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/imgQuick4_focus.png?v=20260113130656");  }
.button_imgQuick4:hover          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/imgQuick4_hover.png?v=20260114205347");  }
.button_imgQuick4:active         { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/imgQuick4_active.png?v=20260114205518"); }






.button_spriteClick1             { position: absolute; border: none; margin: none; padding: none; left:     81px; top:    213px; width:     27px; height:     25px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/spriteClick1.png?v=20260113130552");        }
.button_spriteClick1:focus       { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/spriteClick1_focus.png?v=20260113130702");  }
.button_spriteClick1:hover       { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/spriteClick1_hover.png?v=20260114205352");  }
.button_spriteClick1:active      { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/spriteClick1_active.png?v=20260114205525"); }
.button_spriteClick2             { position: absolute; border: none; margin: none; padding: none; left:    108px; top:    213px; width:     27px; height:     25px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/spriteClick2.png?v=20260113130553");        }
.button_spriteClick2:focus       { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/spriteClick2_focus.png?v=20260113130704");  }
.button_spriteClick2:hover       { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/spriteClick2_hover.png?v=20260114205359");  }
.button_spriteClick2:active      { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/spriteClick2_active.png?v=20260114205529"); }
.button_spriteClick3             { position: absolute; border: none; margin: none; padding: none; left:    135px; top:    213px; width:     25px; height:     25px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/spriteClick3.png?v=20260113130601");        }
.button_spriteClick3:focus       { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/spriteClick3_focus.png?v=20260113130705");  }
.button_spriteClick3:hover       { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/spriteClick3_hover.png?v=20260114205404");  }
.button_spriteClick3:active      { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/spriteClick3_active.png?v=20260114205540"); }
.button_spriteClick4             { position: absolute; border: none; margin: none; padding: none; left:    161px; top:    213px; width:     28px; height:     25px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/spriteClick4.png?v=20260113130605");        }
.button_spriteClick4:focus       { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/spriteClick4_focus.png?v=20260113130635");  }
.button_spriteClick4:hover       { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/spriteClick4_hover.png?v=20260114205410");  }
.button_spriteClick4:active      { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/spriteClick4_active.png?v=20260114205546"); }

.button_spriteLoop1              { position: absolute; border: none; margin: none; padding: none; left:     81px; top:    244px; width:     28px; height:     25px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/spriteLoop1.png?v=20260113130606");        }
.button_spriteLoop1:focus        { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/spriteLoop1_focus.png?v=20260113130639");  }
.button_spriteLoop1:hover        { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/spriteLoop1_hover.png?v=20260114205237");  }
.button_spriteLoop1:active       { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/spriteLoop1_active.png?v=20260114205551"); }
.button_spriteLoop2              { position: absolute; border: none; margin: none; padding: none; left:    108px; top:    244px; width:     27px; height:     25px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/spriteLoop2.png?v=20260113130539");        }
.button_spriteLoop2:focus        { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/spriteLoop2_focus.png?v=20260113130641");  }
.button_spriteLoop2:hover        { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/spriteLoop2_hover.png?v=20260114205251");  }
.button_spriteLoop2:active       { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/spriteLoop2_active.png?v=20260114205555"); }
.button_spriteLoop3              { position: absolute; border: none; margin: none; padding: none; left:    135px; top:    244px; width:     27px; height:     25px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/spriteLoop3.png?v=20260113130537");        }
.button_spriteLoop3:focus        { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/spriteLoop3_focus.png?v=20260113130642");  }
.button_spriteLoop3:hover        { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/spriteLoop3_hover.png?v=20260114205258");  }
.button_spriteLoop3:active       { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/spriteLoop3_active.png?v=20260114205559"); }
.button_spriteLoop4              { position: absolute; border: none; margin: none; padding: none; left:    161px; top:    244px; width:     27px; height:     25px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/spriteLoop4.png?v=20260113130539");        }
.button_spriteLoop4:focus        { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/spriteLoop4_focus.png?v=20260113130643");  }
.button_spriteLoop4:hover        { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/spriteLoop4_hover.png?v=20260114205304");  }
.button_spriteLoop4:active       { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/b_folder2/spriteLoop4_active.png?v=20260114205604"); }



























</style>
`;

