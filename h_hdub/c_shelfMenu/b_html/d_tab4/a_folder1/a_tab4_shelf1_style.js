shelfMenuHTML.tab4.folder1.style = `
<style>





.saveBlank {
position: absolute;
border: none;
margin: none;
padding: none;
background-color: transparent;
border-radius: 0px;
left:   10px;
top:   181px;
width:  24px;
height: 42px;
}
.saveBlank:hover  { background-color: rgba(0  ,255,  0,0.5); }
.saveBlank:active { background-color: rgba(255,0  ,255,0.5); }

.HDUBinfo {
position: absolute;
border: none;
margin: none;
padding: none;
background-color: transparent;
border-radius: 0px;
left:   87px;
top:   433px;
width:  26px;
height: 42px;
}
.HDUBinfo:hover  { background-color: rgba(0  ,255,  0,0.5); }
.HDUBinfo:active { background-color: rgba(255,0  ,255,0.5); }







.cancelEntries {
position: absolute;
border: none;
margin: none;
padding: none;
background-color: transparent;
border-radius: 8px;
left: 7px;
top: 101px;
width: 18px;
height: 18px;
}
.cancelEntries:hover {
outline-offset: -2px;
outline: 2px solid lime;	
}
.cancelEntries:active {
background-color: rgba(255,0,255,0.5);

outline: 0px solid lime;
}


.overlayButton {
background-color: transparent;
position        : absolute;
padding         : 0px;
padding-top     : 0.1em;
margin          : 0px;
border          : 0px;
opacity         : 0.35;
}

.overlayButton:hover {
background-color: rgba(0,255,0);
outline-offset  : -1px;
outline         : 1px solid lime;
}

.overlayButton:active {
background-color: rgba(255,0,255);
outline-offset  : -1px;
outline         : 1px solid magenta;
}




.sidebarOpener4 {
position: absolute;
border: none;
margin: none;
padding: none;
left: 0px;
top: 30px;
width: 25px;
height: 32px;
image-rendering: crisp-edges;
image-rendering: pixelated;
background: transparent;
background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAgCAMAAADQQiM0AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABBJREFUKJFjYBgFo2AUkAsAA0AAAS7VpkAAAAAASUVORK5CYII=");
z-index: 500;
}

.sidebarOpener4:focus           { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAgCAMAAADQQiM0AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABBJREFUKJFjYBgFo2AUkAsAA0AAAS7VpkAAAAAASUVORK5CYII="); }
.sidebarOpener4:hover           { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAgCAMAAADQQiM0AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAGtJREFUKJHN00EKgEAIBVCLXHb/6/bFUlNnNTGki4LnDxwmItq7IhI4agkBzlpCAB3b+G68C5kYoEEuEdBBbFqfJWMjJeOfbTJaXabIdxlOa7ok4LnMqn3+kHntHyUdzSPpSP32jm/88C+5APivDS9tMFjoAAAAAElFTkSuQmCC"); }
.sidebarOpener4:active          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAgCAMAAADQQiM0AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAGtJREFUKJHN00EKgEAIBVDJlnX/6/bFSU2d1USki4LnDxwmItq6IhLYawkBzlpCAB07eDTehUwM0CCXCOggNq3PkrGRkvHPNhmtLlPkvQynNV0S8Frmq33+kHnsHyUdzS3pSP32zm/89C+5AJi/EbwsQApXAAAAAElFTkSuQmCC"); }

.sidebar4 {
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
background-image: url("data:image/png;base64,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");
}



.fMan {
position: absolute;
border: none;
margin: none;
padding: none;
left: 27px;
top: 62px;
width: 150px;
height: 300px;
image-rendering: crisp-edges;
image-rendering: pixelated;
background: transparent;
transform-origin: top left;
transform: scale(0.1);
}











.hwSel {
user-select: none;
pointer-events: none;
position: absolute;
top: 2px;
left: 2px;
width: calc(100% - 4px);
height: calc(100% - 3px);
border: 0;
margin: none;
padding: none;
outline: none;
background-color: rgba(0,0,0,0.65);
image-rendering  : crisp-edges;
image-rendering  :   pixelated;
}


.button_hwSel_a                  { position: absolute; border: none; margin: none; padding: none; left:     10px; top:    140px; width:     24px; height:     40px;}
.button_hwSel_b                  { position: absolute; border: none; margin: none; padding: none; left:     36px; top:    140px; width:     24px; height:     40px;}
.button_hwSel_c                  { position: absolute; border: none; margin: none; padding: none; left:     62px; top:    140px; width:     24px; height:     40px;}
.button_hwSel_d                  { position: absolute; border: none; margin: none; padding: none; left:     88px; top:    140px; width:     24px; height:     40px;}
.button_hwSel_e                  { position: absolute; border: none; margin: none; padding: none; left:    114px; top:    140px; width:     24px; height:     40px;}
.button_hwSel_f                  { position: absolute; border: none; margin: none; padding: none; left:    140px; top:    140px; width:     24px; height:     40px;}
.button_hwSel_g                  { position: absolute; border: none; margin: none; padding: none; left:    166px; top:    140px; width:     24px; height:     40px;}
.button_hwSel_i                  { position: absolute; border: none; margin: none; padding: none; left:    166px; top:    182px; width:     24px; height:     40px;}
.button_hwSel_j                  { position: absolute; border: none; margin: none; padding: none; left:     10px; top:    224px; width:     24px; height:     40px;}
.button_hwSel_k                  { position: absolute; border: none; margin: none; padding: none; left:    166px; top:    224px; width:     24px; height:     40px;}
.button_hwSel_l                  { position: absolute; border: none; margin: none; padding: none; left:     10px; top:    266px; width:     24px; height:     40px;}
.button_hwSel_m                  { position: absolute; border: none; margin: none; padding: none; left:    166px; top:    266px; width:     24px; height:     40px;}
.button_hwSel_n                  { position: absolute; border: none; margin: none; padding: none; left:     10px; top:    308px; width:     24px; height:     40px;}
.button_hwSel_o                  { position: absolute; border: none; margin: none; padding: none; left:    166px; top:    308px; width:     24px; height:     40px;}
.button_hwSel_p                  { position: absolute; border: none; margin: none; padding: none; left:     10px; top:    350px; width:     24px; height:     40px;}
.button_hwSel_q                  { position: absolute; border: none; margin: none; padding: none; left:    166px; top:    350px; width:     24px; height:     40px;}
.button_hwSel_r                  { position: absolute; border: none; margin: none; padding: none; left:     10px; top:    392px; width:     24px; height:     40px;}
.button_hwSel_s                  { position: absolute; border: none; margin: none; padding: none; left:    166px; top:    392px; width:     24px; height:     40px;}
.button_hwSel_t                  { position: absolute; border: none; margin: none; padding: none; left:     10px; top:    434px; width:     24px; height:     40px;}
.button_hwSel_u                  { position: absolute; border: none; margin: none; padding: none; left:     36px; top:    434px; width:     24px; height:     40px;}
.button_hwSel_v                  { position: absolute; border: none; margin: none; padding: none; left:     62px; top:    434px; width:     24px; height:     40px;}
.button_hwSel_x                  { position: absolute; border: none; margin: none; padding: none; left:    114px; top:    434px; width:     24px; height:     40px;}
.button_hwSel_y                  { position: absolute; border: none; margin: none; padding: none; left:    140px; top:    434px; width:     24px; height:     40px;}
.button_hwSel_z                  { position: absolute; border: none; margin: none; padding: none; left:    166px; top:    434px; width:     24px; height:     40px;}



.button_hwSel                  { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAoCAMAAADT08pnAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAChJREFUKJFjYODEChiA4uxYAFCGk50BC2AflRiVGJWglwSuzIkrOwMAg6oHbaCWT0kAAAAASUVORK5CYII=");        }
.button_hwSel:focus            { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAoCAMAAADT08pnAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAChJREFUKJFjYODEChiA4uxYAFCGk50BC2AflRiVGJWglwSuzIkrOwMAg6oHbaCWT0kAAAAASUVORK5CYII=");  }
.button_hwSel:hover            { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAoCAMAAADT08pnAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAChJREFUKJFjYGDEChiA4mxYAFCGkY0BC2AblRiVGJWglwSuzIkrOwMAFvIDHYtiwKAAAAAASUVORK5CYII=");  }
.button_hwSel:active           { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAoCAMAAADT08pnAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAChJREFUKJFjYODBChiA4txYAFCGh5sBC+AelRiVGJWglwSuzIkrOwMAxZQKoYUT6agAAAAASUVORK5CYII="); }










.input_hdubSingleEntry           { position: absolute; border: none; margin: none; padding: none; left:     27px; top:     67px; width:    110px; height:     50px; outline-offset: -4px; font-size: 10px;
padding-top: 5px;
background-color: rgba(195,195,255,0.5);
}

.input_hdubPartDesignations           { position: absolute; border: none; margin: none; padding: none; left:    138px; top:     67px; width:    55px; height:     50px; outline-offset: -4px; font-size: 10px;
padding-top: 5px;
background-color: rgba(255,195,195,0.5);
}





.button_hdubAdd                  { display: none; position: absolute; border: none; margin: none; padding: none; left:      7px; top:     69px; width:     37px; height:     19px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAATCAMAAAAgYzSBAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAA9JREFUKJFjYBgFo2A4AQAC0gABZgr+WgAAAABJRU5ErkJggg==");        }
.button_hdubAdd:focus            { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAATCAMAAAAgYzSBAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAA9JREFUKJFjYBgFo2A4AQAC0gABZgr+WgAAAABJRU5ErkJggg==");  }
.button_hdubAdd:hover            { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAATCAMAAAAgYzSBAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAFJJREFUKJHFkNEKACAIA9v//3QEkXoN36I9nTGaboyn0tKF1najsxn84MK+e0oYkxKqIGPOJwXhiqiMjNxPwGpqXT6GiSoryyASbSs4kVW6vjpN/7EA57othXcAAAAASUVORK5CYII=");  }
.button_hdubAdd:active           { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAATCAMAAAAgYzSBAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAFNJREFUKJHFkDEKACAMA13z/w+LILY9Qzcx01WCaTPGU2npQmu70dkMfnBh3z0ljEkJVZAx55OCcEVURkbuJ2A1tS4fw0SVlWUQibYVnMgqXV+dJuchCBcXyvIIAAAAAElFTkSuQmCC"); }
.input_hdubRoll                  { display: none; position: absolute; border: none; margin: none; padding: none; left:      9px; top:     89px; width:    182px; height:     28px; outline-offset: -4px; font-size: 12px; }




.button_hdubRollLeft             { position: absolute; border: none; margin: none; padding: none; left:     70px; top:    118px; width:     22px; height:     18px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASCAMAAABo+94fAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAA5JREFUGJVjYBgFgxcAAAGeAAHljF+mAAAAAElFTkSuQmCC");        }
.button_hdubRollLeft:focus       { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASCAMAAABo+94fAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAA5JREFUGJVjYBgFgxcAAAGeAAHljF+mAAAAAElFTkSuQmCC");  }
.button_hdubRollLeft:hover       { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASCAMAAABo+94fAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAADNJREFUGJVjYMAPGBnRGWA2lAdnwDiMKAw8wrhFSTIYUzEuYVym4HU2IzKDPGuxhyCRAABu3gCBw7SucQAAAABJRU5ErkJggg==");  }
.button_hdubRollLeft:active      { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASCAMAAABo+94fAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAADNJREFUGJVjYMAPODnRGWA2lAdnwDicKAw8wrhFSTIYUzEuYVym4HU2JzKDPGuxhyCRAADZCwSBNTzPVgAAAABJRU5ErkJggg=="); }




.button_hdubRollRight            { position: absolute; border: none; margin: none; padding: none; left:     94px; top:    118px; width:     22px; height:     18px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASCAMAAABo+94fAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAA5JREFUGJVjYBgFgxcAAAGeAAHljF+mAAAAAElFTkSuQmCC");        }
.button_hdubRollRight:focus      { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASCAMAAABo+94fAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAA5JREFUGJVjYBgFgxcAAAGeAAHljF+mAAAAAElFTkSuQmCC");  }
.button_hdubRollRight:hover      { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASCAMAAABo+94fAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAADNJREFUGJVjYMAJGBnRGVAelA9nwHmMKAx8wjjFSTQen3IMYexm4BFlRGaQbB3OECQeAABu3gCBenKPcQAAAABJRU5ErkJggg==");  }
.button_hdubRollRight:active     { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASCAMAAABo+94fAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAADNJREFUGJVjYMAJODnRGVAelA9nwHmcKAx8wjjFSTQen3IMYexm4BHlRGaQbB3OECQeAADZCwSBWntmwQAAAABJRU5ErkJggg=="); }




.button_hdubEnter                { position: absolute; border: none; margin: none; padding: none; left:      7px; top:    120px; width:     61px; height:     17px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAARCAMAAABZ0lSWAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABJJREFUOI1jYBgFo2AUjAJsAAAEHgABCio9cgAAAABJRU5ErkJggg==");        }
.button_hdubEnter:focus          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAARCAMAAABZ0lSWAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABJJREFUOI1jYBgFo2AUjAJsAAAEHgABCio9cgAAAABJRU5ErkJggg==");  }
.button_hdubEnter:hover          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAARCAMAAABZ0lSWAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAH1JREFUOI3NkkESwCAIA8n/P90DhQSQS3vRGUcUFiNodvUArqYZArTw3HbHgQB8gzcYyJNYupxCx/Ro0HBvZjtodcuD8nb3MDe2hxbahIbQa5lEaKf5/q1mH+ioJgWaLcqrNW6Xpihd7Nn12W+h2W7YkR46mCL+GB2/Pj7HA8GqARRG+T/KAAAAAElFTkSuQmCC");  }
.button_hdubEnter:active         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAARCAMAAABZ0lSWAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAH5JREFUOI3NkkESwCAIA3lA/v/eHigkgFzai844orAYQbOrB3A1zRCghee2Ow4E4Bu8wUCexNLlFDqmR4OGezPbQatbHpS3u4e5sT200CY0hF7LJEI7zfdvNftARzUp0GxRXq1xuzRF6WLPrs9+C812w4700MEU8cfo+PXxOR7nJgzlTLjYewAAAABJRU5ErkJggg=="); }




.button_hdubSave                 { position: absolute; border: none; margin: none; padding: none; left:    132px; top:    120px; width:     61px; height:     18px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAARCAMAAABZ0lSWAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABJJREFUOI1jYBgFo2AUjAJsAAAEHgABCio9cgAAAABJRU5ErkJggg==");        }
.button_hdubSave:focus           { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAARCAMAAABZ0lSWAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABJJREFUOI1jYBgFo2AUjAJsAAAEHgABCio9cgAAAABJRU5ErkJggg==");  }
.button_hdubSave:hover           { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAARCAMAAABZ0lSWAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAGNJREFUOI3tkVEKgDAMQ/vuf2mlM639EDLQPwtzhfUtyYz468sCNqbWfn7IDhw8B4XFWGHQzBbpz7Nn41Sb9OXbooUrZ9FOcEl0VlrbUF6jL9F1hx27ctOv6P3vm8lBu+Y36gDrqACgL9/aSgAAAABJRU5ErkJggg==");  }
.button_hdubSave:active          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAARCAMAAABZ0lSWAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAGRJREFUOI3tkVEKgDAMQ3uAd//zKp1p7YeQgf5ZmCusb0lmxF9fFrAxtfbzQ3bg4DkoLMYKg2a2SH+ePRun2qQv3xYtXDmLdoJLorPS2obyGn2Jrjvs2JWbfkXvf99MDto1v1EH3ywHdT31CnIAAAAASUVORK5CYII="); }



.input_hdubCanvas                {
position: absolute;
border: none;
margin: none;
padding: none;
left:    34.5px;
top:    190px;
width:    100px;
height:    180px;
border-radius: 1px;
transform-origin: top left;
transform: scale(1.3);
}


.input_hdubOverlay                {
position: absolute;
border: none;
margin: none;
padding: none;
left:    34.5px;
top:    190px;
width:    100px;
height:    180px;
border-radius: 1px;
transform-origin: top left;
transform: scale(1.3);
}



.button_hdubSheetTemplate1x      { position: absolute; border: none; margin: none; padding: none; left:    69px; top:    117px; width:     62px; height:     19px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAATCAMAAAD/LU6eAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABJJREFUOI1jYBgFo2AUjIIhAAAErQABu9XsWAAAAABJRU5ErkJggg==");        }
.button_hdubSheetTemplate1x:focus { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAATCAMAAAD/LU6eAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABJJREFUOI1jYBgFo2AUjIIhAAAErQABu9XsWAAAAABJRU5ErkJggg==");  }
.button_hdubSheetTemplate1x:hover { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAATCAMAAAD/LU6eAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAKJJREFUOI2lU0EOgDAI6w78/8tGI4N2TN2URElGKaUTgLXdAP6gT/z1BYaueET5KXIXD7xMFae4ubh+hd3h33dC7EX1kvaY3bM0TyjzDP0R7dCKVmUBF+1jRZUJe/juzEb1qmDqO6mwiq9PmTfP98XZbQIf2cOP0En7Zy9r9pib2NWbm/3qpndN2EsP8iatwnM9b6JlVSjwlt/p75Wsa9kN4ADuWQfbhHyKBQAAAABJRU5ErkJggg==");  }
.button_hdubSheetTemplate1x:active { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAATCAMAAAD/LU6eAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAKJJREFUOI2lU0EOgDAI6539/71GI4N2TN2URElGKaUTgLXdAP6gT/z1BYaueET5KXIXD7xMFae4ubh+hd3h33dC7EX1kvaY3bM0TyjzDP0R7dCKVmUBF+1jRZUJe/juzEb1qmDqO6mwiq9PmTfP98XZbQIf2cOP0En7Zy9r9pib2NWbm/3qpndN2EsP8iatwnM9b6JlVSjwlt/p75Wsa9kN4ABdFx5LRp0oYQAAAABJRU5ErkJggg=="); }
.button_hdubSheetTemplate4x      { position: absolute; border: none; margin: none; padding: none; left:     7px; top:    474px; width:     186px; height:     18px; }














</style>
`;

