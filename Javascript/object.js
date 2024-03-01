let obj = {
    name:"Nishu",
    id:206,
    address:{
        city:"Meerut",
        country:"India"
    },
    age:21
}
// console.log(obj)
// console.log(typeof obj)

//access data
//console.log(obj.name)
//or
//console.log(obj['name'])

//add data
obj.section = 'A'
//console.log(obj)

//delete
delete obj.section
//console.log(obj)

//get all keys
// console.log(Object.keys(obj))
// console.log(Object.values(obj))

//clonning an object
let newObj = Object.assign({},obj);
console.log(newObj)
newObj.section='A'
console.log(newObj)
console.log(obj)

//iteration in object
for(let i =0;i<obj.length;i++){
    console.log(obj[i])
}
