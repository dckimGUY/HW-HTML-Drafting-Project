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
font-family      :   monospace;
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
                                background-image: url("h_hdub/c_shelfMenu/a_images/y_tabSelectors/tab1.gif");        }
.button_tab1:focus            { background-image: url("h_hdub/c_shelfMenu/a_images/y_tabSelectors/tab1_focus.gif");  }
.button_tab1:hover            { background-image: url("h_hdub/c_shelfMenu/a_images/y_tabSelectors/tab1_hover.gif");  }
.button_tab1:active           { background-image: url("h_hdub/c_shelfMenu/a_images/y_tabSelectors/tab1_active.gif"); }
.button_tab2                  { position: absolute; border: none; margin: none; padding: none; left:     37px; top:      0px; width:     30px; height:     32px;
                                background-image: url("h_hdub/c_shelfMenu/a_images/y_tabSelectors/tab2.gif");        }
.button_tab2:focus            { background-image: url("h_hdub/c_shelfMenu/a_images/y_tabSelectors/tab2_focus.gif");  }
.button_tab2:hover            { background-image: url("h_hdub/c_shelfMenu/a_images/y_tabSelectors/tab2_hover.gif");  }
.button_tab2:active           { background-image: url("h_hdub/c_shelfMenu/a_images/y_tabSelectors/tab2_active.gif"); }
.button_tab3                  { position: absolute; border: none; margin: none; padding: none; left:     69px; top:      0px; width:     30px; height:     32px;
                                background-image: url("h_hdub/c_shelfMenu/a_images/y_tabSelectors/tab3.gif");        }
.button_tab3:focus            { background-image: url("h_hdub/c_shelfMenu/a_images/y_tabSelectors/tab3_focus.gif");  }
.button_tab3:hover            { background-image: url("h_hdub/c_shelfMenu/a_images/y_tabSelectors/tab3_hover.gif");  }
.button_tab3:active           { background-image: url("h_hdub/c_shelfMenu/a_images/y_tabSelectors/tab3_active.gif"); }
.button_tab4                  { position: absolute; border: none; margin: none; padding: none; left:    101px; top:      0px; width:     30px; height:     32px;
                                background-image: url("h_hdub/c_shelfMenu/a_images/y_tabSelectors/tab4.gif");        }
.button_tab4:focus            { background-image: url("h_hdub/c_shelfMenu/a_images/y_tabSelectors/tab4_focus.gif");  }
.button_tab4:hover            { background-image: url("h_hdub/c_shelfMenu/a_images/y_tabSelectors/tab4_hover.gif");  }
.button_tab4:active           { background-image: url("h_hdub/c_shelfMenu/a_images/y_tabSelectors/tab4_active.gif"); }
.button_tab5                  { position: absolute; border: none; margin: none; padding: none; left:    133px; top:      0px; width:     30px; height:     32px;
                                background-image: url("h_hdub/c_shelfMenu/a_images/y_tabSelectors/tab5.gif");        }
.button_tab5:focus            { background-image: url("h_hdub/c_shelfMenu/a_images/y_tabSelectors/tab5_focus.gif");  }
.button_tab5:hover            { background-image: url("h_hdub/c_shelfMenu/a_images/y_tabSelectors/tab5_hover.gif");  }
.button_tab5:active           { background-image: url("h_hdub/c_shelfMenu/a_images/y_tabSelectors/tab5_active.gif"); }
.button_tab6                  { position: absolute; border: none; margin: none; padding: none; left:    165px; top:      0px; width:     30px; height:     32px;
                                background-image: url("h_hdub/c_shelfMenu/a_images/y_tabSelectors/tab6.gif");        }
.button_tab6:focus            { background-image: url("h_hdub/c_shelfMenu/a_images/y_tabSelectors/tab6_focus.gif");  }
.button_tab6:hover            { background-image: url("h_hdub/c_shelfMenu/a_images/y_tabSelectors/tab6_hover.gif");  }
.button_tab6:active           { background-image: url("h_hdub/c_shelfMenu/a_images/y_tabSelectors/tab6_active.gif"); }
</style>
`;