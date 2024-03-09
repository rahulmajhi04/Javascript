// async function getData() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(355);
//         }, 3000);
//     })
// }
async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data = x.json();
    console.log(data);
    return data;
}

async function main(){
    console.log('Loading Modules');
    console.log('Do something else');
    console.log('Load more');
    let data = await getData();
    console.log(data);
    console.log('Process data');
    console.log('task 2');
}
main();