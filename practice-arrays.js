// Array Practice

let numbers = [1,2,3];
let numbers2 = [7,8,9];

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

numbers = [1, -1, 2, 3];
const filtered = numbers.filter(n => n >= 0);
let items = filtered.map(n => `<li>${n}</li>`);
console.log(items);
const html = `<ul>${items.join('')}</ul>`;
console.log(html);
items = filtered.map(n => ({ value: n }));
console.log(items);

items = numbers
    .filter(n => n >= 0)
    .map(n => ({ value: n }))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);

console.log(items);