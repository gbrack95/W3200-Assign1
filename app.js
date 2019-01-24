var activityData = [];
var foodData = [];
var eitherData = [];
var currentData = [];

var activityButton = document.querySelector("#activity-button");
var foodButton = document.querySelector("#food-button");
var eitherButton = document.querySelector("#either-button");

var costOption = document.querySelector("#cost-button-container")

var lowButton = document.querySelector("#low-button");
var mediumButton = document.querySelector("#medium-button");
var highButton = document.querySelector("#high-button");

var optionsList = document.querySelector("#generated-options");

var chosenOption = document.querySelector("#chosen-option");


var filterData = function (list, cost) {
    return list.filter(function (item) {
        return item.cost == cost;
    });
};

fetch("https://api.myjson.com/bins/1ch97g").then(function (response) {
    response.json().then(function (data){
        activityData = data.activity;
        foodData = data.food;
        eitherData = activityData.concat(foodData);
        // console.log("Mini-Golf data", activityData[0]);
        // console.log("Mini-Golf act", activityData[0].act);
        // console.log("Mini-Golf cost", activityData[0].cost);
        return activityData, foodData, eitherData;
    });
});

activityButton.onclick = function () {
    costOption.style.display = "block";
    console.log("activity data", activityData);
    currentData = activityData;
}

foodButton.onclick = function () {
    costOption.style.display = "block";
    console.log("food data", foodData);
    currentData = foodData;
}

eitherButton.onclick = function () {
    costOption.style.display = "block";
    console.log("data loaded from server", eitherData);
    currentData = eitherData;
}

lowButton.onclick = function () {
    var filteredList = filterData(currentData, "Low");
    console.log("Low filtered", filteredList);
    var r = Math.floor(Math.random() * filteredList.length);
    console.log("Low random", filteredList[r]);
    /*newItem.innerHTML = filteredList[r].act;
    optionsList.appendChild(newItem);
    console.log(optionsList);*/
    
    filteredList.forEach(function(item){
        var newItem = document.createElement("li");
        newItem.innerHTML = item.act;
        optionsList.appendChild(newItem);
        console.log(optionsList);
    });
}

mediumButton.onclick = function () {
    var filteredList = filterData(currentData, "Medium");
    console.log("Medium filtered", filteredList);
    var r = Math.floor(Math.random() * filteredList.length);
    console.log("Medium random", filteredList[r]);
}

highButton.onclick = function () {
    var filteredList = filterData(currentData, "High");
    console.log("High filtered", filteredList);
    var r = Math.floor(Math.random() * filteredList.length);
    console.log("High random", filteredList[r]);
}
