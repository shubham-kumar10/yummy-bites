import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

<<<<<<< HEAD
import { AuthenticationService } from './shared/services/authentication.service';
import { MenuItemService } from './shared/services/menu-item.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Router } from '@angular/router';
=======
import { AuthenticationService } from './services/authentication.service';
import { MenuItemService } from './services/menu-item.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { FoodServiceService } from './food/food-service.service';
>>>>>>> 966acfb7f5b7ae194f0ffb4ed6d67b9699ad8258

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
<<<<<<< HEAD
=======
        FoodServiceService
>>>>>>> 966acfb7f5b7ae194f0ffb4ed6d67b9699ad8258
      ]
    }).compileComponents();
  }));

  describe('Test for constructor', () => {
    it('should create the app', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    });

<<<<<<< HEAD
    it(`should have as title 'Yummy Bites'`, () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('Yummy Bites');
    });
  });
=======
    it(`should have as title 'truYum'`, () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('truYum');
    });
  })
>>>>>>> 966acfb7f5b7ae194f0ffb4ed6d67b9699ad8258

  // it('should render title in a h2 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
<<<<<<< HEAD
  //   expect(compiled.querySelector('h2').textContent).toContain('Yummy Bites');
=======
  //   expect(compiled.querySelector('h2').textContent).toContain('truYum');
>>>>>>> 966acfb7f5b7ae194f0ffb4ed6d67b9699ad8258
  // });

  class MockAuthService extends AuthenticationService {
    loggedIn = false;
  }

<<<<<<< HEAD
  describe('Test for LoggedIn function', () => {
    // tslint:disable-next-line: prefer-const
    let http: HttpClient, router: Router, food: MenuItemService;
    const auth = new MockAuthService(http, router);
    const app = new AppComponent(auth, router, food);
    let result: boolean;
=======

  describe('Test for LoggedIn function', () => {
    let http, user, router;
    let auth = new MockAuthService(http, user, router), food;
    let app = new AppComponent(auth, router, food);
    let result;
>>>>>>> 966acfb7f5b7ae194f0ffb4ed6d67b9699ad8258

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
<<<<<<< HEAD
  });
=======
  })
>>>>>>> 966acfb7f5b7ae194f0ffb4ed6d67b9699ad8258
});
