
//creation of promise
const promiseOne = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async task is completed");
    },1000);resolve()
})

//consumption of promise
promiseOne.then(()=>{
    console.log("promise consumed")
})

const promiseTwo = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({userName:"nishu", email:"nishu@gmail.com"})
    },1000)
})

promiseTwo.then((user)=>{
    console.log(user.userName)
})


const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve("there is no error")
        }
        else{
            reject("there is error")
        }
    })
})

promiseThree.then((msg)=>{
    console.log(msg)
}).catch((msg)=>{
    console.log(msg)
})


const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({userName:"Nishu",address:{city:"Meerut",state:"up"}})
        }
        else{
            reject("error")
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user.address.city)
}).catch((msg)=>{
    console.log(msg)
})

promiseFour.then((user)=>{
    console.log(user)
    return user.userName
}).then((userName)=>{
    console.log(userName)
}).catch((msg)=>{
    console.log(msg)
})


const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("asyn task")
    })
})

//promise consumption using async await
async function promiseConsume(){
    const response = await promiseFive
    console.log(response)
}
promiseConsume()

const promiseSix = new Promise((resolve,reject)=>{
    let error = true;
    setTimeout(()=>{
        if(!error){
            resolve("asynchronous")
        }
        else{
            reject("ERROR")
        }
    },1000)
})

async function consumePromiseSix(){
    try{
        const response = await promiseSix
        console.log(response)
    }
    catch(err){
        console.log(err)
    }
}
consumePromiseSix();