import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

  logout() {
    if (localStorage.getItem("token")) {
      this.authService.logout().subscribe(() => {
        localStorage.clear();
        this.router.navigate(['']);
      });
    } else {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() {
  }

}
