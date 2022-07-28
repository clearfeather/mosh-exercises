const numbers = arrayFromRange(1,10);

function arrayFromRange(min, max) {
    //create empty array
    const output = [];
    //loop from min to max
    for (let i = min; i <= max; i++) {
        // Output each iteration into array
        output.push(i);
    } return output;
}

console.log(numbers);