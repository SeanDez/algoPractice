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

}

const tree = new BinarySearchTree();
const updatedTeee = tree
  .insert(20)
  .insert(12)
  .insert(64)
  .insert(2)
  .insert(26)
  .insert(8)
  .insert(22)
  .insert(44)
  .insert(68)
  .insert(666)
  .insert(2) 

console.log('updatedTree', updatedTeee);

const matchFound: boolean = updatedTeee.find(22);
const matchFound2: boolean = updatedTeee.find(224);
console.log('matchFound', matchFound);
console.log('matchFound2', matchFound2);


  // console.log(
  //   util.inspect(updatedTeee, { showHidden: false, depth: null })
  // );

