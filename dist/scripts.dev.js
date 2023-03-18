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
    background.classList.add("dark-mode-background");
  } else {
    body.classList.remove("dark-mode");
    background.classList.remove("dark-mode-background");
  }
}); //  menu toggler animation

var menuTogglerOne = document.getElementById("menu-toggler-one");
var menuTogglerTwo = document.getElementById("menu-toggler-two");
var menuTogglerThree = document.getElementById("menu-toggler-three");
var menuToggler = document.getElementById("menu-toggler");
var menuToggled = document.getElementById("menu-toggler-checkbox");
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
});
menuToggler.addEventListener("input", function (event) {
  var isChecked = event.target.checked;

  if (isChecked) {
    menuTogglerOne.classList.remove("menu-untoggled-one");
    menuTogglerTwo.classList.remove("menu-untoggled-two");
    menuTogglerThree.classList.remove("menu-untoggled-three");
  } else {
    menuTogglerOne.classList.add("menu-untoggled-one");
    menuTogglerTwo.classList.add("menu-untoggled-two");
    menuTogglerThree.classList.add("menu-untoggled-three");
  }
}); /// languages animation

var languagesArray = [" ", "Hello", "नमस्ते", "Kamusta", "హలో"];
var countTwo = 0;

var languagesAnimation = function languagesAnimation() {
  document.getElementById("languages").innerHTML = languagesArray[countTwo];
  countTwo = countTwo % (languagesArray.length - 1) + 1;
};

var languagesAnimationInterval = setInterval(languagesAnimation, 500); // nav menu

var nav = document.getElementById("nav-menu");
var mainBody = document.getElementById("main-body");
var darkModeIcon = document.getElementById("dark-mode-icon");
var header = document.getElementById("header");
var websiteName = document.getElementById("website-name");
var menutoggle = document.getElementById("menu-toggler-checkbox");
var background = document.getElementById("background");
menuToggler.addEventListener("input", function (event) {
  var isChecked = event.target.checked; //hiding main body while triggering menu

  if (isChecked) {
    nav.classList.add("menu-toggled");
    mainBody.classList.add("menu-body-hide");
    darkModeIcon.classList.add("dark-mode-icon-hide");
    body.classList.add("overflow-hidden");
    websiteName.classList.add("color-change");
    menuTogglerTwo.classList.add("color-change");
    menuTogglerThree.classList.add("color-change");
    background.classList.add("menu-toggled-background");
  } else {
    nav.classList.remove("menu-toggled");
    mainBody.classList.remove("menu-body-hide");
    darkModeIcon.classList.remove("dark-mode-icon-hide");
    header.classList.remove("color-change");
    websiteName.classList.remove("color-change");
    menuTogglerTwo.classList.remove("color-change");
    menuTogglerThree.classList.remove("color-change");
    background.classList.remove("menu-toggled-background");
    body.classList.remove("overflow-hidden");
  }
});
menuToggler.addEventListener("input", function (event) {
  var isChecked = event.target.checked;

  if (isChecked) {
    nav.classList.remove("menu-untoggled");
    mainBody.classList.remove("menu-body-show");
  } else {
    nav.classList.add("menu-untoggled");
    mainBody.classList.add("menu-body-show");
  }
});

window.onmousemove = function (e) {
  var percent = e.clientY / window.innerHeight;
  nav.animate({
    transform: "translateY(".concat(percent * nav.offsetHeight * -1, "px)")
  }, {
    fill: "forwards",
    duration: 5000
  });
};

var machinelearningIcon = document.getElementById("machine-learning-png");

var machineLearningPng = function machineLearningPng() {
  machinelearningIcon.classList.add("png-show");
};

var machineLearningPngLeave = function machineLearningPngLeave() {
  machinelearningIcon.classList.remove("png-show");
};

var deepLearningIcon = document.getElementById("deep-learning-png");

var deepLearningPng = function deepLearningPng() {
  deepLearningIcon.classList.add("png-show");
};

var deepLearningPngLeave = function deepLearningPngLeave() {
  deepLearningIcon.classList.remove("png-show");
};

var web3Icon = document.getElementById("web3-png");

var web3Png = function web3Png() {
  web3Icon.classList.add("png-show");
};

var web3PngLeave = function web3PngLeave() {
  web3Icon.classList.remove("png-show");
};

var deadliftsIcon = document.getElementById("deadlifts-png");

var deadliftsPng = function deadliftsPng() {
  deadliftsIcon.classList.add("png-show");
};

var deadliftsPngLeave = function deadliftsPngLeave() {
  deadliftsIcon.classList.remove("png-show");
};

var f1Icon = document.getElementById("f1-png");

var f1Png = function f1Png() {
  f1Icon.classList.add("png-show");
};

var f1PngLeave = function f1PngLeave() {
  f1Icon.classList.remove("png-show");
};

var sunsetsIcon = document.getElementById("sunsets-png");

var sunsetsPng = function sunsetsPng() {
  sunsetsIcon.classList.add("png-show");
};

var sunsetsPngLeave = function sunsetsPngLeave() {
  sunsetsIcon.classList.remove("png-show");
};

var workPython = document.getElementById("work-python");

var pythonPng = function pythonPng() {
  workPython.classList.add("png-show");
};

var pythonPngLeave = function pythonPngLeave() {
  workPython.classList.remove("png-show");
};

var workjavascript = document.getElementById("work-javascript");

var javascriptPng = function javascriptPng() {
  workjavascript.classList.add("png-show");
};

var javascriptPngLeave = function javascriptPngLeave() {
  workjavascript.classList.remove("png-show");
};

var workc = document.getElementById("work-c");

var cPng = function cPng() {
  workc.classList.add("png-show");
};

var cLeave = function cLeave() {
  workc.classList.remove("png-show");
};

var workfigma = document.getElementById("work-figma");

var figmaPng = function figmaPng() {
  workfigma.classList.add("png-show");
};

var figmaPngLeave = function figmaPngLeave() {
  workfigma.classList.remove("png-show");
};

var worktensorflow = document.getElementById("work-tensorflow");

var tensorflowPng = function tensorflowPng() {
  worktensorflow.classList.add("png-show");
};

var tensorflowPngLeave = function tensorflowPngLeave() {
  worktensorflow.classList.remove("png-show");
};

var gethome = function gethome() {
  nav.classList.remove("menu-toggled");
  mainBody.classList.remove("menu-body-hide");
  darkModeIcon.classList.remove("dark-mode-icon-hide");
  header.classList.remove("color-change");
  websiteName.classList.remove("color-change");
  menuTogglerTwo.classList.remove("color-change");
  menuTogglerThree.classList.remove("color-change");
  background.classList.remove("menu-toggled-background");
  body.classList.remove("overflow-hidden");
};

cursor;
var cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", function (e) {
  cursor.setAttribute("style", "top : " + (e.pageY - 35) + "px;left : " + (e.pageX - 35) + "px");
});