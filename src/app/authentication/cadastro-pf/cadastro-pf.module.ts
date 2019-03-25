import { NgModule } from '@angular/core';

import { CadastroPfRoutingModule } from './cadastro-pf-routing.module';
import { CadastroPfComponent } from './components/cadastro-pf/cadastro-pf.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  declarations: [CadastroPfComponent],
  imports: [
    SharedModule,
    CadastroPfRoutingModule
  ]
})
export class CadastroPfModule { }
