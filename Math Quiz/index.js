const h3 = document.querySelector("h3");
const form = document.querySelector("form");
let score = 0;
let storedAnswer;

const randomNumber = () => {
    return Math.floor(Math.random() * 10) + 1;
}
const newrandomNumber = () => {
    return Math.floor(Math.random() * 4) + 1;
}

const questiongenerate = () => {
    const randomNumber1 = randomNumber();
    const randomNumber2 = randomNumber();
    const questionType = newrandomNumber();

    let firstNumber;
    let secondNumber;

    if (randomNumber1 > randomNumber2 && questionType > 2) {
        firstNumber = randomNumber1;
        secondNumber = randomNumber2;
    } else {
        firstNumber = randomNumber2;
        secondNumber = randomNumber1;
    }

    let newquestion;
    let newanswer;

    switch (questionType) {
        case 1:
            newquestion = `Q. What is ${firstNumber} multiply by ${secondNumber} ?`;
            newanswer = firstNumber * secondNumber;
            break;
        case 2:
            newquestion = `Q. What is ${firstNumber} Add to ${secondNumber} ?`;
            newanswer = firstNumber + secondNumber;
            break;
        case 3:
            newquestion = `Q. What is ${firstNumber} Divided By ${secondNumber} ?`;
            newanswer = firstNumber / secondNumber;
            break;
        case 4:
            newquestion = `Q. What is ${firstNumber} Subtract from ${secondNumber} ?`;
            newanswer = firstNumber - secondNumber;
            break;
        default:
            newquestion = `Q. What is ${firstNumber} Subtract from ${secondNumber} ?`;
            newanswer = firstNumber - secondNumber;
            break;
    }


    h3.innerHTML = newquestion;
    storedAnswer = newanswer;
}
questiongenerate();

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const input = parseFloat(document.querySelector("#answerInput").value);
    const tolerance = 0.01;
    if (Math.abs(input - storedAnswer) < tolerance) {
        score += 1;
    } else {
        score -= 1;
    }
    const newscore = document.querySelector("#score");
    newscore.innerText = score;
    event.target.reset();
    questiongenerate();
});





