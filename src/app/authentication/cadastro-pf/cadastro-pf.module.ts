import { NgModule } from '@angular/core';

import { CadastroPfRoutingModule } from './cadastro-pf-routing.module';
import { CadastroPfComponent } from './components/cadastro-pf/cadastro-pf.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { CadastroPfFormComponent } from './components/cadastro-pf-form/cadastro-pf-form.component';
import { CadastrarPfService } from './services/cadastrar-pf.service';

@NgModule({
  declarations: [CadastroPfComponent, CadastroPfFormComponent],
  imports: [
    SharedModule,
    CadastroPfRoutingModule
  ],
  providers:[
    CadastrarPfService
  ]
})
export class CadastroPfModule { }
