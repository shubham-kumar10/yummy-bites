import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { foodItem } from '../food/item-info/foodItem';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  isAdmin: boolean = false;
  addedToCart: boolean = false;
  cartAddedId: number;
  isLoggedIn: boolean = false;
  clickedOnAdd: boolean = false;
  private subject = new Subject<foodItem[]>();
  url = environment.baseUrl;
  constructor(private _httpClient: HttpClient, private _authService: AuthenticationService) { }

  public getAllMenuItems(): Observable<any> {
    let headers = new HttpHeaders();
    console.log(this._authService.getToken() + ' token');
    headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
    console.log('menuitem requested');
    console.log(headers);

    return this._httpClient.get<foodItem[]>(this.url + 'menu-items', { headers });
  }

  getSubject(): Subject<foodItem[]> {
    return this.subject;
  }

  getMenuItem(id: number): Observable<any> {
    let headers = new HttpHeaders();
    console.log(this._authService.getToken() + ' token');
    headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
    console.log('menuitem requested');
    return this._httpClient.get<foodItem>(this.url + 'menu-items/' + id, { headers });
  }

  save(foodItem: foodItem): Observable<any> {
    console.log(foodItem);
    let headers = new HttpHeaders();
    console.log(this._authService.getToken() + ' token');
    headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
    console.log('menuitem update requested');
    return this._httpClient.put<foodItem>(this.url + 'menu-items', foodItem, { headers });
  }

  addCartItem(menuItemId: number): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
    console.log(this.url + 'carts/' + this._authService.username + '/' + menuItemId);
    return this._httpClient.post(this.url + 'carts/' + this._authService.username + '/' + menuItemId, null, { headers })
  }

}
