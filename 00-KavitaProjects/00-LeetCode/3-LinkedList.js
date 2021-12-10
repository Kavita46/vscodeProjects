function LinkedList(){
    // Node类表示要加入列表的项。它包含一个e属性，
    // 即要添加到列表的值，以及一个next属性，即指向列表中下一个节点项的指针
    var Node = function(e){

        this.e = e;
        this.next = null;
    };

    var length = 0;
    var head = null;
    this.append = function(e){
        // 这是个什么语法
var node = new Node(e), current;

if(head ===null){
    head = node;
}else{
    current = head;
    while(current.next){
        current = current.next;
    }

    current,next = node;
}
length++;
    };

    this.insert = function(position, e){
        if(position >=0 && position <= length){
            let node = new Node(e),current = head,previous, index= 0;
            if(position ===0){
                node.next = current;
                head = node;
            } else{
                while(index++<position){
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            length++;
            return true;
        }
        else{
            return false;
        }
    };
    this.removeAt = function(position){};
    this.remove = function(e){};
    this.indexOf = function(e){};
    this.isEmpty = function(){};
    this.size = function(){};
}


var myLink = new  LinkedList();

myLink.append("张三");
myLink.append("李四");
myLink.append("lily");

console.log(myLink);
