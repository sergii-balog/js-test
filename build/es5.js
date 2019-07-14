"use strict";

function HtmlElement() {
  this.click = function () {
    console.log("clicked");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("focused");
};
HtmlElement.prototype.render = function () {
  console.log("base render");
};

function HtmlSelectElement() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  this.items = items;

  this.addItem = function (value) {
    this.items.push(value);
  };
  this.removeItem = function (value) {
    var index = this.items.indexOf(value);
    this.items.splice(index, 1);
  };
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

HtmlSelectElement.prototype.render = function () {
  HtmlElement.prototype.render.call(this);
  console.log("<select>");
  this.items.map(function (item) {
    console.log("\t<option>" + item + "</option>");
  });
  console.log("</select>");
};

var el = new HtmlElement();
console.log(el);

var elS = new HtmlSelectElement([1, 2, 3]);
console.log(elS);

function HtmlImage() {
  var src = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  this.src = src;
}

HtmlImage.prototype = new HtmlElement();
HtmlImage.prototype.constructor = HtmlImage;

HtmlImage.prototype.render = function () {
  console.log("<img src='" + this.src + "' />");
};

var img = new HtmlImage("http://hz.com/");
console.log(img);

var elements = [new HtmlSelectElement([4, 5, 6]), new HtmlImage("http://12.com/23")];

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var i = _step.value;
    i.render();
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}
"use strict";

var _tester = require("./tester.js");

var tester = new _tester.Tester();

tester.test();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _items = new WeakMap();

var Stack = function () {
  function Stack() {
    _classCallCheck(this, Stack);

    _items.set(this, []);
  }

  _createClass(Stack, [{
    key: "push",
    value: function push(value) {
      _items.get(this).push(value);
    }
  }, {
    key: "peek",
    value: function peek() {
      if (_items.get(this).length < 1) throw new Error("The stack is empty");
      return _items.get(this)[_items.get(this).length - 1];
    }
  }, {
    key: "pop",
    value: function pop() {
      if (_items.get(this).length < 1) throw new Error("The stack is empty");
      return _items.get(this).pop();
    }
  }, {
    key: "count",
    get: function get() {
      return _items.get(this).length;
    }
  }]);

  return Stack;
}();

var st = new Stack();
"use strict";

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

Shape.prototype.duplicate = function () {
  console.log("Duplicate from shape...");
};

function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.duplicate = function () {
  Shape.prototype.duplicate.call(this);
  console.log("Duplicate from circle...");
};

Circle.prototype.draw = function () {
  this.duplicate();
  console.log("Circle with radius = " + this.radius + " and color = " + this.color);
};

var c = new Circle(10, "blue");
console.log(c);
c.draw();

//
// Composition example
//

function compose(target) {
  for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  Object.assign.apply(Object, [target].concat(sources));
}

var canWalk = {
  walk: function walk() {
    console.log("Walking");
  }
};
var canEat = {
  eat: function eat() {
    console.log("Eating");
  }
};
var canSwim = {
  swim: function swim() {
    console.log("Swiming");
  }
};

function Person(name) {
  this.name = name;
}

compose(Person.prototype, canEat, canWalk);

function Duck() {}

compose(Duck.prototype, canEat, canSwim);

var p = new Person("Petya");
p.walk();
p.eat();

var d = new Duck();
d.swim();
d.eat();
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StopWatch = StopWatch;
function StopWatch() {
  var running = false;
  var startDate = null;
  var endDate = null;

  this.start = function () {
    if (running) throw new Error("Stopwatch already started");
    running = true;
    startDate = Date.now();
  };
  this.stop = function () {
    if (!running) throw new Error("Stopwatch already stopped");
    running = false;
    endDate = Date.now();
  };
  this.reset = function () {
    running = false;
    startDate = null;
    endDate = null;
  };
  Object.defineProperty(this, "duration", {
    get: function get() {
      return (endDate - startDate) / 1000;
    }
  });
}

StopWatch.prototype.toString = function () {
  return "Duration is: " + this.duration;
};
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tester = Tester;

var _stopWatch = require("./stopWatch.js");

function Tester() {
  var testStopWatch = function testStopWatch() {
    var sw = new _stopWatch.StopWatch();
    sw.start();
    alert("Module");
    sw.stop();
    console.log(sw.toString());
  };

  this.test = function () {
    testStopWatch();
  };
}
