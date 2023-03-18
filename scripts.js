//cursor
// const cursor = document.querySelector(".cursor");
// document.addEventListener("mousemove", e => {
//     cursor.setAttribute("style", "top : " + (e.pageY - 15) + "px;left : " + (e.pageX - 15) + "px")
// })

// website-name animation

let nameList = [
    "g/RUFEVEAN",
    "gi/RUFEVEAN",
    "git/RUFEVEAN",
    "gith/RUFEVEAN",
    "githu/RUFEVEAN",
    "github/RUFEVEAN",
    "github./RUFEVEAN",
    "github.c/RUFEVEAN",
    "github.co/RUFEVEAN",
    "github.com/RUFEVEAN",
];
let count1 = 0;

let animation1 = function () {
    document.getElementById("website-name").innerHTML = nameList[count1];
    if (count1 != nameList.length - 1) {
        count1 = count1 + 1;
    }
};
let animationInterval;
let animationMain = function () {
    count1 = 0;
    animationInterval = setInterval(animation1, 100);
};

let afterAnimation = function () {
    clearInterval(animationInterval);
    document.getElementById("website-name").innerHTML = "/RUFEVEAN";
};

//dark mode toggler

const darkModeToggle = document.getElementById("dark-mode-toggler");
const body = document.body;

darkModeToggle.addEventListener("input", (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
        body.classList.add("dark-mode");
        background.classList.add("dark-mode-background");
    } else {
        body.classList.remove("dark-mode");
        background.classList.remove("dark-mode-background");
    }
});

//  menu toggler animation

const menuTogglerOne = document.getElementById("menu-toggler-one");
const menuTogglerTwo = document.getElementById("menu-toggler-two");

const menuTogglerThree = document.getElementById("menu-toggler-three");
const menuToggler = document.getElementById("menu-toggler");
const menuToggled = document.getElementById("menu-toggler-checkbox");

menuToggler.addEventListener("input", (event) => {
    const isChecked = event.target.checked;
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

menuToggler.addEventListener("input", (event) => {
    const isChecked = event.target.checked;
    if (isChecked) {
        menuTogglerOne.classList.remove("menu-untoggled-one");
        menuTogglerTwo.classList.remove("menu-untoggled-two");
        menuTogglerThree.classList.remove("menu-untoggled-three");
    } else {
        menuTogglerOne.classList.add("menu-untoggled-one");
        menuTogglerTwo.classList.add("menu-untoggled-two");
        menuTogglerThree.classList.add("menu-untoggled-three");
    }
});

/// languages animation

const languagesArray = [" ", "Hello", "नमस्ते", "Kamusta", "హలో"];
let countTwo = 0;
let languagesAnimation = function () {
    document.getElementById("languages").innerHTML = languagesArray[countTwo];
    countTwo = (countTwo % (languagesArray.length - 1)) + 1;
};

let languagesAnimationInterval = setInterval(languagesAnimation, 500);

// nav menu
const nav = document.getElementById("nav-menu");
const mainBody = document.getElementById("main-body");
const darkModeIcon = document.getElementById("dark-mode-icon");
const header = document.getElementById("header");
const websiteName = document.getElementById("website-name");
const menutoggle = document.getElementById("menu-toggler-checkbox");
const background = document.getElementById("background");
menuToggler.addEventListener("input", (event) => {
    const isChecked = event.target.checked;
    //hiding main body while triggering menu
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
menuToggler.addEventListener("input", (event) => {
    const isChecked = event.target.checked;
    if (isChecked) {
        nav.classList.remove("menu-untoggled");
        mainBody.classList.remove("menu-body-show");
    } else {
        nav.classList.add("menu-untoggled");
        mainBody.classList.add("menu-body-show");
    }
});
window.onmousemove = (e) => {
    const percent = e.clientY / window.innerHeight;

    nav.animate(
        {
            transform: `translateY(${percent * nav.offsetHeight * -1}px)`,
        },
        {
            fill: "forwards",
            duration: 5000,
        }
    );
};
let machinelearningIcon = document.getElementById("machine-learning-png");

let machineLearningPng = function () {
    machinelearningIcon.classList.add("png-show");
};

let machineLearningPngLeave = function () {
    machinelearningIcon.classList.remove("png-show");
};

let deepLearningIcon = document.getElementById("deep-learning-png");

let deepLearningPng = function () {
    deepLearningIcon.classList.add("png-show");
};

let deepLearningPngLeave = function () {
    deepLearningIcon.classList.remove("png-show");
};

let web3Icon = document.getElementById("web3-png");

let web3Png = function () {
    web3Icon.classList.add("png-show");
};

let web3PngLeave = function () {
    web3Icon.classList.remove("png-show");
};

let deadliftsIcon = document.getElementById("deadlifts-png");

let deadliftsPng = function () {
    deadliftsIcon.classList.add("png-show");
};

let deadliftsPngLeave = function () {
    deadliftsIcon.classList.remove("png-show");
};

let f1Icon = document.getElementById("f1-png");

let f1Png = function () {
    f1Icon.classList.add("png-show");
};

let f1PngLeave = function () {
    f1Icon.classList.remove("png-show");
};

let sunsetsIcon = document.getElementById("sunsets-png");

let sunsetsPng = function () {
    sunsetsIcon.classList.add("png-show");
};

let sunsetsPngLeave = function () {
    sunsetsIcon.classList.remove("png-show");
};

let workPython = document.getElementById("work-python");

let pythonPng = function () {
    workPython.classList.add("png-show");
};

let pythonPngLeave = function () {
    workPython.classList.remove("png-show");
};

let workjavascript = document.getElementById("work-javascript");
let javascriptPng = function () {
    workjavascript.classList.add("png-show");
};

let javascriptPngLeave = function () {
    workjavascript.classList.remove("png-show");
};

let workc = document.getElementById("work-c");
let cPng = function () {
    workc.classList.add("png-show");
};

let cLeave = function () {
    workc.classList.remove("png-show");
};
let workfigma = document.getElementById("work-figma");
let figmaPng = function () {
    workfigma.classList.add("png-show");
};

let figmaPngLeave = function () {
    workfigma.classList.remove("png-show");
};
let worktensorflow = document.getElementById("work-tensorflow");

let tensorflowPng = function () {
    worktensorflow.classList.add("png-show");
};

let tensorflowPngLeave = function () {
    worktensorflow.classList.remove("png-show");
};

let gethome = function () {
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


//cursor 
// const cursor = document.querySelector(".cursor");
// document.addEventListener("mousemove", e => {
//     cursor.setAttribute("style", "top : " + (e.pageY - 35) + "px;left : " + (e.pageX - 35) + "px")
// })