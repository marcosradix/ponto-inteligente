import { SharedModule } from './../../shared/shared/shared.module';
import { LoginService } from './services/login.service';
import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    SharedModule,
    LoginRoutingModule,
  ],

  providers:[
    LoginService,
  ]

})
export class LoginModule { }
