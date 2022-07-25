import { Component, Input, OnInit } from '@angular/core';
import { Blog } from '../models/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @Input() blog?: Blog

  constructor() { }

  ngOnInit(): void {
  }

}
