import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItemService } from '../../services/menu-item.service';
import { FoodItem } from './foodItem';

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

}
