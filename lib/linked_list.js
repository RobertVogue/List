// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
// test
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// TODO: Implement a Singly Linked List class here
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // TODO: Implement the addToTail method here
  addToTail(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;

    this.length++;
    //   console.log(this)
    return this;
  }

  // TODO: Implement the removeTail method here
  removeTail() {
      console.log(this)
    let currVal=this.head
    let choppedTail = this.tail
    if (this.length === 0) return undefined;
    if (this.length === 1) {
        whatVal = this.tail;
        this.head = null;
        this.tail = null;
    }
    while(this.head.value !== this.tail){ //this breaks it
        currVal = this.head.next
        this.tail=currVal
    break   //needed to add this in
    }
    this.tail = currVal
    this.tail.next = null
    this.length--;
    return choppedTail
  }

  // TODO: Implement the addToHead method here
  addToHead(value) {}

  // TODO: Implement the removeHead method here
  removeHead() {}

  // TODO: Implement the contains method here
  contains(target) {}

  // TODO: Implement the get method here
  get(index) {}

  // TODO: Implement the set method here
  set(index, value) {}

  // TODO: Implement the insert method here
  insert(index, value) {}

  // TODO: Implement the remove method here
  remove(index) {}

  // TODO: Implement the size method here
  size() {}
}

exports.Node = Node;
exports.LinkedList = LinkedList;
