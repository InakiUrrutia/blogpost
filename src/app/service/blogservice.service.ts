import { Injectable } from '@angular/core';
import { BlogPost } from '../model/Blogpost';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogposts: BlogPost[] = environment.blogposts;

  constructor() {}

  getBlogPosts(): BlogPost[]{
    return this.blogposts;
  }

  createBlogPost(new_bpost: BlogPost): void{
    this.blogposts.push(new_bpost);
  }
}
