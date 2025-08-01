function setMouseCursorIcon() {
switch (mode) {
case 0: rdots(); currentIconSet = iconSet.mode0; mouseCursor.src = currentIconSet.cur0.src; break;
case 1: rdots(); currentIconSet = iconSet.mode1; mouseCursor.src = currentIconSet.cur0.src; break;
case 2: rdots(); currentIconSet = iconSet.mode2; mouseCursor.src = currentIconSet.cur0.src; break;
case 3: rdots(); currentIconSet = iconSet.mode3; mouseCursor.src = currentIconSet.cur0.src; break;
case 4:   dot(); currentIconSet = iconSet.mode4; mouseCursor.src = currentIconSet.cur0.src; break;
case 5: rdots(); currentIconSet = iconSet.mode5; mouseCursor.src = currentIconSet.cur0.src; break;
case 6: rdots(); currentIconSet = iconSet.mode6; mouseCursor.src = currentIconSet.cur0.src; break;
case 7: rdots(); currentIconSet = iconSet.mode7; mouseCursor.src = currentIconSet.cur0.src; break;
case 8: rdots(); currentIconSet = iconSet.mode8; mouseCursor.src = currentIconSet.cur0.src; break;
case 9: rdots(); currentIconSet = iconSet.mode9; mouseCursor.src = currentIconSet.cur0.src; break;
}
}
