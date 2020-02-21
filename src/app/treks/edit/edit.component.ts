import { Component, OnInit } from '@angular/core';
import { TreksService } from '../treks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss', '../../../error-styles.scss']
})
export class EditComponent implements OnInit {

  trek = this.trekService.selectedTrek;

  location = this.trek.location;
  date = this.trek.dateTime;
  description = this.trek.description;
  imageUrl = this.trek.imageURL;
  organizer = this.trek.organizer;
  likes = this.trek.likes;

  id = this.trek._id;

  constructor(private trekService: TreksService, private router: Router) { }

  ngOnInit() {

  }

  editHandler(data) {
    this.trekService.putTrek(data, this.id).subscribe(() => {
      this.router.navigate(['treks']);
    });
  }

}
