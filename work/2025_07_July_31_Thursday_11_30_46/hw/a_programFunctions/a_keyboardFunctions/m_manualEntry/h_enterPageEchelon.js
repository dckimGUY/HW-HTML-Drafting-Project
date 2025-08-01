function enterPageEchelon() {

let result = null;



result = prompt(
`
Enter Page Echelon for Z-Index:

(This helps to keep separation
when you begin to put pages
together in ways which overlap.)

 `, pageEchelon / 100000000);
if (result!=null) {
for (let j = 0; j < 22; j++) {
if (result==j) {
pageEchelon = result * 100000000;

topLayer[topLayer.a_currentLayer].echelon = result;

Z();


}

}
}

}
