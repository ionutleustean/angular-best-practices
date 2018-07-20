import {Component, OnInit} from '@angular/core';
import {PageListService} from "../services/page-list.service";
import {PostDTO} from "../model/postDTO";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {

  posts: Observable<PostDTO[]>;
  latestPosts: Observable<PostDTO[]>;

  constructor(private pageListService: PageListService) {
  }

  ngOnInit() {
    this.posts = this.pageListService.getFirstTenPosts();
    this.latestPosts = this.pageListService.getLatestPosts();
  }


  deletePost(id) {
    // this.pageListService.deleteOnePost(id).subscribe(data => {
    this.posts = this.posts.pipe(
      map(data => {
        return data.filter(item => item.id !== id)
      }));
    this.latestPosts = this.latestPosts.pipe(
      map(data => {
        return data.filter(item => item.id !== id)
      }));
  }


}
