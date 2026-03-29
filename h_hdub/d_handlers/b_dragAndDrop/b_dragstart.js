var dragging = false;

document.body.addEventListener('dragstart', (e) => {
dragging = true;
  const btn = e.target.closest('.drag-button');
  if (!btn) return;

  let name = "test.txt";
  let content = "test content";

switch (btn.id) {
case "save200"  : content = deMinimis(false,         "1" , null, null, null, null, true); name = filename; break;
case "save300"  : content = deMinimis(false, "(100/320)" , null, null, null, null, true); name = filename; break;
case "save500"  : content = deMinimis(false, "(100/500)" , null, null, null, null, true); name = filename; break;
case "save800"  : content = deMinimis(false, "(100/768)" , null, null, null, null, true); name = filename; break;
case "save1000" : content = deMinimis(false, "(100/1000)", null, null, null, null, true); name = filename; break;
case "save1200" : content = deMinimis(false, "(100/1280)", null, null, null, null, true); name = filename; break;
case "save1500" : content = deMinimis(false, "(100/1536)", null, null, null, null, true); name = filename; break;
case "save1800" : content = deMinimis(false, "(100/2000)", null, null, null, null, true); name = filename; break;

case "coin77155" : content = deMinimis(false, lastFactor, null, null, null, null, true); name = filename; break;
}

name = name + ".html";

  const data = `text/plain:${name}:data:text/plain;base64,${btoa(content)}`;
  e.dataTransfer.setData('DownloadURL', data);
});

document.body.addEventListener('dragend', (e) => {
dragging = false;
});
