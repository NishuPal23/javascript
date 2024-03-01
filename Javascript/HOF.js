//higher orger function or first class function
//A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.


//1 passing a function as an argument

function func1(sum){
    console.log(sum(2,6))
}
function add(a,b){
    console.log(a+b);
}
//func1(add);
//in this example we are passing our add() function as an argument to the func1 function this explain how we are treating function as a value.



//2 Assigning a function to a variable
let var1 = function(){
    console.log("assigning a function to a variable")
}
//var1();


//3 returning a function
function func2(){
    return mul(2,7);
}
function mul(a,b){
    console.log(a*b);
}
console.log(func2());



//examples of first class function