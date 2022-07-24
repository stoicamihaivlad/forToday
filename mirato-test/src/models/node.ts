export class Node {
  value: string;
  private func: () => Promise<number>;
  successors: Node[] = [];
  predecessors: Node[] = [];
  didRun = false;

  constructor(value: string, func: () => Promise<number>) {
    this.func = func;
    this.value = value;
  }
  async runFunc() {
    await this.func();
    console.log(`TIME: ${new Date()} -- Running code for... ${this.value}`);
    this.didRun = true;
  }
}
