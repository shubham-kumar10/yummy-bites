import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './site/auth-service.service';
import { Router } from '@angular/router';
import { UserServiceService } from './site/user-service.service';
import { FoodServiceService } from './food/food-service.service';
import { AuthenticationService } from './services/authentication.service';
import { MenuItemService } from './services/menu-item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.loggedIn();
    this.router.navigate(['search-bar']);
  }
  constructor(private authService: AuthenticationService, public router: Router, private foodService: MenuItemService) {
  }
  title = 'truYum';
  isLoggedIn: boolean = false;


  loggedIn(): boolean {
    if (this.authService.loggedIn) {
      this.isLoggedIn = true;
      return true
    }
    else {
      this.isLoggedIn = false;
      return false;
    }
  }
  clickOnAddCart() {
    this.foodService.clickedOnAdd = false;
    this.foodService.addedToCart = false;
  }
  exit() {
    window.location.reload();
  }
}
