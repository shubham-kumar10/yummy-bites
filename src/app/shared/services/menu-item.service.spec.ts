import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from './authentication.service';

import { MenuItemService } from './menu-item.service';

describe('MenuItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
      RouterTestingModule
    ],
    providers: [
      AuthenticationService
    ]
  }));

  it('should be created', () => {
    const service: MenuItemService = TestBed.get(MenuItemService);
    expect(service).toBeTruthy();
  });
});
