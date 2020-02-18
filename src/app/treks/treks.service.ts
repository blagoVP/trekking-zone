import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TreksService {

  constructor(private http: HttpClient) {

   }

   loadAllTreks(){
//return this.get<any[]>(url)
   }

}
