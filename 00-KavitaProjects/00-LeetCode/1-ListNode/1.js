// function Node(element) {

//     this.element = element;
//     this.next = null;
// }

// function LinkedList() {

//     var length = 0;
//     var head = null;
//     this.size = function () {
//         return length;
//     }

//     this.head = function () {
//         return head;
//     }

//     this.add = function (element) {
//         var node = new Node(element){
//             if(head == null){
//             head = node;
//         }else {
//             var currentNode = head;

//             thile(currentNode.next){
//                 currentNode = currentNode.next;
//             }
//             currentNode.next = node;
//         }
//         length++;
//     }
// }

// this.remove = function(element){
//     var currentNode = head;
//     var previousNode;
//     if(currentNode.element ===element){
//         head = currentNode.next;
//     }else{
//         while(currentNode.element!==element){
//             previousNode = currentNode;
//             currentNode = currentNode.next;
//         }
//         previousNode.next = currentNode.next
//     }
//     length--;
// }

// this.isEmpty = function(){
//     return length ===0;
// }

// this.indexOf = function(element){
//     var currentNode = head;
//     var index = -1;
//     while(currentNode){
//         index++;
//         if(currentNode.element ===element){
//             return index;
//         }
//         currentNode = currentNode.next;
//     }
//     return -1;
//     // 未找到返回-1
// }


// }

