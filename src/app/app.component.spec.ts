import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { AuthenticationService } from './services/authentication.service';
import { MenuItemService } from './services/menu-item.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { FoodServiceService } from './food/food-service.service';

describe('Tests for AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        AuthenticationService,
        MenuItemService,
        HttpClient,
        HttpHandler,
        FoodServiceService
      ]
    }).compileComponents();
  }));

  describe('Test for constructor', () => {
    it('should create the app', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    });

    it(`should have as title 'truYum'`, () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('truYum');
    });
  })

  // it('should render title in a h2 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h2').textContent).toContain('truYum');
  // });

  class MockAuthService extends AuthenticationService {
    loggedIn = false;
  }


  describe('Test for LoggedIn function', () => {
    let http, user, router;
    let auth = new MockAuthService(http, user, router), food;
    let app = new AppComponent(auth, router, food);
    let result;

    // it(`should return 'null'`, inject([AuthenticationService], () => {
    //   auth.loggedIn = undefined;
    //   result = app.loggedIn();
    //   expect(result).toBeNull();
    // }));

    it(`should return 'true`, inject([AuthenticationService], () => {
      auth.loggedIn = true;
      result = app.loggedIn();
      expect(result).toBeTruthy();
    }));

    it(`shoule return 'false'`, inject([AuthenticationService], () => {
      auth.loggedIn = false;
      result = app.loggedIn();
      expect(result).toBeFalsy();
    }));
  })
});
