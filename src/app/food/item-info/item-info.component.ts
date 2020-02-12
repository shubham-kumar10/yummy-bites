import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { foodItem } from './foodItem';
import { MenuItemService } from '../../services/menu-item.service';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.css']
})
export class ItemInfoComponent implements OnInit {

  @Input() foodItem: foodItem;
  @Output() addToCartClicked = new EventEmitter();
  isAdmin: boolean;
  cartAddedId: number;

  constructor(private _menuItem: MenuItemService) { }

  ngOnInit() {
    this.isAdmin = this._menuItem.isAdmin;
  }
  displayAddToCart(id: number) {
    this.cartAddedId = id;
    console.log(this.cartAddedId)
  }

}
