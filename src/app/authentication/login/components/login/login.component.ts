import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators as valid } from "@angular/forms";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";
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
    private router: Router
  ) { }

  ngOnInit() {
    this.gerarForm();
  }
  gerarForm(): void {
  this.form = this.formBuilder.group({
    email: ['', [valid.required, valid.email]],
    senha: ['', [valid.required, valid.minLength(6)]]
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
    alert(JSON.stringify(this.form.value));
  }

}
