// fizbuzz
// divisible by 3 = fizz
// divisible by 5 = buzz
// divisible by 3 & 5 = fizzbuzz
// not divisible by 3 or 5 = input
// not a number = 'not a number'

console.log(fizzBuzz(15));

function fizzBuzz(input) {
    if (typeof input !== 'number') return NaN;
    if (input % 3 === 0 && input % 5 === 0) return 'fizbuzz';
    if (input % 3 === 0) return 'fizz';
    if (input % 5 === 0) return 'buzz';
    if (input % 3 !== 0 || input % 5 !== 0) return input;
}