import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemInfoComponent } from './core/food/item-info/item-info.component';
import { MenuComponent } from './core/food/menu/menu.component';
import { SearchComponent } from './core/food/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemEditComponent } from './core/food/item-edit/item-edit.component';
import { Routes } from '@angular/router';
import { SignupComponent } from './core/site/signup/signup.component';
import { LoginComponent } from './core/site/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './core/cart/cart.component';

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
    LoginComponent
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
