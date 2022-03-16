let color = "black"

function createBoard(size){
    let gridBoard = document.querySelector('.gridBox');
    let squares = gridBoard.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    gridBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridBoard.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    let amount = size * size;
    for(let i =0; i<amount; i++){
        let square = document.createElement('div');
        square.addEventListener('mouseover', chooseColor);
        square.style.backgroundColor ="white";
        gridBoard.insertAdjacentElement('beforeend',square);
    }
}

createBoard(16);

function changeSize(input){
    if(input >= 2 && input <= 100){
        createBoard(input)
    } else{
        console.log("invalid size, please choose from 2-100")
    }
}

function colorChoice(choice){
    color = choice;

}

function chooseColor(){
    if (color === "colorPick"){
        this.style.backgroundColor = document.getElementById('colorPick').value;
    }
    else if (color === "random"){
        this.style.backgroundColor = `hsl(${Math.random() *360}, 100%, 60%)`;
    } else{
        this.style.backgroundColor = color;
    }
}

function resetBoard(){
    let gridBoard = document.querySelector('.gridBox');
    let squares = gridBoard.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = "white");
}
