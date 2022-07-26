// Array Practice

const numbers = [1,2,3];
const numbers2 = [7,8,9];

numbers.push(4,5);
numbers.unshift(0);
numbers.splice(numbers.length,0,6)

console.log(numbers);
console.log(numbers.indexOf(1));
console.log(numbers.lastIndexOf(1));
console.log(numbers.includes(1));
console.log(numbers.find(element => element > 1));

combined = numbers.concat(numbers2);
console.log(combined);

slice = combined.slice(2,5);
console.log(slice);

for(let number of numbers)
    console.log(number);

numbers.forEach((number, index) => console.log(number, index));

numbers.sort();
console.log(numbers);
numbers.reverse();
console.log(numbers);