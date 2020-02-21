import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from "./auth/auth.service"

@Injectable({
  providedIn: 'root'
})
export class AppInterceptorService implements HttpInterceptor {

  appKey: string = 'kid_S1pjzCdaH';
  appSecret: string = '9283028c31344e48af2eb9179e17da7a';

  basicAuth: string = `Basic ${btoa(`${this.appKey}:${this.appSecret}`)}`;

  constructor(private injector: Injector) {

  }

  intercept(req, next) {
    let authService = this.injector.get(AuthService);
    if (req.url.endsWith('login') || req.url.endsWith(this.appKey)) {
      let appReq = req.clone({
        setHeaders: {
          'Authorization': `${this.basicAuth}`
        }
      })
      return next.handle(appReq);
    } else {
      let appReq = req.clone({
        setHeaders: {
          'Authorization': `Kinvey ${authService.getToken()}`
        }
      })
      return next.handle(appReq);
    }
  }

}
