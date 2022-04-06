const test = document.querySelector(".test");
const grid = document.querySelector(".grid");


function makeGrid(size){
    for (let i = 0; i < size * size; i++){
        const gridCell = document.createElement('div');
        gridCell.classList.add("cell");
        grid.appendChild(gridCell);
        
    }
}

test.addEventListener("click", () => {
    makeGrid(10);
    console.log(grid)
});