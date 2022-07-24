import { Node } from './node';

export class Graph {
  nodes: Node[] = [];
  addNode(node: Node) {
    this.nodes.push(node);
  }
  addEdge(from: Node, to: Node) {
    from.successors.push(to);
    to.predecessors.push(from);
  }

  async traverse() {
    console.log('here');
    const root: Node = this.getRoot();
    console.log(`Root: ${root.value}`);
    if (!root) return;
    await this.traverseRecursive(root);
  }

  getRoot() {
    for (const node of this.nodes) {
      if (node.predecessors.length === 0) return node;
    }
    return null;
  }
  async traverseRecursive(currNode: Node): Promise<void> {
    if (!currNode) return;

    if (currNode.predecessors.length === 0) {
      console.log(
        `traverseRecursive: current node: ${currNode.value}, no predecessors`,
      );
      await currNode.runFunc();
      for (const successor of currNode.successors) {
        this.traverseRecursive(successor);
      }
    } else {
      console.log(
        `traverseRecursive: current node: ${currNode.value}, with predecessors ${currNode.predecessors}`,
      );
      this.waitForPredecessors(currNode);
      await currNode.runFunc();
      for (const successor of currNode.successors) {
        this.traverseRecursive(successor);
      }
    }
  }

  waitForPredecessors(currNode: Node) {
    let wait = false;
    do {
      for (const predecessor of currNode.predecessors) {
        console.log(
          `waitForPredecessors: current node: ${currNode.value}, current predecessor ${predecessor.value}, didRun = ${predecessor.didRun}`,
        );
        if (!predecessor.didRun) {
          wait = true;
          break;
        }
      }
    } while (wait);
  }
}
