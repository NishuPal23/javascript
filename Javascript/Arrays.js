let arr1 = [1,2,3,4,5]
// console.log(arr1)
//console.log(typeof arr1)
let arr2 = [6,7,8,9,10]
arr1[7 ]= 7

//concat()
let arr3 = arr1.concat(arr2)
//console.log(arr3)

//length
// console.log(arr1.length)

//indexOf
//console.log(arr1.indexOf(3))

//push -> insert at last
let arr4 =[]
arr4.push(2);
arr4.push(4);
arr4.push(6);
//console.log(arr4)

//unshift -> insert at begining
arr4.unshift(0);
//console.log(arr4)

//pop -> remove from last and return removed element
//console.log(arr4.pop())
//console.log(arr4)

//shift -> remove from strating and return removed element
//console.log(arr4.shift())
//console.log(arr4)


let arr5 = arr4;
//console.log(arr5)

//change in arr5
arr5.push(8)
// console.log(`Elements in arr4 ${arr4}`)
// console.log(`Elements in arr5 ${arr5}`)
//change occur in arr4 also because arr4 and arr5 point to same memory location

//convert array to string join(), toString()
let str = ['N','i','s','h','u']

//  console.log(str.join());
// console.log(str.join(""))
// console.log(str.join(" "))
// console.log(str.join("$"))
// console.log(str.toString())
// console.log(typeof str)
// console.log(typeof str.join(" "))


//slicing
let num = [1,2,3,4,5,6,7,8,9,10]
// index  [0,1,2,3,4,5,6,7,8,9]
//-index  [-10,-9,-8,-7,-6,-5,-4,-3,-2,-1]
// console.log(num.slice(2,6))
// console.log(num.slice(3))
// console.log(num.slice(-8,-1))
// console.log(num)


//splice(index,no of element remove,no want to add)
let num2 = [1,2,3,4,5]
 let remove = num2.splice(1,3)
//console.log(remove)
//console.log(num2)
let remove2 = num2.splice(2,3,6,7,8)
//console.log(remove2)
//console.log(num2)


//sort -> only sort one digit number
let num4 = [9,2,1,5,8]
num4.sort();
//console.log(num4)
let num5 = [67,34,2,8,5]
// num5.sort((a,b)=>a-b);
// console.log(num5)
//descending
num5.sort((a,b)=>b-a);
//console.log(num5)

//iteration in array
//for loop
let score =[200,340,123,675]
for(let i=0;i<score.length;i++){
    //console.log(score[i])
}

//for of loop
for(let i of score){
   // console.log(i)
}


//for in loop 
for(let i in score){
    //console.log(i)
}

let myArr = [
    {
        title:"bookOne",
        publish:2003,
        price:344
    },
    {
        title:"bookTwo",
        publish:2002,
        price:400
    },
    {
        title:"bookThree",
        publish:1999,
        price:450
    }

]
for(let i of myArr){
    //console.log(i)
}
//want title
for(let i of myArr){
    //console.log(i.title)
}
//all keys
for(let i of myArr){
    //console.log(Object.keys(i))
}

let s = []
//console.log(typeof s)

let Arr1 = [];
//console.log(Arr1.length)
Arr1.push("Apple");
Arr1.push("Banana");
Arr1.push("Mango");
//console.log(Arr1.length)
Arr1[5] ="Guava";
//console.log(Arr1.length);
for(let i of Arr1){
    //console.log(i)
}


//increasing length
let Arr2 = []
Arr2.push("one");
//console.log(Arr2[0]);
Arr2[0] = "first"
//console.log(Arr2[0])
Arr2.push("two");
Arr2.push("three");
//console.log(Arr2.length)
Arr2.length = 6;
//console.log(Arr2.length)
//console.log(Arr2[3])
Arr2[3]="four"
//console.log(Arr2[3])



//decreasing length
Arr2.length = 0
//console.log(Arr2.length)
//console.log(Arr2[2])


// forEach()
let count = [1,2,3,4,];
count.forEach((ele)=>{
   //console.log(ele)
})


//filter
let findEven = [1,2,3,4,5,6,7,8];
let ans = findEven.filter((ele)=>ele%2==0)
// console.log(ans)
// console.log(findEven)

let product = [
    {
        id:1,
        name:"laptop",
        price:70000,
        deliverAddress : "Meerut"
    },
    {
        id:2,
        name:"Mobile Phoone",
        price:45000,
        deliverAddress : "Meerut"
    },
    {
        id:3,
        name:"Earphone",
        price:5000,
        deliverAddress : "Mumbai"
    },
    {
        id:4,
        name:"ipad",
        price:65000,
        deliverAddress : "Pune"
    }
]

let filterProduct = product.filter((ele)=>ele.price>60000)
//console.log(filterProduct)
let filterProduct2 = product.filter((ele)=>ele.deliverAddress=="Meerut")
//console.log(filterProduct2)


//map
let addOne = [1,2,3,4,5];
let result = addOne.map((ele)=>ele+1);
//console.log(result)

//nested map
let anotherResult = result.map((ele)=>ele+10)
//console.log(anotherResult)
//console.log(typeof anotherResult)

let more = addOne.map((ele)=>ele+1).map((ele)=>ele+10)
//console.log(more)



//reduce
let sum = [1,2,3,4,5]
let total = sum.reduce((acc,curr)=>acc+curr,0)
console.log(total)

let display = sum.reduce(function(acc,curr){
    console.log(`acc : ${acc} and curr : ${curr}`)
    return acc+curr
},0)
console.log(display)















