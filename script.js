const choiceButtons = document.querySelectorAll(".choice");

let playerMove = null; // hold the player's throw

function clearSelected() {
    choiceButtons.forEach(btn => btn.classList.remove("selected"));
}

const Throw = ["rock", "paper", "scissors"];
const ThrowImage = {
    rock: "images/rock.PNG",
    paper: "images/paper.PNG",
    scissors: "images/scissors.PNG",
    question: "images/question-mark.PNG"
};

let shuffleTimer = null;
let revealTimer = null;

// This is a event listeners to choice buttons and set timeout for computer choice, suffle images and desplay result
choiceButtons.forEach((btn) => {
    btn.addEventListener("click", () => {

        resetRound();

        // clear previous selection highlighted 
        choiceButtons.forEach((b) => b.classList.remove("selected"));

        btn.classList.add("selected");

        playerMove = btn.id;

        let i = 0;
        shuffleTimer = setInterval(() => {
            computerDefult.src = ThrowImage[Throw[i % Throw.length]];
            i++;
        }, 500);

        setTimeout(() => {
            clearInterval(shuffleTimer);
            shuffleTimer = null;
            const computerMove = getComputerChoice();
            showComputerChoice(computerMove);

            let result = "";
            if (playerMove === computerMove) {
                result = "Tie ";
            } else if (
                (playerMove === "rock" && computerMove === "scissors") ||
                (playerMove === "paper" && computerMove === "rock") ||
                (playerMove === "scissors" && computerMove === "paper")
            ) {
                result = "You win";
            } else {
                result = "Computer wins";
            }
            resultText.textContent = result;

        }, 3000);
    });
});


const computerDefult = document.getElementById("computer-image");
const resultText = document.getElementById("result-text");

// pick a random throw for computer  
const getComputerChoice = () => {
    const idx = Math.floor(Math.random() * Throw.length);
    return Throw[idx];
};

const showComputerChoice = (choice) => {
    computerDefult.src = ThrowImage[choice];
};

const playAgainBtn = document.getElementById("play-again");

playAgainBtn.addEventListener("click", () => {
    resetRound();

});

// Make it the defult page like when it first loads
const resetRound = () => {
    choiceButtons.forEach((b) => b.classList.remove("selected"));
    playerMove = null;
    computerDefult.src = ThrowImage.question;
    resultText.textContent = "Make a move to start a game";

};



