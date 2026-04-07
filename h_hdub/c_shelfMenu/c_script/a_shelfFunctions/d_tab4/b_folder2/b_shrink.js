/* USE await shrink(str) */
async function shrink(str) {
const s = new Blob([str]).stream().pipeThrough(new CompressionStream('gzip'));
const b = await new Response(s).arrayBuffer();
return btoa(String.fromCharCode(...new Uint8Array(b)));
}