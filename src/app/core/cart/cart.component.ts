import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from 'src/app/shared/services/cart-service.service';
import { Cart } from '../../shared/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Cart;

  empty = false;
  remove = false;
  constructor(
    private cartService: CartServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.cartService.getAllCartItems().subscribe(data => {
      this.cart = data;
      if (!this.cart.total) {
        this.empty = true;
      }
      console.log(this.cart);
    });
  }

  onDeleteCart(id: number) {
    console.log('Inside delete Cart item');
    this.cartService.deleteCartItem(id).subscribe(
      data => {
        this.cart = data;
        if (!this.cart.total) {
          this.empty = true;
        }
        console.log(this.cart);
      }
    );
    this.remove = true;
  }

  navigateToShipping() {
    this.router.navigate(['checkout']);
  }
}
