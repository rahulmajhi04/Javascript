//Function is used to do repeated task at once and reuse the code
function hello(){
    console.log("Hello World");
}
hello();

//function with parameter
function greet(name){
    console.log("Hello " + name);
}
greet("Rahul");
greet("Shyam");

//function with return value
function sum(a,b,c=4){
    console.log(a,b,c);
    return (a + b +c);
}
let c = sum(5);
console.log(c);//Output will be NaN-Not a number

//Arrow Function 
const func1 = (x)=>{
    console.log("This is arrow function",x);
}
func1(4);