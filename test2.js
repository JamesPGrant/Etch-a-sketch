const SET_SQUARES = document.querySelector('.setSquare');
const RESET_COLOR = document.querySelector('.reset');
const RANDOM_COLOR = document.querySelector('.random');
const DEFAULT_COLOR = document.querySelector('.default');
const ERASE_BOARD = document.querySelector('.eraser');
const squareContainer = document.querySelector('.squareContainer');
const square = document.createElement('div')
square.classList.add('squares');



function userInput (){
    let prompt = window.prompt("Enter the amount of squares you want to see!: ")
    let number = parseInt(prompt);
    return number;  

    
}

const NUMBER_OF_SQUARES = userInput();

//number input is amount of squares generated
for(let i = 0; i < NUMBER_OF_SQUARES; i++){
    squareContainer.appendChild(square.cloneNode(true));
    
    }


squares = document.querySelectorAll('.squares')
//for each square created when hovered over will color the square
squares.forEach(square => square.addEventListener('mouseover', (e) => {
    square.style = 'background-color:black;';
}))

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
//function setNumOfSquares(){
    //SET_SQUARES.addEventListener('click', ()=>{
        //userInput();
    //})
//}
//setNumOfSquares();