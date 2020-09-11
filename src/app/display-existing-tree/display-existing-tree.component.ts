import {Component} from '@angular/core';
import {NodeTree} from '../interfase';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {storageGetItem} from '../functions/functions';
import {STORE_TREE_VIEW} from '../variables';

@Component({
  selector: 'app-display-existing-tree',
  templateUrl: './display-existing-tree.component.html',
  styleUrls: ['./display-existing-tree.component.css']
})
export class DisplayExistingTreeComponent {

  treeControl = new NestedTreeControl<NodeTree>(node => node.children);
  dataSource = new MatTreeNestedDataSource<NodeTree>();
  error: string;
  nodes: NodeTree[];

  constructor() {
    this.nodes = storageGetItem(STORE_TREE_VIEW);
    if (this.nodes) {
      this.dataSource.data = this.nodes;
    } else {
      this.error = 'The tree is not found, please generate!!!';
    }
  }

  hasChild = (_: number, node: NodeTree) => !!node.children && node.children.length > 0;
}
