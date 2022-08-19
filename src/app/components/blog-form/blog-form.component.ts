import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/model/Blogpost';
import { BlogService } from 'src/app/service/blogservice.service';

@Component({
  selector: 'blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {

  titre: string = "";
  corps: string = "";

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
  }

  creerBlogPost(): void{
    this.blogService.createBlogPost(new BlogPost(this.titre, this.corps, null, []))
  }


}
