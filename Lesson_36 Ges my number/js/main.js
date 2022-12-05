//? Callback Function
// function func(x, callback){
//     let pow = x**x;
//     callback(pow);
// };

// const hello =function (){
//     console.log(1);
// };

// func(5, hello)

// func(5, (lalaku) => {
//     console.log(lalaku);
// })

//? Foreach
// let arr = ["Hello", "Good morning", "Hi", "Bye"];

// for(let i =0;  i<arr.length; i++){
//     console.log(arr(i));
// }

// arr.forEach((item, index, arr) =>{
//     console.log(item, index, arr);
// })

//! Oyin
const scoreEl = $(".score");
const highscoreEl = $(".highscore");
const massageEl = $(".message");
const numInputEl = $(".guess");
const checkBtn = $(".check");
const bodyEl = $("body");
const numberEl = $(".number");
const newRoundbtn = $(".newRound")

let guessedNum = Math.floor(Math.random() * 20) + 1;

const gameSetting = {
    score: 20,
    highScore: 0,
    guessedNumber: guessedNum,
    gameHistory: [],
};

console.log(gameSetting.guessedNumber);
scoreEl.innerHTML = gameSetting.score;

function winner() {
    numberEl.innerHTML = gameSetting.guessedNumber;
    bodyEl.style.background = "green";
    massageEl.textContent = "You win";
    gameSetting.highScore = gameSetting.score;
    highscoreEl.textContent = gameSetting.highScore;
    newRoundbtn.removeAttribute("disabled");
}

function loser() {
    if (numInputEl.value !== "") {
        bodyEl.style.background = "red";
        numInputEl.valueAsNumber > gameSetting.guessedNumber ? (massageEl.textContent = "Too high") : (massageEl.textContent = "Too low");
        checkBtn.removeAttribute("disabled", true);

        if (Number(scoreEl.textContent) > 0) {
            gameSetting.score -= 1;
            scoreEl.textContent = gameSetting.score;
        } else {
            gameOver();
        }

        setTimeout(() => {
            bodyEl.style.background = "#222";
            massageEl.textContent = "Start guessing..."
            numInputEl.value = "";
            checkBtn.removeAttribute("disabled");
        }, 3000);
    } else {
        alert("Enter value");
    }
}


function cheacker() {
    numInputEl.valueAsNumber === gameSetting.guessedNumber ? winner() : loser();
};

function nextRound() {
    numberEl.textContent = "?";
    bodyEl.style.background = "#222";
    numInputEl.value = "";
    gameSetting.score = 20;
    scoreEl.textContent = gameSetting.score;
    massageEl.textContent = "Start guessing..."
    newRoundbtn.setAttribute("disabledd", true)
}

newRoundbtn.addEventListener("click", nextRound);
checkBtn.addEventListener("click", cheacker);