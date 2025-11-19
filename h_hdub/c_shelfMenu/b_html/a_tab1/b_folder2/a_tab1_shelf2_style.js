shelfMenuHTML.tab1.folder2.style = `
<style>

.input_projectName                 { position: absolute; border: none; margin: none; padding: none; left:     14px; top:    74px; width:    172px; height:     29px; outline-offset: -4px; color: lime; text-align: left; padding: 0px; padding-left: 2px; padding-right: 2px; caret-color: red; text-align: center; }
.input_projectName:hover           { background-color: rgb(63,63,63);  }
.input_projectName:focus           { background-color: rgb(0,0,0); }
.input_projectName:focus:hover     { outline-offset: -1px; outline: 1px solid #DEFF1C; }
.input_projectName::selection      { background: rgba(90,0,0,1); color: #DEFF1C; }

.button_coin49592                { position: absolute; border: none; margin: none; padding: none; left:     11px; top:    105px; width:     61px; height:     27px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/b_folder2/advance-save.png?v=20251102205813");        }
.button_coin49592:focus          { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/b_folder2/advance-save_focus.png?v=20251117081217");  }
.button_coin49592:hover          { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/b_folder2/advance-save_hover.png?v=20251117081203");  }
.button_coin49592:active         { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/b_folder2/advance-save_active.png?v=20251117081210"); }
.button_coin54398                { position: absolute; border: none; margin: none; padding: none; left:     75px; top:    105px; width:    114px; height:     27px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/b_folder2/project-save.png?v=20251102205813");        }
.button_coin54398:focus          { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/b_folder2/project-save_focus.png?v=20251102205813");  }
.button_coin54398:hover          { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/b_folder2/project-save_hover.png?v=20251102205813");  }
.button_coin54398:active         { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/b_folder2/project-save_active.png?v=20251102205813"); }

.button_coin77155                { position: absolute; border: none; margin: none; padding: none; left:     11px; top:    134px; width:     61px; height:     27px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/b_folder2/save.png?v=20251102205813");        }
.button_coin77155:focus          { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/b_folder2/save_focus.png?v=20251119061127");  }
.button_coin77155:hover          { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/b_folder2/save_hover.png?v=20251119061022");  }
.button_coin77155:active         { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/b_folder2/save_active.png?v=20251119061052"); }
.button_coin59760                { position: absolute; border: none; margin: none; padding: none; left:     75px; top:    134px; width:     42px; height:     27px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/b_folder2/cycle-left.png?v=20251102205813");        }
.button_coin59760:focus          { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/b_folder2/cycle-left_focus.png?v=20251102205813");  }
.button_coin59760:hover          { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/b_folder2/cycle-left_hover.png?v=20251102205813");  }
.button_coin59760:active         { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/b_folder2/cycle-left_active.png?v=20251102205813"); }

.button_coin64291                { position: absolute; border: none; margin: none; padding: none; left:    120px; top:    134px; width:     42px; height:     27px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/b_folder2/cycle-right.png?v=20251102205813");        }
.button_coin64291:focus          { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/b_folder2/cycle-right_focus.png?v=20251102205813");  }
.button_coin64291:hover          { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/b_folder2/cycle-right_hover.png?v=20251102205813");  }
.button_coin64291:active         { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/b_folder2/cycle-right_active.png?v=20251102205813"); }
.button_coin70038                { position: absolute; border: none; margin: none; padding: none; left:    165px; top:    134px; width:     24px; height:     27px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/b_folder2/copy-level.png?v=20251102205813");        }
.button_coin70038:focus          { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/b_folder2/copy-level_focus.png?v=20251102205813");  }
.button_coin70038:hover          { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/b_folder2/copy-level_hover.png?v=20251102205813");  }
.button_coin70038:active         { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/b_folder2/copy-level_active.png?v=20251102205813"); }

.input_coin77671                 { position: absolute; border: none; margin: none; padding: none; left:     14px; top:     163px; width:    172px; height:     29px;
outline-offset: -4px;
color: lime;
padding: 0px;
padding-left: 2px;
padding-right: 2px;
caret-color: red;
text-align: center;
text-shadow: 0px .5px 0px #FF00FF, .5px .5px 0px #5A0000, .5px 0px 0px #5A0000;
}



.input_coin77671:hover           { background-color: rgb(63,63,63);  }
.input_coin77671:focus           { background-color: rgb(0,0,0); }
.input_coin77671:focus:hover     { outline-offset: -1px; outline: 1px solid #DEFF1C; }
.input_coin77671::selection      { background: rgba(90,0,0,1); color: #DEFF1C; }

.input_levelNotes                { position: absolute; border: none; margin: none; padding: none; left:      5px; top:    195px; width:    190px; height:    69px; }
.input_levelNotes                { z-index: 100; background-position: bottom left; background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/b_folder2/levelNotes.png?v=20251119082419"); }
.input_levelNotes                {
font-family: dckimPixelMono;
outline-offset: -4px;
padding: 11px;
color: lime;
caret-color: red;
text-shadow: 0px .5px 0px #FF00FF, .5px .5px 0px #5A0000, .5px 0px 0px #5A0000;
}
.input_levelNotes:hover           { background-color: rgb(63,63,63);  }
.input_levelNotes:focus           { background-color: rgb(0,0,0); }
.input_levelNotes::selection      { background: rgba(90,0,0,1); color: #DEFF1C; }




.button_setLayer1                { position: absolute; border: none; margin: none; padding: none; left:      7px; top:    266px; width:     34px; height:     42px; }
.button_setLayer2                { position: absolute; border: none; margin: none; padding: none; left:     45px; top:    266px; width:     34px; height:     42px; }
.button_setLayer3                { position: absolute; border: none; margin: none; padding: none; left:     83px; top:    266px; width:     34px; height:     42px; }
.button_setLayer4                { position: absolute; border: none; margin: none; padding: none; left:    121px; top:    266px; width:     34px; height:     42px; }
.button_setLayer5                { position: absolute; border: none; margin: none; padding: none; left:    159px; top:    266px; width:     34px; height:     42px; }

.button_setLayer6                { position: absolute; border: none; margin: none; padding: none; left:      7px; top:    312px; width:     34px; height:     42px; }
.button_setLayer7                { position: absolute; border: none; margin: none; padding: none; left:     45px; top:    312px; width:     34px; height:     42px; }
.button_setLayer8                { position: absolute; border: none; margin: none; padding: none; left:     83px; top:    312px; width:     34px; height:     42px; }
.button_setLayer9                { position: absolute; border: none; margin: none; padding: none; left:    121px; top:    312px; width:     34px; height:     42px; }
.button_setLayer10               { position: absolute; border: none; margin: none; padding: none; left:    159px; top:    312px; width:     34px; height:     42px; }

.button_setLayer11               { position: absolute; border: none; margin: none; padding: none; left:      7px; top:    358px; width:     34px; height:     42px; }
.button_setLayer12               { position: absolute; border: none; margin: none; padding: none; left:     45px; top:    358px; width:     34px; height:     42px; }
.button_setLayer13               { position: absolute; border: none; margin: none; padding: none; left:     83px; top:    358px; width:     34px; height:     42px; }
.button_setLayer14               { position: absolute; border: none; margin: none; padding: none; left:    121px; top:    358px; width:     34px; height:     42px; }
.button_setLayer15               { position: absolute; border: none; margin: none; padding: none; left:    159px; top:    358px; width:     34px; height:     42px; }

.button_setLayer16               { position: absolute; border: none; margin: none; padding: none; left:      7px; top:    404px; width:     34px; height:     42px; }
.button_setLayer17               { position: absolute; border: none; margin: none; padding: none; left:     45px; top:    404px; width:     34px; height:     42px; }
.button_setLayer18               { position: absolute; border: none; margin: none; padding: none; left:     83px; top:    404px; width:     34px; height:     42px; }
.button_setLayer19               { position: absolute; border: none; margin: none; padding: none; left:    121px; top:    404px; width:     34px; height:     42px; }
.button_setLayer20               { position: absolute; border: none; margin: none; padding: none; left:    159px; top:    404px; width:     34px; height:     42px; }

.button_setLayer21               { position: absolute; border: none; margin: none; padding: none; left:      7px; top:    450px; width:     34px; height:     42px; }
.button_setLayer22               { position: absolute; border: none; margin: none; padding: none; left:     45px; top:    450px; width:     34px; height:     42px; }
.button_setLayer23               { position: absolute; border: none; margin: none; padding: none; left:     83px; top:    450px; width:     34px; height:     42px; }
.button_setLayer24               { position: absolute; border: none; margin: none; padding: none; left:    121px; top:    450px; width:     34px; height:     42px; }
.button_setLayer25               { position: absolute; border: none; margin: none; padding: none; left:    159px; top:    450px; width:     34px; height:     42px; }

.button_setLevel                { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/b_folder2/set-level.png?v=20251102205813");        }
.button_setLevel:focus          { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/b_folder2/set-level_focus.png?v=20251102205813");  }
.button_setLevel:hover          { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/b_folder2/set-level_hover.gif?v=20251102205813"); border-radius: 4px; outline-offset: -5px; outline: 3px double lime; }
.button_setLevel:active         { background-image: url("h_hdub/c_shelfMenu/a_images/a_tab1/b_folder2/set-level_active.png?v=20251102205813"); }



</style>
`;

