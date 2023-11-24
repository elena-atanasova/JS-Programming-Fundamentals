function convertToJSON(firstName, lastName, colour) {
    let obj = {
        name: firstName,
        lastName: lastName,
        hairColor: colour
    }

    let str = JSON.stringify(obj);
    return str;
}

convertToJSON("George", "Jones", "Brown");