
const container = document.getElementById('container');



//crear 16 div's
let newArrayDiv = [];
for (let i = 0; i<16; i++){
    let newDiv = document.createElement('div');
    newDiv.className = 'square'
    newDiv.id = [i]; //posiblemente innecesario que tengan un id
    newArrayDiv.push(newDiv);
};

for (let i = 0; i<newArrayDiv.length; i++){
    container.appendChild(newArrayDiv[i]);
};

console.log(newArrayDiv);

console.log(container);
