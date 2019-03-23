import { CadastroPJ } from './../../models/cadastro-pj.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators as valid } from "@angular/forms";
import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";
@Component({
  selector: 'app-cadastro-pj-form',
  templateUrl: './cadastro-pj-form.component.html',
  styleUrls: ['./cadastro-pj-form.component.css']
})
export class CadastroPjFormComponent implements OnInit {

  form: FormGroup;
  constructor(
    private fb:FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit() {
    this.gerarForm();
  }
  gerarForm() {
    this.form = this.fb.group({
      nome: ["" , [valid.required, valid.minLength(3)]],
      email: ["" , [valid.required , valid.email]],
      senha: ["" , [valid.required , valid.minLength(6)]],
      cpf: ["" , [valid.required]],
      razaoSocial: ["" , [valid.required , valid.minLength(5)]],
      cnpj: ["" , [valid.required]]
    });
  }
cadastrarPJ(){
  if(this.form.invalid){
    return;
  }
  const cadastroPJ: CadastroPJ = this.form.value;
  alert(JSON.stringify(cadastroPJ));
}
}
