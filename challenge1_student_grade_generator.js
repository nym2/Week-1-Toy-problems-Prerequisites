const prompt = require('prompt-sync')();

function getStudentGrade() {
    const marks = parseInt(prompt("Enter student marks (0-100): "), 10);
    let grade;

    if (marks > 100 || marks < 0 || isNaN(marks)) {
        console.log("Invalid marks. Please enter a number between 0 and 100.");
        return;
    }

    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 50) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    console.log(`The grade is: ${grade}`);
}

getStudentGrade();