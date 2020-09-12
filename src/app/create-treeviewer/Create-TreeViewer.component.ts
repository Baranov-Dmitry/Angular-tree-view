import {Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {GenerateTreeServices} from '../services/genirate-tree.services';
import {NodeTree} from '../interfase';
import {storageSetItem} from '../functions/functions';
import {STORE_TREE_VIEW} from '../variables';
import {TreeViewerComponent} from '../tree-viewer/tree-viewer.component';

@Component({
  selector: 'app-test',
  templateUrl: './Create-TreeViewer.component.html',
  styleUrls: ['./Create-TreeViewer.component.css'],
})
export class CreateTreeViewerComponent implements OnInit {

  @ViewChild('treeContainer', {read: ViewContainerRef}) container;

  form: FormGroup;
  treeView: GenerateTreeServices;
  nodes: Array<NodeTree>;
  flag = false;

  componentRef: ComponentRef<TreeViewerComponent>;

  constructor(private resolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
    console.log(this.container);
    this.form = new FormGroup({
      rootNode: new FormControl(null, [
        Validators.required,
        Validators.min(1)
      ]),
      min: new FormControl(null, Validators.required),
      max: new FormControl(null, Validators.required),
      depth: new FormControl(null, Validators.required)
    });
  }

  insertTreeView(data): void {
    this.container.clear();
    const factory: ComponentFactory<TreeViewerComponent> = this.resolver.resolveComponentFactory(TreeViewerComponent);
    this.componentRef = this.container.createComponent(factory);

    // change "()" to "as"
    (<TreeViewerComponent> this.componentRef.instance).dataSource.data = data;
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }
    this.treeView = new GenerateTreeServices(this.form.value.rootNode, this.form.value.min, this.form.value.max, this.form.value.depth);
    this.treeView.generate();
    this.insertTreeView(this.treeView.getNodes());
    storageSetItem(STORE_TREE_VIEW, this.treeView.getNodes());
    this.form.reset();
  }

  onBlur(event): void {
    if (event.target.value > 0) {
      this.form.get('max').setValidators([Validators.min(event.target.value)]);
    }
  }
}
