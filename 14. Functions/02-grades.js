function formatGrade(grade) {
    let gradeText = "";
    
    if (grade < 3.00) {
        gradeText = "Fail";
    } else if(grade >= 3.00 && grade < 3.50) {
        gradeText = "Poor";
    } else if(grade >= 3.50 && grade < 4.50) {
        gradeText = "Good";
    } else if (grade >= 4.50 && grade < 5.50) {
        gradeText = "Very good";
    } else if (grade >= 5.50 && grade <= 6.00) {
        gradeText = "Excellent";
    }

    grade = grade < 3 ? Math.floor(grade) : grade.toFixed(2);

    let output = `${gradeText} (${grade})`;
    return output;
}

console.log(formatGrade(2.99));