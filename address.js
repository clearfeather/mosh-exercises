// street 
// city
// zip
// showAddress(address)

let address = {
    street: '123 Maple Ln',
    city: 'Some Town',
    zip: 90210
};

// Iterate address - Static
function showAddress(address) {
    for (let key in address) {
        console.log(key, address[key])
    }
}
showAddress(address);

// Factory Function - Dynamic
function createAddress(street, city, zip) {
    return {
        street,
        city,
        zip
    };
}
let newTown = createAddress('987 Main St', 'Woodstock', 90000);
console.log(newTown);

// Constructor Function - Dynamic
function CreateAddress(street, city, zip) {
    this.street = street;
    this.city = city;
    this.zip = zip;
}
let NewTown = new CreateAddress('999 Zee St', 'Cozy Town', 77777);
console.log(NewTown);