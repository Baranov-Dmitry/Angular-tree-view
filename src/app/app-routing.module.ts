import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateTreeViewerComponent} from './create-treeviewer/Create-TreeViewer.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {DisplayExistingTreeComponent} from './display-existing-tree/display-existing-tree.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './services/auth.guard';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'create', component: CreateTreeViewerComponent, canActivate: [AuthGuard]},
  {path: 'display-existing-tree', component: DisplayExistingTreeComponent, canActivate: [AuthGuard]},
  {path: 'error', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/error'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
