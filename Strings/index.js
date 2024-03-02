//Strings in javascript

let a = "Rahul";
a[0] = "B";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);

//Finding length of an array
console.log(a.length);

//template literal
let name = "Ivan";
let father = "Steven";
console.log(`His name is ${name} and his father name is ${father}`);
console.log("His name is \t"+name);

let b = "Shivam"
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.slice(1,5));
console.log(b.slice(1));
console.log(b.charAt(1));

console.log(b.replace("S","V"));
let newName = "  R ahul Majhi "
let ccc = newName.trim();//It removes whitespaces
console.log(ccc);

console.log(b);//As original string not changed output will be Shivam
 
