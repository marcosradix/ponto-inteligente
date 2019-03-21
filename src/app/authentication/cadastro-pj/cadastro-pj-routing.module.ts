import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroPjFormComponent } from './components/cadastro-pj-form/cadastro-pj-form.component';
import { CadastroPjComponent } from './components/cadastro-pj/cadastro-pj.component';


const routes: Routes = [
  {path: "", component: CadastroPjComponent, children:[{
    path: "", component: CadastroPjFormComponent
  }
  ]},
  // {path: "new", component: CadastroPjFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroPjRoutingModule { }
