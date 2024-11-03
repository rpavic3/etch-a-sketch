const cont = document.querySelector(".container")
const button = document.createElement("button")
button.textContent = "Set square number per row"
button.classList = "clickMe"
document.body.prepend(button)


button.addEventListener("click", () => {
    let num = parseInt(prompt("How many squares do you want per row?"))
    createGrid(num)
})

function createGrid(num) {
    cont.textContent = ""

    let squareSize = 700 / num

    for (let i = 0; i < num*num; i++) {
        const square = document.createElement("div");
        square.classList.add("square")
        square.style.height = `${squareSize}px`
        square.style.width = `${squareSize}px`
        cont.appendChild(square)
        const squares = document.querySelectorAll(".square")



        
    }
    
}


for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.classList.add("square")
    cont.appendChild(square)
}

const squares = document.querySelectorAll(".square")



cont.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("square")) {  // "Are you trying to enter a room?"
        e.target.style.backgroundColor = "black";
    }
});
