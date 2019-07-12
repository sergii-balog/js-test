function HtmlElement() {
  this.click = function() {
    console.log("clicked");
  };
}

HtmlElement.prototype.focus = function() {
  console.log("focused");
};
HtmlElement.prototype.render = function() {
  console.log("base render");
};

function HtmlSelectElement(items = []) {
  this.items = items;

  this.addItem = function(value) {
    this.items.push(value);
  };
  this.removeItem = function(value) {
    const index = this.items.indexOf(value);
    this.items.splice(index, 1);
  };
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

HtmlSelectElement.prototype.render = function() {
  HtmlElement.prototype.render.call(this);
  console.log("<select>");
  this.items.map(item => {
    console.log(`\t<option>${item}</option>`);
  });
  console.log("</select>");
};

const el = new HtmlElement();
console.log(el);

const elS = new HtmlSelectElement([1, 2, 3]);
console.log(elS);

function HtmlImage(src = "") {
  this.src = src;
}

HtmlImage.prototype = new HtmlElement();
HtmlImage.prototype.constructor = HtmlImage;

HtmlImage.prototype.render = function() {
  console.log(`<img src='${this.src}' />`);
};

const img = new HtmlImage("http://hz.com/");
console.log(img);

const elements = [
  new HtmlSelectElement([4, 5, 6]),
  new HtmlImage("http://12.com/23")
];

for (let i of elements) i.render();
