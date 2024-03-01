const box = document.querySelectorAll(".box");
const body = document.querySelector("body");
    box.forEach((b)=>{
        b.addEventListener("click",(e)=>{
            console.log(e.target)
            if(e.target.id=="orange"){
                body.style.backgroundColor=e.target.id;
            }
            if(e.target.id=="red"){
                body.style.backgroundColor=e.target.id;
            }
            if(e.target.id=="blue"){
                body.style.backgroundColor=e.target.id;
            }
            if(e.target.id=="green"){
                body.style.backgroundColor=e.target.id;
            }
        })
    })