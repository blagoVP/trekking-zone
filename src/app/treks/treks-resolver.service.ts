import { Injectable } from '@angular/core';
import { TreksService } from './treks.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { Itreks } from './treks';
import { take, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TreksResolverService implements Resolve<Array<Itreks>> {

  constructor(private treksService: TreksService, private router: Router) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<Array<Itreks>> | Observable<never> {

    return this.treksService.loadAllTreks().pipe(
      take(1),
      mergeMap(treks => {
        if (treks.length) {
          return of(treks);
        } else {
          this.router.navigate(["/treks/empty"]);
          return EMPTY
        }
      })
    );

  }


}
