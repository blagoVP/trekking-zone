import { Component, OnInit } from '@angular/core';
import { TreksService } from '../treks.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss', '../../../error-styles.scss']
})
export class RequestComponent implements OnInit {

  constructor(private trekService: TreksService, private router: Router, private authService: AuthService) { }

organizer = this.authService.getUsername();

  requestHandler(data) {
    console.log(data);
    this.trekService.postTrek(data).subscribe(() => {
      this.router.navigate(['treks']);
    });
  }
  ngOnInit() {
  }

}
