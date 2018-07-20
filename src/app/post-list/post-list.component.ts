import {Component, Input, OnInit} from '@angular/core';
import {PostDTO} from "../model/postDTO";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() posts : PostDTO;

  constructor() { }

  ngOnInit() {
  }

}
