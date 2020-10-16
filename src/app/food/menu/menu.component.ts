import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FoodServiceService } from '../food-service.service';
import { MenuItemService } from '../../services/menu-item.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { FoodItem } from '../item-info/foodItem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: FoodItem[];
  isAdmin: boolean;

  constructor(
    private cartService: CartServiceService,
    private _menuItem: MenuItemService,
    private _authService: AuthenticationService,
    private router: Router) {

  }

  ngOnInit() {
    this._menuItem.getAllMenuItems().subscribe((data: FoodItem[]) => {
      this.items = data;
      console.log('data ->');
      console.log(this.items);
    });
    this.isAdmin = this._menuItem.isAdmin;
    console.log(this.items);
  }

  onAddToCartClick(id: number) {
    if (this._authService.loggedIn) {
      this._menuItem.addCartItem(id).subscribe();
      this._menuItem.addedToCart = true;
      this._menuItem.cartAddedId = id;
    } else {
      this._menuItem.clickedOnAdd = true;
      this.router.navigate(['login']);
    }
  }

  onAddClicked() {
    this.router.navigate(['edit-food-item']);
  }
}
