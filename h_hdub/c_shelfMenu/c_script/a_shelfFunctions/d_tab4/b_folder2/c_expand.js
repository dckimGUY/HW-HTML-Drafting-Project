/* USE await expand(str) */
async function expand(str) {
const bytes  = Uint8Array.from(atob(str), c => c.charCodeAt(0));
const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
return await new Response(stream).text();
}