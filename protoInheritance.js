function Shape() {}

Shape.prototype.duplicate = function() {
  console.log("Duplicated...");
};

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.draw = function() {
  this.duplicate();
  console.log(`Circle with radius = ${this.radius}`);
};

const c = new Circle(10);
console.log(c);
c.draw();
