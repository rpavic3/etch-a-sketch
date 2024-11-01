const cont = document.querySelector(".container")


for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.classList.add("square")
    cont.appendChild(square)
}

const squares = document.querySelectorAll(".square")


squares.forEach(square => {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black"
    })
    
});