import { Injectable, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { MenuItemService } from '../services/menu-item.service';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  // private subject = new Subject<foodItem[]>();
  // isAdmin: boolean = false;
  // addedToCart: boolean = false;
  // cartAddedId: number;
  // isLoggedIn: boolean = false;
  // clickedOnAdd: boolean = false;
  // items: foodItem[] = [
  //   {
  //     id: 1, name: "Sandwich", price: 99.00, active: true, dateOfLaunch: new Date("2017-03-15"), category: "Main Course", freeDelivery: true,
  //     imageUrl: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
  //   },
  //   {
  //     id: 2, name: "Burger", price: 129.00, active: true, dateOfLaunch: new Date("2017-12-23"), category: "Main Course", freeDelivery: false,
  //     imageUrl: "https://images.unsplash.com/photo-1512152272829-e3139592d56f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  //   },
  //   {
  //     id: 3, name: "Pizza", price: 149.00, active: true, dateOfLaunch: new Date("2018-03-18"), category: "Main Course", freeDelivery: false,
  //     imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  //   },
  //   {
  //     id: 4, name: "French Fries", price: 57.00, active: true, dateOfLaunch: new Date("2017-07-02"), category: "Starter", freeDelivery: true,
  //     imageUrl: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  //   },
  //   {
  //     id: 5, name: "Chocolate Brownie", price: 32.00, active: true, dateOfLaunch: new Date("2022-11-02"), category: "Dessert", freeDelivery: true,
  //     imageUrl: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1330&q=80"
  //   },
  // ]

  // constructor(private router: Router) { }


  // getFoodItems(): foodItem[] {
  //   return this.items.filter(fd_item => fd_item.active && fd_item.dateOfLaunch <= new Date());
  // }
  // getAllFoodItems(): foodItem[] {
  //   return this.items;
  // }
  // getSubject(): Subject<foodItem[]> {
  //   return this.subject;
  // }
  // addToCart(foodItemId: number) {
  //   if (this.isLoggedIn) {
  //     for (let foodItem of this.items) {
  //       if (foodItem.id == foodItemId) {
  //         this.cartService.getCart().foodItemList.push(foodItem);
  //         this.cartService.calculateTotal();
  //         this.addedToCart = true;
  //         this.cartAddedId = foodItemId;
  //       }
  //     }
  //   }
  //   else {
  //     this.clickedOnAdd = true;
  //     this.router.navigate(['login'])
  //   }
  // }
  // removeFromCart(foodItemId: number) {
  //   for (let i = 0; i < this.cartService.getCart().foodItemList.length; i++) {
  //     if (this.cartService.getCart().foodItemList[i].id == foodItemId) {
  //       this.cartService.getCart().foodItemList.splice(i, 1);
  //       this.cartService.calculateTotal();
  //       break;
  //     }
  //   }
  // }
  // updateFoodItem(foodItem: foodItem) {
  //   for (let i = 0; i < this.items.length; i++) {
  //     if (this.items[i].id == foodItem.id) {
  //       this.items[i] = foodItem;
  //       break;
  //     }
  //   }
  // }
  // getFoodItem(foodItemId: number): foodItem {
  //   for (let foodItem of this.items) {
  //     if (foodItem.id == foodItemId)
  //       return foodItem;
  //   }
  // }
}
