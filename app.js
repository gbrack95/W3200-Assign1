var activityData = [];
var foodData = [];
var bothData = [];

var currentData = [];

fetch("https://api.myjson.com/bins/1ch97g").then(function (response) {
    response.json().then(function (data){
        activityData = data.activity;
        foodData = data.food;
        bothData = activityData.concat(foodData);
        // console.log("Mini-Golf data", activityData[0]);
        // console.log("Mini-Golf act", activityData[0].act);
        // console.log("Mini-Golf cost", activityData[0].cost);
        return activityData, foodData, bothData;
    });
});

var filterData = function (list, cost) {
    return list.filter(function (item) {
        return item.cost == cost;
    });
};

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
    console.log("activity data", activityData);
    currentData = activityData;
}

foodButton.onclick = function () {
    console.log("the food button is", foodButton);
    costOption.style.display = "block";
    console.log("display change on food");
    console.log("food data", foodData);
}

bothButton.onclick = function () {
    console.log("the both button is", bothButton);
    costOption.style.display = "block";
    console.log("display change on both");
    console.log("data loaded from server", bothData);
}

lowButton.onclick = function () {
    console.log("the low button is", lowButton);
    console.log("Mini-Golf cost", activityData[0].cost);
    var filteredList = filterData(currentData, "Low");
    console.log("filtered", filteredList);
    var r = Math.floor(Math.random() * filteredList.length);
    console.log("random", filteredList[r]);
}

mediumButton.onclick = function () {
    console.log("the medium button is", mediumButton);
}

highButton.onclick = function () {
    console.log("the high button is", highButton);
}
