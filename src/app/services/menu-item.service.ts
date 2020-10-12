import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { FoodItem } from '../food/item-info/foodItem';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  isAdmin = false;
  addedToCart = false;
  cartAddedId: number;
  isLoggedIn = false;
  clickedOnAdd = false;
  private subject = new Subject<FoodItem[]>();
  url = environment.baseUrl;
  constructor(private _httpClient: HttpClient, private _authService: AuthenticationService) { }

  public getAllMenuItems(): Observable<FoodItem[]> {
    let headers = new HttpHeaders();
    console.log(this._authService.getToken() + ' token');
    headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
    console.log('menuitem requested');
    console.log(headers);

    return this._httpClient.get<FoodItem[]>(this.url + 'menu-items', { headers });
  }

  getSubject(): Subject<FoodItem[]> {
    return this.subject;
  }

  getMenuItem(id: number): Observable<any> {
    let headers = new HttpHeaders();
    console.log(this._authService.getToken() + ' token');
    headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
    console.log('menuitem requested');
    return this._httpClient.get<FoodItem>(this.url + 'menu-items/' + id, { headers });
  }

  save(foodItem: FoodItem): Observable<any> {
    console.log(foodItem);
    let headers = new HttpHeaders();
    console.log(this._authService.getToken() + ' token');
    headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
    console.log('menuitem update requested');
    return this._httpClient.put<FoodItem>(this.url + 'menu-items', foodItem, { headers });
  }

  addCartItem(menuItemId: number): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
    console.log(this.url + 'carts/' + this._authService.username + '/' + menuItemId);
    return this._httpClient.post(this.url + 'carts/' + this._authService.username + '/' + menuItemId, null, { headers });
  }

}
