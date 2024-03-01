
// let form = document.querySelector("form")
// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     let num1 = parseInt(document.querySelector("#num1").value);
//     let num2 = parseInt(document.querySelector("#num2").value);
//     let res = document.querySelector("#res")
//     let ans = num1+num2;
//     res.innerHTML=`<span>${ans}</span>`
    
// })
function add(){
    let num1 = parseInt(document.querySelector("#num1").value);
    let num2 = parseInt(document.querySelector("#num2").value);
    let res = document.querySelector("#res")
    if(isNaN(num1) || isNaN(num2)){
        res.innerHTML=`please enter valid number`
    }
    else{
        let ans = num1+num2;
        res.innerHTML=`<span>${ans}</span>`
    }

}
function sub(){
    let num1 = parseInt(document.querySelector("#num1").value);
    let num2 = parseInt(document.querySelector("#num2").value);
    let res = document.querySelector("#res")
    let ans = num1-num2;
    res.innerHTML=`<span>${ans}</span>`

}
function mul(){
    let num1 = parseInt(document.querySelector("#num1").value);
    let num2 = parseInt(document.querySelector("#num2").value);
    let res = document.querySelector("#res")
    let ans = num1*num2;
    res.innerHTML=`<span>${ans}</span>`

}
function div(){
    let num1 = parseInt(document.querySelector("#num1").value);
    let num2 = parseInt(document.querySelector("#num2").value);
    let res = document.querySelector("#res")
    let ans = num1/num2;
    res.innerHTML=`<span>${ans}</span>`

}