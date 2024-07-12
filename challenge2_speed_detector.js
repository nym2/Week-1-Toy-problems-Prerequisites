const prompt = require('prompt-sync')();

function checkSpeed() {
    const speed = parseInt(prompt("Enter the speed of the car: "), 10);

    if (isNaN(speed) || speed < 0) {
        console.log("Invalid speed. Please enter a positive number.");
        return;
    }

    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        if (demeritPoints > 12) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }
}

checkSpeed();