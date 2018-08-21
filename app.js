let button = document.createElement("button");
let buttText = document.createTextNode("add square")
button.appendChild(buttText)
document.body.appendChild(button)
let boxDiv = document.createElement("div");
boxDiv.className = "flex"
document.body.appendChild(boxDiv)

let boxNumber = 0;
button.addEventListener("click", function () {
    let boxID = boxNumber++
    let box = document.createElement('div');
    box.className = 'Box';
    box.id = boxID;
    boxDiv.appendChild(box)
});