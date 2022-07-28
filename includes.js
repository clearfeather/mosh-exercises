const numbers = [1,2,3,4,5,6];

// console.log(numbers.includes(1));

function includes(array, searchElement) {
    //iterate through array
    //if at a point found, return true, else return false
    for (let element of array) {
        if (element === searchElement) {
            return true;
        } return false;
    }
}

const query = includes(numbers, 2);
console.log(query);