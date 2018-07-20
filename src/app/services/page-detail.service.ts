import {Injectable} from '@angular/core';
import {PhotosResourceService} from "./photos-resource.service";
import {PostResourceService} from "./post-resource.service";
import {Observable} from "rxjs/index";
import {PostDTO} from "../model/postDTO";
import {combineLatest} from 'rxjs';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PageDetailService {

  constructor(private photoResourceService: PhotosResourceService,
              private postResourceService: PostResourceService) {
  }


  getOnePost(id): Observable<PostDTO> {
    return combineLatest(this.photoResourceService.getOne(1), this.postResourceService.getOne(id))
      .pipe(
        map(
          ([photo, post]) => {
            return Object.assign(post, {url: photo.url, thumbnailUrl: photo.thumbnailUrl})
          })
      )
  }

}

