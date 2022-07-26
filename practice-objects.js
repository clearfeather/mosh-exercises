//Objects Practice

const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

// const oval = Object.assign({}, circle);

const oval = { ...circle};

console.log(oval);