import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrls: ['./admin-posts.component.css']
})
export class AdminPostsComponent implements OnInit {
  posts$;

  constructor(private postService: PostService) {
    this.posts$ = this.postService.getAll();
  }

  ngOnInit() {
  }

}
