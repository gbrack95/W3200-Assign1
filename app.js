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

var allOptions = document.querySelector("#all-options")
var optionsList = document.querySelector("#generated-options");
var chosenOption = document.querySelector("#chosen-option");

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

var filterData = function (list, cost) {
    return list.filter(function (item) {
        return item.cost == cost;
    });
};

var deleteLi = function () {
    var delLi = document.querySelector("#generated-options");
    var delChosen = document.querySelector("#chosen-option");
    allOptions.style.display = "none";
    if (delChosen.firstChild) {
        delChosen.firstChild.remove();
    }
    while (delLi.hasChildNodes()) {
        delLi.removeChild(delLi.firstChild);
    }
};

var listLoop = function (list) {
    list.forEach(function(item){
        var newItem = document.createElement("li");
        if (item.act) {
            newItem.innerHTML = item.act;
        } else {
            newItem.innerHTML = item.name;
        }
        optionsList.appendChild(newItem);
        console.log(optionsList);
    });
};

var createPar = function (item) {
    var newItem = document.createElement("p");
    if (item.act) {
        newItem.innerHTML = "Based on your choices you should do: " + item.act;
    } else {
        newItem.innerHTML = "Based on your choices you should eat: " + item.name;
    }
    chosenOption.appendChild(newItem);
};

activityButton.onclick = function () {
    costOption.style.display = "block";
    console.log("activity data", activityData);
    currentData = activityData;
    deleteLi();
}

foodButton.onclick = function () {
    costOption.style.display = "block";
    console.log("food data", foodData);
    currentData = foodData;
    deleteLi();
}

eitherButton.onclick = function () {
    costOption.style.display = "block";
    console.log("data loaded from server", eitherData);
    currentData = eitherData;
    deleteLi();
}

lowButton.onclick = function () {
    deleteLi();
    var filteredList = filterData(currentData, "Low");
    var r = Math.floor(Math.random() * filteredList.length)
    createPar(filteredList[r]);
    allOptions.style.display = "block";
    listLoop(filteredList);
}

mediumButton.onclick = function () {
    deleteLi();
    var filteredList = filterData(currentData, "Medium");
    console.log("Medium filtered", filteredList);
    var r = Math.floor(Math.random() * filteredList.length);
    createPar(filteredList[r]);
    console.log("Medium random", filteredList[r]);
    allOptions.style.display = "block";
    listLoop(filteredList);
}

highButton.onclick = function () {
    deleteLi();
    var filteredList = filterData(currentData, "High");
    console.log("High filtered", filteredList);
    var r = Math.floor(Math.random() * filteredList.length);
    createPar(filteredList[r]);
    console.log("High random", filteredList[r]);
    allOptions.style.display = "block";
    listLoop(filteredList);
}
