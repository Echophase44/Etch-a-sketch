
const reset = document.querySelector(".reset");
const grid = document.querySelector(".grid");
const defaultBrush = document.querySelector(".blkBrush")
const rainbow = document.querySelector(".rainbow")
var slider = document.querySelector(".slider");

let currentBrush = "default";
const defaultGrid = 16;



function makeGrid(size){
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++){
        const gridCell = document.createElement('div');
        gridCell.classList.add("cell");
        gridCell.addEventListener("mouseover", applyColor)
        grid.appendChild(gridCell);
    };
    
}

function removeGrid(){
    while(grid.hasChildNodes()){
        grid.removeChild(grid.firstChild);
    }
}

function applyColor(e){
    if (currentBrush === "default"){
        e.target.style.backgroundColor = "black";
    }
    else if (currentBrush === "rainbowBrush"){
        const r = Math.floor(Math.random() *256);
        const g = Math.floor(Math.random() *256);
        const b = Math.floor(Math.random() *256);
        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
}

rainbow.addEventListener("click", () => {
    currentBrush = "rainbowBrush";
})

defaultBrush.addEventListener("click", () => {
    currentBrush = "default"
})

slider.addEventListener("mouseup", () =>{
    removeGrid()
    makeGrid(`${slider.value}`);
})

reset.addEventListener("click", () => {
    removeGrid()
    makeGrid(`${slider.value}`);
});


window.onload = makeGrid(defaultGrid);

/*TO DO
-Show value of slider in HTML
-Add some CSS, make this pig look pretty
*/