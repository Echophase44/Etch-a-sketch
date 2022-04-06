const test = document.querySelector(".test");
const grid = document.querySelector(".grid");


function makeGrid(size){
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++){
        const gridCell = document.createElement('div');
        gridCell.classList.add("cell");
        grid.appendChild(gridCell);
    };
}

function reset(){
    while(grid.hasChildNodes()){
        grid.removeChild(grid.firstChild);
    }
}

test.addEventListener("click", () => {
    reset()
    makeGrid(16);
    console.log(grid)
});

//const cell = document.querySelector(".cell")
        
//        cell.addEventListener("mousedown", () => {
 //           cell.style.backgroundColor = "black";

window.onload = makeGrid(16);