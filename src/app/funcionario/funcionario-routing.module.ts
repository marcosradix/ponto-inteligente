import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListagemComponent } from './components/listagem/listagem.component';
import { LancamentoComponent } from './components/lancamento/lancamento.component';
import { FuncionarioComponent } from './funcionario.component';

const routes: Routes = [
  {path: "", component: FuncionarioComponent, children:[
    {path: 'listar', component: ListagemComponent},
    {path: "lancamento", component: LancamentoComponent},
    {path: "", redirectTo: "lancamento", pathMatch: "full"}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionarioRoutingModule { }
