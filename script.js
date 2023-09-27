
const container = document.getElementById('container');



//crear 16 div's, se almacenan en un array
let rowArrayDiv = [];
for (let i = 0; i<16; i++){
    let rowDiv = document.createElement('div');
    rowDiv.className = 'row';
    rowDiv.id = [i]; //posiblemente innecesario que tengan un id
    rowArrayDiv.push(rowDiv);
};

//se anexan los elementos del array en el container

for (let i = 0; i<rowArrayDiv.length; i++){
    container.appendChild(rowArrayDiv[i]);
};
console.log(container);//borrable

//crear 16 div en el primero del anterior
let firstDiv = document.getElementById("0");

let colArrayDiv = [];
for (let i=0; i<16; i++){
    let colDiv = document.createElement('div');
    colDiv.className = 'column';
    colArrayDiv.push(colDiv);
};

console.log(rowArrayDiv);//borrable
console.log(colArrayDiv); //borrable

for (let i=0; i<colArrayDiv.length; i++){
    firstDiv.appendChild(colArrayDiv[i]);
};
console.log(firstDiv);




