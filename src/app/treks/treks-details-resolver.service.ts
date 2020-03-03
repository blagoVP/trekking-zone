import { Injectable } from '@angular/core';
import { TreksService } from './treks.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { Itreks } from './treks';
import { take, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TreksDetailsResolverService implements Resolve<Itreks> {

  constructor(private treksService: TreksService, private router: Router) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<Itreks> | Observable<never> {

    let id = route.paramMap.get('id');

    return this.treksService.loadSingleTrek(id);
    // .pipe(
    //   take(1),
    //   mergeMap(trek => {
    //     if (trek) {
    //       return of(trek);
    //     } else {
    //       this.router.navigate(["/treks/empty"]);
    //       return EMPTY
    //     }
    //   })
    // );

  }


}
