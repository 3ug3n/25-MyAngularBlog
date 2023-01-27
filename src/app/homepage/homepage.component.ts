import { Component } from '@angular/core';
import { Post } from '../model/post';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  posts!: Post[];

  constructor( private postsService: PostService) {}

  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
}
}
