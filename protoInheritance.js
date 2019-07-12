//
// Inheritance hierarchy
//
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function() {
  console.log("Duplicate from shape...");
};

function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.duplicate = function() {
  Shape.prototype.duplicate.call(this);
  console.log("Duplicate from circle...");
};

Circle.prototype.draw = function() {
  this.duplicate();
  console.log(`Circle with radius = ${this.radius} and color = ${this.color}`);
};

const c = new Circle(10, "blue");
console.log(c);
c.draw();

//
// Composition example
//

function compose(target, ...sources) {
  Object.assign(target, ...sources);
}

const canWalk = {
  walk: function() {
    console.log("Walking");
  }
};
const canEat = {
  eat: function() {
    console.log("Eating");
  }
};
const canSwim = {
  swim: function() {
    console.log("Swiming");
  }
};

function Person(name) {
  this.name = name;
}

compose(
  Person.prototype,
  canEat,
  canWalk
);

function Duck() {}

compose(
  Duck.prototype,
  canEat,
  canSwim
);

const p = new Person("Petya");
p.walk();
p.eat();

const d = new Duck();
d.swim();
d.eat();
