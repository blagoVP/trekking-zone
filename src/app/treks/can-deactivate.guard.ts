import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { promise } from 'protractor';

export interface canComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}


@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<canComponentDeactivate> {
  canDeactivate(component: canComponentDeactivate) {
    return component.canDeactivate ? component.canDeactivate(): true;
  }

}
/*
TODO: Implemented reusable non-specific CanDeactivate guard. Next: to consider
if it is necessery to make more specific one..
State on angular.io: "Alternatively, you could make a component-specific CanDeactivate guard"
*/
