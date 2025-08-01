const customPromptBox   = document.createElement("div");
const customPromptMessageArea = document.createElement("div");
const customPromptEntryField  = document.createElement("textarea");

customPromptMessageArea.style=`width:100%;height:20%;background-color:rgba(0,0,0,0.75);color:lime;fontSize:24px;`;
customPromptEntryField.style=`width:100%;height:20%;background-color:rgba(0,0,0,0.75);color:#DEFF1C;fontSize:16px;`;
customPromptBox.style=`position:fixed;left:0px;top:0px;width:100%;height:100%;`;
customPromptBox.appendChild(customPromptMessageArea);
customPromptBox.appendChild(customPromptEntryField);



function customPrompt(message, defaultValue) {
customPromptMessageArea.innerText = message;
customPromptEntryField.innerHTML  = defaultValue;
document.body.appendChild(customPromptBox);
customPromptEntryField.focus();



if (customPromptEntryField.value.endsWith("\n")) {
coinFocus.lastElementChild.firstElementChild.nextElementSibling.backgroundColor = customPromptEntryField.value;
customPromptBox.remove();
};



return (1);
}
