function openTextareaInNewWindow() {


const textareaSetupReference = `
<!DOCTYPE html>
<head>
<meta charset="UTF-8">
<style>
html, body              { overflow: scroll; scrollbar-width: none;               }
body                    { font-family: monospace; width: 98%; height: 98%;       }
body                    { background-color: lightgrey;                           }
body::-webkit-scrollbar { display: none;                                         }
.textualInputs {
border: none;
margin: none;
padding: 6px;
background-color: white;
color: black;
border: 4px dashed black;
width: 98%;
height: 1024px;
font-size: 24px;
resize: vertical;
}
</style>
<title>textarea and links</title>
</head>
<body>

<div style="width: 98%; height: 128px; overflow: auto; background-color: lightgrey; font-size: 24px;">
<div>
<p>The following is a reference to the basic element structure of this program.</p>
<p>This syntax must be used to access the properties of the element.</p>
<p>Drag the completed values onto the element.</p>
<p>By holding "shift", the entire group will get the inputs.</p>
<p>Multiple inputs can be used can be used.</p>
<p>The following statements must be completed with: = " ";</p>
<p>Of course, you will need to input the property name, very much like you would do in the text editor.</p>
<p>After that put a newline character by pressing enter.</p>
<p>The most commmon one that will be accessed is "div.style." or "div.innerHTML"</p>
<p>Finish by dragging the selected text onto the element.</p>
<p>Assalamu Alaikum.</p>
</div>
</div>

<textarea class="textualInputs" style="height: 256px;" readOnly>
/*** An Important One ***/
/* This will set what is being dragged out of the element. */
/* Multiple statements are allowed, shift goes to an entire group. */

dataset.dragPull=" ";



/* The outermost */
style=
style.
dataset.
(other)



/* The anchor colouration, etc. */
anchor.
anchor.style=
anchor.style.
anchor.dataset.



/* The wrapper of the important parts. */
main.
main.style=
main.style.
main.dataset.



/* A button, just in case you like those. */
button.
button.style=
button.style.
button.dataset.



/* The entry point for semantic HTML. */
div.
div.style=
div.style.
div.dataset.



/* The part that images go into. */
img.
img.style=
img.style.
img.dataset.



/* Here is a complete working example. */
/* No space is allowed between the commas. */

dataset.dragPull="div.style.backgroundColor,div.style.color,div.style.borderRadius,div.style.padding,div.innerText";
div.style.backgroundColor="white";
div.style.color="grey";
div.style.borderRadius="24px";
div.style.padding="32px";
div.innerText="BIRDS!";

</textarea>
<textarea class="textualInputs">




































































</textarea>

</body>
</html>
`;


const textWindow = window.open("","_blank",`height=${window.innerHeight},width=${window.innerWidth},top=${window.screenTop},left=${window.screenLeft},resizable=yes,noopener=no`);
textWindow.document.write(textareaSetupReference);

}
