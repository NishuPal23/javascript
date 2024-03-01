let obj1 = {
    username:"nishu",
    email:"nishu@google.com",
    welcomeMessage : function(){
        console.log(`${this.username }, welcome to website`);
        console.log(this)
    }
}
// obj1.welcomeMessage();
// obj1.username="Raghav";
// obj1.welcomeMessage()

//console.log(this)

const regularFunction = function(){
    //console.log(this)
}
const obj3 = {
    method :regularFunction
}
obj3.method();

const arrowFunction = ()=>{
    //console.log(this)
}
const obj4 = {
    method :arrowFunction
}
obj4.method();
//note The key distinction is that arrow functions do not have their own this context; instead, they inherit this from the enclosing lexical scope. This behavior makes arrow functions particularly useful in certain scenarios.




function func(){
    
    console.log(this)
}
let af = ()=>{
    console.log(this)
}
// func();
// af();




function func3(){
    let key =23;
    console.log(this.key)
}
//When you call func3() in a regular function, the value of this inside the function is determined by how the function is called. Since you are calling it in the global context (not as a method of an object or in a specific context), this refers to the global object (in a browser environment, it would be window). However, there is no property key on the global object, so this.key is undefined.

let af2 = ()=>{
    let key = 34
    console.log(this.key)
}

//Arrow functions do not have their own this context. Instead, they inherit this from the enclosing lexical scope. In your case, since the arrow function af2 is defined at the top level (not within any function or object), it inherits this from the global context. Therefore, this.key inside the arrow function refers to the global object's key, which is undefined.
func3()
af2();