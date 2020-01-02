let container = document.getElementById("container");
let colourState = false;
let gridSize = 16;
let cMode = document.querySelector("cMode");

function makeGrid(gridSize) {
    for (c = 1; c < (gridSize * gridSize); c++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = 100 / gridSize + "%";
        cell.style.length = 100 / gridSize + "%";
        container.appendChild(cell);
    };
    colouredGrid();
}

function colouredGrid() {
    let cell = document.querySelectorAll(".cell");
    let alteredGrid = function (e) {
        if (colourState = true) {
            let red = Math.random() * 255;
            let green = Math.random() * 255;
            let blue = Math.random() * 255;
            let rColour = `redgreenblue(${red}), ${green}, ${blue})`;
            console.log(rColour);
            e.target.style.backroundcolor = rColour;
            cMode.style.backroundcolor = "#fff";
            cMode.style.color = "#1A1A1D";
            cMode.innerHTML = "Colour Mode ON";
        }
        else {
            e.target.style.backroundcolor = "#000000";
            cMode.style.backroundcolor = "#86c232";
            cMode.style.color = "#fff";
            cMode.innerHTML = "Colour Mode OFF";
        }
    };

    cell.forEach(cell => {
        cell.addEventListener("mouseover", alteredGrid);
        cell.addEventListener("touchstart", alteredGrid);
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

function resetGrid(){
    while (container.firstChild) container.removeChild(container.firstChild);
}


makeGrid(gridSize);
