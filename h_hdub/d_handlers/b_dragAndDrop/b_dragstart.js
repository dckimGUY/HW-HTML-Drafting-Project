var dragging = false;
document.body.addEventListener('dragstart', (e) => {
dragging = true;
 const btn = e.target.closest('.drag-button');
 if (!btn) return;
let graphic = false;
["hwSel_a", "hwSel_b", "hwSel_c", "hwSel_d", "hwSel_e", "hwSel_f", "hwSel_g", "hwSel_i", "hwSel_j", "hwSel_k", "hwSel_l", "hwSel_m", "hwSel_n", "hwSel_o", "hwSel_p", "hwSel_q", "hwSel_r", "hwSel_s", "hwSel_t", "hwSel_u", "hwSel_v", "hwSel_x", "hwSel_y", "hwSel_z"].forEach((name) => {
if (btn.id == name) {
const syntax = reString(cropObject(100, 180, makeObject(clean(ui.hwString[name].string))));
const dataURL = hdubCanvas.toDataURL('image/png');
const base64Data = dataURL.split(',')[1];
const downloadData = `image/png:SHAPE_HDUB_${syntax}.png:data:image/png;base64,${base64Data}`;
e.dataTransfer.setData('DownloadURL', downloadData);
graphic = true;
return 0;
}
});
 if (graphic) return 0;
 let name = "blank.txt";
 let content = "no content";
 switch (btn.id) {
 case "save200" : content = deMinimis(false, "1", null, null, null, null, true); name = filename; break;
 case "save300" : content = deMinimis(false, "(100/320)", null, null, null, null, true); name = filename; break;
 case "save500" : content = deMinimis(false, "(100/500)", null, null, null, null, true); name = filename; break;
 case "save800" : content = deMinimis(false, "(100/768)", null, null, null, null, true); name = filename; break;
 case "save1000" : content = deMinimis(false, "(100/1000)", null, null, null, null, true); name = filename; break;
 case "save1200" : content = deMinimis(false, "(100/1280)", null, null, null, null, true); name = filename; break;
 case "save1500" : content = deMinimis(false, "(100/1536)", null, null, null, null, true); name = filename; break;
 case "save1800" : content = deMinimis(false, "(100/2000)", null, null, null, null, true); name = filename; break;
 case "coin77155": content = deMinimis(false, lastFactor, null, null, null, null, true); name = filename; break;
 default: return;
 }
 name = name + ".html";
 const data = `text/plain:${name}:data:text/plain;base64,${btoa(unescape(encodeURIComponent(content)))}`;
 e.dataTransfer.setData('DownloadURL', data);
});
