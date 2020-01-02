let grid = document.getElementById("grid");
let colourState = false;
let gridSize = 16;
let cMode = document.querySelector("cMode");
let resetBtn = document.getElementById("reset");

function changeType() {
    colourState = !colourState;
}

resetBtn.addEventListener("click", () => {
    resetGrid();
    makeGrid(getGridSize());
});

function makeGrid(gridSize) {
    for (let i = 1; i <= gridSize * gridSize; i++) {
        let grids = document.createElement('div');
        grids.classList.add("grids");
        grids.style.width = 100 / gridSize + "%";
        grids.style.height = 100 / gridSize + "%";
        grid.appendChild(grids);
    }
    colouredGrid();
}

function colouredGrid() {
    let grids = document.querySelectorAll(".grids");
    let alteredGrid = function (e) {
        if (colourState == true) {
            let r = Math.round(Math.random() * 255);
            let g = Math.round(Math.random() * 255);
            let b = Math.round(Math.random() * 255);
            let rColour = `rgb(${r}, ${g}, ${b})`;
            console.log(rColour);
            e.target.style.backgroundColor = rColour;
            cMode.style.backgroundColor = "#fff";
            cMode.style.color = "#1A1A1D"
            cMode.innerHTML = "Colour Mode ON"

        } else {
            e.target.style.backgroundColor = "#000000";
            cMode.style.backroundcolor = "#86c232";
            cMode.style.color = "#fff";
            cMode.innerHTML = "Colour Mode OFF";
        }
    };

    grids.forEach(grids => {
        grids.addEventListener("mouseover", alteredGrid);
        grids.addEventListener("touchstart", alteredGrid);
    });
}

function getGridSize() {
    gridSize = prompt("Enter Grid Size:", 16);
    if (gridSize > 64) {
        alert("TOO BIG. Creating 16 x 16 grid");
        makeGrid(16);
    }
    else {
        return gridSize;
    }
}

function resetGrid() {
    while (grid.firstChild) grid.removeChild(grid.firstChild);
}

makeGrid(gridSize);