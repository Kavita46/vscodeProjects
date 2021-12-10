class Node {

    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
    }

    append(element) {
        var node = new Node(element);

        if (this.head === null) {
            this.head = node;
        } else {
            // 找到最后一个node
            let current = this.getNode(this.size - 1);

            current.next = node;
        }
        this.size++;
    }

    appendAt(position, element) {
        if (position < 0 || position >= this.size) {
            throw new Error("position out of range")
        }

        var node = new Node(element);
        if (position === 0) {
            // 插到第零个,成为新的head
            node.next = this.head;
            this.head = node;
        } else if (position === this.size - 1) {
            let current = this.getNode(position);
            current.next = node;
            node.next = null;
        } else {
            let current = this.getNode(position);
            let next = this.getNode(position + 1);
            current.next = node;
            node.next = next;
        }
        this.size++;
    }

    remove(position) {
        if (position < 0 || position > this.size - 1) {
            throw new Error("移除位置无效");
        }
        else {
            if (position === 0) {
                // 取出当前的第二个
                let secondNode = this.getNode(1);
                // 取出当前的第一个
                let headNode = this.head;
                // 当前第一个的next指针变为null
                headNode.next = null;
                // 当前链表的head 设为第一个
                this.head = secondNode;
            }else if(position === this.size -1){
                let previousNode = this.getNode(position -1);
           previousNode.next = null;

            }else{
                let currentNode = this.getNode(position);
                let previousNode = this.getNode(position -1);
                let nextNode = this.getNode(position+ 1);
                previousNode.next = nextNode;
                currentNode.next = null;
                
            }
        }
    }

    indexOf(element) {

    }

    getNode(index) {
        if (index < 0 || index >= this.size) {
            throw new Error("out of range");
        }
        let current = this.head
        // 模仿数组的index, 如果是0 则找的是head 
        for (let i = 0; i < index; i++) {
            // 如果大于零,则从头开始往下找,找到并且返回当前的节点
            current = current.next;
        }
        return current;
    }
}

let LL = new LinkedList();

LL.append("第一个");
LL.append("第二个");
LL.append('第三个');
LL.append('第四个');

LL.appendAt(0, "插入零");

show();
function show(){
for(let i = 0;  i < LL.size; i++){
    console.dir(LL.getNode(i), {
        depth:100
    });
}
}
// console.log(LL.getNode(3));

// console.dir(LL, {
//     depth: 100
// });

// console.log(LL.getNode(LL.size  - 1));



