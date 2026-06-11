import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { SnackbarService } from '../services/snackbar-service';
import { CookieManagerService } from '../services/cookie-manager-service';

export const authGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  let snackbarService = inject(SnackbarService);
  let cookieManagerService = inject(CookieManagerService);

  if (!cookieManagerService.isLogged()) {
    snackbarService.openSnackBar('you will have to signup with this system!', 'Close');
    router.navigateByUrl('/home/login');
    return false;
  }
  else {
    return true;
  }

};
