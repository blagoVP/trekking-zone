import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authServise: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (this.authServise.isLogged){
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
    // return this.checkLogin(url)

  }

  // checkLogin(url: string):boolean{

  //   // if (this.authServise.isLoggedIn){ return true}

  //   // this.authServise.redirectUrl = url;

  //   this.router.navigate(['/login']);

  //   return false;
  // }

}
