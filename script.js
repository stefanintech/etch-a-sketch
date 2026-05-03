const container = document.querySelector("#container");

function createBox(num) {
    let size = 960 / Math.sqrt(num)
    for (let index = 0; index < num; index++) {
        const div = document.createElement("div");
        div.style.width = size + "px"
        div.style.height = size + "px"
        div.classList.toggle("box")
        container.appendChild(div)
    }
}

createBox(256);