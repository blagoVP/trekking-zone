import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../../error-styles.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  loginHandler({ username, password }: { username: string, password: string }) {
    this.authService.login(username, password).subscribe(userInfo => {
      localStorage.setItem("token", `${userInfo._kmd.authtoken}`);
      this.router.navigate(['/treks']);
    }, console.error)

  }


  ngOnInit() {
  }

}
