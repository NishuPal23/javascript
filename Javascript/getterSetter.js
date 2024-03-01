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
console.log(ans)

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
console.log(obj2)

