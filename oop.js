// Creating an object, basic

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: () => {
        console.log('draw');
    }
};

// Creating an Object, two methods

// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: () => {
            console.log('draw');
        }
    };
};
const circle1 = createCircle(1);
circle1.draw();

// Constructor Function
// requires 'new' operator
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const circle2 = new Circle(1);