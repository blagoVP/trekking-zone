import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Iuser } from '../user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../../../error-styles.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  registerHandler({ username, passwords: { password } }: { username: string, passwords: { password: string } }) {
    this.authService.register(username, password).subscribe((userInfo: Iuser) => {
      localStorage.setItem("token", `${userInfo._kmd.authtoken}`);
      localStorage.setItem("username", `${userInfo.username}`);
      this.router.navigate(['/treks']);
    }, console.error)

  }

}
