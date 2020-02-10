import { Injectable } from '@angular/core';
import { UserServiceService } from './user-service.service';
import { Router } from '@angular/router';
import { FoodServiceService } from '../food/food-service.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  loggedInUser = { loggedOut: true };
  validCredentials: boolean = true;
  accessToken: string; // JWT token
  redirectUrl = '/';
  loggedIn: boolean = false;
  authenticationApiUrl: string = environment.baseUrl + "authenticate";
  constructor(private userService: UserServiceService, public router: Router, private foodService: FoodServiceService, private _httpClient: HttpClient) { }

  // authenticateUser(user) {
  //   for (let validUser of this.userService.userList) {
  //     if (validUser.username == user.username && validUser.password == user.password) {
  //       this.loggedInUser = user;
  //       this.validCredentials = true;
  //       if (user.username == 'admin')
  //         this.foodService.isAdmin = true;
  //       this.router.navigate(['search-bar']);
  //       this.loggedIn = true;
  //       this.foodService.isLoggedIn = true;
  //     }
  //     else
  //       this.validCredentials = false;
  //   }
  // }
  // logout() {
  //   this.loggedInUser = { loggedOut: true };
  //   this.foodService.isAdmin = false;
  //   this.loggedIn = false;
  //   this.foodService.isLoggedIn = false;
  //   this.foodService.clickedOnAdd = false;
  //   this.foodService.addedToCart = false;
  //   this.router.navigate(['login']);
  //   // this.router.navigate(['search-bar']);
  // }

  // // authenticate(user: string, password: string): Observable<any> {
  // //   let headers = new HttpHeaders();
  // //   headers = headers.set('Authorization', 'Basic ' + btoa(user + ':' + password));
  // //   return this._httpClient.get(this.authenticationApiUrl, { headers })
  // // }



}
