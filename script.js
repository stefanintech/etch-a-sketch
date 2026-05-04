const container = document.querySelector("#container");
const button = document.querySelector("input");

button.addEventListener("click", promptButton);
let answer



function promptButton() {
    answer = prompt("Enter a number:");
    while ((!/^[0-9]+$/.test(answer)) || (answer > 100 || answer <= 0)) {
        alert("Please only enter a number between 1-100");
        answer = prompt("Enter a number:");
    }
    
    container.textContent = ""
    createBox(answer)

}

function createBox(num) {
    let size = 960 / Math.sqrt(num)
    for (let index = 0; index < num; index++) {
        const div = document.createElement("div");
            div.style.width = size + "px"
            div.style.height = size + "px"
            div.classList.toggle("border")
            div.classList.toggle("box")
            div.addEventListener("mouseover", e => e.target.style.backgroundColor = "green")
            container.appendChild(div)
        }
}

createBox(256);