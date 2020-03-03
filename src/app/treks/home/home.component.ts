import { Component, OnInit } from '@angular/core';
import { TreksService } from '../treks.service';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  treks$: Observable<any[]>;

  constructor(private treksService: TreksService, activatedRoute: ActivatedRoute) {
    this.treks$ = of(activatedRoute.snapshot.data.treksList);
   }

  ngOnInit() {

  }

}
