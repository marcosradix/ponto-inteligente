import { Login } from './../../models/login.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators as valid } from "@angular/forms";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

form:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private snackBar:MatSnackBar,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.gerarForm();
  }
  gerarForm(): void {
  this.form = this.formBuilder.group({
    email: ['admin@empresa.com', [valid.required, valid.email]],
    senha: ['123456', [valid.required, valid.minLength(6)]]
  });
  }

  logar(){
    if(this.form.invalid){
      this.snackBar.open(
        "Dados inválidos",
        "Erro",
        {
          duration: 1000
        });
        return;
    }
    const login: Login = this.form.value;
    this.loginService.logar(login).subscribe(data =>{
      console.log(JSON.stringify(login));
      localStorage['token'] = data['data']['token'];
      console.log("token : "+data['data']['token']);
      const usuarioData = JSON.parse(
        atob(data['data']['token'].split('.')[1]));
        console.log(JSON.stringify(usuarioData));
        if(usuarioData['role'] =='ROLE_ADMIN'){
          alert("deve redirecionar para página de admin");
          const d = {nome: "marcos", email:"marcosradix@gmail.com"}
          localStorage.setItem("ok", JSON.stringify(d));
        }else{
          alert("deve redirecionar para usuário");
        }
        this.router.navigate(["/home"]);
    },error =>{
      console.log(JSON.stringify(error));
      let msg: string = "Tente novamente mais tarde.";
      if(error['status'] == '401'){
        msg = "Email e ou senha inválido(s)."
      }
      this.snackBar.open(msg, "Erro", {duration: 10000})
    }
    );
    
  }

}
