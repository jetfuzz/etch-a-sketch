const container = document.getElementById("container");
const buttons = document.querySelectorAll(".button")

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });


function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function gridColor() {
    document.querySelectorAll(".cell").forEach(cell => {
        cell.addEventListener("mouseover", function () {
            cell.style.backgroundColor = "black";
        })
    })
    rgbBtn.addEventListener("click", () => {
        document.querySelectorAll(".cell").forEach(cell => {
            cell.addEventListener("mouseover", function () {
                cell.style.backgroundColor = getRandomColor();
            })
        })
    })
    defaultBtn.addEventListener("click", () => {
        document.querySelectorAll(".cell").forEach(cell => {
            cell.addEventListener("mouseover", function () {
                cell.style.backgroundColor = "black";
            })
        })
    })
    eraseBtn.addEventListener("click", () => {
        document.querySelectorAll(".cell").forEach(cell => {
            cell.addEventListener("mouseover", function () {
                cell.style.backgroundColor = "white";
            })
        })
    })
}

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
    gridColor()
}

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

createGrid(32, 32);
newGrid();
buttonStyle();