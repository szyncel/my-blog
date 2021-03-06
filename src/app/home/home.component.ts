import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts$;

  constructor(private postService: PostService) {
    this.posts$ = this.postService.getAll();
  }

  ngOnInit() {
  }

}
