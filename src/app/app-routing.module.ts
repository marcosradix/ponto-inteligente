import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {path: "", redirectTo: "/reports", pathMatch: "full"},
  {path: "", loadChildren: "./authentication/login/login.module#LoginModule"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
