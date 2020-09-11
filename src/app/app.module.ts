import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CreateTreeViewerComponent} from './create-treeviewer/Create-TreeViewer.component';
import {TreeViewerComponent} from './tree-viewer/tree-viewer.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

// Imports material modules
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';

import {HttpClientModule} from '@angular/common/http';
import { DisplayExistingTreeComponent } from './display-existing-tree/display-existing-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateTreeViewerComponent,
    TreeViewerComponent,
    PageNotFoundComponent,
    DisplayExistingTreeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTreeModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
