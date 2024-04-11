const container = document.getElementById("container");

function createGrid() {
    for(let i = 0; i < 256; i++) {
        let div = document.createElement("div");
        div.style.width = "25px";
        div.style.height = "25px";
        div.style.border = "solid black";
        div.style.borderRadius = "4px"
        container.appendChild(div);
    }
}

createGrid(container);