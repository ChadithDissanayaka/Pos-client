import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { CookieManagerService } from '../services/cookie-manager-service';
import { AlertService } from '../shared/alert/alert.service';

export const authGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  let alertService = inject(AlertService);
  let cookieManagerService = inject(CookieManagerService);

  if (!cookieManagerService.isLogged()) {
    alertService.warning('you will have to signup with this system!');
    router.navigateByUrl('/home/login');
    return false;
  } else {
    return true;
  }
};
