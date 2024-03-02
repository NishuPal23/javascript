function setUserName(username){
    this.username = username;
    console.log("called")
}
function createUser(username,email,password){
    setUserName(username)
    this.email = email,
    this.password = password
}
let a = new createUser("nishu","nishu@gmail.com",111234);
console.log(a)

//in above case this is not able to set value to username so we can use call function

function setUserName2(username){
    this.username = username;
    console.log("called")
}
function createUser2(username,email,password){
    setUserName2.call(this,username)
    this.email = email,
    this.password = password
}
let b = new createUser2("nishu","nishu@gmail.com",111234);
console.log(b)