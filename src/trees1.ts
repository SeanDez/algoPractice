/* eslint-disable max-classes-per-file */
// import util from 'util';
// implement a breadth first search

// create nodes
// create tree
// create bfs method
// add helpers to progress the bfs method

class SingleNode {
  public value;

  public leftChild: null | SingleNode = null;

  public rightChild: null | SingleNode = null;

  constructor(value: any) {
    this.value = value;
  }
}

class BinarySearchTree {
  public top: SingleNode | null = null;

  public insert(value: any): BinarySearchTree {
    const newNode = new SingleNode(value);

    // handle blank tree case
    if (this.top === null) {
      this.top = newNode; // MUST be done this way. this is reassignment
      return this;
    }

    let targetNode = this.top;
    while (true) {
      // if the target node value is greater, refocus onto the left child. else, right child. if match, return this (no change)
      if (newNode.value === targetNode.value) { return this; }
      else if (newNode.value < targetNode.value) {
        // check if left child is blank and replace if so
        // otherwise switch the target node to leftChild and loop
        if (targetNode.leftChild === null) {
          targetNode.leftChild = newNode; // works because this is object mutation
          return this;
        }

        targetNode = targetNode.leftChild!;
      } else if (newNode.value > targetNode.value) {
        if (targetNode.rightChild === null) {
          targetNode.rightChild = newNode;
          return this;
        }

        targetNode = targetNode.rightChild!;
      }
    }
  }

  find(suspectValue: number): boolean {
    if (this.top && this.top.value === suspectValue) { return true; }

    let iterationTarget = this.top;
    while (true) {
      // return true or false if a match, or null is found on the object/value
      if (iterationTarget === null) { return false; }
      else if (suspectValue === iterationTarget.value) { return true; }

      // move left or right depending on current object's value
      else if (suspectValue < iterationTarget.value) { iterationTarget = iterationTarget.leftChild!; }
      else if (suspectValue > iterationTarget.value) { iterationTarget = iterationTarget.rightChild!; }
    }
  }

  /* BFS
  */
  public horizontalSearch(callback: Function) {
    const inbox = [];
    // first push the top node
    if (this.top !== null) {
      inbox.push(this.top);
    }

    /* gather both children. put them in the work queue
      process the current item's value with the callback
      discard the current item
    */
    while (inbox.length > 0) {
      const targetItem: SingleNode = inbox[0];
      if (targetItem?.leftChild !== null) { inbox.push(targetItem.leftChild); }
      if (targetItem?.rightChild !== null) { inbox.push(targetItem.rightChild); }

      callback(targetItem.value);
      console.log(inbox);
      inbox.shift();
    }
  }

  dfsPreOrder() {
    const results: number[] = [];

    function traverse(targetNode: SingleNode) {
      // capture/print the current node first
      results.push(targetNode.value);

      // keep traversing with a left bias
      if (targetNode.leftChild !== null) { traverse(targetNode.leftChild); }
      if (targetNode.rightChild !== null) { traverse(targetNode.rightChild);}
    }

    // start on the root node
    traverse(this.top!);

    console.log(results);
    return results;
  }

  dfsPostOrder() {
    const results: number[] = [];

    function traverse(targetNode: SingleNode) {
      // keep traversing with a left bias
      if (targetNode.leftChild !== null) { traverse(targetNode.leftChild); }
      if (targetNode.rightChild !== null) { traverse(targetNode.rightChild);}

      // capture/print the current node
      results.push(targetNode.value);
    }

    // start on the root node
    traverse(this.top!);

    console.log(results);
    return results;
  }

  dfsInOrder() {
    const results: number[] = [];

    function traverse(targetNode: SingleNode) {
      // keep traversing with a left bias
      if (targetNode.leftChild !== null) { traverse(targetNode.leftChild); }

      // capture/print the current node
      results.push(targetNode.value);

      if (targetNode.rightChild !== null) { traverse(targetNode.rightChild);}
    }

    // start on the root node
    traverse(this.top!);

    console.log(results);
    return results;
  }
}

const tree = new BinarySearchTree();
const updatedTeee = tree
  .insert(10)
  .insert(6)
  .insert(15)
  .insert(3)
  .insert(8)
  .insert(20)

// console.log('updatedTree', updatedTeee);

// const matchFound: boolean = updatedTeee.find(22);
// const matchFound2: boolean = updatedTeee.find(224);
// console.log('matchFound', matchFound);
// console.log('matchFound2', matchFound2);

// const bfsPrintOut = updatedTeee.horizontalSearch(console.log);

// has internal console.log of final result
updatedTeee.dfsInOrder();
