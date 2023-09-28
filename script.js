//** CREATE THE GRID **/


//declare number of squares per side
let squareNumber = document.getElementById('numberChosen').value;

//let squareNumber = 32;

//get container
const container = document.getElementById('container');

function createGrid(squareNumber){
    clearGrid();
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

};
function clearGrid(){
    
    while (container.hasChildNodes()){
        container.removeChild(container.firstChild);
    };
};

createGrid(squareNumber);


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

/*
let numberChosen = document.getElementById("numberChosen");

numberChosen.addEventListener('keydown', changeSide);
function changeSide(e){
    if (e.key === "Enter"){
        squareNumber = numberChosen.value;
        createGrid(squareNumber);
    };
    
};
*/

//------CLEAR BUTTON------//
 let clearBtn = document.getElementById('clearBtn');

 clearBtn.addEventListener('click', erase);
 
 function erase(e){
    let colArrayDiv = document.getElementsByClassName('column');
    
    for (let i=0; i<colArrayDiv.length; i++){
        colArrayDiv[i].style.backgroundColor = 'rgb(176, 243, 167)';
    };
 };










