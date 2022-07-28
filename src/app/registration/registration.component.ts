import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { LoginNotificationService } from '../services/login-notification.service';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    repeatedPassword: new FormControl(),
    email: new FormControl(),
    shortBio: new FormControl(),
    profilePicture: new FormControl(),

  });

  constructor(
    private registerService: RegisterService,
    private loginNotificationService: LoginNotificationService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.registerService.register(this.form.getRawValue()).
    pipe(
      tap(data => console.log('data:', data))
    ).subscribe({
      next: ({user, message}) => {
        console.log(user, message);
        this.loginNotificationService.subject$.next(true);
        this.router.navigate(['/blogs']);
      }
    });
  }

  onFileChange(event: Event) {
    console.log(event);
    const file = (event.target as HTMLInputElement).files![0];
    this.form.patchValue({
      profilePicture: file
    });
  }
}
