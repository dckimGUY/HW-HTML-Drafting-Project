shelfMenuHTML.scaler = `
<style>
.menuScalerWrap {
position: fixed;
right: 50px;
top: 0px;
z-index: 99999999999;
cursor: ew-resize;
}
.mouseCatcher {
position: absolute;
width: 16px;
height: 976px;
right: 334px;
top: 0px;
background-color: transparent;
pointer-events: auto;
}
.scaleRangeWrapper {
display: none;
}
.scaleRange {
position: absolute;
width: 1600px;
height: 976px;
top: 0px;
right: 0px;
padding: 0px;
border: 0;
margin: 0;
opacity: 0;
}
.rightBlocker {
position: absolute;
width: 1600px;
height: 976px;
right: -1266px;
top: 0px;
background-color: transparent;
}
.leftBlocker {
position: absolute;
width: 1600px;
height: 976px;
right: 350px;
top: 0px;
background-color: transparent;
}
</style>

<div id="menuScalerWrap" class="menuScalerWrap">
<div id="mouseCatcher" class="mouseCatcher"></div>
<div id="scaleRangeWrapper" class="scaleRangeWrapper">
<input id="scaleRange" class="scaleRange" type="range" value="1250" min="0" max="1600" step="0.001">
<div id="rightBlocker" class="rightBlocker"></div>
<div id="leftBlocker"  class="leftBlocker"></div>
</div>
</div>
`;