// sum(1,2,3,4) => 10
// if array, Array.isArray()

function sum(...sums) {
    const reducer = (sum, val) => sum + val;
    const initialValue = 0;
    return sums.reduce(reducer, initialValue);
}

total = sum(1,2,3,4);
console.log(total);