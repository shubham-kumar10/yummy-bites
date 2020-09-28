import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemInfoComponent } from './food/item-info/item-info.component';
import { MenuComponent } from './food/menu/menu.component';
import { SearchComponent } from './food/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemEditComponent } from './food/item-edit/item-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './site/signup/signup.component';
import { LoginComponent } from './site/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { FoodComponent } from './food/food.component';

const appRoutes: Routes = [

];

@NgModule({
  declarations: [
    AppComponent,
    ItemInfoComponent,
    MenuComponent,
    SearchComponent,
    CartComponent,
    ItemEditComponent,
    SignupComponent,
    LoginComponent,
    FoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
