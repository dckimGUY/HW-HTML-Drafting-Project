hw.b_specials = {};
hw.b_specials.a_info = "This is where custom commands can be brought in for easy access, and GUI construction.";
hw.b_specials.b_prepareButton = function() {
if (coinFocus!=null) {

coinFocus.anchor.style.zIndex = "0";
coinFocus.button.style.display = "block";
coinFocus.button.innerText = "input to button";

}
}