import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import postsData from '../../assets/posts.json';

@Component({
  selector: 'app-blog',
  imports: [RouterLink],
  templateUrl: './blog.html',
   styleUrl: './blog.css',
})
export class Blog {
  allPosts = postsData.posts;
  categories = postsData.categories;

  activeCategory = 'الكل';
  viewMode: 'grid' | 'list' = 'grid';
  currentPage = 1;
  postsPerPage = 6;

  get filteredPosts() {
    if (this.activeCategory === 'الكل') {
      return this.allPosts;
    }
    return this.allPosts.filter(p => p.category === this.activeCategory);
  }

  get totalPages() {
    return Math.ceil(this.filteredPosts.length / this.postsPerPage);
  }

  get pagedPosts() {
    const start = (this.currentPage - 1) * this.postsPerPage;
    return this.filteredPosts.slice(start, start + this.postsPerPage);
  }

  setCategory(category: string) {
    this.activeCategory = category;
    this.currentPage = 1;
  }

  setView(mode: 'grid' | 'list') {
    this.viewMode = mode;
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }
}