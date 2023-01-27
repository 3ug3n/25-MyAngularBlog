import { Injectable } from '@angular/core';
import { Post } from '../model/post';

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

  getPosts() {
    return this.posts.slice();
  }
}
