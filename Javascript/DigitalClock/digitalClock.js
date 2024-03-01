let clock = document.getElementById("clock")
    let date = new Date();
    setInterval(function(){
        let date = new Date();
        clock.innerHTML = date.toLocaleTimeString();
        clock.style.color="white";
    },1000);