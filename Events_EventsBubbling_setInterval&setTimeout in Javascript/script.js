let btn = document.getElementById("btn");
btn.addEventListener("keydown", (e) => {
    alert("Hello");
    console.log(e.key, e.keyCode);
})

//Event Bubbling
document.querySelector(".child").addEventListener("click",(e)=>{
    e.stopPropagation();//To stop event bubbling
    alert("Child was clicked");
})
document.querySelector(".childContainer").addEventListener("click",(e)=>{
    e.stopPropagation();
    alert("Child Container was clicked");
})
document.querySelector(".container").addEventListener("click",(e)=>{
    alert("container was clicked");
    console.log(e);
})

//setInterval Function : It will work infinite times
function getRandomColor(){
    let val1 = Math.ceil(0+Math.random()*(255));
    let val2 = Math.ceil(0+Math.random()*(255));
    let val3 = Math.ceil(0+Math.random()*(255));
    return `rgb(${val1}, ${val2}, ${val3})`;
} 
let a = setInterval(() => {
    document.querySelector(".child").style.backgroundColor = getRandomColor();
    document.querySelector(".childContainer").style.backgroundColor = getRandomColor();
    document.querySelector(".container").style.backgroundColor = getRandomColor();
}, 1000);
// To clear the setInterval we have to provide the return value in clearInterval(parameter) function
// clearInterval(a);

//SetTimeout Function : It will work only one time

let b = setTimeout(() => {
    document.querySelector(".child").style.backgroundColor = "green";
    document.querySelector(".childContainer").style.backgroundColor = "yellow";
    document.querySelector(".container").style.backgroundColor = "pink";
}, 4000);

// To clear the setInterval we have to provide the return value in clearTimeout(parameter) function
// clearTimeout(b);






