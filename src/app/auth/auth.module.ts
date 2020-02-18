import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms'
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PasswordMatchDirective } from './validators/directives/password-match.directive';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, PasswordMatchDirective],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ],
  exports: [PasswordMatchDirective]
})
export class AuthModule { }
