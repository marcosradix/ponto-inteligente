import { CadastroPfFormComponent } from './components/cadastro-pf-form/cadastro-pf-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroPfComponent } from './components/cadastro-pf/cadastro-pf.component';

const routes: Routes = [
  {path: "", component: CadastroPfComponent, children:[{path : "", component : CadastroPfFormComponent}]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroPfRoutingModule { }
