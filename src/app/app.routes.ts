import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Blog } from './blog/blog';
import { About } from './about/about';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  { path: '', component: Home, title: 'Adasa | Home' },
  { path: 'blog', component: Blog, title: 'Adasa | Blog' },
  { path: 'about', component: About, title: 'Adasa | About Us' },
  { path: '**', component: NotFound, title: 'Adasa | Page Not Found' }
];