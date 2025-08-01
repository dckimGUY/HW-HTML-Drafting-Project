function writeInfoToFace() {
if (coinFocus!=null) {

if (coinFocus.firstElementChild.innerHTML.toString().includes("<pre>")) {
coinFocus.firstElementChild.innerHTML = "";
readCoins();
} else {
coinFocus.firstElementChild.innerHTML = 
`
<pre>
    id: ${coinFocus.id};
jsName: ${coinFocus.dataset.jsName};
  href: ${coinFocus.dataset.linkText};

  left: ${coinFocus.style.left};
   top: ${coinFocus.style.left};
 width: ${coinFocus.style.width};
height: ${coinFocus.style.height};

img.src: ${coinFocus.lastElementChild.lastElementChild.src};

dataset.dragPull: ${coinFocus.dataset.dragPull};
</pre>
`;
}


}
}
