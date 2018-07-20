import {Component, Input, OnInit} from '@angular/core';
import {PostDTO} from "../model/postDTO";

@Component({
  selector: 'app-post-grid',
  templateUrl: './post-grid.component.html',
  styleUrls: ['./post-grid.component.scss']
})
export class PostGridComponent implements OnInit {


  @Input() posts : PostDTO;

  constructor() { }

  ngOnInit() {
  }

}
