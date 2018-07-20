import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PostDTO} from "../model/postDTO";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() posts: PostDTO;
  @Output() onDelete: EventEmitter<string> = new EventEmitter();

  isVisible : boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onDeleteClick(id) {
    this.onDelete.emit(id);
  }

  navigateToDetail(id) {
    this.router.navigate(['detail', id])
  }



  showDetail() {
    this.isVisible = ! this.isVisible;
  }
}
