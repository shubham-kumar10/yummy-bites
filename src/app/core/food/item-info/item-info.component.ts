import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FoodItem } from 'src/app/shared/models/foodItem.model';
import { MenuItemService } from '../../../shared/services/menu-item.service';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.css']
})
export class ItemInfoComponent implements OnInit {

  @Input() foodItem: FoodItem;
  @Output() addToCartClicked = new EventEmitter();

  isAdmin: boolean;
  cartAddedId: number;
  quantity: number = 0;
  showQuantityBar: boolean = false;

  constructor(
    public _menuItem: MenuItemService,
    private router: Router
  ) { }

  ngOnInit() {
    this.isAdmin = this._menuItem.isAdmin;
  }

  displayAddToCart(id: number) {
    this.cartAddedId = id;
    console.log(this.cartAddedId);
  }

  navigateToEdit(id: number) {
    this.router.navigate(['/edit-food-item'], { queryParams: { id: id } });
  }

  addToCartButtonClicked() {
    this.showQuantityBar = true;
  }

  addToCart() {
    this.showQuantityBar = false;
    this.addToCartClicked.emit(this.foodItem.id);
  }

  addQuantity() {
    this.quantity = this.quantity + 1;
  }

  removeQuantity() {
    if (this.quantity >= 0)
      this.quantity = this.quantity - 1;
  }
}
