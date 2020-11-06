
class node {
  public value: number;

  constructor(value: number) { this.value = value; }
}

class MaxBinaryHeap {
  public nodes: node[] = [
    new node(41),
    new node(39),
    new node(33),
    new node(18),
    new node(27),
    new node(12),
  ];

  public insert(value: number) {
    const newNode = new node(value);

    // insert at the end
    this.nodes.push(newNode);
    this.bubbleUpIfLarger();
  }

  /* Compare against parent
    Swap if larger
  */
  private bubbleUpIfLarger(): void {
    let child = this.getChild();
    let currentParent = this.getParent(child);
    let previousParent;


    // todo fix this
    // todo bigger numbers work. smaller numbers are infinitely looped
    while (typeof currentParent !== 'undefined' && currentParent !== previousParent ) { 
      if (child.value > currentParent.value) {
        // the child will take the place of the parent
        // the parent will be the child
        // thus the parent is now also the previous parent
        previousParent = currentParent;

        // switch the nodes in the node list
        this.swap(currentParent, child);

        // get the new parent of the updated child
        currentParent = this.getParent(child);

        // if parent doesn't change, break the loop
      }
    }
  }

  private getChild() { return this.nodes[this.nodes.length - 1]; }

  private getParent(child: node): node | undefined {
    // console.log('child', child);
    
    const childIndex = this.nodes.indexOf(child);
    // console.log('childIndex', childIndex);

    const parentIndex = Math.floor((childIndex - 1) / 2);
    // console.log('parentIndex', parentIndex);
    
    return this.nodes[parentIndex];
  }

  /**/
  private swap(parent: node, child: node): void {
    const parentIndex = this.nodes.indexOf(parent);
    const childIndex = this.nodes.indexOf(child);

    this.nodes[parentIndex] = child;
    this.nodes[childIndex] = parent;
  }
}

/*
indexes do not update
no swap is done

*/


const heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(200);
heap.insert(4);
// heap.insert(78);
// heap.insert(17);
// heap.insert(47);
// heap.insert(37);
