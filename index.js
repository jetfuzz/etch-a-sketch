const container = document.getElementById("container");
const smallBtn = document.getElementById("smallBtn");
const mediumBtn = document.getElementById("mediumBtn");
const largeBtn = document.getElementById("largeBtn");

function createGrid(rows, columns) {
    container.innerHTML = "";
    for (let i = 0; i < rows; i++) {
        let row = document.createElement("div");
        row.className = "row";
        container.appendChild(row);

        for (let j = 0; j < columns; j++) {
            let div = document.createElement("div");
            div.className = "cell";
            row.appendChild(div);
        }
    }
    document.querySelectorAll(".cell").forEach(cell => {
        cell.addEventListener("mouseover", function () {
            cell.style.backgroundColor = "black";
        })
    })
}

createGrid(32, 32);

function newGrid() {
    smallBtn.addEventListener("click", () => {
        createGrid(16, 16);
    })
    mediumBtn.addEventListener("click", () => {
        createGrid(32, 32);
    })
    largeBtn.addEventListener("click", () => {
        createGrid(64, 64);
    })
}

newGrid();