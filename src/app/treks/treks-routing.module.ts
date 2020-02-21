import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeEmptyComponent } from './home-empty/home-empty.component';
import { RequestComponent } from './request/request.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../auth/auth.guard';


const treksRoutes: Routes = [
  {
    path: 'treks',
    children: [
      {
        path: 'request',
        component: RequestComponent
      },
      {
        path: 'empty',
        component: HomeEmptyComponent
      },
      {
        path: 'details/:id',
        component: DetailsComponent
      },
      {
        path: 'edit',
        component: EditComponent
      },
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
      },
    ],
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(treksRoutes)],
  exports: [RouterModule]
})
export class TreksRoutingModule { }
