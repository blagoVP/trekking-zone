import { Component, OnInit } from '@angular/core';
import { TreksService } from '../treks.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  treks$: Observable<any[]>;

  constructor(private treksService: TreksService) { }

  ngOnInit() {
    this.treks$ = this.treksService.loadAllTreks();

  }

}
