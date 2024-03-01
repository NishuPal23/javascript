
//synchronous work
// console.log("first line");
// for(let i=0;i<10000000;i++){

// }
// console.log("last line");


//asynchronous work
console.log("first line")
setTimeout(()=>{
    console.log("async work")
},1000);
console.log("lastLine")