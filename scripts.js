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
    } else {
        body.classList.remove("dark-mode");
    }
});

//  menu toggler animation

const menuTogglerOne = document.getElementById("menu-toggler-one");
const menuTogglerTwo = document.getElementById("menu-toggler-two");
const menuTogglerThree = document.getElementById("menu-toggler-three");
const menuToggler = document.getElementById("menu-toggler");
const menuToggled = document.getElementById("menu-toggler-checkbox")

menuToggler.addEventListener("input",(event)=>{
    const isChecked = event.target.checked;
    if(isChecked){
        menuTogglerOne.classList.add("menu-toggled-one");
        menuTogglerTwo.classList.add("menu-toggled-two");
        menuTogglerThree.classList.add("menu-toggled-three")
        
    }else{
        menuTogglerOne.classList.remove("menu-toggled-one")
        menuTogglerTwo.classList.remove("menu-toggled-two")
        menuTogglerThree.classList.remove("menu-toggled-three")
    }
})

menuToggler.addEventListener("input",(event)=>{
    const isChecked = event.target.checked;
    if(isChecked ){
        menuTogglerOne.classList.remove("menu-untoggled-one")
        menuTogglerTwo.classList.remove("menu-untoggled-two")
        menuTogglerThree.classList.remove("menu-untoggled-three")

    }else{
        menuTogglerOne.classList.add("menu-untoggled-one")
        menuTogglerTwo.classList.add("menu-untoggled-two")
        menuTogglerThree.classList.add("menu-untoggled-three")
    }
})

/// languages animation

const languagesArray = [" ", "Hello", "नमस्ते", "Kamusta", "హలో"];
let countTwo = 0;
let languagesAnimation = function () {
    document.getElementById("languages").innerHTML = languagesArray[countTwo];
    countTwo = (countTwo % (languagesArray.length - 1)) + 1;
};

let languagesAnimationInterval = setInterval(languagesAnimation, 500);

// nav menu
const nav = document.getElementById("nav-menu")
const mainBody = document.getElementById("main-body")
menuToggler.addEventListener("input",(event)=>{
    const isChecked =event.target.checked;
    //hiding main body while triggering menu
    if(isChecked){
        nav.classList.add("menu-toggled");
        mainBody.classList.add("menu-body-hide");


    }else{
        nav.classList.remove("menu-toggled");
        mainBody.classList.remove("menu-body-hide");
    }
})
menuToggler.addEventListener("input",(event)=>{
    const isChecked =event.target.checked;
    if(isChecked){
        nav.classList.remove("menu-untoggled");


    }else{
        nav.classList.add("menu-untoggled");
    }
})
window.onmousemove = e => {
    const percent = e.clientY / window.innerHeight;
    
    nav.animate({
      transform: `translateY(${percent * nav.offsetHeight * -1}px)`
    }, {
      fill: "forwards",
      duration: 4000
    })
  }