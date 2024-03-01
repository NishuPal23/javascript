//spread 
//in function
function sum(a,b,c){
    console.log(a+b+c)
}
let arr =[2,3,4];
//sum(...arr)


//in array literals
let arr2 = [1,2,3,4,5];
let arr3 = [...arr2,6,7,8,9];
//console.log(arr3)


let arr4 = [5,6,7,8];
let copy = [...arr4];
//console.log(arr4)
//console.log(copy);
//do some changes in copy arr
copy.push(9);
//console.log(copy)
//console.log(arr4)


//in object
let obj1 = {name:"nishu",age:20};
let obj2 = {...obj1,city:"meerut"}
//console.log(obj1)
//console.log(obj2)



//*******************REST**************** */
//rest combine the value int array
let calc=0
function sum(...arr2){
    for(let i of arr2){
        calc+=i;
    }
    console.log(calc)
}
sum(1,2,3,4);


//note A function definition can only have one rest parameter, and the rest parameter must be the last parameter in the function definition.
function func2(a,b,...arr4){
    console.log(`a : ${a}`);
    console.log(`b : ${b}`);
    console.log(arr4)
}
func2(1,2,3,4,5,6,7,8);


function func3(a,b,...arr4){
    console.log("a : ",a);
    console.log("b  : ",b);
    console.log("arr4 : ",arr4)
    
}
func3(1,2);
