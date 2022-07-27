import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginNotificationService } from '../services/login-notification.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false

  constructor(private loginNotificationService: LoginNotificationService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginNotificationService.subject$.subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
  }

  logout() {
    this.isLoggedIn = false;
    sessionStorage.removeItem("access_token");
    this.router.navigate(['/login'])
  }

}
