import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: "", redirectTo: "/login", pathMatch: "full"},
  {path: "cadastro-pj", loadChildren: "./authentication/cadastro-pj/cadastro-pj.module#CadastroPjModule"},
  {path: "cadastro-pf", loadChildren: "./authentication/cadastro-pf/cadastro-pf.module#CadastroPfModule"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
