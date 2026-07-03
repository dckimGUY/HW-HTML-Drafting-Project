

ui.pageDescription.input         = function() { topLayer[topLayer.a_currentLayer].d_description = ui.pageDescription.ref.value; };

ui.projectName.input             = function() { topLayer.aa_project_name = ui.projectName.ref.value; };

ui.coin77155.click               = function() { deMinimis(true, null, null, null, null, null, null, event); layerRight(); buzzWord(0,'SAVE',128,'magenta',200,200,25,'top','','',event); };
ui.coin59760.click               = function() { layerLeft();  };
ui.coin64291.click               = function() { layerRight(); };


ui.coin70038.click               = function() { navigator.clipboard.writeText(utilityLayer0.innerHTML); };























function uploadCustomOGImage() {
    // 1. Create a dynamic hidden file input element in memory
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/png, image/jpeg, image/webp'; // Restrict to typical image types

    // 2. Setup the event listener to catch when the user selects a file
    fileInput.onchange = function(event) {
        const file = event.target.files[0];
        if (!file) return; // Exit if dialogue was cancelled or empty

        // 3. Instantiate a standard file reader to extract the binary contents
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const base64ResultString = e.target.result; // This holds the full 'data:image/png;base64,...' string
            
            // 4. DYNAMIC TARGET CHECK: Use your exact blueprint path to update the correct active layer object 🎯
            const currentActiveLayerKey = topLayer.a_currentLayer;
            
            if (topLayer[currentActiveLayerKey]) {
                // Assign the data URL string straight onto your key location property
                topLayer[currentActiveLayerKey].i_ogImageBase64 = base64ResultString;
            } else {
            }
        };

        // Trigger the asynchronous base64 encoder read path
        reader.readAsDataURL(file);
    };

    // 5. Virtual Click execution triggers the native operating system file select selector window instantly
    fileInput.click();
}


function uploadBackgroundImage() {
    // 1. Create a dynamic hidden file input element in memory
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/png, image/jpeg, image/webp'; // Restrict to typical image types

    // 2. Setup the event listener to catch when the user selects a file
    fileInput.onchange = function(event) {
        const file = event.target.files[0];
        if (!file) return; // Exit if dialogue was cancelled or empty

        // 3. Instantiate a standard file reader to extract the binary contents
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const base64ResultString = e.target.result; // This holds the full 'data:image/png;base64,...' string
            
            // 4. DYNAMIC TARGET CHECK: Use your exact blueprint path to update the correct active layer object 🎯
            const currentActiveLayerKey = topLayer.a_currentLayer;
            
            if (topLayer[currentActiveLayerKey]) {
                // Assign the data URL string straight onto your key location property
                topLayer[currentActiveLayerKey].backgroundImage = base64ResultString;
                
            } else {
            }
        };

        // Trigger the asynchronous base64 encoder read path
        reader.readAsDataURL(file);
    };

    // 5. Virtual Click execution triggers the native operating system file select selector window instantly
    fileInput.click();
}



ui.coin49592.click               = function() { if (!event.ctrlKey) { uploadCustomOGImage(); buzzWord(0,'OG-image',128,'magenta',200,200,25,'top','','',event); } else if (event.ctrlKey) { downloadBlankOgTemplate(); }};






ui.coin54398.click               = function() { saveProject(); buzzWord(0,'SAVE',128,'magenta',200,200,25,'top','','',event); };

ui.coin77671.input               = function() { filename = ui.coin77671.ref.value; topLayer[topLayer.a_currentLayer].filename = filename; };
ui.levelNotes.input              = function() { topLayer[topLayer.a_currentLayer].h_notes = ui.levelNotes.ref.value; };






function linkButton(text, clickCommand) {
ui.textEntry.ref.value = text;
drawButton7();
enterButton();
readCoins();
redraw();
utilityLayer0.lastElementChild.lastElementChild.lastElementChild.lastElementChild.setAttribute('onclick', clickCommand);
}







ui.setLayer1.click               = function() { if (!event.shiftKey && !event.ctrlKey) { changeLayer("b_layer1"); buzzWord(0,'<sup>1</sup>' ,192,'magenta',200,200,25,'top','','',event);} else if ( event.shiftKey && !event.ctrlKey) { pushState("setLayer1");  } else if (!event.shiftKey &&  event.ctrlKey) { linkButton( "1", "try { !!utilityLayer0; changeLayer('b_layer1');  } catch { window.location='{{lvl1}}';  }"); } };
ui.setLayer2.click               = function() { if (!event.shiftKey && !event.ctrlKey) { changeLayer("c_layer2"); buzzWord(0,'<sup>2</sup>' ,192,'magenta',200,200,25,'top','','',event);} else if ( event.shiftKey && !event.ctrlKey) { pushState("setLayer2");  } else if (!event.shiftKey &&  event.ctrlKey) { linkButton( "2", "try { !!utilityLayer0; changeLayer('c_layer2');  } catch { window.location='{{lvl2}}';  }"); } };
ui.setLayer3.click               = function() { if (!event.shiftKey && !event.ctrlKey) { changeLayer("d_layer3"); buzzWord(0,'<sup>3</sup>' ,192,'magenta',200,200,25,'top','','',event);} else if ( event.shiftKey && !event.ctrlKey) { pushState("setLayer3");  } else if (!event.shiftKey &&  event.ctrlKey) { linkButton( "3", "try { !!utilityLayer0; changeLayer('d_layer3');  } catch { window.location='{{lvl3}}';  }"); } };
ui.setLayer4.click               = function() { if (!event.shiftKey && !event.ctrlKey) { changeLayer("e_layer4"); buzzWord(0,'<sup>4</sup>' ,192,'magenta',200,200,25,'top','','',event);} else if ( event.shiftKey && !event.ctrlKey) { pushState("setLayer4");  } else if (!event.shiftKey &&  event.ctrlKey) { linkButton( "4", "try { !!utilityLayer0; changeLayer('e_layer4');  } catch { window.location='{{lvl4}}';  }"); } };
ui.setLayer5.click               = function() { if (!event.shiftKey && !event.ctrlKey) { changeLayer("f_layer5"); buzzWord(0,'<sup>5</sup>' ,192,'magenta',200,200,25,'top','','',event);} else if ( event.shiftKey && !event.ctrlKey) { pushState("setLayer5");  } else if (!event.shiftKey &&  event.ctrlKey) { linkButton( "5", "try { !!utilityLayer0; changeLayer('f_layer5');  } catch { window.location='{{lvl5}}';  }"); } };
ui.setLayer6.click               = function() { if (!event.shiftKey && !event.ctrlKey) { changeLayer("g_layer6"); buzzWord(0,'<sup>6</sup>' ,192,'magenta',200,200,25,'top','','',event);} else if ( event.shiftKey && !event.ctrlKey) { pushState("setLayer6");  } else if (!event.shiftKey &&  event.ctrlKey) { linkButton( "6", "try { !!utilityLayer0; changeLayer('g_layer6');  } catch { window.location='{{lvl6}}';  }"); } };
ui.setLayer7.click               = function() { if (!event.shiftKey && !event.ctrlKey) { changeLayer("h_layer7"); buzzWord(0,'<sup>7</sup>' ,192,'magenta',200,200,25,'top','','',event);} else if ( event.shiftKey && !event.ctrlKey) { pushState("setLayer7");  } else if (!event.shiftKey &&  event.ctrlKey) { linkButton( "7", "try { !!utilityLayer0; changeLayer('h_layer7');  } catch { window.location='{{lvl7}}';  }"); } };
ui.setLayer8.click               = function() { if (!event.shiftKey && !event.ctrlKey) { changeLayer("i_layer8"); buzzWord(0,'<sup>8</sup>' ,192,'magenta',200,200,25,'top','','',event);} else if ( event.shiftKey && !event.ctrlKey) { pushState("setLayer8");  } else if (!event.shiftKey &&  event.ctrlKey) { linkButton( "8", "try { !!utilityLayer0; changeLayer('i_layer8');  } catch { window.location='{{lvl8}}';  }"); } };
ui.setLayer9.click               = function() { if (!event.shiftKey && !event.ctrlKey) { changeLayer("j_layer9"); buzzWord(0,'<sup>9</sup>' ,192,'magenta',200,200,25,'top','','',event);} else if ( event.shiftKey && !event.ctrlKey) { pushState("setLayer9");  } else if (!event.shiftKey &&  event.ctrlKey) { linkButton( "9", "try { !!utilityLayer0; changeLayer('j_layer9');  } catch { window.location='{{lvl9}}';  }"); } };
ui.setLayer10.click              = function() { if (!event.shiftKey && !event.ctrlKey) { changeLayer("k_layer10");buzzWord(0,'<sup>10</sup>',192,'magenta',200,200,25,'top','','',event);} else if ( event.shiftKey && !event.ctrlKey) { pushState("setLayer10"); } else if (!event.shiftKey &&  event.ctrlKey) { linkButton("10", "try { !!utilityLayer0; changeLayer('k_layer10'); } catch { window.location='{{lvl10}}'; }"); } };
ui.setLayer11.click              = function() { if (!event.shiftKey && !event.ctrlKey) { changeLayer("l_layer11");buzzWord(0,'<sup>11</sup>',192,'magenta',200,200,25,'top','','',event);} else if ( event.shiftKey && !event.ctrlKey) { pushState("setLayer11"); } else if (!event.shiftKey &&  event.ctrlKey) { linkButton("11", "try { !!utilityLayer0; changeLayer('l_layer11'); } catch { window.location='{{lvl11}}'; }"); } };
ui.setLayer12.click              = function() { if (!event.shiftKey && !event.ctrlKey) { changeLayer("m_layer12");buzzWord(0,'<sup>12</sup>',192,'magenta',200,200,25,'top','','',event);} else if ( event.shiftKey && !event.ctrlKey) { pushState("setLayer12"); } else if (!event.shiftKey &&  event.ctrlKey) { linkButton("12", "try { !!utilityLayer0; changeLayer('m_layer12'); } catch { window.location='{{lvl12}}'; }"); } };
ui.setLayer13.click              = function() { if (!event.shiftKey && !event.ctrlKey) { changeLayer("n_layer13");buzzWord(0,'<sup>13</sup>',192,'magenta',200,200,25,'top','','',event);} else if ( event.shiftKey && !event.ctrlKey) { pushState("setLayer13"); } else if (!event.shiftKey &&  event.ctrlKey) { linkButton("13", "try { !!utilityLayer0; changeLayer('n_layer13'); } catch { window.location='{{lvl13}}'; }"); } };
ui.setLayer14.click              = function() { if (!event.shiftKey && !event.ctrlKey) { changeLayer("o_layer14");buzzWord(0,'<sup>14</sup>',192,'magenta',200,200,25,'top','','',event);} else if ( event.shiftKey && !event.ctrlKey) { pushState("setLayer14"); } else if (!event.shiftKey &&  event.ctrlKey) { linkButton("14", "try { !!utilityLayer0; changeLayer('o_layer14'); } catch { window.location='{{lvl14}}'; }"); } };
ui.setLayer15.click              = function() { if (!event.shiftKey && !event.ctrlKey) { changeLayer("p_layer15");buzzWord(0,'<sup>15</sup>',192,'magenta',200,200,25,'top','','',event);} else if ( event.shiftKey && !event.ctrlKey) { pushState("setLayer15"); } else if (!event.shiftKey &&  event.ctrlKey) { linkButton("15", "try { !!utilityLayer0; changeLayer('p_layer15'); } catch { window.location='{{lvl15}}'; }"); } };
ui.setLayer16.click              = function() { if (!event.shiftKey && !event.ctrlKey) { changeLayer("q_layer16");buzzWord(0,'<sup>16</sup>',192,'magenta',200,200,25,'top','','',event);} else if ( event.shiftKey && !event.ctrlKey) { pushState("setLayer16"); } else if (!event.shiftKey &&  event.ctrlKey) { linkButton("16", "try { !!utilityLayer0; changeLayer('q_layer16'); } catch { window.location='{{lvl16}}'; }"); } };
ui.setLayer17.click              = function() { if (!event.shiftKey && !event.ctrlKey) { changeLayer("r_layer17");buzzWord(0,'<sup>17</sup>',192,'magenta',200,200,25,'top','','',event);} else if ( event.shiftKey && !event.ctrlKey) { pushState("setLayer17"); } else if (!event.shiftKey &&  event.ctrlKey) { linkButton("17", "try { !!utilityLayer0; changeLayer('r_layer17'); } catch { window.location='{{lvl17}}'; }"); } };
ui.setLayer18.click              = function() { if (!event.shiftKey && !event.ctrlKey) { changeLayer("s_layer18");buzzWord(0,'<sup>18</sup>',192,'magenta',200,200,25,'top','','',event);} else if ( event.shiftKey && !event.ctrlKey) { pushState("setLayer18"); } else if (!event.shiftKey &&  event.ctrlKey) { linkButton("18", "try { !!utilityLayer0; changeLayer('s_layer18'); } catch { window.location='{{lvl18}}'; }"); } };
ui.setLayer19.click              = function() { if (!event.shiftKey && !event.ctrlKey) { changeLayer("t_layer19");buzzWord(0,'<sup>19</sup>',192,'magenta',200,200,25,'top','','',event);} else if ( event.shiftKey && !event.ctrlKey) { pushState("setLayer19"); } else if (!event.shiftKey &&  event.ctrlKey) { linkButton("19", "try { !!utilityLayer0; changeLayer('t_layer19'); } catch { window.location='{{lvl19}}'; }"); } };
ui.setLayer20.click              = function() { if (!event.shiftKey && !event.ctrlKey) { changeLayer("u_layer20");buzzWord(0,'<sup>20</sup>',192,'magenta',200,200,25,'top','','',event);} else if ( event.shiftKey && !event.ctrlKey) { pushState("setLayer20"); } else if (!event.shiftKey &&  event.ctrlKey) { linkButton("20", "try { !!utilityLayer0; changeLayer('u_layer20'); } catch { window.location='{{lvl20}}'; }"); } };
ui.setLayer21.click              = function() { };
ui.setLayer22.click              = function() { };
ui.setLayer23.click              = function() { };
ui.setLayer24.click              = function() { };
ui.setLayer25.click              = function() { };


ui.LVL1.click               = function() { if (!event.shiftKey && !event.ctrlKey) { changeLayer("b_layer1" ); } else if ( event.shiftKey && !event.ctrlKey) { pushState("setLayer1" ); } else if (!event.shiftKey &&  event.ctrlKey) { copyStateCode("b_layer1" ); } };
ui.LVL2.click               = function() { if (!event.shiftKey && !event.ctrlKey) { changeLayer("c_layer2" ); } else if ( event.shiftKey && !event.ctrlKey) { pushState("setLayer2" ); } else if (!event.shiftKey &&  event.ctrlKey) { copyStateCode("c_layer2" ); } };
ui.LVL3.click               = function() { if (!event.shiftKey && !event.ctrlKey) { changeLayer("d_layer3" ); } else if ( event.shiftKey && !event.ctrlKey) { pushState("setLayer3" ); } else if (!event.shiftKey &&  event.ctrlKey) { copyStateCode("d_layer3" ); } };
ui.LVL4.click               = function() { if (!event.shiftKey && !event.ctrlKey) { changeLayer("e_layer4" ); } else if ( event.shiftKey && !event.ctrlKey) { pushState("setLayer4" ); } else if (!event.shiftKey &&  event.ctrlKey) { copyStateCode("e_layer4" ); } };
ui.LVL5.click               = function() { if (!event.shiftKey && !event.ctrlKey) { changeLayer("f_layer5" ); } else if ( event.shiftKey && !event.ctrlKey) { pushState("setLayer5" ); } else if (!event.shiftKey &&  event.ctrlKey) { copyStateCode("f_layer5" ); } };
ui.LVL6.click               = function() { if (!event.shiftKey && !event.ctrlKey) { changeLayer("g_layer6" ); } else if ( event.shiftKey && !event.ctrlKey) { pushState("setLayer6" ); } else if (!event.shiftKey &&  event.ctrlKey) { copyStateCode("g_layer6" ); } };
ui.LVL7.click               = function() { if (!event.shiftKey && !event.ctrlKey) { changeLayer("h_layer7" ); } else if ( event.shiftKey && !event.ctrlKey) { pushState("setLayer7" ); } else if (!event.shiftKey &&  event.ctrlKey) { copyStateCode("h_layer7" ); } };
ui.LVL8.click               = function() { if (!event.shiftKey && !event.ctrlKey) { changeLayer("i_layer8" ); } else if ( event.shiftKey && !event.ctrlKey) { pushState("setLayer8" ); } else if (!event.shiftKey &&  event.ctrlKey) { copyStateCode("i_layer8" ); } };
ui.LVL9.click               = function() { if (!event.shiftKey && !event.ctrlKey) { changeLayer("j_layer9" ); } else if ( event.shiftKey && !event.ctrlKey) { pushState("setLayer9" ); } else if (!event.shiftKey &&  event.ctrlKey) { copyStateCode("j_layer9" ); } };
ui.LVL10.click              = function() { if (!event.shiftKey && !event.ctrlKey) { changeLayer("k_layer10"); } else if ( event.shiftKey && !event.ctrlKey) { pushState("setLayer10"); } else if (!event.shiftKey &&  event.ctrlKey) { copyStateCode("k_layer10"); } };
ui.LVL11.click              = function() { if (!event.shiftKey && !event.ctrlKey) { changeLayer("l_layer11"); } else if ( event.shiftKey && !event.ctrlKey) { pushState("setLayer11"); } else if (!event.shiftKey &&  event.ctrlKey) { copyStateCode("l_layer11"); } };
ui.LVL12.click              = function() { if (!event.shiftKey && !event.ctrlKey) { changeLayer("m_layer12"); } else if ( event.shiftKey && !event.ctrlKey) { pushState("setLayer12"); } else if (!event.shiftKey &&  event.ctrlKey) { copyStateCode("m_layer12"); } };
ui.LVL13.click              = function() { if (!event.shiftKey && !event.ctrlKey) { changeLayer("n_layer13"); } else if ( event.shiftKey && !event.ctrlKey) { pushState("setLayer13"); } else if (!event.shiftKey &&  event.ctrlKey) { copyStateCode("n_layer13"); } };
ui.LVL14.click              = function() { if (!event.shiftKey && !event.ctrlKey) { changeLayer("o_layer14"); } else if ( event.shiftKey && !event.ctrlKey) { pushState("setLayer14"); } else if (!event.shiftKey &&  event.ctrlKey) { copyStateCode("o_layer14"); } };
ui.LVL15.click              = function() { if (!event.shiftKey && !event.ctrlKey) { changeLayer("p_layer15"); } else if ( event.shiftKey && !event.ctrlKey) { pushState("setLayer15"); } else if (!event.shiftKey &&  event.ctrlKey) { copyStateCode("p_layer15"); } };
ui.LVL16.click              = function() { if (!event.shiftKey && !event.ctrlKey) { changeLayer("q_layer16"); } else if ( event.shiftKey && !event.ctrlKey) { pushState("setLayer16"); } else if (!event.shiftKey &&  event.ctrlKey) { copyStateCode("q_layer16"); } };
ui.LVL17.click              = function() { if (!event.shiftKey && !event.ctrlKey) { changeLayer("r_layer17"); } else if ( event.shiftKey && !event.ctrlKey) { pushState("setLayer17"); } else if (!event.shiftKey &&  event.ctrlKey) { copyStateCode("r_layer17"); } };
ui.LVL18.click              = function() { if (!event.shiftKey && !event.ctrlKey) { changeLayer("s_layer18"); } else if ( event.shiftKey && !event.ctrlKey) { pushState("setLayer18"); } else if (!event.shiftKey &&  event.ctrlKey) { copyStateCode("s_layer18"); } };
ui.LVL19.click              = function() { if (!event.shiftKey && !event.ctrlKey) { changeLayer("t_layer19"); } else if ( event.shiftKey && !event.ctrlKey) { pushState("setLayer19"); } else if (!event.shiftKey &&  event.ctrlKey) { copyStateCode("t_layer19"); } };
ui.LVL20.click              = function() { if (!event.shiftKey && !event.ctrlKey) { changeLayer("u_layer20"); } else if ( event.shiftKey && !event.ctrlKey) { pushState("setLayer20"); } else if (!event.shiftKey &&  event.ctrlKey) { copyStateCode("u_layer20"); } };



