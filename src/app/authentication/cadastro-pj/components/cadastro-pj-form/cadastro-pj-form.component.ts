import { CadastroPjService } from './../../services/cadastro-pj.service';
import { CadastroPJ } from './../../models/cadastro-pj.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators as valid } from "@angular/forms";
import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";
import { CpfValidator , CnpjValidator} from '../../../../shared/validators';
@Component({
  selector: 'app-cadastro-pj-form',
  templateUrl: './cadastro-pj-form.component.html',
  styleUrls: ['./cadastro-pj-form.component.css']
})
export class CadastroPjFormComponent implements OnInit {

  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private pjService: CadastroPjService
  ) { }

  ngOnInit() {
    this.gerarForm();
  }
  gerarForm() {
    this.form = this.fb.group({
      nome: ["Administrador", [valid.required, valid.minLength(3)]],
      email: ["user@empresa.com", [valid.required, valid.email]],
      senha: ["123456", [valid.required, valid.minLength(6)]],
      cpf: ["781.592.260-04", [valid.required, CpfValidator]],
      razaoSocial: ["Minha Empresa", [valid.required, valid.minLength(5)]],
      cnpj: ["74.717.505/0001-08", [valid.required, CnpjValidator]]
    });
  }
  cadastrarPJ() {
    if (this.form.invalid) {
      return;
    }
    const cadastroPJ: CadastroPJ = this.form.value;
    this.pjService.cadastrar(cadastroPJ).subscribe(data => {
      console.log("Cadastrando usuário.");
      const msg :string ="Realize o login para acessar o sistema.";
      this.snackBar.open(msg, "Sucesso", {duration: 5000});
      this.router.navigate(["/login"]);
    },erro =>{
      console.log(JSON.stringify(erro));
      let msg :string = "Tente novamente mais tarde.";
      if(erro.status == 400){
        msg = erro.error.errors.join(' ');
      }
      if(erro.status == 401){
        msg = "Acesso negado. Você deve estar autenticado no sistema";
      }
      this.snackBar.open(msg, "Erro", {duration:5000});
    });
    return false;
  }
}
