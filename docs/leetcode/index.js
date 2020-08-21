class Node{
  constructor(ele) {
    this.ele = ele;
    this.next = null;
  }
}
class LinkNodeList{
  constructor(){
    //链表，链表相关操作
    //链表的第一个元素
    this.head = null;
    this.length = 0;
  }
  // 增删改查
  append(ele){
    let node = new Node(ele);
    let cur;
    if(this.head==null){
      this.head = node
    }else{
      cur = this.head;
      while(cur.next){
        cur = cur.next;
      }
      cur.next = node
    }
    this.length += 1;
  }
  removeAt(index){
    let cur = this.head;
    let prev;
    let i=0;
    if(index==0){
      this.head = cur.next;
    }else{
      while(i<index){
        prev = cur;
        cur = cur.next;
        i++;
      }
      prev.next = cur.next;
      cur.next = null; //释放cur的内存
    }
    this.length-=1;
    return cur.ele;
  }
  print(){
    let cur = this.head;
    let res = [];
    while(cur){
      res.push(cur.ele)
      cur = cur.next;
    }
    console.log(res.join('==>'))
    return res.join('==>');
  }
}

let linkNode = new LinkNodeList();
linkNode.append('hello');
linkNode.append('world');
linkNode.append('hahaha');
linkNode.append('nihao');
linkNode.print();
linkNode.removeAt(2);
linkNode.print();