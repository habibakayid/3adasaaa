import { Component } from '@angular/core';
import postsData from '../../assets/posts.json';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  authors = this.getUniqueAuthors();

  getUniqueAuthors() {
  return postsData.posts
    .map(post => post.author)
    .filter((author, index, arr) => 
      arr.findIndex(a => a.name === author.name) === index
    );
}

}