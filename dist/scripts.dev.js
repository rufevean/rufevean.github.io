"use strict";

//cursor
// const cursor = document.querySelector(".cursor");
// document.addEventListener("mousemove", e => {
//     cursor.setAttribute("style", "top : " + (e.pageY - 15) + "px;left : " + (e.pageX - 15) + "px")
// })
// website-name animation
var nameList = ["g/RUFEVEAN", "gi/RUFEVEAN", "git/RUFEVEAN", "gith/RUFEVEAN", "githu/RUFEVEAN", "github/RUFEVEAN", "github./RUFEVEAN", "github.c/RUFEVEAN", "github.co/RUFEVEAN", "github.com/RUFEVEAN"];
var count1 = 0;

var animation1 = function animation1() {
  document.getElementById("website-name").innerHTML = nameList[count1];

  if (count1 != nameList.length - 1) {
    count1 = count1 + 1;
  }
};

var animationInterval;

var animationMain = function animationMain() {
  count1 = 0;
  animationInterval = setInterval(animation1, 100);
};

var afterAnimation = function afterAnimation() {
  clearInterval(animationInterval);
  document.getElementById("website-name").innerHTML = "/RUFEVEAN";
}; //dark mode toggler 


var darkModeToggle = document.getElementById("dark-mode-toggler");
var body = document.body;
darkModeToggle.addEventListener("input", function (e) {
  var isChecked = e.target.checked;

  if (isChecked) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
}); //  menu toggler animation

var menuTogglerOne = document.getElementById("menu-toggler-one");
var menuTogglerTwo = document.getElementById("menu-toggler-two");
var menuTogglerThree = document.getElementById("menu-toggler-three");
var menuToggler = document.getElementById("menu-toggler");
menuToggler.addEventListener("change", function () {
  if (menuToggler.checked) {
    console.log("Checkbox is checked.");
    menuTogglerOne.classList.add("menu-toggled-one");
  } else {
    console.log("Checkbox is not checked.");
  }
});
menuToggler.addEventListener("input", function (event) {
  var isChecked = event.target.checked;

  if (isChecked) {
    menuTogglerOne.classList.add("menu-toggled-one");
    menuTogglerTwo.classList.add("menu-toggled-two");
    menuTogglerThree.classList.add("menu-toggled-three");
  } else {
    menuTogglerOne.classList.remove("menu-toggled-one");
    menuTogglerTwo.classList.remove("menu-toggled-two");
    menuTogglerThree.classList.remove("menu-toggled-three");
  }
}); /// languages animation

var languagesArray = ["Hello", "नमस्ते", "Kamusta", "హలో"];
var countTwo = 0;

var languagesAnimation = function languagesAnimation() {
  document.getElementById("languages").innerHTML = languagesArray[countTwo];
  countTwo = countTwo % (languagesArray.length - 1) + 1;
};

var languagesAnimationInterval = setInterval(languagesAnimation, 500);