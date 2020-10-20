import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './shared/services/authentication.service';
import { MenuItemService } from './shared/services/menu-item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthenticationService,
    public router: Router,
    public foodService: MenuItemService) {
  }
  title = 'truYum';
  isLoggedIn = false;

  ngOnInit(): void {
    this.loggedIn();
    this.router.navigate(['search-bar']);
  }


  loggedIn(): boolean {
    if (this.authService.loggedIn) {
      this.isLoggedIn = true;
      return true;
    } else {
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
