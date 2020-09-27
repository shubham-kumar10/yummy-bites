import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { UserServiceService } from '../site/user-service.service';
import { Router } from '@angular/router';

import { MenuItemService } from './menu-item.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _httpClient: HttpClient, private userService: UserServiceService, public router: Router) { }

  loggedInUser = { loggedOut: true };
  validCredentials = true;
  accessToken: string; // JWT token
  redirectUrl = '/';
  loggedIn = false;
  private authenticationApiUrl = environment.baseUrl;
  private token: string;
  username: string;
  userId = 0;
  public setToken(token: string) {
    this.token = token;
  }
  public getToken() {
    return this.token;
  }

  public setUserId() {
    for (let i = 0; i < this.username.length; i++) {
      this.userId = this.username.charCodeAt(i) + this.userId;
    }
  }

  authenticate(user: string, password: string): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic ' + btoa(user + ':' + password));
    return this._httpClient.get(this.authenticationApiUrl + 'authenticate', { headers });
  }

  logout() {
    this.loggedIn = false;
    this.setToken(null);
    this.userId = null;
  }

}
