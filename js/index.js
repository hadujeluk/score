const form = document.getElementById('score-form');
const output = document.getElementById('output');


form.addEventListener('submit', (e) => {
    // Prevent the form from submitting normally
    e.preventDefault();

    // Get the score from the form
    const score = parseInt(e.target.score.value);


    // Convert the score to a letter grade
    let grade = 'F';
    if (score >= 90) {
        grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >= 70) {
        grade = 'C';
    } else if (score >= 60) {
        grade = 'D';
    }else if(score<0 || score> 100){
        return( "enter a valid score")
    }

    // Display the letter grade on the page
    output.textContent = `Your score is: ${grade}`;
});