function createGrid(rows, columns) {
    const container = document.getElementById("container");

    for (let i = 0; i < rows; i++) {
        let row = document.createElement("div");
        row.className = "row";
        container.appendChild(row);

        for (let j = 0; j < columns; j++) {
            let div = document.createElement("div");
            div.className = "cell";
            div.style.width = "25px";
            div.style.height = "25px";
            div.style.border = "2px solid black";
            div.style.margin = "1px";
            row.appendChild(div);
        }
    }
}

createGrid(16, 16);