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