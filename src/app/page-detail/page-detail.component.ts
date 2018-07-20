import {Component, OnInit} from '@angular/core';
import {PostDTO} from "../model/postDTO";
import {PageDetailService} from "../services/page-detail.service";
import {ActivatedRoute, Router} from "@angular/router";
import {interval} from "rxjs";

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.scss']
})
export class PageDetailComponent implements OnInit {


  post: PostDTO;

  constructor(private pageDetailService: PageDetailService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {

    interval(1000).subscribe(data => {console.log(data)});

    this.activatedRoute.params.subscribe(data => {
      console.log('a');
      this.pageDetailService.getOnePost(data.id).subscribe(data => {
        this.post = data;
      })
    });
  }


  navigateBack() {
    this.router.navigate(['list'])
  }
}

