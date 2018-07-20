import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PostDTO} from "../model/postDTO";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-post-grid',
  templateUrl: './post-grid.component.html',
  styleUrls: ['./post-grid.component.scss']
})
export class PostGridComponent implements OnInit {


  @Input() posts : Observable<PostDTO[]>;
  @Output()  onDelete: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onDeleteClick(id){
    this.onDelete.emit(id);
  }


  navigateToDetail(id){
    this.router.navigate(['detail', id])
  }
}
