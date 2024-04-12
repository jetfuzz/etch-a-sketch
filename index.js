function createGrid(rows, columns) {
    const container = document.getElementById("container");

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
}

createGrid(16, 16);

document.querySelectorAll(".cell").forEach(cell => {
    cell.addEventListener("mouseover", function () {
        cell.style.backgroundColor = "black";
    })
})