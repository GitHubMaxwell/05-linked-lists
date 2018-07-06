
class Node {
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
  
  //adds to end
  append(val) {
    if(!this.head) {
      this.head = new Node(val);
      this.length = this.length + 1;
    }else{
      let current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = new Node(val);
      this.length = this.length + 1;
    }
    return this;
  }
  
  //insert before head
  //simply re-assign head
  prepend(val) {

    if(!this.head) {
      this.head = new Node(val);
      this.length = this.length + 1;
      return this;
    }

    //make the old head the next
    // do i need this?? or do i just need to assign the new head the newly constructed Node
    let oldHead = this.head;
    this.head = new Node(val);
    this.head.next = oldHead;
    this.length = this.length + 1;

    return this;
  }

  // remove(offset) {
  //   let current = this.head;
  //   if (!current.next) {
  //     this.head = null;
  //     // return current.val;
  //     return this;
  //   }
  //   // let oldHead = current.val;
  //   this.head = this.head.next;
  //   // return oldHead;
  //   return this;
  // }

  remove(offset) {
    let current = this.head;
    let counter = 1;
    console.log(offset);

    if(offset === 1) {
      //this removes the entire LL
      // this.head=null;
      //this just reassigns the head to the next node leaving the rest of the LL untouched
      this.head = this.head.next;
      this.length = this.length - 1;
      return this;

    }

    while(current.next) {
      counter++;

      //per condition it needs to return (as in not return outside of the while because otherwise it runs through all condition everytime)
      if(counter === offset) {
        current.next = current.next.next;
        this.length = this.length - 1;
        return this;


      } else if(current.next.next === null) {
        current.next = null;
        this.length = this.length - 1;
        return this;


      } else {
        current = current.next;
        this.length = this.length - 1;
        return this;

      }
    }

  }

  reverse(){
    let temp1 = null;
    let current = this.head;
    let temp2;
  
    while (current) {
      temp2 = current.next;
      current.next = temp1;
      temp1 = current;
      current = temp2;
    }
    this.head = temp1;
    return this;
  }

  serialize() {
    let current = this.head;
    let seriStr = '';

    while(current) {
      seriStr += `[${current.val}] -> `;
      if(current.next === null) {
        seriStr += `[X]`;
      }
      current = current.next;
    }
    return seriStr;
  }

  static deserialize(str) {
    //Input =  [3] -> [2] -> [X]
    let newLL = new LinkedList;
    let newStr = str.split('[');
    // console.log('STRING:',newStr);
    //handle X where it skips it maybe with a continue
    // invert the for loop
    for (let i = 0; i < newStr.length; i++) {
      if(/\]/.test(newStr[i])) {
        let split = newStr[i].split(']')[0];
        // not newStr[i] in the conditional because that changing but split is the value we are cheking for
        if(split === 'X') {
          continue;
        }
        // console.log('SPLIT: ',split);
        newLL.append(parseInt(split)); 
      }
    }
    return newLL;
  }
}

module.exports = LinkedList;