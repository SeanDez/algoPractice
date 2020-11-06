class node {
  public value: string | number;
  
  public next: node | null;

  constructor(value: string | number) {
    this.value = value;
    this.next = null;
  }
}


class LinkedList {
  head: null | node = null;
  tail: null | node = null;
  length: number = 0;

  push(value: string | number) {
    const newNode = new node(value);
    this.insertIntoEarliestNull(newNode);
    this.updateTail();
    this.updateLength(1);
  }


  insertIntoEarliestNull(newNode: node) {
    if (this.head === null) { this.head = newNode; return; }

    let nodePointer = this.head;
    while (true) {
      if (nodePointer.next === null) {
        nodePointer.next = newNode;
        return;
      }

      // node is not null
      nodePointer = nodePointer.next;
    }
  }

  updateTail() {
    let suspectNode = this.head;
    while (true) {
      if (this.head !== null && suspectNode!.next === null) {
        this.tail = suspectNode;
        return;
      }

      // suspectNode is a node
      suspectNode = suspectNode!.next;
    }
  }

  updateLength(adjustment: number) {
    this.length += adjustment;
  }

  pop() {
    if (this.head === null) { return; }
    // delete the tail reference
    // delete the reference to this node from the tail-to-be
    let currentTail = this.tail;
    if (currentTail === null) { return; }

    let tailTobeSuspect = this.head!;

    while (true) {
      // this is the new tail case
      if (tailTobeSuspect.next === currentTail) {
        const newTail = tailTobeSuspect
        newTail.next = null;
        this.tail = newTail;
        this.updateLength(-1);
        return;
      }

      // iterate through the list otherwise
      tailTobeSuspect = tailTobeSuspect.next!;
    }
  }

  /* Returns undefined, or OLD head
  */
  shift() {
    if (this.head === null) { return null; }
    const oldHead = this.head;

    // point to next node. decrease length
    this.head = this.head.next;
    this.updateLength(-1);

    return oldHead;
  }

  unshift(value: string | number) {
    const newNode = new node(value);

    const oldHead = this.head;
    this.head = newNode;
    this.head.next = oldHead;
    this.length += 1;
  }

  get(index: number) {
    index = Math.floor(index);
    if (index < 0 || index > this.length - 1 || this.head === null) { return null; }

    let suspectNode = this.head;
    for (let i = 0; i <= index; i++) {
      if (suspectNode.next === null) { return null; }
      suspectNode = suspectNode.next;
    }

    const targetNode = suspectNode;
    return targetNode;
  }


  set(index: number, newValue: string | number) {
    const newNode = new node(newValue);
    index = Math.floor(index);
    if (index < 0 || index > this.length - 1 || this.head === null) { return null; }

    let suspectNode = this.head;
    for (let i = 0; i < index; i++) {
      // console.log('i', i);
      // console.log('suspectNode beginning', suspectNode);

      if (suspectNode.next === null) { return null; }

      // if i is one less than target index
      if (i === index - 1) {
        // get the next property of the target index (one ahead)
        const oldNextNode = suspectNode.next.next;
        // console.log('oldNextNode', oldNextNode);

        // set the next node at the target index to this input node
        suspectNode.next = newNode; 
        // console.log('newNode', newNode);

        // set this new overwrite to have a next pointer to the old next
        suspectNode.next.next = oldNextNode;
        // console.log('target node (one ahead) after swap', suspectNode.next)
      }
      
      // get to the final index
      suspectNode = suspectNode.next;
    }
    
    const targetNode = suspectNode;
    // console.log('targetNode (suspectNode) at end', suspectNode);
    return targetNode;
  }

  reverse() {
    if (this.length < 1) { return null; }
    if (this.length < 2) { return this.head; }

    // grab each node. put it in an array
    const nodesInNormalOrder = [];
    let examinedNode = this.head;

    for (let i = 0; i < this.length; i++) {
      nodesInNormalOrder.push(examinedNode);
      if (examinedNode!.next === null) {
        break;
      }

      examinedNode = examinedNode!.next;
    }

    // set the first node as the head (i === 0)
    // on the last node (next === null) set it to the tail

    this.head = nodesInNormalOrder[nodesInNormalOrder.length - 1];

    // keep taking the rear node and setting it as the next value. then move the examinedNode forward
    let examinedNode2 = this.head;
    for (let i = 1; i < this.length; i++) {
      if (examinedNode2 === null) { return this }

      examinedNode!.next = nodesInNormalOrder[nodesInNormalOrder.length - 1 - i];
      examinedNode = examinedNode!.next;
    }

    this.tail = nodesInNormalOrder[0];
    this.tail!.next = null;
    return this;
  }
}



const lList = new LinkedList();
lList.push(2); // 0
lList.push(7); // 1
lList.push(12); // 2
lList.push(17); // 3
lList.push(22); // 4
lList.push(27); // 5
console.log('full list', lList);

// lList.unshift(4);
console.log('lList.reverse', lList.reverse());
console.log('lList.reverse', lList.head!.next);
console.log('lList.reverse', lList.head!.next!.next);
