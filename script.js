const container = document.querySelector("#container");

function createBox(num) {
    for (let index = 0; index < num; index++) {
        const div = document.createElement("div");
        div.classList = "box"
        container.appendChild(div)
    }
}

createBox(16);