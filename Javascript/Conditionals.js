//if else
let num = 4
if(num%2==0){
    console.log("even")
}
else{
    console.log("odd")
}

//ternary operator
num%2==0?console.log("even"):console.log("odd")
//condition  if block          else block

let a = 4
if(a>=0){
    if(a>5){
        console.log("a is greater than 0 and 5")
    }
    else{
        console.log("a is greater than 0 but less than 5")
    }
}
else{
    console.log("a is less than 0")
}

//ternary
a>=0?a>5?console.log("a is greater than 0 and 5"):console.log("a is greater than 0 but less than 5"):console.log("a is less than 0")
