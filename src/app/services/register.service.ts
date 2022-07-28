import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserRegistration } from '../models/user-registration';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }

  register(
    data: UserRegistration
  ): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('username', data.username);
    formData.append('password', data.password);
    formData.append('repeatedPassword', data.repeatedPassword);
    if (data.email) formData.append('email', data.email);
    if (data.shortBio) formData.append('shortBio', data.shortBio);
    if (data.profilePicture) formData.append('profilePicture', data.profilePicture);
    return this.httpClient.post<User>(`api/users/register`, formData);
  }

}
