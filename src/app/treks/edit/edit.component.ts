import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

location = "current location from API";
date = "current date from API";
description = "current desc from API";
imageUrl = "current ImageUrl from API";


  constructor() { }

  ngOnInit() {
  }

  editHandler(data){
    console.log(data);
  }

}
