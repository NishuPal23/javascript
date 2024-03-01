//arrow function
let a = 2
let b= 3
let sum = (a,b)=>a+b
//console.log(sum(a,b))

//if write in single line without curly braces then return keyword not require
//it with curly braces then return keyword required

let sum2 = (a,b)=>{
    a+b;
}
//console.log(sum2(a,b))

let sum3 = (a,b)=>{
   return  a+b;
}
//console.log(sum3(a,b))

//Note Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.

class Student{
    constructor(name){
        this.name = name;
    }
     display(){
        console.log("inside display" ,this.name)
        return ()=>{
            console.log("inside arrrow ",this.name)
        };
        
    }

}
let s1 = new Student("nishu");
let s2 = new Student("navya")
//console.log(s.name);
//let s = s1.display();
//s();
//s2.display();


////IIFE or iify immediatey invoked function expression

;(() => {
    // some initiation code
    let firstVariable;
    let secondVariable;
    //console.log("inside iify")
  })();
  
  // firstVariable and secondVariable will be discarded after the function is executed.
  
(function (){
    //console.log("inside second iify")
})()

//console.log("nishu")


//with async and await
// let func = async ()=>{
//     setTimeout(()=>{
//         //console.log("set time out")
//     },1000);
// };

// (async()=>{
//     let a = await func();
//     //console.log("inside iify")
// })();

//function wih default parameter
function add(a,b=6){
    console.log(a+b)
}
//add(2)


//function with arguments
function f1(){
    console.log(arguments[0])
    console.log(arguments[1])
    console.log(arguments[2])
    console.log(arguments[7])
}
f1(7,8,9,19,67)

let f = function createHelloworld(){
    return function say(){
        return "hello world";
    }
    

}
let ans = f();
console.log(ans())
    


