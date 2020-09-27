import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UserServiceService } from '../site/user-service.service';
import { AuthenticationService } from '../services/authentication.service';
import { environment } from '../../environments/environment';
import { Cart } from '../cart/cart';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  @Output() cartUpdated = new EventEmitter();

  cartItems: Cart = { foodItemList: [], total: 0 };
  url: string = environment.baseUrl;
  constructor(private _httpClient: HttpClient, private _authService: AuthenticationService) { }

  getCart(): Cart {
    return this.cartItems;
  }
  calculateTotal() {
    this.cartItems.total = 0;
    for (let i = 0; i < this.cartItems.foodItemList.length; i++) {
      this.cartItems.total += this.cartItems.foodItemList[i].price;
    }
    this.cartUpdated.emit();
  }

  public getAllCartItems(): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
    return this._httpClient.get<Cart>(this.url + 'carts/' + this._authService.username, { headers });
  }
  public deleteCartItem(menuItemId: number): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
    return this._httpClient.delete(this.url + 'carts/' + this._authService.username + '/' + menuItemId, { headers });
  }
}
