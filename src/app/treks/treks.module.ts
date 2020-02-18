import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreksRoutingModule } from './treks-routing.module';
import { RequestComponent } from './request/request.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { HomeEmptyComponent } from './home-empty/home-empty.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms'
// import { ListTreksPipe } from './list-treks.pipe';



@NgModule({
  declarations: [
    RequestComponent,
    EditComponent,
    DetailsComponent,
    HomeEmptyComponent,
    HomeComponent,
    // ListTreksPipe
  ],

  imports: [
    CommonModule,
    FormsModule,
    TreksRoutingModule
  ]
})
export class TreksModule { }
