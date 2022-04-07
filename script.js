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
    modifyCell();
    console.log(grid)
});

function modifyCell(){
    const cell = document.querySelectorAll(".cell");

    for (let i = 0; i < cell.length; i++){
        cell[i].addEventListener("mouseover", () => {
        cell[i].style.backgroundColor = "black";
     })
    }
};

window.onload = makeGrid(16);

/*TODO
-move EventListener to grid creation
-Set default settings on page load
-Set value output for slider and link with grid creation
-create handler for color selection
    -add "rainbow" selection
-Set "reset" button to remake grid based on slider value
-Add some CSS, make this pig look pretty
*/