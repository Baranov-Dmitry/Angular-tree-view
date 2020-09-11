import {Injectable} from '@angular/core';
import {randomInRange} from '../functions/functions';
import {NodeTree} from '../interfase';

@Injectable({providedIn: 'root'})
export class GenerateTreeServices {
  quantity: number;
  min: number;
  max: number;
  depth: number;
  nodes: Array<NodeTree>;

  constructor(quantity: number, min: number, max: number, depth: number) {
    this.quantity = quantity;
    this.min = min;
    this.max = max;
    this.depth = depth;
  }

  createChildren(id, parent = null, currentDepth = 0): NodeTree {
    const node: NodeTree = {
      parentId: parent,
      id,
      name: (parent === null ? `root node ` : `item `) + (id + 1),
      children: []
    };

    if (currentDepth < this.depth) {
      const max = randomInRange(this.min, this.max);
      for (let i = 0; i < max; i++) {
        node.children.push(this.createChildren(i, id, currentDepth + 1));
      }
    }
    return node;
  }

  generate(): void {
    const nodes = [];
    for (let i = 0; i < this.quantity; i++) {
      nodes.push(this.createChildren(i, null, 1));
    }
    this.nodes = nodes;
  }

  getNodes(): Array<NodeTree> {
    return this.nodes;
  }
}
