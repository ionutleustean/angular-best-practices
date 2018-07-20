import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PhotosResourceService {
  baseHref = 'https://jsonplaceholder.typicode.com/photos';


  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<any> {

    let headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return <Observable<{ url: string, thumbnailUrl: string }>>this.httpClient.get(this.baseHref, {
      headers: headers
    });
  }


  getOne(id) {
    let headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return <Observable<any>>this.httpClient.get(this.baseHref + '/' + id, {
      headers: headers
    });
  }


}
