const SET_SQUARES = document.querySelector('.setSquare');
const RESET_COLOR = document.querySelector('.reset');
const RANDOM_COLOR = document.querySelector('.random');
const DEFAULT_COLOR = document.querySelector('.default');
const ERASE_BOARD = document.querySelector('.eraser');
const GRAY_SCALE = document.querySelector('.gray');
const squareContainer = document.querySelector('.squareContainer');

let newColor = 0


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
        square.style.opacity= 0
        
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
    //const colors = ['red' ,'blue', 'yellow']
    RANDOM_COLOR.addEventListener('click', ()=>{
        squares.forEach(square => square.addEventListener('mouseover', (e) =>{
            square.style.backgroundColor =  getRandomColor();
            
        }))
    })
}
useRandomColor();

function darkenEachColor(){
GRAY_SCALE.addEventListener('click', ()=>{
    squares.forEach(square => square.addEventListener('mouseover', (e) =>{
        if(true){
            console.log(e.target)
            e.target.style.backgroundColor = `rgb(0,0,0, ${newColor})`;
            newColor +=.1;
            e.target.style.opacity += .1;
    }
    }))
})

//return newColor;
    
}
darkenEachColor();
//function setNumOfSquares(){
    //SET_SQUARES.addEventListener('click', ()=>{
        //userInput();
    //})
//}
//setNumOfSquares();

/*
Ok, I think I got it.
Do you know what is a dataset?

https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset Here you can find info about what is a dataset.

When you create the grid, you could add a dataset to each square, lets say opacity and it's value could be 0
Later on your function greyScale you could read the dataset opacity of the target. And based in the dataset you redefine it by adding 0.1, 
so after the mouseover the square your dataset will be of 0.2. You can use that value to modify the rgba value.

A dataset is a custom attribute, and its values will be converted to strings, so be care when you manipulate it.

You can add the dataset when you create each square, or you can add it when you hover the square. But if you do the last one, 
in the first hover you will add the dataset (because before it didn't exist), and I think it will be more correct if you already start with the dataset.

Thanks!

Another thing I noticed, is that you have the function darkenEachColor() which contains an eventListener, and then you have another function called greyScale() 
and it also contains another eventListener, but inside the last one you are calling darkenEachColor(). 
Basically you are putting two times an eventListener on the same element.

You too!
*/

