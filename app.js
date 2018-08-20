var button = document.createElement("button");
var buttText = document.createTextNode("add square")
button.appendChild(buttText)
document.body.appendChild(button)

let boxNumber = 0;
button.addEventListener("click", function () {
    boxNumber++
    let box = document.createElement('div');
    box.className = 'Box';
    box.id = boxNumber;
    document.body.appendChild(box)
})