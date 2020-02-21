import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TreksService {

  appKey: string = 'kid_S1pjzCdaH';



  constructor(private http: HttpClient) {

   }

   loadAllTreks(){
    const token = localStorage.getItem('token')
    const httpOptionsUser = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Kinvey ${token}`
      })
    }
return this.http.get<any[]>(`https://baas.kinvey.com/appdata/${this.appKey}/treks`, httpOptionsUser)
   }






}
