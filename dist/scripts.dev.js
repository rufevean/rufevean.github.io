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
menuToggler.addEventListener("input", function (event) {
  var isChecked = event.target.checked; //hiding main body while triggering menu

  if (isChecked) {
    nav.classList.add("menu-toggled");
    mainBody.classList.add("menu-body-hide");
  } else {
    nav.classList.remove("menu-toggled");
    mainBody.classList.remove("menu-body-hide");
  }
});
menuToggler.addEventListener("input", function (event) {
  var isChecked = event.target.checked;

  if (isChecked) {
    nav.classList.remove("menu-untoggled");
  } else {
    nav.classList.add("menu-untoggled");
  }
});

window.onmousemove = function (e) {
  var percent = e.clientY / window.innerHeight;
  nav.animate({
    transform: "translateY(".concat(percent * nav.offsetHeight * -1, "px)")
  }, {
    fill: "forwards",
    duration: 4000
  });
};