shelfMenuHTML.tab3.folder1.style = `
<style>
.input_pos {
position: absolute;
border:  none;
margin:  none;
padding: none;
width:   26px;
height:  26px;
border-radius: 13px;
}
.offscreen {
position: absolute;
left:   0px;
top:    0px;
width:  0px;
height: 0px;
opacity:  0;
}
.input_buttonFace                { left:      0px; top:     56px; }
.input_buttonShadow              { left:     26px; top:     56px; }
.input_buttonLeft                { left:     52px; top:     56px; }
.input_buttonTop                 { left:     78px; top:     56px; }
.input_buttonRight               { left:    104px; top:     56px; }
.input_textRight                 { left:      0px; top:     82px; }
.input_textBottom                { left:     26px; top:     82px; }
.input_textFace                  { left:     52px; top:     82px; }
.input_textHover                 { left:     78px; top:     82px; }
.input_textActive                { left:    104px; top:     82px; }
.input_textFocus                 { left:    130px; top:     82px; }
.input_buttonBottom              { left:    130px; top:     56px; }
.buttonScale {
position: absolute;
top: 0px;
left: 0px;
}

.input_buttonTooltip             { position: absolute; border: none; margin: none; padding: none; left:      0px; top:    124px; width:    152px; height:     24px; resize: none; padding: 2px; border-radius: 2px; outline: 2px solid grey; text-align: center; }
.input_buttonTooltip:hover  { outline: 2px solid cyan;    }
.input_buttonTooltip:active { outline: 2px solid magenta; }
.input_buttonTooltip:focus  { outline: 2px solid lime;    }

.input_buttonLink             { position: absolute; border: none; margin: none; padding: none; left:      0px; top:    160px; width:    152px; height:     24px; resize: none; padding: 2px; border-radius: 2px; outline: 2px solid grey; text-align: center; }
.input_buttonLink:hover  { outline: 2px solid cyan;    }
.input_buttonLink:active { outline: 2px solid magenta; }
.input_buttonLink:focus  { outline: 2px solid lime;    }



.yourButtonIsHere {
position: absolute;
top: -16px;
left:  2px;
}

.buttonMakerContainer {
position: absolute;
top: 100px;
left: 22px;
}





.button_cycleColourLeft          { position: absolute; border: none; margin: none; padding: none; left:     20px; top:    295px; width:     78px; height:     23px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/cycleColourLeft.png?v=20251116122323");        }
.button_cycleColourLeft:focus    { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/cycleColourLeft_focus.png?v=20251116122629");  }
.button_cycleColourLeft:hover    { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/cycleColourLeft_hover.png?v=20251116122321");  }
.button_cycleColourLeft:active   { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/cycleColourLeft_active.png?v=20251116122539"); }
.button_cycleColoursRight        { position: absolute; border: none; margin: none; padding: none; left:    103px; top:    295px; width:     78px; height:     23px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/cycleColourRight.png?v=20251116123024");        }
.button_cycleColoursRight:focus  { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/cycleColourRight_focus.png?v=20251116122950");  }
.button_cycleColoursRight:hover  { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/cycleColourRight_hover.png?v=20251116123026");  }
.button_cycleColoursRight:active { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/cycleColourRight_active.png?v=20251116122728"); }
.button_navPoint7                { position: absolute; border: none; margin: none; padding: none; left:     20px; top:    322px; width:     49px; height:     49px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point7.png?v=20251116102505");        }
.button_navPoint7:focus          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point7_focus.png?v=20251116123532");  }
.button_navPoint7:hover          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point7_hover.png?v=20251116123602");  }
.button_navPoint7:active         { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point7_active.png?v=20251116123552"); }
.button_navPoint8                { position: absolute; border: none; margin: none; padding: none; left:     76px; top:    322px; width:     49px; height:     49px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point8.png?v=20251116102540");        }
.button_navPoint8:focus          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point8_focus.png?v=20251116123537");  }
.button_navPoint8:hover          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point8_hover.png?v=20251116123607");  }
.button_navPoint8:active         { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point8_active.png?v=20251116123557"); }
.button_navPoint9                { position: absolute; border: none; margin: none; padding: none; left:    132px; top:    322px; width:     49px; height:     49px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point9.png?v=20251116102612");        }
.button_navPoint9:focus          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point9_focus.png?v=20251116123620");  }
.button_navPoint9:hover          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point9_hover.png?v=20251116123634");  }
.button_navPoint9:active         { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point9_active.png?v=20251116123629"); }
.button_navPoint4                { position: absolute; border: none; margin: none; padding: none; left:     20px; top:    377px; width:     49px; height:     49px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point4.png?v=20251116102654");        }
.button_navPoint4:focus          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point4_focus.png?v=20251116123338");  }
.button_navPoint4:hover          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point4_hover.png?v=20251116123419");  }
.button_navPoint4:active         { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point4_active.png?v=20251116123356"); }
.button_navPoint5                { position: absolute; border: none; margin: none; padding: none; left:     76px; top:    377px; width:     49px; height:     49px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point5.png?v=20251116102733");        }
.button_navPoint5:focus          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point5_focus.png?v=20251116123442");  }
.button_navPoint5:hover          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point5_hover.png?v=20251116123508");  }
.button_navPoint5:active         { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point5_active.png?v=20251116123457"); }
.button_navPoint6                { position: absolute; border: none; margin: none; padding: none; left:    132px; top:    377px; width:     49px; height:     49px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point6.png?v=20251116102806");        }
.button_navPoint6:focus          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point6_focus.png?v=20251116123438");  }
.button_navPoint6:hover          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point6_hover.png?v=20251116123513");  }
.button_navPoint6:active         { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point6_active.png?v=20251116123502"); }
.button_navPoint1                { position: absolute; border: none; margin: none; padding: none; left:     20px; top:    432px; width:     49px; height:     49px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point1.png?v=20251116123141");        }
.button_navPoint1:focus          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point1_focus.png?v=20251116123209");  }
.button_navPoint1:hover          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point1_hover.png?v=20251116123151");  }
.button_navPoint1:active         { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point1_active.png?v=20251116123158"); }
.button_navPoint2                { position: absolute; border: none; margin: none; padding: none; left:     76px; top:    432px; width:     49px; height:     49px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point2.png?v=20251116102916");        }
.button_navPoint2:focus          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point2_focus.png?v=20251116123215");  }
.button_navPoint2:hover          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point2_hover.png?v=20251116123229");  }
.button_navPoint2:active         { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point2_active.png?v=20251116123224"); }
.button_navPoint3                { position: absolute; border: none; margin: none; padding: none; left:    132px; top:    432px; width:     49px; height:     49px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point3.png?v=20251116102948");        }
.button_navPoint3:focus          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point3_focus.png?v=20251116123343");  }
.button_navPoint3:hover          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point3_hover.png?v=20251116123414");  }
.button_navPoint3:active         { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point3_active.png?v=20251116123402"); }




















</style>
`;