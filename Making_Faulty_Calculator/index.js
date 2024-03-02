let a = prompt("Enter first number");
let c = prompt("Enter Operator");
let b = prompt("Enter Second number");

let obj = {
    "+": "-",
    "-": "+",
    "*": "/",
    "/": "**"
}
let data = Math.random();
console.log(data);
if (data > 0.1) {
    alert(`Result = ${eval(`${a} ${c} ${b}`)}`);

}
else {
    c = obj[c];
    alert(`Result = ${eval(`${a} ${c} ${b}`)}`);

}

