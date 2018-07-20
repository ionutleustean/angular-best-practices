import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageListComponent} from "./page-list/page-list.component";
import {PageDetailComponent} from "./page-detail/page-detail.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: PageListComponent
  },
  {
    path: 'detail/:id',
    component: PageDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
