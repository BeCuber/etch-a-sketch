//** CREATE THE GRID **/


//declare number of squares per side
let squareNumber = 16;

//get container
const container = document.getElementById('container');

//create an array to store 16 div for the first row
let rowArrayDiv = [];

for (let i = 0; i<squareNumber; i++){
    let rowDiv = document.createElement('div'); //create 1 div
    rowDiv.className = 'row'; //add classes to each div
    rowDiv.id = [i]; //add id to each div
    rowArrayDiv.push(rowDiv);
};

//appends each item from row array inside the container
for (let i = 0; i<rowArrayDiv.length; i++){
    container.appendChild(rowArrayDiv[i]);

    //create an array with same length as row-array for each row-div
    let colArrayDiv = [];
    for (let k=0; k<rowArrayDiv.length; k++){
        let colDiv = document.createElement('div');
        colDiv.className = 'column';
        colArrayDiv.push(colDiv);
    };
    
    //get items from row-array    
    let firstDiv = document.getElementById([i]);
    //append each col-array to each row-div
    for (let j=0; j<rowArrayDiv.length; j++){
        firstDiv.appendChild(colArrayDiv[j]);
    };

};


//** EVENTS LISTENERS **//

//------Mouse Painting------//

let squareTarget = document.getElementsByClassName('column');

for (let i=0; i<squareTarget.length; i++){
    squareTarget[i].addEventListener('mouseover', changeColor);
};

function changeColor(e){
    e.target.style.backgroundColor = 'green';
};

//------Input------//
let numberChosen = document.getElementsByTagName("input");
numberChosen.textContent = "hello";














