import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
   MatInputModule, 
   MatListModule,
   MatTooltipModule,
   MatIconModule,
   MatSnackBarModule,
   MatToolbarModule,
   MatTableModule,
   MatPaginatorModule,
   MatSortModule,
   MatCardModule
 }  from "@angular/material";
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MascaraDirective } from '../directives/mascara.directive';


@NgModule({
  declarations: [MascaraDirective],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule, 
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule
  ],
  exports:[
    CommonModule,
    MatButtonModule,
    MatInputModule, 
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MascaraDirective,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class SharedModule { }
