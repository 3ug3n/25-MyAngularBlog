import { Injectable } from '@angular/core';
import { NewPost, Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: Post[] = [
    {
      id: 1,
      nomeAutore: 'Odo',
      contenuto: 'Gay1'
    },
    {
      id: 2,
      nomeAutore: 'Pietro',
      contenuto: 'Gay2'
    },
    {
      id: 3,
      nomeAutore: 'Jhon',
      contenuto: 'Gay3'
    },
  ]

  private lastId = 4;

  getPosts() {
    return this.posts.slice();
  }

  addPost(post: NewPost) {
    const newPost = {
      id: this.lastId++,
      ...post,
    };

    this.posts.push(newPost);
  }
}
