let linkedList = require('../lib/ll.js');

describe('Linked List Insertion Module', () => {
  
  it('APPEND: should return length 1 and head value of 4', () => {
    const expected = 1;
    
    const newNode = new linkedList();
    newNode.append(4);
    expect(newNode.head.val).toBe(4);
    expect(newNode.length).toBe(expected);
  });

  it('PREPEND: new head val = 5 and length equal to 3', () => {
    const expected = 5;
    
    const newNode = new linkedList();
    newNode.append(4);
    newNode.append(3);

    newNode.prepend(5);

    expect(newNode.head.val).toBe(expected);
    expect(newNode.length).toBe(3);

  });

  it('REVERSE: new head val = 3', () => {
    
    const newNode = new linkedList();
    newNode.append(1);
    newNode.append(2);
    newNode.append(3);

    newNode.reverse();

    expect(newNode.head.val).toBe(3);
  });

  it('REMOVE: new head val = 2', () => {
    
    const newNode = new linkedList();
    newNode.append(1);
    newNode.append(2);
    newNode.append(3);//?

    newNode.remove(1);//?

    expect(newNode.head.val).toBe(2);
  });

  it('REMOVE: new head val = 3', () => {
    
    const newNode = new linkedList();
    newNode.append(1);
    newNode.append(2);
    newNode.append(3);//?

    newNode.remove(2);//?

    // console.log(newNode.head);
    // console.log(newNode);

    expect(newNode.head.next.val).toBe(3);
  });


  it('SERIALIZE: return string = [1] -> [2] -> [3] -> [X]', () => {
    
    const newNode = new linkedList();
    newNode.append(1);
    newNode.append(2);
    newNode.append(3);

    let serialize = newNode.serialize();

    expect(serialize).toEqual('[1] -> [2] -> [3] -> [X]');
  });

  it('DESERIALIZE: return LL from string = [1] -> [2] -> [3] -> [X]', () => {
    const newNode = new linkedList();
    newNode.append(1);
    newNode.append(2);
    newNode.append(3);

    const string = '[1] -> [2] -> [3] -> [X]';
   
    let deserialize = linkedList.deserialize(string);

    expect(deserialize).toEqual(newNode);
  });

});