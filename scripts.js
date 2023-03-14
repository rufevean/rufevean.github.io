//cursor
// const cursor = document.querySelector(".cursor");
// document.addEventListener("mousemove", e => {
//     cursor.setAttribute("style", "top : " + (e.pageY - 15) + "px;left : " + (e.pageX - 15) + "px")
// })

// website-name animation

let nameList  = [
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

let animation1 = function(){
    document.getElementById("website-name").innerHTML =nameList[count1];
    if(count1 !=nameList.length-1){
        count1 = count1+1;
    }
}
let animationInterval;
let animationMain = function(){
    count1 =0;
    animationInterval = setInterval(animation1,100);
}

let afterAnimation = function(){
    clearInterval(animationInterval);
    document.getElementById("website-name").innerHTML = "/RUFEVEAN";
}

//dark mode toggler 
 
const darkModeToggle  = document.getElementById("dark-mode-toggler");
const body = document.body

darkModeToggle.addEventListener("input",(e)=>{
    const isChecked = e.target.checked;
    if (isChecked){
        body.classList.add("dark-mode");
    }else{
        body.classList.remove("dark-mode");
    }
})

//  menu toggler animation

const menuTogglerOne = document.getElementById("menu-toggler-one")
const menuTogglerTwo = document.getElementById("menu-toggler-two")
const menuTogglerThree = document.getElementById("menu-toggler-three")
const menuToggler = document.getElementById("menu-toggler");

menuToggler.addEventListener("input",(event)=>{
    const isChecked = event.target.checked;
    if (isChecked){
        menuTogglerOne.classList.add("menu-toggled-one");
        menuTogglerTwo.classList.add("menu-toggled-two");
        menuTogglerThree.classList.add("menu-toggled-three");
    }else{
        menuTogglerOne.classList.remove("menu-toggled-one");
        menuTogglerTwo.classList.remove("menu-toggled-two");
        menuTogglerThree.classList.remove("menu-toggled-three");
    }});

// document.querySelector(".menu-toggler").click(function(){
//     menuTogglerOne.classList.add("menu-toggled-one");
// })
