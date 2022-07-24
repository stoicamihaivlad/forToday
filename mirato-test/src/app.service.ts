import { Injectable } from '@nestjs/common';
import { Graph } from './models/graph';
import { Node } from './models/node';

const sleep = async (millis) => {
  return new Promise<void>((resolve) => setTimeout(() => resolve(), millis));
};

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async runGraph(): Promise<void> {
    const func1 = async () => {
      await sleep(5);
      return 3;
    };
    const func2 = async () => {
      await sleep(5);
      return 3;
    };
    const func3 = async () => {
      await sleep(15);
      return 3;
    };
    const func4 = async () => {
      return 3;
    };

    const a = new Node('A', func1);
    const b = new Node('B', func2);
    const c = new Node('C', func3);
    const d = new Node('D', func4);

    const g = new Graph();
    g.addNode(a);
    g.addNode(b);
    g.addNode(c);
    g.addNode(d);

    g.addEdge(a, b);
    g.addEdge(a, c);
    g.addEdge(c, d);
    g.addEdge(b, d);
    await g.traverse();
  }
}
