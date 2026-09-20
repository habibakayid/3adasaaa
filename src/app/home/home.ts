import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import postsData from '../../assets/posts.json';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  siteInfo = postsData.siteInfo;
  categories = postsData.categories;
  featured = postsData.posts.filter(p => p.featured);
  latest = postsData.posts.slice(0, 3);
}