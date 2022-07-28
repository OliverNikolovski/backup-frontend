import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginNotificationService {
  subject$ = new BehaviorSubject<boolean>(false);
  username$ = new Subject<string>();
  constructor() { }
}
