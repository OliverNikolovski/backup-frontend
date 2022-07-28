import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Blog } from '../models/blog';
import { BlogService } from '../services/blog.service';
import { LoginNotificationService } from '../services/login-notification.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogs$: Observable<Blog[]> = this.blogService.getAllBlogs();
  isLoggedIn = false;
  border = true;

  constructor(private blogService: BlogService,
    private loginNotificationService: LoginNotificationService) { }

  ngOnInit(): void {
    this.loginNotificationService.subject$.subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
  }
}
