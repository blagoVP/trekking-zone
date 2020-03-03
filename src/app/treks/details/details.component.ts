import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Itreks } from '../treks';
import { TreksService } from '../treks.service';
import { of } from 'rxjs';

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
    of(this.activatedRoute.snapshot.data.detailsLoad).subscribe(value => {
      this.trekService.selectedTrek = value;
      this.trek = value;
    })
  }

  get organizer() {
    return this.trek.organizer === localStorage.getItem('username');
  }

  deleteTrek() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.trekService.deleteTrek(id).subscribe(() => {
      this.router.navigate(['treks'])
    })
  }

  likeTrek() {
    const id = this.activatedRoute.snapshot.params['id'];
    let data = this.trek;
    data.likes = data.likes + 1;
    this.trekService.putTrek(data, id).subscribe(() => {
      this.router.navigate(['treks']);
    })
  }

}
