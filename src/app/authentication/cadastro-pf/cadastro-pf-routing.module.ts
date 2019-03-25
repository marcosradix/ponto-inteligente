import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroPfComponent } from './components/cadastro-pf/cadastro-pf.component';

const routes: Routes = [
  {path: "", component: CadastroPfComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroPfRoutingModule { }
