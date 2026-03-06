function flipTheBuffers() {
let swapBuffer = Array.from(singleRestoreBuffer.value);

singleRestoreBuffer.value = Array.from(singlePasteBuffer.value);
singlePasteBuffer.value = swapBuffer;

buzzWord(2,"flip X and R buffers",64,document.getElementById("coin72275").value,1000,400,100,"bottom",window.scrollX + window.innerWidth / 2,window.scrollY + window.innerHeight - 32);

}
