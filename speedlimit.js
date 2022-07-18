// Speed Limit = set
// Every 5 over = 1 point - Math.floor(1.3) rounds
// More than 12 points, suspended

const speedLimit = 70;
const mPerPoint = 5;

// Actual Speed
checkSpeed(72);

function checkSpeed(speed) {
    if (speed <= speedLimit)
        console.log(`You are going ${speed}mph, nice job.`);
    else if (speed < speedLimit + mPerPoint) {
        console.log(`You are speeding at ${speed}mph, but within the limit of no points.`);
    }
    else {
        const speeding = speed - speedLimit;
        const points = Math.floor((speed - speedLimit) / mPerPoint);
        if (points >= 12) {
            console.log(`You have ${points} points, your license is SUSPENDED.`)
        }
        else { console.log(`You are speeding at ${speeding}mph over, and have ${points} point(s), be careful.`) }
    }
}