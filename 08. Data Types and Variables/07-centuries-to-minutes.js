function convertToMins(centuries) {
    let years = Math.trunc(centuries * 100);
    let days = Math.trunc(years * 365.2422);
    let hours = Math.trunc(days * 24);
    let mins = Math.trunc(hours * 60);

    console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${mins} minutes`);
}

convertToMins(1);
convertToMins(5);