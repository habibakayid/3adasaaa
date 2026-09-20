import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import postsData from '../../assets/posts.json';

@Component({
  selector: 'app-blog-details',
  imports: [RouterLink],
  templateUrl: './blog-details.html',
})
export class BlogDetails {
  post;

  constructor(private route: ActivatedRoute) {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.post = postsData.posts.find(p => p.slug === slug);
  }
}