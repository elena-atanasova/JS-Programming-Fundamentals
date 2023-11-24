// Print Certificate

function printCertificate(grade, nameArr) {

    if (pass(grade)) {
        printHeader();
        printName(nameArr);
        formatGrade(grade);
    } else {
        let msg = `${nameArr[0]} ${nameArr[1]} does not qualify`;
        console.log(msg);
    }

}

printCertificate(4, ["E", "A"]);

function pass(grade) {
    return grade >= 3.00;
}

function printHeader() {
    console.log('~~~-   {@}   -~~~');
    console.log('~- Certificate -~');
    console.log('~~~-  ~---~  -~~~');
}

function printName(nameArr) {
    console.log(nameArr[0] + " " + nameArr[1]);
}

function formatGrade(grade) {

    let gradeText = "";
    if (grade < 3.00) {
        gradeText = "Fail";
    } else if (grade >= 3.00 && grade < 3.50) {
        gradeText = "Poor";
    } else if (grade >= 3.50 && grade < 4.50) {
        gradeText = "Good";
    } else if (grade >= 4.50 && grade < 5.50) {
        gradeText = "Very good";
    } else if (grade >= 5.50 && grade <= 6.00) {
        gradeText = "Excellent";
    }

    grade = grade < 3 ? Math.floor(grade) : grade.toFixed(2);

    let output = `${gradeText} (${grade})`;
    console.log(output);
}