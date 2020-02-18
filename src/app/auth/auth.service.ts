import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {delay, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

baseURL:string = 'https://baas.kinvey.com';
appKey: string = 'kid_S1pjzCdaH';
appSecret: string = '9283028c31344e48af2eb9179e17da7a';

createAythorization(type: string): string {
  return type === "Basic"
      ? `Basic ${btoa(`${this.appKey}:${this.appSecret}`)}`
      : `Kinvey ${sessionStorage.getItem('authtoken')}`
}



  // isLoggedIn = false;

  // redirectUrl:string;

  // login(): Observable<boolean> {
  //   return of(true).pipe(
  //     delay(1000),
  //     tap(val => this.isLoggedIn = true)
  //   );
  // }

  // logout(): void{
  //   this.isLoggedIn = false;
  // }

  constructor() { }
}
