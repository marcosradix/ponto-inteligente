import { MatSnackBar } from '@angular/material';
import { Tipo } from './../../../shared/models/tipo.enum';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
declare var navigator : any;

@Component({
  selector: 'app-lancamento',
  templateUrl: './lancamento.component.html',
  styleUrls: ['./lancamento.component.css']
})
export class LancamentoComponent implements OnInit {


  private dataAtualEn: string;
  dataAtual: string;
  geoLocation: string;
  ultimoTipoLancado: string;


  constructor(
    private snackBar: MatSnackBar,
    private router:Router
    ) { }

  ngOnInit() {
    this.dataAtual = moment().format('DD/MM/YYYY HH:mm:ss');
    this.dataAtualEn = moment().format('DD-MM-YYYY HH:mm:ss');
    this.obterGeoLocation();
    this.ultimoTipoLancado = "";
    this.obterUltimoLancamento();
  }
  obterUltimoLancamento() {
    this.ultimoTipoLancado = "";
  }
  obterGeoLocation():void {
   if(navigator.geoLocation){
    navigator.geoLocation.getCurrentPosition(position =>{
      this.geoLocation = `${position.coords.latitude}, ${position.coords.longitude}`
    });
   }
  }

  obterUrlMapa():string{
    return `${environment.urlMapa}${this.geoLocation}`;
  }

iniciarTrabalho(){
  this.cadastrar(Tipo.INICIO_TRABALHO);
}
  cadastrar(tipoAtividade: Tipo) {
    this.snackBar.open(
      `Tipo: ${tipoAtividade}, data atual inglês: ${this.dataAtualEn},
      localização: ${this.geoLocation}`, "Alerta", {duration: 500 });
  }

terminarTrabalho(){
  this.cadastrar(Tipo.TERMINO_TRABALHO);
}

terminarAlmoco(){
  this.cadastrar(Tipo.TERMINO_ALMOCO);
}

iniciarAlmoco(){
  this.cadastrar(Tipo.INICIO_ALMOCO);
}

exibirInicioDeTrabalho():boolean{
  return this.ultimoTipoLancado == '' || this.ultimoTipoLancado == Tipo.TERMINO_TRABALHO;
}

exibirTerminoDeTrabalho():boolean{
  return this.ultimoTipoLancado == Tipo.INICIO_TRABALHO || this.ultimoTipoLancado == Tipo.TERMINO_ALMOCO;
}

exibirInicioDeAlmoco():boolean{
  return this.ultimoTipoLancado ==  Tipo.INICIO_TRABALHO;
}
exibirTerminoDeAlmoco():boolean{
  return this.ultimoTipoLancado ==  Tipo.INICIO_ALMOCO;
}
}
