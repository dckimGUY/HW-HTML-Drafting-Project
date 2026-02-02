function quitSave() {
saveProject();
setTimeout(() => { window.closed = true; window.close();}, quitSaveTimeoutSetting);
return (0);
}
