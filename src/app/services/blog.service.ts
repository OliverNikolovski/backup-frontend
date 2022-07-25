import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  apiURL = "http://localhost:8083/api/blogs"

  constructor(private http: HttpClient) {}

  getAllBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${this.apiURL}/all`)
  }

  getBlogsWithPagination(page: number, size: number) {
    return this.http.get<Blog[]>(`${this.apiURL}?page=${page}&size=${size}`)
  }
}
