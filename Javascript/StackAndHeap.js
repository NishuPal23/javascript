//primitive datatype stored in stack and reference of non primitive stored in stack
let name = "Nishu"
let anotherName = name //copy of name variable assign to anotherName
// console.log(name)
// console.log(anotherName)
anotherName = "Nishu Pal"
// console.log(anotherName)
// console.log(name)
//there is no change in name variable because copy of name variable is given to anotherName not original name variable


//non primitive
let obj = {
    name : "Nishu",
    age : 19,
    address :"Meerut"
}
let anotherObj = obj //anotherObj and obj both point to same memory in heap
console.log(obj)
console.log(anotherObj)
anotherObj.age = 21
console.log(obj)
console.log(anotherObj)
//change occur in both variable because both point to same memory location in heap


