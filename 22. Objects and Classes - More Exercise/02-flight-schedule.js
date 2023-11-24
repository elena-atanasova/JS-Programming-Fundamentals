function flightSchedule(arr) {
    let flights = arr.shift();
    let changes = arr.shift();
    let status = arr.toString();

    let finalFlights = {};

    for (let fl of flights) {
        let status = 'Ready to fly';
        let [sector, dest] = fl.split(" ");
        finalFlights[sector] = {
            Destination: dest,
            Status: status
        };
    }

    for (let ch of changes) {
        let [sector, status] = ch.split(" ");
        if (finalFlights.hasOwnProperty(sector)) {
            finalFlights[sector].Status = status;
        }
    }

    for (let flight in finalFlights) {
        if (finalFlights[flight].Status === status) {
            console.log(finalFlights[flight]);
        }
    }
}

flightSchedule([['WN269 Delaware', 'FL2269 Oregon', 'WN498 Las Vegas', 'WN3145 Ohio', 'WN612 Alabama', 'WN4010 New York',
    'WN1173 California', 'DL2120 Texas', 'KL5744 Illinois', 'WN678 Pennsylvania'],
['DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK430 Cancelled'],
['Cancelled']]);