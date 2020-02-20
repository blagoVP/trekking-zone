import { Component, OnInit } from '@angular/core';
import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) { }


  ngOnInit() {

  }

}
