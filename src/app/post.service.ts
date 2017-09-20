import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService {

  constructor(private db: AngularFireDatabase) { }

  create(post) {
    return this.db.list('/posts').push({
      title: post.title,
      content: post.content,
      img: post.img,
      date: new Date().getTime()
    });
  }

  getAll() {
    return this.db.list('/posts');
  }

  getPost(postId) {
    return this.db.object('/posts/' + postId);
  }

  update(postId, post) {
    return this.db.object('/posts/' + postId).update({
      title: post.title,
      content: post.content,
      img: post.img,
      date: new Date().getTime()
    });
  }

  delete(postId) {
    return this.db.object('/posts/' + postId).remove();
  }

}
