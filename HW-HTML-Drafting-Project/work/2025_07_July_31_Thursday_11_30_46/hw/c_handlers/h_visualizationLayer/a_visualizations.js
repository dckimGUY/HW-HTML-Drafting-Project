var visualizationsLayer; visualizationsLayer = document.getElementById("visualizationsLayer");
/* Initialize the visualizations canvas element. */
const Vis=document.createElement("canvas");
{
const s=`position:fixed;left:0;top:0;pointer-events:none; border:none;`;
Vis.style=s;
Vis.style.opacity=1; //formerly K
}

visualizationsLayer.appendChild(Vis);


Vis.width=window.innerWidth;
Vis.height=window.innerHeight;


function redraw(element){
/*

const zArray = Array.from(utilityLayer0.children);
const zStack = zArray.map(el => ({ id: el, z: parseInt(getComputedStyle(el).zIndex) || 0 })).sort((a, b) => a.z -b.z);
console.log(zStack);



if (utilityLayer0.children.length>0) {


for(let j=0; j < utilityLayer0.children.length; j++){

let target = utilityLayer0.children[j];

if (target == element) {

Y.beginPath();


Y=Vis.getContext("2d");
Y.strokeStyle="rgb(255,0,0)";
Y.lineWidth = edgeQ;
Y.strokeStyle = "#DEFF1C";
let deduction = Y.lineWidth;

let l = parseInt(target.style.left) + deduction/2 - window.scrollX;
let t = parseInt(target.style.top) + deduction/2 - window.scrollY;
let w = parseInt(target.style.width) * parseInt(target.dataset.scale) - deduction;
let h = parseInt(target.style.height) * parseInt(target.dataset.scale) - deduction;

Y.rect(l,t,w,h);

Y.stroke();
}

}



}
*/
};


