let cell = document.getElementById("cell");
let colourState = false;
let opaqueGrid = false;
let gridSize = 16;
let resetBtn = document.getElementById("reset");

function changeType() {
    let cMode = document.querySelector("cMode");
    colourState = true;
}

function originalType() {
    let oMode = document.getElementById("oMode");
    colourState = false;
}

function lightType() {
    let oMode = document.getElementById("lMode");
    opaqueGrid = true;
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
        cell.appendChild(grids);
    }
    originalGrid();
    colouredGrid();
    lighterGrid();
}

function lighterGrid() {
    let grids = document.querySelectorAll(".grids");
    let lightGrid = function (e) {
        if (opaqueGrid == true){
            if (e.target.style.opacity < "1"){
                e.target.style.opacity -= "-0.1";
            }
        }
    };
    grids.forEach(grids => {
        grids.addEventListener("mouseover", lightGrid);
        grids.addEventListener("touchstart", lightGrid);
    });
}

function originalGrid() {
    let grids = document.querySelectorAll(".grids");
    let darkGrid = function (e) {
        if (colourState == false) {
            e.target.style.backgroundColor = "#000000";
        }
    };
    grids.forEach(grids => {
        grids.addEventListener("mouseover", darkGrid);
        grids.addEventListener("touchstart", darkGrid);
    });
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
    else if (gridSize < 16){
        alert("too small. Creating 16 x 16 grid");
        makeGrid(16);
    }
    else {
        return gridSize;
    }
}

function resetGrid() {
    while (cell.firstChild) cell.removeChild(cell.firstChild);
    colourState = false;
    opaqueGrid = false;
}

makeGrid(gridSize);