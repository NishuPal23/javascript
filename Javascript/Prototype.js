let obj1 = {
    name:"nishu",
    email:"nishu@gmail.com",
    age:"21",
    display:function(){
       //console.log("display")
    }
}

let arr1=[1,4,7,6]
console.log(obj1.display());
Object.prototype.greeting = function(){
    //console.log("good morning")
}
//console.log(obj1.greeting());
//console.log(arr1.greeting());

let userName = "nishu    ";
String.prototype.trueLength = function(){
    //console.log(this)
    return `${this.trim().length}`;
}
//console.log(userName.trueLength())


//inheritence

const Teacher ={
    makeVideo:true
}

const TeachingSupport = {
    isAvailable:false
}

const QASupport = {
    makeAssignment:"js assignment",
    fullTime:true,
    __proto__:TeachingSupport //QASupport inherit the property of teaching support
}
console.log(QASupport.isAvailable)

Object.setPrototypeOf(TeachingSupport,Teacher);
console.log(TeachingSupport.makeVideo)
