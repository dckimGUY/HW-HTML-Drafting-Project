shelfMenuHTML.tab6.folder1.style = `
<style>

.buoy {
position: absolute;
border:  none;
margin:  none;
padding: none;
width:   13px;
height:  29px;
background: transparent;
}

.buoyBorder {
width: 24px;
border-top-left-radius: 4px;
border-bottom-left-radius: 4px;
}

.buoy:hover  { background-color: rgba(  0, 255,   0, 0.5); }
.buoy:active { background-color: rgba(255,   0, 255, 0.5); }

.buoy0 {left:    2px; top:   36px; } .setbuoy0 {left:   28px; top:   36px; }
.buoy1 {left:    2px; top:   70px; } .setbuoy1 {left:   28px; top:   70px; }
.buoy2 {left:    2px; top:  104px; } .setbuoy2 {left:   28px; top:  104px; }
.buoy3 {left:    2px; top:  138px; } .setbuoy3 {left:   28px; top:  138px; }
.buoy4 {left:    2px; top:  172px; } .setbuoy4 {left:   28px; top:  172px; }
.buoy5 {left:    2px; top:  206px; } .setbuoy5 {left:   28px; top:  206px; }
.buoya {left:    2px; top:  240px; } .setbuoya {left:   28px; top:  240px; }
.buoyb {left:    2px; top:  274px; } .setbuoyb {left:   28px; top:  274px; }
.buoyc {left:    2px; top:  308px; } .setbuoyc {left:   28px; top:  308px; }
.buoyd {left:    2px; top:  342px; } .setbuoyd {left:   28px; top:  342px; }
.buoye { display: none; left:    2px; top:  376px; } .setbuoye {left:   28px; top:  376px; }
.buoyf { display: none; left:    2px; top:  410px; } .setbuoyf {left:   28px; top:  410px; }



.sidebarOpener6 {
position: absolute;
border: none;
margin: none;
padding: none;
left: 0px;
top: 0px;
width: 24px;
height: 32px;
image-rendering: crisp-edges;
image-rendering: pixelated;
background: transparent;
background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAgCAMAAAA/gEgKAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABBJREFUKJFjYBgFo2AU4AIAAyAAAa1l7IMAAAAASUVORK5CYII=");
z-index: 500;
}

.sidebarOpener6:focus           { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAgCAMAAAA/gEgKAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABBJREFUKJFjYBgFo2AU4AIAAyAAAa1l7IMAAAAASUVORK5CYII="); }
.sidebarOpener6:hover           { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAgCAMAAAA/gEgKAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAIlJREFUKJHd0msOAyEIBODNBGdJuP99S0EttuwFOn9M+OKb6/KgSZRHE6+PoZnb7NaVN2gLn/ojgGbEL4BiJlsOUG3A65ElFVREW+hnuDix2TzmdMf9D8B8ExdUALEAOSvBi1zAXO8AsgGJt80BdY+5/v6RfSrGV8yh3sPbtQxnJx6pvfsFD93+AuWqEm48K4loAAAAAElFTkSuQmCC"); }
.sidebarOpener6:active          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAgCAMAAAA/gEgKAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAIlJREFUKJHd0lkOwzAIBNCokieM4P7nLcFLcEsukPlB4sm7j8PzKRLtVsT7rUnPqXrKzAVSwt1/BEIV/AfCVG3JBiIFeD8yJYOYSQn1CBcnFIvHmGq77wCOO3FhBoIT2Ed18CYmoM+3AVCAxd32wrzGmH+9yNoV4ilGyecgmcr+E7fkv/sDD7/9C0UpFnwwOZXUAAAAAElFTkSuQmCC"); }

.sidebar6 {
position: absolute;
border: none;
margin: none;
padding: none;
left: -24px;
top: 36px;
width: 174px;
height: 463px;
image-rendering: crisp-edges;
image-rendering: pixelated;
background-image: url("data:image/png;base64,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");
}



































.artProgram {
position: absolute;
top: 156px;
left: 6px;
width: 1504px;
height: 2700px;
border: none;
transform-origin: top left;
transform: scale(0.125);
}

.colourB {
position: absolute;
top: 86px;
left: 6px;
width: 1504px;
height: 580px;
border: none;
transform-origin: top left;
transform: scale(0.125);
}

</style>
`;
