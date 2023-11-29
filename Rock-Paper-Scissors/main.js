// init scores
let userScore = 0;
let AIScore = 0;

// get elements from DOM
const userScore_span = document.getElementById("user-score");
const aiScore_span = document.getElementById("ai-score");
const score_section = document.getElementById("score");
const result_section = document.querySelector("#result > p");
const rock_button = document.getElementById("rock");
const paper_button = document.getElementById("paper");
const scissors_button = document.getElementById("scissors");

function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getAIChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, AIChoice) {
    userScore++;
    const userChoice_button = document.getElementById(userChoice)
    userScore_span.innerHTML = userScore;
    result_section.innerHTML = `${capFirst(userChoice)} covers ${AIChoice}. You win!`
    userChoice_button.classList.add('!border-[#00ff00]');
    setTimeout(() => userChoice_button.classList.remove('!border-[#00ff00]'), 500);
}

function lose(userChoice, AIChoice) {
    AIScore++;
    const userChoice_button = document.getElementById(userChoice)
    aiScore_span.innerHTML = AIScore;
    result_section.innerHTML = `${capFirst(AIChoice)} covers ${userChoice}. You lost...`
    userChoice_button.classList.add('!border-[#ff0000]');
    setTimeout(() => userChoice_button.classList.remove('!border-[#ff0000]'), 500);

}

function tie(userChoice) {
    result_section.innerHTML = `You both chose ${userChoice}. It's a tie, try again!`

}

function game(userChoice) {
    const AIChoice = getAIChoice();
    // console.log("You chose " + userChoice);
    // console.log("AI chose " + AIChoise);
    switch (userChoice + AIChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            console.log("You win!");
            win(userChoice, AIChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            console.log("AI won...");
            lose(userChoice, AIChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            console.log("It's a tie! Try again!");
            tie(userChoice, AIChoice);
            break;

    }
}

function main() {
    rock_button.addEventListener('click', () => game("rock"))

    paper_button.addEventListener('click', () => game("paper"))

    scissors_button.addEventListener('click', () => game("scissors"))
}

main();
