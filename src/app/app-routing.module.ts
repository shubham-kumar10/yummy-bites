import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemEditComponent } from './food/item-edit/item-edit.component';
import { AuthGaurdService } from './auth-gaurd-service.service';
import { SignupComponent } from './site/signup/signup.component';
import { CartComponent } from './shopping/cart/cart.component';
import { LoginComponent } from './site/login/login.component';
import { SearchComponent } from './food/search/search.component';

const routes: Routes = [
  { path: 'edit-food-item/:id', component: ItemEditComponent, canActivate: [AuthGaurdService] },
  { path: 'signup', component: SignupComponent },
  { path: 'cart', component: CartComponent, canActivate: [AuthGaurdService] },
  { path: 'login', component: LoginComponent },
  { path: 'search-bar', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
