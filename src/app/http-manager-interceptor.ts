import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieManagerService } from './services/cookie-manager-service';

export const httpManagerInterceptor: HttpInterceptorFn = (req, next) => {
  const cookieManager = inject(CookieManagerService);

  const token = cookieManager.getToken();

  if(!token){
    return next(req);
  }

  const clonedReq = req.clone({
    setHeaders:{
      Authorization:`Bearer ${token}`
    }
  });

  return next(clonedReq);
};