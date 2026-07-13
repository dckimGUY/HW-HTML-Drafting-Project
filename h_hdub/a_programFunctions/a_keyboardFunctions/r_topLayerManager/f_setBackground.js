var bgImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT/////AP8Aoe7FwsWLOADNfyw0AAAAEHRSTlMA////////////////////wFCLQwAAABtJREFUWIXtwYEAAAAAw6D5U9/gBFUBAAAAfAMQQAAB4reL5AAAAABJRU5ErkJggg==";
const setBackground = () => {
    const img = new Image();
    img.src = topLayer[topLayer.a_currentLayer].backgroundImage;
    img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.globalAlpha = document.getElementById("bodyFade").value;
        ctx.drawImage(img, 0, 0);
        bgImage = canvas.toDataURL();

document.documentElement.style.backgroundImage = `url("${bgImage}")`;

    };
};