import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { MenuItemService } from '../../services/menu-item.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  invalidLogin: boolean;
  error = 'Login Failed';

  constructor(
    private formBuild: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
    private foodService: MenuItemService) { }

  ngOnInit() {
    this.loginForm = this.formBuild.group({
      username: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required
      ]]
    });
  }
  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }

  getUsername() {
    return this.loginForm.value['username'];
  }

  getPassword() {
    return this.loginForm.value['password'];
  }

  toSignup() {
    this.router.navigate(['signup']);
  }

  onSubmit() {
    this.authService.authenticate(this.getUsername(), this.getPassword()).subscribe(
      data => {
        console.log(data);
        this.authService.setToken(data.token);
        this.error = 'Logged In successfully';
        this.authService.username = this.getUsername();
        this.authService.loggedIn = true;
        this.authService.loggedIn = true;
        this.authService.validCredentials = true;
        this.authService.setUserId();
        console.log('useod ' + this.authService.userId);
        if (data.role === 'ADMIN') {
          this.foodService.isAdmin = true;
        } else {
          this.foodService.isAdmin = false;
        }
        console.log(data.role);
        this.router.navigate(['/search-bar']);
        console.log(data.token);
        console.log(data.role);
      },
      error => {
        this.authService.validCredentials = false;
        this.invalidLogin = true;
        if (error.status === 401) {
          this.error = 'Invalid Username or Password';
        }
        console.log(error);
      }
    );
  }
}
