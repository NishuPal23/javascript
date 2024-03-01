class user{
    constructor(name,email,password){
        this.name = name
        this.email=email
        this.password= password
    }

    encryptPassword(){
        console.log(`${this.password}abc`);
    }
}

const obj1 = new user("nishu","nishu@gmail.com",123);
// console.log(obj1);
// console.log(obj1.password)
// obj1.encryptPassword();


//inheritence
class user2{
    constructor(username){
        this.username= username
    }
    logMe(){
        console.log(`username is : ${this.username}`)
    }
}
class teacher extends user2{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`a new course was added by ${this.username}`)
    }
}
const t = new teacher("nishu","nishu@google.com",123)
console.log(t.username)
t.addCourse()
t.logMe()
const u2 = new user2("Rajat");
console.log(u2.username)
console.log(t.username);
t.addCourse()
