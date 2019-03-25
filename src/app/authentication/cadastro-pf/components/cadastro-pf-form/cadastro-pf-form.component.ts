import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-pf-form',
  templateUrl: './cadastro-pf-form.component.html',
  styleUrls: ['./cadastro-pf-form.component.css']
})
export class CadastroPfFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  cadastrarPF(){
    console.log("ok");
  }
}
