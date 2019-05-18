import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { ListagemComponent } from './components/listagem/listagem.component';
import { LancamentoComponent } from './components/lancamento/lancamento.component';
import { SharedModule } from '../shared/shared/shared.module';
import { FuncionarioComponent } from './funcionario.component';

@NgModule({
  declarations: [ListagemComponent, LancamentoComponent, FuncionarioComponent],
  imports: [
    SharedModule,
    CommonModule,
    FuncionarioRoutingModule
  ]
})
export class FuncionarioModule { }
