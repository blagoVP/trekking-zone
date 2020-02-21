import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Itreks } from '../treks';
import { TreksService } from '../treks.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private trekService: TreksService) { }

trek: Itreks;

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.trekService.loadSingleTrek(id).subscribe(value =>{
      this.trekService.selectedTrek = value;
      this.trek = value;
    })
  }

  likeTrek(){

  }

}
