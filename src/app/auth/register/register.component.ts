import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { userInfo } from 'os';

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
    this.authService.register(username, password).subscribe( userInfo => {
      console.log(userInfo)
      this.router.navigate(['']);
    }, console.error)

  }

}
