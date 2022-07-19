const movie = {
    Title: 'Black Plauge',
    Released: 2020,
    Rating: 3.5,
    Director: 'Dr. Evil'
};

showStrings(movie);
showNumbers(movie);

function showStrings(obj) {
    console.log("***Displaying Strings***");
    for (let str in obj) {
        if (typeof obj[str] === 'string'){
            console.log(`${str}: ${obj[str]}`);
        }
    }
}

function showNumbers(obj) {
    console.log("***Displaying Numbers***");
    for (let num in obj) {
        if (typeof obj[num] !== 'string'){
            console.log(`${num}: ${obj[num]}`);
        }
    }
}