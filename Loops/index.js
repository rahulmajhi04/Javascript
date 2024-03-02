// There are mainly 5 type of loop in javascript:
// 1.for loop
// 2.for in loop
// 3.for of loop
// 4.while loop
// 5.do while loop

// for loop
let a = 1;
for (let i = 0; i < 100; i++) {
    console.log(a + i);
}

//for in loop
let obj = {
    name: "Rahul",
    dept: "BCA",
    roll: 2573,
    college: "MCA"
}
for (let key in obj) {
    console.log(key + ":" + obj[key]);
}

//for of loop
let b = "Rahul";
for (let i of b) {
    console.log(i);
}

//While loop
let i = 5;
while (i < 7) {
    console.log(i);
    i++;
}

//do while loop
let x = 0;
do {
    console.log(x);
    x++;
} while (x < 5);
//this loop is executed at least once although the condition is false