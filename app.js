const gridNum = document.getElementById("grid-num");
const submit = document.getElementById("user-submit")
const mode = document.getElementById("mode-status")
const board = document.querySelector(".board")
let error = document.querySelector(".error");
let color = "black";
let click = true;
// board.addEventListener("mouseenter", drawGrid)

function drawGrid(size) {
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement("div");
        square.addEventListener("mouseover", colorSquare)
        square.style.backgroundColor = "white";
        // board.insertAdjacentElement("beforeend",square)
        board.append(square);
    }
}

drawGrid();

function changeSize(input) {
    if (input >= 2 && input <=101) {
        error.style.display = "none"
        drawGrid(input)
    } else {

        error.style.display = "flex"
    }
}


function colorSquare() {
    if (click) {
        if (color === "random") {
            this.style.backgroundColor = `hsl(${Math.random() *300} ,100% ,50%)`;
        } else {
            this.style.backgroundColor = color;
        }
    }

}

function changeColor(choice) {
    color = choice;
}

function reset() {
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
}

document.querySelector('body').addEventListener("click", (e) => {
    if (e.target.tagName != "BUTTON") {
        click = !click;
        if (click) {
            mode.textContent = "Mode: Coloring"
        } else {
            mode.textContent = "Mode: Not Coloring"
        }
    }
})