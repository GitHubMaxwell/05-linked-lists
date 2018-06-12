let linkedList = require('../lib/ll.js');

describe('Linked List Insertion Module', () => {

  it('POL: return length 0', () => {
    const LL = new linkedList();
    const actual = LL.length;
    expect(actual).toBe(0);
  });  
  
  it('APPEND: should return length 1', () => {
    const expected = 1;
    
    const newNode = new linkedList();
    const newAppend = newNode.append(4);
    expect(newNode.length).toBe(expected);
  });

  it('APPEND: should return length 2', () => {
    const expected = 2;
    
    const newNode = new linkedList();
    const newAppend = newNode.append(4);
    const newAppend1 = newNode.append(4);
    expect(newNode.length).toBe(expected);
  });
  // it('INSERT BEFORE: should insert 5 BEFORE 2', () => {
  //   const expected = 5;
    
  //   const newNode = new linkedList();
  //   const newAppend = newNode.append(1);
  //   const newAppend1 = newNode.append(2);
  //   const newAppend2 = newNode.append(3);
  //   const insert = newNode.insertBefore(2,5);
  //   console.log('BEFORE',newNode);
  //   // console.log('newApp',newNode.newAppend);
  //   // console.log('insert',insert);
  //   // console.log('newNode.head.val',newNode.head.val);
  //   expect(newNode.insert.val).toBe(expected);
  // });
  // it('INSERT AFTER: should insert 5 AFTER 2', () => {
  //   const expected = 2;
    
  //   const newNode = new linkedList();
  //   const newAppend = newNode.append(2);
  //   const newAppend1 = newNode.insertAfter(2,5);
  //   console.log('AFTER',newNode);
  //   // expect(newNode.length).toBe(expected);
  // });
});