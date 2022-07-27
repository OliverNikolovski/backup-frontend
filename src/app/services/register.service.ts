import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }

  register(data: any): Observable<User> {
    console.log(data);
    // const obj = {
    //   username: data.username,
    //   password: data.password,
    //   repeatedPassword: data.repeatedPassword,
    //   image: data.image
    // }
    return this.httpClient.post<User>(`api/users/register`, data, {
      headers: {
        'contentType': 'multipart/form-data'
      }
    });
  }

  sendImage(
    data: any
  ): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('image', data.image, data.image.name);
    formData.append('username', data.username);
    formData.append('password', data.password);
    formData.append('repeatedPassword', data.repeatedPassword);
    return this.httpClient.post<User>(`api/users/register`, formData);
  }

}
