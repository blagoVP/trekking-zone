import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler } from '@angular/common/http';
import { AuthService } from "./auth/auth.service"
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from "../environments/environment"

const apiUrl = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class AppInterceptorService implements HttpInterceptor {

  appKey: string = 'kid_S1pjzCdaH';
  appSecret: string = '9283028c31344e48af2eb9179e17da7a';

  basicAuth: string = `Basic ${btoa(`${this.appKey}:${this.appSecret}`)}`;

  constructor(private injector: Injector) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let authService = this.injector.get(AuthService);
    if (req.url.endsWith('login') || req.url.endsWith(`${this.appKey}/`)) {
      let appReq = req.clone({ url: `${apiUrl}/${req.url}`,
        setHeaders: {
          'Authorization': `${this.basicAuth}`
        }
      })
      return next.handle(appReq).pipe(
        catchError(this.handleError)
      );
    } else {
      let appReq = req.clone({ url: `${apiUrl}/${req.url}` ,
        setHeaders: {
          'Authorization': `Kinvey ${authService.getToken()}`
        }
      })
      return next.handle(appReq).pipe(
        catchError(this.handleError)
      );
    }
  }

  handleError(error) {

    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {

      // client-side error

      errorMessage = `Error: ${error.error.message}`;

    } else {

      // server-side error

      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;

    }

    window.alert(errorMessage);

    return throwError(errorMessage);

  }

}
