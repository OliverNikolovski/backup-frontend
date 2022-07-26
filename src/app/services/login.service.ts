import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtToken } from '../models/jwt-token';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //apiURL = "http://localhost:8083/api"

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  };

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<JwtToken>{
    const body = `username=${username}&password=${password}`
    return this.http.post<JwtToken>(`api/login`, body, this.httpOptions)
  }
}
