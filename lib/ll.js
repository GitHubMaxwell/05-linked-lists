
class NewNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    //this.root = null
    this.head   = null;
    this.length = 0;
  }
  
  append(val) {
    if(!this.head) {
      this.head = new NewNode(val);
      this.length = this.length + 1;
    }else{
      let current = this.head;
      while(current.next) {
        current = current.next;
      }
        
      current.next = new NewNode(val);
      this.length = this.length + 1;
    }
  }
  
  insertBefore(val, newVal) {
    let newNode = new NewNode(newVal);
    let current = this.head;
  
    //check if the first node of the link list is the 
    if(this.head.val === val) {
      this.head = newNode;
      this.head.next = current;
      this.length = this.length + 1;
      return;
    }
  
    // while(current.val !== val) {
    //   current = current.next;
    // }
    while(current.next) {
      if(current.next.val === val) {
        //if the val of the node your on matches what were looking for break out of the while and finish the 
        break;
      } else {
        current = current.next;
      }
      //the following two lines re-assign the nexts of all invovled nodes
      newNode.next = current.next;
      current.next = newNode;
      this.length = this.length + 1;
    }
  }
}

module.exports = LinkedList;