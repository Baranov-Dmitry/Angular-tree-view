import {Component} from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {GenerateTreeServices} from '../services/genirate-tree.services';
import {NodeTree} from '../interfase';

@Component({
  selector: 'app-tree-viewer',
  templateUrl: './tree-viewer.component.html',
  styleUrls: ['./tree-viewer.component.css']
})
export class TreeViewerComponent {

  treeView: GenerateTreeServices;

  treeControl = new NestedTreeControl<NodeTree>(node => node.children);
  dataSource = new MatTreeNestedDataSource<NodeTree>();

  constructor() {

  }

  hasChild = (_: number, node: NodeTree) => !!node.children && node.children.length > 0;
}
