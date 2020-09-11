import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateTreeViewerComponent} from './create-treeviewer/Create-TreeViewer.component';
import {TreeViewerComponent} from './tree-viewer/tree-viewer.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {DisplayExistingTreeComponent} from './display-existing-tree/display-existing-tree.component';

// http/localhost:4200/ -> HomeComponent
// http/localhost:4200/about -> PostsComponent
// http/localhost:4200/posts -> PostsComponent
const routes: Routes = [
  {path: '', component: TreeViewerComponent},
  {path: 'create', component: CreateTreeViewerComponent},
  {path: 'display-existing-tree', component: DisplayExistingTreeComponent},
  {path: 'error', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/error'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
