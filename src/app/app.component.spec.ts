import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { AuthenticationService } from './shared/services/authentication.service';
import { MenuItemService } from './shared/services/menu-item.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Router } from '@angular/router';

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
  });

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
    // tslint:disable-next-line: prefer-const
    let http: HttpClient, router: Router, food: MenuItemService;
    const auth = new MockAuthService(http, router);
    const app = new AppComponent(auth, router, food);
    let result: boolean;

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
  });
});
