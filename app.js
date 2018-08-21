let button = document.createElement("button");
let buttText = document.createTextNode("add square")
button.appendChild(buttText)
document.body.appendChild(button)
let boxDiv = document.createElement("div");
boxDiv.className = "flex"
document.body.appendChild(boxDiv)

let boxNumber = 0;
let rand = ['red', 'blue', 'white', 'green', 'purple', 'violet', 'indigo', 'aqua', 'lightblue']
button.addEventListener("click", function () {
    let boxID = boxNumber++;
    let box = document.createElement('div');
    box.className = 'Box';
    box.id = boxID;
    boxDiv.appendChild(box)
    box.addEventListener("click", function () {
        let color = rand[Math.floor(Math.random() * rand.length)];
        box.style.backgroundColor = color;
    });
    box.addEventListener('mouseover', function () {
        box.innerText = 'Box ID #' + boxID;
    });
    box.addEventListener('dblclick', function () {
        let even = boxID % 2;
        console.log(boxID)
        if (even === 0) {
            if (box.nextSibling !== null) {
                box.nextSibling.remove();
                console.log(box.nextSibling, null)
            } else {
                window.alert("No box after this one");
            };
        } else {
            if (box.previousSibling !== null) {
                box.previousSibling.remove();
            } else {
                window.alert("No box before this one");
            };
        };
    });
});
// I can't figure out how to check to see if there even is a next sibling or not.