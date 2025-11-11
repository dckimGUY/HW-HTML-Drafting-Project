shelfMenuHTML.tabSelectors.style = `
<style>
.button_         {
image-rendering  : crisp-edges;
image-rendering  :   pixelated;
background-color : transparent;
                 }
.button_:focus   {
outline: none;
                 }
.input_          {
position         :    absolute;
box-sizing       :  border-box;
font-size        :        16px;
border           :        none;
margin           :        none;
padding-right    :        16px;
resize           :        none;
background-color : transparent;
text-align       :       right;
color            :       black;
                 }
.input_:focus    {
outline: none;
background-color : rgba(255,255,128,0.25);
                 }
.textarea_       {
position         :    absolute;
box-sizing       :  border-box;
font-size        :        16px;
border           :        none;
margin           :        none;
padding          :        none;
resize           :        none;
background-color : transparent;
                 }
.textarea_:focus {
outline: none;
background-color : rgba(255,255,128,0.17);
                 }
.button_tab1                  { position: absolute; border: none; margin: none; padding: none; left:      5px; top:      0px; width:     30px; height:     32px;
                                background-image: url("h_hdub/c_shelfMenu/a_images/0_tabSelectors/tab1.gif?v=20251102205812");        }
.button_tab1:focus            { background-image: url("h_hdub/c_shelfMenu/a_images/0_tabSelectors/tab1_focus.gif?v=20251102205812");  }
.button_tab1:hover            { background-image: url("h_hdub/c_shelfMenu/a_images/0_tabSelectors/tab1_hover.gif?v=20251102205812");  }
.button_tab1:active           { background-image: url("h_hdub/c_shelfMenu/a_images/0_tabSelectors/tab1_active.gif?v=20251102205812"); }
.button_tab2                  { position: absolute; border: none; margin: none; padding: none; left:     37px; top:      0px; width:     30px; height:     32px;
                                background-image: url("h_hdub/c_shelfMenu/a_images/0_tabSelectors/tab2.gif?v=20251102205812");        }
.button_tab2:focus            { background-image: url("h_hdub/c_shelfMenu/a_images/0_tabSelectors/tab2_focus.gif?v=20251102205812");  }
.button_tab2:hover            { background-image: url("h_hdub/c_shelfMenu/a_images/0_tabSelectors/tab2_hover.gif?v=20251102205812");  }
.button_tab2:active           { background-image: url("h_hdub/c_shelfMenu/a_images/0_tabSelectors/tab2_active.gif?v=20251102205812"); }
.button_tab3                  { position: absolute; border: none; margin: none; padding: none; left:     69px; top:      0px; width:     30px; height:     32px;
                                background-image: url("h_hdub/c_shelfMenu/a_images/0_tabSelectors/tab3.gif?v=20251102205812");        }
.button_tab3:focus            { background-image: url("h_hdub/c_shelfMenu/a_images/0_tabSelectors/tab3_focus.gif?v=20251102205812");  }
.button_tab3:hover            { background-image: url("h_hdub/c_shelfMenu/a_images/0_tabSelectors/tab3_hover.gif?v=20251102205812");  }
.button_tab3:active           { background-image: url("h_hdub/c_shelfMenu/a_images/0_tabSelectors/tab3_active.gif?v=20251102205812"); }
.button_tab4                  { position: absolute; border: none; margin: none; padding: none; left:    101px; top:      0px; width:     30px; height:     32px;
                                background-image: url("h_hdub/c_shelfMenu/a_images/0_tabSelectors/tab4.gif?v=20251102205812");        }
.button_tab4:focus            { background-image: url("h_hdub/c_shelfMenu/a_images/0_tabSelectors/tab4_focus.gif?v=20251102205812");  }
.button_tab4:hover            { background-image: url("h_hdub/c_shelfMenu/a_images/0_tabSelectors/tab4_hover.gif?v=20251102205812");  }
.button_tab4:active           { background-image: url("h_hdub/c_shelfMenu/a_images/0_tabSelectors/tab4_active.gif?v=20251102205812"); }
.button_tab5                  { position: absolute; border: none; margin: none; padding: none; left:    133px; top:      0px; width:     30px; height:     32px;
                                background-image: url("h_hdub/c_shelfMenu/a_images/0_tabSelectors/tab5.gif?v=20251102205812");        }
.button_tab5:focus            { background-image: url("h_hdub/c_shelfMenu/a_images/0_tabSelectors/tab5_focus.gif?v=20251102205812");  }
.button_tab5:hover            { background-image: url("h_hdub/c_shelfMenu/a_images/0_tabSelectors/tab5_hover.gif?v=20251102205812");  }
.button_tab5:active           { background-image: url("h_hdub/c_shelfMenu/a_images/0_tabSelectors/tab5_active.gif?v=20251102205812"); }
.button_tab6                  { position: absolute; border: none; margin: none; padding: none; left:    165px; top:      0px; width:     30px; height:     32px;
                                background-image: url("h_hdub/c_shelfMenu/a_images/0_tabSelectors/tab6.gif?v=20251102205812");        }
.button_tab6:focus            { background-image: url("h_hdub/c_shelfMenu/a_images/0_tabSelectors/tab6_focus.gif?v=20251102205812");  }
.button_tab6:hover            { background-image: url("h_hdub/c_shelfMenu/a_images/0_tabSelectors/tab6_hover.gif?v=20251102205812");  }
.button_tab6:active           { background-image: url("h_hdub/c_shelfMenu/a_images/0_tabSelectors/tab6_active.gif?v=20251102205812"); }
.button_crop                  { position: absolute; border: none; margin: none; padding: none; left:    -2px; top:      486px; width:     16px; height:     16px;
                                background-image: url("h_hdub/c_shelfMenu/a_images/0_tabSelectors/crop.png?v=20251102205812");        }
.button_crop:focus            { background-image: url("h_hdub/c_shelfMenu/a_images/0_tabSelectors/crop_focus.png?v=20251102205812");  }
.button_crop:hover            { background-image: url("h_hdub/c_shelfMenu/a_images/0_tabSelectors/crop_hover.png?v=20251102205812");  }
.button_crop:active           { background-image: url("h_hdub/c_shelfMenu/a_images/0_tabSelectors/crop_active.png?v=20251102205812"); }
</style>
`;