import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Itreks } from './treks';

@Injectable()

export class TreksService {

  appKey: string = 'kid_S1pjzCdaH';

  constructor(private http: HttpClient) { }

selectedTrek: Itreks;

   loadAllTreks(){
return this.http.get<Itreks[]>(`appdata/${this.appKey}/treks`);
   }

   loadSingleTrek(id: string){
    return this.http.get<Itreks>(`appdata/${this.appKey}/treks/${id}`);
   }

   putTrek(data: Itreks, id: string){
    return this.http.put(`appdata/${this.appKey}/treks/${id}`, data);
   }

   postTrek(data: Itreks){
    return this.http.post(`appdata/${this.appKey}/treks`, data);
   }

   deleteTrek(id: string){
    return this.http.delete<Itreks>(`appdata/${this.appKey}/treks/${id}`);
   }




}
