import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../../error-styles.scss']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) { }

  loginHandler(data) {
    console.log(data);
  }


  ngOnInit() {
  }

}
