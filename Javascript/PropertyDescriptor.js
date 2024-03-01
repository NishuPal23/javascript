console.log(Math.PI)
const descriptor = Object.getOwnPropertyDescriptor(Math,"PI");
console.log(descriptor)

//you can make your own object and allow and disallow the property
const user = {
    name:"Nishu",
    email:"nishu@gmail.com",
    password:"123"
}
console.log(Object.getOwnPropertyDescriptor(user,"name"));

//if we want it to writeable false
Object.defineProperty(user,"name",{
    writable:false
})
console.log(Object.getOwnPropertyDescriptor(user,"name"));
//now we make writable false so it not allowed to change value
user.name="Rajat"
user.email = "rajat@google.com"
console.log(user.name)
console.log(user.email)
