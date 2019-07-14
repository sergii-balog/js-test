const _items = new WeakMap();

export class Stack {
  constructor() {
    _items.set(this, []);
  }
  get count() {
    return _items.get(this).length;
  }
  push(value) {
    _items.get(this).push(value);
  }
  peek() {
    if (_items.get(this).length < 1) throw new Error("The stack is empty");
    return _items.get(this)[_items.get(this).length - 1];
  }
  pop() {
    if (_items.get(this).length < 1) throw new Error("The stack is empty");
    return _items.get(this).pop();
  }
}
