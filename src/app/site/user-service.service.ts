import { Injectable, ɵConsole } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from './User/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserServiceService {
  url: string = environment.baseUrl;

  constructor(private router: Router, private _httpClient: HttpClient) { }

  addUser(user: User): Observable<any> {
    //this.userList.push(user);
    console.log("Inside add user of service ")
    console.log(user)
    return this._httpClient.post<any>(this.url + "users", user)
    this.router.navigate(['login']);
  }
}