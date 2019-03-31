import { CadastrarPfService } from './../../services/cadastrar-pf.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators as valid } from "@angular/forms";
import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";
import { CpfValidator , CnpjValidator} from '../../../../shared/validators';
import { CadastroPF } from '../../models/cadastro-pf.model';

@Component({
  selector: 'app-cadastro-pf-form',
  templateUrl: './cadastro-pf-form.component.html',
  styleUrls: ['./cadastro-pf-form.component.css']
})
export class CadastroPfFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private cadastrarPfService : CadastrarPfService
  ) { }

form: FormGroup;

  ngOnInit() {
    this.gerarForm();
  }
  gerarForm() {
    this.form = this.fb.group({
      nome: ["Marcos Ferreira", [valid.required , valid.minLength(3)]],
      email: ["myuser@empresa.com", [valid.required , valid.email]],
      senha: ["123456", [valid.required , valid.minLength(6)]],
      cpf: ["041.276.123-80", [valid.required , CpfValidator]],
      cnpj: ["74.717.505/0001-08", [valid.required , CnpjValidator]]
    });
  }
  cadastrarPF(){
    if(this.form.invalid){
      return;
    }
    const cadastroPF: CadastroPF = this.form.value;
    this.cadastrarPfService.cadastrar(cadastroPF).subscribe(data =>{
      console.log("cadastrando.....");
      const msg: string = "Realizar login para acessar o sistema.";
      this.snackBar.open(msg,"Sucesso",{duration: 5000});
      this.router.navigate(["/login"]);
    }, erro =>{
      let msg: string = "Tente novamente mais tarde.";
      if(erro.status == 400){
        msg = erro.error.errors.join(" ");
      }
      this.snackBar.open(msg, "Erro",{duration: 5000});
      console.log(erro);
    });
    return false;
  }
}
