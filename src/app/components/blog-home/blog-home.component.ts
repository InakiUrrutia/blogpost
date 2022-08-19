import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/model/Blogpost';
import { BlogService } from 'src/app/service/blogservice.service';

@Component({
  selector: 'blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css']
})
export class BlogHomeComponent implements OnInit {

  blogposts: BlogPost[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogposts = [...this.blogService.getBlogPosts()];
  }

}
