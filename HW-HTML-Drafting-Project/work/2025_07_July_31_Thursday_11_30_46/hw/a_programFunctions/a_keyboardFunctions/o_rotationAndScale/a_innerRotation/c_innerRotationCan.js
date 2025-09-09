/* downgraded to a mere flip, this because it was much easier.
HTML is clearly not designed with rotations and scaling being easy.
After a rotation is applied, the "origin of the part" effects subsequent
movements in edge-extend which seems very unnatural and weird.
*/

function innerRotationCan() {

if (coinFocus!=null) {

const rotationCanvas  = document.createElement('canvas');

rotationCanvas.width  = parseInt(coinFocus.style.width);
rotationCanvas.height = parseInt(coinFocus.style.height);


const ctx = rotationCanvas.getContext('2d');

ctx.drawImage(coinFocus.lastElementChild, 0, 0, coinFocus.style.width, coinFocus.style.height);

ctx.rotate(Math.PI/2);

coinFocus.img.src = rotationCanvas.toDataURL("image/png");

} else {
return (1);
}

}
