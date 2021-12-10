class Queue {
    constructor() {
        this.items = [];
    }

    enque(e) {
        this.items.push(e);
    }


    deque() {

        return this.items.shift();
    }

    front() {
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.length;
    }
    clear() {
        this.items = [];
  }
}

var myQueue = new Queue();

myQueue.enque(1);
myQueue.enque(2);
myQueue.enque(3);

console.log(myQueue);
console.log(myQueue.deque());
console.log(myQueue.front());