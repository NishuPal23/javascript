//destructuring of array  -> unpack the value from array
let arr1 = [1,2,3,4,5]
 let [a , b] = arr1
// console.log(a)
// console.log(b)

let arr2 = [2,4,6,8,10,12,14,16]
let [c , d, ...rest]= arr2
// console.log(c)
// console.log(d)
// console.log(rest)


 let arr3 = [3,4]
 let [e,f,g] = arr3
//  console.log(e)
//  console.log(f)
//  console.log(g)

 //***********Destructuring of object */
 //unpack the properties from object

 let obj1 = {
    name :"Nishu",
    id : 201,
    
 }
 let {name, id,city}=obj1
// console.log(name)
// console.log(id)
// console.log(city)


let obj2 ={
    name2:"Niketa",
    id2:202,
    city2:"Meerut"
}
 let{name2,...id2} = obj2
 console.log(name2)
 console.log(id2)


