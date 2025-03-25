import { TestBed } from '@angular/core/testing';
import { HttpInterceptorFn } from '@angular/common/http';

import { authInterceptor } from './auth.interceptor';

describe('authInterceptor', () => {
   beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        authInterceptor
      ]
    });
  });

  it('should be created', () => {
    const interceptor: authInterceptor = TestBed.inject(authInterceptor)
    expect(interceptor).toBeTruthy();
  });
});
