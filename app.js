let userscore = 0;
let compscore = 0;
let round = 0;
const maxRounds = 5;

const choices = document.querySelectorAll(".choice");
const userScoreDisplay = document.querySelector("#userscore p");
const compScoreDisplay = document.querySelector("#compscore p");
const msgDisplay = document.querySelector("#msg p");

// Show final result and disable further clicks
function endGame() {
    let finalMsg = "";
    if (userscore > compscore) {
        finalMsg = "🏆 Game Over: You Win the Game!";
    } else if (userscore < compscore) {
        finalMsg = "😔 Game Over: Computer Wins!";
    } else {
        finalMsg = "😐 Game Over: It's a Tie!";
    }
    msgDisplay.innerText = finalMsg;

    // Disable further clicks
    choices.forEach(choice => {
        choice.style.pointerEvents = "none";
    });

    // Show reset button
    document.querySelector("#reset-btn").style.display = "inline-block";
}

function winner(user_win, userChoice, compChoice) {
    if (user_win) {
        userscore++;
        userScoreDisplay.innerText = `UserScore : ${userscore}`;
        msgDisplay.innerText = `You Win! ${userChoice} beats ${compChoice}`;
    } else {
        compscore++;
        compScoreDisplay.innerText = `Compscore : ${compscore}`;
        msgDisplay.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
    }
}

function draw(userChoice) {
    msgDisplay.innerText = `It's a Draw! You both chose ${userChoice}`;
}

function get_comp_choice() {
    const options = ["Rock", "Paper", "Scissors"];
    const random_index = Math.floor(Math.random() * 3);
    return options[random_index];
}

function playgame(userchoice) {
    if (round >= maxRounds) return;

    const compchoice = get_comp_choice();
    let user_win;

    if (userchoice === compchoice) {
        draw(userchoice);
    } else if (
        (userchoice === "Rock" && compchoice === "Scissors") ||
        (userchoice === "Paper" && compchoice === "Rock") ||
        (userchoice === "Scissors" && compchoice === "Paper")
    ) {
        user_win = true;
        winner(user_win, userchoice, compchoice);
    } else {
        user_win = false;
        winner(user_win, userchoice, compchoice);
    }

    round++;

    if (round === maxRounds) {
        endGame();
    }
}

// Event listeners
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});

// Reset Game
document.querySelector("#reset-btn").addEventListener("click", () => {
    userscore = 0;
    compscore = 0;
    round = 0;

    userScoreDisplay.innerText = `UserScore : 0`;
    compScoreDisplay.innerText = `Compscore : 0`;
    msgDisplay.innerText = `The Winner is :`;

    choices.forEach(choice => {
        choice.style.pointerEvents = "auto";
    });

    document.querySelector("#reset-btn").style.display = "none";
});
