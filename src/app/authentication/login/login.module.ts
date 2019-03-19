import { LoginService } from './services/login.service';
import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './components/login/login.component';
import { CommonModule } from '@angular/common';
import {
   MatButtonModule,
    MatInputModule, 
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule
  }  from "@angular/material";
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    FlexLayoutModule,

    LoginRoutingModule,
  ],

  providers:[
    LoginService,
  ]

})
export class LoginModule { }
