let box = document.getElementsByClassName("box");
Array.from(box).forEach(e=>{
    let val1 = Math.ceil(0+Math.random()*(255));
    let val2 = Math.ceil(0+Math.random()*(255));
    let val3 = Math.ceil(0+Math.random()*(255));
    e.style.backgroundColor = `rgb(${val1}, ${val2}, ${val3})`;
    let val4 = Math.ceil(0+Math.random()*(255));
    let val5 = Math.ceil(0+Math.random()*(255));
    let val6 = Math.ceil(0+Math.random()*(255));
    e.style.color = `rgb(${val4}, ${val5}, ${val6})`;
})