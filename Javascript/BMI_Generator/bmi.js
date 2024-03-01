const form = document.querySelector("form");
    form.addEventListener("submit",function(e){
        e.preventDefault();
        const height = parseInt(document.getElementById("height").value);
        const weight = parseInt(document.getElementById("weight").value);
        const result = document.querySelector("#result")
        if(height===" " || height<0 ||isNaN(height)){
            result.innerHTML = `Please Provide valid height ${height}`;
        }
        else if(weight===" " || weight<0 ||isNaN(weight)){
            result.innerHTML = `Please Provide valid weight ${weight}`;
        }
        else{
            let bmi =  (weight/((height*height)/1000)).toFixed(2);
            result.innerHTML = `<span>${bmi}</span>`
            const msg = document.getElementById("msg");
            if(bmi<18.6){
                msg.innerHTML = "Under weight";
                msg.style.color ="red";
                msg.style.fontSize="20px"
                msg.style.fontWeight="bold"
            }
            else if(bmi>=18.6 && bmi<29.9){
                msg.innerHTML = "Normal weight";
                msg.style.color ="green";
                msg.style.fontSize="20px"
                msg.style.fontWeight="bold"
            }
            else{
                msg.innerHTML = "Over weight";
                msg.style.color ="red";
                msg.style.fontSize="20px"
                msg.style.fontWeight="bold"
            }
        }

    })