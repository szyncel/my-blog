import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from './../post.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-posts-form',
  templateUrl: './posts-form.component.html',
  styleUrls: ['./posts-form.component.css']
})
export class PostsFormComponent implements OnInit {
  post = {};
  id;

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute) {

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id)
      this.postService.getPost(this.id).take(1).subscribe(p => this.post = p);
  }

  ngOnInit() {
  }

  delete() {
    if (!confirm('Czy jesteś pewny?')) return;

    this.postService.delete(this.id);
    this.router.navigate(['/admin/posts']);


  }

  save(post) {
    if (this.id) this.postService.update(this.id, post);
    else this.postService.create(post);
    this.router.navigate(['/admin/posts']);

  }

}
