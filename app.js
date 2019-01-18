var title = document.querySelector("#title");
console.log("the title is", title);

var activityButton = document.querySelector("#activity-button");
var foodButton = document.querySelector("#food-button");
var bothButton = document.querySelector("#both-button");
console.log("the activity button is", activityButton);
console.log("the food button is", foodButton);
console.log("the both button is", bothButton);

button.onclick = function () {
    title.style.color = "black";
    var numParty = document.querySelector("#num-party");
    console.log("the number of party members is", numParty.value);
}
