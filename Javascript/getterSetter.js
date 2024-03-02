class user{
    get(){
        return this.username
    }
    set(value){
        this.username= value
    }
}
const obj1 = new user()
obj1.set("nishu");
let ans = obj1.get();
//console.log(ans)

class user2{
    constructor(username,email){
        this.username=username
        this.email=email
    }
    get username(){
        return this._username.toUpperCase()
    }
    set username(value){//it override the constructor value
        this._username= value.toUpperCase()
    }
}
const obj2 = new user2("nishu","nishu@goole.com");
//console.log(obj2)



class student1{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;

    }
    get username(){
        return this.username;
    }
    set username(value){
        this.username = value 
    }
}
//let s1 = new student1("Raghav","raghav@google.com",123456);
//console.log(s1)
//console.log(s1.username)
//in above example constructor and setter both tries to set the value so it is type of race b/w both of them so it generate max callstack size exceed

//solution-> to overcome this problem we use  'this._propertyName'   to make it new property

class student2{
    constructor(name,email,password){
        this.name = name;
        this.email = email;
        this.password = password;

    }
    get name(){
        return this._name;
    }
    set name(value){
        this._name = value.toUpperCase() ;
    }
}
let s2 = new student2("Raghav","raghav@google.com",123456);
console.log(s2)
console.log(s2.name)






