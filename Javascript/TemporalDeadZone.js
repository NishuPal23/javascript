//temporal dead zone not work with var
console.log(age);
var age = 23;
//show undefined but not error

//TDZ work with let and const
// console.log(email)
// let email="nishu@google.com"
//show error can't access before initialization

//console.log(userName);
const userName = "Nishu";
//show same error as in let 

//TDZ start at the begining of scope and end when variable initialized
//console.log(score)//start of TDZ
let score = 23; //end of TDZ
//it throw error if we use it after end of TDZ it not throw error

//ex
//start of TDZ
function func(value){
     console.log(value)
}
let value = 45; //End of TDZ 
func(value); //using after end Of TDZ so it not throw error

//so we concluded that tDZ depend on order of execution (time) rather than the order in which the code is written (position)