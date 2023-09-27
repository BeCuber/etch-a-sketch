//** CREATE THE GRID **/


//declare number of squares per side
let squareNumber = 16;

//get container
const container = document.getElementById('container');

//create an array to store 16 div for the first row
let rowArrayDiv = [];

for (let i = 0; i<squareNumber; i++){
    let rowDiv = document.createElement('div'); //create 1 div
    rowDiv.className = 'square row'; //add classes to each div
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
        colDiv.className = 'square column';
        colArrayDiv.push(colDiv);
    };
    
    //get items from row-array    
    let firstDiv = document.getElementById([i]);
    //append each col-array to each row-div
    for (let j=0; j<rowArrayDiv.length; j++){
        firstDiv.appendChild(colArrayDiv[j]);
    };

};


//**  **/
















