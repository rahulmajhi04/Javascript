//Javascripts Arrays are mutable and type is object

let arr = [1,2,3,4,5];
arr[0] = 10;
console.log(arr);
console.log(typeof arr);
console.log("Length=",arr.length);

//Some Array Methods
console.log(arr.toString());
//Output: 10,2,3,4,5

console.log(arr.join(" and "));
//Output: 10 and 2 and 3 and 4 and 5


let a = [1,2,3,4,5,6];
console.log(a.pop());//It removes the last element and return the element
console.log(a); //Output: [ 1, 2, 3, 4, 5 ]

console.log(a.push("Rahul")); //It return the length of updated array
console.log(a);

//shift method: Removes first element and returns it
console.log(a.shift()); //It remove 1
console.log(a); //Output: [ 2, 3, 4, 5, 'Rahul' ]

//unshift method: Adds element to the begginnig of the array and returns the new Array length
console.log(a.unshift("Santu")); //Output:6 As it is new array length
console.log(a); //Output: [ 'Santu', 2, 3, 4, 5, 'Rahul' ]

//delete operator  to delete any element but still memory is reserved for that
delete a[4];
console.log(a);
console.log(a.length);

//Concat() function
let a1 = [1,2,3];
let a2 = [4,5];
let a3 = [6,7,8];
console.log(a1.concat(a2,a3));
/*Output:
[
  1, 2, 3, 4,
  5, 6, 7, 8
]
But a1 a2 and a3 will not change
*/

//splice: It can be used to add new items to an array

console.log(a)
a.splice(1,2,7);
console.log(a);

//slice

console.log(a.slice(2)); //It will only return the element that are sliced
console.log(a.slice(2,5)); //element at index 2, 3 and 4 i.e; less than 5 will be printed


//Loop functions for Arrays
a.forEach((value,index,array) => {
    console.log(value,index,array);
});

//map: To copy any array to another

let newarr = a.map((element,index,array)=>{
    return element;
})
console.log(newarr);


let name = "Rahul";
console.log(Array.from(name));// Output: [ 'R', 'a', 'h', 'u', 'l' ]

//filter function
let arr1 = [1,2,3,4,5,6];
const check = (e=>{
  if(e<4){
    return true;
  }
  return false;
})
console.log(arr1.filter(check));

//reduce function
let arr2 = [1,2,3,4,5];
const fact = (a,b)=>{
  return a*b;
}
console.log(arr2.reduce(fact));
