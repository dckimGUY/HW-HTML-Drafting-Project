function externalLink() {
if (coinFocus!=null) {
let result = null;
result = prompt("enter external link url (i.e. 'https://____.com') OR internal link for an item in the page using its id (i.e. '#idname'): ", coinFocus.firstElementChild.href);
if (result!=null) {

coinFocus.firstElementChild.setAttribute("href", result);
coinFocus.dataset.linkText = result.toString();

if (coinFocus.firstElementChild.href.startsWith("#")) {
coinFocus.firstElementChild.target = "";
} else {
coinFocus.firstElementChild.target = "_blank";
}


}
}
}
