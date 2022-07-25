import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../models/blog';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogs$: Observable<Blog[]> = this.blogService.getAllBlogs();

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
  }



}
