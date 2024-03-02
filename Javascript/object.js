
//************************creating object through literal
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

//*************************access data
//console.log(obj.name)
//or
//console.log(obj['name'])

//***********************************add data
obj.section = 'A'
//console.log(obj)

//*****************************delete
delete obj.section
//console.log(obj)

//**************************get all keys
// console.log(Object.keys(obj))
// console.log(Object.values(obj))

//***************************clonning an object Object.assign(target,source)
let newObj = Object.assign({},obj);
//console.log(newObj)
newObj.section='A'
//console.log(newObj)
//console.log(obj)



const target = { name: "raghav", age: 23,branch:"cse" };
const source = { name: "nishu", age: 21,city:"meerut" };
let newObj2 = Object.assign(target,source);
//console.log(newObj2);
//console.log(target)
//note it will copy only enumerable and own property
//enumerable property are those which can be iterable
//own property which is defined in current object not inherited


let parent = {inheritedProperty : "i am in parent"}
let child = Object.create(parent)
//now child has access of parent property
//console.log(child.inheritedProperty);
//so inherited property is not a own property of child
child.ownProperty = "i am in child";
//owmProperty is own property of child
//so we see that it copy only own property

let res = Object.assign({},child);
//console.log(res)

//*****************************iteration in object
for(let i =0;i<obj.length;i++){
    //console.log(obj[i])
}


//***************************creation of object using constructor
let obj2 = Object()
//console.log(obj2)
obj2={
    name:"nishu",
    age:21,
    city:"Meerut"
}
//console.log(obj2)
let obj3 = Object({
    name:"Raghav",
    age:23,
    city:"Banglore"
})
//console.log(obj3)

let obj4 = Object(undefined)
//console.log(obj4)

let obj5 = Object(null)
//console.log(obj5)

let obj6 = Object("nishu")
//console.log(typeof obj6)
//console.log( obj6)



//*************************creating object using new keyword
let myObj1 = new Object();
//console.log(myObj1)
let myObj2 = new Object({
    name:"noor",
    age:21,
    city:"Meerut"
})
//console.log(myObj2)

let myObj3 = new Object("nishu")
//console.log(myObj3)

let myObj4 = new Object(undefined)
//console.log(myObj4)

let myObj5 = new Object(null)
//console.log(myObj5)



//*************Object.create() */
/*The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object. */
let myObj6 = {name:"Navya",rollno:206}
let copy = Object.create(myObj6)
//console.log(copy.name)
copy.name="raghav"
// console.log(copy.name)
// console.log(myObj6.name)
myObj6.name="noor";
// console.log(copy.name)
// console.log(myObj6.name)



/********************Object.freeze() */
let student1 = {name:"nishu",age:23,rollno:206}
//without freeze we can change it
//student1.age = -3;
//console.log(student1)

//after freeze it not change
Object.freeze(student1)
student1.age=-2;
//console.log(student1)


/***********************Object.defineProperty(object,"property",{configuration like value , writable}) */
//The Object.defineProperty() static method defines a new property directly on an object, or modifies an existing property on an object, and returns the object.
let stu = {}
 Object.defineProperty(stu,"name",{
    value:"rajat",
    writable:false
})
console.log(stu.name)


/******************Object.getOwnPropertyDescriptor */
//The Object.getOwnPropertyDescriptor() static method returns an object describing the configuration of a specific property on a given object (that is, one directly present on an object and not in the object's prototype chain). The object returned is mutable but mutating it has no effect on the original property's configuration.
let student2 = {name:"Raghav",age:23,city:"Meerut"}
//console.log(Object.getOwnPropertyDescriptor(student2,"name"))
Object.defineProperty(student2,"name",{
    writable:false
});
//console.log(Object.getOwnPropertyDescriptor(student2,"name"))


//****************************Object.keys() */
//Object.keys(obj) returns an array of a given object's own enumerable property names.
//console.log( Object.keys(student2));

let user1 = {name:"ritika",isLoggedIn:true} 
let order1 = Object

//****************************Object.values() */
//Object.keys(obj) returns an array of a given object's own enumerable property values.
//console.log(Object.values(student2));

//*****************************Object.entries */
//Object.keys(obj) returns an array of a given object's own enumerable property key value pair.
//console.log(Object.entries(student2))


//*****************************destructuring of object */
let {name,age,city,isLoggedIn}=student2;
// console.log(name)
// console.log(age)
// console.log(city)
//console.log(isLoggedIn)

let student4 = {name1:"noor",age1:21,city1:"meerut"}
let{name1,age1} = student4;
// console.log(name1)
// console.log(age1)


let student5 ={
    name2:"Niketa",
    id2:202,
    city2:"Meerut"
}
 let{name2,...id2} = student5
//  console.log(name2)
//  console.log(id2)


///********************Object prototype */
//Prototypes are the mechanism by which JavaScript objects inherit features from one another.
let student6 = {
    name:"Niharika",
    age:"21",
    
}
Object.prototype.greeting = function(){
    console.log("hello user")
}
//student6.greeting();
let student7 = {
   __proto__:student6
}
student7.greeting();
//student7 doesnot have greeting property but it create a prorotype
console.log(student6.name)
//anothre way Object.setPrototypeOf(student7,student6)



