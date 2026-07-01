import { inject, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})

export class CookieManagerService {
  TOKEN_NAME = 'POS_TOKEN';
  private cookieService = inject(CookieService);

  isLogged(): boolean {
    return this.cookieService.check(this.TOKEN_NAME);
  }

  setToken(token: string): void {
    // Expires in 1 day
    this.cookieService.set(this.TOKEN_NAME, token, 1, '/');
  }

  getToken(): string | null {
    return this.cookieService.get(this.TOKEN_NAME) || null;
  }

  removeToken(): void {
    this.cookieService.delete(this.TOKEN_NAME, '/');
  }
}
