var title = document.querySelector("#title");
console.log("the title is", title);

var button = document.querySelector("#button");
console.log("the button is", button);
button.onclick = function () {
    title.style.color = "black";
}
