import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SignupComponent } from './signup.component';
import { ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';



fdescribe('SignupComponent', () => {
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
      firstname.setValue('john')
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
      let username = component.signUpForm.controls['username'];
      username.setValue('johndoe');
      expect(component.username.value).toEqual('johndoe')
    });

    it(`firstname value should be equal to 'john'`, () => {
      let firstname = component.signUpForm.controls['firstname'];
      firstname.setValue('john');
      expect(component.firstname.value).toEqual('john')
    });

    it(`lastname value should be equal to 'doe'`, () => {
      let lastname = component.signUpForm.controls['lastname'];
      lastname.setValue('doe');
      expect(component.lastname.value).toEqual('doe')
    });

    it(`password value should be equal to 'secret'`, () => {
      let password = component.signUpForm.controls['password'];
      password.setValue('secret');
      expect(component.password.value).toEqual('secret')
    });

    it(`confirmPassword value should be equal to 'secret'`, () => {
      let confirmPassword = component.signUpForm.controls['confirmPassword'];
      confirmPassword.setValue('secret');
      expect(component.confirmPassword.value).toEqual('secret')
    });

    it(`'matchtConfirmPassword' should return null`, () => {
      let password = component.signUpForm.controls['password'];
      let confirmPassword = new FormControl()
      password.setValue('secret');
      confirmPassword.setValue('secret');
      let result = component.matchConfirmPassword(confirmPassword);
      console.log(result)
      expect(result).toBeNull()
    });

    it(`'matchtConfirmPassword' should return object`, () => {
      let password = component.signUpForm.controls['password'];
      let confirmPassword = new FormControl()
      password.setValue('secret');
      confirmPassword.setValue('diferentSecret');
      let result = component.matchConfirmPassword(confirmPassword);
      console.log(result)
      expect(result).toEqual({ 'nomatch': true })
    });

    it(`'isUsernameTaken' should return null`, () => {
      let control = new FormControl()
      let result = component.isUsernameTaken(control);
      expect(result).toBeNull();
    });

    it(`'isUsernameTaken' should return object`, () => {
      let control = new FormControl()
      control.setValue('admin')
      let result = component.isUsernameTaken(control);
      expect(result).toEqual({ 'userNameTaken': true })
    });

  })

});
