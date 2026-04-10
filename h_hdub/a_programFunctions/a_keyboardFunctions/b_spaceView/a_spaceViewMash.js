function spaceViewOn() {
  mouseIsDogged = spaceView = true;
  edgeDetect.style.display = "none";
  document.documentElement.style.cursor = document.body.style.cursor = "auto";
  Array.from(utilityLayer0.children).forEach(c => {
    if (c.style) { c.style.outline = c.dataset.finishedOutline; c.style.cursor = "auto"; }
    if (c.firstElementChild) { c.firstElementChild.style.backgroundColor = "transparent"; c.firstElementChild.innerText = ""; }
    if (c.lastElementChild) c.lastElementChild.style.display = "block";
  });
  utilityLayer1.style.display = visualizationsLayer.style.display = gridLayer.style.display = "none";
  utilityLayer0.style.opacity = "1.0";
  if (lastKey != "tab") document.documentElement.style.backgroundColor = finishedBackgroundColour;
}

function spaceViewOff() {
  mouseIsDogged = spaceView = false;
  pulledText.style.pointerEvents = "none";
  document.documentElement.style.cursor = document.body.style.cursor = cursor.crosshair;
  const tMap = { [Ts0]: [Cs0, Ws0, Ss0], [Ts1]: [Cs1, Ws1, Ss1], [Ts2]: [Cs2, Ws2, Ss2] };
  Array.from(utilityLayer0.children).forEach(c => {
    const s = tMap[c.dataset.coinTrip];
    if (s) { c.style.outlineColor = s[0]; c.style.outlineWidth = s[1]; c.style.outlineStyle = s[2]; }
    if (c.lastElementChild) c.lastElementChild.style.display = "block";
  });
  utilityLayer0.style.opacity = partsOpacity;
  readCoins();
  utilityLayer1.style.display = visualizationsLayer.style.display = gridLayer.style.display = "block";
  document.documentElement.style.backgroundColor = (hauptMode == 1) ? window.L : window.sL;
  pulledText.style.display = "none";
  recoverColouration();
}

function spaceViewToggle(keyInfo) {
  spaceView ? spaceViewOff(keyInfo) : spaceViewOn(keyInfo);
}

function setHauptModeOff(keyInfo) { 
  hauptMode = 1; 
  document.documentElement.style.backgroundColor = L; 
}

function setHauptModeOn(keyInfo) { 
  hauptMode = 0; 
  document.documentElement.style.backgroundColor = sL; 
}

function flipHauptMode(keyInfo) {
  CAPS = 1 - CAPS;
  hauptMode = 1 - CAPS;
  CAPS ? setHauptModeOff(keyInfo) : setHauptModeOn(keyInfo);
}

function togglePointerEvents(state) {
  const val = state ? "none" : "";
  Array.from(utilityLayer0.children).forEach(c => {
    const f = c.firstElementChild, l = c.lastElementChild;
    if (!state) c.style.pointerEvents = "";
    if (f) f.style.pointerEvents = val;
    if (l) {
      l.style.pointerEvents = val;
      if (l.firstElementChild) l.firstElementChild.style.pointerEvents = val;
    }
    if (c.dataset.wrapper == "true" && f) f.style.display = state ? "block" : "none";
  });
}

function removePointerEventsNone() { togglePointerEvents(false); }
function restorePointerEventsNone() { togglePointerEvents(true); }
