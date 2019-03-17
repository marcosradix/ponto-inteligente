import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './components/login/login.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material";


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatButtonModule
    
  ],
  exports: [
    LoginComponent,
    MatButtonModule
    ]
})
export class LoginModule { }
