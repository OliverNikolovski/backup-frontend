import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
    image: new FormControl(),
  });

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('username', this.form.value['username']);
    formData.append('password', this.form.value['password']);
    formData.append('repeatedPassword', this.form.value['repeatedPassword']);
    formData.append('email', this.form.value['email']);
    formData.append('shortBio', this.form.value['shortBio']);
    formData.append('image', this.form.get('image')?.value);
    this.registerService.sendImage(this.form.getRawValue()).subscribe(data => console.log(data));
  }

  onFileChange(event: Event) {
    console.log(event);
    let file = (event.target as HTMLInputElement).files![0];
    this.form.patchValue({
      image: file
    });
  }
}
