import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) { }

  login(){

  this.authService.login().subscribe(() => {
    if (this.authService.isLoggedIn){

      let redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/user';

      this.router.navigateByUrl(redirect);
    }
  })
  }

  ngOnInit() {
  }

}
