const SET_SQUARES = document.querySelector('.setSquare');
const RESET_COLOR = document.querySelector('.reset');
const RANDOM_COLOR = document.querySelector('.random');
const DEFAULT_COLOR = document.querySelector('.default');
const ERASE_BOARD = document.querySelector('.eraser');
const GRAY_SCALE = document.querySelector('.gray');
const squareContainer = document.querySelector('.squareContainer');

function userInput (){
    let prompt = window.prompt("Enter the amount of squares you want to see!: ")
    let number = parseInt(prompt);
    return number;  

    
}
const size = userInput();
function sizeGrid(size){
    squareContainer.style.gridTemplateColumns =`repeat(${size}, 1fr)`
    squareContainer.style.gridTemplateRows =`repeat(${size}, 1fr)`
    let NUMBER_OF_SQUARES = size * size;
    for(let i = 0; i < NUMBER_OF_SQUARES; i++){
        const square = document.createElement('div');
        square.classList.add('squares');
        squareContainer.insertAdjacentElement("beforeend", square);
        
        }
    }
sizeGrid(size)
    



//number input is amount of squares generated

squares = document.querySelectorAll('.squares')
//for each square created when hovered over will color the square
squares.forEach(square => square.addEventListener('mouseover', (e) => {
    square.style = 'background-color:black;';
}))


//reloads the page
SET_SQUARES.addEventListener('click', ()=>{
    window.location.reload();
})

//resets the color back to white upon click
function resetColor(){
    RESET_COLOR.addEventListener('click', ()=>{
        squares.forEach(square => {
            square.style = "background-color: white;"
        })
    })

}
resetColor();

//returns back to default color
function defaultColor(){
    DEFAULT_COLOR.addEventListener('click', () =>{
        squares.forEach(square => square.addEventListener('mouseover', () =>{
            square.style = `background-color: black;`
        }))
    })
}
defaultColor();

//turns color white
function eraseEtch(){
    ERASE_BOARD.addEventListener('click', () =>{
        squares.forEach(square => square.addEventListener('mouseover', () =>{
            square.style = `background-color: white;`
        }))
    })
}
eraseEtch();

//takes string of random letters and numbers that are HEX coded and returns a random color
function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random()* 16)];
    }
    return color.toLowerCase();
}

function useRandomColor(){
    const colors = ['red' ,'blue', 'yellow']
    RANDOM_COLOR.addEventListener('click', ()=>{
        squares.forEach(square => square.addEventListener('mouseover', () =>{
            square.style.backgroundColor =  getRandomColor();
        }))
    })
}
useRandomColor();

function greyScale(){
    GRAY_SCALE.addEventListener('click', ()=>{
        squares.forEach(square => square.addEventListener('mouseover', () =>{
            square.style = `background-color: gray;`
        }))
    })
}
greyScale();
//function setNumOfSquares(){
    //SET_SQUARES.addEventListener('click', ()=>{
        //userInput();
    //})
//}
//setNumOfSquares();