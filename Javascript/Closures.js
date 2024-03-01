function myFunc(){
    let mesg = "hello"
    console.log("inside myfunc")
    function displayMsg(){
        console.log(mesg)
    }
    return displayMsg;
}
let call = myFunc();
call();