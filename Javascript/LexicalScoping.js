// function user(){
//     let userName = "Nishu";
//     console.log(userName)
// }
// user();
//console.log(userName) it throw error that userName not define because it is define inside the user function so it has scope till function only


function outer(){
    let user = "outer"
    function inner(){
        console.log(user)
    }
    inner();
}
//outer();

function outer2(){
    function inner2(){
        let user = "inner2"
        console.log(user)
    }
    function inner3(){
        //console.log(user) it throw error it does not has scope of user
    }
    inner2();
    inner3();
}
//outer2();

function outer3(){
    function inner4(){
        let user3 = "inner4"
        console.log("inside inner4")
    }
    inner4();
    console.log(user3)
}
outer3();
