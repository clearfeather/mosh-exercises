// sum(1,2,3,4) => 10
// if array, Array.isArray()

function sum(...sums) {
    return sums.reduce((a,b) => a + b);
}

total = sum(1,2,3,4);
console.log(total);