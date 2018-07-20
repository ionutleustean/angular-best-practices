import {Injectable} from '@angular/core';
import {PhotosResourceService} from "./photos-resource.service";
import {PostResourceService} from "./post-resource.service";
import {combineLatest} from 'rxjs';
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {PostDTO} from "../model/postDTO";

@Injectable({
  providedIn: 'root'
})
export class PageListService {

  constructor(private photoResourceService: PhotosResourceService,
              private postResourceService: PostResourceService) {
  }


  getFirstTenPosts(): Observable<PostDTO[]> {
    return combineLatest(this.photoResourceService.getAll(), this.postResourceService.getAll())
      .pipe(
        map(
          ([photos, posts]) => {
              let lPosts = posts.slice(0,10);
              let lPhotos = photos.slice(0,10);

              return lPosts.map((post, index) => {
                return Object.assign(post, {url :lPhotos[index].url, thumbnailUrl: lPhotos[index].thumbnailUrl})
              });
          })
      )
  }


  getLatestPosts() : Observable<PostDTO[]> {
    return combineLatest(this.photoResourceService.getAll(), this.postResourceService.getAll())
      .pipe(
        map(
          ([photos, posts]) => {
            let lPosts = posts.slice(5,15);
            let lPhotos = photos.slice(5,15);

            return lPosts.map((post, index) => {
              return Object.assign(post, {url :lPhotos[index].url, thumbnailUrl: lPhotos[index].thumbnailUrl})
            });
          })
      )
  }

  deleteOnePost(id){
    return this.postResourceService.deleteOne(id);
  }
}

