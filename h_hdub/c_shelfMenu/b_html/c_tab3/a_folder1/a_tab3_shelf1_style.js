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

.input_buttonTooltip             { position: absolute; border: none; margin: none; padding: none; left:      0px; top:    124px; width:    152px; height:     46px; resize: none; padding: 2px; border-radius: 2px; outline: 2px solid grey; }
.input_buttonTooltip:hover  { outline: 2px solid cyan;    }
.input_buttonTooltip:active { outline: 2px solid magenta; }
.input_buttonTooltip:focus  { outline: 2px solid lime;    }

.input_buttonLink             { position: absolute; border: none; margin: none; padding: none; left:      0px; top:    190px; width:    152px; height:     32px; resize: none; padding: 2px; border-radius: 2px; outline: 2px solid grey; }
.input_buttonLink:hover  { outline: 2px solid cyan;    }
.input_buttonLink:active { outline: 2px solid magenta; }
.input_buttonLink:focus  { outline: 2px solid lime;    }

.button_cycleColourLeft          { position: absolute; border: none; margin: none; padding: none; left:      0px; top:    244px; width:     70px; height:     36px; outline-offset: -4px;
                                   background-color: lightgrey; outline: 4px outset grey; }
.button_cycleColourLeft:focus    { background-color: lightgrey; outline: 4px outset grey; }
.button_cycleColourLeft:hover    { background-color: lime;      outline: 4px outset green;}
.button_cycleColourLeft:active   { background-color: magenta;   outline: 4px inset  pink; }
.button_cycleColoursRight        { position: absolute; border: none; margin: none; padding: none; left:     86px; top:    244px; width:     70px; height:     36px; outline-offset: -4px;
                                   background-color: lightgrey; outline: 4px outset grey; }
.button_cycleColoursRight:focus  { background-color: lightgrey; outline: 4px outset grey; }
.button_cycleColoursRight:hover  { background-color: lime;      outline: 4px outset green;}
.button_cycleColoursRight:active { background-color: magenta;   outline: 4px inset  pink; }

.button_dropButton1        { position: absolute; border: none; margin: none; padding: none; left:      0px; top:    296px; width:     70px; height:     36px; outline-offset: -4px;
                                   background-color: lightgrey; outline: 4px outset grey; }
.button_dropButton1:focus  { background-color: lightgrey; outline: 4px outset grey; }
.button_dropButton1:hover  { background-color: lime;      outline: 4px outset green;}
.button_dropButton1:active { background-color: magenta;   outline: 4px inset  pink; }

.button_dropButton2        { position: absolute; border: none; margin: none; padding: none; left:     86px; top:    296px; width:     70px; height:     36px; outline-offset: -4px;
                                   background-color: lightgrey; outline: 4px outset grey; }
.button_dropButton2:focus  { background-color: lightgrey; outline: 4px outset grey; }
.button_dropButton2:hover  { background-color: lime;      outline: 4px outset green;}
.button_dropButton2:active { background-color: magenta;   outline: 4px inset  pink; }

.button_dropButton4        { position: absolute; border: none; margin: none; padding: none; left:      0px; top:    348px; width:     70px; height:     36px; outline-offset: -4px;
                                   background-color: lightgrey; outline: 4px outset grey; }
.button_dropButton4:focus  { background-color: lightgrey; outline: 4px outset grey; }
.button_dropButton4:hover  { background-color: lime;      outline: 4px outset green;}
.button_dropButton4:active { background-color: magenta;   outline: 4px inset  pink; }

.button_dropButton8        { position: absolute; border: none; margin: none; padding: none; left:     86px; top:    348px; width:     70px; height:     36px; outline-offset: -4px;
                                   background-color: lightgrey; outline: 4px outset grey; }
.button_dropButton8:focus  { background-color: lightgrey; outline: 4px outset grey; }
.button_dropButton8:hover  { background-color: lime;      outline: 4px outset green;}
.button_dropButton8:active { background-color: magenta;   outline: 4px inset  pink; }

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
</style>
`;