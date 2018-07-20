import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PostListComponent } from './post-list/post-list.component';
import { PostGridComponent } from './post-grid/post-grid.component';
import { PageListComponent } from './page-list/page-list.component';
import { PageDetailComponent } from './page-detail/page-detail.component';
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule, MatCardModule} from "@angular/material";


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostGridComponent,
    PageListComponent,
    PageDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
