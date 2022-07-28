import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import {FormsModule} from '@angular/forms';
import { pipe, tap } from 'rxjs';
import { LoginNotificationService } from '../services/login-notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token?: string
  
  constructor(private loginService: LoginService,
    private loginNotificationService: LoginNotificationService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(username: string, password: string) {
    console.log("SUBMITTED", username);
    this.loginService.login(username, password).pipe(
      tap(token => console.log(token))
    ).subscribe(
      token => {
        this.token = token.access_token;
        localStorage.setItem("access_token", this.token);
        this.loginNotificationService.subject$.next(true);
        this.loginNotificationService.username$.next(username);
        this.router.navigate(['/blogs'])
      }
    );
  }

}
