var activityButton = document.querySelector("#activity-button");
var foodButton = document.querySelector("#food-button");
var bothButton = document.querySelector("#both-button");

var costOption = document.querySelector("#cost-button-container");

var lowCost = document.querySelector("#low");
var mediumCost = document.querySelector("#medium");
var highCost = document.querySelector("#high");

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
