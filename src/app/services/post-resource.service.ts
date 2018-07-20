import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class PostResourceService {

  baseHref = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) {
  }

  getAll() : Observable<any>{

    let headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return <Observable<any>>this.httpClient.get(this.baseHref, {
      headers: headers
    });
  }

}
