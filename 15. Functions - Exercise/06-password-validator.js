function validatePassword(password) {

    if(validateLength(password) && validateChars(password)&& validateNumberOfDigits(password)) {
        console.log("Password is valid");
    }
    if (!validateLength(password)) {
        console.log("Password must be between 6 and 10 characters");
    }
    if (!validateChars(password)) {
        console.log("Password must consist only of letters and digits");
    }
    if (!validateNumberOfDigits(password)) {
        console.log("Password must have at least 2 digits");
    }
    
}

validatePassword('logIn');
validatePassword('MyPass123');
validatePassword('Pa$s$s');

function validateLength(str) {
    return str.length >= 6 && str.length <= 10;
}

function validateChars(str) {
    let isValid = false;
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) {
            isValid = true;
        } else if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
            isValid = true;
        } else if(str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
            isValid = true;
        } else {
            isValid = false;
            break;
        }
    }
    return isValid;
}

function validateNumberOfDigits(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) {
            count++;
        }
    }

    let isEnough = count >= 2 ? true : false;

    return isEnough;
}