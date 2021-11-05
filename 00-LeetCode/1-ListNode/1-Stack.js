/* eslint-disable require-jsdoc */
/**
 * Adds two numbers together.
 * @param {element} e1 The first number.
 * @param {int} num2 The second number.
 * @returns {int} The sum of the two numbers.
 */

class Stack {
  constructor() {
    // console.log("construct");
    this.items = [];
    // 里面还是原生数组
  }
  // 入栈,进入最后一个
  // eslint-disable-next-line require-jsdoc
  push(element) {
    this.items.push(element);
  }

  // 后进先出,弹出最后一个
  pop() {
    return this.items.pop();
  }

  // 栈顶
  peek() {
    return this.items[this.items.length - 1];
  }
  // 是非为空
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

const myStack = new Stack();
myStack.push(1);
myStack.push('我');
myStack.push("爱");
myStack.push("你");

console.log(myStack);

// console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.isEmpty());
console.log(myStack.size());
// console.log(myStack.clear());
// console.log(myStack.isEmpty());

console.log(myStack.items);
console.log(myStack.items[2]);

const a = [114, 514];
myStack.push(a);

console.log(myStack.items);
