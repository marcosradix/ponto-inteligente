import { NgModule } from '@angular/core';

import { CadastroPjRoutingModule } from './cadastro-pj-routing.module';
import { CadastroPjComponent } from './components/cadastro-pj/cadastro-pj.component';
import { CadastroPjFormComponent } from './components/cadastro-pj-form/cadastro-pj-form.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { CadastroPjService } from './services/cadastro-pj.service';

@NgModule({
  declarations: [CadastroPjComponent, CadastroPjFormComponent],
  imports: [
    SharedModule,
    CadastroPjRoutingModule
  ],
  providers:[
    CadastroPjService
  ]
})
export class CadastroPjModule { }
