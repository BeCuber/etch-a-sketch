//get container
const container = document.getElementById('container');

//get input textbox
let numberChosen = document.getElementById('numberChosen');

//declare number of squares per side by default 
let squareNumber = numberChosen.value;

//create a Grid by default
createGrid(squareNumber);

//------HANDLING INPUT------//

//change color if value invalid
numberChosen.addEventListener('keyup', validation);

function validation(){
    
    squareNumber = numberChosen.value;

    if (squareNumber > 0 && squareNumber <= 100){
        numberChosen.style.color = "black";
        
    }else{
        numberChosen.style.color = "red";
    };
};


//run changeSide if && value is valid
numberChosen.addEventListener('keydown', changeSide);

function changeSide(e){

    squareNumber = numberChosen.value;
    if (e.key == "Enter" && squareNumber > 0 && squareNumber <= 100){
        
        createGrid(squareNumber); //create a new grid
        
    }; 
};


//** CREATE THE GRID **/


function createGrid(squareNumber){

    //clear Grid to let container get the new div,s

    while (container.hasChildNodes()){
        container.removeChild(container.firstChild);
    };

    //create an array to store div,s for the first row

    let rowArrayDiv = [];

    for (let i = 0; i<squareNumber; i++){
        let rowDiv = document.createElement('div'); //create 1 div
        rowDiv.className = 'row'; //add classes to each div
        rowDiv.id = [i]; //add id to each div
        rowArrayDiv.push(rowDiv); //add each div to the array
    };

    //appends each item from row array inside the container

    for (let i = 0; i<rowArrayDiv.length; i++){
        container.appendChild(rowArrayDiv[i]);

        //create an array with same length as row-array for each row-div
        let colArrayDiv = [];
        for (let k=0; k<rowArrayDiv.length; k++){
            let colDiv = document.createElement('div');
            colDiv.className = 'column'; //add 'column' class to every square
            colArrayDiv.push(colDiv);//got array of arrays
        };
        
        //get items from row-array    
        let firstDiv = document.getElementById([i]);
        //append each col-array to each row-div
        for (let j=0; j<rowArrayDiv.length; j++){
            firstDiv.appendChild(colArrayDiv[j]);
        };
    };

    //add paint function to the grid
    paint();
};


//------MOUSE PAINTING------//

function paint(){
    let squareTarget = document.getElementsByClassName('column');

    for (let i=0; i<squareTarget.length; i++){
        squareTarget[i].addEventListener('mouseover', changeColor);
    };

    function changeColor(e){
        e.target.style.backgroundColor = 'green';
    };
};



//------CLEAR BUTTON------//

let clearBtn = document.getElementById('clearBtn');

clearBtn.addEventListener('click', erase);
 
function erase(){
   let colArrayDiv = document.getElementsByClassName('column');
    
   for (let i=0; i<colArrayDiv.length; i++){
       colArrayDiv[i].style.backgroundColor = 'rgb(176, 243, 167)';
   };
};


