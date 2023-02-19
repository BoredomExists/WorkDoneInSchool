let total = 0;
let count = 0;
let score = 0;

do {
    score = parseInt(prompt("Enter a test score, or enter -1 to end scores.", -1));

    if(score >= 0 && score <= 100)
    {
        total = total + score;
        count ++;
        document.write(`<p>Score ${count}: ${score}</p>`);
    }
    else if (score != -1)
    {
        alert("Score must be a valid number from 0-100.");
    }
} while(score != -1);

const average = parseInt(total/count);
document.write(`<p>Average score is ${average}</p>`);