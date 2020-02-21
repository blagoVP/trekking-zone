import { Component, OnInit } from '@angular/core';
import { notEqual } from 'assert';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss', '../../../error-styles.scss']
})
export class RequestComponent implements OnInit {

  constructor() {

   }

  requestHandler(data){
    console.log(data);

  }

  ngOnInit() {
  }

}
