let num = prompt("Enter number");
let fact = 1;
for (let i= 1; i <= num; i++) {
    fact = fact * i;
}
console.log(`Factorial of ${num} is ${fact}`)

//Another way i.e; reduce function
let arr = [1];
let num2 = prompt("Enter number");
for (let i= 2; i <= num2; i++){
    arr.push(i);
}
// console.log(arr);

console.log("Factorial =",arr.reduce((a,b)=>{
    return a*b;
}
));