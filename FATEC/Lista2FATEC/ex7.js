// 07)
// José Carlos Rodrigues Antonio
// 0040961923011

let shape = {
    type: "shape",
    getType() {
        return this.type
    }
}

function Triangle (a, b, c) {

    this.a = a
    this.b = b
    this.c = c
    this.type = "Triangle"

    this.getPerimeter = () => a + b + c
}

Triangle.prototype = shape
Triangle.prototype.constructor = Triangle

// Tests
let t1 = new Triangle(1, 2, 3)
console.log(t1.constructor === Triangle)
console.log(shape.isPrototypeOf(t1))
console.log(t1.getPerimeter())
console.log(t1.getType())
