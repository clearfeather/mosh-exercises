// street 
// city
// zip
// showAddress(address)

let address = {
    street: '123 Maple Ln',
    city: 'Some Town',
    zip: 90210
};

function showAddress(address) {
    for (let key in address) {
        console.log(key, address[key])
    }
}

showAddress(address);