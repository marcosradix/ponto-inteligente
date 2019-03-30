import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators as valid } from "@angular/forms";
import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";
import { CpfValidator , CnpjValidator} from '../../../../shared/validators';

@Component({
  selector: 'app-cadastro-pf-form',
  templateUrl: './cadastro-pf-form.component.html',
  styleUrls: ['./cadastro-pf-form.component.css']
})
export class CadastroPfFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

form: FormGroup;

  ngOnInit() {
    this.gerarForm();
  }
  gerarForm() {
    this.form = this.fb.group({
      nome: ["Administrador", [valid.required , valid.minLength(3)]],
      email: ["admin@empresa.com", [valid.required , valid.email]],
      senha: ["123456", [valid.required , valid.minLength(6)]],
      cpf: ["781.592.260-04", [valid.required , CpfValidator]],
      cnpj: ["74.717.505/0001-08", [valid.required , CnpjValidator]]
    });
  }
  cadastrarPF(){
    if(this.form.invalid){
      return;
    }
    alert(JSON.stringify(this.form.value) );
    console.log("ok");
  }
}
