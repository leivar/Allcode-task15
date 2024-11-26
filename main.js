const menuButton = document.querySelector(".menu-button");
const navItems = document.querySelector(".navbar-items");
let menuOpen = false;
const list = document.querySelector(".list");
let shoppingList = [
    "Apples",
    "Bread",
    "Milk",
    "Candy"
];
const taskButton = document.querySelector(".task-button");
const completedTasksText = document.querySelector(".completed-tasks");
const totalTasksText = document.querySelector(".total-tasks");
const progress = document.querySelector(".progress-bar-filled");
let totalTasks = 13;
let completedTasks = 0;
const updateList = document.querySelector(".update-list");
const newListItem = document.querySelector(".new-list-item");
const slideshow = document.querySelector(".slideshow");
const slideshowList = [
    "./gallery/1.jpg",
    "./gallery/2.jpg",
    "./gallery/3.jpg",
];
let currentSlide = slideshowList[0];
let currentSlideNumber = 0;
const slideshowPreviousButton = document.querySelector(".slideshow-previous-button");
const slideshowNextButton = document.querySelector(".slideshow-next-button");
const slideshowRandomButton = document.querySelector(".slideshow-random-button");
const countList = document.querySelector(".count-list");
const dynamicText = document.querySelector(".dynamic-text");
const addition1 = document.querySelector(".addition-input-1");
const addition2 = document.querySelector(".addition-input-2");
const sumAddition = document.querySelector(".addition-result");
let dog_list = [];
const dogTable = document.getElementById("api-table");
fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(response.statusText);
        }
    })
    .then(data => {
        dog_list = data.message;
        for (dog in dog_list) {
            let tr = document.createElement("tr");
            let node = document.createTextNode(dog);
            tr.appendChild(node);
            dogTable.appendChild(tr);
        }
    });

function isNumber(value){
    return Number.isInteger(parseInt(value))
};

menuButton.addEventListener("click", () => {
    if (!menuOpen) {
        navItems.classList.remove("hidden");
        menuOpen = true;
    } else {
        navItems.classList.add("hidden");
        menuOpen = false;
    }
});

window.addEventListener("load", () => {
    for (let i = 0; i < shoppingList.length; i++) {
        let newItem = document.createElement("li");
        newItem.innerHTML = shoppingList[i];
        list.appendChild(newItem);
    }
});

window.addEventListener("load", () => {
    slideshow.setAttribute("src",slideshowList[0]);
});

window.addEventListener("load", () => {
    totalTasksText.innerHTML = totalTasks;

    taskButton.addEventListener("click", () => {

        if (!(completedTasks >= totalTasks)) {
            completedTasks++;
            completedTasksText.innerHTML = completedTasks;

            progress.style.width = (completedTasks / totalTasks * 100) + "%";

        }
        if(completedTasks === totalTasks){
            progress.style.width = "100%"
            progress.style.background = "greenyellow"
        }

    });
});

updateList.addEventListener("click", () => {
    let newItem = document.createElement("li");
    newItem.innerHTML = newListItem.value;
    list.appendChild(newItem);
    newListItem.value = "";
});

slideshowPreviousButton.addEventListener("click", () => {
    if (currentSlideNumber === 0){
        slideshow.setAttribute("src",slideshowList[slideshowList.length-1]);
        currentSlideNumber = slideshowList.length-1;
    } else {
        slideshow.setAttribute("src", slideshowList[currentSlideNumber-1]);
        currentSlideNumber --;
    }
});

slideshowNextButton.addEventListener("click", () => {
    if (currentSlideNumber === slideshowList.length-1){
        slideshow.setAttribute("src",slideshowList[0]);
        currentSlideNumber = 0;
        console.log(currentSlideNumber);
    } else {
        slideshow.setAttribute("src", slideshowList[currentSlideNumber+1]);
        currentSlideNumber += 1;
        console.log(currentSlideNumber);
    }
});

slideshowRandomButton.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random()*slideshowList.length);
    while (randomNumber === currentSlideNumber){        //Just to avoid randomly selecting the current image
        randomNumber = Math.floor(Math.random()*slideshowList.length)
    }
    slideshow.setAttribute("src",slideshowList[currentSlideNumber]);
    currentSlideNumber = randomNumber;
});

countList.addEventListener("click", () => {
    alert(list.getElementsByTagName("li").length);
});

dynamicText.addEventListener("mouseover", () => {
    dynamicText.classList.add("boldy");
    parent.onmouseout = function() {
        dynamicText.classList.remove("boldy");
    }
});

addition1.addEventListener("change", () => {
    if(isNumber(addition1.value) && isNumber(addition2.value)){
        sumAddition.innerHTML=(parseInt(addition1.value)+parseInt(addition2.value));
    }
});

addition2.addEventListener("change", () => {
    if(isNumber(addition1.value) && isNumber(addition2.value)){
        sumAddition.innerHTML=(parseInt(addition1.value)+parseInt(addition2.value));
    }
});