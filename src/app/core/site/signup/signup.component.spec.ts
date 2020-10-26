import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SignupComponent } from './signup.component';
import { ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';
import { UserServiceService } from '../../../shared/services/user-service.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';



describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignupComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule,
      ],
      providers: [
        FormsModule,
        HttpClient,
        HttpHandler,
        UserServiceService,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid form when empty', () => {
    expect(component.signUpForm.valid).toBeFalsy();
  });

  describe('Tests with values', () => {
    let username, firstname, lastname, password, confirmPassword;

    beforeEach(() => {
      username = component.signUpForm.controls['username'];
      firstname = component.signUpForm.controls['firstname'];
      lastname = component.signUpForm.controls['lastname'];
      password = component.signUpForm.controls['password'];
      confirmPassword = component.signUpForm.controls['confirmPassword'];

      username.setValue('johndoe');
      firstname.setValue('john');
      lastname.setValue('doe');
      password.setValue('secret');
      confirmPassword.setValue('secret');

      fixture.detectChanges();
    });

    it('username should be valid when filled', () => {
      expect(username.valid).toBeTruthy();
    });

    it(`firstname should be valid when filled`, () => {
      expect(firstname.valid).toBeTruthy();
    });

    it(`lastname should be valid when filled`, () => {
      expect(lastname.valid).toBeTruthy();
    });

    it(`password should be valid when filled`, () => {
      expect(password.valid).toBeTruthy();
    });

    it(`confirmPassword should be valid when filled`, () => {
      expect(confirmPassword.valid).toBeTruthy();
    });

    it(`username value should be equal to 'johndoe'`, () => {
      const username2 = component.signUpForm.controls['username'];
      username2.setValue('johndoe');
      expect(component.username.value).toEqual('johndoe');
    });

    it(`firstname value should be equal to 'john'`, () => {
      const firstname2 = component.signUpForm.controls['firstname'];
      firstname2.setValue('john');
      expect(component.firstname.value).toEqual('john');
    });

    it(`lastname value should be equal to 'doe'`, () => {
      const lastname2 = component.signUpForm.controls['lastname'];
      lastname2.setValue('doe');
      expect(component.lastname.value).toEqual('doe');
    });

    it(`password value should be equal to 'secret'`, () => {
      const password2 = component.signUpForm.controls['password'];
      password2.setValue('secret');
      expect(component.password.value).toEqual('secret');
    });

    it(`confirmPassword value should be equal to 'secret'`, () => {
      const confirmPassword2 = component.signUpForm.controls['confirmPassword'];
      confirmPassword2.setValue('secret');
      expect(component.confirmPassword.value).toEqual('secret');
    });

    it(`'matchtConfirmPassword' should return null`, () => {
      const password2 = component.signUpForm.controls['password'];
      const confirmPassword2 = new FormControl();
      password2.setValue('secret');
      confirmPassword2.setValue('secret');
      const result = component.matchConfirmPassword(confirmPassword2);
      console.log(result);
      expect(result).toBeNull();
    });

    it(`'matchtConfirmPassword' should return object`, () => {
      const password2 = component.signUpForm.controls['password'];
      const confirmPassword2 = new FormControl();
      password2.setValue('secret');
      confirmPassword2.setValue('diferentSecret');
      const result = component.matchConfirmPassword(confirmPassword2);
      console.log(result);
      expect(result).toEqual({ 'nomatch': true });
    });

    it(`'isUsernameTaken' should return null`, () => {
      const control = new FormControl();
      const result = component.isUsernameTaken(control);
      expect(result).toBeNull();
    });

    it(`'isUsernameTaken' should return object`, () => {
      const control = new FormControl();
      control.setValue('admin');
      const result = component.isUsernameTaken(control);
      expect(result).toEqual({ 'userNameTaken': true });
    });

  });

});
