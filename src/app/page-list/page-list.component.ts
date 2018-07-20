import { Component, OnInit } from '@angular/core';
import {PageListService} from "../services/page-list.service";
import {PostDTO} from "../model/postDTO";
import {Observable} from "rxjs";

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {

  posts: Observable<PostDTO[]>;
  latestPosts: Observable<PostDTO[]>;

  constructor(private pageListService : PageListService) { }

  ngOnInit() {
    this.posts = this.pageListService.getFirstTenPosts();
    this.latestPosts = this.pageListService.getLatestPosts();
  }

}
