let randomNumber = parseInt(Math.random()*100+1);
    const submit = document.querySelector("#subt");
    const userInput = document.querySelector("#guessField");
    const guessSlot = document.querySelector(".guesses");
    const remainGuess = document.querySelector(".lastResult")
    const lowOrHigh = document.querySelector(".lowOrHigh");
    const startOver = document.querySelector(".resultParas");
    const p = document.createElement('p');
    let prevGuess = [];
    let numGuess =1;
    let playGame = true;
    if(playGame){
        submit.addEventListener("click",(e)=>{
            e.preventDefault();
            const guess = parseInt(userInput.value);
            validateGuess(guess);
        });
    }
    function validateGuess(guess){
        if(isNaN(guess)){
            alert("Please Enter valid number")
        }
        else if(guess<1){
            alert("Please enter Positive number")
        }
        else if(guess>100){
            alert("please enter number less than 100")
        }
        else{
            prevGuess.push(guess);
            if(numGuess===11){
                displayGuess(guess)
                displayMessage(`Game Over . Random Number was ${randomNumber}`);
                endGame();
            }
            else{
                displayGuess(guess);
                checkGuess(guess)
            }
        }
    }
    function checkGuess(guess){
        if(guess===randomNumber){
            displayMessage("You guess right number");
            endGame();
        }
        else if(guess<randomNumber){
            displayMessage("Number is too low");
        }
        else if(guess>randomNumber){
            displayMessage("Number is too high");
        }
    }
    function displayGuess(guess){
        userInput.value="";
        guessSlot.innerHTML +=`${guess}, `;
        //guessSlot.style.color=`${rgb(55, 8, 101)}`;
        numGuess++;
        remainGuess.innerHTML = `${11-numGuess}`;
        
    }
    function displayMessage(message){
        lowOrHigh.innerHTML = `<h2>${message}</h2>`
        
    }
    function endGame(){
        userInput.value = "";
        userInput.setAttribute("disabled"," ");
        p.classList.add("button");
        p.innerHTML=`<h2 id="newGame">Start new Game</h2>`
        startOver.appendChild(p);
        playGame = false;
        newGame()
    }
    function newGame(){
        const newGameButton = document.querySelector("#newGame")
        newGameButton.addEventListener("click",function(e){
            playGame = true;
            randomNumber = parseInt(Math.random()*100+1);
            prevGuess=[];
            numGuess = 1;
            guessSlot.innerHTML="";
            remainGuess.innerHTML = `${11-numGuess}`;
            userInput.removeAttribute("disabled");
            startOver.removeChild(p);
            playGame = true;
        })
    }