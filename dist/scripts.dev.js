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
};

var darkModeToggle = document.getElementById("dark-mode-toggler");
var body = document.body;
darkModeToggle.addEventListener("input", function (e) {
  var isChecked = e.target.checked;

  if (isChecked) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
});