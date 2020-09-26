import { Component, OnInit } from '@angular/core';
import { Cart } from './cart';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Cart;

  empty = false;
  remove = false;
  constructor(private cartService: CartServiceService) { }

  ngOnInit() {
    this.cartService.getAllCartItems().subscribe(data => {
      this.cart = data;
      if (this.cart.total === 0) {
        this.empty = true;
      }
      console.log(this.cart);
    });
  }

  onDeleteCart(id: number) {
    console.log('Inside delete Cart item');
    this.cartService.deleteCartItem(id).subscribe();
    this.remove = true;
    this.cartService.getAllCartItems().subscribe(data => {
      this.cart = data;
      if (this.cart.total === 0) {
        this.empty = true;
      }
      console.log(this.cart);
    });
  }
}
