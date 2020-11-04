import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemEditComponent } from './core/food/item-edit/item-edit.component';
import { SignupComponent } from './core/site/signup/signup.component';
import { LoginComponent } from './core/site/login/login.component';
import { SearchComponent } from './core/food/search/search.component';
import { CartComponent } from './core/cart/cart.component';
import { AuthGaurdService } from './shared/gaurds/auth-gaurd-service.service';
import { ShippingComponent } from './core/shipping/shipping.component';

const routes: Routes = [
  { path: 'edit-food-item', component: ItemEditComponent, canActivate: [AuthGaurdService] },
  { path: 'signup', component: SignupComponent },
  { path: 'cart', component: CartComponent, canActivate: [AuthGaurdService] },
  { path: 'login', component: LoginComponent },
  { path: 'search-bar', component: SearchComponent },
  { path: 'checkout', component: ShippingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
