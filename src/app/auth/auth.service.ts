import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseURL: string = 'https://baas.kinvey.com';
  appKey: string = 'kid_S1pjzCdaH';
  appSecret: string = '9283028c31344e48af2eb9179e17da7a';

  basicAuth = `Basic ${btoa(`${this.appKey}:${this.appSecret}`)}`;

  currentUser: { email: string; password: string } = null;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${this.basicAuth}`
    })
  }


  get isLogged() {
    return !!this.currentUser;
  };

  constructor(private http: HttpClient) {
    const currentUser = localStorage.getItem("current-user");
    this.currentUser = currentUser ? JSON.parse(currentUser) : null;
  };

  login(username: string, password: string) {
    console.log(this.basicAuth);
    return this.http.post(`${this.baseURL}/user/${this.appKey}/login`, { username, password }, this.httpOptions);
  };

  register(username: string, password: string) {
    return this.http.post(`${this.baseURL}/user/${this.appKey}/`, { username, password }, this.httpOptions);
  };

  logout() {
    return this.http.post(`${this.baseURL}/user/${this.appKey}/logout`, {});
  };






  // baseURL:string = 'https://baas.kinvey.com';
  // appKey: string = 'kid_S1pjzCdaH';
  // appSecret: string = '9283028c31344e48af2eb9179e17da7a';

  // createAythorization(type: string): string {
  //   return type === "Basic"
  //       ? `Basic ${btoa(`${this.appKey}:${this.appSecret}`)}`
  //       : `Kinvey ${sessionStorage.getItem('authtoken')}`
  // }



}
