function popInsert(idPrefix,popString) {
insertNewCoin([null,78,78,0,0,0]);
coinFocus.style.left     = window.scrollX + 'px';
coinFocus.dataset.left   = window.scrollX + 'px';
coinFocus.style.top      = window.scrollY + 'px';
coinFocus.dataset.top    = window.scrollY + 'px';
coinFocus.style.width    = '500px';
coinFocus.dataset.width  = '500px';
coinFocus.style.height   = '100px';
coinFocus.dataset.height = '100px';
coinFocus.dataset.notes  = `{
"initialDisplay" : "none",
"notes" : "Written notes.",
"YAML"  : "Coded instructions",
"data"  : "Additional JSON"
}`;
coinFocus.id = coinFocus.id.replace(/coin/g, idPrefix);
coinFocus.name = idPrefix;
coinFocus.lastElementChild.firstElementChild.innerHTML = popString;
}

function popStyle() { popInsert("style",`<div style="width: 100%; height:100%; padding: 0px; margin: 0px; border: 0px; font-size: inherit; background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAQCAMAAAAYoR5yAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAC9JREFUCJlj4IEDBh5uGAAzgUJQJpgHZkKU8GBlItRimsANN4Ebjwk8aLahmwAEAHGSBxOB+ZD4AAAAAElFTkSuQmCC'); background-size: 20px 32px;"><textarea name="styleBrick" oninput="this.innerText = this.value; this.nextElementSibling.innerHTML = this.value;" style="width: 100%; height: 100%; padding: 0px; margin: 0px; border: 0px; resize:none; font-size: inherit; background-color: rgba(255,255,255,0.8);"></textarea><style></style></div>`); }

async function popJSON() { popInsert("json",`<div style="width: 100%; height:100%; padding: 0px; margin: 0px; border: 0px; font-size: inherit; background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAQCAMAAAAYoR5yAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAADVJREFUCJlj4IUDBm44ADKhgtwQUV6oKCoTzMZkgthww3jRmby8MCYvQhSdCTUB7AIkw7i5AXyKByuZCYzaAAAAAElFTkSuQmCC'); background-size: 20px 32px;"><textarea name="jsonBrick" oninput="this.innerText = this.value; try { this.parentNode.parentNode.parentNode.parentNode.dataset.json = JSON.stringify(JSON.parse(this.value)); this.parentNode.parentNode.parentNode.parentNode.dataset.shrink = await shrink(JSON.stringify(JSON.parse(this.value))); this.style.backgroundColor = 'rgba(255,255,255,0.8)'; } catch { this.parentNode.parentNode.parentNode.parentNode.dataset.json = this.value; this.style.backgroundColor = 'rgba(255,240,240,0.8)'; };" style="width: 100%; height: 100%; padding: 0px; margin: 0px; border: 0px; resize:none; font-size: inherit; background-color: rgba(255,255,255,0.8);"></textarea></div>`); }

function popScript() { popInsert("addScript",`<div style="width: 100%; height:100%; padding: 0px; margin: 0px; border: 0px; font-size: inherit; background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAACdJREFUCJkty6ENADAQA7ELCcn++36lHjMxTdJtTDH18EUVUUTh7gE2SAGBxTK1ygAAAABJRU5ErkJggg=='); background-size: 20px 32px;"><textarea name="jsonBrick" oninput="this.innerText = this.value; this.parentNode.parentNode.parentNode.parentNode.dataset.addScript = this.value;" style="width: 100%; height: 100%; padding: 0px; margin: 0px; border: 0px; resize:none; font-size: inherit; background-color: rgba(255,255,255,0.8);"></textarea></div>`); }

async function popAccumulator(string) { popInsert("state",`<div style="width: 100%; height:100%; padding: 0px; margin: 0px; border: 0px; font-size: inherit; background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAQCAMAAACr6TZoAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAFhJREFUKJGtkAsOwCAIQ2nvf+gtunXUT0jMSJRqHgoNACxW/MWwjvbOHcAjujQV3wVTtk2Mskgp9QMak5X6sQ+OGeAdbMXk845p1Wnu1Vwjs/PHPZp9Zh0X6wEDqXTVJVMAAAAASUVORK5CYII='); background-size: 35px 16px;"><button style="position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; font-size: 48px; font-family: dckimPixelMono; color: white; background-color: rgba(0,255,0,0.5);" onclick="try { stateHolder = JSON.parse(document.getElementById(this.parentNode.parentNode.parentNode.parentNode.id).dataset.state); setState(document.getElementById('statename').innerText,0); } catch {  }">[0-${JSON.parse(string).length - 1}] STATE</button></div>`); coinFocus.dataset.state = string; coinFocus.dataset.shrink = await shrink(string); topLayer.programStateAccumulator = []; }
