import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TrekkingZone';

  get isReady(): boolean {
    return this.authService.currentUser !== undefined;
  }


  constructor(private authService: AuthService) {

  }

}
