shelfMenuHTML.tab3.folder1.style = `
<style>
.input_pos {
position: absolute;
border:  none;
margin:  none;
padding: none;
width:   26px;
height:  26px;
border-radius: 0px;
}
.offscreen {
position: absolute;
left:   0px;
top:    0px;
width:  0px;
height: 0px;
opacity:  0;
}








.button_gridLock                 { position: absolute; border: none; margin: none; padding: none; left:     19px; top:    241px; width:     77px; height:     49px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/gridLock.png?v=20260116052028");        }
.button_gridLock:focus           { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/gridLock_focus.png?v=20260116003054");  }
.button_gridLock:hover           { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/gridLock_hover.png?v=20260116052218");  }
.button_gridLock:active          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/gridLock_active.png?v=20260116052416"); }









.input_buttonFace                { left:     78px; top:     60px; }
.input_buttonShadow              { left:    104px; top:     60px; }
.input_buttonLeft                { left:    130px; top:     60px; }


.input_buttonTop                 { left:     78px; top:     86px; }
.input_buttonRight               { left:    104px; top:     86px; }
.input_buttonBottom              { left:    130px; top:     86px; }


.input_textRight                 { left:     78px; top:     112px; }
.input_textBottom                { left:    104px; top:     112px; }
.input_textFace                  { left:    130px; top:     112px; }


.input_textHover                 { left:     78px; top:     138px; }
.input_textActive                { left:    104px; top:     138px; }
.input_textFocus                 { left:    130px; top:     138px; }


.covering {
pointer-events: none;
position: absolute;
width: 84px;
height: 107px;
top: 158px;
left: 98px;
background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/covering.png?v=20260114204656");
}












.buttonScale {
position: absolute;
top: 0px;
left: 0px;
}





.yourButtonIsHere {
position: absolute;
top: -16px;
left:  2px;
z-index: 500;
}

.buttonMakerContainer {
position: absolute;
top: 100px;
left: 22px;
}








.button_cycleColourLeft          { display: none; position: absolute; border: none; margin: none; padding: none; left:     20px; top:    295px; width:     78px; height:     23px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/cycleColourLeft.png?v=20251116122323");        }
.button_cycleColourLeft:focus    { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/cycleColourLeft_focus.png?v=20251116122629");  }
.button_cycleColourLeft:hover    { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/cycleColourLeft_hover.png?v=20251116122321");  }
.button_cycleColourLeft:active   { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/cycleColourLeft_active.png?v=20251116122539"); }
.button_cycleColoursRight        { display: none; position: absolute; border: none; margin: none; padding: none; left:    103px; top:    295px; width:     78px; height:     23px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/cycleColourRight.png?v=20251116123024");        }
.button_cycleColoursRight:focus  { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/cycleColourRight_focus.png?v=20251116122950");  }
.button_cycleColoursRight:hover  { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/cycleColourRight_hover.png?v=20251116123026");  }
.button_cycleColoursRight:active { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/cycleColourRight_active.png?v=20251116122728"); }




.button_navPoint7                { position: absolute; border: none; margin: none; padding: none; left:     20px; top:    322px; width:     24px; height:     24px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point7.png?v=20260112160902");        }
.button_navPoint7:focus          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point7_focus.png?v=20251120135527");  }
.button_navPoint7:hover          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point7_hover.png?v=20260116054030");  }
.button_navPoint7:active         { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point7_active.png?v=20251120135443"); }
.button_navPoint8                { position: absolute; border: none; margin: none; padding: none; left:     47px; top:    322px; width:     24px; height:     24px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point8.png?v=20260112161825");        }
.button_navPoint8:focus          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point8_focus.png?v=20251120135529");  }
.button_navPoint8:hover          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point8_hover.png?v=20260116054659");  }
.button_navPoint8:active         { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point8_active.png?v=20251120135445"); }
.button_navPoint9                { position: absolute; border: none; margin: none; padding: none; left:     74px; top:    322px; width:     24px; height:     24px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point9.png?v=20260112160743");        }
.button_navPoint9:focus          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point9_focus.png?v=20251120135531");  }
.button_navPoint9:hover          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point9_hover.png?v=20260116054727");  }
.button_navPoint9:active         { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point9_active.png?v=20251120135447"); }
.button_navPoint4                { position: absolute; border: none; margin: none; padding: none; left:     20px; top:    349px; width:     24px; height:     24px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point4.png?v=20260112161221");        }
.button_navPoint4:focus          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point4_focus.png?v=20251120135518");  }
.button_navPoint4:hover          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point4_hover.png?v=20260116054342");  }
.button_navPoint4:active         { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point4_active.png?v=20251120135433"); }
.button_navPoint5                { position: absolute; border: none; margin: none; padding: none; left:     47px; top:    349px; width:     24px; height:     24px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point5.png?v=20260112162218");        }
.button_navPoint5:focus          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point5_focus.png?v=20251120135544");  }
.button_navPoint5:hover          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point5_hover.png?v=20260116054445");  }
.button_navPoint5:active         { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point5_active.png?v=20251120135436"); }
.button_navPoint6                { position: absolute; border: none; margin: none; padding: none; left:     74px; top:    349px; width:     24px; height:     24px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point6.png?v=20260112161403");        }
.button_navPoint6:focus          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point6_focus.png?v=20251120135524");  }
.button_navPoint6:hover          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point6_hover.png?v=20260116054615");  }
.button_navPoint6:active         { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point6_active.png?v=20251120135438"); }
.button_navPoint1                { position: absolute; border: none; margin: none; padding: none; left:     20px; top:    376px; width:     24px; height:     24px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point1.png?v=20260112160543");        }
.button_navPoint1:focus          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point1_focus.png?v=20251120135534");  }
.button_navPoint1:hover          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point1_hover.png?v=20260116054101");  }
.button_navPoint1:active         { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point1_active.png?v=20251120135426"); }
.button_navPoint2                { position: absolute; border: none; margin: none; padding: none; left:     47px; top:    376px; width:     24px; height:     24px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point2.png?v=20260112162005");        }
.button_navPoint2:focus          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point2_focus.png?v=20251120135512");  }
.button_navPoint2:hover          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point2_hover.png?v=20260116054223");  }
.button_navPoint2:active         { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point2_active.png?v=20251120135429"); }
.button_navPoint3                { position: absolute; border: none; margin: none; padding: none; left:     74px; top:    376px; width:     24px; height:     24px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point3.png?v=20260112160443");        }
.button_navPoint3:focus          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point3_focus.png?v=20251120135516");  }
.button_navPoint3:hover          { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point3_hover.png?v=20260116054250");  }
.button_navPoint3:active         { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/point3_active.png?v=20251120135431"); }


.button_navPoint7                { position: absolute; border: none; margin: none; padding: none; left:     18px; top:    160px; width:     24px; height:     24px; }
.button_navPoint8                { position: absolute; border: none; margin: none; padding: none; left:     45px; top:    160px; width:     24px; height:     24px; }
.button_navPoint9                { position: absolute; border: none; margin: none; padding: none; left:     72px; top:    160px; width:     24px; height:     24px; }

.button_navPoint4                { position: absolute; border: none; margin: none; padding: none; left:     18px; top:    186px; width:     24px; height:     24px; }
.button_navPoint5                { position: absolute; border: none; margin: none; padding: none; left:     45px; top:    186px; width:     24px; height:     24px; }
.button_navPoint6                { position: absolute; border: none; margin: none; padding: none; left:     72px; top:    186px; width:     24px; height:     24px; }

.button_navPoint1                { position: absolute; border: none; margin: none; padding: none; left:     18px; top:    213px; width:     24px; height:     24px; }
.button_navPoint2                { position: absolute; border: none; margin: none; padding: none; left:     45px; top:    213px; width:     24px; height:     24px; }
.button_navPoint3                { position: absolute; border: none; margin: none; padding: none; left:     72px; top:    213px; width:     24px; height:     24px; }

.button_cycleColourLeft          { position: absolute; border: none; margin: none; padding: none; left:     18px; top:    240px; width:     78px; height:     23px; }
.button_cycleColoursRight        { position: absolute; border: none; margin: none; padding: none; left:     18px; top:    266px; width:     78px; height:     23px; }






.button_readButtonBack           { position: absolute; border: none; margin: none; padding: none; left:     16px; top:     92px; width:     87px; height:     42px;
                                   background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/buttonRead.gif?v=20251116192347");        }
.button_readButtonBack:focus     { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/buttonRead_focus.png?v=20251116193025");  }
.button_readButtonBack:hover     { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/buttonRead_hover.png?v=20251117122238");  }
.button_readButtonBack:active    { background-image: url("h_hdub/c_shelfMenu/a_images/c_tab3/a_folder1/buttonRead_active.png?v=20251117122401"); }






#buttonWordList            { position: absolute; border: none; margin: none; padding: none; left:    102px; top:    295px; width:     79px; height:    124px; outline-offset: -4px;

background-color: white; font-size: 8.5px;
padding: 2px;
border-radius: 2px;
text-align: center;
}
#buttonWordList:focus      { background-colour: white; }

.button_popColours               { position: absolute; border: none; margin: none; padding: none; left:     18px; top:    295px; width:     78px; height:     36px; outline-offset: -4px;
                                   background-color: transparent; border-radius: 4px; }
.button_popColours:focus         { outline: 4px double white; }
.button_popColours:hover         { outline: 8px double lime; }
.button_popColours:active        { outline: 8px double magenta; }
.button_popButton                { position: absolute; border: none; margin: none; padding: none; left:     18px; top:    339px; width:     78px; height:     36px; outline-offset: -4px;
                                   background-color: rgba(127,255,127,0.75); outline: 4px double white; border-radius: 4px; }
.button_popButton:focus          { outline: 4px double white; }
.button_popButton:hover          { outline: 8px double lime; }
.button_popButton:active         { outline: 8px double magenta; }
.button_ringButton                { position: absolute; border: none; margin: none; padding: none; left:     18px; top:    383px; width:     78px; height:     36px; outline-offset: -4px;
                                   background-color: rgba(127,255,255,0.75); outline: 4px double white; border-radius: 4px; }
.button_ringButton:focus          { outline: 4px double white; }
.button_ringButton:hover          { outline: 8px double lime; }
.button_ringButton:active         { outline: 8px double magenta; }







.input_buttonTooltip             { position: absolute; border: none; margin: none; padding: none; left:      0px; top:    328px; width:    152px; height:     16px; resize: none; padding: 2px; border-radius: 2px; outline: 2px solid grey; text-align: center; }
.input_buttonTooltip:hover  { outline: 2px solid cyan;    }
.input_buttonTooltip:active { outline: 2px solid magenta; }
.input_buttonTooltip:focus  { outline: 2px solid lime;    }

.input_buttonLink             { position: absolute; border: none; margin: none; padding: none; left:      0px; top:    358px; width:    152px; height:     16px; resize: none; padding: 2px; border-radius: 2px; outline: 2px solid grey; text-align: center; }
.input_buttonLink:hover  { outline: 2px solid cyan;    }
.input_buttonLink:active { outline: 2px solid magenta; }
.input_buttonLink:focus  { outline: 2px solid lime;    }


</style>
`;
