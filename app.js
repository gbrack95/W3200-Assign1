fetch("https://api.myjson.com/bins/1ch97g").then(function (response) {
    response.json().then(function (data){
        console.log("data loaded from server", data);
    });
});

var activityButton = document.querySelector("#activity-button");
var foodButton = document.querySelector("#food-button");
var bothButton = document.querySelector("#both-button");

var costOption = document.querySelector("#cost-button-container");

var lowButton = document.querySelector("#low-button");
var mediumButton = document.querySelector("#medium-button");
var highButton = document.querySelector("#high-button");

activityButton.onclick = function () {
    console.log("the activity button is", activityButton);
    costOption.style.display = "block";
    console.log("display change on activity");
}

foodButton.onclick = function () {
    console.log("the food button is", foodButton);
    costOption.style.display = "block";
    console.log("display change on food");
}

bothButton.onclick = function () {
    console.log("the both button is", bothButton);
    costOption.style.display = "block";
    console.log("display change on both");
}

lowButton.onclick = function () {
    console.log("the low button is", lowButton);
}

mediumButton.onclick = function () {
    console.log("the medium button is", mediumButton);
}

highButton.onclick = function () {
    console.log("the high button is", highButton);
}
