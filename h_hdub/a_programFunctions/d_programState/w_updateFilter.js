function updateFilter(value) {


let newFilter = `brightness(${document.getElementById("filterBrightness").value}) contrast(${document.getElementById("filterContrast").value}) saturate(${document.getElementById("filterIntensity").value}) grayscale(${document.getElementById("filterGrayscale").value}) sepia(${document.getElementById("filterAntique").value}) invert(${document.getElementById("filterInvert").value}) opacity(${document.getElementById("filterOpacity").value}) blur(${document.getElementById("filterBlur").value}px)`;

if (document.getElementById("filterBlur").value == 0) {
newFilter = `brightness(${document.getElementById("filterBrightness").value}) contrast(${document.getElementById("filterContrast").value}) saturate(${document.getElementById("filterIntensity").value}) grayscale(${document.getElementById("filterGrayscale").value}) sepia(${document.getElementById("filterAntique").value}) invert(${document.getElementById("filterInvert").value}) opacity(${document.getElementById("filterOpacity").value})`;
}


if (value == "set") {
if (coinFocus != null) {
coinFocus.style.filter = newFilter;
}
return 0;
}


if (value == "drop") {
insertNewCoin([null,78,78]);
coinFocus.style.backdropFilter = newFilter;
redraw();
return 0;
}


if (value == "reset") {
coinFocus.style.filter = "none";
coinFocus.style.backdropFilter = "none";
document.getElementById("filterBrightness").value = "1";
document.getElementById("filterContrast").value   = "1";
document.getElementById("filterIntensity").value  = "1";
document.getElementById("filterGrayscale").value  = "0";
document.getElementById("filterAntique").value    = "0";
document.getElementById("filterInvert").value     = "0";
document.getElementById("filterBlur").value       = "0";
document.getElementById("filterOpacity").value    = "1";
if (coinFocus != null) { coinFocus.filter = "none"; }
return 0;
}


if (coinFocus == null) return 0;

if (coinFocus.style.backdropFilter != "none") {
coinFocus.style.backdropFilter = newFilter;
} else {
coinFocus.style.filter = newFilter;
}

document.getElementById("filterBrightness").title = document.getElementById("filterBrightness").value;
document.getElementById("filterContrast").title   = document.getElementById("filterContrast").value;
document.getElementById("filterIntensity").title  = document.getElementById("filterIntensity").value;
document.getElementById("filterGrayscale").title  = document.getElementById("filterGrayscale").value;
document.getElementById("filterAntique").title    = document.getElementById("filterAntique").value;
document.getElementById("filterInvert").title     = document.getElementById("filterInvert").value;
document.getElementById("filterBlur").title       = document.getElementById("filterBlur").value;
document.getElementById("filterOpacity").title    = document.getElementById("filterOpacity").value;

return 0;
}