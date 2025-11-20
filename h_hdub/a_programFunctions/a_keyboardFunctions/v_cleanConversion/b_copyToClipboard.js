function copyToClipboard(string) {
try {
navigator.clipboard.writeText(string);
} catch {
const d = document;
const x = d.body.appendChild(d.createElement("textarea"));
x.value = string;
x.select();
d.execCommand("copy");
x.remove();
}
}
