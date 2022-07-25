// Array Practice

const numbers = [1,2,3];

numbers.push(4,5);
numbers.unshift(0);
numbers.splice(numbers.length,0,6)

console.log(numbers);
console.log(numbers.indexOf(1));
console.log(numbers.lastIndexOf(1));
console.log(numbers.includes(1));
console.log(numbers.find(element => element > 1));